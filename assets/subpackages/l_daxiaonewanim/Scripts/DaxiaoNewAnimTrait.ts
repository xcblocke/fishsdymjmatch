import { RandomGenerator } from '../../../Scripts/core/simulator/structures/RandomGenerator';
import { EDaxiaoPlayAnimType } from '../../../Scripts/base/DaxiaoClearEffectBehavior';
import { HaiyangAnimPlayer } from './HaiyangAnimPlayer';
import { ShipinAnimPlayer } from './ShipinAnimPlayer';
import { YinxiangAnimPlayer } from './YinxiangAnimPlayer';
import { ZheshanAnimPlayer } from './ZheshanAnimPlayer';
import Trait from '../../../Scripts/framework/trait/Trait';
var s = {
  Yinxiang: "Yinxiang",
  Shipin: "Shipin",
  Zheshan: "Zheshan",
  Haiyang: "Haiyang"
};
@mj.trait
@mj.class("DaxiaoNewAnimTrait")
export default class DaxiaoNewAnimTrait extends Trait {
  _animConfig = [];
  _curTypeConfig = null;
  static traitKey = "DaxiaoNewAnim";
  onLoad() {
    super.onLoad.call(this);
    this._animConfig.push({
      type: s.Yinxiang,
      playAnimType: EDaxiaoPlayAnimType.Yinxiang,
      bundle: "l_daxiaoyinxiang",
      ignoreShowTipEffect: true,
      nums: [5, 5]
    }, {
      type: s.Shipin,
      playAnimType: EDaxiaoPlayAnimType.Shipin,
      bundle: "l_daxiaoshipin",
      ignoreShowTipEffect: false,
      nums: [4, 4],
      flowLight: {
        path: "spine/idle/gameplay_flowingLight",
        bundle: "l_daxiaoshipin",
        anim: "idle"
      }
    }, {
      type: s.Zheshan,
      playAnimType: EDaxiaoPlayAnimType.Zheshan,
      bundle: "l_daxiaozheshan",
      ignoreShowTipEffect: false,
      nums: [3, 3],
      flowLight: {
        path: "spine/idle/gameplay_flowingLight",
        bundle: "l_daxiaozheshan",
        anim: "idle"
      }
    }, {
      type: s.Haiyang,
      playAnimType: EDaxiaoPlayAnimType.Haiyang,
      bundle: "l_daxiaohaiyang",
      ignoreShowTipEffect: false,
      nums: [3, 5],
      ignoreNums: [4],
      flowLight: {
        path: "spine/idle/gameplay_flowingLight",
        bundle: "l_daxiaohaiyang",
        anim: "idle"
      }
    });
  }
  onDaxiaoAni_extendAnim(t, e) {
    e({
      returnVal: true,
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  getType(t) {
    var e,
      i,
      a = [];
    try {
      for (var o = __values(this._animConfig), n = o.next(); !n.done; n = o.next()) {
        var s = n.value;
        t.length >= s.nums[0] && t.length <= s.nums[1] && (s.ignoreNums && s.ignoreNums.includes(t.length) || a.push(s));
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (i = o.return) && i.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    var l = new RandomGenerator(),
      h = l.random() < 0.5;
    return a.length > 0 && h ? a[l.randomInt(0, a.length)] : null;
  }
  onDaxiaoTipBhr_showTip(t, e) {
    this._curTypeConfig = null;
    var i = t.args[0];
    this._curTypeConfig = this.getType(i);
    if (this._curTypeConfig && this._curTypeConfig.flowLight) {
      t.args[1] = this._curTypeConfig.flowLight.path;
      t.args[2] = this._curTypeConfig.flowLight.bundle;
    }
    if (this._curTypeConfig && this._curTypeConfig.ignoreShowTipEffect) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      if (this._curTypeConfig) {
        e({
          isBreak: true
        });
      } else {
        e();
      }
    }
  }
  onDaxiaoBhr_playAni(t, e) {
    if (this._curTypeConfig) {
      t.ins.setAnimType(this._curTypeConfig.playAnimType);
      if (this.extendPlay(t.ins, t.args[1])) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      } else {
        e();
      }
    } else e();
  }
  extendPlay(t, e) {
    if (this._curTypeConfig.type === s.Yinxiang) {
      YinxiangAnimPlayer.playFullAnimation(t, e);
      return true;
    }
    if (this._curTypeConfig.type === s.Shipin) {
      ShipinAnimPlayer.playFullAnimation(t, e);
      return true;
    }
    if (this._curTypeConfig.type === s.Zheshan) {
      ZheshanAnimPlayer.playFullAnimation(t, e);
      return true;
    }
    if (this._curTypeConfig.type === s.Haiyang) {
      HaiyangAnimPlayer.playFullAnimation(t, e);
      return true;
    }
  }
}
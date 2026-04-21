import { RandomGenerator } from '../../../Scripts/core/simulator/structures/RandomGenerator';
import { EDaxiaoPlayAnimType } from '../../../Scripts/base/DaxiaoClearEffectBehavior';
import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import { CaiDaiAnimPlayer } from './CaiDaiAnimPlayer';
import { GardenAnimPlayer } from './GardenAnimPlayer';
import { GuofengAnimPlayer } from './GuofengAnimPlayer';
import { HudieAnimPlayer } from './HudieAnimPlayer';
import { MaxituanAnimPlayer } from './MaxituanAnimPlayer';
var c = {
  CaiDai: "CaiDai",
  Maxituan: "Maxituan",
  Garden: "Garden",
  Guofeng: "Guofeng",
  Hudie: "Hudie"
};
@mj.trait
@mj.class("DaxiaoAnimTrait")
export default class DaxiaoAnimTrait extends Trait {
  _animConfig = [];
  _curTypeConfig = null;
  static traitKey = "DaxiaoAnim";
  onLoad() {
    var t, i;
    super.onLoad.call(this);
    this._animConfig = [{
      type: c.CaiDai,
      playAnimType: EDaxiaoPlayAnimType.CaiDai,
      bundle: "r_daxiaocaidai",
      ignoreShowTipEffect: true,
      nums: [4, 10]
    }, {
      type: c.Maxituan,
      playAnimType: EDaxiaoPlayAnimType.Maxituan,
      bundle: "r_daxiaomaxituan",
      flowLight: {
        path: "spine/maxituan/gameplay_flowingLight_mx",
        bundle: "r_daxiaomaxituan",
        anim: "gameplay_flowingLight_mx_idle"
      },
      ignoreShowTipEffect: false,
      nums: [7, 7]
    }, {
      type: c.Garden,
      playAnimType: EDaxiaoPlayAnimType.Garden,
      bundle: "r_daxiaogarden",
      ignoreShowTipEffect: false,
      nums: [6, 9],
      flowLight: {
        path: "spine/garden/gameplay_flowingLight",
        bundle: "r_daxiaogarden",
        anim: "idle"
      }
    }];
    this.extendAnims();
    try {
      for (var n = __values(this._animConfig), o = n.next(); !o.done; o = n.next()) {
        var a = o.value;
        LowPriorityBundleLoader.getInstance().addTask(a.bundle, ELowPriorityBundlePriority.DefaultDaXiao);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (i = n.return) && i.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  getType(e) {
    var t,
      i,
      n = [];
    try {
      for (var o = __values(this._animConfig), a = o.next(); !a.done; a = o.next()) {
        var c = a.value;
        LowPriorityBundleLoader.getInstance().isBundlePreLoaded(c.bundle) && e.length >= c.nums[0] && e.length <= c.nums[1] && (c.ignoreNums && c.ignoreNums.includes(e.length) || n.push(c));
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (i = o.return) && i.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
    var l = new RandomGenerator(),
      d = l.random() < 0.5;
    return n.length > 0 && d ? n[l.randomInt(0, n.length)] : null;
  }
  onDaxiaoTipBhr_showTip(e, t) {
    this._curTypeConfig = null;
    var i = e.args[0];
    this._curTypeConfig = this.getType(i);
    if (this._curTypeConfig && this._curTypeConfig.flowLight) {
      e.args[1] = this._curTypeConfig.flowLight.path;
      e.args[2] = this._curTypeConfig.flowLight.bundle;
    }
    if (this._curTypeConfig && this._curTypeConfig.ignoreShowTipEffect) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      if (this._curTypeConfig) {
        t({
          isBreak: true
        });
      } else {
        t();
      }
    }
  }
  onDaxiaoBhr_playAni(e, t) {
    if (this._curTypeConfig) {
      e.ins.setAnimType(this._curTypeConfig.playAnimType);
      if (this._curTypeConfig.type !== c.CaiDai) {
        if (this._curTypeConfig.type !== c.Maxituan) {
          if (this._curTypeConfig.type !== c.Garden) {
            if (this.extendPlay(e.ins, e.args[1])) {
              t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
              });
            } else {
              t();
            }
          } else {
            GardenAnimPlayer.playFullAnimation(e.ins, e.args[1]);
            t({
              returnType: TraitCallbackReturnType.return,
              isBreak: true
            });
          }
        } else {
          MaxituanAnimPlayer.playFullAnimation(e.ins, e.args[1]);
          t({
            returnType: TraitCallbackReturnType.return,
            isBreak: true
          });
        }
      } else {
        CaiDaiAnimPlayer.playCaiDaiAnim(e.ins, e.args[1]);
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      }
    } else t();
  }
  @mj.traitEvent("DaxiaoAni_extendAnim")
  isOpenExtendAnims() {
    return false;
  }
  extendAnims() {
    this.isOpenExtendAnims() && this._animConfig.push({
      type: c.Guofeng,
      playAnimType: EDaxiaoPlayAnimType.Guofeng,
      bundle: "r_daxiaoguofeng",
      ignoreShowTipEffect: false,
      nums: [2, 10],
      flowLight: {
        path: "spine/idle/gameplay_flowingLight_gf",
        bundle: "r_daxiaoguofeng",
        anim: "idle"
      }
    }, {
      type: c.Hudie,
      playAnimType: EDaxiaoPlayAnimType.Hudie,
      bundle: "r_daxiaohudie",
      ignoreShowTipEffect: true,
      nums: [4, 9]
    });
  }
  extendPlay(e, t) {
    if (this.isOpenExtendAnims()) {
      if (this._curTypeConfig.type === c.Guofeng) {
        GuofengAnimPlayer.playFullAnimation(e, t);
        return true;
      }
      if (this._curTypeConfig.type === c.Hudie) {
        HudieAnimPlayer.playFullAnimation(e, t);
        return true;
      }
    }
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { EffectLayer } from '../../../Scripts/constant/EffectLayerEnum';
@mj.trait
@mj.class("WordsScreenFitTrait")
export default class WordsScreenFitTrait extends Trait {
  static traitKey = "WordsScreenFit";
  onLoad() {
    super.onLoad.call(this);
  }
  isLv4Enabled() {
    var t,
      r = mj.getClassByName("MotivationalWordsLv4Trait");
    return true === (null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.eventEnabled);
  }
  onMotivWordsBhv_getSize(t, r) {
    try {
      var o = t.args[0];
      if (this.isLv4Enabled()) {
        var i = [{
          width: 300,
          height: 200
        }, {
          width: 320,
          height: 200
        }, {
          width: 550,
          height: 200
        }, {
          width: 700,
          height: 200
        }, {
          width: 860,
          height: 200
        }][o] || {
          width: 450,
          height: 200
        };
        r({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: i
        });
        return;
      }
      r();
    } catch (t) {
      console.error("[" + WordsScreenFitTrait.traitKey + "] 获取尺寸失败: " + t.message);
      r();
    }
  }
  onMotivWordsBhv_getParent(t, r) {
    try {
      var o = t.ins.context.gameView.getEffectLayer(EffectLayer.Top);
      if (!o || !cc.isValid(o)) {
        r();
        return;
      }
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: o
      });
    } catch (t) {
      console.error("[" + WordsScreenFitTrait.traitKey + "] 获取父节点失败: " + t.message);
      r();
    }
  }
  onMotivWordsBhv_safePos(t, r) {
    try {
      var o = t.ins,
        i = t.args[0],
        n = t.args[1],
        a = t.args[2],
        s = o.clampToScreenWorld(i, n, a);
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: s
      });
    } catch (t) {
      console.error("[" + WordsScreenFitTrait.traitKey + "] 屏幕适配失败: " + t.message);
      r();
    }
  }
}
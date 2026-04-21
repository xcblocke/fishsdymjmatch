import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import Trait from '../../../Scripts/framework/trait/Trait';
import NormalNewRecordBehavior from './NormalNewRecordBehavior';
import { NormalNewRecordEffect } from './NormalNewRecordEffect';
import NormalNewRecordUI from './NormalNewRecordUI';
@mj.trait
@mj.class("NormalNewRecordTrait")
export default class NormalNewRecordTrait extends Trait {
  static traitKey = "NormalNewRecord";
  get limitLevel() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.limitLevel) && void 0 !== t ? t : 3;
  }
  get scoreRoll() {
    var e, t;
    return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.scoreRoll) || void 0 === t || t;
  }
  onLoad() {
    super.onLoad.call(this);
    BehaviorFactory.registerBehavior(BehaviorsMapping.NormalNewRecord, NormalNewRecordBehavior);
  }
  isBreakBestTriggered() {
    return !(NormalGameData.getInstance().getLevelId() - 1 < this.limitLevel) && NormalGameData.getInstance().isBreakBest();
  }
  canShowBreakBest(e) {
    var t, r;
    if (!(e && e._baseInput && e._baseInput._behaviorBuilder && e._options)) return false;
    if (NormalGameData.getInstance().getLevelId() < this.limitLevel) return false;
    var o = e._options;
    if (!o.isBreakBest) return false;
    if (o.isShowFullCombo || o.isShowRewardCombo) return false;
    var i = [BehaviorsMapping.NormalNewRecord, BehaviorsMapping.Fail, BehaviorsMapping.End];
    try {
      for (var n = __values(i), s = n.next(); !s.done; s = n.next()) {
        var p = s.value;
        if (e._baseInput._behaviorBuilder.findNodeByName(p)) return false;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (r = n.return) && r.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    return true;
  }
  onClrNormHlp_tryShwMotWrd(e, t) {
    if (this.canShowBreakBest(e.ins)) {
      t({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      t();
    }
  }
  onClrNormHlp_pushClrFinish(e, t) {
    if (this.canShowBreakBest(e.ins)) {
      var r = new NormalNewRecordEffect({});
      e.ins._baseInput.pushEffect(r, EInsertType.Root);
    }
    t();
  }
  onWinCtrl_initRes(e, t) {
    if (this.isBreakBestTriggered()) {
      var r = e.ins;
      null == r || r.addPreloadRes("Prefab", "prefabs/ui/WinFullComboView");
    }
    t();
  }
  onWinFCombo_isTriggered(e, t) {
    if (this.isBreakBestTriggered()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: false
      });
    } else {
      t();
    }
  }
  onLevelBox_pbDelay(e, t) {
    this.isBreakBestTriggered() && (e.args[0].delayTime += 0.33);
    t();
  }
  onWinVw_showWinVw(e, t) {
    var r = e.ins;
    if (cc.isValid(r) && this.isBreakBestTriggered()) {
      var o = r.getContentNode();
      if (cc.isValid(o)) {
        var i = r.createUISync(NormalNewRecordUI);
        cc.isValid(i) && o.addChild(i);
      }
    }
    t();
  }
  onNorNewRrdUI_canRoll(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: this.scoreRoll
    });
  }
}
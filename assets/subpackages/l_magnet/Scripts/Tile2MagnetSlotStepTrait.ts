import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("Tile2MagnetSlotStepTrait")
export default class Tile2MagnetSlotStepTrait extends Trait {
  _magnetItemNode = null;
  static traitKey = "Tile2MagnetSlotStep";
  isMagnetNodeAlive() {
    return this._magnetItemNode && cc.isValid(this._magnetItemNode) && this._magnetItemNode.activeInHierarchy;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("T2MagSlotStep_preMet")
  isPreconMet() {
    return true;
  }
  @mj.traitEvent("T2MagSlotStep_breakCon")
  isBreakCon() {
    return true;
  }
  getMatchPair() {
    return this.traitData.matchPair || 1;
  }
  getStepCount() {
    return this.localData.stepCount || 0;
  }
  getStepLimit() {
    return this.traitData.stepCount || 0;
  }
  getSlotBarLimit() {
    return this.traitData.slotBarCount || 0;
  }
  onT2MagnetItem_enterAni(t, e) {
    var r = t.ins;
    if (r && cc.isValid(r.node)) {
      this._magnetItemNode = r.node;
      this.localData.stepCount = 0;
    }
    e();
  }
  onT2MagnetItem_onDestroy(t, e) {
    this._magnetItemNode = null;
    e();
  }
  onClearT2Hlp_modifyStepCnt(t, e) {
    this.modifyStepCount();
    e();
  }
  onClearT4Hlp_modifyStepCnt(t, e) {
    this.modifyStepCount();
    e();
  }
  modifyStepCount() {
    if (!this.isMagnetNodeAlive()) {
      var t = UserModel.getInstance().getCurrentGameData().slotBarIds || [],
        e = this.getSlotBarLimit();
      if (t.length >= e) {
        this.localData.stepCount = (this.localData.stepCount || 0) + 1;
      } else {
        this.localData.stepCount = 0;
      }
    }
  }
  onT2MagnetChk_chkCon(t, e) {
    var r = this.isPreconMet();
    r && (r = this.checkCanShow(t.ins));
    if (this.isBreakCon()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      e();
    }
  }
  checkCanShow(t) {
    var e = AdManager.getInstance().checkVideoAdIsReady(),
      r = t.context,
      o = null == r ? void 0 : r.getGameData(),
      n = (null == o ? void 0 : o.slotBarIds) || [],
      a = this.getStepLimit(),
      i = this.getSlotBarLimit();
    return this.localData.stepCount >= a && n.length >= i && e;
  }
}
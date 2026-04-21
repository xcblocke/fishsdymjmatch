import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FlowPropUsageTrait")
export default class FlowPropUsageTrait extends Trait {
  static traitKey = "FlowPropUsage";
  onLoad() {
    var e, a, r;
    super.onLoad.call(this);
    this._introLevels = null !== (e = this._traitData.introLevels) && void 0 !== e ? e : 10;
    this._defaultStage = null !== (a = this._traitData.defaultStage) && void 0 !== a ? a : 2;
    this._upgradeStage = null !== (r = this._traitData.upgradeStage) && void 0 !== r ? r : 3;
    if (void 0 === this.localData.fpuUsedProp || null === this.localData.fpuUsedProp) {
      this.localData.fpuUsedProp = false;
      this.localData.fpuUsedProp = this.localData.fpuUsedProp;
    }
    if (!this.localData.fpuStage) {
      this.localData.fpuStage = this._defaultStage;
      this.localData.fpuStage = this.localData.fpuStage;
    }
  }
  _markPropUsed() {
    if (!this.localData.fpuUsedProp && UserModel.getInstance().isGuideFinished()) {
      this.localData.fpuUsedProp = true;
      this.localData.fpuUsedProp = this.localData.fpuUsedProp;
    }
  }
  onIptT2Shuffle_used(t, e) {
    this._markPropUsed("shuffle");
    e();
  }
  onIptT2HitTips_used(t, e) {
    this._markPropUsed("hint");
    e();
  }
  onIptT2Revert_used(t, e) {
    this._markPropUsed("revert");
    e();
  }
  onFlwLv_getAbilStg(t, e) {
    var a = t.args[0] || 0;
    if (a > 0 && a <= this._introLevels) {
      this.localData.fpuUsedProp = false;
      this.localData.fpuUsedProp = this.localData.fpuUsedProp;
      e();
    } else {
      this._evaluatePropUsage();
      var r = this.localData.fpuStage || this._defaultStage;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: r - 1
      });
    }
  }
  _evaluatePropUsage() {
    var t,
      e = !!this.localData.fpuUsedProp;
    this.localData.fpuUsedProp = false;
    this.localData.fpuUsedProp = this.localData.fpuUsedProp;
    this.localData.fpuStage || this._defaultStage;
    t = e ? this._defaultStage : this._upgradeStage;
    this.localData.fpuStage = t;
    this.localData.fpuStage = this.localData.fpuStage;
  }
}
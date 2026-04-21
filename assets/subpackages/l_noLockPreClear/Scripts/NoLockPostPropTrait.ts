import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("NoLockPostPropTrait")
export default class NoLockPostPropTrait extends Trait {
  _isPostPropUsage = false;
  static traitKey = "NoLockPostProp";
  onLoad() {
    super.onLoad.call(this);
  }
  onGameData_chgShuffle(t, r) {
    var e;
    (null === (e = t.args) || void 0 === e ? void 0 : e[0]) < 0 && (this._isPostPropUsage = true);
    r();
  }
  onGameData_chgHitTips(t, r) {
    var e;
    (null === (e = t.args) || void 0 === e ? void 0 : e[0]) < 0 && (this._isPostPropUsage = true);
    r();
  }
  onClearBhv_collision(t, r) {
    this._isPostPropUsage && (this._isPostPropUsage = false);
    r();
  }
  onMainGameCtrl_vwLoad(t, r) {
    this._isPostPropUsage = false;
    r();
  }
  onGsListener_onReplayGame(t, r) {
    this._isPostPropUsage = false;
    r();
  }
  onNoLockPreClr_isEnabled(t, r) {
    if (this._isPostPropUsage) {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      r();
    }
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("SkipStepDotTrait")
export default class SkipStepDotTrait extends Trait {
  _isSkipDot = false;
  static traitKey = "SkipStepDot";
  onLoad() {
    var r;
    super.onLoad.call(this);
    this.registerEvent([{
      event: "DotGmClk_dot"
    }]);
    this._config = {
      percent: void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.percent) ? this._traitData.percent : 0
    };
    var e = this.localData.isSkipDot;
    if (null == e || "" === e) {
      var i = 100 * Math.random();
      this.localData.isSkipDot = i >= this._config.percent;
    }
    this._isSkipDot = this.localData.isSkipDot;
  }
  onGameTracker_recordStep(t, r) {
    if (this._isSkipDot) {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
  onDotGmClk_dot(t, r) {
    if (this._isSkipDot) {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
}
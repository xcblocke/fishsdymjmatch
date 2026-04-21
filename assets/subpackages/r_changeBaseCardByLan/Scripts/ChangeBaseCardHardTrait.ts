import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ChangeBaseCardHardTrait")
export default class ChangeBaseCardHardTrait extends Trait {
  _randomOnHard = false;
  static traitKey = "ChangeBaseCardHard";
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._randomOnHard = (null === (e = this._traitData) || void 0 === e ? void 0 : e.randomOnHard) || false;
  }
  onChCardByLanTt_isHardRd(t, e) {
    if (this._randomOnHard) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      e();
    }
  }
}
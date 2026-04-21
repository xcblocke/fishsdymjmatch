import Outlight from '../../../Scripts/Outlight';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("OutlightConfigTrait")
export default class OutlightConfigTrait extends Trait {
  static traitKey = "OutlightConfig";
  onLoad() {
    super.onLoad.call(this);
    Outlight.isBakedDefault = this._traitData.isBakedDefault;
    Outlight.isLimitLowEndDevice = this._traitData.isLimitLowEndDevice;
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("FailVibrateTrait")
export default class FailVibrateTrait extends Trait {
  static traitKey = "FailVibrate";
  onLoad() {
    super.onLoad.call(this);
  }
  onFailVw_show(t, e) {
    e();
    var r = this._traitData.level || EVibrateStrength.DoubleWeak;
    VibrateManager.executeVibrate(r);
  }
}
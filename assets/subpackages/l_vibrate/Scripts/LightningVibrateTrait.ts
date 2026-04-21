import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("LightningVibrateTrait")
export default class LightningVibrateTrait extends Trait {
  static traitKey = "LightningVibrate";
  onLoad() {
    super.onLoad.call(this);
  }
  onBombBhv_finish(t, e) {
    e();
    var i = this._traitData.level || EVibrateStrength.Strong;
    VibrateManager.executeVibrate(i);
  }
}
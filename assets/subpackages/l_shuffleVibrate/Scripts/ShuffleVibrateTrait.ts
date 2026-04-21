import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("ShuffleVibrateTrait")
export default class ShuffleVibrateTrait extends Trait {
  static traitKey = "ShuffleVibrate";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptShuffle_pushEffect(t, e) {
    e();
    var r = this._traitData.level || EVibrateStrength.Shuffle;
    VibrateManager.executeVibrate(r);
  }
}
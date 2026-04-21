import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("GameStartVibrateTrait")
export default class GameStartVibrateTrait extends Trait {
  static traitKey = "GameStartVibrate";
  onLoad() {
    super.onLoad.call(this);
  }
  onEnterAniBhv_startPlay(t, e) {
    e();
    var r = this._traitData.level || EVibrateStrength.GameStart;
    VibrateManager.executeVibrate(r);
  }
}
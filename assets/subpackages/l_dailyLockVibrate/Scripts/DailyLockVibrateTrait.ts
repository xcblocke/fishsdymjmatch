import Trait from '../../../Scripts/framework/trait/Trait';
import { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("DailyLockVibrateTrait")
export default class DailyLockVibrateTrait extends Trait {
  static traitKey = "DailyLockVibrate";
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskView_addLockBtn(t, r) {
    t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
      vibrateLevel: this._traitData.level || EVibrateStrength.DoubleWeak
    });
    r();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("VibrateDragEndPatchTrait")
export default class VibrateDragEndPatchTrait extends Trait {
  static traitKey = "VibrateDragEndPatch";
  onIptTchMove_startMove(t, e) {
    t.extra = t.extra || {};
    t.extra.skipDragStartVibrate = true;
    e();
  }
  onIptBTchEnd_moveEnd(t, e) {
    VibrateManager.executeVibrate(EVibrateStrength.Medium);
    e();
  }
}
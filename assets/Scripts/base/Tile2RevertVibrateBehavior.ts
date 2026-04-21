import VibrateManager, { EVibrateStrength, EVibratePoint } from '../gamePlay/base/vibrate/VibrateManager';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2RevertVibrateBehavior extends GameBehaviorsBase {
  @mj.traitEvent("T2RevertVibBhv_start")
  start() {
    VibrateManager.executeVibrate(EVibrateStrength.Medium, EVibratePoint.Tile2Revert);
    this.finish(EBehaviorEnum.Success);
  }
}
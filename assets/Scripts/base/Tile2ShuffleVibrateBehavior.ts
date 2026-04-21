import VibrateManager, { EVibrateStrength, EVibratePoint } from '../gamePlay/base/vibrate/VibrateManager';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2ShuffleVibrateBehavior extends GameBehaviorsBase {
  @mj.traitEvent("T2ShuffleVibBhv_start")
  start() {
    VibrateManager.executeVibrate(EVibrateStrength.Light, EVibratePoint.Tile2ShuffleVibrate);
    this.finish(EBehaviorEnum.Success);
  }
}
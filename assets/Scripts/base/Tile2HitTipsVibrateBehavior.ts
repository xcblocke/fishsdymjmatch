import VibrateManager, { EVibrateStrength, EVibratePoint } from '../gamePlay/base/vibrate/VibrateManager';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2HitTipsVibrateBehavior extends GameBehaviorsBase {
  @mj.traitEvent("T2HitTipsVibBhv_start")
  start() {
    VibrateManager.executeVibrate(EVibrateStrength.Light, EVibratePoint.Tile2HitTips);
    this.finish(EBehaviorEnum.Success);
  }
}
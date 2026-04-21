import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength, EVibratePoint } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("VibrateTile2Trait")
export default class VibrateTile2Trait extends Trait {
  static traitKey = "VibrateTile2";
  onLoad() {
    super.onLoad.call(this);
  }
  triggerVibrate(t, e) {
    VibrateManager.executeVibrate(t, e);
  }
  triggerTile2Rule(t, e) {
    t !== EVibrateStrength.Disabled && this.triggerVibrate(t, e);
  }
  onTile2IptTchEnd_runClr(t, e) {
    this.triggerTile2Rule(EVibrateStrength.Medium, EVibratePoint.Tile2TileSelect);
    e();
  }
  onT2TchRunLock_exec(t, e) {
    this.triggerTile2Rule(EVibrateStrength.Multiple, EVibratePoint.Tile2TileLock);
    e();
  }
  onT2ClearBhv_collision(t, e) {
    this.triggerTile2Rule(EVibrateStrength.Strong, EVibratePoint.Tile2TileClear);
    e();
  }
  onTile2WinBhv_start(t, e) {
    this.triggerTile2Rule(EVibrateStrength.DoubleWeak, EVibratePoint.Tile2Win);
    e();
  }
  onTile2BfWinBhv_start(t, e) {
    this.triggerTile2Rule(EVibrateStrength.DoubleWeak, EVibratePoint.Tile2BeforeWin);
    e();
  }
  onTile2FlipAni_AnimComplete(t, e) {
    this.triggerTile2Rule(EVibrateStrength.Strong, EVibratePoint.Tile2Flip);
    e();
  }
  onT2ScreenEdgeBhv_start(t, e) {
    t.args[0];
    VibrateManager.executeVibrate(EVibrateStrength.Light, EVibratePoint.Tile2ScreenEdge);
    e();
  }
  checkComboDelayVibrate(t) {
    if ("number" == typeof t && t % 5 == 0) {
      var e = t / 5,
        r = this.buildComboDelayIntervals(e);
      VibrateManager.executeDelayedVibrateSequence(EVibrateStrength.Light, r, EVibratePoint.Tile2ComboDelayVibrate);
    }
  }
  buildComboDelayIntervals(t) {
    if (t <= 0) return [];
    for (var e = [150], r = 1; r < t; r++) e.push(200);
    return e;
  }
  onT2SlotAdvBhv_advance(t, e) {
    this.triggerVibrate(EVibrateStrength.Strong, EVibratePoint.Tile2SlotAdvance);
    e();
  }
}
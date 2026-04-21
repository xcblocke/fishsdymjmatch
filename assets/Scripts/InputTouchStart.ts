import { EInsertType } from './constant/BehaviorsEnum';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import { ClickShowLockEffect } from './ClickShowLockEffect';
import { LockEffect } from './LockEffect';
import { UpdateScoreEffect } from './UpdateScoreEffect';
import InputBaseTouchStart from './inputbase/InputBaseTouchStart';
import ClearHelper from './ClearHelper';
export default class InputTouchStart extends InputBaseTouchStart {
  @mj.traitEvent("IptTchStart_exec")
  excute(t) {
    super.excute.call(this, t);
  }
  runLock(t, o) {
    super.runLock.call(this, t, o);
    this.gameContext.comboModifier.lockClick();
    this.gameContext.trackerModifier.triggerInvalid(o);
    this.excuteIsLock(o);
  }
  runClear(t, o) {
    super.runClear.call(this, t, o);
    ClearHelper.runClear(this.gameContext, t, this);
  }
  @mj.traitEvent("IptTchStart_Lock")
  excuteIsLock(e) {
    if (this.gameContext.touchData.isLock) {
      this.pushLockEffect(e);
      this.pushUpdateScoreEffectForLock();
      var t = this.gameController.tileMapObject.getTileObject(e);
      t && (this.gameController.tileMapObject.isOnlyHasLeftRight(t) ? this.pushHasLeftRightEffects(e) : this.gameController.tileMapObject.isHasCover(t) && this.pushHasCoverEffects(e));
    }
  }
  pushUnSelectAllTileIds() {
    var e = this;
    this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (t) {
      e.pushSelectEffect(t, true, void 0, true);
    });
  }
  pushUpdateScoreEffectForLock() {
    if (this.gameContext.gameType !== MjGameType.Travel) {
      var e = this.gameContext.getGameData(),
        t = new UpdateScoreEffect({
          addScore: 0,
          targetScore: e.getScore(),
          isShowCombo: this.gameContext.comboChecker.canShowCombo()
        });
      this.pushEffect(t, EInsertType.Parallel);
    }
  }
  pushHasLeftRightEffects(e) {
    this.pushClickShowLockEffect(e);
  }
  pushClickShowLockEffect(e) {
    var t = new ClickShowLockEffect({
      tileId: e
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
  @mj.traitEvent("IptTchStart_pushCvr")
  pushHasCoverEffects() {}
  pushLockEffect(e) {
    var t = this.gameController.tileMapObject.getTileObject(e),
      o = new LockEffect({
        isLock: true,
        tileId: e,
        lockCorrelationCard: this.gameController.tileMapObject.getAdjacentLockCards(t)
      });
    this.pushEffect(o);
  }
}
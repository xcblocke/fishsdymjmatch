import { BaseCoreObject } from '../BaseCoreObject';
import { EInsertType } from '../constant/BehaviorsEnum';
import { ClickShowLockEffect } from '../ClickShowLockEffect';
import { LockEffect } from '../LockEffect';
import { Tile2ScreenEdgeEffect } from '../Tile2ScreenEdgeEffect';
import { Tile2UpdateScoreEffect } from '../Tile2UpdateScoreEffect';
export default class InputTile2TouchRunLock extends BaseCoreObject {
  runLock(e, t) {
    t.gameContext.comboModifier.lockClick();
    var o = t.gameContext.tile2TouchData.tileId;
    t.gameContext.tile2DotTrackerModifier.recordErrorLock(o);
    this.excuteIsLock(t, o);
  }
  @mj.traitEvent("T2TchRunLock_exec")
  excuteIsLock(e, t) {
    var o = e.gameContext.getTileMapObject(),
      n = o.getTileObject(t);
    if (n) {
      this.pushLockEffect(e, t);
      this.pushUpdateScoreEffectForLock(e);
      var i = e.gameContext.getGameData();
      e.gameContext.tile2ComboChecker.checkIsComboState(i.getComboNum()) || this.pushScreenEdgeClearEffect(e);
      if (o.isOnlyHasLeftRight(n)) {
        this.pushHasLeftRightEffects(e, t);
      } else {
        o.isHasCover(n) && this.pushHasCoverEffects(t);
      }
    }
  }
  pushLockEffect(e, t) {
    var o = e.gameContext.getTileMapObject(),
      n = o.getTileObject(t),
      i = new LockEffect({
        isLock: true,
        tileId: t,
        lockCorrelationCard: o.getAdjacentLockCards(n)
      });
    e.pushEffect(i);
  }
  pushUpdateScoreEffectForLock(e) {
    var t = e.gameContext.getGameData(),
      o = new Tile2UpdateScoreEffect({
        addScore: 0,
        targetScore: t.getScore(),
        isShowCombo: e.gameContext.tile2ComboChecker.checkIsComboState(t.getComboNum())
      });
    e.pushEffect(o, EInsertType.Parallel);
  }
  pushHasLeftRightEffects(e, t) {
    this.pushClickShowLockEffect(e, t);
  }
  pushClickShowLockEffect(e, t) {
    var o = new ClickShowLockEffect({
      tileId: t
    });
    e.pushEffect(o, EInsertType.Parallel);
  }
  pushScreenEdgeClearEffect(e) {
    var t = new Tile2ScreenEdgeEffect({
      isClear: true
    });
    e.pushEffect(t, EInsertType.Parallel);
  }
  pushHasCoverEffects() {}
}
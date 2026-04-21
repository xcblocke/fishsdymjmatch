import { InputBase } from './InputBase';
export default class InputTile2BaseTouchEnd extends InputBase {
  runLock() {}
  excute(e) {
    if (!this.gameContext.tile2ResultChecker.checkIsDead()) if (this.gameContext.tile2TouchData.tileId) {
      if (this.gameContext.tile2TouchData.isLock) {
        this.runLock(e);
        this.gameContext.tile2TouchData.clear();
      } else if (0 !== this.gameContext.getTileMapObject().getActionIds().length) {
        var t = this.gameContext.tile2TouchData.isMoving;
        if (!t && this.gameContext.tileSelector.touchStart(e.pos) != this.gameContext.tile2TouchData.tileId) {
          this.gameContext.tile2TouchData.clear();
          return;
        }
        var o = this.gameContext.tile2TouchData.tileId;
        this.gameContext.tile2TouchData.lastTileId;
        if (t) {
          if (n = this.gameContext.tile2RollCardChecker.getClearWithOpenRollCard(o)) {
            this.runClear([n, o]);
          } else {
            if (this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(o)) {
              this.runClear([o]);
            } else {
              this.runResetMove();
            }
          }
        } else {
          var n;
          if (n = this.gameContext.tile2RollCardChecker.getClearWithOpenRollCard(o)) this.runClear([n, o]);else if (this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(o)) this.runClear([o]);else {
            var i = this.gameContext.tile2RollCardModifier.tryBack2Front(o);
            if (i) {
              var r = this.gameContext.tile2RollCardModifier.modifyRollCardDatas([o]);
              this.runRollCard([...[i], ...r]);
            } else this.runClear([o]);
          }
        }
        this.gameContext.tile2TouchData.clear();
        this.updateLastTileId(o, t);
      } else this.gameContext.tile2TouchData.clear();
    } else this.gameContext.tile2TouchData.clear();
  }
  checkIsValidLastTileId(e) {
    var t = this.gameContext.getTileMapObject().getTileObject(e);
    if (t && t.isValid && !t.getIsInSlotBar() && t.isHasRollCard() && !t.getIsBack()) return true;
  }
  updateLastTileId(e) {
    if (this.checkIsValidLastTileId(e)) this.gameContext.tile2TouchData.setLastTileId(e);else {
      var t = this.gameContext.tile2TouchData.lastTileId;
      this.checkIsValidLastTileId(t) || this.gameContext.tile2TouchData.setLastTileId(null);
    }
  }
  runRollCard(e) {
    var t = this.gameContext.tile2TouchData.tileId;
    e.filter(function (e) {
      return !e.frontToBack;
    }).length > 0 && this.gameContext.tile2DotTrackerModifier.recordErrorFlip(t);
  }
  runResetMove() {}
  runClear() {}
  checkIsSame() {
    return false;
  }
}
import { InputBase } from './InputBase';
export default class InputTile2BaseTouchMove extends InputBase {
  _touchMoveTimeThreshold = 90;
  _touchMoveDistanceThreshold = 24;
  checkCanMove(e) {
    var t = this.gameContext.tile2TouchData.getToushStartTime();
    if (Date.now() - t < this._touchMoveTimeThreshold) return false;
    var o = this.gameContext.tile2TouchData.startPos;
    return !(e.clone().subtract(o).mag() < this._touchMoveDistanceThreshold);
  }
  excute(e) {
    if (this.gameContext.tile2TouchData.tileId && !this.gameContext.tile2ResultChecker.checkIsDead()) if (this.gameContext.tile2TouchData.isLock) {
      this.runLock(e);
      this.gameContext.tile2TouchData.clear();
    } else {
      var t = false,
        o = [],
        n = this.gameContext.tile2TouchData.tileId;
      if (!this.gameContext.tile2TouchData.isMoving && this.checkCanMove(e.pos)) {
        t = true;
        o = this.gameContext.tile2RollCardModifier.getRollCardDatas(n);
        this.gameContext.tile2TouchData.setIsMoving(true);
        e.delta = e.pos.clone().subtract(this.gameContext.tile2TouchData.startPos);
        this.runStartMove(e);
      }
      this.gameContext.tile2TouchData.isMoving && this.runMove(e, {
        iFirstMove: t,
        rollCardDatas: o
      });
    }
  }
  tryBack2Front(e) {
    var t = this.gameContext.getTileMapObject().getTileObject(e);
    if (!t) return null;
    if (!t.isValid) return null;
    if (t.getIsInSlotBar()) return null;
    if (t.isHasRollCard() && t.getIsBack()) {
      t.setIsBack(false);
      return {
        tileId: e,
        frontToBack: false
      };
    }
    return null;
  }
  tryFront2Back(e) {
    var t = this.gameContext.getTileMapObject().getTileObject(e);
    if (!t) return null;
    if (!t.isValid) return null;
    if (t.getIsInSlotBar()) return null;
    if (t.isHasRollCard() && !t.getIsBack()) {
      t.setIsBack(true);
      return {
        tileId: e,
        frontToBack: true
      };
    }
    return null;
  }
  runLock() {}
  runStartMove() {}
  runMove() {}
}
import { InputBase } from './InputBase';
export default class InputTile2BaseTouchStart extends InputBase {
  checkIsGenerating(e) {
    var t = this.gameContext.getTileMapObject().getTileObject(e);
    return !!t && t.generating;
  }
  excute(e) {
    var t = this.gameContext.tileSelector.touchStart(e.pos);
    this.checkIsGenerating(t) && (t = null);
    if (!this.gameContext.tile2ResultChecker.checkIsDead()) {
      this.gameContext.tile2TouchData.clear();
      var o = this.gameContext.tileChecker.checkIsLock(t);
      this.gameContext.tile2TouchData.setTileId(t);
      this.gameContext.tile2TouchData.setStartPos(e.pos);
      this.gameContext.tile2TouchData.setToushStartTime();
      o && this.gameContext.tile2TouchData.setIsLock(true);
      this.gameContext.getTileMapObject().pushActionId(t);
    }
  }
}
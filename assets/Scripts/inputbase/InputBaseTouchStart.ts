import { InputBase } from './InputBase';
export default class InputBaseTouchStart extends InputBase {
  checkIsGenerating(e) {
    var t = this.gameContext.getTileMapObject().getTileObject(e);
    return !!t && t.generating;
  }
  excute(e) {
    var t = this.gameContext.tileSelector.touchStart(e.pos);
    this.checkIsGenerating(t) && (t = null);
    this.gameContext.touchModifier.modifyTouchStart(null != t, e.pos);
    if (t) {
      var o = this.gameContext.getTileMapObject().getTileObject(t);
      if (o) {
        console.log("[TileClick] tileId=" + t + " pos=(" + o.gridPosX + "," + o.gridPosY + ") layer=" + o.layer + " cardId=" + o.cardId + " resId=" + o.resId + " touchPos=(" + e.pos.x + "," + e.pos.y + ")");
      } else {
        console.log("[TileClick] tileId=" + t + " touchPos=(" + e.pos.x + "," + e.pos.y + ")");
      }
      this.gameContext.touchData.setTileId(t);
      if (this.gameContext.tileChecker.checkIsLock(t)) {
        this.gameContext.touchModifier.modifyTouchStartLock(true);
        console.log("[TileClick] tileId=" + t + " state=locked");
        this.runLock(e, t);
      } else if (this.gameContext.clearChecker.checkCanClear(t)) {
        this.gameContext.getTileMapObject().selcectTileId(t, true);
        this.gameContext.touchModifier.modifyTouchStartClear(true);
        console.log("[TileClick] tileId=" + t + " state=can_clear");
        this.runClear(e, t);
      } else {
        console.log("[TileClick] tileId=" + t + " state=selected_wait_pair");
        this.gameContext.getTileMapObject().pushActionId(t);
      }
    }
  }
  runLock() {}
  runClear() {}
}
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
      this.gameContext.touchData.setTileId(t);
      if (this.gameContext.tileChecker.checkIsLock(t)) {
        this.gameContext.touchModifier.modifyTouchStartLock(true);
        this.runLock(e, t);
      } else if (this.gameContext.clearChecker.checkCanClear(t)) {
        this.gameContext.getTileMapObject().selcectTileId(t, true);
        this.gameContext.touchModifier.modifyTouchStartClear(true);
        this.runClear(e, t);
      } else this.gameContext.getTileMapObject().pushActionId(t);
    }
  }
  runLock() {}
  runClear() {}
}
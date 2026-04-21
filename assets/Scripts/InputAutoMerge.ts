import { InputBase } from './inputbase/InputBase';
import ClearHelper from './ClearHelper';
export default class InputAutoMerge extends InputBase {
  excute(e) {
    this.gameContext.getTileMapObject().selcectTileId(e.tileId1, true);
    this.gameContext.getTileMapObject().selcectTileId(e.tileId2, true);
    if (this.gameContext.clearChecker.checkCanClear2()) {
      ClearHelper.runClear(this.gameContext, e, this);
    } else {
      this.gameContext.getTileMapObject().unselectAllTileIds();
    }
  }
}
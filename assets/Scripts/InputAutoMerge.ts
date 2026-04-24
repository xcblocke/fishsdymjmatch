import { InputBase } from './inputbase/InputBase';
import ClearHelper from './ClearHelper';
export default class InputAutoMerge extends InputBase {
  excute(e) {
    console.log("[AutoMatch] step tile1=" + e.tileId1 + " tile2=" + e.tileId2);
    this.gameContext.getTileMapObject().selcectTileId(e.tileId1, true);
    this.gameContext.getTileMapObject().selcectTileId(e.tileId2, true);
    if (this.gameContext.clearChecker.checkCanClear2()) {
      console.log("[AutoMatch] step result=clear");
      ClearHelper.runClear(this.gameContext, e, this);
    } else {
      console.log("[AutoMatch] step result=fail_unselect");
      this.gameContext.getTileMapObject().unselectAllTileIds();
    }
  }
}
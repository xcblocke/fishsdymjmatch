import { EInsertType } from '../constant/BehaviorsEnum';
import { Tile2StartAutoMergeEffect } from '../Tile2StartAutoMergeEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2StartAutoMerge extends InputBase {
  excute(e) {
    this.gameContext.getTileMapObject().updateCanMatchTiles();
    var t = this.gameContext.getGameData(),
      o = this.gameContext.getTileMapObject();
    console.log("[AutoMatch][Tile2] enter type=" + e.type + " levelId=" + t.getLevelId() + " remain=" + o.getRemainCount() + " pairs=" + o.getCanMatchCardPairNum() + " slotCount=" + t.slotBarCount);
    this.gameContext.getTileMapObject().unselectAllTileIds();
    var n = new Tile2StartAutoMergeEffect({
      type: e.type
    });
    this.pushEffect(n, EInsertType.Root);
  }
}
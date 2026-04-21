import { EInsertType } from '../constant/BehaviorsEnum';
import { Tile2StartAutoMergeEffect } from '../Tile2StartAutoMergeEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2StartAutoMerge extends InputBase {
  excute(e) {
    this.gameContext.getTileMapObject().updateCanMatchTiles();
    this.gameContext.getTileMapObject().unselectAllTileIds();
    var t = new Tile2StartAutoMergeEffect({
      type: e.type
    });
    this.pushEffect(t, EInsertType.Root);
  }
}
import TileNodeManager from '../tilenodes/TileNodeManager';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class InitViewBehavior extends GameBehaviorsBase {
  _timeout = 0;
  start(e) {
    var t = this;
    Date.now();
    this._cardLayoutConfig = e.data.cardLayoutConfig;
    this._cardConfigMap = e.data.cardConfigMap;
    this.context.setTileMapObject(e.data.tilemapObject);
    this.context.setLayoutScale(e.data.layoutScale);
    this.initAllTileNodes().then(function () {
      Date.now();
      t.createAllTileNodes();
      t.finish();
    });
  }
  initAllTileNodes() {
    return new TileNodeManager(this.context).createAllTileNodes({
      tileMapObject: this.context.getTileMapObject(),
      cardLayoutConfig: this._cardLayoutConfig,
      cardConfigMap: this._cardConfigMap
    });
  }
  @mj.traitEvent("InitViewBhv_crtTls")
  createAllTileNodes() {}
}
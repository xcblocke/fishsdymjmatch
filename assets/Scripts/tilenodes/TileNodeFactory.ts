import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { ETileNodeShowType } from '../simulator/constant/TileTypeEnum';
import { BombCardTileNode } from '../BombCardTileNode';
import { ColorCardTileNode } from '../ColorCardTileNode';
import { DaxiaoCardTileNode } from '../DaxiaoCardTileNode';
import { DuoxiaoCardTileNode } from '../DuoxiaoCardTileNode';
import { RankCardTileNode } from '../RankCardTileNode';
import { RollCardTileNode } from '../RollCardTileNode';
import { TileNodeObject } from '../TileNodeObject';
import { Tile2NodeObject } from '../Tile2NodeObject';
import { YogaCardTileNode } from '../YogaCardTileNode';
export class TileNodeFactory {
  _tileType2TileNodeObject = new Map();
  static _instance = null;
  static getInstance() {
    if (!this._instance) {
      this._instance = new TileNodeFactory();
      this._instance.initTypes();
    }
    return this._instance;
  }
  initTypes() {
    this._tileType2TileNodeObject.set(ETileNodeShowType.Normal, TileNodeObject);
    this._tileType2TileNodeObject.set(ETileNodeShowType.RollCard, RollCardTileNode);
    this._tileType2TileNodeObject.set(ETileNodeShowType.ColorCard, ColorCardTileNode);
    this._tileType2TileNodeObject.set(ETileNodeShowType.Yoga, YogaCardTileNode);
    this._tileType2TileNodeObject.set(ETileNodeShowType.RankCard, RankCardTileNode);
    this._tileType2TileNodeObject.set(ETileNodeShowType.Bomb, BombCardTileNode);
    this._tileType2TileNodeObject.set(ETileNodeShowType.DaxiaoCard, DaxiaoCardTileNode);
    this._tileType2TileNodeObject.set(ETileNodeShowType.DuoxiaoCard, DuoxiaoCardTileNode);
  }
  getTileNodeObject(e, t) {
    if (t == MjGameType.Tile2Normal) return new Tile2NodeObject();
    var o = this._tileType2TileNodeObject.get(e.showType);
    return o ? new o() : new (this._tileType2TileNodeObject.get(ETileNodeShowType.Normal))();
  }
}
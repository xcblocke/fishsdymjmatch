import { BaseCoreObject } from '../BaseCoreObject';
import { ETileType } from '../simulator/constant/TileTypeEnum';
import { BombCardType } from './BombCardType';
export class TileTypeChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  parseBombCard(e) {
    var t = e[0],
      o = e[1],
      n = this._context.getTileMapObject().getTileObject(t),
      i = this._context.getTileMapObject().getTileObject(o);
    if (n.type === ETileType.Bomb && i.type === ETileType.Bomb) {
      var r = this.getCanClearBombCardIds(e);
      if (r && r.length > 0) return {
        pos1: n.getPosition(),
        pos2: i.getPosition(),
        bombIds: r
      };
    }
  }
  getCanClearBombCardIds(e) {
    var t = [],
      o = BombCardType.getBombClearTileIds(this._context, e);
    if (o && 2 == o.length) {
      t.push(o[0]);
      t.push(o[1]);
    }
    return t;
  }
}
import { BaseCoreObject } from '../../BaseCoreObject';
import { ECollectFrom } from '../../constant/CollectInterfact';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
import { BombCardType } from '../../tileTypes/BombCardType';
export default class Tile2BombModifier extends BaseCoreObject {
  parseBombCard(e) {
    var t = e[0],
      o = e[1],
      n = this._context.getTileMapObject().getTileObject(t),
      i = this._context.getTileMapObject().getTileObject(o);
    if (n.checkHasType(ETileType.Bomb) && i.checkHasType(ETileType.Bomb)) {
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
  modifyBombCard(e, t) {
    this.context.tile2SlotBarModifier.clear([t], ECollectFrom.FromBomb);
    this._context.comboModifier.addCombo(1);
    var o = this._context.scoreModifier.calAddScore(),
      n = this._context.getGameData().getScore();
    return {
      addScore: o,
      combo: this._context.getGameData().getComboNum(),
      showCombo: this._context.comboChecker.canShowCombo(),
      targetScore: n
    };
  }
}
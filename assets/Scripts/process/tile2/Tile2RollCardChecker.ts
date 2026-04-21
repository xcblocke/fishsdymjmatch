import { BaseCoreObject } from '../../BaseCoreObject';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
export default class Tile2RollCardChecker extends BaseCoreObject {
  getOpenRollCardTileObjectIds() {
    var e,
      t,
      o = [],
      n = this._context.getTileMapObject().getValidTileObjects();
    try {
      for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        !s.checkHasType(ETileType.RollCard) || s.getIsBack() || s.getIsInSlotBar() || o.push(s.id);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  checkCanClearWithIds(e, t) {
    if (e == t) return false;
    var o = this._context.getTileMapObject().getTileObject(e),
      n = this._context.getTileMapObject().getTileObject(t);
    if (!o || !n) return false;
    if (!o.isValid || !n.isValid) return false;
    var i = 0;
    o.getIsInSlotBar() || i++;
    n.getIsInSlotBar() || i++;
    return !(i > this.getEmptySlotBarCount()) && o.cardId === n.cardId;
  }
  getClearWithOpenRollCard(e) {
    var t,
      o,
      n = this._context.getTileMapObject().getTileObject(e);
    if (!n) return null;
    if (!n.isValid) return null;
    var i = this.getOpenRollCardTileObjectIds();
    try {
      for (var a = __values(i), l = a.next(); !l.done; l = a.next()) {
        var s = l.value,
          c = this._context.getTileMapObject().getTileObject(s);
        if (e != s && c.cardId === n.cardId && this.checkCanClearWithIds(e, s)) return s;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = a.return) && o.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return null;
  }
  getEmptySlotBarCount() {
    var e = this._context.getGameData(),
      t = e.slotBarIds;
    return e.slotBarCount - t.length;
  }
}
import { BaseCoreObject } from '../../BaseCoreObject';
export class Tile2ResultChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  getMaxSlotBarCount() {
    return this._context.getGameData().slotBarCount;
  }
  checkIsDead() {
    var e = this._context.getGameData(),
      t = e.slotBarIds,
      o = e.slotBarCount;
    return t.length >= o;
  }
  checkIsEnd() {
    var e,
      t,
      o,
      n,
      i = this._context.getTileMapObject().mapLayers();
    try {
      for (var a = __values(i), l = a.next(); !l.done; l = a.next()) {
        var s = l.value.allCards;
        try {
          for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
            var p = u.value;
            if (p.isValid && !p.getIsInSlotBar()) return false;
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            u && !u.done && (n = c.return) && n.call(c);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (t = a.return) && t.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    return true;
  }
}
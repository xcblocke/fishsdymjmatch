import { BaseCoreObject } from '../../BaseCoreObject';
export class TileSelector extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  getTouchSizeOffsets(e) {
    return e.getTouchSizeOffsets();
  }
  @mj.traitEvent("TileSelector_isMatch")
  isMatch(e, t) {
    var o = t.getPosition(),
      n = t.getContentSize(),
      i = this.getTouchSizeOffsets(t),
      r = o.x - n.width / 2 - i[0],
      a = o.x + n.width / 2 + i[1],
      l = o.y - n.height / 2 - i[3],
      s = o.y + n.height / 2 + i[2];
    return new cc.Rect(r, l, a - r, s - l).contains(e);
  }
  getDistance(e, t) {
    var o = t.getPosition(),
      n = e.x - o.x,
      i = e.y - o.y;
    return Math.sqrt(n * n + i * i);
  }
  @mj.traitEvent("TileSelector_touchStart")
  touchStart(e) {
    for (var t, o, n = this.context.getTileMapObject().mapLayers(), i = n.length - 1; i >= 0; i--) {
      var r = n[i].allCards;
      try {
        for (var l = (t = void 0, __values(r)), s = l.next(); !s.done; s = l.next()) {
          var c = s.value;
          if (c.isValid && !c.getIsInSlotBar() && this.isMatch(e, c)) return c.id;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          s && !s.done && (o = l.return) && o.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }
  checkIsLock(e) {
    var t = this.context.getTileMapObject(),
      o = this.context.getTileMapObject().getTileObject(e);
    return !!o && 0 != t.isCardLock(o);
  }
  @mj.traitEvent("TileSelector_exMultiple")
  getExpandMultiple() {
    return 1.5;
  }
  checkIsMatchTouchEnd(e, t, o = true) {
    var n = this.context.getTileMapObject().getTileObject(t),
      i = n.getPosition(),
      r = n.getContentSize(),
      a = o ? this.getExpandMultiple() : 1;
    return o ? new cc.Rect(i.x - r.width * a, i.y - r.height * a, r.width * a * 2, r.height * a * 2).contains(e) : new cc.Rect(i.x - r.width / 2, i.y - r.height / 2, r.width, r.height).contains(e);
  }
  touchEnd(e, t) {
    var o, n;
    if (t) for (var i = this.context.getTileMapObject().getTileObject(t), r = this.context.getTileMapObject().mapLayers(), l = r.length - 1; l >= 0; l--) {
      var s = r[l].allCards;
      try {
        for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
          var p = u.value;
          if (p.isValid && p.id != i.id && p.cardId == i.cardId && !this.checkIsLock(p.id) && this.checkIsMatchTouchEnd(e, p.id)) return p.id;
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
  }
  getLockTileId(e, t) {
    var o, n;
    if (t) for (var i = this.context.getTileMapObject().getTileObject(t), r = this.context.getTileMapObject().mapLayers(), l = r.length - 1; l >= 0; l--) {
      var s = r[l].allCards;
      try {
        for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
          var p = u.value;
          if (p.isValid && p.id != i.id && this.checkIsLock(p.id) && this.checkIsMatchTouchEnd(e, p.id, false)) return p.id;
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
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TouchSizeFixTrait")
export default class TouchSizeFixTrait extends Trait {
  static traitKey = "TouchSizeFix";
  onLoad() {
    super.onLoad.call(this);
  }
  onTileSelector_touchStart(t, e) {
    for (var r, i, n = this, o = t.ins, c = t.args[0], l = o.context.getTileMapObject().mapLayers(), s = [], u = l.length - 1; u >= 0; u--) {
      var f = l[u].allCards;
      try {
        for (var p = (r = void 0, __values(f)), h = p.next(); !h.done; h = p.next()) {
          var d = h.value;
          if (d.isValid && !d.getIsInSlotBar() && o.isMatch(c, d)) {
            var y = {
              tileId: d.id,
              isLock: o.checkIsLock(d.id),
              distance: o.getDistance(c, d),
              layer: d.layer
            };
            this.isExtend() && (y = this.extendInfo(o.context.getTileMapObject(), d, y));
            s.push(y);
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          h && !h.done && (i = p.return) && i.call(p);
        } finally {
          if (r) throw r.error;
        }
      }
    }
    s.sort(function (t, e) {
      return t.isLock && !e.isLock ? 1 : !t.isLock && e.isLock ? -1 : n.isExtend() && t.hasAliveTile != e.hasAliveTile ? t.hasAliveTile ? 1 : -1 : t.layer != e.layer ? e.layer - t.layer : t.distance - e.distance;
    });
    var v = s[0];
    e({
      returnVal: null == v ? void 0 : v.tileId,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  extendInfo(t, e, r) {
    var i, n;
    if (r.isLock) return r;
    try {
      for (var o = __values(t.aliveTiles()), c = o.next(); !c.done; c = o.next()) {
        var l = c.value;
        if (l.id !== e.id && !l.isCardLock()) {
          r.hasAliveTile = true;
          break;
        }
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return r;
  }
  isExtendScale() {
    var t;
    return null === (t = this._traitData) || void 0 === t ? void 0 : t.isExtendScale;
  }
  isExtend() {
    var t;
    return null === (t = this._traitData) || void 0 === t ? void 0 : t.isExtend;
  }
  getOffsets() {
    var t;
    return null === (t = this._traitData) || void 0 === t ? void 0 : t.offsets;
  }
  onTileSelector_isMatch(t, e) {
    var r;
    if (this.isExtend()) {
      var i = t.ins,
        n = t.args[0],
        o = t.args[1];
      if (o && o.isSelect) {
        var a = o.getPosition(),
          c = o.getContentSize(),
          l = o.getSelectScale();
        c = new cc.Size(c.width * l, c.height * l);
        var s = [0, 0, 0, 0];
        this.isExtendScale() && (s = (s = null !== (r = this.getOffsets()) && void 0 !== r ? r : i.getTouchSizeOffsets(o)).map(function (t) {
          return t * l;
        }));
        var u = o.getSelectOffsetX(),
          f = a.x + u - c.width / 2 - s[0],
          p = a.x + u + c.width / 2 + s[1],
          h = a.y - c.height / 2 - s[3],
          d = a.y + c.height / 2 + s[2];
        e({
          returnVal: new cc.Rect(f, h, p - f, d - h).contains(n),
          returnType: TraitCallbackReturnType.jump,
          isBreak: true
        });
      } else e();
    } else e();
  }
}
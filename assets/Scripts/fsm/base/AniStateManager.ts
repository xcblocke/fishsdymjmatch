export class AniStateManager {
  _registry = new Map();
  _playSeq = 0;
  add(e, t) {
    this._registry.set(e, t);
    return this;
  }
  get(e) {
    return this._registry.get(e);
  }
  isPlaying(e) {
    var t, o;
    return null !== (o = null === (t = this._registry.get(e)) || void 0 === t ? void 0 : t.isPlaying) && void 0 !== o && o;
  }
  play(e, t, o) {
    var r,
      a,
      l = this._registry.get(e);
    if (l) {
      var s = ++this._playSeq;
      try {
        for (var c = __values(this._registry), u = c.next(); !u.done; u = c.next()) {
          var p = __read(u.value, 2),
            f = p[0],
            d = p[1];
          f !== e && d.cancel();
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (a = c.return) && a.call(c);
        } finally {
          if (r) throw r.error;
        }
      }
      if (this._playSeq === s) {
        l.play(t, o);
      } else {
        null == o || o();
      }
    } else null == o || o();
  }
  cancel(e) {
    var t;
    null === (t = this._registry.get(e)) || void 0 === t || t.cancel();
  }
  cancelAll() {
    var e, t;
    try {
      for (var o = __values(this._registry.values()), i = o.next(); !i.done; i = o.next()) i.value.cancel();
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
  }
}
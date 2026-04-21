export class RowDiversityCharSel {
  selectCharacterPair(e, t, o, i) {
    var a,
      l,
      s,
      c,
      u = i.tileToCoord(e),
      p = i.tileToCoord(t),
      f = i.getExpanded("pred", u),
      d = i.getExpanded("pred", p),
      h = new Set(),
      y = new Set();
    try {
      for (var m = __values(f), v = m.next(); !v.done; v = m.next()) {
        var g = v.value;
        void 0 !== (S = i.assignedChars.get(g)) && h.add(S);
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        v && !v.done && (l = m.return) && l.call(m);
      } finally {
        if (a) throw a.error;
      }
    }
    try {
      for (var _ = __values(d), T = _.next(); !T.done; T = _.next()) {
        g = T.value;
        void 0 !== (S = i.assignedChars.get(g)) && y.add(S);
      }
    } catch (e) {
      s = {
        error: e
      };
    } finally {
      try {
        T && !T.done && (c = _.return) && c.call(_);
      } finally {
        if (s) throw s.error;
      }
    }
    for (var C = [], b = [], E = 0; E < o.length; E++) {
      var S = o[E][0].resId,
        I = h.has(S),
        w = y.has(S);
      if (I && w) {
        C.push(E);
      } else {
        I || w || b.push(E);
      }
    }
    var B = [...C, ...b];
    0 === B.length && (B = o.map(function (e, t) {
      return t;
    }));
    var x,
      M = this._getRowUsedChars(e, i),
      O = this._getRowUsedChars(t, i),
      D = this._getAdjacentChars(e, i),
      P = this._getAdjacentChars(t, i),
      A = new Set([...D, ...P]);
    if (e.layer === t.layer && e.gridPosY === t.gridPosY) {
      var R = B.filter(function (e) {
        return !M.has(o[e][0].resId);
      });
      x = R.length > 0 ? R : (j = B.filter(function (e) {
        return !A.has(o[e][0].resId);
      })).length > 0 ? j : B;
    } else {
      var N = B.filter(function (e) {
        var t = o[e][0].resId;
        return !M.has(t) && !O.has(t);
      });
      if (N.length > 0) x = N;else {
        var j;
        x = (j = B.filter(function (e) {
          return !A.has(o[e][0].resId);
        })).length > 0 ? j : B;
      }
    }
    return x[Math.floor(Math.random() * x.length)];
  }
  _getRowUsedChars(e, t) {
    var o,
      r,
      a = new Set(),
      l = e.layer,
      s = e.gridPosY;
    try {
      for (var c = __values(t.assignedChars), u = c.next(); !u.done; u = c.next()) {
        var p = __read(u.value, 2),
          f = p[0],
          d = p[1],
          h = f.split("_");
        if (h.length >= 3) {
          var y = parseInt(h[0]),
            m = parseInt(h[1]);
          y === l && m === s && a.add(d);
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (r = c.return) && r.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  _getAdjacentChars(e, t) {
    var o,
      i,
      r = new Set(),
      a = e.layer,
      l = e.gridPosY,
      s = e.gridPosX,
      c = [s - 1, s + 1, s - 2, s + 2];
    try {
      for (var u = __values(c), p = u.next(); !p.done; p = u.next()) {
        var f = a + "_" + l + "_" + p.value,
          d = t.assignedChars.get(f);
        void 0 !== d && r.add(d);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (i = u.return) && i.call(u);
      } finally {
        if (o) throw o.error;
      }
    }
    return r;
  }
}
export class PredTriggerCharSel {
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
        void 0 !== (w = i.assignedChars.get(g)) && h.add(w);
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
        void 0 !== (w = i.assignedChars.get(g)) && y.add(w);
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
    var C = o;
    if (i.mCharActive && null !== i.mCharResId) {
      var b = o.filter(function (e) {
        return e[0].resId !== i.mCharResId;
      });
      b.length > 0 && (C = b);
    }
    for (var E = [], S = [], I = 0; I < C.length; I++) {
      var w = C[I][0].resId,
        B = h.has(w),
        x = y.has(w);
      if (B && x) {
        E.push(I);
      } else {
        B || x || S.push(I);
      }
    }
    var M = [...E, ...S];
    0 === M.length && (M = C.map(function (e, t) {
      return t;
    }));
    if (M.length > 0) {
      var O = new Set(i.assignedChars.values()),
        D = M.filter(function (e) {
          return O.has(C[e][0].resId);
        }),
        P = D.length > 0 ? D : M,
        A = P[Math.floor(Math.random() * P.length)],
        R = C[A][0].resId,
        N = o.findIndex(function (e) {
          return e[0].resId === R;
        });
      -1 === N && (N = A);
      return N;
    }
    return Math.floor(Math.random() * o.length);
  }
}
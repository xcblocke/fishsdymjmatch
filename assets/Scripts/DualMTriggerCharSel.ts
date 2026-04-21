export class DualMTriggerCharSel {
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
        void 0 !== (B = i.assignedChars.get(g)) && h.add(B);
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
        void 0 !== (B = i.assignedChars.get(g)) && y.add(B);
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
      var b = i.mCharLockedResIds || new Set([i.mCharResId]),
        E = o.filter(function (e) {
          return !b.has(e[0].resId);
        });
      E.length > 0 && (C = E);
    }
    for (var S = [], I = [], w = 0; w < C.length; w++) {
      var B = C[w][0].resId,
        x = h.has(B),
        M = y.has(B);
      if (x && M) {
        S.push(w);
      } else {
        x || M || I.push(w);
      }
    }
    var O = [...S, ...I];
    0 === O.length && (O = C.map(function (e, t) {
      return t;
    }));
    var D = new Set(i.assignedChars.values()),
      P = O.filter(function (e) {
        return D.has(C[e][0].resId);
      }),
      A = P.length > 0 ? P : O,
      R = A[Math.floor(Math.random() * A.length)],
      N = C[R][0].resId,
      j = o.findIndex(function (e) {
        return e[0].resId === N;
      });
    -1 === j && (j = R);
    return j;
  }
}
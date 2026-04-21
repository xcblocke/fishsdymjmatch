var r = "undefined" != typeof BigInt;
export class LevelUtil {
  static MaxTilePerRow = 14;
  static MaxTilePerCol = 18;
  static MaxTileLayerCount = 1;
  static SectorSize_MaxX = 6;
  static SectorSize_MaxY = 6;
  static SectorSize_Count = 12;
  static SectorSize_Prefix = LevelUtil.SectorSize_MaxX + LevelUtil.SectorSize_MaxY + LevelUtil.SectorSize_Count;
  static SectorSize_ExternalId = 16;
  static Size_EachTile = 6;
  static ConvertLongStringToBitArrayNewWithType(t, o = -1) {
    var n = t.split(","),
      i = 64 * n.length,
      a = new CustomBitArray(i),
      s = 0;
    try {
      if (r) for (var c = BigInt(0), u = BigInt(1), p = 0; p < n.length; p++) for (var f = BigInt(n[p]), d = 0; d < 64; ++d) {
        a.set(s, (f & u << BigInt(d)) !== c);
        s++;
      } else {
        var h = [];
        for (p = 0; p < n.length; p++) h[p] = bigNum(n[p]);
        for (p = 0; p < h.length; p++) for (f = h[p], d = 0; d < 64; ++d) {
          a.set(s, !f.and(bigNum.one.shiftLeft(d)).isZero());
          s++;
        }
      }
    } catch (e) {
      throw e;
    }
    for (p = 0; p < a.length; p++) a.get(p);
    if (0 === o) {
      var y = LevelUtil.ReadBits(a, 0, LevelUtil.SectorSize_MaxX),
        m = LevelUtil.ReadBits(a, LevelUtil.SectorSize_MaxX, LevelUtil.SectorSize_MaxY);
      if (0 === LevelUtil.ReadBits(a, LevelUtil.SectorSize_MaxX + LevelUtil.SectorSize_MaxY, LevelUtil.SectorSize_Count)) {
        console.error("count == 0");
        return null;
      }
      var v = (y + 1) * (m + 1),
        g = v * (LevelUtil.GetMaxZ(a) + 1);
      if (g <= 0) throw new Error("Invalid offset table size");
      if (0 === v) throw new Error("Invalid grid size");
      if (g % v != 0) throw new Error("Invalid offset table size");
      var _ = LevelUtil.SectorSize_Prefix + g + LevelUtil.SectorSize_ExternalId;
      return a.slice(0, _);
    }
    return a;
  }
  static ConvertLongStringToBitArrayNew(t) {
    if (t.includes("|")) {
      var o = t.split("|"),
        n = LevelUtil.ConvertLongStringToBitArrayNewWithType(o[0], 0),
        i = LevelUtil.ConvertLongStringToBitArrayNewWithType(o[1], 1);
      return LevelUtil.Merge(n, i);
    }
    var a = 64 * (o = t.split(",")).length,
      s = new CustomBitArray(a),
      c = 0;
    try {
      if (r) for (var u = BigInt(0), p = BigInt(1), f = 0; f < o.length; f++) for (var d = BigInt(o[f]), h = 0; h < 64; ++h) {
        s.set(c, (d & p << BigInt(h)) !== u);
        c++;
      } else {
        var y = [];
        for (f = 0; f < o.length; f++) y[f] = bigNum(o[f]);
        for (f = 0; f < y.length; f++) for (d = y[f], h = 0; h < 64; ++h) {
          s.set(c, !d.and(bigNum.one.shiftLeft(h)).isZero());
          c++;
        }
      }
    } catch (e) {
      throw e;
    }
    return s;
  }
  static ReadBits(e, t, o) {
    for (var n = 0, i = 0; i < o; i++) e.get(t + i) && (n |= 1 << o - 1 - i);
    return n;
  }
  static WriteBits(e, t, o, n) {
    for (var i = 0; i < n; i++) {
      var r = 0 != (o & 1 << n - 1 - i);
      e.set(t + i, r);
    }
  }
  static DeserializeNew(t) {
    if (t.length < LevelUtil.SectorSize_Prefix + LevelUtil.SectorSize_ExternalId) throw new Error("Bit array length is too short");
    var o = LevelUtil.ReadBits(t, 0, LevelUtil.SectorSize_MaxX),
      i = LevelUtil.ReadBits(t, LevelUtil.SectorSize_MaxX, LevelUtil.SectorSize_MaxY),
      r = LevelUtil.ReadBits(t, LevelUtil.SectorSize_MaxX + LevelUtil.SectorSize_MaxY, LevelUtil.SectorSize_Count);
    if (0 === r) return [];
    var a = (o + 1) * (i + 1),
      l = a * (LevelUtil.GetMaxZ(t) + 1);
    if (l <= 0) throw new Error("Invalid offset table size");
    if (0 === a) throw new Error("Invalid grid size");
    if (l % a != 0) throw new Error("Invalid offset table size");
    for (var s = [], c = LevelUtil.SectorSize_Prefix, u = 0; u < l; u++) if (t.get(c + u)) {
      var p = Math.floor(u / a),
        f = u % a,
        d = Math.floor(f / (i + 1)),
        h = f % (i + 1);
      s.push([d, h, p]);
    }
    if (s.length !== r) throw new Error("Position count mismatch");
    var y = [],
      m = c + l + LevelUtil.SectorSize_ExternalId;
    for (u = 0; u < r; u++) {
      var v = LevelUtil.ReadBits(t, m + u * LevelUtil.Size_EachTile, LevelUtil.Size_EachTile),
        g = __read(s[u], 3);
      d = g[0], h = g[1], p = g[2];
      y.push({
        Coordinate: {
          X: d,
          Y: h,
          Z: p
        },
        TileIndex: v
      });
    }
    return y;
  }
  static GetMaxZ(t) {
    if (t.length < LevelUtil.SectorSize_Prefix + LevelUtil.SectorSize_ExternalId) throw new Error("Bit array length is too short");
    for (var o = LevelUtil.ReadBits(t, 12, 12), n = -1, i = 0, r = LevelUtil.SectorSize_Prefix; r < t.length; r++) if (t.get(r) && ++i >= o) {
      n = r - LevelUtil.SectorSize_Prefix;
      break;
    }
    if (-1 === n) throw new Error("盘面状态不合法，找不着合适的牌的数据，或者牌的模板和预期的牌的数量不匹配。");
    var a = LevelUtil.ReadBits(t, 0, LevelUtil.SectorSize_MaxX),
      l = LevelUtil.ReadBits(t, LevelUtil.SectorSize_MaxX, LevelUtil.SectorSize_MaxY);
    return Math.floor(n / ((a + 1) * (l + 1)));
  }
  static Merge(t, o) {
    var n = LevelUtil.ReadBits(t, 0, LevelUtil.SectorSize_MaxX),
      i = LevelUtil.ReadBits(t, LevelUtil.SectorSize_MaxX, LevelUtil.SectorSize_MaxY),
      r = LevelUtil.ReadBits(t, LevelUtil.SectorSize_MaxX + LevelUtil.SectorSize_MaxY, LevelUtil.SectorSize_Count);
    if (0 === r) throw new Error("这个模式下元素个数必须不为 0");
    var a = (n + 1) * (i + 1),
      s = LevelUtil.GetMaxZ(t),
      c = a * (s + 1);
    if (c <= 0) throw new Error("Offset table size must be positive");
    if (0 === a) throw new Error("Grid size cannot be zero");
    if (c % a != 0) throw new Error("Offset table size must be divisible by grid size");
    var u = LevelUtil.SectorSize_Prefix + a * (s + 1) + LevelUtil.SectorSize_ExternalId;
    if (t.length !== u) throw new Error("Pattern bits length does not match expected size");
    for (var p = new CustomBitArray(u + LevelUtil.Size_EachTile * r), f = 0; f < t.length; f++) p.set(f, t.get(f));
    for (f = 0; f < LevelUtil.Size_EachTile * r; f++) p.set(u + f, o.get(LevelUtil.SectorSize_Prefix + LevelUtil.SectorSize_ExternalId + f));
    return p;
  }
  static translateCharToPos(e) {
    var t = e.charCodeAt(0);
    return e >= "0" && e <= "9" ? t - "0".charCodeAt(0) : e >= "A" && e <= "Z" ? t - 55 : e >= "a" && e <= "z" ? t - "a".charCodeAt(0) + 36 : 0;
  }
  static translatePosToChar(e) {
    var t = "0";
    if (e >= 0 && e <= 9) {
      t = String.fromCharCode(e + "0".charCodeAt(0));
    } else {
      if (e >= 10 && e <= 35) {
        t = String.fromCharCode(e + 55);
      } else {
        e >= 36 && e <= 61 && (t = String.fromCharCode(e - 36 + "a".charCodeAt(0)));
      }
    }
    return t;
  }
  static parseSolver(e) {
    if (!(null == e ? void 0 : e.trim())) return [];
    var t = [];
    (t = e.includes(":") ? this.parseSolverString(e) : this.parseLongStringToSolver(e)).sort(function (e, t) {
      return e.layer !== t.layer ? e.layer - t.layer : e.subIndex - t.subIndex;
    });
    return t;
  }
  static parseSolverStep(e) {
    return this.parseStepSolver(e);
  }
  static parseSolverString(e) {
    var t,
      o,
      n = this,
      r = [],
      a = e.split(",");
    try {
      for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
        var c = s.value.split(":");
        if (3 === c.length || 2 === c.length) {
          var u = c[0].trim();
          if (3 === u.length) {
            var p = [],
              f = [];
            if (2 === c.length) {
              p = [];
              f = c[1].trim().split("|");
            } else {
              p = c[1].trim().split("~");
              f = c[2].trim().split("|");
            }
            if (2 === f.length) {
              var d = function d(e) {
                  return {
                    x: n.translateCharToPos(e[2]),
                    y: n.translateCharToPos(e[1]),
                    z: n.translateCharToPos(e[0])
                  };
                },
                h = parseInt(u.slice(0, 2)),
                y = u[2].charCodeAt(0) - "A".charCodeAt(0);
              r.push({
                id: u,
                layer: h,
                subIndex: y,
                deps: p.filter(function (e) {
                  return "*" !== e;
                }),
                coord1: d(f[0]),
                coord2: d(f[1])
              });
            }
          }
        }
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
    return r;
  }
  static parseLongStringToSolver(e) {
    var t = [];
    if (!(null == e ? void 0 : e.trim())) return t;
    for (var o = this.ConvertLongStringToBitArrayNew(e), n = this.ReadBits(o, 0, 8), i = 0; i < n; i++) {
      var r = 8 + 48 * i,
        a = this.ReadBits(o, r, 8);
      r += 8;
      var l = this.ReadBits(o, r, 8);
      r += 8;
      r += 1;
      var s = this.ReadBits(o, r, 5);
      r += 5;
      var c = this.ReadBits(o, r, 5);
      r += 5;
      var u = this.ReadBits(o, r, 5);
      r += 5;
      r += 1;
      var p = this.ReadBits(o, r, 5);
      r += 5;
      var f = this.ReadBits(o, r, 5);
      r += 5;
      var d = this.ReadBits(o, r, 5);
      r += 5;
      t.push({
        id: "" + a.toFixed(0).padStart(2, "0") + String.fromCharCode("A".charCodeAt(0) + l),
        layer: a,
        subIndex: l,
        deps: [],
        coord1: {
          x: u,
          y: c,
          z: s
        },
        coord2: {
          x: d,
          y: f,
          z: p
        }
      });
    }
    return t;
  }
  static parseStepSolver(e) {
    var t,
      o,
      n = [];
    if (!(null == e ? void 0 : e.trim())) return n;
    try {
      for (var r = __values(e.split(",")), a = r.next(); !a.done; a = r.next()) {
        var l = a.value.trim();
        3 === l.length && n.push({
          index: n.length,
          coord: {
            x: this.translateCharToPos(l[2]),
            y: this.translateCharToPos(l[1]),
            z: this.translateCharToPos(l[0])
          }
        });
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
}
export class CustomBitArray {
  bits = null;
  get length() {
    return this.bits.length;
  }
  constructor(e) {
    this.bits = new Array(e).fill(false);
  }
  get(e) {
    return this.bits[e] || false;
  }
  set(e, t) {
    this.bits[e] = t;
  }
  slice(t, o) {
    for (var n = new CustomBitArray(o), i = 0; i < o; i++) n.set(i, this.get(t + i));
    return n;
  }
  toUInt64Array() {
    var e = [];
    if (r) for (var t = BigInt(0), o = BigInt(1), n = 0; n < this.bits.length; n += 64) {
      for (var i = t, a = 0; a < 64 && n + a < this.bits.length; a++) this.bits[n + a] && (i |= o << BigInt(a));
      e.push(bigNum(i.toString()));
    } else for (n = 0; n < this.bits.length; n += 64) {
      for (i = bigNum.zero, a = 0; a < 64 && n + a < this.bits.length; a++) this.bits[n + a] && (i = i.or(bigNum.one.shiftLeft(a)));
      e.push(i);
    }
    return e;
  }
}
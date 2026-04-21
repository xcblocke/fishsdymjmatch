import { ETileType } from './simulator/constant/TileTypeEnum';
import CardUtil from './gamePlay/user/CardUtil';
import { isResIdBlacklisted } from './IClassicExtractTypes';
export var DEFAULT_QUANTITY_DISTRIBUTION = {
  count6Ratio: 0.25,
  count4Ratio: 0.5,
  count2Ratio: 0.25
};
@mj.class("ResidualCardManager")
export class ResidualCardManager {
  _distribution = DEFAULT_QUANTITY_DISTRIBUTION;
  static getInstance() {
    ResidualCardManager._instance || (ResidualCardManager._instance = new ResidualCardManager());
    return ResidualCardManager._instance;
  }
  generateResidualResIds(e, t, o) {
    var n = new Map();
    e.tileObjectMap().forEach(function (e) {
      if (e.isValid && !t.has(e.id) && e.type !== ETileType.RollCard) {
        var o = e.cardId,
          i = e.resId;
        if (isResIdBlacklisted(i)) return;
        n.has(o) || n.set(o, {
          resId: i,
          count: 0
        });
        n.get(o).count++;
      }
    });
    for (var s = Array.from(n.entries()).sort(function (e, t) {
        return t[1].count - e[1].count;
      }), c = s.length, u = function u(e) {
        var t = CardUtil.getByKey(e);
        return (null == t ? void 0 : t.resName) || "resId=" + e;
      }, p = this._distribution, f = this.allocateByRatio(c, p), d = [], h = new Set(), y = 0, m = [], v = [], g = [], _ = 0; _ < f.count6 && y < s.length && !(d.length + 6 > o); _++) {
      var T = __read(s[y++], 2),
        C = T[0],
        b = T[1];
      h.add(C);
      m.push(u(b.resId));
      for (var E = 0; E < 6; E++) d.push(b.resId);
    }
    for (_ = 0; _ < f.count4 && y < s.length && !(d.length + 4 > o); _++) {
      var S = __read(s[y++], 2);
      C = S[0], b = S[1];
      h.add(C);
      v.push(u(b.resId));
      for (E = 0; E < 4; E++) d.push(b.resId);
    }
    for (_ = 0; _ < f.count2 && y < s.length && !(d.length + 2 > o); _++) {
      var I = __read(s[y++], 2);
      C = I[0], b = I[1];
      h.add(C);
      g.push(u(b.resId));
      for (E = 0; E < 2; E++) d.push(b.resId);
    }
    var w = d.length;
    return {
      residualResIds: d,
      residualTileCount: w,
      remainingTileCount: o - w,
      usedCardIds: h
    };
  }
  allocateByRatio(e, t) {
    if (0 === e) return {
      count6: 0,
      count4: 0,
      count2: 0
    };
    var o = Math.round(e * t.count6Ratio),
      n = Math.round(e * t.count4Ratio),
      i = e - o - n;
    if (i < 0) {
      if (n >= (a = -i)) n -= a;else {
        o -= a - n;
        n = 0;
      }
      i = 0;
    }
    var r = o + n + i;
    if (r !== e) {
      var a;
      if ((a = e - r) > 0) o += a;else if (i >= (a = -a)) i -= a;else if (n >= a - i) {
        n -= a - i;
        i = 0;
      } else {
        o -= a - i - n;
        n = 0;
        i = 0;
      }
    }
    return {
      count6: o,
      count4: n,
      count2: i
    };
  }
}
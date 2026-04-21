export class ChainMultiCoordSel {
  calculatePriority(e, t, o) {
    var n = o.tileToCoord(e),
      i = o.tileToCoord(t),
      r = o.chainAgeCounter.get(n) || 0,
      a = o.chainAgeCounter.get(i) || 0,
      l = r + a,
      s = Math.max(r, a),
      c = Math.min(r, a),
      u = o.completedPairs,
      p = o.totalPairs - u;
    if ("mid" === (u < 5 ? "early" : p <= 10 ? "late" : "mid")) {
      var f = o.minChainAge,
        d = o.maxChainAge;
      if (r === f && a === d || r === d && a === f) {
        var h = o.countFreedBlocks(n, i);
        return {
          priority: 30000 - Math.min(h, 200),
          subScore: Math.random()
        };
      }
      return {
        priority: 10000 + 100 * l + s,
        subScore: Math.random()
      };
    }
    return {
      priority: 10000 + 10000 * l + 100 * s + c,
      subScore: Math.random()
    };
  }
}
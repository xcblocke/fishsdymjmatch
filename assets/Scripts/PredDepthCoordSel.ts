export class PredDepthCoordSel {
  calculatePriority(e, t, o) {
    var n = o.tileToCoord(e),
      i = o.tileToCoord(t),
      r = o.getTopologyLevel(n),
      a = o.getTopologyLevel(i),
      l = 1;
    r === a && (l *= 10);
    r + a <= 2 && (l *= 3);
    return {
      priority: l,
      subScore: Math.random()
    };
  }
}
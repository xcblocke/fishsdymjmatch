export class IntuitiveChainCoordSel {
  calculatePriority(e, t, o) {
    var n = o.tileToCoord(e),
      i = o.tileToCoord(t),
      r = o.lastFreedCoords,
      a = r.has(n) || r.has(i),
      l = o.countFreedBlocks(n, i);
    return {
      priority: a ? l >= 2 ? 50 : l >= 1 ? 40 : 30 : l >= 2 ? 20 : l >= 1 ? 10 : 1,
      subScore: Math.random()
    };
  }
}
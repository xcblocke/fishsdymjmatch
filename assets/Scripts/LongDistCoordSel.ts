export class LongDistCoordSel {
  calculatePriority(e, t) {
    var o = this._calculate3DDistance(e, t);
    return o >= 11 ? {
      priority: 20,
      subScore: Math.random()
    } : o >= 8 ? {
      priority: 6,
      subScore: Math.random()
    } : {
      priority: 1,
      subScore: Math.random()
    };
  }
  _calculate3DDistance(e, t) {
    var o = e.gridPosX - t.gridPosX,
      n = e.gridPosY - t.gridPosY,
      i = e.layer - t.layer;
    return Math.sqrt(o * o + n * n + i * i);
  }
}
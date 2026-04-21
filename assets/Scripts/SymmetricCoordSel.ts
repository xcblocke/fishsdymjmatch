export class SymmetricCoordSel {
  calculatePriority(e, t) {
    var o = e.layer,
      n = e.gridPosY,
      i = e.gridPosX,
      r = t.layer,
      a = t.gridPosY,
      l = t.gridPosX;
    return o === r && n === a ? (i + l) % 2 == 0 ? {
      priority: 150,
      subScore: Math.random()
    } : {
      priority: 100,
      subScore: Math.random()
    } : o === r ? {
      priority: 50,
      subScore: Math.random()
    } : {
      priority: 10,
      subScore: Math.random()
    };
  }
}
export class SameZCoordSel {
  calculatePriority(e, t) {
    return e.layer === t.layer ? {
      priority: 2,
      subScore: Math.random()
    } : {
      priority: 1,
      subScore: Math.random()
    };
  }
}
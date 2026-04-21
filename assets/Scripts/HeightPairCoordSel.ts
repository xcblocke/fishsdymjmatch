export class HeightPairCoordSel {
  calculatePriority(e, t) {
    return {
      priority: 50 * (e.layer + t.layer),
      subScore: Math.random()
    };
  }
}
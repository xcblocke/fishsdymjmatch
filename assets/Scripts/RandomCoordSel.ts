export class RandomCoordSel {
  calculatePriority() {
    return {
      priority: 1,
      subScore: Math.random()
    };
  }
}
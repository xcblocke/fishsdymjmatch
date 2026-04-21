export class AnimationConfig {
  layerDurations = [];
  lineDurations = [];
  itemDurations = [];
  linePositionDeviations = [];
  useSymmetry = true;
  leftOutScreenPosition = cc.v2(-100, 0);
  leftOutScreenTime = 1;
  rightOutScreenPosition = cc.v2(100, 0);
  rightOutScreenTime = 1;
  shadowFadeOutTime = 0;
  shadowFadeInTime = 0.2;
  constructor(e) {
    this.initializeConfig(e);
  }
  resetConfig() {
    this.layerDurations = [];
    this.lineDurations = [];
    this.itemDurations = [];
    this.linePositionDeviations = [];
  }
  pushValues(e, t, o) {
    for (var n = 0; n < t; n++) e.push(o);
  }
}
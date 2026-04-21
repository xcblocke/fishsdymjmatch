import { EShufflePhase } from '../../config/ShuffleAnimationConfig';
export class SpiralShuffleStrategy {
  GATHER_DURATION = 0.6;
  GATHER_LAYER_DELAY = 0.06;
  STAY_DURATION = 0.43;
  EXPAND_DURATION = 0.66;
  EXPAND_LAYER_DELAY = 0.06;
  SPIRAL_ROUNDS = 1;
  totalDuration = 0;
  getName() {
    return "SpiralShuffle";
  }
  @mj.traitEvent("SpiralShfStgy_gaDur")
  getGatherDuration() {
    return this.GATHER_DURATION;
  }
  @mj.traitEvent("SpiralShfStgy_stayDur")
  getStayDuration() {
    return this.STAY_DURATION;
  }
  @mj.traitEvent("SpiralShfStgy_expDur")
  getExpandDuration() {
    return this.EXPAND_DURATION;
  }
  generateAnimationConfig(e) {
    var t = [],
      o = this.generateGatherPhaseConfigs(e),
      n = this.calculateGatherPhaseDuration(e);
    t.push({
      phase: EShufflePhase.Gather,
      configs: o,
      duration: n
    });
    t.push({
      phase: EShufflePhase.Stay,
      configs: [],
      onPhaseComplete: function () {
        var t = e.onRebuild(e.tileNodes);
        e.tileNodes = t;
      },
      duration: this.getStayDuration()
    });
    var r = this.generateExpandPhaseConfigs(e),
      a = this.calculateExpandPhaseDuration(e);
    t.push({
      phase: EShufflePhase.Expand,
      configs: r,
      duration: a
    });
    this.totalDuration = t.reduce(function (e, t) {
      return e + t.duration;
    }, 0);
    return {
      phases: t,
      totalDuration: this.totalDuration
    };
  }
  calculateGatherPhaseDuration(e) {
    return (this.getLayerCount(e.tileNodes) - 1) * this.GATHER_LAYER_DELAY + this.getGatherDuration();
  }
  calculateExpandPhaseDuration(e) {
    return (this.getLayerCount(e.tileNodes) - 1) * this.EXPAND_LAYER_DELAY + this.getExpandDuration();
  }
  getLayerCount(e) {
    var t = new Set();
    e.forEach(function (e) {
      t.add(e.info.layerIndex || 0);
    });
    return t.size;
  }
  generateGatherPhaseConfigs(e) {
    var t = this,
      o = [],
      n = e.tileNodes,
      i = e.centerPos,
      r = new Map();
    n.forEach(function (e) {
      var t = e.info.layerIndex || 0;
      r.has(t) || r.set(t, []);
      r.get(t).push(e);
    });
    var a = Array.from(r.keys()).sort(function (e, t) {
        return e - t;
      }),
      l = this.getGatherDuration();
    a.forEach(function (e, n) {
      var a = r.get(e),
        s = n * t.GATHER_LAYER_DELAY;
      a.forEach(function (n) {
        o.push({
          node: n.cardNode,
          startOffset: cc.v2(0, 0),
          endPosition: i,
          delay: s,
          duration: l,
          animationType: "spiralToCenter",
          easing: "cubicIn",
          metadata: {
            layer: e,
            row: 0,
            col: 0,
            isLeft: false
          },
          extraParams: {
            centerPos: i,
            rounds: t.SPIRAL_ROUNDS,
            clockwise: true
          }
        });
        o.push({
          node: n.shadowCardNode,
          startOffset: cc.v2(0, 0),
          endPosition: i,
          delay: s,
          duration: l,
          animationType: "spiralToCenter",
          easing: "cubicIn",
          metadata: {
            layer: e,
            row: 0,
            col: 0,
            isLeft: false
          },
          extraParams: {
            centerPos: i,
            rounds: t.SPIRAL_ROUNDS,
            clockwise: true,
            fadeOut: true
          }
        });
      });
    });
    return o;
  }
  generateExpandPhaseConfigs(e) {
    var t = this,
      o = [],
      n = e.tileNodes,
      i = e.centerPos,
      r = new Map();
    n.forEach(function (e) {
      var t = e.info.layerIndex || 0;
      r.has(t) || r.set(t, []);
      r.get(t).push(e);
    });
    var a = Array.from(r.keys()).sort(function (e, t) {
        return e - t;
      }),
      l = this.getExpandDuration();
    a.forEach(function (e, n) {
      var a = r.get(e),
        s = n * t.EXPAND_LAYER_DELAY;
      a.forEach(function (n) {
        var r = n.tileObject.getPosition();
        o.push({
          node: n.cardNode,
          startOffset: cc.v2(0, 0),
          endPosition: r,
          delay: s,
          duration: l,
          animationType: "spiralFromCenter",
          easing: "customBackOut",
          metadata: {
            layer: e,
            row: 0,
            col: 0,
            isLeft: false
          },
          extraParams: {
            centerPos: i,
            rounds: t.SPIRAL_ROUNDS,
            clockwise: true
          }
        });
        o.push({
          node: n.shadowCardNode,
          startOffset: cc.v2(0, 0),
          endPosition: r,
          delay: s,
          duration: l,
          animationType: "spiralFromCenter",
          easing: "customBackOut",
          metadata: {
            layer: e,
            row: 0,
            col: 0,
            isLeft: false
          },
          extraParams: {
            centerPos: i,
            rounds: t.SPIRAL_ROUNDS,
            clockwise: true,
            fadeIn: true
          }
        });
      });
    });
    return o;
  }
  getTotalDuration() {
    return this.totalDuration;
  }
}
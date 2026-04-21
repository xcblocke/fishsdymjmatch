import { DEFAULT_SWIMLANE_CONFIG, EDifficultyType } from './IClassicExtractTypes';
@mj.class("SwimlaneStrategy")
export class SwimlaneStrategy {
  _config = DEFAULT_SWIMLANE_CONFIG;
  static getInstance() {
    SwimlaneStrategy._instance || (SwimlaneStrategy._instance = new SwimlaneStrategy());
    return SwimlaneStrategy._instance;
  }
  selectDifficultyType(e, t, o, n, r) {
    var a,
      l = this._config,
      s = false;
    if (o >= l.hardModeThresholdSeconds) {
      a = l.afterTimeDifficulty;
      l.hardModeThresholdSeconds, EDifficultyType[a];
    } else {
      var c = t > 0 ? e / t : 0;
      if (c >= l.scoreThresholdPercent) {
        var u = l.afterThresholdRotation;
        a = u[r % u.length];
        (100 * c).toFixed(0), l.scoreThresholdPercent, EDifficultyType[a];
        s = true;
      } else {
        a = this._selectRandomFromPool(l.beforeThresholdPool);
        (100 * c).toFixed(0), l.scoreThresholdPercent, EDifficultyType[a];
      }
    }
    return {
      difficultyType: a,
      rotationUsed: s
    };
  }
  _selectRandomFromPool(e) {
    return 0 === e.length ? EDifficultyType.Medium : e[Math.floor(Math.random() * e.length)];
  }
}
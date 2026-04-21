import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RankWinStreakRateTrait")
export default class RankWinStreakRateTrait extends Trait {
  static traitKey = "RankWinStreakRate";
  get winStreakRate() {
    return null != this._traitData.winStreakRate ? this._traitData.winStreakRate : [1, 2, 3];
  }
  onRankRbtLgc_loadConfig(t, r) {
    t.ins._winStreakStrategies = [...this.winStreakRate];
    r();
  }
  onRankRobotCfg_winRates(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: [...this.winStreakRate]
    });
  }
  onRkBnsWinRate_show(t, r) {
    for (var e = t.ins._barLabelNodes, n = Math.min(e.length, this.winStreakRate.length), a = 0; a < n; a++) {
      var i = e[a];
      i[0].getComponent(cc.Label).string = "x" + this.winStreakRate[a];
      i[1].getComponent(cc.Label).string = "x" + this.winStreakRate[a];
    }
    r();
  }
}
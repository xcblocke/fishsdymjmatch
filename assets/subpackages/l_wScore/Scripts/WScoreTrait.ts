import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("WScoreTrait")
export default class WScoreTrait extends Trait {
  static traitKey = "WScore";
  onLoad() {
    super.onLoad.call(this);
    var r = this._traitData.timeRate;
    this._config = {
      timeRate: Array.isArray(r) && r.length >= 2 ? [r[0], r[1]] : [0.5, 2],
      wRate: void 0 !== this._traitData.wRate ? this._traitData.wRate : 1
    };
  }
  onScoreMod_setlmTmRt(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: {
        minRatio: this._config.timeRate[0],
        maxRatio: this._config.timeRate[1]
      }
    });
  }
  onScoreMod_setlmWRt(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.wRate
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
export enum SkipMode {
  Immediate = 0,
  ClickThenDelay = 1,
  DelayThenClick = 2,
}
@mj.trait
@mj.class("SkipAutoMergeTrait")
export default class SkipAutoMergeTrait extends Trait {
  static traitKey = "SkipAutoMerge";
  onLoad() {
    super.onLoad.call(this);
    var e = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
    this._config = {
      canSkip: void 0 === this._traitData.canSkip || this._traitData.canSkip,
      mode: e,
      delayTime: void 0 !== this._traitData.delayTime ? this._traitData.delayTime : 3
    };
    this._config.canSkip && this._config.mode;
  }
  onStAutoMrgBhv_skipCfg(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config
    });
  }
}
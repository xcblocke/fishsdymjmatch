import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { AutoMergeSpeedType } from '../../../Scripts/base/StartAutoMergeBehavior';
var s = {
  A1: {
    type: AutoMergeSpeedType.Constant,
    initialDelay: 0.33
  },
  A2: {
    type: AutoMergeSpeedType.Constant,
    initialDelay: 0.25
  },
  B1: {
    type: AutoMergeSpeedType.Accelerate,
    initialDelay: 0.33,
    decreaseStep: 0.02,
    minDelay: 0.1
  },
  B2: {
    type: AutoMergeSpeedType.Accelerate,
    initialDelay: 0.25,
    decreaseStep: 0.03,
    minDelay: 0.08
  }
};
@mj.trait
@mj.class("AutoMergeSpeedTrait")
export default class AutoMergeSpeedTrait extends Trait {
  static traitKey = "AutoMergeSpeed";
  onLoad() {
    super.onLoad.call(this);
    this.initConfig();
  }
  initConfig() {
    if (this._traitData.mainlinePreset) {
      var t = this._traitData.mainlinePreset;
      this._mainlineConfig = Object.assign({}, s[t]);
    } else if (this._traitData.mainline) {
      this._mainlineConfig = this.buildConfig(this._traitData.mainline);
    } else {
      this._mainlineConfig = Object.assign({}, s.A1);
    }
    if (this._traitData.travelPreset) {
      t = this._traitData.travelPreset;
      this._travelConfig = Object.assign({}, s[t]);
    } else if (this._traitData.travel) {
      this._travelConfig = this.buildConfig(this._traitData.travel);
    } else {
      this._travelConfig = Object.assign({}, s.B1);
    }
  }
  buildConfig(t) {
    var e,
      r,
      i,
      n,
      a = null !== (e = null == t ? void 0 : t.type) && void 0 !== e ? e : AutoMergeSpeedType.Constant,
      o = {
        type: a,
        initialDelay: null !== (r = null == t ? void 0 : t.initialDelay) && void 0 !== r ? r : 0.33
      };
    if (a === AutoMergeSpeedType.Accelerate) {
      o.decreaseStep = null !== (i = null == t ? void 0 : t.decreaseStep) && void 0 !== i ? i : 0.02;
      o.minDelay = null !== (n = null == t ? void 0 : t.minDelay) && void 0 !== n ? n : 0.1;
    }
    return o;
  }
  onStAutoMrgBhv_mainSpd(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._mainlineConfig
    });
  }
  onStAutoMrgBhv_trvSpd(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._travelConfig
    });
  }
}
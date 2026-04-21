import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ScoreFloatScaleTrait")
export default class ScoreFloatScaleTrait extends Trait {
  _config = null;
  static traitKey = "ScoreFloatScale";
  onLoad() {
    var r, e, o, i;
    super.onLoad.call(this);
    this._config = {
      inScale: null !== (e = null === (r = this._traitData.config) || void 0 === r ? void 0 : r.inScale) && void 0 !== e ? e : 1.3,
      outScale: null !== (i = null === (o = this._traitData.config) || void 0 === o ? void 0 : o.outScale) && void 0 !== i ? i : 1.2
    };
  }
  onScrFloatBhv_getScale(t, r) {
    var e = {
      inScale: this._config.inScale,
      outScale: this._config.outScale
    };
    r({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: e
    });
  }
}
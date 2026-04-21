import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("InitCapRUTrait")
export default class InitCapRUTrait extends ExtractTrait {
  static traitKey = "InitCapRU";
  onLoad() {
    super.onLoad.call(this);
  }
  onExtNormLv_getInitCapRU(t, r) {
    var e;
    if (this.checkGameMode()) {
      var i = Math.floor(t.args[0] / 2),
        n = t.args[1],
        o = this._traitData.capabilityValues;
      if (null != o) {
        var a = -1 === o ? (null === (e = n.CapabilityDimensionMedian) || void 0 === e ? void 0 : e[i]) || n.MinDiffulty : o;
        r({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: a
        });
      } else r();
    } else r();
  }
}
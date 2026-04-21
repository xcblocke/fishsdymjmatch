import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DeathDimensionTrait")
export default class DeathDimensionTrait extends ExtractTrait {
  static traitKey = "DeathDimension";
  onLoad() {
    var e, r, i, n, o, a, s, u;
    super.onLoad.call(this);
    this._config = {
      dimensionOrder: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.dimensionOrder) && void 0 !== r ? r : [1, 2, 3, 2],
      allDirectReadWeights: null !== (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.allDirectReadWeights) && void 0 !== n ? n : [[15, 45, 30, 10], [1, 6, 33, 66]],
      deathFailAdjust: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.deathFailAdjust) && void 0 !== a ? a : [-2],
      deathPassAdjust: null !== (u = null === (s = this._traitData) || void 0 === s ? void 0 : s.deathPassAdjust) && void 0 !== u ? u : [1]
    };
  }
  onExtNormLv_getAllDirWgt(t, e) {
    if (this.checkGameMode()) {
      var r = this._config.allDirectReadWeights;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: r
      });
    } else e();
  }
  onExtNormLv_getDimOrder(t, e) {
    if (this.checkGameMode()) {
      var r = this._config.dimensionOrder;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: r
      });
    } else e();
  }
  onExtNormLv_getDeathFail(t, e) {
    var r, i;
    if (this.checkGameMode()) {
      var n = t.args[0] || 0,
        o = this._config.deathFailAdjust,
        a = null !== (i = null !== (r = o[n]) && void 0 !== r ? r : o[0]) && void 0 !== i ? i : -2;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a
      });
    } else e();
  }
  onExtNormLv_getDeathPass(t, e) {
    var r, i;
    if (this.checkGameMode()) {
      var n = t.args[0] || 0,
        o = this._config.deathPassAdjust,
        a = null !== (i = null !== (r = o[n]) && void 0 !== r ? r : o[0]) && void 0 !== i ? i : 1;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a
      });
    } else e();
  }
}
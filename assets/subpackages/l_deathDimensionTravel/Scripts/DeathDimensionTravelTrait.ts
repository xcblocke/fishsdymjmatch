import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DeathDimensionTravelTrait")
export default class DeathDimensionTravelTrait extends ExtractTrait {
  static traitKey = "DeathDimensionTravel";
  onLoad() {
    var e, r, i, a, n, o, l, s;
    this._traitData.gameType || (this._traitData.gameType = "Travel");
    super.onLoad.call(this);
    this._config = {
      dimensionOrder: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.dimensionOrder) && void 0 !== r ? r : [1, 2, 3, 2],
      allDirectReadWeights: null !== (a = null === (i = this._traitData) || void 0 === i ? void 0 : i.allDirectReadWeights) && void 0 !== a ? a : [[15, 45, 30, 10], [1, 6, 33, 66]],
      deathFailAdjust: null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.deathFailAdjust) && void 0 !== o ? o : [-2],
      deathPassAdjust: null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.deathPassAdjust) && void 0 !== s ? s : [1]
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
      var a = t.args[0] || 0,
        n = this._config.deathFailAdjust,
        o = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : n[0]) && void 0 !== i ? i : -2;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: o
      });
    } else e();
  }
  onExtNormLv_getDeathPass(t, e) {
    var r, i;
    if (this.checkGameMode()) {
      var a = t.args[0] || 0,
        n = this._config.deathPassAdjust,
        o = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : n[0]) && void 0 !== i ? i : 1;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: o
      });
    } else e();
  }
}
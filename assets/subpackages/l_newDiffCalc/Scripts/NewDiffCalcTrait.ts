import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("NewDiffCalcTrait")
export default class NewDiffCalcTrait extends ExtractTrait {
  static traitKey = "NewDiffCalc";
  onLoad() {
    var r, e, i, o, n, a, l, c;
    super.onLoad.call(this);
    this._initAverage = null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.initAverage) && void 0 !== e ? e : 160;
    this._finalAverage = null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.finalAverage) && void 0 !== o ? o : 160;
    this._transitionLevels = null !== (a = null === (n = this._traitData) || void 0 === n ? void 0 : n.transitionLevels) && void 0 !== a ? a : 1;
    this._stdDev = null !== (c = null === (l = this._traitData) || void 0 === l ? void 0 : l.stdDev) && void 0 !== c ? c : 5;
  }
  normalDistribution2(t, r, e, i, o) {
    var n = 1 - Math.random(),
      a = 1 - Math.random(),
      l = Math.sqrt(-2 * Math.log(n)),
      c = i + l * Math.cos(2 * Math.PI * a) * o,
      s = i + l * Math.sin(2 * Math.PI * a) * o,
      f = 0 === Math.floor(2 * Math.random()) ? c : s;
    return Math.sqrt(t * e * f * r);
  }
  onExtNormLv_calcD(t, r) {
    if (this.checkGameMode()) {
      var e = __read(t.args, 5),
        i = e[0],
        o = (e[1], e[2]),
        n = e[3],
        l = e[4],
        s = this._initAverage + Math.min(1, 1 * l / (1 * this._transitionLevels)) * (this._finalAverage - this._initAverage),
        f = this.normalDistribution2(i, n, o, s, this._stdDev);
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: f
      });
    } else r();
  }
}
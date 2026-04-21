import { ExtractDimension } from '../../../Scripts/core/extractQuestion/ExtractNormalLevels';
import ExtractTrait from '../../../Scripts/ExtractTrait';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("LearningRateTrait")
export default class LearningRateTrait extends ExtractTrait {
  MaxDiffulty = 0;
  MinDiffulty = 0;
  static traitKey = "LearningRate";
  onExtNormLv_getK(t, e) {
    var r, i;
    if (this.checkGameMode()) {
      var a = t.args[0];
      this.MaxDiffulty = a.MaxDiffulty;
      this.MinDiffulty = a.MinDiffulty;
      var n = this._traitData.config;
      null == n.type && (n.type = 1);
      if (1 == n.type || 2 == n.type) {
        var c = null !== (i = null === (r = ExtractDimension.getData()) || void 0 === r ? void 0 : r.ru) && void 0 !== i ? i : this.MinDiffulty,
          u = this.getLearningRate(n, c);
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: u
        });
      } else e();
    } else e();
  }
  getLearningRate(t, e) {
    var r = 1 == t.type ? this.getS1(t) : this.getS2(t);
    return e > r ? r - this.MinDiffulty : this.MaxDiffulty - r;
  }
  getS1(t) {
    var e = NormalGameData.getInstance().getLevelId();
    return t.S_max - t.a / (t.b * e + t.c);
  }
  getS2(t) {
    var e = NormalGameData.getInstance().getLevelId();
    return t.S_max / (1 + Math.exp(-t.a * (e - t.b)));
  }
}
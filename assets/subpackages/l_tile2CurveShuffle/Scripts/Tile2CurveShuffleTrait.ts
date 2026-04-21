import Trait from '../../../Scripts/framework/trait/Trait';
import Tile2CurveSolver from './Tile2CurveSolver';
@mj.trait
@mj.class("Tile2CurveShuffleTrait")
export default class Tile2CurveShuffleTrait extends Trait {
  _curveParams = {};
  static traitKey = "Tile2CurveShuffle";
  onLoad() {
    super.onLoad.call(this);
    var r = this._traitData;
    void 0 !== r.minStepsForPeak && (this._curveParams.minStepsForPeak = r.minStepsForPeak);
    void 0 !== r.updateProbability && (this._curveParams.updateProbability = r.updateProbability);
    void 0 !== r.avgOccupancyRate && (this._curveParams.avgOccupancyRate = r.avgOccupancyRate);
    void 0 !== r.preferRemaining01 && (this._curveParams.preferRemaining01 = r.preferRemaining01);
    void 0 !== r.preferRemainingMin23 && (this._curveParams.preferRemainingMin23 = r.preferRemainingMin23);
  }
  onTile2ShuffleMod_compute(e, r) {
    var t = e.ins._context;
    Date.now();
    if (new Tile2CurveSolver().shuffleWithContext(t, this._curveParams)) {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
}
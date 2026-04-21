import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2FreeReviveNumTrait")
export default class Tile2FreeReviveNumTrait extends Trait {
  static traitKey = "Tile2FreeReviveNum";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2GD_getFrRvInitCnt(t, e) {
    var r;
    if (void 0 === (null === (r = this.traitData) || void 0 === r ? void 0 : r.freeCount)) e();else {
      var i = Number(this.traitData.freeCount);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: i
      });
    }
  }
}
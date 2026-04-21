import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2ReviveAnimTrait")
export default class Tile2ReviveAnimTrait extends Trait {
  _animType = 0;
  static traitKey = "Tile2ReviveAnim";
  onLoad() {
    var e, r, i;
    super.onLoad.call(this);
    this._animType = null !== (i = null === (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.config) || void 0 === r ? void 0 : r.animType) && void 0 !== i ? i : 0;
  }
  onT2Revive_animType(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: this._animType
    });
  }
}
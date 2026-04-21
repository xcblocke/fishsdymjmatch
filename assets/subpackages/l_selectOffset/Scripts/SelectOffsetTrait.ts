import { TileObject } from '../../../Scripts/objects/TileObject';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("SelectOffsetTrait")
export default class SelectOffsetTrait extends Trait {
  _selectOffsetX = 30;
  static traitKey = "SelectOffset";
  getSelectOffsetX() {
    return this._selectOffsetX;
  }
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._selectOffsetX = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.selectOffsetX) && void 0 !== r ? r : 30;
  }
  onLoginM_enterGame(t, e) {
    TileObject.SELECT_OFFSET_X = this._selectOffsetX;
    e();
  }
}
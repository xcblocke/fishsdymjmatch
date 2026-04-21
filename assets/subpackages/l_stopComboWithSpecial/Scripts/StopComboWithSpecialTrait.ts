import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
@mj.trait
@mj.class("StopComboWithSpecialTrait")
export default class StopComboWithSpecialTrait extends Trait {
  _typesToCheck = [];
  static traitKey = "StopComboWithSpecial";
  onLoad() {
    var e, o, i;
    super.onLoad.call(this);
    this._initTypesToCheck((null === (e = this.traitData) || void 0 === e ? void 0 : e.checkBomb) || false, (null === (o = this.traitData) || void 0 === o ? void 0 : o.checkDuoxiao) || false, (null === (i = this.traitData) || void 0 === i ? void 0 : i.checkDaxiao) || false);
  }
  _initTypesToCheck(t, e, o) {
    this._typesToCheck = [];
    t && this._typesToCheck.push(ETileType.Bomb);
    e && this._typesToCheck.push(ETileType.DuoxiaoCard);
    o && this._typesToCheck.push(ETileType.DaxiaoCard);
  }
  hasRemainSpecialTiles(t) {
    var e,
      o = (null == t ? void 0 : t.context) || (null == t ? void 0 : t._context),
      i = null === (e = null == o ? void 0 : o.getTileMapObject) || void 0 === e ? void 0 : e.call(o);
    return !(!i || "function" != typeof i.isBoardTileHasType) && 0 !== this._typesToCheck.length && i.isBoardTileHasType(this._typesToCheck, true);
  }
  onFullComboChk_canFullCb(t, e) {
    var o;
    if ((null === (o = this.traitData) || void 0 === o ? void 0 : o.blockCombo) && this.hasRemainSpecialTiles(t.ins)) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
  onRwdComboChk_sTriNow(t, e) {
    var o;
    if ((null === (o = this.traitData) || void 0 === o ? void 0 : o.blockCombo) && this.hasRemainSpecialTiles(t.ins)) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
}
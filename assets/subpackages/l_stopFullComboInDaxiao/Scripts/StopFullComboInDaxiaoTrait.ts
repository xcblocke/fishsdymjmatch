import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("StopFullComboInDaxiaoTrait")
export default class StopFullComboInDaxiaoTrait extends Trait {
  _gameType = MjGameType.None;
  static traitKey = "StopFullComboInDaxiao";
  onLoad() {
    var t, o, i;
    super.onLoad.call(this);
    this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
    this._config = {
      blockCombo: void 0 === (null === (t = this._traitData) || void 0 === t ? void 0 : t.blockCombo) || 1 === Number(this._traitData.blockCombo),
      isDaxiao: void 0 === (null === (o = this._traitData) || void 0 === o ? void 0 : o.isDaxiao) || 1 === Number(this._traitData.isDaxiao),
      isLianxiao: void 0 === (null === (i = this._traitData) || void 0 === i ? void 0 : i.isLianxiao) || 1 === Number(this._traitData.isLianxiao)
    };
  }
  getBoardFlags(a) {
    var t,
      o = null === (t = this.localData.byGameType) || void 0 === t ? void 0 : t[a];
    return o ? "boolean" == typeof o ? {
      hasDaxiao: o,
      hasLianxiao: o
    } : "object" != typeof o ? {
      hasDaxiao: false,
      hasLianxiao: false
    } : {
      hasDaxiao: !!o.hasDaxiao,
      hasLianxiao: !!o.hasLianxiao
    } : {
      hasDaxiao: false,
      hasLianxiao: false
    };
  }
  onInitViewBhv_crtTls(a, t) {
    var o, i;
    this._gameType = null === (i = null === (o = a.ins) || void 0 === o ? void 0 : o._context) || void 0 === i ? void 0 : i.gameType;
    t();
  }
  onIptSetLv_newGComp(a, t) {
    var o,
      i,
      e = null === (o = a.ins) || void 0 === o ? void 0 : o.tileMapObject,
      r = false,
      n = false,
      s = MjGameType.None;
    if (e && "function" == typeof e.isBoardTileHasType) {
      r = e.isBoardTileHasType([ETileType.DaxiaoCard], true);
      n = e.isBoardTileHasType([ETileType.DuoxiaoCard], true);
      s = (null === (i = e.gameContext) || void 0 === i ? void 0 : i.gameType) || MjGameType.None;
    }
    this.localData.byGameType[s] = {
      hasDaxiao: r,
      hasLianxiao: n
    };
    this.localData.byGameType = this.localData.byGameType;
    t();
  }
  onFullComboChk_canFullCb(a, t) {
    var o = this.getBoardFlags(this._gameType),
      i = this._config;
    if (i.blockCombo) {
      var e = i.isDaxiao && o.hasDaxiao,
        r = i.isLianxiao && o.hasLianxiao;
      if (e || r) {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: false
        });
      } else {
        t();
      }
    } else t();
  }
  onRwdComboChk_sTriNow(a, t) {
    var o = this.getBoardFlags(this._gameType),
      i = this._config;
    if (i.blockCombo) {
      var e = i.isDaxiao && o.hasDaxiao,
        r = i.isLianxiao && o.hasLianxiao;
      if (e || r) {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: false
        });
      } else {
        t();
      }
    } else t();
  }
}
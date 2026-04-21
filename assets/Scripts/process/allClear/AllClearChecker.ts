import { BaseCoreObject } from '../../BaseCoreObject';
export class AllClearChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("AllClrChk_minTiles")
  getMinTiles() {
    return 4;
  }
  @mj.traitEvent("AllClrChk_maxTiles")
  getMaxTiles() {
    return 10;
  }
  @mj.traitEvent("AllClrChk_triRate")
  getTriggerRate() {
    return 0.5;
  }
  getTotalTileCount() {
    return this.context.getTileMapObject().getCurTilesCnt();
  }
  @mj.traitEvent("AllClrChk_canTrig")
  canTrigger() {
    if (this.context.getGameData().getHasBrokenCombo()) return false;
    var e = this.getTotalTileCount(),
      t = this.getMinTiles(),
      o = this.getMaxTiles();
    if (e < t || e > o) return false;
    var n = this.getTriggerRate();
    return Math.random() < n;
  }
  checkInAllClear() {
    var e,
      t = this.context.getGameData();
    if (null === (e = null == t ? void 0 : t.getHasTriggeredAllClear) || void 0 === e ? void 0 : e.call(t)) return {
      allClear: false,
      effectId: 0,
      ids: []
    };
    var o = this.checkAllClear();
    o.effectId;
    if (!o.isShow) return {
      allClear: o.isShow,
      effectId: o.effectId,
      ids: []
    };
    var n = this.context.getTileMapObject().aliveTiles().map(function (e) {
      return e.id;
    });
    return {
      allClear: o.isShow,
      effectId: o.effectId,
      ids: n
    };
  }
  @mj.traitEvent("AllClrChk_allClr")
  checkAllClear() {
    return {
      isShow: false,
      effectId: 0
    };
  }
}
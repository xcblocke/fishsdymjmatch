import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("Tile2MagnetTrait")
export default class Tile2MagnetTrait extends Trait {
  _magnetItemNode = null;
  static traitKey = "Tile2Magnet";
  isMagnetNodeAlive() {
    return this._magnetItemNode && cc.isValid(this._magnetItemNode) && this._magnetItemNode.activeInHierarchy;
  }
  getMagnetItemNode() {
    return this._magnetItemNode;
  }
  @mj.traitEvent("Tile2Magnet_slotLimit")
  getSlotLimit() {
    return 3;
  }
  @mj.traitEvent("Tile2Magnet_popCnt")
  getPopCnt() {
    return 2;
  }
  @mj.traitEvent("Tile2Magnet_preMet")
  isPreconMet() {
    return true;
  }
  onLoad() {
    super.onLoad.call(this);
    this.localData.levelId || (this.localData.levelId = 0);
    this.localData.popupCount || (this.localData.popupCount = 0);
  }
  getNodeCfg() {
    return {
      url: this.traitData.magnetPrefabUrl || "prefabs/EffectMagnet",
      bundleName: this.traitData.magnetBundleName || "l_magnet"
    };
  }
  resetPopupCount() {
    this.localData.popupCount = 0;
  }
  onTile2MagnetBhv_nodeCfg(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getNodeCfg()
    });
  }
  onGsListener_onReplayGame(t, e) {
    t.args[0] && this.resetPopupCount();
    e();
  }
  onT2MagMrgBhv_spCfg(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: {
        url1: "spine/gameplay_Black_hole",
        url2: "spine/gameplay_Black_hole2",
        bundleName: "l_magnet"
      }
    });
  }
  onT2MagnetItem_enterAni(t, e) {
    var r;
    e();
    try {
      var o = t.ins;
      if (!o || !cc.isValid(o.node)) return;
      this._magnetItemNode = o.node;
      var n = (null === (r = UserModel.getInstance().getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0;
      if (this.localData.levelId !== n) {
        this.localData.levelId = n;
        this.localData.popupCount = 1;
      } else this.localData.popupCount = this.localData.popupCount + 1;
    } catch (t) {}
  }
  onT2MagnetItem_onDestroy(t, e) {
    this._magnetItemNode = null;
    e();
  }
  onT2MagnetChk_canMagnet(t, e) {
    var r;
    if (this.isMagnetNodeAlive()) {
      e();
    } else {
      if (((null === (r = UserModel.getInstance().getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0) <= 1) {
        e();
      } else {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      }
    }
  }
  onT2MagnetChk_chkCon(t, e) {
    var r = this.isPreconMet();
    r && (r = this.checkCanShow(t.ins));
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
  checkCanShow(t) {
    var e,
      r = false,
      o = (null === (e = UserModel.getInstance().getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
    (this.localData.levelId != o || this.localData.popupCount < this.getPopCnt()) && (r = true);
    r && (r = this.checkSlotBarMatches(t));
    var n = AdManager.getInstance().checkVideoAdIsReady();
    return r && n;
  }
  checkSlotBarMatches(t) {
    var e, r;
    if (!t) return false;
    var o = t.context.getTileMapObject();
    o.updateCanMatchTiles();
    var n = o.getCanMatchTiles(),
      a = t.context.getGameData().slotBarIds || [];
    if (a.length < this.getSlotLimit()) return false;
    try {
      for (var c = __values(a), l = c.next(); !l.done; l = c.next()) {
        var p = l.value,
          u = o.getTileObjectByPosId(p);
        if (null == u ? void 0 : u.isValid) {
          var s = n.get(u.cardId);
          if (s && s.length >= 2) for (var f = 0; f < s.length; f++) if (s[f].id === u.id) return false;
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (r = c.return) && r.call(c);
      } finally {
        if (e) throw e.error;
      }
    }
    return true;
  }
  getOffset() {
    var t = this.traitData.itemOffset || [-455, -120];
    return cc.v2(t[0], t[1]);
  }
  getMergeOffset() {
    var t = this.traitData.mergeOffset || [210, 0];
    return cc.v2(t[0], t[1]);
  }
  onTile2MagnetBhv_offset(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getOffset()
    });
  }
  onT2ScoreFloatBhv_offset(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getMergeOffset().add(cc.v2(0, -50))
    });
  }
  onT2MagMrgBhv_offset(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getMergeOffset()
    });
  }
}
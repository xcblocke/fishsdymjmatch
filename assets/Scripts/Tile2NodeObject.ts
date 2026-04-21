import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import { ETileComponent } from './simulator/constant/TileTypeEnum';
import { ETileNodeNames, BaseTileNode } from './BaseTileNode';
import { TileNodeComponent } from './TileNodeComponent';
import { Tile2ComponentRegistry } from './Tile2ComponentRegistry';
import { ETile2SlotType } from './core/simulator/constant/GameTypeEnums';
export class Tile2NodeObject extends BaseTileNode {
  _typeBits = 0;
  _components = new Map();
  static _init = Tile2ComponentRegistry.registerAll();
  get typeBits() {
    return this._typeBits;
  }
  set typeBits(e) {
    this._typeBits = e;
  }
  attachComponent(e, t) {
    this.detachComponent(e);
    t.bind(this);
    this._components.set(e, t);
    return t;
  }
  detachComponent(e) {
    var t = this._components.get(e);
    if (t) {
      t.unbind();
      this._components.delete(e);
    }
  }
  getComponent(e) {
    var t;
    return null !== (t = this._components.get(e)) && void 0 !== t ? t : null;
  }
  syncComponents(e) {
    var t,
      o,
      n,
      i,
      r = new Set(null != e ? e : []);
    try {
      for (var l = __values(Array.from(this._components.keys())), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        r.has(c) || this.detachComponent(c);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    try {
      for (var u = __values(r), p = u.next(); !p.done; p = u.next()) {
        c = p.value;
        if (!this._components.has(c)) {
          var f = TileNodeComponent.create(c);
          f && this.attachComponent(c, f);
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (i = u.return) && i.call(u);
      } finally {
        if (n) throw n.error;
      }
    }
  }
  @mj.traitEvent("Tile2NodeObj_getReqComKs")
  getRequiredComponentKeys(e) {
    var t,
      o,
      n = [...(null !== (o = null === (t = e.tileObject) || void 0 === t ? void 0 : t.getComponets()) && void 0 !== o ? o : [])];
    n.includes(ETileComponent.Tile2ComponentSlotBarAni) || n.push(ETileComponent.Tile2ComponentSlotBarAni);
    n.includes(ETileComponent.Tile2ComponentLockDarken) || n.push(ETileComponent.Tile2ComponentLockDarken);
    return n;
  }
  updateAnimMgr() {
    this._components.forEach(function (e) {
      return e.onInitAnim();
    });
  }
  refreshNode(t) {
    var o, n;
    this.typeBits = null !== (n = null === (o = t.tileObject) || void 0 === o ? void 0 : o.getTypeBits()) && void 0 !== n ? n : 0;
    this.syncComponents(this.getRequiredComponentKeys(t));
    super.refreshNode.call(this, t);
    this._components.forEach(function (e) {
      return e.onRefreshNode(t);
    });
  }
  getDisplayResName() {
    var e, t;
    try {
      for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next()) {
        var i = n.value.getResNameOverride();
        if (null !== i) return i;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    return this.tileObject.resName;
  }
  updateImgCard() {
    var e, t;
    try {
      for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next()) if (n.value.onUpdateImgCard()) return;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    var i = this.getDisplayResName(),
      r = CardUtil.getAtlasPathAndBundleName(i, this),
      l = r.path,
      s = r.bundleName,
      c = r.fromAtlas;
    BaseSprite.refreshWithNode(this._imgCard, l, c, false, s);
    this.saveCardUniqueInfo(s, l, c);
  }
  updateImgCardBg() {
    var e, t;
    try {
      for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next()) if (n.value.onUpdateImgCardBg()) return;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    var i = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_up", this),
      r = i.path,
      l = i.bundleName,
      s = i.fromAtlas;
    BaseSprite.refreshWithNode(this._imgCardBg, r, s, false, l);
  }
  updateShadowNode() {
    var e, t;
    try {
      for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next()) if (n.value.onUpdateShadowNode()) return;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    var i = 0 === this.shadowLayerNode.getSiblingIndex() ? "gameplay_img_shadow_dn" : "gameplay_img_shadow_up",
      r = CardUtil.getAtlasPathAndBundleName(i, this),
      l = r.path,
      s = r.bundleName,
      c = r.fromAtlas;
    BaseSprite.refreshWithNode(this._shadowNode, l, c, false, s);
  }
  updateLockBg() {
    var e, t;
    try {
      for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next()) if (n.value.onUpdateLockBg()) return;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    var i = CardUtil.getAtlasPathAndBundleName("gameplay_mask_mj", this),
      r = i.path,
      l = i.bundleName,
      s = i.fromAtlas;
    BaseSprite.refreshWithNode(this._imgLockBg, r, s, false, l);
  }
  updateEffectSelected() {
    var e, t;
    try {
      for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next()) if (n.value.onUpdateEffectSelected()) return;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    this.context.gameCtr.hasRes("spine/card/selectEff/gameplay_selected_efx") && (this._effectSelectedProxy = BaseSpine.refreshWithNode(this._effectSelected, "spine/card/selectEff/gameplay_selected_efx"));
  }
  showSelectEffect() {
    var e, t, o;
    try {
      for (var n = __values(this._components.values()), i = n.next(); !i.done; i = n.next()) if (i.value.onShowSelectEffect()) return;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    if (null === (o = this._imgSelected) || void 0 === o || !o.active) {
      this.imgSelected.active = true;
      this.imgSelectedCardBg.active = true;
      this.effectSelected.active = true;
      this.realShowSelectEffect();
    }
  }
  hideSelectEffect() {
    this._imgSelected && (this._imgSelected.active = false);
    this._imgSelectedCardBg && (this._imgSelectedCardBg.active = false);
    this._effectSelected && (this._effectSelected.active = false);
    this._components.forEach(function (e) {
      return e.onHideSelectEffect();
    });
  }
  realShowSelectEffect() {
    var e,
      t,
      o = this,
      n = false;
    try {
      for (var i = __values(this._components.values()), r = i.next(); !r.done; r = i.next()) if (r.value.onRealShowSelectEffect()) {
        n = true;
        break;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    if (!n) {
      var l = this._effectSelectedProxy;
      if (l) if (l.ready) {
        var s = l.getSkeleton();
        (null == s ? void 0 : s.skeletonData) && !s.findAnimation("test") && l.setAnimation("init", -1);
      } else l.setOnReadyCallback(function () {
        cc.isValid(o._tileNode) && cc.isValid(o._cardNode) && o.realShowSelectEffect();
      });
    }
  }
  showPropHint() {
    var e;
    if (this.context.getTile2SlotType() !== ETile2SlotType.Slot3 || !this.tileObject.getIsInSlotBar()) if (null !== (e = this._effectPropHint) && void 0 !== e && e.active) this._components.forEach(function (e) {
      return e.onShowPropHint();
    });else {
      this._effectPropHint || (this._effectPropHint = this.createEffectPropHint(this.tileNode.getChildByName(ETileNodeNames.effectPropHint)));
      this._effectPropHintProxy || this.updateEffectPropHint();
      this._effectPropHint.active = true;
      this._effectPropHintProxy.setAnimation("init", -1);
      this._components.forEach(function (e) {
        return e.onShowPropHint();
      });
    }
  }
  hidePropHint() {
    var e;
    if (null === (e = this._effectPropHint) || void 0 === e ? void 0 : e.active) {
      this._effectPropHint.active = false;
      this._components.forEach(function (e) {
        return e.onHidePropHint();
      });
    } else this._components.forEach(function (e) {
      return e.onHidePropHint();
    });
  }
  getSelectedScale() {
    return this.info.tileObject.getSelectScale() || 1;
  }
  selected() {
    var e = this;
    if (this.isSelect()) this.selectedFinish();else {
      this.showSelectEffect();
      this.playSelectAnimation(function () {
        return e.selectedFinish();
      });
    }
  }
  selectedFinish() {}
  cancelSelected() {
    var e = this;
    if (this.isSelect()) {
      this.hideSelectEffect();
      this.cancelSelectedAnimation(function () {
        e.resetPosition();
        e.cancelSelectedFinish();
      });
    } else {
      this.resetPosition();
      this.cancelSelectedFinish();
    }
  }
  playSelectAnimation(e) {
    null == e || e();
    this._components.forEach(function (e) {
      return e.onPlaySelectAnimation();
    });
  }
  cancelSelectedAnimation(e) {
    this.tile2CancelSelectedAnimation(e);
    this._components.forEach(function (e) {
      return e.onCancelSelectedAnimation();
    });
  }
  resetToNormal() {
    var e;
    this.hidePropHint();
    this.hideSelectEffect();
    null === (e = this.getComponent(ETileComponent.Tile2ComponentLockDarken)) || void 0 === e || e.resetLockDarkenImmediate();
    this._imgLockBg && (this._imgLockBg.active = false);
  }
  resetPosition() {}
  touchEndForMove() {
    this.resetSiblingIndex();
  }
  cancelTouch() {
    var e = this;
    this.isSelect() && this.tile2CancelSelectedAnimation(function () {
      e.hideSelectEffect();
    });
  }
  stopAllAnimation() {
    this.hideSelectEffect();
  }
  playHintAnimation(e, t) {
    var o;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentHint)) || void 0 === o || o.playHintAnimation(e, t);
  }
  exitHintAnimation() {
    var e;
    null === (e = this.getComponent(ETileComponent.Tile2ComponentHint)) || void 0 === e || e.exitHintAnimation();
  }
  pauseHintShake() {
    var e;
    null === (e = this.getComponent(ETileComponent.Tile2ComponentHint)) || void 0 === e || e.pauseHintShake();
  }
  resumeHintShake() {
    var e;
    null === (e = this.getComponent(ETileComponent.Tile2ComponentHint)) || void 0 === e || e.resumeHintShake();
  }
  tile2SetLockDarken(e, t = false) {
    var o;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentLockDarken)) || void 0 === o || o.setLockDarkenActive(e, t);
  }
  attachNodeStateAnis(e) {
    var t, o;
    try {
      for (var n = __values(e), i = n.next(); !i.done; i = n.next()) i.value.reset();
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    this._nodeStateAnis = e;
  }
  playAttachEnterAni(e, t) {
    for (var o = this, n = function n(n) {
        i._nodeStateAnis[n].playAni(e, function () {
          n === o._nodeStateAnis.length - 1 && (null == t || t());
        });
      }, i = this, r = 0; r < this._nodeStateAnis.length; r++) n(r);
  }
  playAttachExitAni(e, t) {
    for (var o = this, n = function n(n) {
        i._nodeStateAnis[n].exitAni(e, function () {
          n === o._nodeStateAnis.length - 1 && (null == t || t());
        });
      }, i = this, r = 0; r < this._nodeStateAnis.length; r++) n(r);
  }
  forceEnterAttachEnterAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].forceEnter(e);
    null == t || t();
  }
  forceExitAttachExitAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].forceExit(e);
    null == t || t();
  }
  forceEnterPlayAttachEnterAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].playAniForce(e, t);
  }
  forceExitPlayAttachExitAni(e, t) {
    for (var o = 0; o < this._nodeStateAnis.length; o++) this._nodeStateAnis[o].exitAniForce(e, t);
  }
  dropToPosition() {}
  cancelDropToPosition() {}
  setPositionWithDelta() {}
  playSelectLoopAnimation() {}
  stopSelectLoopAnimation() {}
  isSelectLoopPlaying() {
    return false;
  }
  @mj.traitEvent("Tile2NodeObj_playAnim")
  playAnimNodeAnimation(e, t, o = true, n?, i?, r?, a?) {
    this.stopAnimNodeAnimation();
    var l = this.updateTempAnimNode(),
      s = BaseSpine.refreshWithNode(l, e, a);
    i && s.attachNode("hook_mahjong", i);
    if (r) {
      s.stopAtFirstFrameOf(t);
    } else {
      s.setAnimation(t, o ? -1 : 1, n);
    }
    return s;
  }
  stopAnimNodeAnimation() {
    this.tileNode.parent = this.animNode;
    this.tileNode.setPosition(0, 0, 0);
    this.tileNode.setScale(1 / this.info.tileObject.layoutScale);
    this.tileNode.angle = 0;
    this.destroyTempAnimNode();
  }
  tile2PlayMove(e) {
    var t;
    this.isSelect() || this.showSelectEffect();
    null === (t = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === t || t.tile2DragMove(new cc.Vec3(e.x, e.y, 0));
  }
  tile2AddToSlotBar4(e, t) {
    var o, n;
    this.hideSelectEffect();
    null === (o = this.getComponent(ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
    null === (n = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.flyToSlot(e, t);
  }
  tile2ResetMoveFinish() {}
  resetSiblingIndex() {
    this.cardNode.zIndex = this.info.tileObject.gridZIndex;
    this.shadowCardNode.zIndex = this.info.tileObject.gridZIndex;
  }
  tile2ResetMove(e) {
    var t = this,
      o = function o() {
        t.tile2ResetMoveFinish();
        null == e || e();
      };
    if (this.isSelect()) {
      this.tile2CancelSelectedAnimation(function () {
        t.hideSelectEffect();
        o();
      });
    } else {
      o();
    }
  }
  tile2CancelSelectedAnimation(e) {
    var t,
      o = this;
    null === (t = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === t || t.moveBack(function () {
      o.resetSiblingIndex();
      null == e || e();
    });
  }
  tile2ReturnFromSlotBar(e, t) {
    var o,
      n = this;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.moveBack(function () {
      n.resetSiblingIndex();
      null == t || t();
    });
  }
  tile2RevertFromSlotBar(e) {
    var t,
      o = this;
    null === (t = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === t || t.moveBack(function () {
      o.resetSiblingIndex();
      null == e || e();
    });
  }
  tile2RollCard(e) {
    var t = this.info.tileObject.getIsBack(),
      o = this.getComponent(ETileComponent.Tile2ComponentRollCard);
    if (o) {
      o.playRoll(t, e);
    } else {
      null == e || e();
    }
  }
  tile2RevealRollCard(e, t) {
    var o = this.getComponent(ETileComponent.Tile2ComponentRollCard);
    if (o) {
      o.playReveal(e, t);
    } else {
      null == t || t();
    }
  }
  tile2ShowFrontImmediately(e) {
    var t = this.getComponent(ETileComponent.Tile2ComponentRollCard);
    if (t) {
      t.showFrontImmediately();
    } else {
      null == e || e();
    }
  }
  tile2ShowBackImmediately(e) {
    var t = this.getComponent(ETileComponent.Tile2ComponentRollCard);
    if (t) {
      t.showBackImmediately();
    } else {
      null == e || e();
    }
  }
  tile2ClearFromSlotBarToPos(e, t) {
    var o;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.clearFromSlotBarToPos(e, t);
  }
  tile2ClearFromBoardToPos(e, t) {
    var o, n;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
    null === (n = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.clearFromBoardToPos(e, t);
  }
  tile2ClearFromBoardToSlotBar(e, t) {
    var o, n;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
    null === (n = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.clearFromBoardToSlotBar(e, t);
  }
  tile2ClearWaitOnSlotBar(e, t) {
    var o;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.clearWaitOnSlotBar(e, t);
  }
  tile2NoClearAddToSlotBar(e, t) {
    var o, n;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
    null === (n = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.noClearAddToSlotBar(e, t);
  }
  tile2MoveInSlot(e, t) {
    var o;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.moveInSlot(e, t);
  }
  onClear() {
    this.hideSelectEffect();
    this._components.forEach(function (e) {
      return e.onClear();
    });
  }
  tile2BeforeFail(e, t) {
    var o;
    null === (o = this.getComponent(ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.beforeFail(e, t, true);
  }
  clear() {
    super.clear.call(this);
    this._components.forEach(function (e) {
      return e.onDestroy();
    });
  }
  onlyClear() {
    super.onlyClear.call(this);
    this._components.forEach(function (e) {
      return e.onDestroy();
    });
  }
}
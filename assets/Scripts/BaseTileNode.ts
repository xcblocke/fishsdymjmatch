import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import { EGameEvent } from './simulator/constant/GameEvent';
import { MjGameType, ETile2SlotType } from './core/simulator/constant/GameTypeEnums';
import { NormalFlipNodeStateAni } from './NormalFlipNodeStateAni';
import { NormalStateCtl } from './NormalStateCtl';
import { TileNodePool } from './TileNodePool';
export var ETileNodeNames = {
  imgCardBg: "imgCardBg",
  imgSelectedCardBg: "imgSelectedCardBg",
  imgCard: "imgCard",
  imgLockBg: "imgLockBg",
  imgSelected: "imgSelected",
  effectPropHint: "effectPropHint",
  effectSelected: "effectSelected"
};
export var ETileShadowNodeNames = {
  imgShadow: "imgShadow"
};
export var TileAnimNodeName = "animNode";
export var TileNodeName = "tileNode";
export var TileShadowNodeName = "shadowNode";
(TileShadowNodeZIndexMap = {})[ETileShadowNodeNames.imgShadow] = 10;
export var TileShadowNodeZIndexMap = TileShadowNodeZIndexMap;
export enum ETileNodeZIndex {
  RollCardLight = 15,
  Custom1 = 100,
  Custom2 = 101,
}
(TileNodeZIndexMap = {})[ETileNodeNames.imgCardBg] = 10;
TileNodeZIndexMap[ETileNodeNames.imgSelectedCardBg] = 20;
TileNodeZIndexMap[ETileNodeNames.imgCard] = 30;
TileNodeZIndexMap[ETileNodeNames.imgLockBg] = 40;
TileNodeZIndexMap[ETileNodeNames.imgSelected] = 50;
TileNodeZIndexMap[ETileNodeNames.effectPropHint] = 60;
TileNodeZIndexMap[ETileNodeNames.effectSelected] = 70;
export var TileNodeZIndexMap = TileNodeZIndexMap;
export class BaseTileNode {
  _posKey = "";
  _id = "";
  _info = null;
  _cardNode = null;
  _shadowCardNode = null;
  _shadowNode = null;
  _animNode = null;
  _tileNode = null;
  _imgCardBg = null;
  _imgCard = null;
  _cardStateCtl = null;
  _shadowCardStateCtl = null;
  _tileNodeStateCtl = null;
  _shadowNodeStateCtl = null;
  _normalFlip = null;
  _cardUniqueInfo = null;
  _effectSelectedProxy = null;
  _effectPropHintProxy = null;
  _imgSelected = null;
  _imgSelectedCardBg = null;
  _effectSelected = null;
  _effectPropHint = null;
  _imgLockBg = null;
  static CONST_SHOW_TOUCH_SIZE_MOVE = false;
  static CONST_SHOW_TOUCH_SIZE = false;
  get cardUniqueInfo() {
    return this._cardUniqueInfo;
  }
  get normalFlip() {
    return this._normalFlip;
  }
  get effectSelectedProxy() {
    return this._effectSelectedProxy;
  }
  get effectPropHint() {
    if (!this._effectPropHint) {
      this._effectPropHint = this.createEffectPropHint(this.tileNode.getChildByName(ETileNodeNames.effectPropHint));
      this.updateEffectPropHint();
    }
    return this._effectPropHint;
  }
  get imgSelected() {
    if (!this._imgSelected) {
      this._imgSelected = this.createImgSelected(this.tileNode.getChildByName(ETileNodeNames.imgSelected));
      this.updateImgSelected();
    }
    return this._imgSelected;
  }
  get imgSelectedCardBg() {
    if (!this._imgSelectedCardBg) {
      this._imgSelectedCardBg = this.createImgSelectedCardBg(this.tileNode.getChildByName(ETileNodeNames.imgSelectedCardBg));
      this.updateImgSelectedCardBg();
    }
    return this._imgSelectedCardBg;
  }
  get effectSelected() {
    if (!this._effectSelected) {
      this._effectSelected = this.createEffectSelected(this.tileNode.getChildByName(ETileNodeNames.effectSelected));
      this.updateEffectSelected();
    }
    return this._effectSelected;
  }
  get initType() {
    return this._initType;
  }
  get info() {
    return this._info;
  }
  get context() {
    return this._info.context;
  }
  get tileNode() {
    return this._tileNode;
  }
  get index() {
    return this._info.index;
  }
  get imgCardBg() {
    return this._imgCardBg;
  }
  get imgCard() {
    return this._imgCard;
  }
  get imgLockBg() {
    if (!this._imgLockBg) {
      this._imgLockBg = this.createLockBg(this.tileNode.getChildByName(ETileNodeNames.imgLockBg));
      this.updateLockBg();
    }
    return this._imgLockBg;
  }
  get shadowNode() {
    return this._shadowNode;
  }
  get shadowCardNode() {
    return this._shadowCardNode;
  }
  get cardNode() {
    return this._cardNode;
  }
  get layerNode() {
    return this._info.layerNode;
  }
  get shadowLayerNode() {
    return this._info.shadowLayerNode;
  }
  get effectLayerNode() {
    return this.context.gameView.effectNode;
  }
  get dragRootNode() {
    return this.context.gameView.nodeDragCardRoot;
  }
  get tileObject() {
    return this._info.tileObject;
  }
  get animNode() {
    return this._animNode;
  }
  get posKey() {
    return this._posKey;
  }
  get id() {
    return this._id;
  }
  @mj.traitEvent("BaseTileNode_refreshNode")
  refreshNode(e) {
    this._info = e;
    this._posKey = e.tileObject.saveKey();
    this._id = e.tileObject.id;
    if (!this._cardNode) {
      var t = TileNodePool.getInstance().getCacheNode();
      this._cardNode = this.createCardNode(t);
    }
    if (!this._shadowCardNode) {
      var n = TileNodePool.getInstance().getCacheShadowNode();
      this._shadowCardNode = this.createShadowCardNode(n);
    }
    this._shadowNode || (this._shadowNode = this.createShadowNode(this.shadowCardNode.getChildByName(ETileShadowNodeNames.imgShadow)));
    this._animNode || (this._animNode = this.createAnimNode(this.cardNode.getChildByName(TileAnimNodeName)));
    this._tileNode || (this._tileNode = this.createTileNode(this.animNode.getChildByName(TileNodeName)));
    this._imgCardBg || (this._imgCardBg = this.createImgCardBg(this.tileNode.getChildByName(ETileNodeNames.imgCardBg)));
    this._imgCard || (this._imgCard = this.createImgCard(this.tileNode.getChildByName(ETileNodeNames.imgCard)));
    this._effectPropHint && (this._effectPropHint.active = false);
    this._effectSelected && (this._effectSelected.active = false);
    this._imgSelected && (this._imgSelected.active = false);
    this._imgSelectedCardBg && (this._imgSelectedCardBg.active = false);
    this.updateShadowNode();
    this.updateImgCardBg();
    this.updateImgCard();
    if (this.info.tileObject.isCardLock()) {
      this._imgLockBg || (this._imgLockBg = this.createLockBg(this.tileNode.getChildByName(ETileNodeNames.imgLockBg)));
      this.updateLockBg();
    } else this._imgLockBg && (this._imgLockBg.active = false);
    this.updateAnimMgr();
    this.refreshZIndex();
  }
  refreshZIndex() {
    this.cardNode.setSiblingIndex(this.info.index);
    this.shadowCardNode.setSiblingIndex(this.info.index);
  }
  changeZIndex(e, t) {
    e && (e.zIndex = t);
  }
  @mj.traitEvent("BaseTileNode_upAnimMgr")
  updateAnimMgr() {
    this._cardStateCtl || (this._cardStateCtl = new NormalStateCtl(this.cardNode, this));
    this._shadowCardStateCtl || (this._shadowCardStateCtl = new NormalStateCtl(this.shadowCardNode, this));
    this._tileNodeStateCtl || (this._tileNodeStateCtl = new NormalStateCtl(this.tileNode, this));
    this._shadowNodeStateCtl || (this._shadowNodeStateCtl = new NormalStateCtl(this.shadowNode, this));
  }
  updateNormalFlip() {
    this._normalFlip || (this._normalFlip = new NormalFlipNodeStateAni(this.animNode, this));
  }
  createAnimNode(e) {
    e.setParent(this.cardNode);
    e.setPosition(0, 0, 0);
    e.setScale(this.info.tileObject.layoutScale);
    return e;
  }
  updateTempAnimNode() {
    this.animNode.getChildByName("tempAnimNode") && this.animNode.getChildByName("tempAnimNode").destroy();
    var e = new cc.Node();
    e.name = "tempAnimNode";
    e.setParent(this.animNode);
    e.setPosition(0, 0, 0);
    e.setScale(1);
    e.angle = 0;
    return e;
  }
  destroyTempAnimNode() {
    var e = this.cardNode.addComponent(cc.Component),
      t = this.animNode.getChildByName("tempAnimNode");
    if (t && cc.isValid(t)) {
      t.name = "destroy_temp_anim_node";
      t.getComponent(BaseSpine) && t.getComponent(BaseSpine).clear(true);
      e.scheduleOnce(function () {
        t && cc.isValid(t) && t.destroy();
        cc.isValid(e) && e.destroy();
      }, 0);
    }
  }
  createCardNode(e) {
    var t = e || new cc.Node();
    t.setParent(this.layerNode);
    t.setPosition(0, 0, 0);
    t.setScale(1, 1, 1);
    t.name = "cardNode" + this.tileObject.id + "_" + this.info.index;
    t.setSiblingIndex(this.info.index);
    t.setContentSize(this.info.tileObject.getContentSize());
    t.position = this.info.tileObject.getPosition();
    return t;
  }
  createShadowCardNode(e) {
    e.setParent(this.shadowLayerNode);
    e.setPosition(0, 0, 0);
    e.setScale(1, 1, 1);
    e.setContentSize(this.info.tileObject.getContentSize());
    e.setSiblingIndex(this.info.index);
    e.position = this.info.tileObject.getPosition();
    e.name = "shadowCardNode" + this.tileObject.id + "_" + this.info.index;
    return e;
  }
  createTileNode(e) {
    e.setPosition(0, 0, 0);
    e.setScale(1 / this.info.tileObject.layoutScale);
    e.setAnchorPoint(0.5, 0.5);
    e.setContentSize(this.info.tileObject.getContentSize());
    return e;
  }
  createShadowNode(e) {
    e.setPosition(0, 0, 0);
    e.setContentSize(this.info.tileObject.getShadowContentSize());
    e.getComponent(cc.Sprite) || e.addComponent(cc.Sprite);
    var t = e.getComponent(cc.Sprite);
    t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    t.trim = false;
    e.setSiblingIndex(this.index);
    return e;
  }
  updateShadowNode() {
    var e = this.shadowLayerNode.getSiblingIndex();
    this.context.gameType == MjGameType.Classic && (e = Number(this.info.layerIndex));
    if (0 == e) {
      var t = CardUtil.getAtlasPathAndBundleName("gameplay_img_shadow_dn", this),
        o = t.path,
        n = t.bundleName,
        i = t.fromAtlas;
      BaseSprite.refreshWithNode(this._shadowNode, o, i, false, n);
    } else {
      var r = CardUtil.getAtlasPathAndBundleName("gameplay_img_shadow_up", this);
      o = r.path, n = r.bundleName, i = r.fromAtlas;
      BaseSprite.refreshWithNode(this._shadowNode, o, i, false, n);
    }
  }
  @mj.traitEvent("BaseTileNode_crtImgCardBg")
  createImgCardBg(e) {
    e.setContentSize(this.info.tileObject.getBgContentSize());
    e.setAnchorPoint(0.5, 0.5);
    e.setPosition(0, 0, 0);
    return e;
  }
  createLockBg(e) {
    if (!e) {
      (e = new cc.Node()).parent = this.tileNode;
      e.name = ETileNodeNames.imgLockBg;
      e.zIndex = TileNodeZIndexMap[ETileNodeNames.imgLockBg];
    }
    e.setContentSize(this.info.tileObject.getBgContentSize());
    e.setAnchorPoint(0.5, 0.5);
    e.setPosition(0, 0, 0);
    e.getComponent(cc.Sprite) || e.addComponent(cc.Sprite);
    e.getComponent(cc.Sprite).enabled || (e.getComponent(cc.Sprite).enabled = true);
    var t = e.getComponent(cc.Sprite);
    t.type = cc.Sprite.Type.SLICED;
    t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    t.trim = false;
    e.active = false;
    e.name = "imgLockBg";
    return e;
  }
  createImgSelectedCardBg(e) {
    if (!e) {
      (e = new cc.Node()).parent = this.tileNode;
      e.name = ETileNodeNames.imgSelectedCardBg;
      e.zIndex = TileNodeZIndexMap[ETileNodeNames.imgSelectedCardBg];
    }
    e.setContentSize(this.info.tileObject.getCardContentSize());
    e.setAnchorPoint(0.5, 0.5);
    e.setPosition(0, 0, 0);
    return e;
  }
  updateImgSelectedCardBg() {
    var e = CardUtil.getAtlasPathAndBundleName("gameplay_select_mj", this),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this._imgSelectedCardBg, t, n, false, o);
  }
  createImgSelected(e) {
    if (!e) {
      (e = new cc.Node()).parent = this.tileNode;
      e.name = ETileNodeNames.imgSelected;
      e.zIndex = TileNodeZIndexMap[ETileNodeNames.imgSelected];
    }
    e.setContentSize(this.info.tileObject.getSelectContentSize());
    e.setAnchorPoint(0.5, 0.5);
    e.setPosition(0, 0, 0);
    e.name = "imgSelected";
    e.getComponent(cc.Sprite) || e.addComponent(cc.Sprite);
    var t = e.getComponent(cc.Sprite);
    t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    t.trim = false;
    this.setImgSelectedBlendMode(t);
    return e;
  }
  @mj.traitEvent("BaseTileNode_setBlend")
  setImgSelectedBlendMode(e) {
    e.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
    e.dstBlendFactor = cc.macro.BlendFactor.ONE;
  }
  updateImgCardBg() {
    var e = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_up", this),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this._imgCardBg, t, n, false, o);
  }
  @mj.traitEvent("BaseTileNode_crtImgCard")
  createImgCard(e) {
    e.setContentSize(this.info.tileObject.getCardContentSize());
    e.setAnchorPoint(0.5, 0.5);
    e.setPosition(0, 0, 0);
    return e;
  }
  getDisplayResName() {
    return this.tileObject.resName;
  }
  updateImgCard() {
    var e = this.getDisplayResName(),
      t = CardUtil.getAtlasPathAndBundleName(e, this),
      o = t.path,
      n = t.bundleName,
      i = t.fromAtlas;
    BaseSprite.refreshWithNode(this._imgCard, o, i, false, n);
    this.saveCardUniqueInfo(n, o, i);
  }
  saveCardUniqueInfo(e, t, o) {
    this._cardUniqueInfo = {
      bundleName: e,
      path: t,
      fromAtlas: o
    };
  }
  updateImgCardByImg(e, t, o) {
    BaseSprite.refreshWithNode(this._imgCard, e, o, false, t);
  }
  updateLockBg() {
    var e = CardUtil.getAtlasPathAndBundleName("gameplay_mask_mj", this),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this._imgLockBg, t, n, false, o);
  }
  updateImgSelected() {
    this.context.gameCtr.hasRes("texture/card/gameplay_selected") && BaseSprite.refreshWithNode(this._imgSelected, "texture/card/gameplay_selected");
  }
  createEffectSelected(e) {
    if (!e) {
      (e = new cc.Node()).parent = this.tileNode;
      e.name = ETileNodeNames.effectSelected;
      e.zIndex = TileNodeZIndexMap[ETileNodeNames.effectSelected];
    }
    e.setPosition(0, 0, 0);
    e.scale = 1 * this.info.tileObject.layoutScale;
    return e;
  }
  updateEffectSelected() {
    this.context.gameCtr.hasRes("spine/card/selectEff/gameplay_selected_efx") && (this._effectSelectedProxy = BaseSpine.refreshWithNode(this._effectSelected, "spine/card/selectEff/gameplay_selected_efx"));
  }
  createEffectPropHint(e) {
    var t, n;
    if (!e) {
      (e = new cc.Node()).parent = this.tileNode;
      e.name = ETileNodeNames.effectPropHint;
      e.zIndex = TileNodeZIndexMap[ETileNodeNames.effectPropHint];
    }
    e.setPosition(0, 0, 0);
    var i = null !== (n = null === (t = this.info.cardLayoutConfig) || void 0 === t ? void 0 : t.hintEffScale) && void 0 !== n ? n : 1,
      r = this.info.tileObject.layoutScale;
    e.scale = i * r;
    return e;
  }
  updateEffectPropHint() {
    this._effectPropHintProxy = BaseSpine.refreshWithNode(this._effectPropHint, "spine/propHitEff/gameplay_hint");
  }
  showDebugInfo() {}
  updateDebugTouchSize(e = false) {}
  updateDebugMoveTouchSize(e, t = 1.5) {}
  updateDebugCenter() {}
  @mj.traitEvent("BaseTileNode_showSelEff")
  showSelectEffect() {
    if (!this._imgSelected || !this._imgSelected.active) {
      this.imgSelected.active = true;
      this.imgSelectedCardBg.active = true;
      this.effectSelected.active = true;
      this.realShowSelectEffect();
    }
  }
  ensureSelectResources() {
    this._imgSelected || (this._imgSelected = this.createImgSelected(this.tileNode.getChildByName(ETileNodeNames.imgSelected)));
    this._imgSelectedCardBg || (this._imgSelectedCardBg = this.createImgSelectedCardBg(this.tileNode.getChildByName(ETileNodeNames.imgSelectedCardBg)));
    this._effectSelected || (this._effectSelected = this.createEffectSelected(this.tileNode.getChildByName(ETileNodeNames.effectSelected)));
    var e = this._imgSelected ? this._imgSelected.getComponent(cc.Sprite) : null;
    !this._imgSelected || e && e.spriteFrame || this.updateImgSelected();
    var t = this._imgSelectedCardBg ? this._imgSelectedCardBg.getComponent(cc.Sprite) : null;
    !this._imgSelectedCardBg || t && t.spriteFrame || this.updateImgSelectedCardBg();
    this._effectSelectedProxy || this.updateEffectSelected();
  }
  @mj.traitEvent("BaseTileNode_rsSelectEff")
  realShowSelectEffect() {
    var e = this;
    if (this._effectSelectedProxy) if (this._effectSelectedProxy.ready) {
      var t = this._effectSelectedProxy.getSkeleton();
      t && t.skeletonData && (null !== t.findAnimation("test") || this._effectSelectedProxy.setAnimation("init", -1));
    } else this._effectSelectedProxy.setOnReadyCallback(function () {
      cc.isValid(e._tileNode) && cc.isValid(e._cardNode) && e.realShowSelectEffect();
    });
  }
  hideSelectEffect() {
    this._imgSelected && (this._imgSelected.active = false);
    this._imgSelectedCardBg && (this._imgSelectedCardBg.active = false);
    this._effectSelected && (this._effectSelected.active = false);
  }
  @mj.traitEvent("BaseTileNode_scale")
  getSelectedScale() {
    return 1;
  }
  selectedFinish() {
    mj.EventManager.emit(EGameEvent.TileNode_SelectedFinish, this);
  }
  cancelSelectedFinish() {
    mj.EventManager.emit(EGameEvent.TileNode_UnSelectedFinish, this);
  }
  moveFinish() {
    mj.EventManager.emit(EGameEvent.TileNode_MoveFinish, this);
  }
  resetSiblingIndex() {
    this.cardNode.zIndex = this.info.tileObject.gridZIndex;
    this.shadowCardNode.zIndex = this.info.tileObject.gridZIndex;
  }
  resetShadowSize() {
    this.updateShadowNode();
    this.shadowNode.setContentSize(this.info.tileObject.getShadowContentSize());
  }
  isSelect() {
    return this._imgSelected && this._imgSelected.active;
  }
  @mj.traitEvent("BaseTileNode_showHint")
  showPropHint() {
    if (!this._effectPropHint || !this._effectPropHint.active) {
      this._effectPropHint || (this._effectPropHint = this.createEffectPropHint(this.tileNode.getChildByName(ETileNodeNames.effectPropHint)));
      this._effectPropHintProxy || this.updateEffectPropHint();
      this._effectPropHint.active = true;
      this._effectPropHintProxy.setAnimation("init", -1);
    }
  }
  @mj.traitEvent("BaseTileNode_hideHint")
  hidePropHint() {
    if (this._effectPropHint && this._effectPropHint.active) {
      this._effectPropHint.active = false;
      mj.EventManager.emit(EGameEvent.TileNode_HidePropHint, this);
    }
  }
  resetPosition() {}
  clear() {
    this.hidePropHint();
    TileNodePool.getInstance().pushCacheNode(this.cardNode);
    TileNodePool.getInstance().pushCacheShadowNode(this.shadowCardNode);
    this.resetNodeReferences();
  }
  onlyClear() {
    TileNodePool.getInstance().pushCacheNode(this.cardNode);
    TileNodePool.getInstance().pushCacheShadowNode(this.shadowCardNode);
    this.resetNodeReferences();
  }
  resetNodeReferences() {
    this._cardNode = null;
    this._shadowCardNode = null;
    this._shadowNode = null;
    this._animNode = null;
    this._tileNode = null;
    this._imgCardBg = null;
    this._imgCard = null;
    this._imgSelectedCardBg = null;
    this._imgLockBg = null;
    this._imgSelected = null;
    this._effectPropHint = null;
    this._effectSelected = null;
    this._cardStateCtl = null;
    this._shadowCardStateCtl = null;
    this._tileNodeStateCtl = null;
    this._shadowNodeStateCtl = null;
  }
  hide() {
    this.cardNode.opacity = 0;
    this.shadowCardNode.opacity = 0;
  }
  show() {
    this.cardNode.opacity = 255;
    this.shadowCardNode.opacity = 255;
  }
  isInSlotBar() {
    return this.info.tileObject.getIsInSlotBar();
  }
  addToSlotBar(e, t = 0, o = new cc.Vec3(0, 0, 0), n = 1, i?) {
    this.shadowCardNode.parent = e;
    if (i === ETile2SlotType.Slot3) {
      this.shadowCardNode.opacity = 0;
    } else {
      this.shadowCardNode.opacity = 255;
    }
    this.cardNode.parent = e;
    this.shadowCardNode.zIndex = t;
    this.cardNode.zIndex = 1000 + t;
    this.cardNode.position = o;
    this.shadowCardNode.position = o;
    this.cardNode.scale = n;
    this.shadowCardNode.scale = n;
  }
  updateZIndexInSlotBar(e) {
    this.shadowCardNode.zIndex = e;
    this.cardNode.zIndex = 1000 + e;
  }
}
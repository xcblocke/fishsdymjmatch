"use strict";
cc._RF.push(module, 'e6c9dnw50FBDId22s5hgHbp', 'BaseTileNode');
// Scripts/BaseTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTileNode = exports.TileNodeZIndexMap = exports.ETileNodeZIndex = exports.TileShadowNodeZIndexMap = exports.TileShadowNodeName = exports.TileNodeName = exports.TileAnimNodeName = exports.ETileShadowNodeNames = exports.ETileNodeNames = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var GameEvent_1 = require("./simulator/constant/GameEvent");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var NormalFlipNodeStateAni_1 = require("./NormalFlipNodeStateAni");
var NormalStateCtl_1 = require("./NormalStateCtl");
var TileNodePool_1 = require("./TileNodePool");
exports.ETileNodeNames = {
    imgCardBg: "imgCardBg",
    imgSelectedCardBg: "imgSelectedCardBg",
    imgCard: "imgCard",
    imgLockBg: "imgLockBg",
    imgSelected: "imgSelected",
    effectPropHint: "effectPropHint",
    effectSelected: "effectSelected"
};
exports.ETileShadowNodeNames = {
    imgShadow: "imgShadow"
};
exports.TileAnimNodeName = "animNode";
exports.TileNodeName = "tileNode";
exports.TileShadowNodeName = "shadowNode";
(exports.TileShadowNodeZIndexMap = {})[exports.ETileShadowNodeNames.imgShadow] = 10;
exports.TileShadowNodeZIndexMap = exports.TileShadowNodeZIndexMap;
var ETileNodeZIndex;
(function (ETileNodeZIndex) {
    ETileNodeZIndex[ETileNodeZIndex["RollCardLight"] = 15] = "RollCardLight";
    ETileNodeZIndex[ETileNodeZIndex["Custom1"] = 100] = "Custom1";
    ETileNodeZIndex[ETileNodeZIndex["Custom2"] = 101] = "Custom2";
})(ETileNodeZIndex = exports.ETileNodeZIndex || (exports.ETileNodeZIndex = {}));
(exports.TileNodeZIndexMap = {})[exports.ETileNodeNames.imgCardBg] = 10;
exports.TileNodeZIndexMap[exports.ETileNodeNames.imgSelectedCardBg] = 20;
exports.TileNodeZIndexMap[exports.ETileNodeNames.imgCard] = 30;
exports.TileNodeZIndexMap[exports.ETileNodeNames.imgLockBg] = 40;
exports.TileNodeZIndexMap[exports.ETileNodeNames.imgSelected] = 50;
exports.TileNodeZIndexMap[exports.ETileNodeNames.effectPropHint] = 60;
exports.TileNodeZIndexMap[exports.ETileNodeNames.effectSelected] = 70;
exports.TileNodeZIndexMap = exports.TileNodeZIndexMap;
var BaseTileNode = /** @class */ (function () {
    function BaseTileNode() {
        this._posKey = "";
        this._id = "";
        this._info = null;
        this._cardNode = null;
        this._shadowCardNode = null;
        this._shadowNode = null;
        this._animNode = null;
        this._tileNode = null;
        this._imgCardBg = null;
        this._imgCard = null;
        this._cardStateCtl = null;
        this._shadowCardStateCtl = null;
        this._tileNodeStateCtl = null;
        this._shadowNodeStateCtl = null;
        this._normalFlip = null;
        this._cardUniqueInfo = null;
        this._effectSelectedProxy = null;
        this._effectPropHintProxy = null;
        this._imgSelected = null;
        this._imgSelectedCardBg = null;
        this._effectSelected = null;
        this._effectPropHint = null;
        this._imgLockBg = null;
    }
    Object.defineProperty(BaseTileNode.prototype, "cardUniqueInfo", {
        get: function () {
            return this._cardUniqueInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "normalFlip", {
        get: function () {
            return this._normalFlip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "effectSelectedProxy", {
        get: function () {
            return this._effectSelectedProxy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "effectPropHint", {
        get: function () {
            if (!this._effectPropHint) {
                this._effectPropHint = this.createEffectPropHint(this.tileNode.getChildByName(exports.ETileNodeNames.effectPropHint));
                this.updateEffectPropHint();
            }
            return this._effectPropHint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "imgSelected", {
        get: function () {
            if (!this._imgSelected) {
                this._imgSelected = this.createImgSelected(this.tileNode.getChildByName(exports.ETileNodeNames.imgSelected));
                this.updateImgSelected();
            }
            return this._imgSelected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "imgSelectedCardBg", {
        get: function () {
            if (!this._imgSelectedCardBg) {
                this._imgSelectedCardBg = this.createImgSelectedCardBg(this.tileNode.getChildByName(exports.ETileNodeNames.imgSelectedCardBg));
                this.updateImgSelectedCardBg();
            }
            return this._imgSelectedCardBg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "effectSelected", {
        get: function () {
            if (!this._effectSelected) {
                this._effectSelected = this.createEffectSelected(this.tileNode.getChildByName(exports.ETileNodeNames.effectSelected));
                this.updateEffectSelected();
            }
            return this._effectSelected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "initType", {
        get: function () {
            return this._initType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "info", {
        get: function () {
            return this._info;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "context", {
        get: function () {
            return this._info.context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "tileNode", {
        get: function () {
            return this._tileNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "index", {
        get: function () {
            return this._info.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "imgCardBg", {
        get: function () {
            return this._imgCardBg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "imgCard", {
        get: function () {
            return this._imgCard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "imgLockBg", {
        get: function () {
            if (!this._imgLockBg) {
                this._imgLockBg = this.createLockBg(this.tileNode.getChildByName(exports.ETileNodeNames.imgLockBg));
                this.updateLockBg();
            }
            return this._imgLockBg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "shadowNode", {
        get: function () {
            return this._shadowNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "shadowCardNode", {
        get: function () {
            return this._shadowCardNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "cardNode", {
        get: function () {
            return this._cardNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "layerNode", {
        get: function () {
            return this._info.layerNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "shadowLayerNode", {
        get: function () {
            return this._info.shadowLayerNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "effectLayerNode", {
        get: function () {
            return this.context.gameView.effectNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "dragRootNode", {
        get: function () {
            return this.context.gameView.nodeDragCardRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "tileObject", {
        get: function () {
            return this._info.tileObject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "animNode", {
        get: function () {
            return this._animNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "posKey", {
        get: function () {
            return this._posKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTileNode.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    BaseTileNode.prototype.refreshNode = function (e) {
        this._info = e;
        this._posKey = e.tileObject.saveKey();
        this._id = e.tileObject.id;
        if (!this._cardNode) {
            var t = TileNodePool_1.TileNodePool.getInstance().getCacheNode();
            this._cardNode = this.createCardNode(t);
        }
        if (!this._shadowCardNode) {
            var n = TileNodePool_1.TileNodePool.getInstance().getCacheShadowNode();
            this._shadowCardNode = this.createShadowCardNode(n);
        }
        this._shadowNode || (this._shadowNode = this.createShadowNode(this.shadowCardNode.getChildByName(exports.ETileShadowNodeNames.imgShadow)));
        this._animNode || (this._animNode = this.createAnimNode(this.cardNode.getChildByName(exports.TileAnimNodeName)));
        this._tileNode || (this._tileNode = this.createTileNode(this.animNode.getChildByName(exports.TileNodeName)));
        this._imgCardBg || (this._imgCardBg = this.createImgCardBg(this.tileNode.getChildByName(exports.ETileNodeNames.imgCardBg)));
        this._imgCard || (this._imgCard = this.createImgCard(this.tileNode.getChildByName(exports.ETileNodeNames.imgCard)));
        this._effectPropHint && (this._effectPropHint.active = false);
        this._effectSelected && (this._effectSelected.active = false);
        this._imgSelected && (this._imgSelected.active = false);
        this._imgSelectedCardBg && (this._imgSelectedCardBg.active = false);
        this.updateShadowNode();
        this.updateImgCardBg();
        this.updateImgCard();
        if (this.info.tileObject.isCardLock()) {
            this._imgLockBg || (this._imgLockBg = this.createLockBg(this.tileNode.getChildByName(exports.ETileNodeNames.imgLockBg)));
            this.updateLockBg();
        }
        else
            this._imgLockBg && (this._imgLockBg.active = false);
        this.updateAnimMgr();
        this.refreshZIndex();
    };
    BaseTileNode.prototype.refreshZIndex = function () {
        this.cardNode.setSiblingIndex(this.info.index);
        this.shadowCardNode.setSiblingIndex(this.info.index);
    };
    BaseTileNode.prototype.changeZIndex = function (e, t) {
        e && (e.zIndex = t);
    };
    BaseTileNode.prototype.updateAnimMgr = function () {
        this._cardStateCtl || (this._cardStateCtl = new NormalStateCtl_1.NormalStateCtl(this.cardNode, this));
        this._shadowCardStateCtl || (this._shadowCardStateCtl = new NormalStateCtl_1.NormalStateCtl(this.shadowCardNode, this));
        this._tileNodeStateCtl || (this._tileNodeStateCtl = new NormalStateCtl_1.NormalStateCtl(this.tileNode, this));
        this._shadowNodeStateCtl || (this._shadowNodeStateCtl = new NormalStateCtl_1.NormalStateCtl(this.shadowNode, this));
    };
    BaseTileNode.prototype.updateNormalFlip = function () {
        this._normalFlip || (this._normalFlip = new NormalFlipNodeStateAni_1.NormalFlipNodeStateAni(this.animNode, this));
    };
    BaseTileNode.prototype.createAnimNode = function (e) {
        e.setParent(this.cardNode);
        e.setPosition(0, 0, 0);
        e.setScale(this.info.tileObject.layoutScale);
        return e;
    };
    BaseTileNode.prototype.updateTempAnimNode = function () {
        this.animNode.getChildByName("tempAnimNode") && this.animNode.getChildByName("tempAnimNode").destroy();
        var e = new cc.Node();
        e.name = "tempAnimNode";
        e.setParent(this.animNode);
        e.setPosition(0, 0, 0);
        e.setScale(1);
        e.angle = 0;
        return e;
    };
    BaseTileNode.prototype.destroyTempAnimNode = function () {
        var e = this.cardNode.addComponent(cc.Component), t = this.animNode.getChildByName("tempAnimNode");
        if (t && cc.isValid(t)) {
            t.name = "destroy_temp_anim_node";
            t.getComponent(BaseSpine_1.default) && t.getComponent(BaseSpine_1.default).clear(true);
            e.scheduleOnce(function () {
                t && cc.isValid(t) && t.destroy();
                cc.isValid(e) && e.destroy();
            }, 0);
        }
    };
    BaseTileNode.prototype.createCardNode = function (e) {
        var t = e || new cc.Node();
        t.setParent(this.layerNode);
        t.setPosition(0, 0, 0);
        t.setScale(1, 1, 1);
        t.name = "cardNode" + this.tileObject.id + "_" + this.info.index;
        t.setSiblingIndex(this.info.index);
        t.setContentSize(this.info.tileObject.getContentSize());
        t.position = this.info.tileObject.getPosition();
        return t;
    };
    BaseTileNode.prototype.createShadowCardNode = function (e) {
        e.setParent(this.shadowLayerNode);
        e.setPosition(0, 0, 0);
        e.setScale(1, 1, 1);
        e.setContentSize(this.info.tileObject.getContentSize());
        e.setSiblingIndex(this.info.index);
        e.position = this.info.tileObject.getPosition();
        e.name = "shadowCardNode" + this.tileObject.id + "_" + this.info.index;
        return e;
    };
    BaseTileNode.prototype.createTileNode = function (e) {
        e.setPosition(0, 0, 0);
        e.setScale(1 / this.info.tileObject.layoutScale);
        e.setAnchorPoint(0.5, 0.5);
        e.setContentSize(this.info.tileObject.getContentSize());
        return e;
    };
    BaseTileNode.prototype.createShadowNode = function (e) {
        e.setPosition(0, 0, 0);
        e.setContentSize(this.info.tileObject.getShadowContentSize());
        e.getComponent(cc.Sprite) || e.addComponent(cc.Sprite);
        var t = e.getComponent(cc.Sprite);
        t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        t.trim = false;
        e.setSiblingIndex(this.index);
        return e;
    };
    BaseTileNode.prototype.updateShadowNode = function () {
        var e = this.shadowLayerNode.getSiblingIndex();
        this.context.gameType == GameTypeEnums_1.MjGameType.Classic && (e = Number(this.info.layerIndex));
        if (0 == e) {
            var t = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_shadow_dn", this), o = t.path, n = t.bundleName, i = t.fromAtlas;
            BaseSprite_1.default.refreshWithNode(this._shadowNode, o, i, false, n);
        }
        else {
            var r = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_shadow_up", this);
            o = r.path, n = r.bundleName, i = r.fromAtlas;
            BaseSprite_1.default.refreshWithNode(this._shadowNode, o, i, false, n);
        }
    };
    BaseTileNode.prototype.createImgCardBg = function (e) {
        e.setContentSize(this.info.tileObject.getBgContentSize());
        e.setAnchorPoint(0.5, 0.5);
        e.setPosition(0, 0, 0);
        return e;
    };
    BaseTileNode.prototype.createLockBg = function (e) {
        if (!e) {
            (e = new cc.Node()).parent = this.tileNode;
            e.name = exports.ETileNodeNames.imgLockBg;
            e.zIndex = exports.TileNodeZIndexMap[exports.ETileNodeNames.imgLockBg];
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
    };
    BaseTileNode.prototype.createImgSelectedCardBg = function (e) {
        if (!e) {
            (e = new cc.Node()).parent = this.tileNode;
            e.name = exports.ETileNodeNames.imgSelectedCardBg;
            e.zIndex = exports.TileNodeZIndexMap[exports.ETileNodeNames.imgSelectedCardBg];
        }
        e.setContentSize(this.info.tileObject.getCardContentSize());
        e.setAnchorPoint(0.5, 0.5);
        e.setPosition(0, 0, 0);
        return e;
    };
    BaseTileNode.prototype.updateImgSelectedCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_select_mj", this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._imgSelectedCardBg, t, n, false, o);
    };
    BaseTileNode.prototype.createImgSelected = function (e) {
        if (!e) {
            (e = new cc.Node()).parent = this.tileNode;
            e.name = exports.ETileNodeNames.imgSelected;
            e.zIndex = exports.TileNodeZIndexMap[exports.ETileNodeNames.imgSelected];
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
    };
    BaseTileNode.prototype.setImgSelectedBlendMode = function (e) {
        e.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
        e.dstBlendFactor = cc.macro.BlendFactor.ONE;
    };
    BaseTileNode.prototype.updateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up", this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._imgCardBg, t, n, false, o);
    };
    BaseTileNode.prototype.createImgCard = function (e) {
        e.setContentSize(this.info.tileObject.getCardContentSize());
        e.setAnchorPoint(0.5, 0.5);
        e.setPosition(0, 0, 0);
        return e;
    };
    BaseTileNode.prototype.getDisplayResName = function () {
        return this.tileObject.resName;
    };
    BaseTileNode.prototype.updateImgCard = function () {
        var e = this.getDisplayResName(), t = CardUtil_1.default.getAtlasPathAndBundleName(e, this), o = t.path, n = t.bundleName, i = t.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._imgCard, o, i, false, n);
        this.saveCardUniqueInfo(n, o, i);
    };
    BaseTileNode.prototype.saveCardUniqueInfo = function (e, t, o) {
        this._cardUniqueInfo = {
            bundleName: e,
            path: t,
            fromAtlas: o
        };
    };
    BaseTileNode.prototype.updateImgCardByImg = function (e, t, o) {
        BaseSprite_1.default.refreshWithNode(this._imgCard, e, o, false, t);
    };
    BaseTileNode.prototype.updateLockBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_mask_mj", this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._imgLockBg, t, n, false, o);
    };
    BaseTileNode.prototype.updateImgSelected = function () {
        this.context.gameCtr.hasRes("texture/card/gameplay_selected") && BaseSprite_1.default.refreshWithNode(this._imgSelected, "texture/card/gameplay_selected");
    };
    BaseTileNode.prototype.createEffectSelected = function (e) {
        if (!e) {
            (e = new cc.Node()).parent = this.tileNode;
            e.name = exports.ETileNodeNames.effectSelected;
            e.zIndex = exports.TileNodeZIndexMap[exports.ETileNodeNames.effectSelected];
        }
        e.setPosition(0, 0, 0);
        e.scale = 1 * this.info.tileObject.layoutScale;
        return e;
    };
    BaseTileNode.prototype.updateEffectSelected = function () {
        this.context.gameCtr.hasRes("spine/card/selectEff/gameplay_selected_efx") && (this._effectSelectedProxy = BaseSpine_1.default.refreshWithNode(this._effectSelected, "spine/card/selectEff/gameplay_selected_efx"));
    };
    BaseTileNode.prototype.createEffectPropHint = function (e) {
        var t, n;
        if (!e) {
            (e = new cc.Node()).parent = this.tileNode;
            e.name = exports.ETileNodeNames.effectPropHint;
            e.zIndex = exports.TileNodeZIndexMap[exports.ETileNodeNames.effectPropHint];
        }
        e.setPosition(0, 0, 0);
        var i = null !== (n = null === (t = this.info.cardLayoutConfig) || void 0 === t ? void 0 : t.hintEffScale) && void 0 !== n ? n : 1, r = this.info.tileObject.layoutScale;
        e.scale = i * r;
        return e;
    };
    BaseTileNode.prototype.updateEffectPropHint = function () {
        this._effectPropHintProxy = BaseSpine_1.default.refreshWithNode(this._effectPropHint, "spine/propHitEff/gameplay_hint");
    };
    BaseTileNode.prototype.showDebugInfo = function () { };
    BaseTileNode.prototype.updateDebugTouchSize = function (e) {
        if (e === void 0) { e = false; }
    };
    BaseTileNode.prototype.updateDebugMoveTouchSize = function (e, t) {
        if (t === void 0) { t = 1.5; }
    };
    BaseTileNode.prototype.updateDebugCenter = function () { };
    BaseTileNode.prototype.showSelectEffect = function () {
        if (!this._imgSelected || !this._imgSelected.active) {
            this.imgSelected.active = true;
            this.imgSelectedCardBg.active = true;
            this.effectSelected.active = true;
            this.realShowSelectEffect();
        }
    };
    BaseTileNode.prototype.ensureSelectResources = function () {
        this._imgSelected || (this._imgSelected = this.createImgSelected(this.tileNode.getChildByName(exports.ETileNodeNames.imgSelected)));
        this._imgSelectedCardBg || (this._imgSelectedCardBg = this.createImgSelectedCardBg(this.tileNode.getChildByName(exports.ETileNodeNames.imgSelectedCardBg)));
        this._effectSelected || (this._effectSelected = this.createEffectSelected(this.tileNode.getChildByName(exports.ETileNodeNames.effectSelected)));
        var e = this._imgSelected ? this._imgSelected.getComponent(cc.Sprite) : null;
        !this._imgSelected || e && e.spriteFrame || this.updateImgSelected();
        var t = this._imgSelectedCardBg ? this._imgSelectedCardBg.getComponent(cc.Sprite) : null;
        !this._imgSelectedCardBg || t && t.spriteFrame || this.updateImgSelectedCardBg();
        this._effectSelectedProxy || this.updateEffectSelected();
    };
    BaseTileNode.prototype.realShowSelectEffect = function () {
        var e = this;
        if (this._effectSelectedProxy)
            if (this._effectSelectedProxy.ready) {
                var t = this._effectSelectedProxy.getSkeleton();
                t && t.skeletonData && (null !== t.findAnimation("test") || this._effectSelectedProxy.setAnimation("init", -1));
            }
            else
                this._effectSelectedProxy.setOnReadyCallback(function () {
                    cc.isValid(e._tileNode) && cc.isValid(e._cardNode) && e.realShowSelectEffect();
                });
    };
    BaseTileNode.prototype.hideSelectEffect = function () {
        this._imgSelected && (this._imgSelected.active = false);
        this._imgSelectedCardBg && (this._imgSelectedCardBg.active = false);
        this._effectSelected && (this._effectSelected.active = false);
    };
    BaseTileNode.prototype.getSelectedScale = function () {
        return 1;
    };
    BaseTileNode.prototype.selectedFinish = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_SelectedFinish, this);
    };
    BaseTileNode.prototype.cancelSelectedFinish = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_UnSelectedFinish, this);
    };
    BaseTileNode.prototype.moveFinish = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_MoveFinish, this);
    };
    BaseTileNode.prototype.resetSiblingIndex = function () {
        this.cardNode.zIndex = this.info.tileObject.gridZIndex;
        this.shadowCardNode.zIndex = this.info.tileObject.gridZIndex;
    };
    BaseTileNode.prototype.resetShadowSize = function () {
        this.updateShadowNode();
        this.shadowNode.setContentSize(this.info.tileObject.getShadowContentSize());
    };
    BaseTileNode.prototype.isSelect = function () {
        return this._imgSelected && this._imgSelected.active;
    };
    BaseTileNode.prototype.showPropHint = function () {
        if (!this._effectPropHint || !this._effectPropHint.active) {
            this._effectPropHint || (this._effectPropHint = this.createEffectPropHint(this.tileNode.getChildByName(exports.ETileNodeNames.effectPropHint)));
            this._effectPropHintProxy || this.updateEffectPropHint();
            this._effectPropHint.active = true;
            this._effectPropHintProxy.setAnimation("init", -1);
        }
    };
    BaseTileNode.prototype.hidePropHint = function () {
        if (this._effectPropHint && this._effectPropHint.active) {
            this._effectPropHint.active = false;
            mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_HidePropHint, this);
        }
    };
    BaseTileNode.prototype.resetPosition = function () { };
    BaseTileNode.prototype.clear = function () {
        this.hidePropHint();
        TileNodePool_1.TileNodePool.getInstance().pushCacheNode(this.cardNode);
        TileNodePool_1.TileNodePool.getInstance().pushCacheShadowNode(this.shadowCardNode);
        this.resetNodeReferences();
    };
    BaseTileNode.prototype.onlyClear = function () {
        TileNodePool_1.TileNodePool.getInstance().pushCacheNode(this.cardNode);
        TileNodePool_1.TileNodePool.getInstance().pushCacheShadowNode(this.shadowCardNode);
        this.resetNodeReferences();
    };
    BaseTileNode.prototype.resetNodeReferences = function () {
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
    };
    BaseTileNode.prototype.hide = function () {
        this.cardNode.opacity = 0;
        this.shadowCardNode.opacity = 0;
    };
    BaseTileNode.prototype.show = function () {
        this.cardNode.opacity = 255;
        this.shadowCardNode.opacity = 255;
    };
    BaseTileNode.prototype.isInSlotBar = function () {
        return this.info.tileObject.getIsInSlotBar();
    };
    BaseTileNode.prototype.addToSlotBar = function (e, t, o, n, i) {
        if (t === void 0) { t = 0; }
        if (o === void 0) { o = new cc.Vec3(0, 0, 0); }
        if (n === void 0) { n = 1; }
        this.shadowCardNode.parent = e;
        if (i === GameTypeEnums_1.ETile2SlotType.Slot3) {
            this.shadowCardNode.opacity = 0;
        }
        else {
            this.shadowCardNode.opacity = 255;
        }
        this.cardNode.parent = e;
        this.shadowCardNode.zIndex = t;
        this.cardNode.zIndex = 1000 + t;
        this.cardNode.position = o;
        this.shadowCardNode.position = o;
        this.cardNode.scale = n;
        this.shadowCardNode.scale = n;
    };
    BaseTileNode.prototype.updateZIndexInSlotBar = function (e) {
        this.shadowCardNode.zIndex = e;
        this.cardNode.zIndex = 1000 + e;
    };
    BaseTileNode.CONST_SHOW_TOUCH_SIZE_MOVE = false;
    BaseTileNode.CONST_SHOW_TOUCH_SIZE = false;
    __decorate([
        mj.traitEvent("BaseTileNode_refreshNode")
    ], BaseTileNode.prototype, "refreshNode", null);
    __decorate([
        mj.traitEvent("BaseTileNode_upAnimMgr")
    ], BaseTileNode.prototype, "updateAnimMgr", null);
    __decorate([
        mj.traitEvent("BaseTileNode_crtImgCardBg")
    ], BaseTileNode.prototype, "createImgCardBg", null);
    __decorate([
        mj.traitEvent("BaseTileNode_setBlend")
    ], BaseTileNode.prototype, "setImgSelectedBlendMode", null);
    __decorate([
        mj.traitEvent("BaseTileNode_crtImgCard")
    ], BaseTileNode.prototype, "createImgCard", null);
    __decorate([
        mj.traitEvent("BaseTileNode_showSelEff")
    ], BaseTileNode.prototype, "showSelectEffect", null);
    __decorate([
        mj.traitEvent("BaseTileNode_rsSelectEff")
    ], BaseTileNode.prototype, "realShowSelectEffect", null);
    __decorate([
        mj.traitEvent("BaseTileNode_scale")
    ], BaseTileNode.prototype, "getSelectedScale", null);
    __decorate([
        mj.traitEvent("BaseTileNode_showHint")
    ], BaseTileNode.prototype, "showPropHint", null);
    __decorate([
        mj.traitEvent("BaseTileNode_hideHint")
    ], BaseTileNode.prototype, "hidePropHint", null);
    return BaseTileNode;
}());
exports.BaseTileNode = BaseTileNode;

cc._RF.pop();
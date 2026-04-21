
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BaseTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0Jhc2VUaWxlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw0REFBdUQ7QUFDdkQscURBQWdEO0FBQ2hELDREQUE0RDtBQUM1RCx5RUFBcUY7QUFDckYsbUVBQWtFO0FBQ2xFLG1EQUFrRDtBQUNsRCwrQ0FBOEM7QUFDbkMsUUFBQSxjQUFjLEdBQUc7SUFDMUIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtDQUNqQyxDQUFDO0FBQ1MsUUFBQSxvQkFBb0IsR0FBRztJQUNoQyxTQUFTLEVBQUUsV0FBVztDQUN2QixDQUFDO0FBQ1MsUUFBQSxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7QUFDOUIsUUFBQSxZQUFZLEdBQUcsVUFBVSxDQUFDO0FBQzFCLFFBQUEsa0JBQWtCLEdBQUcsWUFBWSxDQUFDO0FBQzdDLENBQUMsK0JBQXVCLEdBQUcsRUFBRSxDQUFDLENBQUMsNEJBQW9CLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3pELFFBQUEsdUJBQXVCLEdBQUcsK0JBQXVCLENBQUM7QUFDN0QsSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLHdFQUFrQixDQUFBO0lBQ2xCLDZEQUFhLENBQUE7SUFDYiw2REFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUpXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBSTFCO0FBQ0QsQ0FBQyx5QkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxzQkFBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN4RCx5QkFBaUIsQ0FBQyxzQkFBYyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFB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LEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTVmTSx1Q0FBMEIsR0FBRyxLQUFLLENBQUM7SUFDbkMsa0NBQXFCLEdBQUcsS0FBSyxDQUFDO0lBb0dyQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7bURBK0J6QztJQVNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztxREFNdkM7SUFzRkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO3VEQU0xQztJQXdERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7K0RBSXRDO0lBU0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3FEQU14QztJQW1FRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7d0RBUXhDO0lBWUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOzREQVN6QztJQU9EO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt3REFHbkM7SUFzQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO29EQVF0QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztvREFNdEM7SUE2REgsbUJBQUM7Q0FyaEJELEFBcWhCQyxJQUFBO0FBcmhCWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgRVRpbGUyU2xvdFR5cGUgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgTm9ybWFsRmxpcE5vZGVTdGF0ZUFuaSB9IGZyb20gJy4vTm9ybWFsRmxpcE5vZGVTdGF0ZUFuaSc7XG5pbXBvcnQgeyBOb3JtYWxTdGF0ZUN0bCB9IGZyb20gJy4vTm9ybWFsU3RhdGVDdGwnO1xuaW1wb3J0IHsgVGlsZU5vZGVQb29sIH0gZnJvbSAnLi9UaWxlTm9kZVBvb2wnO1xuZXhwb3J0IHZhciBFVGlsZU5vZGVOYW1lcyA9IHtcbiAgaW1nQ2FyZEJnOiBcImltZ0NhcmRCZ1wiLFxuICBpbWdTZWxlY3RlZENhcmRCZzogXCJpbWdTZWxlY3RlZENhcmRCZ1wiLFxuICBpbWdDYXJkOiBcImltZ0NhcmRcIixcbiAgaW1nTG9ja0JnOiBcImltZ0xvY2tCZ1wiLFxuICBpbWdTZWxlY3RlZDogXCJpbWdTZWxlY3RlZFwiLFxuICBlZmZlY3RQcm9wSGludDogXCJlZmZlY3RQcm9wSGludFwiLFxuICBlZmZlY3RTZWxlY3RlZDogXCJlZmZlY3RTZWxlY3RlZFwiXG59O1xuZXhwb3J0IHZhciBFVGlsZVNoYWRvd05vZGVOYW1lcyA9IHtcbiAgaW1nU2hhZG93OiBcImltZ1NoYWRvd1wiXG59O1xuZXhwb3J0IHZhciBUaWxlQW5pbU5vZGVOYW1lID0gXCJhbmltTm9kZVwiO1xuZXhwb3J0IHZhciBUaWxlTm9kZU5hbWUgPSBcInRpbGVOb2RlXCI7XG5leHBvcnQgdmFyIFRpbGVTaGFkb3dOb2RlTmFtZSA9IFwic2hhZG93Tm9kZVwiO1xuKFRpbGVTaGFkb3dOb2RlWkluZGV4TWFwID0ge30pW0VUaWxlU2hhZG93Tm9kZU5hbWVzLmltZ1NoYWRvd10gPSAxMDtcbmV4cG9ydCB2YXIgVGlsZVNoYWRvd05vZGVaSW5kZXhNYXAgPSBUaWxlU2hhZG93Tm9kZVpJbmRleE1hcDtcbmV4cG9ydCBlbnVtIEVUaWxlTm9kZVpJbmRleCB7XG4gIFJvbGxDYXJkTGlnaHQgPSAxNSxcbiAgQ3VzdG9tMSA9IDEwMCxcbiAgQ3VzdG9tMiA9IDEwMSxcbn1cbihUaWxlTm9kZVpJbmRleE1hcCA9IHt9KVtFVGlsZU5vZGVOYW1lcy5pbWdDYXJkQmddID0gMTA7XG5UaWxlTm9kZVpJbmRleE1hcFtFVGlsZU5vZGVOYW1lcy5pbWdTZWxlY3RlZENhcmRCZ10gPSAyMDtcblRpbGVOb2RlWkluZGV4TWFwW0VUaWxlTm9kZU5hbWVzLmltZ0NhcmRdID0gMzA7XG5UaWxlTm9kZVpJbmRleE1hcFtFVGlsZU5vZGVOYW1lcy5pbWdMb2NrQmddID0gNDA7XG5UaWxlTm9kZVpJbmRleE1hcFtFVGlsZU5vZGVOYW1lcy5pbWdTZWxlY3RlZF0gPSA1MDtcblRpbGVOb2RlWkluZGV4TWFwW0VUaWxlTm9kZU5hbWVzLmVmZmVjdFByb3BIaW50XSA9IDYwO1xuVGlsZU5vZGVaSW5kZXhNYXBbRVRpbGVOb2RlTmFtZXMuZWZmZWN0U2VsZWN0ZWRdID0gNzA7XG5leHBvcnQgdmFyIFRpbGVOb2RlWkluZGV4TWFwID0gVGlsZU5vZGVaSW5kZXhNYXA7XG5leHBvcnQgY2xhc3MgQmFzZVRpbGVOb2RlIHtcbiAgX3Bvc0tleSA9IFwiXCI7XG4gIF9pZCA9IFwiXCI7XG4gIF9pbmZvID0gbnVsbDtcbiAgX2NhcmROb2RlID0gbnVsbDtcbiAgX3NoYWRvd0NhcmROb2RlID0gbnVsbDtcbiAgX3NoYWRvd05vZGUgPSBudWxsO1xuICBfYW5pbU5vZGUgPSBudWxsO1xuICBfdGlsZU5vZGUgPSBudWxsO1xuICBfaW1nQ2FyZEJnID0gbnVsbDtcbiAgX2ltZ0NhcmQgPSBudWxsO1xuICBfY2FyZFN0YXRlQ3RsID0gbnVsbDtcbiAgX3NoYWRvd0NhcmRTdGF0ZUN0bCA9IG51bGw7XG4gIF90aWxlTm9kZVN0YXRlQ3RsID0gbnVsbDtcbiAgX3NoYWRvd05vZGVTdGF0ZUN0bCA9IG51bGw7XG4gIF9ub3JtYWxGbGlwID0gbnVsbDtcbiAgX2NhcmRVbmlxdWVJbmZvID0gbnVsbDtcbiAgX2VmZmVjdFNlbGVjdGVkUHJveHkgPSBudWxsO1xuICBfZWZmZWN0UHJvcEhpbnRQcm94eSA9IG51bGw7XG4gIF9pbWdTZWxlY3RlZCA9IG51bGw7XG4gIF9pbWdTZWxlY3RlZENhcmRCZyA9IG51bGw7XG4gIF9lZmZlY3RTZWxlY3RlZCA9IG51bGw7XG4gIF9lZmZlY3RQcm9wSGludCA9IG51bGw7XG4gIF9pbWdMb2NrQmcgPSBudWxsO1xuICBzdGF0aWMgQ09OU1RfU0hPV19UT1VDSF9TSVpFX01PVkUgPSBmYWxzZTtcbiAgc3RhdGljIENPTlNUX1NIT1dfVE9VQ0hfU0laRSA9IGZhbHNlO1xuICBnZXQgY2FyZFVuaXF1ZUluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRVbmlxdWVJbmZvO1xuICB9XG4gIGdldCBub3JtYWxGbGlwKCkge1xuICAgIHJldHVybiB0aGlzLl9ub3JtYWxGbGlwO1xuICB9XG4gIGdldCBlZmZlY3RTZWxlY3RlZFByb3h5KCkge1xuICAgIHJldHVybiB0aGlzLl9lZmZlY3RTZWxlY3RlZFByb3h5O1xuICB9XG4gIGdldCBlZmZlY3RQcm9wSGludCgpIHtcbiAgICBpZiAoIXRoaXMuX2VmZmVjdFByb3BIaW50KSB7XG4gICAgICB0aGlzLl9lZmZlY3RQcm9wSGludCA9IHRoaXMuY3JlYXRlRWZmZWN0UHJvcEhpbnQodGhpcy50aWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShFVGlsZU5vZGVOYW1lcy5lZmZlY3RQcm9wSGludCkpO1xuICAgICAgdGhpcy51cGRhdGVFZmZlY3RQcm9wSGludCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0UHJvcEhpbnQ7XG4gIH1cbiAgZ2V0IGltZ1NlbGVjdGVkKCkge1xuICAgIGlmICghdGhpcy5faW1nU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX2ltZ1NlbGVjdGVkID0gdGhpcy5jcmVhdGVJbWdTZWxlY3RlZCh0aGlzLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKEVUaWxlTm9kZU5hbWVzLmltZ1NlbGVjdGVkKSk7XG4gICAgICB0aGlzLnVwZGF0ZUltZ1NlbGVjdGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbWdTZWxlY3RlZDtcbiAgfVxuICBnZXQgaW1nU2VsZWN0ZWRDYXJkQmcoKSB7XG4gICAgaWYgKCF0aGlzLl9pbWdTZWxlY3RlZENhcmRCZykge1xuICAgICAgdGhpcy5faW1nU2VsZWN0ZWRDYXJkQmcgPSB0aGlzLmNyZWF0ZUltZ1NlbGVjdGVkQ2FyZEJnKHRoaXMudGlsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoRVRpbGVOb2RlTmFtZXMuaW1nU2VsZWN0ZWRDYXJkQmcpKTtcbiAgICAgIHRoaXMudXBkYXRlSW1nU2VsZWN0ZWRDYXJkQmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ltZ1NlbGVjdGVkQ2FyZEJnO1xuICB9XG4gIGdldCBlZmZlY3RTZWxlY3RlZCgpIHtcbiAgICBpZiAoIXRoaXMuX2VmZmVjdFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9lZmZlY3RTZWxlY3RlZCA9IHRoaXMuY3JlYXRlRWZmZWN0U2VsZWN0ZWQodGhpcy50aWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShFVGlsZU5vZGVOYW1lcy5lZmZlY3RTZWxlY3RlZCkpO1xuICAgICAgdGhpcy51cGRhdGVFZmZlY3RTZWxlY3RlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0U2VsZWN0ZWQ7XG4gIH1cbiAgZ2V0IGluaXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9pbml0VHlwZTtcbiAgfVxuICBnZXQgaW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mbztcbiAgfVxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mby5jb250ZXh0O1xuICB9XG4gIGdldCB0aWxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZU5vZGU7XG4gIH1cbiAgZ2V0IGluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmZvLmluZGV4O1xuICB9XG4gIGdldCBpbWdDYXJkQmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltZ0NhcmRCZztcbiAgfVxuICBnZXQgaW1nQ2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1nQ2FyZDtcbiAgfVxuICBnZXQgaW1nTG9ja0JnKCkge1xuICAgIGlmICghdGhpcy5faW1nTG9ja0JnKSB7XG4gICAgICB0aGlzLl9pbWdMb2NrQmcgPSB0aGlzLmNyZWF0ZUxvY2tCZyh0aGlzLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKEVUaWxlTm9kZU5hbWVzLmltZ0xvY2tCZykpO1xuICAgICAgdGhpcy51cGRhdGVMb2NrQmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ltZ0xvY2tCZztcbiAgfVxuICBnZXQgc2hhZG93Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hhZG93Tm9kZTtcbiAgfVxuICBnZXQgc2hhZG93Q2FyZE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYWRvd0NhcmROb2RlO1xuICB9XG4gIGdldCBjYXJkTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZE5vZGU7XG4gIH1cbiAgZ2V0IGxheWVyTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mby5sYXllck5vZGU7XG4gIH1cbiAgZ2V0IHNoYWRvd0xheWVyTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mby5zaGFkb3dMYXllck5vZGU7XG4gIH1cbiAgZ2V0IGVmZmVjdExheWVyTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmVmZmVjdE5vZGU7XG4gIH1cbiAgZ2V0IGRyYWdSb290Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdhbWVWaWV3Lm5vZGVEcmFnQ2FyZFJvb3Q7XG4gIH1cbiAgZ2V0IHRpbGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZm8udGlsZU9iamVjdDtcbiAgfVxuICBnZXQgYW5pbU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1Ob2RlO1xuICB9XG4gIGdldCBwb3NLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc0tleTtcbiAgfVxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQmFzZVRpbGVOb2RlX3JlZnJlc2hOb2RlXCIpXG4gIHJlZnJlc2hOb2RlKGUpIHtcbiAgICB0aGlzLl9pbmZvID0gZTtcbiAgICB0aGlzLl9wb3NLZXkgPSBlLnRpbGVPYmplY3Quc2F2ZUtleSgpO1xuICAgIHRoaXMuX2lkID0gZS50aWxlT2JqZWN0LmlkO1xuICAgIGlmICghdGhpcy5fY2FyZE5vZGUpIHtcbiAgICAgIHZhciB0ID0gVGlsZU5vZGVQb29sLmdldEluc3RhbmNlKCkuZ2V0Q2FjaGVOb2RlKCk7XG4gICAgICB0aGlzLl9jYXJkTm9kZSA9IHRoaXMuY3JlYXRlQ2FyZE5vZGUodCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fc2hhZG93Q2FyZE5vZGUpIHtcbiAgICAgIHZhciBuID0gVGlsZU5vZGVQb29sLmdldEluc3RhbmNlKCkuZ2V0Q2FjaGVTaGFkb3dOb2RlKCk7XG4gICAgICB0aGlzLl9zaGFkb3dDYXJkTm9kZSA9IHRoaXMuY3JlYXRlU2hhZG93Q2FyZE5vZGUobik7XG4gICAgfVxuICAgIHRoaXMuX3NoYWRvd05vZGUgfHwgKHRoaXMuX3NoYWRvd05vZGUgPSB0aGlzLmNyZWF0ZVNoYWRvd05vZGUodGhpcy5zaGFkb3dDYXJkTm9kZS5nZXRDaGlsZEJ5TmFtZShFVGlsZVNoYWRvd05vZGVOYW1lcy5pbWdTaGFkb3cpKSk7XG4gICAgdGhpcy5fYW5pbU5vZGUgfHwgKHRoaXMuX2FuaW1Ob2RlID0gdGhpcy5jcmVhdGVBbmltTm9kZSh0aGlzLmNhcmROb2RlLmdldENoaWxkQnlOYW1lKFRpbGVBbmltTm9kZU5hbWUpKSk7XG4gICAgdGhpcy5fdGlsZU5vZGUgfHwgKHRoaXMuX3RpbGVOb2RlID0gdGhpcy5jcmVhdGVUaWxlTm9kZSh0aGlzLmFuaW1Ob2RlLmdldENoaWxkQnlOYW1lKFRpbGVOb2RlTmFtZSkpKTtcbiAgICB0aGlzLl9pbWdDYXJkQmcgfHwgKHRoaXMuX2ltZ0NhcmRCZyA9IHRoaXMuY3JlYXRlSW1nQ2FyZEJnKHRoaXMudGlsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoRVRpbGVOb2RlTmFtZXMuaW1nQ2FyZEJnKSkpO1xuICAgIHRoaXMuX2ltZ0NhcmQgfHwgKHRoaXMuX2ltZ0NhcmQgPSB0aGlzLmNyZWF0ZUltZ0NhcmQodGhpcy50aWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShFVGlsZU5vZGVOYW1lcy5pbWdDYXJkKSkpO1xuICAgIHRoaXMuX2VmZmVjdFByb3BIaW50ICYmICh0aGlzLl9lZmZlY3RQcm9wSGludC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5fZWZmZWN0U2VsZWN0ZWQgJiYgKHRoaXMuX2VmZmVjdFNlbGVjdGVkLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLl9pbWdTZWxlY3RlZCAmJiAodGhpcy5faW1nU2VsZWN0ZWQuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuX2ltZ1NlbGVjdGVkQ2FyZEJnICYmICh0aGlzLl9pbWdTZWxlY3RlZENhcmRCZy5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy51cGRhdGVTaGFkb3dOb2RlKCk7XG4gICAgdGhpcy51cGRhdGVJbWdDYXJkQmcoKTtcbiAgICB0aGlzLnVwZGF0ZUltZ0NhcmQoKTtcbiAgICBpZiAodGhpcy5pbmZvLnRpbGVPYmplY3QuaXNDYXJkTG9jaygpKSB7XG4gICAgICB0aGlzLl9pbWdMb2NrQmcgfHwgKHRoaXMuX2ltZ0xvY2tCZyA9IHRoaXMuY3JlYXRlTG9ja0JnKHRoaXMudGlsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoRVRpbGVOb2RlTmFtZXMuaW1nTG9ja0JnKSkpO1xuICAgICAgdGhpcy51cGRhdGVMb2NrQmcoKTtcbiAgICB9IGVsc2UgdGhpcy5faW1nTG9ja0JnICYmICh0aGlzLl9pbWdMb2NrQmcuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMudXBkYXRlQW5pbU1ncigpO1xuICAgIHRoaXMucmVmcmVzaFpJbmRleCgpO1xuICB9XG4gIHJlZnJlc2haSW5kZXgoKSB7XG4gICAgdGhpcy5jYXJkTm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5pbmZvLmluZGV4KTtcbiAgICB0aGlzLnNoYWRvd0NhcmROb2RlLnNldFNpYmxpbmdJbmRleCh0aGlzLmluZm8uaW5kZXgpO1xuICB9XG4gIGNoYW5nZVpJbmRleChlLCB0KSB7XG4gICAgZSAmJiAoZS56SW5kZXggPSB0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJhc2VUaWxlTm9kZV91cEFuaW1NZ3JcIilcbiAgdXBkYXRlQW5pbU1ncigpIHtcbiAgICB0aGlzLl9jYXJkU3RhdGVDdGwgfHwgKHRoaXMuX2NhcmRTdGF0ZUN0bCA9IG5ldyBOb3JtYWxTdGF0ZUN0bCh0aGlzLmNhcmROb2RlLCB0aGlzKSk7XG4gICAgdGhpcy5fc2hhZG93Q2FyZFN0YXRlQ3RsIHx8ICh0aGlzLl9zaGFkb3dDYXJkU3RhdGVDdGwgPSBuZXcgTm9ybWFsU3RhdGVDdGwodGhpcy5zaGFkb3dDYXJkTm9kZSwgdGhpcykpO1xuICAgIHRoaXMuX3RpbGVOb2RlU3RhdGVDdGwgfHwgKHRoaXMuX3RpbGVOb2RlU3RhdGVDdGwgPSBuZXcgTm9ybWFsU3RhdGVDdGwodGhpcy50aWxlTm9kZSwgdGhpcykpO1xuICAgIHRoaXMuX3NoYWRvd05vZGVTdGF0ZUN0bCB8fCAodGhpcy5fc2hhZG93Tm9kZVN0YXRlQ3RsID0gbmV3IE5vcm1hbFN0YXRlQ3RsKHRoaXMuc2hhZG93Tm9kZSwgdGhpcykpO1xuICB9XG4gIHVwZGF0ZU5vcm1hbEZsaXAoKSB7XG4gICAgdGhpcy5fbm9ybWFsRmxpcCB8fCAodGhpcy5fbm9ybWFsRmxpcCA9IG5ldyBOb3JtYWxGbGlwTm9kZVN0YXRlQW5pKHRoaXMuYW5pbU5vZGUsIHRoaXMpKTtcbiAgfVxuICBjcmVhdGVBbmltTm9kZShlKSB7XG4gICAgZS5zZXRQYXJlbnQodGhpcy5jYXJkTm9kZSk7XG4gICAgZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICBlLnNldFNjYWxlKHRoaXMuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICB1cGRhdGVUZW1wQW5pbU5vZGUoKSB7XG4gICAgdGhpcy5hbmltTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBBbmltTm9kZVwiKSAmJiB0aGlzLmFuaW1Ob2RlLmdldENoaWxkQnlOYW1lKFwidGVtcEFuaW1Ob2RlXCIpLmRlc3Ryb3koKTtcbiAgICB2YXIgZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgZS5uYW1lID0gXCJ0ZW1wQW5pbU5vZGVcIjtcbiAgICBlLnNldFBhcmVudCh0aGlzLmFuaW1Ob2RlKTtcbiAgICBlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIGUuc2V0U2NhbGUoMSk7XG4gICAgZS5hbmdsZSA9IDA7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZGVzdHJveVRlbXBBbmltTm9kZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuY2FyZE5vZGUuYWRkQ29tcG9uZW50KGNjLkNvbXBvbmVudCksXG4gICAgICB0ID0gdGhpcy5hbmltTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBBbmltTm9kZVwiKTtcbiAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB0Lm5hbWUgPSBcImRlc3Ryb3lfdGVtcF9hbmltX25vZGVcIjtcbiAgICAgIHQuZ2V0Q29tcG9uZW50KEJhc2VTcGluZSkgJiYgdC5nZXRDb21wb25lbnQoQmFzZVNwaW5lKS5jbGVhcih0cnVlKTtcbiAgICAgIGUuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdCAmJiBjYy5pc1ZhbGlkKHQpICYmIHQuZGVzdHJveSgpO1xuICAgICAgICBjYy5pc1ZhbGlkKGUpICYmIGUuZGVzdHJveSgpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG4gIGNyZWF0ZUNhcmROb2RlKGUpIHtcbiAgICB2YXIgdCA9IGUgfHwgbmV3IGNjLk5vZGUoKTtcbiAgICB0LnNldFBhcmVudCh0aGlzLmxheWVyTm9kZSk7XG4gICAgdC5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICB0LnNldFNjYWxlKDEsIDEsIDEpO1xuICAgIHQubmFtZSA9IFwiY2FyZE5vZGVcIiArIHRoaXMudGlsZU9iamVjdC5pZCArIFwiX1wiICsgdGhpcy5pbmZvLmluZGV4O1xuICAgIHQuc2V0U2libGluZ0luZGV4KHRoaXMuaW5mby5pbmRleCk7XG4gICAgdC5zZXRDb250ZW50U2l6ZSh0aGlzLmluZm8udGlsZU9iamVjdC5nZXRDb250ZW50U2l6ZSgpKTtcbiAgICB0LnBvc2l0aW9uID0gdGhpcy5pbmZvLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBjcmVhdGVTaGFkb3dDYXJkTm9kZShlKSB7XG4gICAgZS5zZXRQYXJlbnQodGhpcy5zaGFkb3dMYXllck5vZGUpO1xuICAgIGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgZS5zZXRTY2FsZSgxLCAxLCAxKTtcbiAgICBlLnNldENvbnRlbnRTaXplKHRoaXMuaW5mby50aWxlT2JqZWN0LmdldENvbnRlbnRTaXplKCkpO1xuICAgIGUuc2V0U2libGluZ0luZGV4KHRoaXMuaW5mby5pbmRleCk7XG4gICAgZS5wb3NpdGlvbiA9IHRoaXMuaW5mby50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCk7XG4gICAgZS5uYW1lID0gXCJzaGFkb3dDYXJkTm9kZVwiICsgdGhpcy50aWxlT2JqZWN0LmlkICsgXCJfXCIgKyB0aGlzLmluZm8uaW5kZXg7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY3JlYXRlVGlsZU5vZGUoZSkge1xuICAgIGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgZS5zZXRTY2FsZSgxIC8gdGhpcy5pbmZvLnRpbGVPYmplY3QubGF5b3V0U2NhbGUpO1xuICAgIGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5pbmZvLnRpbGVPYmplY3QuZ2V0Q29udGVudFNpemUoKSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgY3JlYXRlU2hhZG93Tm9kZShlKSB7XG4gICAgZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICBlLnNldENvbnRlbnRTaXplKHRoaXMuaW5mby50aWxlT2JqZWN0LmdldFNoYWRvd0NvbnRlbnRTaXplKCkpO1xuICAgIGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB2YXIgdCA9IGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgdC5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgdC50cmltID0gZmFsc2U7XG4gICAgZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgdXBkYXRlU2hhZG93Tm9kZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuc2hhZG93TGF5ZXJOb2RlLmdldFNpYmxpbmdJbmRleCgpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVHlwZSA9PSBNakdhbWVUeXBlLkNsYXNzaWMgJiYgKGUgPSBOdW1iZXIodGhpcy5pbmZvLmxheWVySW5kZXgpKTtcbiAgICBpZiAoMCA9PSBlKSB7XG4gICAgICB2YXIgdCA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9pbWdfc2hhZG93X2RuXCIsIHRoaXMpLFxuICAgICAgICBvID0gdC5wYXRoLFxuICAgICAgICBuID0gdC5idW5kbGVOYW1lLFxuICAgICAgICBpID0gdC5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9zaGFkb3dOb2RlLCBvLCBpLCBmYWxzZSwgbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImdhbWVwbGF5X2ltZ19zaGFkb3dfdXBcIiwgdGhpcyk7XG4gICAgICBvID0gci5wYXRoLCBuID0gci5idW5kbGVOYW1lLCBpID0gci5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9zaGFkb3dOb2RlLCBvLCBpLCBmYWxzZSwgbik7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQmFzZVRpbGVOb2RlX2NydEltZ0NhcmRCZ1wiKVxuICBjcmVhdGVJbWdDYXJkQmcoZSkge1xuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5pbmZvLnRpbGVPYmplY3QuZ2V0QmdDb250ZW50U2l6ZSgpKTtcbiAgICBlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICBlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNyZWF0ZUxvY2tCZyhlKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICAoZSA9IG5ldyBjYy5Ob2RlKCkpLnBhcmVudCA9IHRoaXMudGlsZU5vZGU7XG4gICAgICBlLm5hbWUgPSBFVGlsZU5vZGVOYW1lcy5pbWdMb2NrQmc7XG4gICAgICBlLnpJbmRleCA9IFRpbGVOb2RlWkluZGV4TWFwW0VUaWxlTm9kZU5hbWVzLmltZ0xvY2tCZ107XG4gICAgfVxuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5pbmZvLnRpbGVPYmplY3QuZ2V0QmdDb250ZW50U2l6ZSgpKTtcbiAgICBlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICBlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICBlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgfHwgKGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IHRydWUpO1xuICAgIHZhciB0ID0gZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0LnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5TTElDRUQ7XG4gICAgdC5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgdC50cmltID0gZmFsc2U7XG4gICAgZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBlLm5hbWUgPSBcImltZ0xvY2tCZ1wiO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGNyZWF0ZUltZ1NlbGVjdGVkQ2FyZEJnKGUpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIChlID0gbmV3IGNjLk5vZGUoKSkucGFyZW50ID0gdGhpcy50aWxlTm9kZTtcbiAgICAgIGUubmFtZSA9IEVUaWxlTm9kZU5hbWVzLmltZ1NlbGVjdGVkQ2FyZEJnO1xuICAgICAgZS56SW5kZXggPSBUaWxlTm9kZVpJbmRleE1hcFtFVGlsZU5vZGVOYW1lcy5pbWdTZWxlY3RlZENhcmRCZ107XG4gICAgfVxuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5pbmZvLnRpbGVPYmplY3QuZ2V0Q2FyZENvbnRlbnRTaXplKCkpO1xuICAgIGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgIGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgdXBkYXRlSW1nU2VsZWN0ZWRDYXJkQmcoKSB7XG4gICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfc2VsZWN0X21qXCIsIHRoaXMpLFxuICAgICAgdCA9IGUucGF0aCxcbiAgICAgIG8gPSBlLmJ1bmRsZU5hbWUsXG4gICAgICBuID0gZS5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5faW1nU2VsZWN0ZWRDYXJkQmcsIHQsIG4sIGZhbHNlLCBvKTtcbiAgfVxuICBjcmVhdGVJbWdTZWxlY3RlZChlKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICAoZSA9IG5ldyBjYy5Ob2RlKCkpLnBhcmVudCA9IHRoaXMudGlsZU5vZGU7XG4gICAgICBlLm5hbWUgPSBFVGlsZU5vZGVOYW1lcy5pbWdTZWxlY3RlZDtcbiAgICAgIGUuekluZGV4ID0gVGlsZU5vZGVaSW5kZXhNYXBbRVRpbGVOb2RlTmFtZXMuaW1nU2VsZWN0ZWRdO1xuICAgIH1cbiAgICBlLnNldENvbnRlbnRTaXplKHRoaXMuaW5mby50aWxlT2JqZWN0LmdldFNlbGVjdENvbnRlbnRTaXplKCkpO1xuICAgIGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgIGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgZS5uYW1lID0gXCJpbWdTZWxlY3RlZFwiO1xuICAgIGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgfHwgZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB2YXIgdCA9IGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgdC5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgdC50cmltID0gZmFsc2U7XG4gICAgdGhpcy5zZXRJbWdTZWxlY3RlZEJsZW5kTW9kZSh0KTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJhc2VUaWxlTm9kZV9zZXRCbGVuZFwiKVxuICBzZXRJbWdTZWxlY3RlZEJsZW5kTW9kZShlKSB7XG4gICAgZS5zcmNCbGVuZEZhY3RvciA9IGNjLm1hY3JvLkJsZW5kRmFjdG9yLlNSQ19BTFBIQTtcbiAgICBlLmRzdEJsZW5kRmFjdG9yID0gY2MubWFjcm8uQmxlbmRGYWN0b3IuT05FO1xuICB9XG4gIHVwZGF0ZUltZ0NhcmRCZygpIHtcbiAgICB2YXIgZSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9pbWdfbWpfdXBcIiwgdGhpcyksXG4gICAgICB0ID0gZS5wYXRoLFxuICAgICAgbyA9IGUuYnVuZGxlTmFtZSxcbiAgICAgIG4gPSBlLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9pbWdDYXJkQmcsIHQsIG4sIGZhbHNlLCBvKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJhc2VUaWxlTm9kZV9jcnRJbWdDYXJkXCIpXG4gIGNyZWF0ZUltZ0NhcmQoZSkge1xuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5pbmZvLnRpbGVPYmplY3QuZ2V0Q2FyZENvbnRlbnRTaXplKCkpO1xuICAgIGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgIGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZ2V0RGlzcGxheVJlc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdC5yZXNOYW1lO1xuICB9XG4gIHVwZGF0ZUltZ0NhcmQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldERpc3BsYXlSZXNOYW1lKCksXG4gICAgICB0ID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShlLCB0aGlzKSxcbiAgICAgIG8gPSB0LnBhdGgsXG4gICAgICBuID0gdC5idW5kbGVOYW1lLFxuICAgICAgaSA9IHQuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2ltZ0NhcmQsIG8sIGksIGZhbHNlLCBuKTtcbiAgICB0aGlzLnNhdmVDYXJkVW5pcXVlSW5mbyhuLCBvLCBpKTtcbiAgfVxuICBzYXZlQ2FyZFVuaXF1ZUluZm8oZSwgdCwgbykge1xuICAgIHRoaXMuX2NhcmRVbmlxdWVJbmZvID0ge1xuICAgICAgYnVuZGxlTmFtZTogZSxcbiAgICAgIHBhdGg6IHQsXG4gICAgICBmcm9tQXRsYXM6IG9cbiAgICB9O1xuICB9XG4gIHVwZGF0ZUltZ0NhcmRCeUltZyhlLCB0LCBvKSB7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5faW1nQ2FyZCwgZSwgbywgZmFsc2UsIHQpO1xuICB9XG4gIHVwZGF0ZUxvY2tCZygpIHtcbiAgICB2YXIgZSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9tYXNrX21qXCIsIHRoaXMpLFxuICAgICAgdCA9IGUucGF0aCxcbiAgICAgIG8gPSBlLmJ1bmRsZU5hbWUsXG4gICAgICBuID0gZS5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5faW1nTG9ja0JnLCB0LCBuLCBmYWxzZSwgbyk7XG4gIH1cbiAgdXBkYXRlSW1nU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVDdHIuaGFzUmVzKFwidGV4dHVyZS9jYXJkL2dhbWVwbGF5X3NlbGVjdGVkXCIpICYmIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2ltZ1NlbGVjdGVkLCBcInRleHR1cmUvY2FyZC9nYW1lcGxheV9zZWxlY3RlZFwiKTtcbiAgfVxuICBjcmVhdGVFZmZlY3RTZWxlY3RlZChlKSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICAoZSA9IG5ldyBjYy5Ob2RlKCkpLnBhcmVudCA9IHRoaXMudGlsZU5vZGU7XG4gICAgICBlLm5hbWUgPSBFVGlsZU5vZGVOYW1lcy5lZmZlY3RTZWxlY3RlZDtcbiAgICAgIGUuekluZGV4ID0gVGlsZU5vZGVaSW5kZXhNYXBbRVRpbGVOb2RlTmFtZXMuZWZmZWN0U2VsZWN0ZWRdO1xuICAgIH1cbiAgICBlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIGUuc2NhbGUgPSAxICogdGhpcy5pbmZvLnRpbGVPYmplY3QubGF5b3V0U2NhbGU7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgdXBkYXRlRWZmZWN0U2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVDdHIuaGFzUmVzKFwic3BpbmUvY2FyZC9zZWxlY3RFZmYvZ2FtZXBsYXlfc2VsZWN0ZWRfZWZ4XCIpICYmICh0aGlzLl9lZmZlY3RTZWxlY3RlZFByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9lZmZlY3RTZWxlY3RlZCwgXCJzcGluZS9jYXJkL3NlbGVjdEVmZi9nYW1lcGxheV9zZWxlY3RlZF9lZnhcIikpO1xuICB9XG4gIGNyZWF0ZUVmZmVjdFByb3BIaW50KGUpIHtcbiAgICB2YXIgdCwgbjtcbiAgICBpZiAoIWUpIHtcbiAgICAgIChlID0gbmV3IGNjLk5vZGUoKSkucGFyZW50ID0gdGhpcy50aWxlTm9kZTtcbiAgICAgIGUubmFtZSA9IEVUaWxlTm9kZU5hbWVzLmVmZmVjdFByb3BIaW50O1xuICAgICAgZS56SW5kZXggPSBUaWxlTm9kZVpJbmRleE1hcFtFVGlsZU5vZGVOYW1lcy5lZmZlY3RQcm9wSGludF07XG4gICAgfVxuICAgIGUuc2V0UG9zaXRpb24oMCwgMCwgMCk7XG4gICAgdmFyIGkgPSBudWxsICE9PSAobiA9IG51bGwgPT09ICh0ID0gdGhpcy5pbmZvLmNhcmRMYXlvdXRDb25maWcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuaGludEVmZlNjYWxlKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMSxcbiAgICAgIHIgPSB0aGlzLmluZm8udGlsZU9iamVjdC5sYXlvdXRTY2FsZTtcbiAgICBlLnNjYWxlID0gaSAqIHI7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgdXBkYXRlRWZmZWN0UHJvcEhpbnQoKSB7XG4gICAgdGhpcy5fZWZmZWN0UHJvcEhpbnRQcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5fZWZmZWN0UHJvcEhpbnQsIFwic3BpbmUvcHJvcEhpdEVmZi9nYW1lcGxheV9oaW50XCIpO1xuICB9XG4gIHNob3dEZWJ1Z0luZm8oKSB7fVxuICB1cGRhdGVEZWJ1Z1RvdWNoU2l6ZShlID0gZmFsc2UpIHt9XG4gIHVwZGF0ZURlYnVnTW92ZVRvdWNoU2l6ZShlLCB0ID0gMS41KSB7fVxuICB1cGRhdGVEZWJ1Z0NlbnRlcigpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiQmFzZVRpbGVOb2RlX3Nob3dTZWxFZmZcIilcbiAgc2hvd1NlbGVjdEVmZmVjdCgpIHtcbiAgICBpZiAoIXRoaXMuX2ltZ1NlbGVjdGVkIHx8ICF0aGlzLl9pbWdTZWxlY3RlZC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaW1nU2VsZWN0ZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW1nU2VsZWN0ZWRDYXJkQmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWZmZWN0U2VsZWN0ZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVhbFNob3dTZWxlY3RFZmZlY3QoKTtcbiAgICB9XG4gIH1cbiAgZW5zdXJlU2VsZWN0UmVzb3VyY2VzKCkge1xuICAgIHRoaXMuX2ltZ1NlbGVjdGVkIHx8ICh0aGlzLl9pbWdTZWxlY3RlZCA9IHRoaXMuY3JlYXRlSW1nU2VsZWN0ZWQodGhpcy50aWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShFVGlsZU5vZGVOYW1lcy5pbWdTZWxlY3RlZCkpKTtcbiAgICB0aGlzLl9pbWdTZWxlY3RlZENhcmRCZyB8fCAodGhpcy5faW1nU2VsZWN0ZWRDYXJkQmcgPSB0aGlzLmNyZWF0ZUltZ1NlbGVjdGVkQ2FyZEJnKHRoaXMudGlsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoRVRpbGVOb2RlTmFtZXMuaW1nU2VsZWN0ZWRDYXJkQmcpKSk7XG4gICAgdGhpcy5fZWZmZWN0U2VsZWN0ZWQgfHwgKHRoaXMuX2VmZmVjdFNlbGVjdGVkID0gdGhpcy5jcmVhdGVFZmZlY3RTZWxlY3RlZCh0aGlzLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKEVUaWxlTm9kZU5hbWVzLmVmZmVjdFNlbGVjdGVkKSkpO1xuICAgIHZhciBlID0gdGhpcy5faW1nU2VsZWN0ZWQgPyB0aGlzLl9pbWdTZWxlY3RlZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSA6IG51bGw7XG4gICAgIXRoaXMuX2ltZ1NlbGVjdGVkIHx8IGUgJiYgZS5zcHJpdGVGcmFtZSB8fCB0aGlzLnVwZGF0ZUltZ1NlbGVjdGVkKCk7XG4gICAgdmFyIHQgPSB0aGlzLl9pbWdTZWxlY3RlZENhcmRCZyA/IHRoaXMuX2ltZ1NlbGVjdGVkQ2FyZEJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpIDogbnVsbDtcbiAgICAhdGhpcy5faW1nU2VsZWN0ZWRDYXJkQmcgfHwgdCAmJiB0LnNwcml0ZUZyYW1lIHx8IHRoaXMudXBkYXRlSW1nU2VsZWN0ZWRDYXJkQmcoKTtcbiAgICB0aGlzLl9lZmZlY3RTZWxlY3RlZFByb3h5IHx8IHRoaXMudXBkYXRlRWZmZWN0U2VsZWN0ZWQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJhc2VUaWxlTm9kZV9yc1NlbGVjdEVmZlwiKVxuICByZWFsU2hvd1NlbGVjdEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2VmZmVjdFNlbGVjdGVkUHJveHkpIGlmICh0aGlzLl9lZmZlY3RTZWxlY3RlZFByb3h5LnJlYWR5KSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX2VmZmVjdFNlbGVjdGVkUHJveHkuZ2V0U2tlbGV0b24oKTtcbiAgICAgIHQgJiYgdC5za2VsZXRvbkRhdGEgJiYgKG51bGwgIT09IHQuZmluZEFuaW1hdGlvbihcInRlc3RcIikgfHwgdGhpcy5fZWZmZWN0U2VsZWN0ZWRQcm94eS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKSk7XG4gICAgfSBlbHNlIHRoaXMuX2VmZmVjdFNlbGVjdGVkUHJveHkuc2V0T25SZWFkeUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQoZS5fdGlsZU5vZGUpICYmIGNjLmlzVmFsaWQoZS5fY2FyZE5vZGUpICYmIGUucmVhbFNob3dTZWxlY3RFZmZlY3QoKTtcbiAgICB9KTtcbiAgfVxuICBoaWRlU2VsZWN0RWZmZWN0KCkge1xuICAgIHRoaXMuX2ltZ1NlbGVjdGVkICYmICh0aGlzLl9pbWdTZWxlY3RlZC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5faW1nU2VsZWN0ZWRDYXJkQmcgJiYgKHRoaXMuX2ltZ1NlbGVjdGVkQ2FyZEJnLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLl9lZmZlY3RTZWxlY3RlZCAmJiAodGhpcy5fZWZmZWN0U2VsZWN0ZWQuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQmFzZVRpbGVOb2RlX3NjYWxlXCIpXG4gIGdldFNlbGVjdGVkU2NhbGUoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgc2VsZWN0ZWRGaW5pc2goKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5UaWxlTm9kZV9TZWxlY3RlZEZpbmlzaCwgdGhpcyk7XG4gIH1cbiAgY2FuY2VsU2VsZWN0ZWRGaW5pc2goKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5UaWxlTm9kZV9VblNlbGVjdGVkRmluaXNoLCB0aGlzKTtcbiAgfVxuICBtb3ZlRmluaXNoKCkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuVGlsZU5vZGVfTW92ZUZpbmlzaCwgdGhpcyk7XG4gIH1cbiAgcmVzZXRTaWJsaW5nSW5kZXgoKSB7XG4gICAgdGhpcy5jYXJkTm9kZS56SW5kZXggPSB0aGlzLmluZm8udGlsZU9iamVjdC5ncmlkWkluZGV4O1xuICAgIHRoaXMuc2hhZG93Q2FyZE5vZGUuekluZGV4ID0gdGhpcy5pbmZvLnRpbGVPYmplY3QuZ3JpZFpJbmRleDtcbiAgfVxuICByZXNldFNoYWRvd1NpemUoKSB7XG4gICAgdGhpcy51cGRhdGVTaGFkb3dOb2RlKCk7XG4gICAgdGhpcy5zaGFkb3dOb2RlLnNldENvbnRlbnRTaXplKHRoaXMuaW5mby50aWxlT2JqZWN0LmdldFNoYWRvd0NvbnRlbnRTaXplKCkpO1xuICB9XG4gIGlzU2VsZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWdTZWxlY3RlZCAmJiB0aGlzLl9pbWdTZWxlY3RlZC5hY3RpdmU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCYXNlVGlsZU5vZGVfc2hvd0hpbnRcIilcbiAgc2hvd1Byb3BIaW50KCkge1xuICAgIGlmICghdGhpcy5fZWZmZWN0UHJvcEhpbnQgfHwgIXRoaXMuX2VmZmVjdFByb3BIaW50LmFjdGl2ZSkge1xuICAgICAgdGhpcy5fZWZmZWN0UHJvcEhpbnQgfHwgKHRoaXMuX2VmZmVjdFByb3BIaW50ID0gdGhpcy5jcmVhdGVFZmZlY3RQcm9wSGludCh0aGlzLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKEVUaWxlTm9kZU5hbWVzLmVmZmVjdFByb3BIaW50KSkpO1xuICAgICAgdGhpcy5fZWZmZWN0UHJvcEhpbnRQcm94eSB8fCB0aGlzLnVwZGF0ZUVmZmVjdFByb3BIaW50KCk7XG4gICAgICB0aGlzLl9lZmZlY3RQcm9wSGludC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5fZWZmZWN0UHJvcEhpbnRQcm94eS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCYXNlVGlsZU5vZGVfaGlkZUhpbnRcIilcbiAgaGlkZVByb3BIaW50KCkge1xuICAgIGlmICh0aGlzLl9lZmZlY3RQcm9wSGludCAmJiB0aGlzLl9lZmZlY3RQcm9wSGludC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2VmZmVjdFByb3BIaW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5UaWxlTm9kZV9IaWRlUHJvcEhpbnQsIHRoaXMpO1xuICAgIH1cbiAgfVxuICByZXNldFBvc2l0aW9uKCkge31cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5oaWRlUHJvcEhpbnQoKTtcbiAgICBUaWxlTm9kZVBvb2wuZ2V0SW5zdGFuY2UoKS5wdXNoQ2FjaGVOb2RlKHRoaXMuY2FyZE5vZGUpO1xuICAgIFRpbGVOb2RlUG9vbC5nZXRJbnN0YW5jZSgpLnB1c2hDYWNoZVNoYWRvd05vZGUodGhpcy5zaGFkb3dDYXJkTm9kZSk7XG4gICAgdGhpcy5yZXNldE5vZGVSZWZlcmVuY2VzKCk7XG4gIH1cbiAgb25seUNsZWFyKCkge1xuICAgIFRpbGVOb2RlUG9vbC5nZXRJbnN0YW5jZSgpLnB1c2hDYWNoZU5vZGUodGhpcy5jYXJkTm9kZSk7XG4gICAgVGlsZU5vZGVQb29sLmdldEluc3RhbmNlKCkucHVzaENhY2hlU2hhZG93Tm9kZSh0aGlzLnNoYWRvd0NhcmROb2RlKTtcbiAgICB0aGlzLnJlc2V0Tm9kZVJlZmVyZW5jZXMoKTtcbiAgfVxuICByZXNldE5vZGVSZWZlcmVuY2VzKCkge1xuICAgIHRoaXMuX2NhcmROb2RlID0gbnVsbDtcbiAgICB0aGlzLl9zaGFkb3dDYXJkTm9kZSA9IG51bGw7XG4gICAgdGhpcy5fc2hhZG93Tm9kZSA9IG51bGw7XG4gICAgdGhpcy5fYW5pbU5vZGUgPSBudWxsO1xuICAgIHRoaXMuX3RpbGVOb2RlID0gbnVsbDtcbiAgICB0aGlzLl9pbWdDYXJkQmcgPSBudWxsO1xuICAgIHRoaXMuX2ltZ0NhcmQgPSBudWxsO1xuICAgIHRoaXMuX2ltZ1NlbGVjdGVkQ2FyZEJnID0gbnVsbDtcbiAgICB0aGlzLl9pbWdMb2NrQmcgPSBudWxsO1xuICAgIHRoaXMuX2ltZ1NlbGVjdGVkID0gbnVsbDtcbiAgICB0aGlzLl9lZmZlY3RQcm9wSGludCA9IG51bGw7XG4gICAgdGhpcy5fZWZmZWN0U2VsZWN0ZWQgPSBudWxsO1xuICAgIHRoaXMuX2NhcmRTdGF0ZUN0bCA9IG51bGw7XG4gICAgdGhpcy5fc2hhZG93Q2FyZFN0YXRlQ3RsID0gbnVsbDtcbiAgICB0aGlzLl90aWxlTm9kZVN0YXRlQ3RsID0gbnVsbDtcbiAgICB0aGlzLl9zaGFkb3dOb2RlU3RhdGVDdGwgPSBudWxsO1xuICB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5jYXJkTm9kZS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLnNoYWRvd0NhcmROb2RlLm9wYWNpdHkgPSAwO1xuICB9XG4gIHNob3coKSB7XG4gICAgdGhpcy5jYXJkTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIHRoaXMuc2hhZG93Q2FyZE5vZGUub3BhY2l0eSA9IDI1NTtcbiAgfVxuICBpc0luU2xvdEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbmZvLnRpbGVPYmplY3QuZ2V0SXNJblNsb3RCYXIoKTtcbiAgfVxuICBhZGRUb1Nsb3RCYXIoZSwgdCA9IDAsIG8gPSBuZXcgY2MuVmVjMygwLCAwLCAwKSwgbiA9IDEsIGk/KSB7XG4gICAgdGhpcy5zaGFkb3dDYXJkTm9kZS5wYXJlbnQgPSBlO1xuICAgIGlmIChpID09PSBFVGlsZTJTbG90VHlwZS5TbG90Mykge1xuICAgICAgdGhpcy5zaGFkb3dDYXJkTm9kZS5vcGFjaXR5ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFkb3dDYXJkTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIH1cbiAgICB0aGlzLmNhcmROb2RlLnBhcmVudCA9IGU7XG4gICAgdGhpcy5zaGFkb3dDYXJkTm9kZS56SW5kZXggPSB0O1xuICAgIHRoaXMuY2FyZE5vZGUuekluZGV4ID0gMTAwMCArIHQ7XG4gICAgdGhpcy5jYXJkTm9kZS5wb3NpdGlvbiA9IG87XG4gICAgdGhpcy5zaGFkb3dDYXJkTm9kZS5wb3NpdGlvbiA9IG87XG4gICAgdGhpcy5jYXJkTm9kZS5zY2FsZSA9IG47XG4gICAgdGhpcy5zaGFkb3dDYXJkTm9kZS5zY2FsZSA9IG47XG4gIH1cbiAgdXBkYXRlWkluZGV4SW5TbG90QmFyKGUpIHtcbiAgICB0aGlzLnNoYWRvd0NhcmROb2RlLnpJbmRleCA9IGU7XG4gICAgdGhpcy5jYXJkTm9kZS56SW5kZXggPSAxMDAwICsgZTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2NodeObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2df0bQP6NtKjaRCZv2iLoSI', 'Tile2NodeObject');
// Scripts/Tile2NodeObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NodeObject = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2ComponentRegistry_1 = require("./Tile2ComponentRegistry");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var Tile2NodeObject = /** @class */ (function (_super) {
    __extends(Tile2NodeObject, _super);
    function Tile2NodeObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._typeBits = 0;
        _this._components = new Map();
        return _this;
    }
    Object.defineProperty(Tile2NodeObject.prototype, "typeBits", {
        get: function () {
            return this._typeBits;
        },
        set: function (e) {
            this._typeBits = e;
        },
        enumerable: false,
        configurable: true
    });
    Tile2NodeObject.prototype.attachComponent = function (e, t) {
        this.detachComponent(e);
        t.bind(this);
        this._components.set(e, t);
        return t;
    };
    Tile2NodeObject.prototype.detachComponent = function (e) {
        var t = this._components.get(e);
        if (t) {
            t.unbind();
            this._components.delete(e);
        }
    };
    Tile2NodeObject.prototype.getComponent = function (e) {
        var t;
        return null !== (t = this._components.get(e)) && void 0 !== t ? t : null;
    };
    Tile2NodeObject.prototype.syncComponents = function (e) {
        var t, o, n, i, r = new Set(null != e ? e : []);
        try {
            for (var l = __values(Array.from(this._components.keys())), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                r.has(c) || this.detachComponent(c);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        try {
            for (var u = __values(r), p = u.next(); !p.done; p = u.next()) {
                c = p.value;
                if (!this._components.has(c)) {
                    var f = TileNodeComponent_1.TileNodeComponent.create(c);
                    f && this.attachComponent(c, f);
                }
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (i = u.return) && i.call(u);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    };
    Tile2NodeObject.prototype.getRequiredComponentKeys = function (e) {
        var t, o, n = __spreadArrays((null !== (o = null === (t = e.tileObject) || void 0 === t ? void 0 : t.getComponets()) && void 0 !== o ? o : []));
        n.includes(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni) || n.push(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni);
        n.includes(TileTypeEnum_1.ETileComponent.Tile2ComponentLockDarken) || n.push(TileTypeEnum_1.ETileComponent.Tile2ComponentLockDarken);
        return n;
    };
    Tile2NodeObject.prototype.updateAnimMgr = function () {
        this._components.forEach(function (e) {
            return e.onInitAnim();
        });
    };
    Tile2NodeObject.prototype.refreshNode = function (t) {
        var o, n;
        this.typeBits = null !== (n = null === (o = t.tileObject) || void 0 === o ? void 0 : o.getTypeBits()) && void 0 !== n ? n : 0;
        this.syncComponents(this.getRequiredComponentKeys(t));
        _super.prototype.refreshNode.call(this, t);
        this._components.forEach(function (e) {
            return e.onRefreshNode(t);
        });
    };
    Tile2NodeObject.prototype.getDisplayResName = function () {
        var e, t;
        try {
            for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next()) {
                var i = n.value.getResNameOverride();
                if (null !== i)
                    return i;
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return this.tileObject.resName;
    };
    Tile2NodeObject.prototype.updateImgCard = function () {
        var e, t;
        try {
            for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next())
                if (n.value.onUpdateImgCard())
                    return;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var i = this.getDisplayResName(), r = CardUtil_1.default.getAtlasPathAndBundleName(i, this), l = r.path, s = r.bundleName, c = r.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._imgCard, l, c, false, s);
        this.saveCardUniqueInfo(s, l, c);
    };
    Tile2NodeObject.prototype.updateImgCardBg = function () {
        var e, t;
        try {
            for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next())
                if (n.value.onUpdateImgCardBg())
                    return;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var i = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up", this), r = i.path, l = i.bundleName, s = i.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._imgCardBg, r, s, false, l);
    };
    Tile2NodeObject.prototype.updateShadowNode = function () {
        var e, t;
        try {
            for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next())
                if (n.value.onUpdateShadowNode())
                    return;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var i = 0 === this.shadowLayerNode.getSiblingIndex() ? "gameplay_img_shadow_dn" : "gameplay_img_shadow_up", r = CardUtil_1.default.getAtlasPathAndBundleName(i, this), l = r.path, s = r.bundleName, c = r.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._shadowNode, l, c, false, s);
    };
    Tile2NodeObject.prototype.updateLockBg = function () {
        var e, t;
        try {
            for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next())
                if (n.value.onUpdateLockBg())
                    return;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var i = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_mask_mj", this), r = i.path, l = i.bundleName, s = i.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._imgLockBg, r, s, false, l);
    };
    Tile2NodeObject.prototype.updateEffectSelected = function () {
        var e, t;
        try {
            for (var o = __values(this._components.values()), n = o.next(); !n.done; n = o.next())
                if (n.value.onUpdateEffectSelected())
                    return;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.context.gameCtr.hasRes("spine/card/selectEff/gameplay_selected_efx") && (this._effectSelectedProxy = BaseSpine_1.default.refreshWithNode(this._effectSelected, "spine/card/selectEff/gameplay_selected_efx"));
    };
    Tile2NodeObject.prototype.showSelectEffect = function () {
        var e, t, o;
        try {
            for (var n = __values(this._components.values()), i = n.next(); !i.done; i = n.next())
                if (i.value.onShowSelectEffect())
                    return;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        if (null === (o = this._imgSelected) || void 0 === o || !o.active) {
            this.imgSelected.active = true;
            this.imgSelectedCardBg.active = true;
            this.effectSelected.active = true;
            this.realShowSelectEffect();
        }
    };
    Tile2NodeObject.prototype.hideSelectEffect = function () {
        this._imgSelected && (this._imgSelected.active = false);
        this._imgSelectedCardBg && (this._imgSelectedCardBg.active = false);
        this._effectSelected && (this._effectSelected.active = false);
        this._components.forEach(function (e) {
            return e.onHideSelectEffect();
        });
    };
    Tile2NodeObject.prototype.realShowSelectEffect = function () {
        var e, t, o = this, n = false;
        try {
            for (var i = __values(this._components.values()), r = i.next(); !r.done; r = i.next())
                if (r.value.onRealShowSelectEffect()) {
                    n = true;
                    break;
                }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        if (!n) {
            var l = this._effectSelectedProxy;
            if (l)
                if (l.ready) {
                    var s = l.getSkeleton();
                    (null == s ? void 0 : s.skeletonData) && !s.findAnimation("test") && l.setAnimation("init", -1);
                }
                else
                    l.setOnReadyCallback(function () {
                        cc.isValid(o._tileNode) && cc.isValid(o._cardNode) && o.realShowSelectEffect();
                    });
        }
    };
    Tile2NodeObject.prototype.showPropHint = function () {
        var e;
        if (this.context.getTile2SlotType() !== GameTypeEnums_1.ETile2SlotType.Slot3 || !this.tileObject.getIsInSlotBar())
            if (null !== (e = this._effectPropHint) && void 0 !== e && e.active)
                this._components.forEach(function (e) {
                    return e.onShowPropHint();
                });
            else {
                this._effectPropHint || (this._effectPropHint = this.createEffectPropHint(this.tileNode.getChildByName(BaseTileNode_1.ETileNodeNames.effectPropHint)));
                this._effectPropHintProxy || this.updateEffectPropHint();
                this._effectPropHint.active = true;
                this._effectPropHintProxy.setAnimation("init", -1);
                this._components.forEach(function (e) {
                    return e.onShowPropHint();
                });
            }
    };
    Tile2NodeObject.prototype.hidePropHint = function () {
        var e;
        if (null === (e = this._effectPropHint) || void 0 === e ? void 0 : e.active) {
            this._effectPropHint.active = false;
            this._components.forEach(function (e) {
                return e.onHidePropHint();
            });
        }
        else
            this._components.forEach(function (e) {
                return e.onHidePropHint();
            });
    };
    Tile2NodeObject.prototype.getSelectedScale = function () {
        return this.info.tileObject.getSelectScale() || 1;
    };
    Tile2NodeObject.prototype.selected = function () {
        var e = this;
        if (this.isSelect())
            this.selectedFinish();
        else {
            this.showSelectEffect();
            this.playSelectAnimation(function () {
                return e.selectedFinish();
            });
        }
    };
    Tile2NodeObject.prototype.selectedFinish = function () { };
    Tile2NodeObject.prototype.cancelSelected = function () {
        var e = this;
        if (this.isSelect()) {
            this.hideSelectEffect();
            this.cancelSelectedAnimation(function () {
                e.resetPosition();
                e.cancelSelectedFinish();
            });
        }
        else {
            this.resetPosition();
            this.cancelSelectedFinish();
        }
    };
    Tile2NodeObject.prototype.playSelectAnimation = function (e) {
        null == e || e();
        this._components.forEach(function (e) {
            return e.onPlaySelectAnimation();
        });
    };
    Tile2NodeObject.prototype.cancelSelectedAnimation = function (e) {
        this.tile2CancelSelectedAnimation(e);
        this._components.forEach(function (e) {
            return e.onCancelSelectedAnimation();
        });
    };
    Tile2NodeObject.prototype.resetToNormal = function () {
        var e;
        this.hidePropHint();
        this.hideSelectEffect();
        null === (e = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentLockDarken)) || void 0 === e || e.resetLockDarkenImmediate();
        this._imgLockBg && (this._imgLockBg.active = false);
    };
    Tile2NodeObject.prototype.resetPosition = function () { };
    Tile2NodeObject.prototype.touchEndForMove = function () {
        this.resetSiblingIndex();
    };
    Tile2NodeObject.prototype.cancelTouch = function () {
        var e = this;
        this.isSelect() && this.tile2CancelSelectedAnimation(function () {
            e.hideSelectEffect();
        });
    };
    Tile2NodeObject.prototype.stopAllAnimation = function () {
        this.hideSelectEffect();
    };
    Tile2NodeObject.prototype.playHintAnimation = function (e, t) {
        var o;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentHint)) || void 0 === o || o.playHintAnimation(e, t);
    };
    Tile2NodeObject.prototype.exitHintAnimation = function () {
        var e;
        null === (e = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentHint)) || void 0 === e || e.exitHintAnimation();
    };
    Tile2NodeObject.prototype.pauseHintShake = function () {
        var e;
        null === (e = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentHint)) || void 0 === e || e.pauseHintShake();
    };
    Tile2NodeObject.prototype.resumeHintShake = function () {
        var e;
        null === (e = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentHint)) || void 0 === e || e.resumeHintShake();
    };
    Tile2NodeObject.prototype.tile2SetLockDarken = function (e, t) {
        if (t === void 0) { t = false; }
        var o;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentLockDarken)) || void 0 === o || o.setLockDarkenActive(e, t);
    };
    Tile2NodeObject.prototype.attachNodeStateAnis = function (e) {
        var t, o;
        try {
            for (var n = __values(e), i = n.next(); !i.done; i = n.next())
                i.value.reset();
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this._nodeStateAnis = e;
    };
    Tile2NodeObject.prototype.playAttachEnterAni = function (e, t) {
        for (var o = this, n = function n(n) {
            i._nodeStateAnis[n].playAni(e, function () {
                n === o._nodeStateAnis.length - 1 && (null == t || t());
            });
        }, i = this, r = 0; r < this._nodeStateAnis.length; r++)
            n(r);
    };
    Tile2NodeObject.prototype.playAttachExitAni = function (e, t) {
        for (var o = this, n = function n(n) {
            i._nodeStateAnis[n].exitAni(e, function () {
                n === o._nodeStateAnis.length - 1 && (null == t || t());
            });
        }, i = this, r = 0; r < this._nodeStateAnis.length; r++)
            n(r);
    };
    Tile2NodeObject.prototype.forceEnterAttachEnterAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].forceEnter(e);
        null == t || t();
    };
    Tile2NodeObject.prototype.forceExitAttachExitAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].forceExit(e);
        null == t || t();
    };
    Tile2NodeObject.prototype.forceEnterPlayAttachEnterAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].playAniForce(e, t);
    };
    Tile2NodeObject.prototype.forceExitPlayAttachExitAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].exitAniForce(e, t);
    };
    Tile2NodeObject.prototype.dropToPosition = function () { };
    Tile2NodeObject.prototype.cancelDropToPosition = function () { };
    Tile2NodeObject.prototype.setPositionWithDelta = function () { };
    Tile2NodeObject.prototype.playSelectLoopAnimation = function () { };
    Tile2NodeObject.prototype.stopSelectLoopAnimation = function () { };
    Tile2NodeObject.prototype.isSelectLoopPlaying = function () {
        return false;
    };
    Tile2NodeObject.prototype.playAnimNodeAnimation = function (e, t, o, n, i, r, a) {
        if (o === void 0) { o = true; }
        this.stopAnimNodeAnimation();
        var l = this.updateTempAnimNode(), s = BaseSpine_1.default.refreshWithNode(l, e, a);
        i && s.attachNode("hook_mahjong", i);
        if (r) {
            s.stopAtFirstFrameOf(t);
        }
        else {
            s.setAnimation(t, o ? -1 : 1, n);
        }
        return s;
    };
    Tile2NodeObject.prototype.stopAnimNodeAnimation = function () {
        this.tileNode.parent = this.animNode;
        this.tileNode.setPosition(0, 0, 0);
        this.tileNode.setScale(1 / this.info.tileObject.layoutScale);
        this.tileNode.angle = 0;
        this.destroyTempAnimNode();
    };
    Tile2NodeObject.prototype.tile2PlayMove = function (e) {
        var t;
        this.isSelect() || this.showSelectEffect();
        null === (t = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === t || t.tile2DragMove(new cc.Vec3(e.x, e.y, 0));
    };
    Tile2NodeObject.prototype.tile2AddToSlotBar4 = function (e, t) {
        var o, n;
        this.hideSelectEffect();
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
        null === (n = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.flyToSlot(e, t);
    };
    Tile2NodeObject.prototype.tile2ResetMoveFinish = function () { };
    Tile2NodeObject.prototype.resetSiblingIndex = function () {
        this.cardNode.zIndex = this.info.tileObject.gridZIndex;
        this.shadowCardNode.zIndex = this.info.tileObject.gridZIndex;
    };
    Tile2NodeObject.prototype.tile2ResetMove = function (e) {
        var t = this, o = function o() {
            t.tile2ResetMoveFinish();
            null == e || e();
        };
        if (this.isSelect()) {
            this.tile2CancelSelectedAnimation(function () {
                t.hideSelectEffect();
                o();
            });
        }
        else {
            o();
        }
    };
    Tile2NodeObject.prototype.tile2CancelSelectedAnimation = function (e) {
        var t, o = this;
        null === (t = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === t || t.moveBack(function () {
            o.resetSiblingIndex();
            null == e || e();
        });
    };
    Tile2NodeObject.prototype.tile2ReturnFromSlotBar = function (e, t) {
        var o, n = this;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.moveBack(function () {
            n.resetSiblingIndex();
            null == t || t();
        });
    };
    Tile2NodeObject.prototype.tile2RevertFromSlotBar = function (e) {
        var t, o = this;
        null === (t = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === t || t.moveBack(function () {
            o.resetSiblingIndex();
            null == e || e();
        });
    };
    Tile2NodeObject.prototype.tile2RollCard = function (e) {
        var t = this.info.tileObject.getIsBack(), o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
        if (o) {
            o.playRoll(t, e);
        }
        else {
            null == e || e();
        }
    };
    Tile2NodeObject.prototype.tile2RevealRollCard = function (e, t) {
        var o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
        if (o) {
            o.playReveal(e, t);
        }
        else {
            null == t || t();
        }
    };
    Tile2NodeObject.prototype.tile2ShowFrontImmediately = function (e) {
        var t = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
        if (t) {
            t.showFrontImmediately();
        }
        else {
            null == e || e();
        }
    };
    Tile2NodeObject.prototype.tile2ShowBackImmediately = function (e) {
        var t = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
        if (t) {
            t.showBackImmediately();
        }
        else {
            null == e || e();
        }
    };
    Tile2NodeObject.prototype.tile2ClearFromSlotBarToPos = function (e, t) {
        var o;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.clearFromSlotBarToPos(e, t);
    };
    Tile2NodeObject.prototype.tile2ClearFromBoardToPos = function (e, t) {
        var o, n;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
        null === (n = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.clearFromBoardToPos(e, t);
    };
    Tile2NodeObject.prototype.tile2ClearFromBoardToSlotBar = function (e, t) {
        var o, n;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
        null === (n = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.clearFromBoardToSlotBar(e, t);
    };
    Tile2NodeObject.prototype.tile2ClearWaitOnSlotBar = function (e, t) {
        var o;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.clearWaitOnSlotBar(e, t);
    };
    Tile2NodeObject.prototype.tile2NoClearAddToSlotBar = function (e, t) {
        var o, n;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard)) || void 0 === o || o.playFly();
        null === (n = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === n || n.noClearAddToSlotBar(e, t);
    };
    Tile2NodeObject.prototype.tile2MoveInSlot = function (e, t) {
        var o;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.moveInSlot(e, t);
    };
    Tile2NodeObject.prototype.onClear = function () {
        this.hideSelectEffect();
        this._components.forEach(function (e) {
            return e.onClear();
        });
    };
    Tile2NodeObject.prototype.tile2BeforeFail = function (e, t) {
        var o;
        null === (o = this.getComponent(TileTypeEnum_1.ETileComponent.Tile2ComponentSlotBarAni)) || void 0 === o || o.beforeFail(e, t, true);
    };
    Tile2NodeObject.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._components.forEach(function (e) {
            return e.onDestroy();
        });
    };
    Tile2NodeObject.prototype.onlyClear = function () {
        _super.prototype.onlyClear.call(this);
        this._components.forEach(function (e) {
            return e.onDestroy();
        });
    };
    Tile2NodeObject._init = Tile2ComponentRegistry_1.Tile2ComponentRegistry.registerAll();
    __decorate([
        mj.traitEvent("Tile2NodeObj_getReqComKs")
    ], Tile2NodeObject.prototype, "getRequiredComponentKeys", null);
    __decorate([
        mj.traitEvent("Tile2NodeObj_playAnim")
    ], Tile2NodeObject.prototype, "playAnimNodeAnimation", null);
    return Tile2NodeObject;
}(BaseTileNode_1.BaseTileNode));
exports.Tile2NodeObject = Tile2NodeObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyTm9kZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw0REFBdUQ7QUFDdkQscURBQWdEO0FBQ2hELGtFQUFtRTtBQUNuRSwrQ0FBOEQ7QUFDOUQseURBQXdEO0FBQ3hELG1FQUFrRTtBQUNsRSx5RUFBeUU7QUFDekU7SUFBcUMsbUNBQVk7SUFBakQ7UUFBQSxxRUE4a0JDO1FBN2tCQyxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsaUJBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDOztJQTRrQjFCLENBQUM7SUExa0JDLHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQWEsQ0FBQztZQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7OztPQUhBO0lBSUQseUNBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QseUNBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNa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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCB7IEVUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEVUaWxlTm9kZU5hbWVzLCBCYXNlVGlsZU5vZGUgfSBmcm9tICcuL0Jhc2VUaWxlTm9kZSc7XG5pbXBvcnQgeyBUaWxlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vVGlsZU5vZGVDb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZTJDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJy4vVGlsZTJDb21wb25lbnRSZWdpc3RyeSc7XG5pbXBvcnQgeyBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5leHBvcnQgY2xhc3MgVGlsZTJOb2RlT2JqZWN0IGV4dGVuZHMgQmFzZVRpbGVOb2RlIHtcbiAgX3R5cGVCaXRzID0gMDtcbiAgX2NvbXBvbmVudHMgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyBfaW5pdCA9IFRpbGUyQ29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJBbGwoKTtcbiAgZ2V0IHR5cGVCaXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlQml0cztcbiAgfVxuICBzZXQgdHlwZUJpdHMoZSkge1xuICAgIHRoaXMuX3R5cGVCaXRzID0gZTtcbiAgfVxuICBhdHRhY2hDb21wb25lbnQoZSwgdCkge1xuICAgIHRoaXMuZGV0YWNoQ29tcG9uZW50KGUpO1xuICAgIHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9jb21wb25lbnRzLnNldChlLCB0KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBkZXRhY2hDb21wb25lbnQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fY29tcG9uZW50cy5nZXQoZSk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQudW5iaW5kKCk7XG4gICAgICB0aGlzLl9jb21wb25lbnRzLmRlbGV0ZShlKTtcbiAgICB9XG4gIH1cbiAgZ2V0Q29tcG9uZW50KGUpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl9jb21wb25lbnRzLmdldChlKSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IG51bGw7XG4gIH1cbiAgc3luY0NvbXBvbmVudHMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgciA9IG5ldyBTZXQobnVsbCAhPSBlID8gZSA6IFtdKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKEFycmF5LmZyb20odGhpcy5fY29tcG9uZW50cy5rZXlzKCkpKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlO1xuICAgICAgICByLmhhcyhjKSB8fCB0aGlzLmRldGFjaENvbXBvbmVudChjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHIpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICBjID0gcC52YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRzLmhhcyhjKSkge1xuICAgICAgICAgIHZhciBmID0gVGlsZU5vZGVDb21wb25lbnQuY3JlYXRlKGMpO1xuICAgICAgICAgIGYgJiYgdGhpcy5hdHRhY2hDb21wb25lbnQoYywgZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChpID0gdS5yZXR1cm4pICYmIGkuY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyTm9kZU9ial9nZXRSZXFDb21Lc1wiKVxuICBnZXRSZXF1aXJlZENvbXBvbmVudEtleXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBbLi4uKG51bGwgIT09IChvID0gbnVsbCA9PT0gKHQgPSBlLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZXRzKCkpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiBbXSldO1xuICAgIG4uaW5jbHVkZXMoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRTbG90QmFyQW5pKSB8fCBuLnB1c2goRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRTbG90QmFyQW5pKTtcbiAgICBuLmluY2x1ZGVzKEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50TG9ja0RhcmtlbikgfHwgbi5wdXNoKEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50TG9ja0Rhcmtlbik7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgdXBkYXRlQW5pbU1ncigpIHtcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLm9uSW5pdEFuaW0oKTtcbiAgICB9KTtcbiAgfVxuICByZWZyZXNoTm9kZSh0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgdGhpcy50eXBlQml0cyA9IG51bGwgIT09IChuID0gbnVsbCA9PT0gKG8gPSB0LnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0VHlwZUJpdHMoKSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDA7XG4gICAgdGhpcy5zeW5jQ29tcG9uZW50cyh0aGlzLmdldFJlcXVpcmVkQ29tcG9uZW50S2V5cyh0KSk7XG4gICAgc3VwZXIucmVmcmVzaE5vZGUuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLl9jb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLm9uUmVmcmVzaE5vZGUodCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0RGlzcGxheVJlc05hbWUoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLl9jb21wb25lbnRzLnZhbHVlcygpKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGkgPSBuLnZhbHVlLmdldFJlc05hbWVPdmVycmlkZSgpO1xuICAgICAgICBpZiAobnVsbCAhPT0gaSkgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG4gJiYgIW4uZG9uZSAmJiAodCA9IG8ucmV0dXJuKSAmJiB0LmNhbGwobyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdC5yZXNOYW1lO1xuICB9XG4gIHVwZGF0ZUltZ0NhcmQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLl9jb21wb25lbnRzLnZhbHVlcygpKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIGlmIChuLnZhbHVlLm9uVXBkYXRlSW1nQ2FyZCgpKSByZXR1cm47XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG4gJiYgIW4uZG9uZSAmJiAodCA9IG8ucmV0dXJuKSAmJiB0LmNhbGwobyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmdldERpc3BsYXlSZXNOYW1lKCksXG4gICAgICByID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShpLCB0aGlzKSxcbiAgICAgIGwgPSByLnBhdGgsXG4gICAgICBzID0gci5idW5kbGVOYW1lLFxuICAgICAgYyA9IHIuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2ltZ0NhcmQsIGwsIGMsIGZhbHNlLCBzKTtcbiAgICB0aGlzLnNhdmVDYXJkVW5pcXVlSW5mbyhzLCBsLCBjKTtcbiAgfVxuICB1cGRhdGVJbWdDYXJkQmcoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLl9jb21wb25lbnRzLnZhbHVlcygpKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIGlmIChuLnZhbHVlLm9uVXBkYXRlSW1nQ2FyZEJnKCkpIHJldHVybjtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmICh0ID0gby5yZXR1cm4pICYmIHQuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9pbWdfbWpfdXBcIiwgdGhpcyksXG4gICAgICByID0gaS5wYXRoLFxuICAgICAgbCA9IGkuYnVuZGxlTmFtZSxcbiAgICAgIHMgPSBpLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9pbWdDYXJkQmcsIHIsIHMsIGZhbHNlLCBsKTtcbiAgfVxuICB1cGRhdGVTaGFkb3dOb2RlKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBvID0gX192YWx1ZXModGhpcy5fY29tcG9uZW50cy52YWx1ZXMoKSksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSBpZiAobi52YWx1ZS5vblVwZGF0ZVNoYWRvd05vZGUoKSkgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKHQgPSBvLnJldHVybikgJiYgdC5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpID0gMCA9PT0gdGhpcy5zaGFkb3dMYXllck5vZGUuZ2V0U2libGluZ0luZGV4KCkgPyBcImdhbWVwbGF5X2ltZ19zaGFkb3dfZG5cIiA6IFwiZ2FtZXBsYXlfaW1nX3NoYWRvd191cFwiLFxuICAgICAgciA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoaSwgdGhpcyksXG4gICAgICBsID0gci5wYXRoLFxuICAgICAgcyA9IHIuYnVuZGxlTmFtZSxcbiAgICAgIGMgPSByLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9zaGFkb3dOb2RlLCBsLCBjLCBmYWxzZSwgcyk7XG4gIH1cbiAgdXBkYXRlTG9ja0JnKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBvID0gX192YWx1ZXModGhpcy5fY29tcG9uZW50cy52YWx1ZXMoKSksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSBpZiAobi52YWx1ZS5vblVwZGF0ZUxvY2tCZygpKSByZXR1cm47XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG4gJiYgIW4uZG9uZSAmJiAodCA9IG8ucmV0dXJuKSAmJiB0LmNhbGwobyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGkgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfbWFza19talwiLCB0aGlzKSxcbiAgICAgIHIgPSBpLnBhdGgsXG4gICAgICBsID0gaS5idW5kbGVOYW1lLFxuICAgICAgcyA9IGkuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2ltZ0xvY2tCZywgciwgcywgZmFsc2UsIGwpO1xuICB9XG4gIHVwZGF0ZUVmZmVjdFNlbGVjdGVkKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBvID0gX192YWx1ZXModGhpcy5fY29tcG9uZW50cy52YWx1ZXMoKSksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSBpZiAobi52YWx1ZS5vblVwZGF0ZUVmZmVjdFNlbGVjdGVkKCkpIHJldHVybjtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmICh0ID0gby5yZXR1cm4pICYmIHQuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuZ2FtZUN0ci5oYXNSZXMoXCJzcGluZS9jYXJkL3NlbGVjdEVmZi9nYW1lcGxheV9zZWxlY3RlZF9lZnhcIikgJiYgKHRoaXMuX2VmZmVjdFNlbGVjdGVkUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2VmZmVjdFNlbGVjdGVkLCBcInNwaW5lL2NhcmQvc2VsZWN0RWZmL2dhbWVwbGF5X3NlbGVjdGVkX2VmeFwiKSk7XG4gIH1cbiAgc2hvd1NlbGVjdEVmZmVjdCgpIHtcbiAgICB2YXIgZSwgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX2NvbXBvbmVudHMudmFsdWVzKCkpLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkgaWYgKGkudmFsdWUub25TaG93U2VsZWN0RWZmZWN0KCkpIHJldHVybjtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnVsbCA9PT0gKG8gPSB0aGlzLl9pbWdTZWxlY3RlZCkgfHwgdm9pZCAwID09PSBvIHx8ICFvLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbWdTZWxlY3RlZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5pbWdTZWxlY3RlZENhcmRCZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5lZmZlY3RTZWxlY3RlZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yZWFsU2hvd1NlbGVjdEVmZmVjdCgpO1xuICAgIH1cbiAgfVxuICBoaWRlU2VsZWN0RWZmZWN0KCkge1xuICAgIHRoaXMuX2ltZ1NlbGVjdGVkICYmICh0aGlzLl9pbWdTZWxlY3RlZC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5faW1nU2VsZWN0ZWRDYXJkQmcgJiYgKHRoaXMuX2ltZ1NlbGVjdGVkQ2FyZEJnLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLl9lZmZlY3RTZWxlY3RlZCAmJiAodGhpcy5fZWZmZWN0U2VsZWN0ZWQuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUub25IaWRlU2VsZWN0RWZmZWN0KCk7XG4gICAgfSk7XG4gIH1cbiAgcmVhbFNob3dTZWxlY3RFZmZlY3QoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMsXG4gICAgICBuID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyh0aGlzLl9jb21wb25lbnRzLnZhbHVlcygpKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIGlmIChyLnZhbHVlLm9uUmVhbFNob3dTZWxlY3RFZmZlY3QoKSkge1xuICAgICAgICBuID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAodCA9IGkucmV0dXJuKSAmJiB0LmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFuKSB7XG4gICAgICB2YXIgbCA9IHRoaXMuX2VmZmVjdFNlbGVjdGVkUHJveHk7XG4gICAgICBpZiAobCkgaWYgKGwucmVhZHkpIHtcbiAgICAgICAgdmFyIHMgPSBsLmdldFNrZWxldG9uKCk7XG4gICAgICAgIChudWxsID09IHMgPyB2b2lkIDAgOiBzLnNrZWxldG9uRGF0YSkgJiYgIXMuZmluZEFuaW1hdGlvbihcInRlc3RcIikgJiYgbC5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICAgIH0gZWxzZSBsLnNldE9uUmVhZHlDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQoby5fdGlsZU5vZGUpICYmIGNjLmlzVmFsaWQoby5fY2FyZE5vZGUpICYmIG8ucmVhbFNob3dTZWxlY3RFZmZlY3QoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzaG93UHJvcEhpbnQoKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nZXRUaWxlMlNsb3RUeXBlKCkgIT09IEVUaWxlMlNsb3RUeXBlLlNsb3QzIHx8ICF0aGlzLnRpbGVPYmplY3QuZ2V0SXNJblNsb3RCYXIoKSkgaWYgKG51bGwgIT09IChlID0gdGhpcy5fZWZmZWN0UHJvcEhpbnQpICYmIHZvaWQgMCAhPT0gZSAmJiBlLmFjdGl2ZSkgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5vblNob3dQcm9wSGludCgpO1xuICAgIH0pO2Vsc2Uge1xuICAgICAgdGhpcy5fZWZmZWN0UHJvcEhpbnQgfHwgKHRoaXMuX2VmZmVjdFByb3BIaW50ID0gdGhpcy5jcmVhdGVFZmZlY3RQcm9wSGludCh0aGlzLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKEVUaWxlTm9kZU5hbWVzLmVmZmVjdFByb3BIaW50KSkpO1xuICAgICAgdGhpcy5fZWZmZWN0UHJvcEhpbnRQcm94eSB8fCB0aGlzLnVwZGF0ZUVmZmVjdFByb3BIaW50KCk7XG4gICAgICB0aGlzLl9lZmZlY3RQcm9wSGludC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5fZWZmZWN0UHJvcEhpbnRQcm94eS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5vblNob3dQcm9wSGludCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhpZGVQcm9wSGludCgpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAobnVsbCA9PT0gKGUgPSB0aGlzLl9lZmZlY3RQcm9wSGludCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2VmZmVjdFByb3BIaW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLm9uSGlkZVByb3BIaW50KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5vbkhpZGVQcm9wSGludCgpO1xuICAgIH0pO1xuICB9XG4gIGdldFNlbGVjdGVkU2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5mby50aWxlT2JqZWN0LmdldFNlbGVjdFNjYWxlKCkgfHwgMTtcbiAgfVxuICBzZWxlY3RlZCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3QoKSkgdGhpcy5zZWxlY3RlZEZpbmlzaCgpO2Vsc2Uge1xuICAgICAgdGhpcy5zaG93U2VsZWN0RWZmZWN0KCk7XG4gICAgICB0aGlzLnBsYXlTZWxlY3RBbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5zZWxlY3RlZEZpbmlzaCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdGVkRmluaXNoKCkge31cbiAgY2FuY2VsU2VsZWN0ZWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLmlzU2VsZWN0KCkpIHtcbiAgICAgIHRoaXMuaGlkZVNlbGVjdEVmZmVjdCgpO1xuICAgICAgdGhpcy5jYW5jZWxTZWxlY3RlZEFuaW1hdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUucmVzZXRQb3NpdGlvbigpO1xuICAgICAgICBlLmNhbmNlbFNlbGVjdGVkRmluaXNoKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNhbmNlbFNlbGVjdGVkRmluaXNoKCk7XG4gICAgfVxuICB9XG4gIHBsYXlTZWxlY3RBbmltYXRpb24oZSkge1xuICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5vblBsYXlTZWxlY3RBbmltYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuICBjYW5jZWxTZWxlY3RlZEFuaW1hdGlvbihlKSB7XG4gICAgdGhpcy50aWxlMkNhbmNlbFNlbGVjdGVkQW5pbWF0aW9uKGUpO1xuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUub25DYW5jZWxTZWxlY3RlZEFuaW1hdGlvbigpO1xuICAgIH0pO1xuICB9XG4gIHJlc2V0VG9Ob3JtYWwoKSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5oaWRlUHJvcEhpbnQoKTtcbiAgICB0aGlzLmhpZGVTZWxlY3RFZmZlY3QoKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50TG9ja0RhcmtlbikpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnJlc2V0TG9ja0RhcmtlbkltbWVkaWF0ZSgpO1xuICAgIHRoaXMuX2ltZ0xvY2tCZyAmJiAodGhpcy5faW1nTG9ja0JnLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfVxuICByZXNldFBvc2l0aW9uKCkge31cbiAgdG91Y2hFbmRGb3JNb3ZlKCkge1xuICAgIHRoaXMucmVzZXRTaWJsaW5nSW5kZXgoKTtcbiAgfVxuICBjYW5jZWxUb3VjaCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5pc1NlbGVjdCgpICYmIHRoaXMudGlsZTJDYW5jZWxTZWxlY3RlZEFuaW1hdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICBlLmhpZGVTZWxlY3RFZmZlY3QoKTtcbiAgICB9KTtcbiAgfVxuICBzdG9wQWxsQW5pbWF0aW9uKCkge1xuICAgIHRoaXMuaGlkZVNlbGVjdEVmZmVjdCgpO1xuICB9XG4gIHBsYXlIaW50QW5pbWF0aW9uKGUsIHQpIHtcbiAgICB2YXIgbztcbiAgICBudWxsID09PSAobyA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50SGludCkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLnBsYXlIaW50QW5pbWF0aW9uKGUsIHQpO1xuICB9XG4gIGV4aXRIaW50QW5pbWF0aW9uKCkge1xuICAgIHZhciBlO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRIaW50KSkgfHwgdm9pZCAwID09PSBlIHx8IGUuZXhpdEhpbnRBbmltYXRpb24oKTtcbiAgfVxuICBwYXVzZUhpbnRTaGFrZSgpIHtcbiAgICB2YXIgZTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50SGludCkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnBhdXNlSGludFNoYWtlKCk7XG4gIH1cbiAgcmVzdW1lSGludFNoYWtlKCkge1xuICAgIHZhciBlO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRIaW50KSkgfHwgdm9pZCAwID09PSBlIHx8IGUucmVzdW1lSGludFNoYWtlKCk7XG4gIH1cbiAgdGlsZTJTZXRMb2NrRGFya2VuKGUsIHQgPSBmYWxzZSkge1xuICAgIHZhciBvO1xuICAgIG51bGwgPT09IChvID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRMb2NrRGFya2VuKSkgfHwgdm9pZCAwID09PSBvIHx8IG8uc2V0TG9ja0RhcmtlbkFjdGl2ZShlLCB0KTtcbiAgfVxuICBhdHRhY2hOb2RlU3RhdGVBbmlzKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKGUpLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkgaS52YWx1ZS5yZXNldCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX25vZGVTdGF0ZUFuaXMgPSBlO1xuICB9XG4gIHBsYXlBdHRhY2hFbnRlckFuaShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IHRoaXMsIG4gPSBmdW5jdGlvbiBuKG4pIHtcbiAgICAgICAgaS5fbm9kZVN0YXRlQW5pc1tuXS5wbGF5QW5pKGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBuID09PSBvLl9ub2RlU3RhdGVBbmlzLmxlbmd0aCAtIDEgJiYgKG51bGwgPT0gdCB8fCB0KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGkgPSB0aGlzLCByID0gMDsgciA8IHRoaXMuX25vZGVTdGF0ZUFuaXMubGVuZ3RoOyByKyspIG4ocik7XG4gIH1cbiAgcGxheUF0dGFjaEV4aXRBbmkoZSwgdCkge1xuICAgIGZvciAodmFyIG8gPSB0aGlzLCBuID0gZnVuY3Rpb24gbihuKSB7XG4gICAgICAgIGkuX25vZGVTdGF0ZUFuaXNbbl0uZXhpdEFuaShlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbiA9PT0gby5fbm9kZVN0YXRlQW5pcy5sZW5ndGggLSAxICYmIChudWxsID09IHQgfHwgdCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBpID0gdGhpcywgciA9IDA7IHIgPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgcisrKSBuKHIpO1xuICB9XG4gIGZvcmNlRW50ZXJBdHRhY2hFbnRlckFuaShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgbysrKSB0aGlzLl9ub2RlU3RhdGVBbmlzW29dLmZvcmNlRW50ZXIoZSk7XG4gICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgfVxuICBmb3JjZUV4aXRBdHRhY2hFeGl0QW5pKGUsIHQpIHtcbiAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuX25vZGVTdGF0ZUFuaXMubGVuZ3RoOyBvKyspIHRoaXMuX25vZGVTdGF0ZUFuaXNbb10uZm9yY2VFeGl0KGUpO1xuICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gIH1cbiAgZm9yY2VFbnRlclBsYXlBdHRhY2hFbnRlckFuaShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgbysrKSB0aGlzLl9ub2RlU3RhdGVBbmlzW29dLnBsYXlBbmlGb3JjZShlLCB0KTtcbiAgfVxuICBmb3JjZUV4aXRQbGF5QXR0YWNoRXhpdEFuaShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgbysrKSB0aGlzLl9ub2RlU3RhdGVBbmlzW29dLmV4aXRBbmlGb3JjZShlLCB0KTtcbiAgfVxuICBkcm9wVG9Qb3NpdGlvbigpIHt9XG4gIGNhbmNlbERyb3BUb1Bvc2l0aW9uKCkge31cbiAgc2V0UG9zaXRpb25XaXRoRGVsdGEoKSB7fVxuICBwbGF5U2VsZWN0TG9vcEFuaW1hdGlvbigpIHt9XG4gIHN0b3BTZWxlY3RMb29wQW5pbWF0aW9uKCkge31cbiAgaXNTZWxlY3RMb29wUGxheWluZygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMk5vZGVPYmpfcGxheUFuaW1cIilcbiAgcGxheUFuaW1Ob2RlQW5pbWF0aW9uKGUsIHQsIG8gPSB0cnVlLCBuPywgaT8sIHI/LCBhPykge1xuICAgIHRoaXMuc3RvcEFuaW1Ob2RlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGwgPSB0aGlzLnVwZGF0ZVRlbXBBbmltTm9kZSgpLFxuICAgICAgcyA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUobCwgZSwgYSk7XG4gICAgaSAmJiBzLmF0dGFjaE5vZGUoXCJob29rX21haGpvbmdcIiwgaSk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHMuc3RvcEF0Rmlyc3RGcmFtZU9mKHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzLnNldEFuaW1hdGlvbih0LCBvID8gLTEgOiAxLCBuKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgc3RvcEFuaW1Ob2RlQW5pbWF0aW9uKCkge1xuICAgIHRoaXMudGlsZU5vZGUucGFyZW50ID0gdGhpcy5hbmltTm9kZTtcbiAgICB0aGlzLnRpbGVOb2RlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIHRoaXMudGlsZU5vZGUuc2V0U2NhbGUoMSAvIHRoaXMuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlKTtcbiAgICB0aGlzLnRpbGVOb2RlLmFuZ2xlID0gMDtcbiAgICB0aGlzLmRlc3Ryb3lUZW1wQW5pbU5vZGUoKTtcbiAgfVxuICB0aWxlMlBsYXlNb3ZlKGUpIHtcbiAgICB2YXIgdDtcbiAgICB0aGlzLmlzU2VsZWN0KCkgfHwgdGhpcy5zaG93U2VsZWN0RWZmZWN0KCk7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFNsb3RCYXJBbmkpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC50aWxlMkRyYWdNb3ZlKG5ldyBjYy5WZWMzKGUueCwgZS55LCAwKSk7XG4gIH1cbiAgdGlsZTJBZGRUb1Nsb3RCYXI0KGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICB0aGlzLmhpZGVTZWxlY3RFZmZlY3QoKTtcbiAgICBudWxsID09PSAobyA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50Um9sbENhcmQpKSB8fCB2b2lkIDAgPT09IG8gfHwgby5wbGF5Rmx5KCk7XG4gICAgbnVsbCA9PT0gKG4gPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFNsb3RCYXJBbmkpKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5mbHlUb1Nsb3QoZSwgdCk7XG4gIH1cbiAgdGlsZTJSZXNldE1vdmVGaW5pc2goKSB7fVxuICByZXNldFNpYmxpbmdJbmRleCgpIHtcbiAgICB0aGlzLmNhcmROb2RlLnpJbmRleCA9IHRoaXMuaW5mby50aWxlT2JqZWN0LmdyaWRaSW5kZXg7XG4gICAgdGhpcy5zaGFkb3dDYXJkTm9kZS56SW5kZXggPSB0aGlzLmluZm8udGlsZU9iamVjdC5ncmlkWkluZGV4O1xuICB9XG4gIHRpbGUyUmVzZXRNb3ZlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gZnVuY3Rpb24gbygpIHtcbiAgICAgICAgdC50aWxlMlJlc2V0TW92ZUZpbmlzaCgpO1xuICAgICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgICAgfTtcbiAgICBpZiAodGhpcy5pc1NlbGVjdCgpKSB7XG4gICAgICB0aGlzLnRpbGUyQ2FuY2VsU2VsZWN0ZWRBbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmhpZGVTZWxlY3RFZmZlY3QoKTtcbiAgICAgICAgbygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG8oKTtcbiAgICB9XG4gIH1cbiAgdGlsZTJDYW5jZWxTZWxlY3RlZEFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gdGhpcztcbiAgICBudWxsID09PSAodCA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50U2xvdEJhckFuaSkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0Lm1vdmVCYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8ucmVzZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgfSk7XG4gIH1cbiAgdGlsZTJSZXR1cm5Gcm9tU2xvdEJhcihlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gdGhpcztcbiAgICBudWxsID09PSAobyA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50U2xvdEJhckFuaSkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLm1vdmVCYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIG4ucmVzZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gICAgfSk7XG4gIH1cbiAgdGlsZTJSZXZlcnRGcm9tU2xvdEJhcihlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gdGhpcztcbiAgICBudWxsID09PSAodCA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50U2xvdEJhckFuaSkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0Lm1vdmVCYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8ucmVzZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgfSk7XG4gIH1cbiAgdGlsZTJSb2xsQ2FyZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmluZm8udGlsZU9iamVjdC5nZXRJc0JhY2soKSxcbiAgICAgIG8gPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJvbGxDYXJkKTtcbiAgICBpZiAobykge1xuICAgICAgby5wbGF5Um9sbCh0LCBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbnVsbCA9PSBlIHx8IGUoKTtcbiAgICB9XG4gIH1cbiAgdGlsZTJSZXZlYWxSb2xsQ2FyZChlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJvbGxDYXJkKTtcbiAgICBpZiAobykge1xuICAgICAgby5wbGF5UmV2ZWFsKGUsIHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBudWxsID09IHQgfHwgdCgpO1xuICAgIH1cbiAgfVxuICB0aWxlMlNob3dGcm9udEltbWVkaWF0ZWx5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50Um9sbENhcmQpO1xuICAgIGlmICh0KSB7XG4gICAgICB0LnNob3dGcm9udEltbWVkaWF0ZWx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgfVxuICB9XG4gIHRpbGUyU2hvd0JhY2tJbW1lZGlhdGVseShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJvbGxDYXJkKTtcbiAgICBpZiAodCkge1xuICAgICAgdC5zaG93QmFja0ltbWVkaWF0ZWx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgfVxuICB9XG4gIHRpbGUyQ2xlYXJGcm9tU2xvdEJhclRvUG9zKGUsIHQpIHtcbiAgICB2YXIgbztcbiAgICBudWxsID09PSAobyA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50U2xvdEJhckFuaSkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmNsZWFyRnJvbVNsb3RCYXJUb1BvcyhlLCB0KTtcbiAgfVxuICB0aWxlMkNsZWFyRnJvbUJvYXJkVG9Qb3MoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIG51bGwgPT09IChvID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRSb2xsQ2FyZCkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLnBsYXlGbHkoKTtcbiAgICBudWxsID09PSAobiA9IHRoaXMuZ2V0Q29tcG9uZW50KEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50U2xvdEJhckFuaSkpIHx8IHZvaWQgMCA9PT0gbiB8fCBuLmNsZWFyRnJvbUJvYXJkVG9Qb3MoZSwgdCk7XG4gIH1cbiAgdGlsZTJDbGVhckZyb21Cb2FyZFRvU2xvdEJhcihlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJvbGxDYXJkKSkgfHwgdm9pZCAwID09PSBvIHx8IG8ucGxheUZseSgpO1xuICAgIG51bGwgPT09IChuID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRTbG90QmFyQW5pKSkgfHwgdm9pZCAwID09PSBuIHx8IG4uY2xlYXJGcm9tQm9hcmRUb1Nsb3RCYXIoZSwgdCk7XG4gIH1cbiAgdGlsZTJDbGVhcldhaXRPblNsb3RCYXIoZSwgdCkge1xuICAgIHZhciBvO1xuICAgIG51bGwgPT09IChvID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRTbG90QmFyQW5pKSkgfHwgdm9pZCAwID09PSBvIHx8IG8uY2xlYXJXYWl0T25TbG90QmFyKGUsIHQpO1xuICB9XG4gIHRpbGUyTm9DbGVhckFkZFRvU2xvdEJhcihlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJvbGxDYXJkKSkgfHwgdm9pZCAwID09PSBvIHx8IG8ucGxheUZseSgpO1xuICAgIG51bGwgPT09IChuID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRTbG90QmFyQW5pKSkgfHwgdm9pZCAwID09PSBuIHx8IG4ubm9DbGVhckFkZFRvU2xvdEJhcihlLCB0KTtcbiAgfVxuICB0aWxlMk1vdmVJblNsb3QoZSwgdCkge1xuICAgIHZhciBvO1xuICAgIG51bGwgPT09IChvID0gdGhpcy5nZXRDb21wb25lbnQoRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRTbG90QmFyQW5pKSkgfHwgdm9pZCAwID09PSBvIHx8IG8ubW92ZUluU2xvdChlLCB0KTtcbiAgfVxuICBvbkNsZWFyKCkge1xuICAgIHRoaXMuaGlkZVNlbGVjdEVmZmVjdCgpO1xuICAgIHRoaXMuX2NvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUub25DbGVhcigpO1xuICAgIH0pO1xuICB9XG4gIHRpbGUyQmVmb3JlRmFpbChlLCB0KSB7XG4gICAgdmFyIG87XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLmdldENvbXBvbmVudChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFNsb3RCYXJBbmkpKSB8fCB2b2lkIDAgPT09IG8gfHwgby5iZWZvcmVGYWlsKGUsIHQsIHRydWUpO1xuICB9XG4gIGNsZWFyKCkge1xuICAgIHN1cGVyLmNsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5vbkRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuICBvbmx5Q2xlYXIoKSB7XG4gICAgc3VwZXIub25seUNsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5vbkRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==
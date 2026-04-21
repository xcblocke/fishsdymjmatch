"use strict";
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
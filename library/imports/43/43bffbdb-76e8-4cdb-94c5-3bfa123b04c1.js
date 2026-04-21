"use strict";
cc._RF.push(module, '43bffvbduhM25TFO/oSOwTB', 'TileNodeObject');
// Scripts/TileNodeObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileNodeObject = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var GameEvent_1 = require("./simulator/constant/GameEvent");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeObject = /** @class */ (function (_super) {
    __extends(TileNodeObject, _super);
    function TileNodeObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.Normal;
        return _this;
    }
    TileNodeObject.prototype.getSelectedScale = function () {
        return this.info.tileObject.getSelectScale() || 1;
    };
    TileNodeObject.prototype.playSelectAnimation = function (e) {
        this._shadowCardStateCtl.playEnterAni(this.dragRootNode);
        this._cardStateCtl.playEnterAni(this.dragRootNode, function () {
            null == e || e();
        });
    };
    TileNodeObject.prototype.selectedFinish = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_SelectedFinish, this);
    };
    TileNodeObject.prototype.selected = function () {
        var e = this, t = function t() {
            e.selectedFinish();
        };
        if (this.isSelect())
            t();
        else {
            mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_BeginSelected, this);
            this.context.gameType == GameTypeEnums_1.MjGameType.Classic && this.cancelDropToPosition();
            this.showSelectEffect();
            this.playSelectAnimation(t);
        }
    };
    TileNodeObject.prototype.cancelSelectedAnimation = function (e) {
        var t = this;
        this._cardStateCtl.playExitAni(this.layerNode, function () {
            t.resetSiblingIndex();
            null == e || e();
        });
        this._shadowCardStateCtl.playExitAni(this.shadowLayerNode);
    };
    TileNodeObject.prototype.cancelSelected = function () {
        var e = this, t = function t() {
            e.resetPosition();
            e.cancelSelectedFinish();
        };
        if (this.isSelect()) {
            mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_BeginUnSelected, this);
            this.hideSelectEffect();
            this.cancelSelectedAnimation(function () {
                t();
            });
        }
        else
            t();
    };
    TileNodeObject.prototype.clearCancelSelected = function () {
        this.hidePropHint();
        this.hideSelectEffect();
        this._shadowCardStateCtl.forceEnter(this.dragRootNode);
        this._cardStateCtl.forceEnter(this.dragRootNode);
    };
    TileNodeObject.prototype.resetToNormal = function () {
        this.hidePropHint();
        this.hideSelectEffect();
        this.imgLockBg.active = false;
    };
    TileNodeObject.prototype.resetPosition = function () { };
    TileNodeObject.prototype.touchEndForMove = function () {
        this._shadowCardStateCtl.forceEnter(this.dragRootNode);
        this._cardStateCtl.forceEnter(this.dragRootNode);
        this.resetSiblingIndex();
    };
    TileNodeObject.prototype.cancelTouch = function () {
        if (this.isSelect()) {
            this._shadowCardStateCtl.forceEnter(this.dragRootNode);
            this._cardStateCtl.forceEnter(this.dragRootNode);
            this.resetSiblingIndex();
        }
        else {
            this._cardStateCtl.forceExit(this.layerNode);
            this._shadowCardStateCtl.forceExit(this.shadowLayerNode);
            this.resetSiblingIndex();
        }
    };
    TileNodeObject.prototype.setPositionWithDelta = function (e, t) {
        if (e === void 0) { e = true; }
        this._shadowCardStateCtl.forceExitMove(this.dragRootNode, new cc.Vec3(t.x, t.y, 0));
        this._cardStateCtl.forceExitMove(this.dragRootNode, new cc.Vec3(t.x, t.y, 0));
    };
    TileNodeObject.prototype.attachNodeStateAnis = function (e) {
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
    TileNodeObject.prototype.stopAllAnimation = function () {
        this._cardStateCtl.forceExit(this.layerNode);
        this._shadowCardStateCtl.forceExit(this.shadowLayerNode);
    };
    TileNodeObject.prototype.playAttachEnterAni = function (e, t) {
        for (var o = this, n = function n(n) {
            i._nodeStateAnis[n].playAni(e, function () {
                n === o._nodeStateAnis.length - 1 && (null == t || t());
            });
        }, i = this, r = 0; r < this._nodeStateAnis.length; r++)
            n(r);
    };
    TileNodeObject.prototype.playHintAnimation = function (e, t) {
        var o, n;
        null === (o = this._cardStateCtl) || void 0 === o || o.playHintEnterAni(e, t);
        null === (n = this._shadowCardStateCtl) || void 0 === n || n.playHintEnterAni(e);
    };
    TileNodeObject.prototype.exitHintAnimation = function () {
        var e, t;
        null === (e = this._cardStateCtl) || void 0 === e || e.playHintExitAni();
        null === (t = this._shadowCardStateCtl) || void 0 === t || t.playHintExitAni();
    };
    TileNodeObject.prototype.pauseHintShake = function () {
        var e, t;
        null === (e = this._cardStateCtl) || void 0 === e || e.pauseHint();
        null === (t = this._shadowCardStateCtl) || void 0 === t || t.pauseHint();
    };
    TileNodeObject.prototype.resumeHintShake = function () {
        var e, t;
        null === (e = this._cardStateCtl) || void 0 === e || e.resumeHint();
        null === (t = this._shadowCardStateCtl) || void 0 === t || t.resumeHint();
    };
    TileNodeObject.prototype.playSelectLoopAnimation = function (e) {
        var t, o;
        null === (t = this._tileNodeStateCtl) || void 0 === t || t.playSelectLoopEnterAni(e);
        null === (o = this._shadowNodeStateCtl) || void 0 === o || o.playSelectLoopEnterAni(e);
    };
    TileNodeObject.prototype.stopSelectLoopAnimation = function () {
        var e, t;
        null === (e = this._tileNodeStateCtl) || void 0 === e || e.playSelectLoopExitAni();
        null === (t = this._shadowNodeStateCtl) || void 0 === t || t.playSelectLoopExitAni();
    };
    TileNodeObject.prototype.isSelectLoopPlaying = function () {
        var e;
        return (null === (e = this._tileNodeStateCtl) || void 0 === e ? void 0 : e.isSelectLoopPlaying()) || false;
    };
    TileNodeObject.prototype.playAttachExitAni = function (e, t) {
        for (var o = this, n = function n(n) {
            i._nodeStateAnis[n].exitAni(e, function () {
                n === o._nodeStateAnis.length - 1 && (null == t || t());
            });
        }, i = this, r = 0; r < this._nodeStateAnis.length; r++)
            n(r);
    };
    TileNodeObject.prototype.forceEnterAttachEnterAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].forceEnter(e);
        null == t || t();
    };
    TileNodeObject.prototype.forceExitAttachExitAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].forceExit(e);
        null == t || t();
    };
    TileNodeObject.prototype.forceEnterPlayAttachEnterAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].playAniForce(e, t);
    };
    TileNodeObject.prototype.forceExitPlayAttachExitAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].exitAniForce(e, t);
    };
    TileNodeObject.prototype.playAnimNodeAnimation = function (e, t, o, n, i, r, a) {
        if (o === void 0) { o = true; }
        this.stopAnimNodeAnimation();
        var s = this.updateTempAnimNode(), c = BaseSpine_1.default.refreshWithNode(s, e, a);
        i && c.attachNode("hook_mahjong", i);
        if (r) {
            c.stopAtFirstFrameOf(t);
        }
        else {
            c.setAnimation(t, o ? -1 : 1, n);
        }
        return c;
    };
    TileNodeObject.prototype.stopAnimNodeAnimation = function () {
        this.tileNode.parent = this.animNode;
        this.tileNode.setPosition(0, 0, 0);
        this.tileNode.setScale(1 / this.info.tileObject.layoutScale);
        this.tileNode.angle = 0;
        this.destroyTempAnimNode();
    };
    TileNodeObject.prototype.dropToPosition = function (e) {
        this._cardStateCtl.playDropAni(this.layerNode, e);
        this._shadowCardStateCtl.playDropAni(this.shadowLayerNode, function () { });
    };
    TileNodeObject.prototype.cancelDropToPosition = function (e) {
        this._cardStateCtl.cancelDropAni(this.layerNode, e);
        this._shadowCardStateCtl.cancelDropAni(this.shadowLayerNode, function () { });
    };
    __decorate([
        mj.traitEvent("TileNodeObj_getScale")
    ], TileNodeObject.prototype, "getSelectedScale", null);
    __decorate([
        mj.traitEvent("TileNodeObj_BeginSelected")
    ], TileNodeObject.prototype, "selected", null);
    __decorate([
        mj.traitEvent("TileNodeObj_UnSelected")
    ], TileNodeObject.prototype, "cancelSelected", null);
    __decorate([
        mj.traitEvent("TileNodeObj_reToNormal")
    ], TileNodeObject.prototype, "resetToNormal", null);
    __decorate([
        mj.traitEvent("TileNodeObj_touchEnd")
    ], TileNodeObject.prototype, "touchEndForMove", null);
    __decorate([
        mj.traitEvent("TileNodeObj_setPosition")
    ], TileNodeObject.prototype, "setPositionWithDelta", null);
    __decorate([
        mj.traitEvent("TileNodeObj_playAnim")
    ], TileNodeObject.prototype, "playAnimNodeAnimation", null);
    return TileNodeObject;
}(BaseTileNode_1.BaseTileNode));
exports.TileNodeObject = TileNodeObject;

cc._RF.pop();
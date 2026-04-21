"use strict";
cc._RF.push(module, '6ff0bRwHtVG3KwdyUTprhaH', 'Tile2SlotBarAniComponent');
// Scripts/Tile2SlotBarAniComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotBarAniComponent = void 0;
var AniStateManager_1 = require("./fsm/base/AniStateManager");
var Tile2FlyToSlotAni_1 = require("./fsm/ani/Tile2FlyToSlotAni");
var Tile2MoveBackAni_1 = require("./fsm/ani/Tile2MoveBackAni");
var Tile2MoveInSlotAni_1 = require("./fsm/ani/Tile2MoveInSlotAni");
var Tile2ClearFromSlotBarToPosAni_1 = require("./fsm/ani/Tile2ClearFromSlotBarToPosAni");
var Tile2ClearFromBoardToPosAni_1 = require("./fsm/ani/Tile2ClearFromBoardToPosAni");
var Tile2ClearFromBoardToSlotBarAni_1 = require("./fsm/ani/Tile2ClearFromBoardToSlotBarAni");
var Tile2ClearWaitOnSlotBarAni_1 = require("./fsm/ani/Tile2ClearWaitOnSlotBarAni");
var Tile2NoClearAddToSlotBarAni_1 = require("./fsm/ani/Tile2NoClearAddToSlotBarAni");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2SlotBarAniComponent = /** @class */ (function (_super) {
    __extends(Tile2SlotBarAniComponent, _super);
    function Tile2SlotBarAniComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._queue = [];
        _this._isPlaying = false;
        return _this;
    }
    Tile2SlotBarAniComponent.prototype.onInitAnim = function () {
        var e = this._host;
        this._flyAni = new Tile2FlyToSlotAni_1.Tile2FlyToSlotAni(e.cardNode, e);
        this._moveInAni = new Tile2MoveInSlotAni_1.Tile2MoveInSlotAni(e.cardNode, e);
        this._moveBackAni = new Tile2MoveBackAni_1.Tile2MoveBackAni(e.cardNode, e);
        this._clearFromSlotBarToPosAni = new Tile2ClearFromSlotBarToPosAni_1.Tile2ClearFromSlotBarToPosAni(e.cardNode, e);
        this._clearFromBoardToPosAni = new Tile2ClearFromBoardToPosAni_1.Tile2ClearFromBoardToPosAni(e.cardNode, e);
        this._clearFromBoardToSlotBarAni = new Tile2ClearFromBoardToSlotBarAni_1.Tile2ClearFromBoardToSlotBarAni(e.cardNode, e);
        this._clearWaitOnSlotBarAni = new Tile2ClearWaitOnSlotBarAni_1.Tile2ClearWaitOnSlotBarAni(e.cardNode, e);
        this._noClearAddToSlotBarAni = new Tile2NoClearAddToSlotBarAni_1.Tile2NoClearAddToSlotBarAni(e.cardNode, e);
        this._aniMgr = new AniStateManager_1.AniStateManager().add("fly", this._flyAni).add("moveInSlot", this._moveInAni).add("moveBack", this._moveBackAni).add("clearFromSlotBarToPos", this._clearFromSlotBarToPosAni).add("clearFromBoardToPos", this._clearFromBoardToPosAni).add("clearFromBoardToSlotBar", this._clearFromBoardToSlotBarAni).add("clearWaitOnSlotBar", this._clearWaitOnSlotBarAni).add("noClearAddToSlotBar", this._noClearAddToSlotBarAni);
        this._shadowAniMgr = new AniStateManager_1.AniStateManager().add("fly", new Tile2FlyToSlotAni_1.Tile2FlyToSlotAni(e.shadowCardNode, e)).add("moveInSlot", new Tile2MoveInSlotAni_1.Tile2MoveInSlotAni(e.shadowCardNode, e)).add("moveBack", new Tile2MoveBackAni_1.Tile2MoveBackAni(e.shadowCardNode, e)).add("clearFromSlotBarToPos", new Tile2ClearFromSlotBarToPosAni_1.Tile2ClearFromSlotBarToPosAni(e.shadowCardNode, e)).add("clearFromBoardToPos", new Tile2ClearFromBoardToPosAni_1.Tile2ClearFromBoardToPosAni(e.shadowCardNode, e)).add("clearFromBoardToSlotBar", new Tile2ClearFromBoardToSlotBarAni_1.Tile2ClearFromBoardToSlotBarAni(e.shadowCardNode, e)).add("clearWaitOnSlotBar", new Tile2ClearWaitOnSlotBarAni_1.Tile2ClearWaitOnSlotBarAni(e.shadowCardNode, e)).add("noClearAddToSlotBar", new Tile2NoClearAddToSlotBarAni_1.Tile2NoClearAddToSlotBarAni(e.shadowCardNode, e));
    };
    Tile2SlotBarAniComponent.prototype.onClear = function () {
        this.cancelAll();
    };
    Tile2SlotBarAniComponent.prototype.onDestroy = function () {
        this.cancelAll();
    };
    Tile2SlotBarAniComponent.prototype.flyToSlot = function (e, t, o) {
        if (o === void 0) { o = false; }
        var n = this;
        this._dispatch(function () {
            n._host;
            n._shadowAniMgr.play("fly");
            n._aniMgr.play("fly", e, function () {
                null == t || t();
                n._onTaskDone();
            });
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype.moveInSlot = function (e, t, o) {
        if (o === void 0) { o = true; }
        var n = this;
        this._dispatch(function () {
            n._shadowAniMgr.play("moveInSlot", e);
            n._aniMgr.play("moveInSlot", e, function () {
                null == t || t();
                n._onTaskDone();
            });
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype.moveBack = function (e, t) {
        if (t === void 0) { t = false; }
        var o = this;
        this._dispatch(function () {
            var t = o._host;
            o._reparent(t.shadowCardNode, o._host.dragRootNode);
            o._shadowAniMgr.play("moveBack", void 0, function () {
                o._reparent(t.shadowCardNode, t.shadowLayerNode);
            });
            o._reparent(t.cardNode, o._host.dragRootNode);
            o._aniMgr.play("moveBack", void 0, function () {
                o._reparent(t.cardNode, t.layerNode);
                null == e || e();
                o._onTaskDone();
            });
        }, t, function () {
            null == e || e();
        });
    };
    Tile2SlotBarAniComponent.prototype.cancelAll = function () {
        var e, t, o = this._queue;
        this._queue = [];
        this._isPlaying = false;
        this._aniMgr.cancelAll();
        this._shadowAniMgr.cancelAll();
        try {
            for (var n = __values(o), i = n.next(); !i.done; i = n.next())
                i.value.skip();
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
    };
    Tile2SlotBarAniComponent.prototype._dispatch = function (e, t, o) {
        if (o === void 0) { o = function () { }; }
        var n, i;
        if (t) {
            this._queue.push({
                run: e,
                skip: o
            });
            this._isPlaying || this._playNext();
        }
        else {
            var r = this._queue;
            this._queue = [];
            this._isPlaying = true;
            this._isPlaying = true;
            try {
                for (var l = __values(r), s = l.next(); !s.done; s = l.next())
                    s.value.skip();
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (i = l.return) && i.call(l);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            e();
        }
    };
    Tile2SlotBarAniComponent.prototype._playNext = function () {
        if (0 !== this._queue.length) {
            this._isPlaying = true;
            this._queue.shift().run();
        }
        else
            this._isPlaying = false;
    };
    Tile2SlotBarAniComponent.prototype._onTaskDone = function () {
        this._isPlaying && this._playNext();
    };
    Tile2SlotBarAniComponent.prototype.tile2DragMove = function (e) {
        var t = this._host, o = t.dragRootNode;
        this._reparent(t.shadowCardNode, o);
        this._shadowAniMgr.cancel("fly");
        this._shadowAniMgr.cancel("moveBack");
        this._applyDelta(t.shadowCardNode, e);
        this._reparent(t.cardNode, o);
        this._aniMgr.cancel("fly");
        this._aniMgr.cancel("moveBack");
        this._applyDelta(t.cardNode, e);
    };
    Tile2SlotBarAniComponent.prototype.beforeFail = function (e, t, o) {
        if (o === void 0) { o = true; }
        var n = this;
        this._dispatch(function () {
            if (cc.isValid(e)) {
                var o = n._host;
                n._reparent(o.shadowCardNode, e);
                n._reparent(o.cardNode, e);
                null == t || t();
                n._onTaskDone();
            }
            else {
                null == t || t();
                n._onTaskDone();
            }
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype.clearFromSlotBarToPos = function (e, t, o) {
        if (o === void 0) { o = true; }
        var n = this;
        this._dispatch(function () {
            n._shadowAniMgr.play("clearFromSlotBarToPos", e);
            n._aniMgr.play("clearFromSlotBarToPos", e, function () {
                null == t || t();
                n._onTaskDone();
            });
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype.clearFromBoardToPos = function (e, t, o) {
        if (o === void 0) { o = false; }
        var n = this;
        this._dispatch(function () {
            n._shadowAniMgr.play("clearFromBoardToPos", e);
            n._aniMgr.play("clearFromBoardToPos", e, function () {
                null == t || t();
                n._onTaskDone();
            });
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype.clearFromBoardToSlotBar = function (e, t, o) {
        if (o === void 0) { o = false; }
        var n = this;
        this._dispatch(function () {
            n._shadowAniMgr.play("clearFromBoardToSlotBar", e);
            n._aniMgr.play("clearFromBoardToSlotBar", e, function () {
                null == t || t();
                n._onTaskDone();
            });
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype.clearWaitOnSlotBar = function (e, t, o) {
        if (o === void 0) { o = true; }
        var n = this;
        this._dispatch(function () {
            n._shadowAniMgr.play("clearWaitOnSlotBar", e);
            n._aniMgr.play("clearWaitOnSlotBar", e, function () {
                null == t || t();
                n._onTaskDone();
            });
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype.noClearAddToSlotBar = function (e, t, o) {
        if (o === void 0) { o = false; }
        var n = this;
        this._dispatch(function () {
            n._host.hidePropHint();
            n._shadowAniMgr.play("noClearAddToSlotBar", Object.assign(Object.assign({}, e), {
                isShadow: true
            }));
            n._aniMgr.play("noClearAddToSlotBar", e, function () {
                null == t || t();
                n._onTaskDone();
            });
        }, o, function () {
            null == t || t();
        });
    };
    Tile2SlotBarAniComponent.prototype._cardParent = function () {
        var e, t = this._host;
        return cc.isValid(null === (e = t.cardNode) || void 0 === e ? void 0 : e.parent) ? t.cardNode.parent : t.layerNode;
    };
    Tile2SlotBarAniComponent.prototype._shadowParent = function () {
        var e, t = this._host;
        return cc.isValid(null === (e = t.shadowCardNode) || void 0 === e ? void 0 : e.parent) ? t.shadowCardNode.parent : t.shadowLayerNode;
    };
    Tile2SlotBarAniComponent.prototype._applyDelta = function (e, t) {
        cc.isValid(e) && (e.position = new cc.Vec3(e.position.x + t.x, e.position.y + t.y, e.position.z));
    };
    Tile2SlotBarAniComponent.prototype._reparent = function (e, t) {
        if (e && t && e.parent !== t) {
            var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
            e.parent = t;
            e.setPosition(n.x, n.y);
        }
    };
    return Tile2SlotBarAniComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2SlotBarAniComponent = Tile2SlotBarAniComponent;

cc._RF.pop();
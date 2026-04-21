"use strict";
cc._RF.push(module, '22641bF7aJAl5GkGsmXlA4/', 'GameTouchComponent');
// Scripts/component/GameTouchComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTouchComponent = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameTouchComponent = /** @class */ (function (_super) {
    __extends(GameTouchComponent, _super);
    function GameTouchComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nodeCardRoot = null;
        _this._touchMap = new Map();
        _this._activeTouchId = null;
        _this._isEventsRegistered = false;
        _this._gameType = null;
        _this._touchStartPos = null;
        _this._isMoving = false;
        _this._touchTime = 0;
        _this._closeTouchMove = false;
        return _this;
    }
    GameTouchComponent.prototype.onLoad = function () { };
    GameTouchComponent.prototype.getGameType = function () {
        return this._gameType;
    };
    GameTouchComponent.prototype.registerTouchEvents = function (e) {
        this._gameType = e;
        if (!this._isEventsRegistered) {
            this._nodeCardRoot = this.node.getChildByName("nodeCardRoot");
            if (this._nodeCardRoot) {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
                this._gameType == GameTypeEnums_1.MjGameType.Tile2Normal && cc.game.on("__ui_btn_touch_lock__", this._onBtnTouchLock, this);
                this._isEventsRegistered = true;
            }
        }
    };
    GameTouchComponent.prototype.onDestroy = function () {
        cc.game.off("__ui_btn_touch_lock__", this._onBtnTouchLock, this);
    };
    GameTouchComponent.prototype.unregisterTouchEvents = function () {
        if (this._isEventsRegistered) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
            cc.game.off("__ui_btn_touch_lock__", this._onBtnTouchLock, this);
            this._touchMap.clear();
            this._activeTouchId = null;
            this._closeTouchMove = false;
            this._isEventsRegistered = false;
        }
    };
    GameTouchComponent.prototype.convertToRootPos = function (e) {
        return this._nodeCardRoot.convertToNodeSpaceAR(e);
    };
    GameTouchComponent.prototype.onTouchStart = function (e) {
        var t = e.getID(), o = e.getLocation(), n = cc.v2(o.x, o.y), i = this.convertToRootPos(o);
        this._touchMap.set(t, {
            startPos: n,
            lastPos: n,
            isMoving: false
        });
        if (null == this._activeTouchId) {
            this._activeTouchId = t;
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.TouchStart,
                pos: i
            });
        }
    };
    GameTouchComponent.prototype.onTouchEnd = function (e) {
        var t, o, n = e.getID(), i = e.getLocation(), r = this.convertToRootPos(i);
        if (this._activeTouchId === n) {
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.TouchEnd,
                pos: r
            });
            this._touchMap.delete(n);
            this._activeTouchId = null;
            try {
                for (var c = __values(this._touchMap), p = c.next(); !p.done; p = c.next()) {
                    var f = __read(p.value, 2), d = f[0], h = f[1];
                    this._activeTouchId = d;
                    var y = this.convertToRootPos(h.lastPos);
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.TouchStart,
                        pos: y,
                        multiTouch: true
                    });
                    break;
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (o = c.return) && o.call(c);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        else
            this._touchMap.delete(n);
    };
    GameTouchComponent.prototype.isOpenTouchMove = function () {
        return true;
    };
    GameTouchComponent.prototype.onTouchMove = function (e) {
        if (!this._closeTouchMove && this.isOpenTouchMove()) {
            var t = e.getID(), o = e.getLocation(), n = this._touchMap.get(t);
            if (n) {
                var i = cc.v2(o.x - n.startPos.x, o.y - n.startPos.y);
                n.isMoving || Math.sqrt(i.x * i.x + i.y * i.y) > 10 && (n.isMoving = true);
                var r = n.lastPos;
                n.lastPos = cc.v2(o.x, o.y);
                this._touchMap.set(t, n);
                if (this._activeTouchId === t && n.isMoving) {
                    var a = this.convertToRootPos(o), l = cc.v2(o.x - r.x, o.y - r.y);
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.TouchMove,
                        pos: a,
                        delta: l
                    });
                }
            }
        }
        else
            this._closeTouchMove = true;
    };
    GameTouchComponent.prototype.onTouchCancel = function (e) {
        var t, o, n = e.getID(), i = e.getLocation(), r = this.convertToRootPos(i);
        if (this._activeTouchId === n) {
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.TouchCancel,
                pos: r
            });
            this._touchMap.delete(n);
            this._activeTouchId = null;
            try {
                for (var c = __values(this._touchMap), p = c.next(); !p.done; p = c.next()) {
                    var f = __read(p.value, 2), d = f[0], h = f[1];
                    this._activeTouchId = d;
                    var y = this.convertToRootPos(h.lastPos);
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.TouchStart,
                        pos: y,
                        multiTouch: true
                    });
                    break;
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (o = c.return) && o.call(c);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        else
            this._touchMap.delete(n);
    };
    GameTouchComponent.prototype._onBtnTouchLock = function () {
        if (null !== this._activeTouchId) {
            var e = this._touchMap.get(this._activeTouchId);
            if (e) {
                var t = this.convertToRootPos(e.lastPos);
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.TouchCancel,
                    pos: t
                });
            }
        }
        this._touchMap.clear();
        this._activeTouchId = null;
        this._closeTouchMove = false;
    };
    __decorate([
        mj.traitEvent("Gtc_isOpenTouchMove")
    ], GameTouchComponent.prototype, "isOpenTouchMove", null);
    GameTouchComponent = __decorate([
        ccclass
    ], GameTouchComponent);
    return GameTouchComponent;
}(cc.Component));
exports.GameTouchComponent = GameTouchComponent;

cc._RF.pop();
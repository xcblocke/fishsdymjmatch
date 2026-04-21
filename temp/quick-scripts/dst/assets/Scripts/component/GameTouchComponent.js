
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/component/GameTouchComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvbXBvbmVudC9HYW1lVG91Y2hDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDckUsMEVBQXNFO0FBQ3RFLHNFQUFxRTtBQUMvRCxJQUFBLEtBR0YsRUFBRSxDQUFDLFVBQVUsRUFGZixPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQ08sQ0FBQztBQUVsQjtJQUF3QyxzQ0FBWTtJQUFwRDtRQUFBLHFFQTJMQztRQTFMQyxtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixlQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0Qix5QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YscUJBQWUsR0FBRyxLQUFLLENBQUM7O0lBa0wxQixDQUFDO0lBakxDLG1DQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1gsd0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVB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QUMvQixDQUFDO0lBaEZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs2REFHcEM7SUE1R1Usa0JBQWtCO1FBRDlCLE9BQU87T0FDSyxrQkFBa0IsQ0EyTDlCO0lBQUQseUJBQUM7Q0EzTEQsQUEyTEMsQ0EzTHVDLEVBQUUsQ0FBQyxTQUFTLEdBMkxuRDtBQTNMWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEdhbWVUb3VjaENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIF9ub2RlQ2FyZFJvb3QgPSBudWxsO1xuICBfdG91Y2hNYXAgPSBuZXcgTWFwKCk7XG4gIF9hY3RpdmVUb3VjaElkID0gbnVsbDtcbiAgX2lzRXZlbnRzUmVnaXN0ZXJlZCA9IGZhbHNlO1xuICBfZ2FtZVR5cGUgPSBudWxsO1xuICBfdG91Y2hTdGFydFBvcyA9IG51bGw7XG4gIF9pc01vdmluZyA9IGZhbHNlO1xuICBfdG91Y2hUaW1lID0gMDtcbiAgX2Nsb3NlVG91Y2hNb3ZlID0gZmFsc2U7XG4gIG9uTG9hZCgpIHt9XG4gIGdldEdhbWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lVHlwZTtcbiAgfVxuICByZWdpc3RlclRvdWNoRXZlbnRzKGUpIHtcbiAgICB0aGlzLl9nYW1lVHlwZSA9IGU7XG4gICAgaWYgKCF0aGlzLl9pc0V2ZW50c1JlZ2lzdGVyZWQpIHtcbiAgICAgIHRoaXMuX25vZGVDYXJkUm9vdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVDYXJkUm9vdFwiKTtcbiAgICAgIGlmICh0aGlzLl9ub2RlQ2FyZFJvb3QpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoQ2FuY2VsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiBjYy5nYW1lLm9uKFwiX191aV9idG5fdG91Y2hfbG9ja19fXCIsIHRoaXMuX29uQnRuVG91Y2hMb2NrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5faXNFdmVudHNSZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIGNjLmdhbWUub2ZmKFwiX191aV9idG5fdG91Y2hfbG9ja19fXCIsIHRoaXMuX29uQnRuVG91Y2hMb2NrLCB0aGlzKTtcbiAgfVxuICB1bnJlZ2lzdGVyVG91Y2hFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX2lzRXZlbnRzUmVnaXN0ZXJlZCkge1xuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaENhbmNlbCwgdGhpcyk7XG4gICAgICBjYy5nYW1lLm9mZihcIl9fdWlfYnRuX3RvdWNoX2xvY2tfX1wiLCB0aGlzLl9vbkJ0blRvdWNoTG9jaywgdGhpcyk7XG4gICAgICB0aGlzLl90b3VjaE1hcC5jbGVhcigpO1xuICAgICAgdGhpcy5fYWN0aXZlVG91Y2hJZCA9IG51bGw7XG4gICAgICB0aGlzLl9jbG9zZVRvdWNoTW92ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNFdmVudHNSZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNvbnZlcnRUb1Jvb3RQb3MoZSkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlQ2FyZFJvb3QuY29udmVydFRvTm9kZVNwYWNlQVIoZSk7XG4gIH1cbiAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0SUQoKSxcbiAgICAgIG8gPSBlLmdldExvY2F0aW9uKCksXG4gICAgICBuID0gY2MudjIoby54LCBvLnkpLFxuICAgICAgaSA9IHRoaXMuY29udmVydFRvUm9vdFBvcyhvKTtcbiAgICB0aGlzLl90b3VjaE1hcC5zZXQodCwge1xuICAgICAgc3RhcnRQb3M6IG4sXG4gICAgICBsYXN0UG9zOiBuLFxuICAgICAgaXNNb3Zpbmc6IGZhbHNlXG4gICAgfSk7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5fYWN0aXZlVG91Y2hJZCkge1xuICAgICAgdGhpcy5fYWN0aXZlVG91Y2hJZCA9IHQ7XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRvdWNoU3RhcnQsXG4gICAgICAgIHBvczogaVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uVG91Y2hFbmQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBlLmdldElEKCksXG4gICAgICBpID0gZS5nZXRMb2NhdGlvbigpLFxuICAgICAgciA9IHRoaXMuY29udmVydFRvUm9vdFBvcyhpKTtcbiAgICBpZiAodGhpcy5fYWN0aXZlVG91Y2hJZCA9PT0gbikge1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub3VjaEVuZCxcbiAgICAgICAgcG9zOiByXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3RvdWNoTWFwLmRlbGV0ZShuKTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRvdWNoSWQgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHRoaXMuX3RvdWNoTWFwKSwgcCA9IGMubmV4dCgpOyAhcC5kb25lOyBwID0gYy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZiA9IF9fcmVhZChwLnZhbHVlLCAyKSxcbiAgICAgICAgICAgIGQgPSBmWzBdLFxuICAgICAgICAgICAgaCA9IGZbMV07XG4gICAgICAgICAgdGhpcy5fYWN0aXZlVG91Y2hJZCA9IGQ7XG4gICAgICAgICAgdmFyIHkgPSB0aGlzLmNvbnZlcnRUb1Jvb3RQb3MoaC5sYXN0UG9zKTtcbiAgICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub3VjaFN0YXJ0LFxuICAgICAgICAgICAgcG9zOiB5LFxuICAgICAgICAgICAgbXVsdGlUb3VjaDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLl90b3VjaE1hcC5kZWxldGUobik7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHdGNfaXNPcGVuVG91Y2hNb3ZlXCIpXG4gIGlzT3BlblRvdWNoTW92ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvblRvdWNoTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLl9jbG9zZVRvdWNoTW92ZSAmJiB0aGlzLmlzT3BlblRvdWNoTW92ZSgpKSB7XG4gICAgICB2YXIgdCA9IGUuZ2V0SUQoKSxcbiAgICAgICAgbyA9IGUuZ2V0TG9jYXRpb24oKSxcbiAgICAgICAgbiA9IHRoaXMuX3RvdWNoTWFwLmdldCh0KTtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIHZhciBpID0gY2MudjIoby54IC0gbi5zdGFydFBvcy54LCBvLnkgLSBuLnN0YXJ0UG9zLnkpO1xuICAgICAgICBuLmlzTW92aW5nIHx8IE1hdGguc3FydChpLnggKiBpLnggKyBpLnkgKiBpLnkpID4gMTAgJiYgKG4uaXNNb3ZpbmcgPSB0cnVlKTtcbiAgICAgICAgdmFyIHIgPSBuLmxhc3RQb3M7XG4gICAgICAgIG4ubGFzdFBvcyA9IGNjLnYyKG8ueCwgby55KTtcbiAgICAgICAgdGhpcy5fdG91Y2hNYXAuc2V0KHQsIG4pO1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVG91Y2hJZCA9PT0gdCAmJiBuLmlzTW92aW5nKSB7XG4gICAgICAgICAgdmFyIGEgPSB0aGlzLmNvbnZlcnRUb1Jvb3RQb3MobyksXG4gICAgICAgICAgICBsID0gY2MudjIoby54IC0gci54LCBvLnkgLSByLnkpO1xuICAgICAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRvdWNoTW92ZSxcbiAgICAgICAgICAgIHBvczogYSxcbiAgICAgICAgICAgIGRlbHRhOiBsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5fY2xvc2VUb3VjaE1vdmUgPSB0cnVlO1xuICB9XG4gIG9uVG91Y2hDYW5jZWwoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBlLmdldElEKCksXG4gICAgICBpID0gZS5nZXRMb2NhdGlvbigpLFxuICAgICAgciA9IHRoaXMuY29udmVydFRvUm9vdFBvcyhpKTtcbiAgICBpZiAodGhpcy5fYWN0aXZlVG91Y2hJZCA9PT0gbikge1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub3VjaENhbmNlbCxcbiAgICAgICAgcG9zOiByXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3RvdWNoTWFwLmRlbGV0ZShuKTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRvdWNoSWQgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHRoaXMuX3RvdWNoTWFwKSwgcCA9IGMubmV4dCgpOyAhcC5kb25lOyBwID0gYy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZiA9IF9fcmVhZChwLnZhbHVlLCAyKSxcbiAgICAgICAgICAgIGQgPSBmWzBdLFxuICAgICAgICAgICAgaCA9IGZbMV07XG4gICAgICAgICAgdGhpcy5fYWN0aXZlVG91Y2hJZCA9IGQ7XG4gICAgICAgICAgdmFyIHkgPSB0aGlzLmNvbnZlcnRUb1Jvb3RQb3MoaC5sYXN0UG9zKTtcbiAgICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub3VjaFN0YXJ0LFxuICAgICAgICAgICAgcG9zOiB5LFxuICAgICAgICAgICAgbXVsdGlUb3VjaDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLl90b3VjaE1hcC5kZWxldGUobik7XG4gIH1cbiAgX29uQnRuVG91Y2hMb2NrKCkge1xuICAgIGlmIChudWxsICE9PSB0aGlzLl9hY3RpdmVUb3VjaElkKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX3RvdWNoTWFwLmdldCh0aGlzLl9hY3RpdmVUb3VjaElkKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5jb252ZXJ0VG9Sb290UG9zKGUubGFzdFBvcyk7XG4gICAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub3VjaENhbmNlbCxcbiAgICAgICAgICBwb3M6IHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3RvdWNoTWFwLmNsZWFyKCk7XG4gICAgdGhpcy5fYWN0aXZlVG91Y2hJZCA9IG51bGw7XG4gICAgdGhpcy5fY2xvc2VUb3VjaE1vdmUgPSBmYWxzZTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2MoveInSlotAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8f6bMGJ9BA9pe7ms20CcKX', 'Tile2MoveInSlotAni');
// Scripts/fsm/ani/Tile2MoveInSlotAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveInSlotAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var Tile2MoveInSlotAni = /** @class */ (function (_super) {
    __extends(Tile2MoveInSlotAni, _super);
    function Tile2MoveInSlotAni(t, o, n, i, r) {
        if (n === void 0) { n = 0; }
        if (i === void 0) { i = 0.2; }
        if (r === void 0) { r = "cubicIn"; }
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._defaultDelay = null;
        _this._defaultDuration = null;
        _this._defaultEasing = null;
        _this._node = t;
        _this._baseTileNode = o;
        _this._defaultDelay = n;
        _this._defaultDuration = i;
        _this._defaultEasing = r;
        return _this;
    }
    Tile2MoveInSlotAni.prototype.onPlay = function (e) {
        var t, o, n, i = this;
        if (cc.isValid(this._node) && null != e) {
            var r = null !== (t = e.delay) && void 0 !== t ? t : this._defaultDelay, a = null !== (o = e.duration) && void 0 !== o ? o : this._defaultDuration, l = null !== (n = e.easing) && void 0 !== n ? n : this._defaultEasing, s = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), c = this._getTargetPos(e.index);
            this._reparent(this._node, s);
            var u = cc.tween(this._node);
            r > 0 && u.delay(r);
            u.to(a, {
                position: c
            }, l ? {
                easing: l
            } : void 0).call(function () {
                i.finish();
            }).start();
            this._currentTween = u;
        }
        else
            this.finish();
    };
    Tile2MoveInSlotAni.prototype.reset = function () {
        var e = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), t = this._baseTileNode.tileObject.getIndexInSlotBar();
        if (t >= 0) {
            var o = this._getTargetPos(t);
            this._node.parent = e;
            this._node.position = o;
            this._node.scale = this._baseTileNode.tileObject.getScaleInSlotBar();
        }
    };
    Tile2MoveInSlotAni.prototype.finish = function () {
        _super.prototype.finish.call(this);
    };
    Tile2MoveInSlotAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2MoveInSlotAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2MoveInSlotAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2MoveInSlotAni.prototype._getTargetPos = function (e) {
        var t = this._baseTileNode.context.gameView.slotBarView;
        return t ? t.getPosition(this._baseTileNode, e) : null;
    };
    return Tile2MoveInSlotAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2MoveInSlotAni = Tile2MoveInSlotAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJNb3ZlSW5TbG90QW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FO0lBQXdDLHNDQUFrQjtJQU14RCw0QkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUssRUFBRSxDQUFPLEVBQUUsQ0FBYTtRQUE3QixrQkFBQSxFQUFBLEtBQUs7UUFBRSxrQkFBQSxFQUFBLE9BQU87UUFBRSxrQkFBQSxFQUFBLGFBQWE7UUFBL0MsWUFDRSxpQkFBTyxTQU1SO1FBWkQsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUdwQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQzFCLENBQUM7SUFDRCxtQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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QyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN4RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsQ0FsRXVDLHVDQUFrQixHQWtFekQ7QUFsRVksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZTJBbmlBY3Rpb25CYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9UaWxlMkFuaUFjdGlvbkJhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyTW92ZUluU2xvdEFuaSBleHRlbmRzIFRpbGUyQW5pQWN0aW9uQmFzZSB7XG4gIF9ub2RlID0gbnVsbDtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIF9kZWZhdWx0RGVsYXkgPSBudWxsO1xuICBfZGVmYXVsdER1cmF0aW9uID0gbnVsbDtcbiAgX2RlZmF1bHRFYXNpbmcgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvLCBuID0gMCwgaSA9IDAuMiwgciA9IFwiY3ViaWNJblwiKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ub2RlID0gdDtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSBvO1xuICAgIHRoaXMuX2RlZmF1bHREZWxheSA9IG47XG4gICAgdGhpcy5fZGVmYXVsdER1cmF0aW9uID0gaTtcbiAgICB0aGlzLl9kZWZhdWx0RWFzaW5nID0gcjtcbiAgfVxuICBvblBsYXkoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSAmJiBudWxsICE9IGUpIHtcbiAgICAgIHZhciByID0gbnVsbCAhPT0gKHQgPSBlLmRlbGF5KSAmJiB2b2lkIDAgIT09IHQgPyB0IDogdGhpcy5fZGVmYXVsdERlbGF5LFxuICAgICAgICBhID0gbnVsbCAhPT0gKG8gPSBlLmR1cmF0aW9uKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogdGhpcy5fZGVmYXVsdER1cmF0aW9uLFxuICAgICAgICBsID0gbnVsbCAhPT0gKG4gPSBlLmVhc2luZykgJiYgdm9pZCAwICE9PSBuID8gbiA6IHRoaXMuX2RlZmF1bHRFYXNpbmcsXG4gICAgICAgIHMgPSB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5zbG90QmFyVmlldy5nZXROb2RlTGF5ZXIoKSxcbiAgICAgICAgYyA9IHRoaXMuX2dldFRhcmdldFBvcyhlLmluZGV4KTtcbiAgICAgIHRoaXMuX3JlcGFyZW50KHRoaXMuX25vZGUsIHMpO1xuICAgICAgdmFyIHUgPSBjYy50d2Vlbih0aGlzLl9ub2RlKTtcbiAgICAgIHIgPiAwICYmIHUuZGVsYXkocik7XG4gICAgICB1LnRvKGEsIHtcbiAgICAgICAgcG9zaXRpb246IGNcbiAgICAgIH0sIGwgPyB7XG4gICAgICAgIGVhc2luZzogbFxuICAgICAgfSA6IHZvaWQgMCkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkuZmluaXNoKCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5jb250ZXh0LmdhbWVWaWV3LnNsb3RCYXJWaWV3LmdldE5vZGVMYXllcigpLFxuICAgICAgdCA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldEluZGV4SW5TbG90QmFyKCk7XG4gICAgaWYgKHQgPj0gMCkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9nZXRUYXJnZXRQb3ModCk7XG4gICAgICB0aGlzLl9ub2RlLnBhcmVudCA9IGU7XG4gICAgICB0aGlzLl9ub2RlLnBvc2l0aW9uID0gbztcbiAgICAgIHRoaXMuX25vZGUuc2NhbGUgPSB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdC5nZXRTY2FsZUluU2xvdEJhcigpO1xuICAgIH1cbiAgfVxuICBmaW5pc2goKSB7XG4gICAgc3VwZXIuZmluaXNoLmNhbGwodGhpcyk7XG4gIH1cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5fc3RvcFR3ZWVuKCk7XG4gIH1cbiAgb25JbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5fc3RvcFR3ZWVuKCk7XG4gIH1cbiAgX3N0b3BUd2VlbigpIHtcbiAgICB2YXIgZTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2N1cnJlbnRUd2VlbikgfHwgdm9pZCAwID09PSBlIHx8IGUuc3RvcCgpO1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IHZvaWQgMDtcbiAgfVxuICBfZ2V0VGFyZ2V0UG9zKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5jb250ZXh0LmdhbWVWaWV3LnNsb3RCYXJWaWV3O1xuICAgIHJldHVybiB0ID8gdC5nZXRQb3NpdGlvbih0aGlzLl9iYXNlVGlsZU5vZGUsIGUpIDogbnVsbDtcbiAgfVxufSJdfQ==
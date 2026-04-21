
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2FlyToSlotAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef5ffueuLZMz6IDWqpwdh/V', 'Tile2FlyToSlotAni');
// Scripts/fsm/ani/Tile2FlyToSlotAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2FlyToSlotAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2FlyToSlotAni = /** @class */ (function (_super) {
    __extends(Tile2FlyToSlotAni, _super);
    function Tile2FlyToSlotAni(t, o, n, i) {
        if (n === void 0) { n = 0.287; }
        if (i === void 0) { i = "quadInOut"; }
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._defaultDuration = null;
        _this._defaultEasing = null;
        _this._node = t;
        _this._baseTileNode = o;
        _this._defaultDuration = n;
        _this._defaultEasing = i;
        return _this;
    }
    Tile2FlyToSlotAni.prototype.onPlay = function () {
        var e = this;
        if (cc.isValid(this._node)) {
            var t = this._baseTileNode.tileObject.getScaleInSlotBar(), o = (this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), this._baseTileNode.context.gameView.nodeDragCardRoot), n = this._getTargetWorldPos(), i = o.convertToNodeSpaceAR(n);
            this._reparent(this._node, o);
            var r = t - 0.03;
            this._currentTween = cc.tween(this._node).parallel(cc.tween().to(0.287, {
                position: i
            }, {
                easing: TweenEasing_1.easeCard4
            }), cc.tween().delay(0.148).to(0.139, {
                scale: r
            }, {
                easing: TweenEasing_1.easeCard5
            }).to(0.096, {
                scale: t
            }, {
                easing: TweenEasing_1.easeCard5
            })).call(function () {
                e.reset();
                e.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2FlyToSlotAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2FlyToSlotAni.prototype.reset = function () {
        var e = this._baseTileNode.tileObject.getScaleInSlotBar(), t = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), o = (this._baseTileNode.context.gameView.nodeDragCardRoot, this._getTargetWorldPos()), n = t.convertToNodeSpaceAR(o);
        this._node.parent = t;
        this._node.scale = e;
        this._node.position = n;
    };
    Tile2FlyToSlotAni.prototype.onInterrupt = function () {
        this._stopTween();
        cc.isValid(this._node) && this.reset();
    };
    Tile2FlyToSlotAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2FlyToSlotAni.prototype._getTargetWorldPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.context.gameView.slotBarView;
        if (!t)
            return null;
        var o = e.getIndexInSlotBar();
        return t.getWorldPosition(this._baseTileNode, o);
    };
    return Tile2FlyToSlotAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2FlyToSlotAni = Tile2FlyToSlotAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJGbHlUb1Nsb3RBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBbUU7QUFDbkUsc0RBQThEO0FBQzlEO0lBQXVDLHFDQUFrQjtJQUt2RCwyQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQVMsRUFBRSxDQUFlO1FBQTFCLGtCQUFBLEVBQUEsU0FBUztRQUFFLGtCQUFBLEVBQUEsZUFBZTtRQUE1QyxZQUNFLGlCQUFPLFNBS1I7UUFWRCxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3BCLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFDMUIsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEVBQ3ZELENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQzFILENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFB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QUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDSCx3QkFBQztBQUFELENBbkVBLEFBbUVDLENBbkVzQyx1Q0FBa0IsR0FtRXhEO0FBbkVZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGUyQW5pQWN0aW9uQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvVGlsZTJBbmlBY3Rpb25CYXNlJztcbmltcG9ydCB7IGVhc2VDYXJkNCwgZWFzZUNhcmQ1IH0gZnJvbSAnLi4vLi4vYmFzZS9Ud2VlbkVhc2luZyc7XG5leHBvcnQgY2xhc3MgVGlsZTJGbHlUb1Nsb3RBbmkgZXh0ZW5kcyBUaWxlMkFuaUFjdGlvbkJhc2Uge1xuICBfbm9kZSA9IG51bGw7XG4gIF9iYXNlVGlsZU5vZGUgPSBudWxsO1xuICBfZGVmYXVsdER1cmF0aW9uID0gbnVsbDtcbiAgX2RlZmF1bHRFYXNpbmcgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvLCBuID0gMC4yODcsIGkgPSBcInF1YWRJbk91dFwiKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ub2RlID0gdDtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSBvO1xuICAgIHRoaXMuX2RlZmF1bHREdXJhdGlvbiA9IG47XG4gICAgdGhpcy5fZGVmYXVsdEVhc2luZyA9IGk7XG4gIH1cbiAgb25QbGF5KCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdC5nZXRTY2FsZUluU2xvdEJhcigpLFxuICAgICAgICBvID0gKHRoaXMuX2Jhc2VUaWxlTm9kZS5jb250ZXh0LmdhbWVWaWV3LnNsb3RCYXJWaWV3LmdldE5vZGVMYXllcigpLCB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5ub2RlRHJhZ0NhcmRSb290KSxcbiAgICAgICAgbiA9IHRoaXMuX2dldFRhcmdldFdvcmxkUG9zKCksXG4gICAgICAgIGkgPSBvLmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgICAgdGhpcy5fcmVwYXJlbnQodGhpcy5fbm9kZSwgbyk7XG4gICAgICB2YXIgciA9IHQgLSAwLjAzO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gY2MudHdlZW4odGhpcy5fbm9kZSkucGFyYWxsZWwoY2MudHdlZW4oKS50bygwLjI4Nywge1xuICAgICAgICBwb3NpdGlvbjogaVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGVhc2VDYXJkNFxuICAgICAgfSksIGNjLnR3ZWVuKCkuZGVsYXkoMC4xNDgpLnRvKDAuMTM5LCB7XG4gICAgICAgIHNjYWxlOiByXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogZWFzZUNhcmQ1XG4gICAgICB9KS50bygwLjA5Niwge1xuICAgICAgICBzY2FsZTogdFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGVhc2VDYXJkNVxuICAgICAgfSkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnJlc2V0KCk7XG4gICAgICAgIGUuZmluaXNoKCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaCgpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuX3N0b3BUd2VlbigpO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHZhciBlID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuZ2V0U2NhbGVJblNsb3RCYXIoKSxcbiAgICAgIHQgPSB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5zbG90QmFyVmlldy5nZXROb2RlTGF5ZXIoKSxcbiAgICAgIG8gPSAodGhpcy5fYmFzZVRpbGVOb2RlLmNvbnRleHQuZ2FtZVZpZXcubm9kZURyYWdDYXJkUm9vdCwgdGhpcy5fZ2V0VGFyZ2V0V29ybGRQb3MoKSksXG4gICAgICBuID0gdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICB0aGlzLl9ub2RlLnBhcmVudCA9IHQ7XG4gICAgdGhpcy5fbm9kZS5zY2FsZSA9IGU7XG4gICAgdGhpcy5fbm9kZS5wb3NpdGlvbiA9IG47XG4gIH1cbiAgb25JbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5fc3RvcFR3ZWVuKCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSAmJiB0aGlzLnJlc2V0KCk7XG4gIH1cbiAgX3N0b3BUd2VlbigpIHtcbiAgICB2YXIgZTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2N1cnJlbnRUd2VlbikgfHwgdm9pZCAwID09PSBlIHx8IGUuc3RvcCgpO1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IHZvaWQgMDtcbiAgfVxuICBfZ2V0VGFyZ2V0V29ybGRQb3MoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdCxcbiAgICAgIHQgPSB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5zbG90QmFyVmlldztcbiAgICBpZiAoIXQpIHJldHVybiBudWxsO1xuICAgIHZhciBvID0gZS5nZXRJbmRleEluU2xvdEJhcigpO1xuICAgIHJldHVybiB0LmdldFdvcmxkUG9zaXRpb24odGhpcy5fYmFzZVRpbGVOb2RlLCBvKTtcbiAgfVxufSJdfQ==
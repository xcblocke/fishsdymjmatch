
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2MoveBackAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1677dZpXfFIybobRbeAM5GT', 'Tile2MoveBackAni');
// Scripts/fsm/ani/Tile2MoveBackAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveBackAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var Tile2MoveBackAni = /** @class */ (function (_super) {
    __extends(Tile2MoveBackAni, _super);
    function Tile2MoveBackAni(t, o, n, i) {
        if (n === void 0) { n = 0.3; }
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
    Tile2MoveBackAni.prototype.onPlay = function (e) {
        var t, o, n = this;
        if (cc.isValid(this._node)) {
            var i = this._getTargetPos();
            if (i) {
                var r = null !== (t = null == e ? void 0 : e.duration) && void 0 !== t ? t : this._defaultDuration, a = null !== (o = null == e ? void 0 : e.easing) && void 0 !== o ? o : this._defaultEasing;
                this._node.zIndex = this._baseTileNode.tileObject.gridZIndex;
                this._currentTween = cc.tween(this._node).to(r, {
                    position: i,
                    scale: 1,
                    opacity: 255
                }, a ? {
                    easing: a
                } : void 0).call(function () {
                    return n.finish();
                }).start();
            }
            else
                this.finish();
        }
        else
            this.finish();
    };
    Tile2MoveBackAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2MoveBackAni.prototype.onInterrupt = function () {
        this._stopTween();
        if (cc.isValid(this._node)) {
            var e = this._getTargetPos();
            e && (this._node.position = e);
            this._node.scale = 1;
        }
    };
    Tile2MoveBackAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2MoveBackAni.prototype._getTargetPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.layerNode;
        if (!cc.isValid(t) || !cc.isValid(this._node.parent))
            return null;
        var o = e.getPosition(), n = t.convertToWorldSpaceAR(o);
        return this._node.parent.convertToNodeSpaceAR(n);
    };
    return Tile2MoveBackAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2MoveBackAni = Tile2MoveBackAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJNb3ZlQmFja0FuaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRTtBQUNuRTtJQUFzQyxvQ0FBa0I7SUFLdEQsMEJBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFPLEVBQUUsQ0FBZTtRQUF4QixrQkFBQSxFQUFBLE9BQU87UUFBRSxrQkFBQSxFQUFBLGVBQWU7UUFBMUMsWUFDRSxpQkFBTyxTQUtSO1FBVkQsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUdwQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQzFCLENBQUM7SUFDRCxpQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFDaEcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7Z0JBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtvQkFDOUMsUUFBUSxFQUFFLENBQUM7b0JBQ1gsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNMLE1BQU0sRUFBRSxDQUFDO2lCQUNWLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdEI7O1lBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFDRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsd0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0ExREEsQUEwREMsQ0ExRHFDLHVDQUFrQixHQTBEdkQ7QUExRFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZTJBbmlBY3Rpb25CYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9UaWxlMkFuaUFjdGlvbkJhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyTW92ZUJhY2tBbmkgZXh0ZW5kcyBUaWxlMkFuaUFjdGlvbkJhc2Uge1xuICBfbm9kZSA9IG51bGw7XG4gIF9iYXNlVGlsZU5vZGUgPSBudWxsO1xuICBfZGVmYXVsdER1cmF0aW9uID0gbnVsbDtcbiAgX2RlZmF1bHRFYXNpbmcgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvLCBuID0gMC4zLCBpID0gXCJxdWFkSW5PdXRcIikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fbm9kZSA9IHQ7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlID0gbztcbiAgICB0aGlzLl9kZWZhdWx0RHVyYXRpb24gPSBuO1xuICAgIHRoaXMuX2RlZmF1bHRFYXNpbmcgPSBpO1xuICB9XG4gIG9uUGxheShlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHZhciBpID0gdGhpcy5fZ2V0VGFyZ2V0UG9zKCk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB2YXIgciA9IG51bGwgIT09ICh0ID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5kdXJhdGlvbikgJiYgdm9pZCAwICE9PSB0ID8gdCA6IHRoaXMuX2RlZmF1bHREdXJhdGlvbixcbiAgICAgICAgICBhID0gbnVsbCAhPT0gKG8gPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmVhc2luZykgJiYgdm9pZCAwICE9PSBvID8gbyA6IHRoaXMuX2RlZmF1bHRFYXNpbmc7XG4gICAgICAgIHRoaXMuX25vZGUuekluZGV4ID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuZ3JpZFpJbmRleDtcbiAgICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gY2MudHdlZW4odGhpcy5fbm9kZSkudG8ociwge1xuICAgICAgICAgIHBvc2l0aW9uOiBpLFxuICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCBhID8ge1xuICAgICAgICAgIGVhc2luZzogYVxuICAgICAgICB9IDogdm9pZCAwKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbi5maW5pc2goKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB0aGlzLmZpbmlzaCgpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaCgpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuX3N0b3BUd2VlbigpO1xuICB9XG4gIG9uSW50ZXJydXB0KCkge1xuICAgIHRoaXMuX3N0b3BUd2VlbigpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2dldFRhcmdldFBvcygpO1xuICAgICAgZSAmJiAodGhpcy5fbm9kZS5wb3NpdGlvbiA9IGUpO1xuICAgICAgdGhpcy5fbm9kZS5zY2FsZSA9IDE7XG4gICAgfVxuICB9XG4gIF9zdG9wVHdlZW4oKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9jdXJyZW50VHdlZW4pIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnN0b3AoKTtcbiAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gIH1cbiAgX2dldFRhcmdldFBvcygpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LFxuICAgICAgdCA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5sYXllck5vZGU7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHQpIHx8ICFjYy5pc1ZhbGlkKHRoaXMuX25vZGUucGFyZW50KSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG8gPSBlLmdldFBvc2l0aW9uKCksXG4gICAgICBuID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobyk7XG4gICAgcmV0dXJuIHRoaXMuX25vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICB9XG59Il19
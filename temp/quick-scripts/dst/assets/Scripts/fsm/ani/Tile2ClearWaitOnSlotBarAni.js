
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2ClearWaitOnSlotBarAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a15bcJizc1E6LqUMZu4O1/k', 'Tile2ClearWaitOnSlotBarAni');
// Scripts/fsm/ani/Tile2ClearWaitOnSlotBarAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearWaitOnSlotBarAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var Tile2ClearWaitOnSlotBarAni = /** @class */ (function (_super) {
    __extends(Tile2ClearWaitOnSlotBarAni, _super);
    function Tile2ClearWaitOnSlotBarAni(t, o) {
        var _this = _super.call(this) || this;
        _this._cancelled = false;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearWaitOnSlotBarAni.prototype.onPlay = function () {
        var e = this;
        this._cancelled = false;
        if (cc.isValid(this._node)) {
            this._node.position.z;
            var t = this._baseTileNode.context.gameView.nodeDragCardRoot;
            this._reparent(this._node, t);
            var o = this._baseTileNode.tileObject.getScaleInSlotBar();
            this._tweenMove = cc.tween(this._node).to(0.1, {
                scale: o,
                opacity: 255
            }, {
                easing: "quadOut"
            }).call(function () {
                e.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2ClearWaitOnSlotBarAni.prototype.onCancel = function () {
        this._cancelled = true;
        this._stopTweens();
    };
    Tile2ClearWaitOnSlotBarAni.prototype.onInterrupt = function () {
        this._cancelled = true;
        this._stopTweens();
    };
    Tile2ClearWaitOnSlotBarAni.prototype._stopTweens = function () {
        var e;
        null === (e = this._tweenMove) || void 0 === e || e.stop();
        this._tweenMove = void 0;
    };
    Tile2ClearWaitOnSlotBarAni.prototype._getTargetWorldPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.context.gameView.slotBarView;
        if (!t)
            return null;
        var o = e.getIndexInSlotBar();
        return t.getWorldPosition(this._baseTileNode, o);
    };
    return Tile2ClearWaitOnSlotBarAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearWaitOnSlotBarAni = Tile2ClearWaitOnSlotBarAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJDbGVhcldhaXRPblNsb3RCYXJBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBbUU7QUFDbkU7SUFBZ0QsOENBQWtCO0lBSWhFLG9DQUFZLENBQUMsRUFBRSxDQUFDO1FBQWhCLFlBQ0UsaUJBQU8sU0FHUjtRQVBELGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUduQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDOztJQUN6QixDQUFDO0lBQ0QsMkNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdDLEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxHQUFHO2FBQ2IsRUFBRTtnQkFDRCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNOLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7O1lBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsdURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQS9DQSxBQStDQyxDQS9DK0MsdUNBQWtCLEdBK0NqRTtBQS9DWSxnRUFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaWxlMkFuaUFjdGlvbkJhc2UgfSBmcm9tICcuLi8uLi9iYXNlL1RpbGUyQW5pQWN0aW9uQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJDbGVhcldhaXRPblNsb3RCYXJBbmkgZXh0ZW5kcyBUaWxlMkFuaUFjdGlvbkJhc2Uge1xuICBfY2FuY2VsbGVkID0gZmFsc2U7XG4gIF9ub2RlID0gbnVsbDtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQsIG8pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX25vZGUgPSB0O1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgb25QbGF5KCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLl9jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSkge1xuICAgICAgdGhpcy5fbm9kZS5wb3NpdGlvbi56O1xuICAgICAgdmFyIHQgPSB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5ub2RlRHJhZ0NhcmRSb290O1xuICAgICAgdGhpcy5fcmVwYXJlbnQodGhpcy5fbm9kZSwgdCk7XG4gICAgICB2YXIgbyA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFNjYWxlSW5TbG90QmFyKCk7XG4gICAgICB0aGlzLl90d2Vlbk1vdmUgPSBjYy50d2Vlbih0aGlzLl9ub2RlKS50bygwLjEsIHtcbiAgICAgICAgc2NhbGU6IG8sXG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5maW5pc2goKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKCk7XG4gIH1cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdG9wVHdlZW5zKCk7XG4gIH1cbiAgb25JbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdG9wVHdlZW5zKCk7XG4gIH1cbiAgX3N0b3BUd2VlbnMoKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl90d2Vlbk1vdmUpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnN0b3AoKTtcbiAgICB0aGlzLl90d2Vlbk1vdmUgPSB2b2lkIDA7XG4gIH1cbiAgX2dldFRhcmdldFdvcmxkUG9zKCkge1xuICAgIHZhciBlID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QsXG4gICAgICB0ID0gdGhpcy5fYmFzZVRpbGVOb2RlLmNvbnRleHQuZ2FtZVZpZXcuc2xvdEJhclZpZXc7XG4gICAgaWYgKCF0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbyA9IGUuZ2V0SW5kZXhJblNsb3RCYXIoKTtcbiAgICByZXR1cm4gdC5nZXRXb3JsZFBvc2l0aW9uKHRoaXMuX2Jhc2VUaWxlTm9kZSwgbyk7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2ClearFromSlotBarToPosAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ccdf9CtVNK4oYxOjRkVsZn', 'Tile2ClearFromSlotBarToPosAni');
// Scripts/fsm/ani/Tile2ClearFromSlotBarToPosAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearFromSlotBarToPosAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2ClearFromSlotBarToPosAni = /** @class */ (function (_super) {
    __extends(Tile2ClearFromSlotBarToPosAni, _super);
    function Tile2ClearFromSlotBarToPosAni(t, o) {
        var _this = _super.call(this) || this;
        _this._cancelled = false;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearFromSlotBarToPosAni.prototype.onPlay = function (e) {
        var t = this;
        this._cancelled = false;
        if (cc.isValid(this._node)) {
            var o = this._node.position, n = (cc.v3(o.x, o.y, o.z), this._baseTileNode.context.gameView.nodeDragCardRoot);
            this._currentTween = cc.tween(this._node).call(function () {
                t._reparent(t._node, n);
            }).to(0.05, {
                scale: 1,
                opacity: 255
            }, {
                easing: "quadOut"
            }).to(0.18, {
                position: cc.v3(e.targetLocalPos.x, e.targetLocalPos.y, 0)
            }, {
                easing: TweenEasing_1.easeCard
            }).call(function () {
                return t.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2ClearFromSlotBarToPosAni.prototype.onCancel = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromSlotBarToPosAni.prototype.onInterrupt = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromSlotBarToPosAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    return Tile2ClearFromSlotBarToPosAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearFromSlotBarToPosAni = Tile2ClearFromSlotBarToPosAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJDbGVhckZyb21TbG90QmFyVG9Qb3NBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBbUU7QUFDbkUsc0RBQWtEO0FBQ2xEO0lBQW1ELGlEQUFrQjtJQUluRSx1Q0FBWSxDQUFDLEVBQUUsQ0FBQztRQUFoQixZQUNFLGlCQUFPLFNBR1I7UUFQRCxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFHbkIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzs7SUFDekIsQ0FBQztJQUNELDhDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDekIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM3QyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDVixLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsR0FBRzthQUNiLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLFNBQVM7YUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNELEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLHNCQUFRO2FBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjs7WUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELGdEQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELG1EQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGtEQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxvQ0FBQztBQUFELENBNUNBLEFBNENDLENBNUNrRCx1Q0FBa0IsR0E0Q3BFO0FBNUNZLHNFQUE2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGUyQW5pQWN0aW9uQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvVGlsZTJBbmlBY3Rpb25CYXNlJztcbmltcG9ydCB7IGVhc2VDYXJkIH0gZnJvbSAnLi4vLi4vYmFzZS9Ud2VlbkVhc2luZyc7XG5leHBvcnQgY2xhc3MgVGlsZTJDbGVhckZyb21TbG90QmFyVG9Qb3NBbmkgZXh0ZW5kcyBUaWxlMkFuaUFjdGlvbkJhc2Uge1xuICBfY2FuY2VsbGVkID0gZmFsc2U7XG4gIF9ub2RlID0gbnVsbDtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQsIG8pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX25vZGUgPSB0O1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgb25QbGF5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fbm9kZS5wb3NpdGlvbixcbiAgICAgICAgbiA9IChjYy52MyhvLngsIG8ueSwgby56KSwgdGhpcy5fYmFzZVRpbGVOb2RlLmNvbnRleHQuZ2FtZVZpZXcubm9kZURyYWdDYXJkUm9vdCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSBjYy50d2Vlbih0aGlzLl9ub2RlKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5fcmVwYXJlbnQodC5fbm9kZSwgbik7XG4gICAgICB9KS50bygwLjA1LCB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkudG8oMC4xOCwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMoZS50YXJnZXRMb2NhbFBvcy54LCBlLnRhcmdldExvY2FsUG9zLnksIDApXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogZWFzZUNhcmRcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdC5maW5pc2goKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKCk7XG4gIH1cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdG9wVHdlZW4oKTtcbiAgfVxuICBvbkludGVycnVwdCgpIHtcbiAgICB0aGlzLl9jYW5jZWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N0b3BUd2VlbigpO1xuICB9XG4gIF9zdG9wVHdlZW4oKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9jdXJyZW50VHdlZW4pIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnN0b3AoKTtcbiAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gIH1cbn0iXX0=
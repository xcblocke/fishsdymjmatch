
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2ClearFromBoardToPosAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f4c66/jCpKeYPQYkKa60bw', 'Tile2ClearFromBoardToPosAni');
// Scripts/fsm/ani/Tile2ClearFromBoardToPosAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearFromBoardToPosAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2ClearFromBoardToPosAni = /** @class */ (function (_super) {
    __extends(Tile2ClearFromBoardToPosAni, _super);
    function Tile2ClearFromBoardToPosAni(t, o) {
        var _this = _super.call(this) || this;
        _this._cancelled = false;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearFromBoardToPosAni.prototype.onPlay = function (e) {
        var t = this;
        this._cancelled = false;
        if (cc.isValid(this._node)) {
            var o = this._baseTileNode.context.gameView.nodeDragCardRoot;
            this._reparent(this._node, o);
            var n = this._node.position, i = e.isRight ? 24 : -24, r = cc.v3(n.x + i, n.y + 24, n.z);
            this._currentTween = cc.tween(this._node).to(0.05, {
                position: r
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
    Tile2ClearFromBoardToPosAni.prototype.onCancel = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromBoardToPosAni.prototype.onInterrupt = function () {
        this._cancelled = true;
        this._stopTween();
    };
    Tile2ClearFromBoardToPosAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    return Tile2ClearFromBoardToPosAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearFromBoardToPosAni = Tile2ClearFromBoardToPosAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJDbGVhckZyb21Cb2FyZFRvUG9zQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLHNEQUFrRDtBQUNsRDtJQUFpRCwrQ0FBa0I7SUFJakUscUNBQVksQ0FBQyxFQUFFLENBQUM7UUFBaEIsWUFDRSxpQkFBTyxTQUdSO1FBUEQsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBR25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7O0lBQ3pCLENBQUM7SUFDRCw0Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDekIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3hCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pELFFBQVEsRUFBRSxDQUFDO2FBQ1osRUFBRTtnQkFDRCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDVixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0QsRUFBRTtnQkFDRCxNQUFNLEVBQUUsc0JBQVE7YUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNaOztZQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsaURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsZ0RBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsQ0E1Q2dELHVDQUFrQixHQTRDbEU7QUE1Q1ksa0VBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZTJBbmlBY3Rpb25CYXNlIH0gZnJvbSAnLi4vLi4vYmFzZS9UaWxlMkFuaUFjdGlvbkJhc2UnO1xuaW1wb3J0IHsgZWFzZUNhcmQgfSBmcm9tICcuLi8uLi9iYXNlL1R3ZWVuRWFzaW5nJztcbmV4cG9ydCBjbGFzcyBUaWxlMkNsZWFyRnJvbUJvYXJkVG9Qb3NBbmkgZXh0ZW5kcyBUaWxlMkFuaUFjdGlvbkJhc2Uge1xuICBfY2FuY2VsbGVkID0gZmFsc2U7XG4gIF9ub2RlID0gbnVsbDtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQsIG8pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX25vZGUgPSB0O1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgb25QbGF5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fYmFzZVRpbGVOb2RlLmNvbnRleHQuZ2FtZVZpZXcubm9kZURyYWdDYXJkUm9vdDtcbiAgICAgIHRoaXMuX3JlcGFyZW50KHRoaXMuX25vZGUsIG8pO1xuICAgICAgdmFyIG4gPSB0aGlzLl9ub2RlLnBvc2l0aW9uLFxuICAgICAgICBpID0gZS5pc1JpZ2h0ID8gMjQgOiAtMjQsXG4gICAgICAgIHIgPSBjYy52MyhuLnggKyBpLCBuLnkgKyAyNCwgbi56KTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX25vZGUpLnRvKDAuMDUsIHtcbiAgICAgICAgcG9zaXRpb246IHJcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkudG8oMC4xOCwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMoZS50YXJnZXRMb2NhbFBvcy54LCBlLnRhcmdldExvY2FsUG9zLnksIDApXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogZWFzZUNhcmRcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdC5maW5pc2goKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKCk7XG4gIH1cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9zdG9wVHdlZW4oKTtcbiAgfVxuICBvbkludGVycnVwdCgpIHtcbiAgICB0aGlzLl9jYW5jZWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N0b3BUd2VlbigpO1xuICB9XG4gIF9zdG9wVHdlZW4oKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9jdXJyZW50VHdlZW4pIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnN0b3AoKTtcbiAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gIH1cbn0iXX0=
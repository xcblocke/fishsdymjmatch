
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2NoClearAddToSlotBarAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e50dVzSeJJdLJqU/1yELG3', 'Tile2NoClearAddToSlotBarAni');
// Scripts/fsm/ani/Tile2NoClearAddToSlotBarAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoClearAddToSlotBarAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2NoClearAddToSlotBarAni = /** @class */ (function (_super) {
    __extends(Tile2NoClearAddToSlotBarAni, _super);
    function Tile2NoClearAddToSlotBarAni(t, o) {
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2NoClearAddToSlotBarAni.prototype.onPlay = function (e) {
        var t = this;
        if (cc.isValid(this._node)) {
            var o = this._node.position.z, n = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), i = this._baseTileNode.context.gameView.nodeDragCardRoot, r = this._getTargetWorldPos(), l = i.convertToNodeSpaceAR(r), s = n.convertToNodeSpaceAR(r);
            l = cc.v3(l.x - 10, l.y + 18, o);
            var c = this._baseTileNode.tileObject.getScaleInSlotBar();
            this._reparent(this._node, i);
            var u = (null == e ? void 0 : e.isShadow) ? 0 : 255;
            this._currentTween = cc.tween(this._node).to(0.23, {
                position: l,
                scale: c
            }, {
                easing: TweenEasing_1.easeCard2
            }).call(function () {
                t._reparent(t._node, n);
            }).delay(0.02).to(0.1, {
                position: cc.v3(s.x, s.y, 0),
                scale: c,
                opacity: u
            }, {
                easing: TweenEasing_1.easeCard3
            }).call(function () {
                return t.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2NoClearAddToSlotBarAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2NoClearAddToSlotBarAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2NoClearAddToSlotBarAni.prototype.reset = function () {
        var e = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), t = this._getTargetWorldPos(), o = e.convertToNodeSpaceAR(t);
        this._node.parent = e;
        this._node.position = o;
        this._node.scale = this._baseTileNode.tileObject.getScaleInSlotBar();
    };
    Tile2NoClearAddToSlotBarAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2NoClearAddToSlotBarAni.prototype._getTargetWorldPos = function () {
        var e = this._baseTileNode.tileObject, t = this._baseTileNode.context.gameView.slotBarView;
        if (!t)
            return null;
        var o = e.getIndexInSlotBar();
        return t.getWorldPosition(this._baseTileNode, o);
    };
    return Tile2NoClearAddToSlotBarAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2NoClearAddToSlotBarAni = Tile2NoClearAddToSlotBarAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJOb0NsZWFyQWRkVG9TbG90QmFyQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLHNEQUE4RDtBQUM5RDtJQUFpRCwrQ0FBa0I7SUFHakUscUNBQVksQ0FBQyxFQUFFLENBQUM7UUFBaEIsWUFDRSxpQkFBTyxTQUdSO1FBTkQsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBR25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7O0lBQ3pCLENBQUM7SUFDRCw0Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFDbEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFDeEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUNqRCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxLQUFLLEVBQUUsQ0FBQzthQUNULEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLHVCQUFTO2FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO2dCQUNyQixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQzthQUNYLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLHVCQUFTO2FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjs7WUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELDJDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUNwRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxnREFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsd0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsa0NBQUM7QUFBRCxDQWpFQSxBQWlFQyxDQWpFZ0QsdUNBQWtCLEdBaUVsRTtBQWpFWSxrRUFBMkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaWxlMkFuaUFjdGlvbkJhc2UgfSBmcm9tICcuLi8uLi9iYXNlL1RpbGUyQW5pQWN0aW9uQmFzZSc7XG5pbXBvcnQgeyBlYXNlQ2FyZDIsIGVhc2VDYXJkMyB9IGZyb20gJy4uLy4uL2Jhc2UvVHdlZW5FYXNpbmcnO1xuZXhwb3J0IGNsYXNzIFRpbGUyTm9DbGVhckFkZFRvU2xvdEJhckFuaSBleHRlbmRzIFRpbGUyQW5pQWN0aW9uQmFzZSB7XG4gIF9ub2RlID0gbnVsbDtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQsIG8pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX25vZGUgPSB0O1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgb25QbGF5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fbm9kZS5wb3NpdGlvbi56LFxuICAgICAgICBuID0gdGhpcy5fYmFzZVRpbGVOb2RlLmNvbnRleHQuZ2FtZVZpZXcuc2xvdEJhclZpZXcuZ2V0Tm9kZUxheWVyKCksXG4gICAgICAgIGkgPSB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5ub2RlRHJhZ0NhcmRSb290LFxuICAgICAgICByID0gdGhpcy5fZ2V0VGFyZ2V0V29ybGRQb3MoKSxcbiAgICAgICAgbCA9IGkuY29udmVydFRvTm9kZVNwYWNlQVIociksXG4gICAgICAgIHMgPSBuLmNvbnZlcnRUb05vZGVTcGFjZUFSKHIpO1xuICAgICAgbCA9IGNjLnYzKGwueCAtIDEwLCBsLnkgKyAxOCwgbyk7XG4gICAgICB2YXIgYyA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFNjYWxlSW5TbG90QmFyKCk7XG4gICAgICB0aGlzLl9yZXBhcmVudCh0aGlzLl9ub2RlLCBpKTtcbiAgICAgIHZhciB1ID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuaXNTaGFkb3cpID8gMCA6IDI1NTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX25vZGUpLnRvKDAuMjMsIHtcbiAgICAgICAgcG9zaXRpb246IGwsXG4gICAgICAgIHNjYWxlOiBjXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogZWFzZUNhcmQyXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5fcmVwYXJlbnQodC5fbm9kZSwgbik7XG4gICAgICB9KS5kZWxheSgwLjAyKS50bygwLjEsIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKHMueCwgcy55LCAwKSxcbiAgICAgICAgc2NhbGU6IGMsXG4gICAgICAgIG9wYWNpdHk6IHVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBlYXNlQ2FyZDNcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdC5maW5pc2goKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKCk7XG4gIH1cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5fc3RvcFR3ZWVuKCk7XG4gIH1cbiAgb25JbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5fc3RvcFR3ZWVuKCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5zbG90QmFyVmlldy5nZXROb2RlTGF5ZXIoKSxcbiAgICAgIHQgPSB0aGlzLl9nZXRUYXJnZXRXb3JsZFBvcygpLFxuICAgICAgbyA9IGUuY29udmVydFRvTm9kZVNwYWNlQVIodCk7XG4gICAgdGhpcy5fbm9kZS5wYXJlbnQgPSBlO1xuICAgIHRoaXMuX25vZGUucG9zaXRpb24gPSBvO1xuICAgIHRoaXMuX25vZGUuc2NhbGUgPSB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdC5nZXRTY2FsZUluU2xvdEJhcigpO1xuICB9XG4gIF9zdG9wVHdlZW4oKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9jdXJyZW50VHdlZW4pIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnN0b3AoKTtcbiAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gIH1cbiAgX2dldFRhcmdldFdvcmxkUG9zKCkge1xuICAgIHZhciBlID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QsXG4gICAgICB0ID0gdGhpcy5fYmFzZVRpbGVOb2RlLmNvbnRleHQuZ2FtZVZpZXcuc2xvdEJhclZpZXc7XG4gICAgaWYgKCF0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbyA9IGUuZ2V0SW5kZXhJblNsb3RCYXIoKTtcbiAgICByZXR1cm4gdC5nZXRXb3JsZFBvc2l0aW9uKHRoaXMuX2Jhc2VUaWxlTm9kZSwgbyk7XG4gIH1cbn0iXX0=
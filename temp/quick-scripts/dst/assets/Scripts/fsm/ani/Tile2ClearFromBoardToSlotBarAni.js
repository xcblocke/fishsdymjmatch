
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2ClearFromBoardToSlotBarAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2bb8eGLr0RFt5on/hX+uX3E', 'Tile2ClearFromBoardToSlotBarAni');
// Scripts/fsm/ani/Tile2ClearFromBoardToSlotBarAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearFromBoardToSlotBarAni = void 0;
var Tile2AniActionBase_1 = require("../../base/Tile2AniActionBase");
var TweenEasing_1 = require("../../base/TweenEasing");
var Tile2ClearFromBoardToSlotBarAni = /** @class */ (function (_super) {
    __extends(Tile2ClearFromBoardToSlotBarAni, _super);
    function Tile2ClearFromBoardToSlotBarAni(t, o) {
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._baseTileNode = null;
        _this._node = t;
        _this._baseTileNode = o;
        return _this;
    }
    Tile2ClearFromBoardToSlotBarAni.prototype.onPlay = function (e) {
        var t = this;
        if (cc.isValid(this._node)) {
            var o = this._baseTileNode.context.gameView.nodeDragCardRoot, n = this._getTargetWorldPos(e.clearPosIndex), i = o.convertToNodeSpaceAR(n), r = this._baseTileNode.tileObject.getScaleInSlotBar();
            this._reparent(this._node, o);
            this._node.zIndex = 10000;
            this._node.position.z;
            this._currentTween = cc.tween(this._node).to(0.23, {
                position: i,
                scale: r
            }, {
                easing: TweenEasing_1.easeCard2
            }).call(function () {
                return t.finish();
            }).start();
        }
        else
            this.finish();
    };
    Tile2ClearFromBoardToSlotBarAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2ClearFromBoardToSlotBarAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2ClearFromBoardToSlotBarAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2ClearFromBoardToSlotBarAni.prototype._getTargetWorldPos = function (e) {
        var t = this._baseTileNode.tileObject, o = this._baseTileNode.context.gameView.slotBarView;
        if (!o)
            return null;
        var n = null != e ? e : t.getIndexInSlotBar();
        return o.getWorldPosition(this._baseTileNode, n);
    };
    return Tile2ClearFromBoardToSlotBarAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2ClearFromBoardToSlotBarAni = Tile2ClearFromBoardToSlotBarAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJDbGVhckZyb21Cb2FyZFRvU2xvdEJhckFuaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRTtBQUNuRSxzREFBbUQ7QUFDbkQ7SUFBcUQsbURBQWtCO0lBR3JFLHlDQUFZLENBQUMsRUFBRSxDQUFDO1FBQWhCLFlBQ0UsaUJBQU8sU0FHUjtRQU5ELFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUduQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDOztJQUN6QixDQUFDO0lBQ0QsZ0RBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFDMUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDakQsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLENBQUM7YUFDVCxFQUFFO2dCQUNELE1BQU0sRUFBRSx1QkFBUzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7O1lBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxxREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxvREFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsNERBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3RELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDSCxzQ0FBQztBQUFELENBOUNBLEFBOENDLENBOUNvRCx1Q0FBa0IsR0E4Q3RFO0FBOUNZLDBFQUErQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGUyQW5pQWN0aW9uQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvVGlsZTJBbmlBY3Rpb25CYXNlJztcbmltcG9ydCB7IGVhc2VDYXJkMiB9IGZyb20gJy4uLy4uL2Jhc2UvVHdlZW5FYXNpbmcnO1xuZXhwb3J0IGNsYXNzIFRpbGUyQ2xlYXJGcm9tQm9hcmRUb1Nsb3RCYXJBbmkgZXh0ZW5kcyBUaWxlMkFuaUFjdGlvbkJhc2Uge1xuICBfbm9kZSA9IG51bGw7XG4gIF9iYXNlVGlsZU5vZGUgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ub2RlID0gdDtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSBvO1xuICB9XG4gIG9uUGxheShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5jb250ZXh0LmdhbWVWaWV3Lm5vZGVEcmFnQ2FyZFJvb3QsXG4gICAgICAgIG4gPSB0aGlzLl9nZXRUYXJnZXRXb3JsZFBvcyhlLmNsZWFyUG9zSW5kZXgpLFxuICAgICAgICBpID0gby5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuKSxcbiAgICAgICAgciA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFNjYWxlSW5TbG90QmFyKCk7XG4gICAgICB0aGlzLl9yZXBhcmVudCh0aGlzLl9ub2RlLCBvKTtcbiAgICAgIHRoaXMuX25vZGUuekluZGV4ID0gMTAwMDA7XG4gICAgICB0aGlzLl9ub2RlLnBvc2l0aW9uLno7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSBjYy50d2Vlbih0aGlzLl9ub2RlKS50bygwLjIzLCB7XG4gICAgICAgIHBvc2l0aW9uOiBpLFxuICAgICAgICBzY2FsZTogclxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGVhc2VDYXJkMlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmZpbmlzaCgpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goKTtcbiAgfVxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLl9zdG9wVHdlZW4oKTtcbiAgfVxuICBvbkludGVycnVwdCgpIHtcbiAgICB0aGlzLl9zdG9wVHdlZW4oKTtcbiAgfVxuICBfc3RvcFR3ZWVuKCkge1xuICAgIHZhciBlO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5fY3VycmVudFR3ZWVuKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5zdG9wKCk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICB9XG4gIF9nZXRUYXJnZXRXb3JsZFBvcyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdCxcbiAgICAgIG8gPSB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dC5nYW1lVmlldy5zbG90QmFyVmlldztcbiAgICBpZiAoIW8pIHJldHVybiBudWxsO1xuICAgIHZhciBuID0gbnVsbCAhPSBlID8gZSA6IHQuZ2V0SW5kZXhJblNsb3RCYXIoKTtcbiAgICByZXR1cm4gby5nZXRXb3JsZFBvc2l0aW9uKHRoaXMuX2Jhc2VUaWxlTm9kZSwgbik7XG4gIH1cbn0iXX0=
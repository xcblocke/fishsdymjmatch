
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ani/ScaleNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f5d1Y0GH9CnbYCf6J0eOqK', 'ScaleNodeStateAni');
// Scripts/ani/ScaleNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var ScaleNodeStateAni = /** @class */ (function (_super) {
    __extends(ScaleNodeStateAni, _super);
    function ScaleNodeStateAni(t, o) {
        var _this = _super.call(this, t, "scale") || this;
        _this._duration = 0.1;
        _this._easing = "";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    ScaleNodeStateAni.prototype.getDuration = function () {
        return this._duration;
    };
    ScaleNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            var n = this._baseTileNode.getSelectedScale(), i = {
                scale: n
            };
            this._currentTween = cc.tween(this._node).to(this.getDuration(), i, this._easing ? {
                easing: this._easing
            } : {}).call(function () {
                o.onEnterEnd(n);
            }).start();
        }
    };
    ScaleNodeStateAni.prototype.onExitStart = function (t) {
        var o = this;
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this._currentTween = cc.tween(this._node).to(this.getDuration(), {
            scale: 1
        }, this._easing ? {
            easing: this._easing
        } : {}).call(function () {
            o.onExitEnd(t);
        }).start();
    };
    ScaleNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        cc.isValid(this._node) && (this._node.scale = this._baseTileNode.getSelectedScale());
    };
    ScaleNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.scale = 1;
    };
    ScaleNodeStateAni.prototype.applyImmediate = function (e) {
        cc.isValid(this._node) && (this._node.scale = e);
    };
    __decorate([
        mj.traitEvent("ScaleStateAni_duration")
    ], ScaleNodeStateAni.prototype, "getDuration", null);
    return ScaleNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.ScaleNodeStateAni = ScaleNodeStateAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaS9TY2FsZU5vZGVTdGF0ZUFuaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RDtJQUF1QyxxQ0FBZ0I7SUFJckQsMkJBQVksQ0FBQyxFQUFFLENBQUM7UUFBaEIsWUFDRSxrQkFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLFNBRWxCO1FBTkQsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFHbkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7O0lBQ3pCLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCx3Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLGlCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsRUFDM0MsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTzthQUNyQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUNELHVDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMvRCxLQUFLLEVBQUUsQ0FBQztTQUNULEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNYLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsbUNBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDRCxrQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELDBDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBN0NEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt3REFHdkM7SUE0Q0gsd0JBQUM7Q0F2REQsQUF1REMsQ0F2RHNDLG1DQUFnQixHQXVEdEQ7QUF2RFksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZVN0YXRlQW5pQmFzZSB9IGZyb20gJy4uL2Jhc2UvTm9kZVN0YXRlQW5pQmFzZSc7XG5leHBvcnQgY2xhc3MgU2NhbGVOb2RlU3RhdGVBbmkgZXh0ZW5kcyBOb2RlU3RhdGVBbmlCYXNlIHtcbiAgX2R1cmF0aW9uID0gMC4xO1xuICBfZWFzaW5nID0gXCJcIjtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQsIG8pIHtcbiAgICBzdXBlcih0LCBcInNjYWxlXCIpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY2FsZVN0YXRlQW5pX2R1cmF0aW9uXCIpXG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcbiAgfVxuICBvbkVudGVyU3RhcnQodCkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICBzdXBlci5vbkVudGVyU3RhcnQuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSkge1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuICYmIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB2YXIgbiA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5nZXRTZWxlY3RlZFNjYWxlKCksXG4gICAgICAgIGkgPSB7XG4gICAgICAgICAgc2NhbGU6IG5cbiAgICAgICAgfTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX25vZGUpLnRvKHRoaXMuZ2V0RHVyYXRpb24oKSwgaSwgdGhpcy5fZWFzaW5nID8ge1xuICAgICAgICBlYXNpbmc6IHRoaXMuX2Vhc2luZ1xuICAgICAgfSA6IHt9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgby5vbkVudGVyRW5kKG4pO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgb25FeGl0U3RhcnQodCkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICBzdXBlci5vbkV4aXRTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbiAmJiB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX25vZGUpLnRvKHRoaXMuZ2V0RHVyYXRpb24oKSwge1xuICAgICAgc2NhbGU6IDFcbiAgICB9LCB0aGlzLl9lYXNpbmcgPyB7XG4gICAgICBlYXNpbmc6IHRoaXMuX2Vhc2luZ1xuICAgIH0gOiB7fSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBvLm9uRXhpdEVuZCh0KTtcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIG9uRW50ZXIodCkge1xuICAgIHN1cGVyLm9uRW50ZXIuY2FsbCh0aGlzLCB0KTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX25vZGUpICYmICh0aGlzLl9ub2RlLnNjYWxlID0gdGhpcy5fYmFzZVRpbGVOb2RlLmdldFNlbGVjdGVkU2NhbGUoKSk7XG4gIH1cbiAgb25FeGl0KHQpIHtcbiAgICBzdXBlci5vbkV4aXQuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xuICB9XG4gIGFwcGx5SW1tZWRpYXRlKGUpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX25vZGUpICYmICh0aGlzLl9ub2RlLnNjYWxlID0gZSk7XG4gIH1cbn0iXX0=
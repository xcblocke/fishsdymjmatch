
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2MoveToClearAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb4f9PPHDVL+7ToYoogOMms', 'Tile2MoveToClearAni');
// Scripts/Tile2MoveToClearAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveToClearAni = void 0;
var Tile2AniActionBase_1 = require("./base/Tile2AniActionBase");
var Tile2MoveToClearAni = /** @class */ (function (_super) {
    __extends(Tile2MoveToClearAni, _super);
    function Tile2MoveToClearAni(t, o, n) {
        if (o === void 0) { o = 0.25; }
        if (n === void 0) { n = "quadIn"; }
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._defaultDuration = null;
        _this._defaultEasing = null;
        _this._node = t;
        _this._defaultDuration = o;
        _this._defaultEasing = n;
        return _this;
    }
    Tile2MoveToClearAni.prototype.onPlay = function (e) {
        var t, o, n = this;
        if (cc.isValid(this._node) && e) {
            var i = this._toNodeSpace(e.worldPos);
            if (i) {
                var r = null !== (t = e.duration) && void 0 !== t ? t : this._defaultDuration, a = null !== (o = e.easing) && void 0 !== o ? o : this._defaultEasing;
                this._currentTween = cc.tween(this._node).to(r, {
                    position: i
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
    Tile2MoveToClearAni.prototype.onCancel = function () {
        this._stopTween();
    };
    Tile2MoveToClearAni.prototype.onInterrupt = function () {
        this._stopTween();
    };
    Tile2MoveToClearAni.prototype._stopTween = function () {
        var e;
        null === (e = this._currentTween) || void 0 === e || e.stop();
        this._currentTween = void 0;
    };
    Tile2MoveToClearAni.prototype._toNodeSpace = function (e) {
        if (!cc.isValid(this._node.parent))
            return null;
        var t = this._node.parent.convertToNodeSpaceAR(e);
        return cc.v3(t.x, t.y, this._node.position.z);
    };
    return Tile2MoveToClearAni;
}(Tile2AniActionBase_1.Tile2AniActionBase));
exports.Tile2MoveToClearAni = Tile2MoveToClearAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyTW92ZVRvQ2xlYXJBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFDL0Q7SUFBeUMsdUNBQWtCO0lBSXpELDZCQUFZLENBQUMsRUFBRSxDQUFRLEVBQUUsQ0FBWTtRQUF0QixrQkFBQSxFQUFBLFFBQVE7UUFBRSxrQkFBQSxFQUFBLFlBQVk7UUFBckMsWUFDRSxpQkFBTyxTQUlSO1FBUkQsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUdwQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQzFCLENBQUM7SUFDRCxvQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUMzRSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUM5QyxRQUFRLEVBQUUsQ0FBQztpQkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsTUFBTSxFQUFFLENBQUM7aUJBQ1YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ1o7O2dCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELHdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQTdDQSxBQTZDQyxDQTdDd0MsdUNBQWtCLEdBNkMxRDtBQTdDWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaWxlMkFuaUFjdGlvbkJhc2UgfSBmcm9tICcuL2Jhc2UvVGlsZTJBbmlBY3Rpb25CYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMk1vdmVUb0NsZWFyQW5pIGV4dGVuZHMgVGlsZTJBbmlBY3Rpb25CYXNlIHtcbiAgX25vZGUgPSBudWxsO1xuICBfZGVmYXVsdER1cmF0aW9uID0gbnVsbDtcbiAgX2RlZmF1bHRFYXNpbmcgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvID0gMC4yNSwgbiA9IFwicXVhZEluXCIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX25vZGUgPSB0O1xuICAgIHRoaXMuX2RlZmF1bHREdXJhdGlvbiA9IG87XG4gICAgdGhpcy5fZGVmYXVsdEVhc2luZyA9IG47XG4gIH1cbiAgb25QbGF5KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSAmJiBlKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuX3RvTm9kZVNwYWNlKGUud29ybGRQb3MpO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdmFyIHIgPSBudWxsICE9PSAodCA9IGUuZHVyYXRpb24pICYmIHZvaWQgMCAhPT0gdCA/IHQgOiB0aGlzLl9kZWZhdWx0RHVyYXRpb24sXG4gICAgICAgICAgYSA9IG51bGwgIT09IChvID0gZS5lYXNpbmcpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiB0aGlzLl9kZWZhdWx0RWFzaW5nO1xuICAgICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSBjYy50d2Vlbih0aGlzLl9ub2RlKS50byhyLCB7XG4gICAgICAgICAgcG9zaXRpb246IGlcbiAgICAgICAgfSwgYSA/IHtcbiAgICAgICAgICBlYXNpbmc6IGFcbiAgICAgICAgfSA6IHZvaWQgMCkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIG4uZmluaXNoKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9IGVsc2UgdGhpcy5maW5pc2goKTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goKTtcbiAgfVxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLl9zdG9wVHdlZW4oKTtcbiAgfVxuICBvbkludGVycnVwdCgpIHtcbiAgICB0aGlzLl9zdG9wVHdlZW4oKTtcbiAgfVxuICBfc3RvcFR3ZWVuKCkge1xuICAgIHZhciBlO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5fY3VycmVudFR3ZWVuKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5zdG9wKCk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICB9XG4gIF90b05vZGVTcGFjZShlKSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMuX25vZGUucGFyZW50KSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHQgPSB0aGlzLl9ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKTtcbiAgICByZXR1cm4gY2MudjModC54LCB0LnksIHRoaXMuX25vZGUucG9zaXRpb24ueik7XG4gIH1cbn0iXX0=
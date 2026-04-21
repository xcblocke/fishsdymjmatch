
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_maskOpacity/Scripts/MaskOpacityTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1ceb+OsIpO7bmB5k7MpJo+', 'MaskOpacityTrait');
// subpackages/l_maskOpacity/Scripts/MaskOpacityTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var MaskOpacityTrait = /** @class */ (function (_super) {
    __extends(MaskOpacityTrait, _super);
    function MaskOpacityTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._defaultOpacity = 200;
        _this._excludeControllers = new Set(["WinController", "TravelWinController", "DailyChallengeWinController", "NormalBoxController", "TravelBoxController", "RankBoxController", "LevelBoxController", "DailyRewardController", "AgeSurveyRewardController", "TravelRewardController"]);
        _this._originalShowBlackLayer = null;
        return _this;
    }
    MaskOpacityTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._defaultOpacity = null !== (e = null === (r = this.traitData.config) || void 0 === r ? void 0 : r.defaultOpacity) && void 0 !== e ? e : 200;
        var o = ControllerManager_1.default.getInstance();
        this._originalShowBlackLayer = o.showBlackLayer.bind(o);
        o.showBlackLayer = this._showBlackLayerOverride.bind(this);
    };
    MaskOpacityTrait.prototype._showBlackLayerOverride = function (t, r, e, o) {
        var a, n, l;
        if (null !== e) {
            var c = mj.getClassName(null == r ? void 0 : r.constructor) || "";
            if (this._excludeControllers.has(c))
                null === (n = this._originalShowBlackLayer) || void 0 === n || n.call(this, t, r, e, o);
            else {
                var s = e ? Object.assign({}, e) : {};
                "number" != typeof s.blackOpacity && (s.blackOpacity = this._defaultOpacity);
                null === (l = this._originalShowBlackLayer) || void 0 === l || l.call(this, t, r, s, o);
            }
        }
        else
            null === (a = this._originalShowBlackLayer) || void 0 === a || a.call(this, t, r, e, o);
    };
    MaskOpacityTrait.traitKey = "MaskOpacity";
    MaskOpacityTrait = __decorate([
        mj.trait,
        mj.class("MaskOpacityTrait")
    ], MaskOpacityTrait);
    return MaskOpacityTrait;
}(Trait_1.default));
exports.default = MaskOpacityTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hc2tPcGFjaXR5L1NjcmlwdHMvTWFza09wYWNpdHlUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUdyRjtJQUE4QyxvQ0FBSztJQUFuRDtRQUFBLHFFQXdCQztRQXZCQyxxQkFBZSxHQUFHLEdBQUcsQ0FBQztRQUN0Qix5QkFBbUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSwyQkFBMkIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDaFIsNkJBQXVCLEdBQUcsSUFBSSxDQUFDOztJQXFCakMsQ0FBQztJQW5CQyxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNqSixJQUFJLENBQUMsR0FBRywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxrREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQUs7Z0JBQ2hJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdEMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pGO1NBQ0Y7O1lBQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBbkJNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBSmIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQXdCcEM7SUFBRCx1QkFBQztDQXhCRCxBQXdCQyxDQXhCNkMsZUFBSyxHQXdCbEQ7a0JBeEJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYXNrT3BhY2l0eVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrT3BhY2l0eVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZGVmYXVsdE9wYWNpdHkgPSAyMDA7XG4gIF9leGNsdWRlQ29udHJvbGxlcnMgPSBuZXcgU2V0KFtcIldpbkNvbnRyb2xsZXJcIiwgXCJUcmF2ZWxXaW5Db250cm9sbGVyXCIsIFwiRGFpbHlDaGFsbGVuZ2VXaW5Db250cm9sbGVyXCIsIFwiTm9ybWFsQm94Q29udHJvbGxlclwiLCBcIlRyYXZlbEJveENvbnRyb2xsZXJcIiwgXCJSYW5rQm94Q29udHJvbGxlclwiLCBcIkxldmVsQm94Q29udHJvbGxlclwiLCBcIkRhaWx5UmV3YXJkQ29udHJvbGxlclwiLCBcIkFnZVN1cnZleVJld2FyZENvbnRyb2xsZXJcIiwgXCJUcmF2ZWxSZXdhcmRDb250cm9sbGVyXCJdKTtcbiAgX29yaWdpbmFsU2hvd0JsYWNrTGF5ZXIgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1hc2tPcGFjaXR5XCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgciwgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9kZWZhdWx0T3BhY2l0eSA9IG51bGwgIT09IChlID0gbnVsbCA9PT0gKHIgPSB0aGlzLnRyYWl0RGF0YS5jb25maWcpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZGVmYXVsdE9wYWNpdHkpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAyMDA7XG4gICAgdmFyIG8gPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuX29yaWdpbmFsU2hvd0JsYWNrTGF5ZXIgPSBvLnNob3dCbGFja0xheWVyLmJpbmQobyk7XG4gICAgby5zaG93QmxhY2tMYXllciA9IHRoaXMuX3Nob3dCbGFja0xheWVyT3ZlcnJpZGUuYmluZCh0aGlzKTtcbiAgfVxuICBfc2hvd0JsYWNrTGF5ZXJPdmVycmlkZSh0LCByLCBlLCBvKSB7XG4gICAgdmFyIGEsIG4sIGw7XG4gICAgaWYgKG51bGwgIT09IGUpIHtcbiAgICAgIHZhciBjID0gbWouZ2V0Q2xhc3NOYW1lKG51bGwgPT0gciA/IHZvaWQgMCA6IHIuY29uc3RydWN0b3IpIHx8IFwiXCI7XG4gICAgICBpZiAodGhpcy5fZXhjbHVkZUNvbnRyb2xsZXJzLmhhcyhjKSkgbnVsbCA9PT0gKG4gPSB0aGlzLl9vcmlnaW5hbFNob3dCbGFja0xheWVyKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5jYWxsKHRoaXMsIHQsIHIsIGUsIG8pO2Vsc2Uge1xuICAgICAgICB2YXIgcyA9IGUgPyBPYmplY3QuYXNzaWduKHt9LCBlKSA6IHt9O1xuICAgICAgICBcIm51bWJlclwiICE9IHR5cGVvZiBzLmJsYWNrT3BhY2l0eSAmJiAocy5ibGFja09wYWNpdHkgPSB0aGlzLl9kZWZhdWx0T3BhY2l0eSk7XG4gICAgICAgIG51bGwgPT09IChsID0gdGhpcy5fb3JpZ2luYWxTaG93QmxhY2tMYXllcikgfHwgdm9pZCAwID09PSBsIHx8IGwuY2FsbCh0aGlzLCB0LCByLCBzLCBvKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgbnVsbCA9PT0gKGEgPSB0aGlzLl9vcmlnaW5hbFNob3dCbGFja0xheWVyKSB8fCB2b2lkIDAgPT09IGEgfHwgYS5jYWxsKHRoaXMsIHQsIHIsIGUsIG8pO1xuICB9XG59Il19
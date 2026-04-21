
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineComboEffect/Scripts/ValentineComboEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fe32W/E6lP44zURjRRoqR5', 'ValentineComboEffectTrait');
// subpackages/r_valentineComboEffect/Scripts/ValentineComboEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentineComboEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineComboEffectTrait, _super);
    function ValentineComboEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = "prefabs/EffectCombo";
        return _this;
    }
    ValentineComboEffectTrait_1 = ValentineComboEffectTrait;
    ValentineComboEffectTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.enterGameView();
        this.isComboEffectActive() && this.loadResPools();
    };
    ValentineComboEffectTrait.prototype.enterGameView = function () { };
    ValentineComboEffectTrait.prototype.loadResPools = function () {
        var t = ControllerManager_1.default.getInstance().getControByName("MainGameController");
        t && (t.gameObjectPool.isHasPool(ValentineComboEffectTrait_1.ValentineComboEffect) || t.loadRes(this._url, cc.Prefab, ValentineComboEffectTrait_1.BundleName).then(function (e) {
            var r = Array.isArray(e) ? e[0] : e;
            r && t.gameObjectPool.createObjectPool(ValentineComboEffectTrait_1.ValentineComboEffect, r, 1);
        }).catch(function () { }));
    };
    ValentineComboEffectTrait.prototype.onUpdComboBhv_poolName = function (t, e) {
        if (this.isComboEffectActive()) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: ValentineComboEffectTrait_1.ValentineComboEffect
            });
        }
        else {
            e();
        }
    };
    ValentineComboEffectTrait.prototype.isComboEffectActive = function () {
        if (null != this._traitData.comboEffect)
            return this._traitData.comboEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineComboEffectTrait_1;
    ValentineComboEffectTrait.traitKey = "ValentineComboEffect";
    ValentineComboEffectTrait.ValentineComboEffect = "ValentineComboEffect";
    ValentineComboEffectTrait.BundleName = "r_valentineComboEffect";
    __decorate([
        mj.traitEvent("ValComboEff_enter")
    ], ValentineComboEffectTrait.prototype, "enterGameView", null);
    ValentineComboEffectTrait = ValentineComboEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineComboEffectTrait")
    ], ValentineComboEffectTrait);
    return ValentineComboEffectTrait;
}(Trait_1.default));
exports.default = ValentineComboEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUNvbWJvRWZmZWN0L1NjcmlwdHMvVmFsZW50aW5lQ29tYm9FZmZlY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUdyRjtJQUF1RCw2Q0FBSztJQUE1RDtRQUFBLHFFQW1DQztRQWxDQyxVQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBa0MvQixDQUFDO2tDQW5Db0IseUJBQXlCO0lBSzVDLHlEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELGlEQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQixnREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsMkJBQXlCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSwyQkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLDJCQUF5QixDQUFDLG9CQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCwwREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSwyQkFBeUIsQ0FBQyxvQkFBb0I7YUFDMUQsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsdURBQW1CLEdBQW5CO1FBQ0UsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztJQWhDTSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBQ2xDLDhDQUFvQixHQUFHLHNCQUFzQixDQUFDO0lBQzlDLG9DQUFVLEdBQUcsd0JBQXdCLENBQUM7SUFPN0M7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2tFQUNqQjtJQVhDLHlCQUF5QjtRQUY3QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7T0FDakIseUJBQXlCLENBbUM3QztJQUFELGdDQUFDO0NBbkNELEFBbUNDLENBbkNzRCxlQUFLLEdBbUMzRDtrQkFuQ29CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZUNvbWJvRWZmZWN0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGVudGluZUNvbWJvRWZmZWN0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF91cmwgPSBcInByZWZhYnMvRWZmZWN0Q29tYm9cIjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWYWxlbnRpbmVDb21ib0VmZmVjdFwiO1xuICBzdGF0aWMgVmFsZW50aW5lQ29tYm9FZmZlY3QgPSBcIlZhbGVudGluZUNvbWJvRWZmZWN0XCI7XG4gIHN0YXRpYyBCdW5kbGVOYW1lID0gXCJyX3ZhbGVudGluZUNvbWJvRWZmZWN0XCI7XG4gIG9uTWFpbkdhbWVDdHJsX3Z3TG9hZCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMuZW50ZXJHYW1lVmlldygpO1xuICAgIHRoaXMuaXNDb21ib0VmZmVjdEFjdGl2ZSgpICYmIHRoaXMubG9hZFJlc1Bvb2xzKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJWYWxDb21ib0VmZl9lbnRlclwiKVxuICBlbnRlckdhbWVWaWV3KCkge31cbiAgbG9hZFJlc1Bvb2xzKCkge1xuICAgIHZhciB0ID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgdCAmJiAodC5nYW1lT2JqZWN0UG9vbC5pc0hhc1Bvb2woVmFsZW50aW5lQ29tYm9FZmZlY3RUcmFpdC5WYWxlbnRpbmVDb21ib0VmZmVjdCkgfHwgdC5sb2FkUmVzKHRoaXMuX3VybCwgY2MuUHJlZmFiLCBWYWxlbnRpbmVDb21ib0VmZmVjdFRyYWl0LkJ1bmRsZU5hbWUpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciByID0gQXJyYXkuaXNBcnJheShlKSA/IGVbMF0gOiBlO1xuICAgICAgciAmJiB0LmdhbWVPYmplY3RQb29sLmNyZWF0ZU9iamVjdFBvb2woVmFsZW50aW5lQ29tYm9FZmZlY3RUcmFpdC5WYWxlbnRpbmVDb21ib0VmZmVjdCwgciwgMSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge30pKTtcbiAgfVxuICBvblVwZENvbWJvQmh2X3Bvb2xOYW1lKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc0NvbWJvRWZmZWN0QWN0aXZlKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogVmFsZW50aW5lQ29tYm9FZmZlY3RUcmFpdC5WYWxlbnRpbmVDb21ib0VmZmVjdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgaXNDb21ib0VmZmVjdEFjdGl2ZSgpIHtcbiAgICBpZiAobnVsbCAhPSB0aGlzLl90cmFpdERhdGEuY29tYm9FZmZlY3QpIHJldHVybiB0aGlzLl90cmFpdERhdGEuY29tYm9FZmZlY3Q7XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIlZhbGVudGluZU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsICE9IHQgJiYgdC5nZXRJbnN0YW5jZSgpLmlzRWZmZWN0QWN0aXZlKCk7XG4gIH1cbn0iXX0=
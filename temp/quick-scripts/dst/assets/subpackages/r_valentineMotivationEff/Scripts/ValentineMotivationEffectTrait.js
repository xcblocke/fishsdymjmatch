
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineMotivationEff/Scripts/ValentineMotivationEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdec9XwOhFMvb7BxRce2biU', 'ValentineMotivationEffectTrait');
// subpackages/r_valentineMotivationEff/Scripts/ValentineMotivationEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentineMotivationEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineMotivationEffectTrait, _super);
    function ValentineMotivationEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = "prefabs/EffectMotivationalWords";
        return _this;
    }
    ValentineMotivationEffectTrait_1 = ValentineMotivationEffectTrait;
    ValentineMotivationEffectTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isValentineMotivationEffectActive() && this.loadResPools();
    };
    ValentineMotivationEffectTrait.prototype.loadResPools = function () {
        var t = ControllerManager_1.default.getInstance().getControByName("MainGameController");
        t && (t.gameObjectPool.isHasPool(ValentineMotivationEffectTrait_1.ValentineMotivationEffect) || t.loadRes(this._url, cc.Prefab, ValentineMotivationEffectTrait_1.BundleName).then(function (e) {
            var n = Array.isArray(e) ? e[0] : e;
            n && t.gameObjectPool.createObjectPool(ValentineMotivationEffectTrait_1.ValentineMotivationEffect, n, 1);
        }).catch(function () { }));
    };
    ValentineMotivationEffectTrait.prototype.onMotivWdsEff_poolName = function (t, e) {
        if (this.isValentineMotivationEffectActive()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: ValentineMotivationEffectTrait_1.ValentineMotivationEffect
            });
        }
        else {
            e();
        }
    };
    ValentineMotivationEffectTrait.prototype.isValentineMotivationEffectActive = function () {
        if (null != this._traitData.valentineMotivationEffect)
            return this._traitData.valentineMotivationEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineMotivationEffectTrait_1;
    ValentineMotivationEffectTrait.traitKey = "ValentineMotivationEffect";
    ValentineMotivationEffectTrait.ValentineMotivationEffect = "ValentineMotivationEffect";
    ValentineMotivationEffectTrait.BundleName = "r_valentineMotivationEff";
    ValentineMotivationEffectTrait = ValentineMotivationEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineMotivationEffectTrait")
    ], ValentineMotivationEffectTrait);
    return ValentineMotivationEffectTrait;
}(Trait_1.default));
exports.default = ValentineMotivationEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZU1vdGl2YXRpb25FZmYvU2NyaXB0cy9WYWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsMEZBQXFGO0FBR3JGO0lBQTRELGtEQUFLO0lBQWpFO1FBQUEscUVBZ0NDO1FBL0JDLFVBQUksR0FBRyxpQ0FBaUMsQ0FBQzs7SUErQjNDLENBQUM7dUNBaENvQiw4QkFBOEI7SUFLakQsOERBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLGlDQUFpQyxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxxREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsZ0NBQThCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxnQ0FBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZMLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGdDQUE4QixDQUFDLHlCQUF5QixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCwrREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsaUNBQWlDLEVBQUUsRUFBRTtZQUM1QyxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxnQ0FBOEIsQ0FBQyx5QkFBeUI7YUFDcEUsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsMEVBQWlDLEdBQWpDO1FBQ0UsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUI7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7UUFDeEcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7SUE3Qk0sdUNBQVEsR0FBRywyQkFBMkIsQ0FBQztJQUN2Qyx3REFBeUIsR0FBRywyQkFBMkIsQ0FBQztJQUN4RCx5Q0FBVSxHQUFHLDBCQUEwQixDQUFDO0lBSjVCLDhCQUE4QjtRQUZsRCxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7T0FDdEIsOEJBQThCLENBZ0NsRDtJQUFELHFDQUFDO0NBaENELEFBZ0NDLENBaEMyRCxlQUFLLEdBZ0NoRTtrQkFoQ29CLDhCQUE4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZU1vdGl2YXRpb25FZmZlY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lTW90aXZhdGlvbkVmZmVjdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdXJsID0gXCJwcmVmYWJzL0VmZmVjdE1vdGl2YXRpb25hbFdvcmRzXCI7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmFsZW50aW5lTW90aXZhdGlvbkVmZmVjdFwiO1xuICBzdGF0aWMgVmFsZW50aW5lTW90aXZhdGlvbkVmZmVjdCA9IFwiVmFsZW50aW5lTW90aXZhdGlvbkVmZmVjdFwiO1xuICBzdGF0aWMgQnVuZGxlTmFtZSA9IFwicl92YWxlbnRpbmVNb3RpdmF0aW9uRWZmXCI7XG4gIG9uTWFpbkdhbWVDdHJsX3Z3TG9hZCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMuaXNWYWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0QWN0aXZlKCkgJiYgdGhpcy5sb2FkUmVzUG9vbHMoKTtcbiAgfVxuICBsb2FkUmVzUG9vbHMoKSB7XG4gICAgdmFyIHQgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldENvbnRyb0J5TmFtZShcIk1haW5HYW1lQ29udHJvbGxlclwiKTtcbiAgICB0ICYmICh0LmdhbWVPYmplY3RQb29sLmlzSGFzUG9vbChWYWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0VHJhaXQuVmFsZW50aW5lTW90aXZhdGlvbkVmZmVjdCkgfHwgdC5sb2FkUmVzKHRoaXMuX3VybCwgY2MuUHJlZmFiLCBWYWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0VHJhaXQuQnVuZGxlTmFtZSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG4gPSBBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGU7XG4gICAgICBuICYmIHQuZ2FtZU9iamVjdFBvb2wuY3JlYXRlT2JqZWN0UG9vbChWYWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0VHJhaXQuVmFsZW50aW5lTW90aXZhdGlvbkVmZmVjdCwgbiwgMSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge30pKTtcbiAgfVxuICBvbk1vdGl2V2RzRWZmX3Bvb2xOYW1lKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGVudGluZU1vdGl2YXRpb25FZmZlY3RBY3RpdmUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBWYWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0VHJhaXQuVmFsZW50aW5lTW90aXZhdGlvbkVmZmVjdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgaXNWYWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0QWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS52YWxlbnRpbmVNb3RpdmF0aW9uRWZmZWN0KSByZXR1cm4gdGhpcy5fdHJhaXREYXRhLnZhbGVudGluZU1vdGl2YXRpb25FZmZlY3Q7XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIlZhbGVudGluZU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsICE9IHQgJiYgdC5nZXRJbnN0YW5jZSgpLmlzRWZmZWN0QWN0aXZlKCk7XG4gIH1cbn0iXX0=
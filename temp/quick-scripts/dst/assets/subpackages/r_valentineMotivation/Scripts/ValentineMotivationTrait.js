
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineMotivation/Scripts/ValentineMotivationTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19426kFzctF87CvCjLX4qHO', 'ValentineMotivationTrait');
// subpackages/r_valentineMotivation/Scripts/ValentineMotivationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentineMotivationTrait = /** @class */ (function (_super) {
    __extends(ValentineMotivationTrait, _super);
    function ValentineMotivationTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = "prefabs/EffectMotivationalWordsItem";
        return _this;
    }
    ValentineMotivationTrait_1 = ValentineMotivationTrait;
    ValentineMotivationTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isValentineMotivationActive() && this.loadResPools();
    };
    ValentineMotivationTrait.prototype.loadResPools = function () {
        var t = ControllerManager_1.default.getInstance().getControByName("MainGameController");
        t && (t.gameObjectPool.isHasPool(ValentineMotivationTrait_1.ValentineMotivation) || t.loadRes(this._url, cc.Prefab, "r_valentineMotivation").then(function (e) {
            var n = Array.isArray(e) ? e[0] : e;
            n && t.gameObjectPool.createObjectPool(ValentineMotivationTrait_1.ValentineMotivation, n, 1);
        }).catch(function () { }));
    };
    ValentineMotivationTrait.prototype.onMotivWordsBhv_nodeName = function (t, e) {
        if (this.isValentineMotivationActive()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: ValentineMotivationTrait_1.ValentineMotivation
            });
        }
        else {
            e();
        }
    };
    ValentineMotivationTrait.prototype.isValentineMotivationActive = function () {
        if (null != this._traitData.valentineMotivation)
            return this._traitData.valentineMotivation;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineMotivationTrait_1;
    ValentineMotivationTrait.traitKey = "ValentineMotivation";
    ValentineMotivationTrait.ValentineMotivation = "ValentineMotivation";
    ValentineMotivationTrait = ValentineMotivationTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineMotivationTrait")
    ], ValentineMotivationTrait);
    return ValentineMotivationTrait;
}(Trait_1.default));
exports.default = ValentineMotivationTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZU1vdGl2YXRpb24vU2NyaXB0cy9WYWxlbnRpbmVNb3RpdmF0aW9uVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsMEZBQXFGO0FBR3JGO0lBQXNELDRDQUFLO0lBQTNEO1FBQUEscUVBK0JDO1FBOUJDLFVBQUksR0FBRyxxQ0FBcUMsQ0FBQzs7SUE4Qi9DLENBQUM7aUNBL0JvQix3QkFBd0I7SUFJM0Msd0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLDJCQUEyQixFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVELENBQUM7SUFDRCwrQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDOUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsMEJBQXdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekosSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsMEJBQXdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELDJEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFFO1lBQ3RDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLDBCQUF3QixDQUFDLG1CQUFtQjthQUN4RCxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCw4REFBMkIsR0FBM0I7UUFDRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQjtZQUFFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2RCxDQUFDOztJQTVCTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBQ2pDLDRDQUFtQixHQUFHLHFCQUFxQixDQUFDO0lBSGhDLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBK0I1QztJQUFELCtCQUFDO0NBL0JELEFBK0JDLENBL0JxRCxlQUFLLEdBK0IxRDtrQkEvQm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZU1vdGl2YXRpb25UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lTW90aXZhdGlvblRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdXJsID0gXCJwcmVmYWJzL0VmZmVjdE1vdGl2YXRpb25hbFdvcmRzSXRlbVwiO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlZhbGVudGluZU1vdGl2YXRpb25cIjtcbiAgc3RhdGljIFZhbGVudGluZU1vdGl2YXRpb24gPSBcIlZhbGVudGluZU1vdGl2YXRpb25cIjtcbiAgb25NYWluR2FtZUN0cmxfdndMb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5pc1ZhbGVudGluZU1vdGl2YXRpb25BY3RpdmUoKSAmJiB0aGlzLmxvYWRSZXNQb29scygpO1xuICB9XG4gIGxvYWRSZXNQb29scygpIHtcbiAgICB2YXIgdCA9IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q29udHJvQnlOYW1lKFwiTWFpbkdhbWVDb250cm9sbGVyXCIpO1xuICAgIHQgJiYgKHQuZ2FtZU9iamVjdFBvb2wuaXNIYXNQb29sKFZhbGVudGluZU1vdGl2YXRpb25UcmFpdC5WYWxlbnRpbmVNb3RpdmF0aW9uKSB8fCB0LmxvYWRSZXModGhpcy5fdXJsLCBjYy5QcmVmYWIsIFwicl92YWxlbnRpbmVNb3RpdmF0aW9uXCIpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBuID0gQXJyYXkuaXNBcnJheShlKSA/IGVbMF0gOiBlO1xuICAgICAgbiAmJiB0LmdhbWVPYmplY3RQb29sLmNyZWF0ZU9iamVjdFBvb2woVmFsZW50aW5lTW90aXZhdGlvblRyYWl0LlZhbGVudGluZU1vdGl2YXRpb24sIG4sIDEpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHt9KSk7XG4gIH1cbiAgb25Nb3RpdldvcmRzQmh2X25vZGVOYW1lKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGVudGluZU1vdGl2YXRpb25BY3RpdmUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBWYWxlbnRpbmVNb3RpdmF0aW9uVHJhaXQuVmFsZW50aW5lTW90aXZhdGlvblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgaXNWYWxlbnRpbmVNb3RpdmF0aW9uQWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS52YWxlbnRpbmVNb3RpdmF0aW9uKSByZXR1cm4gdGhpcy5fdHJhaXREYXRhLnZhbGVudGluZU1vdGl2YXRpb247XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIlZhbGVudGluZU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsICE9IHQgJiYgdC5nZXRJbnN0YW5jZSgpLmlzRWZmZWN0QWN0aXZlKCk7XG4gIH1cbn0iXX0=
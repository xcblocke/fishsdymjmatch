
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_valentinePopBtnGo/Scripts/ValentinePopBtnGoTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '033076EmItA0KI3haiamoQ2', 'ValentinePopBtnGoTrait');
// subpackages/l_valentinePopBtnGo/Scripts/ValentinePopBtnGoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentinePopBtnGoTrait = /** @class */ (function (_super) {
    __extends(ValentinePopBtnGoTrait, _super);
    function ValentinePopBtnGoTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentinePopBtnGoTrait.prototype.onVltnIntroVw_goto = function (t, e) {
        var r = t.ins;
        ControllerManager_1.default.getInstance().pushViewByController("MainGameController", {}, function () {
            var t;
            null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close();
        });
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    ValentinePopBtnGoTrait.prototype.onVltnActVw_goto = function (t, e) {
        var r = t.ins;
        ControllerManager_1.default.getInstance().pushViewByController("MainGameController", {}, function () {
            var t;
            null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close();
        });
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    ValentinePopBtnGoTrait.traitKey = "ValentinePopBtnGo";
    ValentinePopBtnGoTrait = __decorate([
        mj.trait,
        mj.class("ValentinePopBtnGoTrait")
    ], ValentinePopBtnGoTrait);
    return ValentinePopBtnGoTrait;
}(Trait_1.default));
exports.default = ValentinePopBtnGoTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZhbGVudGluZVBvcEJ0bkdvL1NjcmlwdHMvVmFsZW50aW5lUG9wQnRuR29UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUdyRjtJQUFvRCwwQ0FBSztJQUF6RDs7SUF3QkEsQ0FBQztJQXRCQyxtREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixFQUFFLEVBQUUsRUFBRTtZQUM3RSxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixFQUFFLEVBQUUsRUFBRTtZQUM3RSxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF0Qk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBd0IxQztJQUFELDZCQUFDO0NBeEJELEFBd0JDLENBeEJtRCxlQUFLLEdBd0J4RDtrQkF4Qm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZVBvcEJ0bkdvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGVudGluZVBvcEJ0bkdvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmFsZW50aW5lUG9wQnRuR29cIjtcbiAgb25WbHRuSW50cm9Wd19nb3RvKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJNYWluR2FtZUNvbnRyb2xsZXJcIiwge30sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgbnVsbCA9PT0gKHQgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbG9zZSgpO1xuICAgIH0pO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uVmx0bkFjdFZ3X2dvdG8odCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIk1haW5HYW1lQ29udHJvbGxlclwiLCB7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQ7XG4gICAgICBudWxsID09PSAodCA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCk7XG4gICAgfSk7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbn0iXX0=
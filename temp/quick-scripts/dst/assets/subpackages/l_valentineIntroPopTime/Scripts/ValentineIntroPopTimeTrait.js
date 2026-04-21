
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_valentineIntroPopTime/Scripts/ValentineIntroPopTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73c15Y7hkhKZKaZZrjt8ib9', 'ValentineIntroPopTimeTrait');
// subpackages/l_valentineIntroPopTime/Scripts/ValentineIntroPopTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ValentineIntroPopTimeTrait = /** @class */ (function (_super) {
    __extends(ValentineIntroPopTimeTrait, _super);
    function ValentineIntroPopTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineIntroPopTimeTrait.prototype.onComplexVal_onMsgSetLevel = function (t, e) {
        var r, o, n = t.ins;
        if (null !== (o = null === (r = n.model) || void 0 === r ? void 0 : r.shouldShowIntroPopup) && void 0 !== o && o.call(r)) {
            n.showIntroducePopup();
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ValentineIntroPopTimeTrait.prototype.onVltnIntroVw_goto = function (t, e) {
        var r, o = t.ins;
        if (UserModel_1.default.getInstance().isInGameView()) {
            null === (r = null == o ? void 0 : o.delegate) || void 0 === r || r.close();
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ValentineIntroPopTimeTrait.traitKey = "ValentineIntroPopTime";
    ValentineIntroPopTimeTrait = __decorate([
        mj.trait,
        mj.class("ValentineIntroPopTimeTrait")
    ], ValentineIntroPopTimeTrait);
    return ValentineIntroPopTimeTrait;
}(Trait_1.default));
exports.default = ValentineIntroPopTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZhbGVudGluZUludHJvUG9wVGltZS9TY3JpcHRzL1ZhbGVudGluZUludHJvUG9wVGltZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUF3RCw4Q0FBSztJQUE3RDs7SUF5QkEsQ0FBQztJQXZCQywrREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1osSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN4SCxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsdURBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1osSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUUsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXZCTSxtQ0FBUSxHQUFHLHVCQUF1QixDQUFDO0lBRHZCLDBCQUEwQjtRQUY5QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7T0FDbEIsMEJBQTBCLENBeUI5QztJQUFELGlDQUFDO0NBekJELEFBeUJDLENBekJ1RCxlQUFLLEdBeUI1RDtrQkF6Qm9CLDBCQUEwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJWYWxlbnRpbmVJbnRyb1BvcFRpbWVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lSW50cm9Qb3BUaW1lVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmFsZW50aW5lSW50cm9Qb3BUaW1lXCI7XG4gIG9uQ29tcGxleFZhbF9vbk1zZ1NldExldmVsKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8sXG4gICAgICBuID0gdC5pbnM7XG4gICAgaWYgKG51bGwgIT09IChvID0gbnVsbCA9PT0gKHIgPSBuLm1vZGVsKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnNob3VsZFNob3dJbnRyb1BvcHVwKSAmJiB2b2lkIDAgIT09IG8gJiYgby5jYWxsKHIpKSB7XG4gICAgICBuLnNob3dJbnRyb2R1Y2VQb3B1cCgpO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvblZsdG5JbnRyb1Z3X2dvdG8odCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyA9IHQuaW5zO1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0luR2FtZVZpZXcoKSkge1xuICAgICAgbnVsbCA9PT0gKHIgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHIgfHwgci5jbG9zZSgpO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==
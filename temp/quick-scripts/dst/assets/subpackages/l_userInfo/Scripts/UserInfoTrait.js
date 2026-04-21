
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_userInfo/Scripts/UserInfoTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '524dbJq311GzYjLeqndM+YM', 'UserInfoTrait');
// subpackages/l_userInfo/Scripts/UserInfoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserInfoTrait = /** @class */ (function (_super) {
    __extends(UserInfoTrait, _super);
    function UserInfoTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserInfoTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    UserInfoTrait.prototype.onUISetHome_openUserInfo = function (e, t) {
        if (this.traitData.isOpenSetting) {
            ControllerManager_1.default.getInstance().pushViewByController("UserInfoController");
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else {
            var r = e.ins;
            r && cc.isValid(r.node) && r.delegate && r.delegate.close();
            ControllerManager_1.default.getInstance().pushViewByController("UserInfoController");
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    UserInfoTrait.prototype.onUISetHomeCtrl_onUIEnable = function (e, t) {
        var r = e.ins;
        r && cc.isValid(r.rootView) && r.refreshAvatorAndNickname();
        t();
    };
    UserInfoTrait.traitKey = "UserInfo";
    UserInfoTrait = __decorate([
        mj.trait,
        mj.class("UserInfoTrait")
    ], UserInfoTrait);
    return UserInfoTrait;
}(Trait_1.default));
exports.default = UserInfoTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VzZXJJbmZvL1NjcmlwdHMvVXNlckluZm9UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUdyRjtJQUEyQyxpQ0FBSztJQUFoRDs7SUEyQkEsQ0FBQztJQXpCQyw4QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDaEMsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMzRSxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDZCxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELGtEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzVELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQXpCTSxzQkFBUSxHQUFHLFVBQVUsQ0FBQztJQURWLGFBQWE7UUFGakMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNMLGFBQWEsQ0EyQmpDO0lBQUQsb0JBQUM7Q0EzQkQsQUEyQkMsQ0EzQjBDLGVBQUssR0EyQi9DO2tCQTNCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlVzZXJJbmZvVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVXNlckluZm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVUlTZXRIb21lX29wZW5Vc2VySW5mbyhlLCB0KSB7XG4gICAgaWYgKHRoaXMudHJhaXREYXRhLmlzT3BlblNldHRpbmcpIHtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJVc2VySW5mb0NvbnRyb2xsZXJcIik7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHIgPSBlLmlucztcbiAgICAgIHIgJiYgY2MuaXNWYWxpZChyLm5vZGUpICYmIHIuZGVsZWdhdGUgJiYgci5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlVzZXJJbmZvQ29udHJvbGxlclwiKTtcbiAgICAgIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvblVJU2V0SG9tZUN0cmxfb25VSUVuYWJsZShlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmlucztcbiAgICByICYmIGNjLmlzVmFsaWQoci5yb290VmlldykgJiYgci5yZWZyZXNoQXZhdG9yQW5kTmlja25hbWUoKTtcbiAgICB0KCk7XG4gIH1cbn0iXX0=
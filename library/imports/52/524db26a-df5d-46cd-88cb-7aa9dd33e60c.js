"use strict";
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
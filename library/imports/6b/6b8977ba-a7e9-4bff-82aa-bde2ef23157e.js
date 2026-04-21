"use strict";
cc._RF.push(module, '6b897e6p+lL/4KqveLvIxV+', 'UserInfoDefaultCfgTrait');
// subpackages/l_userInfoDefaultCfg/Scripts/UserInfoDefaultCfgTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UserInfoDefaultCfgTrait = /** @class */ (function (_super) {
    __extends(UserInfoDefaultCfgTrait, _super);
    function UserInfoDefaultCfgTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserInfoDefaultCfgTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._config = {
            defaultAvatarId: null === (e = this._traitData) || void 0 === e ? void 0 : e.defaultAvatarId,
            defaultFrameId: null === (r = this._traitData) || void 0 === r ? void 0 : r.defaultFrameId
        };
    };
    UserInfoDefaultCfgTrait.prototype.onInfoMgr_setDefAvatar = function (t, e) {
        if (void 0 !== this._config.defaultAvatarId) {
            var r = UserModel_1.default.getInstance().getAvatarId();
            r && 0 !== r || UserModel_1.default.getInstance().setAvatarId(this._config.defaultAvatarId);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    UserInfoDefaultCfgTrait.prototype.onInfoMgr_setDefFrame = function (t, e) {
        if (void 0 !== this._config.defaultFrameId) {
            var r = UserModel_1.default.getInstance().getFrameId();
            r && 0 !== r || UserModel_1.default.getInstance().setFrameId(this._config.defaultFrameId);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    UserInfoDefaultCfgTrait.traitKey = "UserInfoDefaultCfg";
    UserInfoDefaultCfgTrait = __decorate([
        mj.trait,
        mj.class("UserInfoDefaultCfgTrait")
    ], UserInfoDefaultCfgTrait);
    return UserInfoDefaultCfgTrait;
}(Trait_1.default));
exports.default = UserInfoDefaultCfgTrait;

cc._RF.pop();
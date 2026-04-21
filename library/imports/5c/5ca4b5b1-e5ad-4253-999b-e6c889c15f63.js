"use strict";
cc._RF.push(module, '5ca4bWx5a1CU5mb5siJwV9j', 'RankPopUserInfoTrait');
// subpackages/l_rankPopUserInfo/Scripts/RankPopUserInfoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankPopUserInfoTrait = /** @class */ (function (_super) {
    __extends(RankPopUserInfoTrait, _super);
    function RankPopUserInfoTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankPopUserInfoTrait.prototype.onRankIntroVw_collect = function (e, t) {
        if ("yes" == this.localData.isRankPopUserInfo)
            t();
        else {
            this.localData.isRankPopUserInfo = "yes";
            ControllerManager_1.default.getInstance().pushViewByController("UserInfoController", {
                isFromRankIntro: true
            });
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    RankPopUserInfoTrait.prototype.onRankIntroVw_closeClk = function (e, t) {
        t();
        this.localData.isRankPopUserInfo = "yes";
    };
    RankPopUserInfoTrait.prototype.onUserInfoVw_destroy = function (e, t) {
        var r;
        t();
        if (null === (r = e.ins.delegate.args) || void 0 === r ? void 0 : r.isFromRankIntro) {
            this.dispatchEvent("RankModel_updTime");
            if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
                ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
            }
            else {
                ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
            }
        }
    };
    RankPopUserInfoTrait.traitKey = "RankPopUserInfo";
    RankPopUserInfoTrait = __decorate([
        mj.trait,
        mj.class("RankPopUserInfoTrait")
    ], RankPopUserInfoTrait);
    return RankPopUserInfoTrait;
}(Trait_1.default));
exports.default = RankPopUserInfoTrait;

cc._RF.pop();
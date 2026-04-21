"use strict";
cc._RF.push(module, '8f03eKZQqVBA4N2RddzTLgu', 'FirstSessionSkipInterAdTrait');
// subpackages/l_firstSessionSkipInterAd/Scripts/FirstSessionSkipInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstSessionSkipInterAdTrait = /** @class */ (function (_super) {
    __extends(FirstSessionSkipInterAdTrait, _super);
    function FirstSessionSkipInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstSessionSkipInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FirstSessionSkipInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic && UserModel_1.default.getInstance().isFirstOpen) {
            r({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    FirstSessionSkipInterAdTrait.traitKey = "FirstSessionSkipInterAd";
    FirstSessionSkipInterAdTrait = __decorate([
        mj.trait,
        mj.class("FirstSessionSkipInterAdTrait")
    ], FirstSessionSkipInterAdTrait);
    return FirstSessionSkipInterAdTrait;
}(Trait_1.default));
exports.default = FirstSessionSkipInterAdTrait;

cc._RF.pop();
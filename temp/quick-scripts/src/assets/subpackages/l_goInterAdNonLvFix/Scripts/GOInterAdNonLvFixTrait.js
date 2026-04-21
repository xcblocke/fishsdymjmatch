"use strict";
cc._RF.push(module, 'd1ed6hnFrpJwadDn9oUoWPW', 'GOInterAdNonLvFixTrait');
// subpackages/l_goInterAdNonLvFix/Scripts/GOInterAdNonLvFixTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GOInterAdNonLvFixTrait = /** @class */ (function (_super) {
    __extends(GOInterAdNonLvFixTrait, _super);
    function GOInterAdNonLvFixTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GOInterAdNonLvFixTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GOInterAdNonLvFixTrait.prototype.onGOInterAd_isBlocked = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
            r();
        }
        else {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
    };
    GOInterAdNonLvFixTrait.traitKey = "GOInterAdNonLvFix";
    GOInterAdNonLvFixTrait = __decorate([
        mj.trait,
        mj.class("GOInterAdNonLvFixTrait")
    ], GOInterAdNonLvFixTrait);
    return GOInterAdNonLvFixTrait;
}(Trait_1.default));
exports.default = GOInterAdNonLvFixTrait;

cc._RF.pop();
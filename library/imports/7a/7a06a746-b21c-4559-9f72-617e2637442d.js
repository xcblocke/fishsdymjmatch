"use strict";
cc._RF.push(module, '7a06adGshxFWZ9yYX4mN0Qt', 'InterAdCdStartResetTrait');
// subpackages/l_interAdCDStartReset/Scripts/InterAdCdStartResetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdCdStartResetTrait = /** @class */ (function (_super) {
    __extends(InterAdCdStartResetTrait, _super);
    function InterAdCdStartResetTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InterAdCdStartResetTrait.prototype.onInterAdCD_initPlayTime = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            t.args[0] = 0;
            e();
        }
        else
            e();
    };
    InterAdCdStartResetTrait.traitKey = "InterAdCDStartReset";
    InterAdCdStartResetTrait = __decorate([
        mj.trait,
        mj.class("InterAdCdStartResetTrait")
    ], InterAdCdStartResetTrait);
    return InterAdCdStartResetTrait;
}(Trait_1.default));
exports.default = InterAdCdStartResetTrait;

cc._RF.pop();
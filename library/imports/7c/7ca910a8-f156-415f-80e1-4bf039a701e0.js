"use strict";
cc._RF.push(module, '7ca91Co8VZBX4DhS/A5pwHg', 'BadgeRewardNotCloseTrait');
// subpackages/l_badgeRewardNotClose/Scripts/BadgeRewardNotCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BadgeRewardNotCloseTrait = /** @class */ (function (_super) {
    __extends(BadgeRewardNotCloseTrait, _super);
    function BadgeRewardNotCloseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeRewardNotCloseTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BadgeRewardNotCloseTrait.prototype.onDailyRewardVv_autoClose = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: false
        });
    };
    BadgeRewardNotCloseTrait.traitKey = "BadgeRewardNotClose";
    BadgeRewardNotCloseTrait = __decorate([
        mj.trait,
        mj.class("BadgeRewardNotCloseTrait")
    ], BadgeRewardNotCloseTrait);
    return BadgeRewardNotCloseTrait;
}(Trait_1.default));
exports.default = BadgeRewardNotCloseTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '62999LEby5GA6JxrRsuuf+V', 'FixBgmMuteOnBackToHallTrait');
// subpackages/l_fixBgmMuteOnBackToHall/Scripts/FixBgmMuteOnBackToHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FixBgmMuteOnBackToHallTrait = /** @class */ (function (_super) {
    __extends(FixBgmMuteOnBackToHallTrait, _super);
    function FixBgmMuteOnBackToHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixBgmMuteOnBackToHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixBgmMuteOnBackToHallTrait.prototype.onStopAudio_clearCallbacks = function (t, e) {
        false === UserModel_1.default.getInstance().isMusicEnabled() && mj.audioManager.setBGMMuted(true);
        e();
    };
    FixBgmMuteOnBackToHallTrait.traitKey = "FixBgmMuteOnBackToHall";
    FixBgmMuteOnBackToHallTrait = __decorate([
        mj.trait,
        mj.class("FixBgmMuteOnBackToHallTrait")
    ], FixBgmMuteOnBackToHallTrait);
    return FixBgmMuteOnBackToHallTrait;
}(Trait_1.default));
exports.default = FixBgmMuteOnBackToHallTrait;

cc._RF.pop();
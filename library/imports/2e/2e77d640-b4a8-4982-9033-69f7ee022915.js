"use strict";
cc._RF.push(module, '2e77dZAtKhJgpAzaffuAikV', 'StopAudioOnBackToHallTrait');
// subpackages/l_stopAudioOnBackToHall/Scripts/StopAudioOnBackToHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StopAudioOnBackToHallTrait = /** @class */ (function (_super) {
    __extends(StopAudioOnBackToHallTrait, _super);
    function StopAudioOnBackToHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StopAudioOnBackToHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StopAudioOnBackToHallTrait.prototype.stopAllAudioAndClearCallbacks = function () {
        mj.audioManager.stopAllEffect();
    };
    StopAudioOnBackToHallTrait.prototype.onMainGameBtnBack_onClick = function (t, o) {
        this.stopAllAudioAndClearCallbacks();
        o();
    };
    StopAudioOnBackToHallTrait.prototype.onUISetBtnBack_onBtnClk = function (t, o) {
        this.stopAllAudioAndClearCallbacks();
        o();
    };
    StopAudioOnBackToHallTrait.traitKey = "StopAudioOnBackToHall";
    __decorate([
        mj.traitEvent("StopAudio_clearCallbacks")
    ], StopAudioOnBackToHallTrait.prototype, "stopAllAudioAndClearCallbacks", null);
    StopAudioOnBackToHallTrait = __decorate([
        mj.trait,
        mj.class("StopAudioOnBackToHallTrait")
    ], StopAudioOnBackToHallTrait);
    return StopAudioOnBackToHallTrait;
}(Trait_1.default));
exports.default = StopAudioOnBackToHallTrait;

cc._RF.pop();
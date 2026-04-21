"use strict";
cc._RF.push(module, '1abb69SSb5JGapcwiOkCyKt', 'RemovePersonSoundTrait');
// subpackages/l_removePersonSound/Scripts/RemovePersonSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RemovePersonSoundTrait = /** @class */ (function (_super) {
    __extends(RemovePersonSoundTrait, _super);
    function RemovePersonSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemovePersonSoundTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RemovePersonSoundTrait.prototype.onMotivWordsBhv_playSound = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    RemovePersonSoundTrait.prototype.onRwdComboBhv_bonusAud = function (t, e) {
        mj.audioManager.pauseBGM();
        var r = t.ins;
        r.context.applauseAudioId = -1;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Applause, true).then(function (t) {
            r.context.applauseAudioId = t;
        });
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RemovePersonSoundTrait.traitKey = "RemovePersonSound";
    RemovePersonSoundTrait = __decorate([
        mj.trait,
        mj.class("RemovePersonSoundTrait")
    ], RemovePersonSoundTrait);
    return RemovePersonSoundTrait;
}(Trait_1.default));
exports.default = RemovePersonSoundTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '85b5bNH/5BHQqDml73x7t8D', 'DisableShuffleAudioTrait');
// subpackages/l_disableShuffleAudio/Scripts/DisableShuffleAudioTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DisableShuffleAudioTrait = /** @class */ (function (_super) {
    __extends(DisableShuffleAudioTrait, _super);
    function DisableShuffleAudioTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisableShuffleAudioTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DisableShuffleAudioTrait.prototype.onShuffleBhv_playAud = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    DisableShuffleAudioTrait.prototype.onStackShfBhv_playAud = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    DisableShuffleAudioTrait.prototype.onSpiralShfBhv_playAud = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    DisableShuffleAudioTrait.traitKey = "DisableShuffleAudio";
    DisableShuffleAudioTrait = __decorate([
        mj.trait,
        mj.class("DisableShuffleAudioTrait")
    ], DisableShuffleAudioTrait);
    return DisableShuffleAudioTrait;
}(Trait_1.default));
exports.default = DisableShuffleAudioTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '98539ks2PhAAY8qRrlWZVDU', 'CardClickSoundTrait');
// subpackages/r_cardClickSound/Scripts/CardClickSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var CardClickSoundTrait = /** @class */ (function (_super) {
    __extends(CardClickSoundTrait, _super);
    function CardClickSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardClickSoundTrait_1 = CardClickSoundTrait;
    CardClickSoundTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardClickSoundTrait.prototype.onAudioMgr_playEff = function (t, r) {
        var o = t.args[0];
        o !== GameTypeEnums_1.EAudioID.Check1 && o !== GameTypeEnums_1.EAudioID.Uncheck || (t.args[0] = CardClickSoundTrait_1.REPLACEMENT_AUDIO_ID);
        r();
    };
    var CardClickSoundTrait_1;
    CardClickSoundTrait.traitKey = "CardClickSound";
    CardClickSoundTrait.REPLACEMENT_AUDIO_ID = 75;
    CardClickSoundTrait = CardClickSoundTrait_1 = __decorate([
        mj.trait,
        mj.class("CardClickSoundTrait")
    ], CardClickSoundTrait);
    return CardClickSoundTrait;
}(Trait_1.default));
exports.default = CardClickSoundTrait;

cc._RF.pop();
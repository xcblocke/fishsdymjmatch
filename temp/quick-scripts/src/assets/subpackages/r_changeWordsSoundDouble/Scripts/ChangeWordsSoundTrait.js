"use strict";
cc._RF.push(module, 'b8fddKB7ZtPkpdpvbo6+MCl', 'ChangeWordsSoundTrait');
// subpackages/r_changeWordsSoundDouble/Scripts/ChangeWordsSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var i;
(function (i) {
    i[i["Good"] = 76] = "Good";
    i[i["Great"] = 77] = "Great";
    i[i["Excellent"] = 78] = "Excellent";
    i[i["Amazing"] = 79] = "Amazing";
    i[i["Unbelievable"] = 80] = "Unbelievable";
    i[i["Good2"] = 81] = "Good2";
    i[i["Great2"] = 82] = "Great2";
    i[i["Excellent2"] = 83] = "Excellent2";
    i[i["Amazing2"] = 84] = "Amazing2";
    i[i["Unbelievable2"] = 85] = "Unbelievable2";
})(i || (i = {}));
var ChangeWordsSoundTrait = /** @class */ (function (_super) {
    __extends(ChangeWordsSoundTrait, _super);
    function ChangeWordsSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeWordsSoundTrait_1 = ChangeWordsSoundTrait;
    ChangeWordsSoundTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeWordsSoundTrait.prototype.onMotivWordsBhv_playSound = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    ChangeWordsSoundTrait.prototype.onTravelMWords_playAudio = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    ChangeWordsSoundTrait.prototype.handleAudioReplacement = function (e, t) {
        var n = e.args[0], o = UserModel_1.default.getInstance(), a = o.getCurrentGameType(), i = o.getManGameTypes(), l = (i && i.includes(a) ? ChangeWordsSoundTrait_1.maleSoundIdArr : ChangeWordsSoundTrait_1.femaleSoundIdArr)[n];
        if (l && mj.audioManager) {
            mj.audioManager.playEffect(l, false);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    var ChangeWordsSoundTrait_1;
    ChangeWordsSoundTrait.traitKey = "ChangeWordsSound";
    ChangeWordsSoundTrait.femaleSoundIdArr = [i.Good, i.Great, i.Excellent, i.Amazing, i.Unbelievable];
    ChangeWordsSoundTrait.maleSoundIdArr = [i.Good2, i.Great2, i.Excellent2, i.Amazing2, i.Unbelievable2];
    ChangeWordsSoundTrait = ChangeWordsSoundTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeWordsSoundTrait")
    ], ChangeWordsSoundTrait);
    return ChangeWordsSoundTrait;
}(Trait_1.default));
exports.default = ChangeWordsSoundTrait;

cc._RF.pop();
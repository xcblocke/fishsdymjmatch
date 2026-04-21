"use strict";
cc._RF.push(module, '49640o+EIBPt5juwrEbv9Q+', 'MotivationWordsManTrait');
// subpackages/l_motivationWordsMan/Scripts/MotivationWordsManTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var i;
(function (i) {
    i[i["Good"] = 57] = "Good";
    i[i["Great"] = 58] = "Great";
    i[i["Excellent"] = 59] = "Excellent";
    i[i["Amazing"] = 60] = "Amazing";
    i[i["Unbelievable"] = 61] = "Unbelievable";
})(i || (i = {}));
var MotivationWordsManTrait = /** @class */ (function (_super) {
    __extends(MotivationWordsManTrait, _super);
    function MotivationWordsManTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationWordsManTrait_1 = MotivationWordsManTrait;
    MotivationWordsManTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var t = this._traitData.gameTypes, r = void 0 === t ? [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge] : t;
        UserModel_1.default.getInstance().setManGameTypes(r);
    };
    MotivationWordsManTrait.prototype.onMotivWordsBhv_playSound = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    MotivationWordsManTrait.prototype.onTravelMWords_playAudio = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    MotivationWordsManTrait.prototype.handleAudioReplacement = function (e, t) {
        var a = this._traitData.gameTypes, o = void 0 === a ? [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge] : a, n = UserModel_1.default.getInstance().getCurrentGameType();
        if (o.includes(n)) {
            var i = e.args[0], s = MotivationWordsManTrait_1.soundNameArr[i];
            if (s && mj.audioManager) {
                mj.audioManager.playEffect(s, false);
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    var MotivationWordsManTrait_1;
    MotivationWordsManTrait.traitKey = "MotivationWordsMan";
    MotivationWordsManTrait.bundleName = "l_motivationWordsMan";
    MotivationWordsManTrait.soundNameArr = [i.Good, i.Great, i.Excellent, i.Amazing, i.Unbelievable];
    MotivationWordsManTrait = MotivationWordsManTrait_1 = __decorate([
        mj.trait,
        mj.class("MotivationWordsManTrait")
    ], MotivationWordsManTrait);
    return MotivationWordsManTrait;
}(Trait_1.default));
exports.default = MotivationWordsManTrait;

cc._RF.pop();
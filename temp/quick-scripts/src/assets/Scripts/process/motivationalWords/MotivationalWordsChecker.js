"use strict";
cc._RF.push(module, '496d5tk4jZKRpfo6Dph2OY8', 'MotivationalWordsChecker');
// Scripts/process/motivationalWords/MotivationalWordsChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MotivationalWordsChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var MotivationalWordsEffect_1 = require("../../MotivationalWordsEffect");
var MotivationalWordsChecker = /** @class */ (function (_super) {
    __extends(MotivationalWordsChecker, _super);
    function MotivationalWordsChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationalWordsChecker.prototype.canShowMotivationalWords = function () {
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return {
                isShow: false,
                index: 0
            };
        var e = this.context.getGameData().getComboNum(), t = false, o = 0, n = this.getTrigMult();
        if (e % n == 0 && e > 0) {
            t = true;
            var i = MotivationalWordsEffect_1.MotivationalWordsEffect.soundNameArr.length - 1, r = Math.floor(e / n) - 1;
            o = Math.min(r, i);
        }
        return {
            isShow: t,
            index: o
        };
    };
    MotivationalWordsChecker.prototype.getTrigMult = function () {
        return 3;
    };
    __decorate([
        mj.traitEvent("MotivWdsChk_canShow")
    ], MotivationalWordsChecker.prototype, "canShowMotivationalWords", null);
    __decorate([
        mj.traitEvent("MotivWdsChk_trigMult")
    ], MotivationalWordsChecker.prototype, "getTrigMult", null);
    return MotivationalWordsChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.MotivationalWordsChecker = MotivationalWordsChecker;

cc._RF.pop();
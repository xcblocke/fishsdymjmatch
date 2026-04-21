"use strict";
cc._RF.push(module, '5be67IJjMREzY7g1ywTKm9x', 'InputEnterAnimation');
// Scripts/input/InputEnterAnimation.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EnterAnimationEffect_1 = require("../EnterAnimationEffect");
var DailyChallengeDateEffect_1 = require("../DailyChallengeDateEffect");
var UpdateLevelEffect_1 = require("../UpdateLevelEffect");
var UpdateMatchNumEffect_1 = require("../UpdateMatchNumEffect");
var UpdateScoreEffect_1 = require("../UpdateScoreEffect");
var InputBase_1 = require("../inputbase/InputBase");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputEnterAnimation = /** @class */ (function (_super) {
    __extends(InputEnterAnimation, _super);
    function InputEnterAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputEnterAnimation.prototype.excute = function () {
        UserModel_1.default.getInstance().isGuideFinished() && this.pushEnterAnimationEffect();
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.DailyChallenge) {
            this.pushUpdateDailyChallengeDateEffect();
            this.pushUpdateScoreEffect();
        }
        else if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Travel)
            this.pushInitCollectTargetEffect();
        else {
            this.pushUpdateScoreEffect();
            this.pushUpdateLevelEffect();
        }
    };
    InputEnterAnimation.prototype.pushInitCollectTargetEffect = function () { };
    InputEnterAnimation.prototype.pushUpdateDailyChallengeDateEffect = function () {
        var e = new DailyChallengeDateEffect_1.DailyChallengeDateEffect({
            date: this.gameContext.getGameData().getDailyChallengeTimestamp()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputEnterAnimation.prototype.pushUpdateLevelEffect = function () {
        var e = new UpdateLevelEffect_1.UpdateLevelEffect({
            level: this.gameContext.getGameData().getLevelId()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputEnterAnimation.prototype.pushEnterAnimationEffect = function () {
        var e = new EnterAnimationEffect_1.EnterAnimationEffect({
            cardLayoutConfig: this.gameContext.getCardLayoutConfig()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root, null, true);
    };
    InputEnterAnimation.prototype.pushUpdateScoreEffect = function () {
        var e = this.gameContext.getGameData(), t = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: 0,
            targetScore: e.getScore(),
            isShowCombo: false
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputEnterAnimation.prototype.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this.gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptEnterAni_excute")
    ], InputEnterAnimation.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptEnterAni_pushColTag")
    ], InputEnterAnimation.prototype, "pushInitCollectTargetEffect", null);
    return InputEnterAnimation;
}(InputBase_1.InputBase));
exports.default = InputEnterAnimation;

cc._RF.pop();
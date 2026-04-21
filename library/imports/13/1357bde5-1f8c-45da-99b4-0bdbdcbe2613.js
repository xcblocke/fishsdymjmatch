"use strict";
cc._RF.push(module, '1357b3lH4xF2pm0C9vcviYT', 'InputEnterAnimationFinish');
// Scripts/input/InputEnterAnimationFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var InitCollectTargetEffect_1 = require("../InitCollectTargetEffect");
var EnterAnimationFinishEffect_1 = require("../EnterAnimationFinishEffect");
var InputBase_1 = require("../inputbase/InputBase");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
var InputEnterAnimationFinish = /** @class */ (function (_super) {
    __extends(InputEnterAnimationFinish, _super);
    function InputEnterAnimationFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputEnterAnimationFinish.prototype.excute = function () {
        this.pushEnterAnimationFinishEffect();
        this.gameContext.gameType === GameTypeEnums_1.MjGameType.Travel && this.pushInitCollectTargetEffect();
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Classic) {
            this.showFailView();
        }
        else {
            this.checkDeadlockAndShuffle();
        }
    };
    InputEnterAnimationFinish.prototype.showFailView = function () {
        if (this.tileMapObject.checkIsDead([])) {
            this.gameContext.gameModifier.modifyClassicEnd();
            this.pushClassicBeforeFailEffect();
            this.pushFailEffect({
                skipInterAd: true
            });
        }
    };
    InputEnterAnimationFinish.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputEnterAnimationFinish.prototype.pushFailEffect = function (e) {
        var t = new ClassicFailEffect_1.ClassicFailEffect({
            skipInterAd: null == e ? void 0 : e.skipInterAd
        });
        return this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    InputEnterAnimationFinish.prototype.pushEnterAnimationFinishEffect = function () {
        var e = new EnterAnimationFinishEffect_1.EnterAnimationFinishEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Serial);
    };
    InputEnterAnimationFinish.prototype.pushInitCollectTargetEffect = function () {
        var e, t, o = null === (t = null === (e = this.gameContext) || void 0 === e ? void 0 : e.getTileMapObject()) || void 0 === t ? void 0 : t.collectSystem;
        if (o) {
            var n = new InitCollectTargetEffect_1.InitCollectTargetEffect({
                collectDetails: o.getAllCollectDetails()
            });
            this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    InputEnterAnimationFinish.prototype.checkDeadlockAndShuffle = function () {
        var e = this.gameContext.getIsNewGame(), t = this.gameContext.getIsRestart();
        if (!e && !t && this.tileMapObject.checkIsDead([])) {
            var o = {
                inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
                from: GameInputEnum_1.EShuffleFrom.Free,
                isFree: true
            };
            this.gameSimulator.input(o);
        }
    };
    __decorate([
        mj.traitEvent("IptEnterAniFin_excute")
    ], InputEnterAnimationFinish.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptEnterAniFin_pushColTag")
    ], InputEnterAnimationFinish.prototype, "pushInitCollectTargetEffect", null);
    return InputEnterAnimationFinish;
}(InputBase_1.InputBase));
exports.default = InputEnterAnimationFinish;

cc._RF.pop();
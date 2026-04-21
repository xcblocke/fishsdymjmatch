"use strict";
cc._RF.push(module, '434a3QFhfpPfbM/B8cmcySi', 'InputSkipAutoMerge');
// Scripts/input/InputSkipAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var BeforeEndEffect_1 = require("../BeforeEndEffect");
var BeforeDailyChallengeEndEffect_1 = require("../BeforeDailyChallengeEndEffect");
var CleanViewEffect_1 = require("../CleanViewEffect");
var DailyChallengeEndEffect_1 = require("../DailyChallengeEndEffect");
var EndEffect_1 = require("../EndEffect");
var SkipAutoMergeEffect_1 = require("../SkipAutoMergeEffect");
var TravelEndEffect_1 = require("../TravelEndEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputSkipAutoMerge = /** @class */ (function (_super) {
    __extends(InputSkipAutoMerge, _super);
    function InputSkipAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputSkipAutoMerge.prototype.excute = function (e) {
        var t = this, o = this.gameContext.getTileMapObject(), n = (this.gameContext.getGameData(), o.unselectAllTileIds());
        n && n.length > 0 && n.forEach(function (e) {
            t.pushSelectEffect(e, true);
        });
        var i = new SkipAutoMergeEffect_1.SkipAutoMergeEffect({
            type: e.type
        });
        this.pushEffect(i, BehaviorsEnum_1.EInsertType.Root);
        var l = o.getAllCardTiles(), s = l.length;
        if (0 !== s) {
            for (var c = Math.floor(s / 2), p = 0; p < c; p++) {
                this.gameContext.comboModifier.addCombo(1);
                this.gameContext.scoreModifier.calAddScore();
            }
            var f = [];
            l.forEach(function (e) {
                if (e.isValid) {
                    e.isValid = false;
                    f.push(e);
                }
            });
            o.onClear(f);
            var h = new CleanViewEffect_1.CleanViewEffect({});
            this.pushEffect(h, BehaviorsEnum_1.EInsertType.Parallel);
            o.updateCanMatchTiles();
            this.finishSkipAndWin(e);
            mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_SkipAutoMerge, this);
        }
    };
    InputSkipAutoMerge.prototype.finishSkipAndWin = function () {
        var e = this.gameController.gameTimeData.time, t = this.gameContext.gameType;
        this.gameContext.getGameData().updateAvgClearIntervals();
        if (t === GameTypeEnums_1.MjGameType.DailyChallenge) {
            this.gameContext.gameModifier.modifyWinForDailyChallenge(e);
            var o = this.pushBeforeDailyChallengeEndEffect();
            this.pushDailyChallengeEndEffect(o);
        }
        else if (t === GameTypeEnums_1.MjGameType.Travel) {
            this.gameContext.gameModifier.modifyWinForTravel(e);
            this.pushTravelEndEffect();
        }
        else {
            this.gameContext.gameModifier.modifyWin(e);
            o = this.pushBeforeEndEffect();
            this.pushNormalEndEffect(o);
        }
    };
    InputSkipAutoMerge.prototype.pushBeforeEndEffect = function () {
        var e = new BeforeEndEffect_1.BeforeEndEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputSkipAutoMerge.prototype.pushNormalEndEffect = function (e) {
        var t = this.gameContext.getGameData(), o = new EndEffect_1.EndEffect({
            score: t.getScore(),
            settlementScore: t.getSettlementScore(),
            perfectMaxScore: this.gameContext.scoreModifier.getPerfectMaxScore(),
            curLv: t.getLevelId()
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId, false);
    };
    InputSkipAutoMerge.prototype.pushBeforeDailyChallengeEndEffect = function () {
        var e = new BeforeDailyChallengeEndEffect_1.BeforeDailyChallengeEndEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputSkipAutoMerge.prototype.pushDailyChallengeEndEffect = function (e) {
        var t = this.gameContext.getGameData(), o = new DailyChallengeEndEffect_1.DailyChallengeEndEffect({
            score: t.getScore(),
            settlementScore: t.getSettlementScore(),
            perfectMaxScore: this.gameContext.scoreModifier.getPerfectMaxScore(),
            challengeDate: t.getDailyChallengeTimestamp()
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId);
    };
    InputSkipAutoMerge.prototype.pushTravelEndEffect = function () {
        var e, t, o, n = this.gameContext.getGameData(), i = null !== (o = null === (t = null === (e = this.gameContext.getTileMapObject()) || void 0 === e ? void 0 : e.collectSystem) || void 0 === t ? void 0 : t.getAllCollectDetails()) && void 0 !== o ? o : [], a = new TravelEndEffect_1.TravelEndEffect({
            curLv: n.getLevelId(),
            collects: i
        });
        this.pushEffect(a, BehaviorsEnum_1.EInsertType.Parallel);
    };
    return InputSkipAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputSkipAutoMerge;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearDailyChallengeHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ec3dLZ9sxOsJTVrpS9sQ+Q', 'ClearDailyChallengeHelper');
// Scripts/ClearDailyChallengeHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var BlockInputRefEffect_1 = require("./BlockInputRefEffect");
var BombEffect_1 = require("./BombEffect");
var ClearEffectEffect_1 = require("./ClearEffectEffect");
var ComboEffect_1 = require("./ComboEffect");
var BeforeDailyChallengeEndEffect_1 = require("./BeforeDailyChallengeEndEffect");
var DailyChallengeEndEffect_1 = require("./DailyChallengeEndEffect");
var DaxiaoClearEffectEffect_1 = require("./DaxiaoClearEffectEffect");
var DaxiaoClearTipEffect_1 = require("./DaxiaoClearTipEffect");
var DuoxiaoComboEffect_1 = require("./DuoxiaoComboEffect");
var EmptyEffect_1 = require("./EmptyEffect");
var FailEffect_1 = require("./FailEffect");
var FullComboEffect_1 = require("./FullComboEffect");
var HitTipsEffect_1 = require("./HitTipsEffect");
var MotivationalWordsEffect_1 = require("./MotivationalWordsEffect");
var MotivationalWordsEffectEffect_1 = require("./MotivationalWordsEffectEffect");
var RewardComboEffect_1 = require("./RewardComboEffect");
var ScoreFlotEffect_1 = require("./ScoreFlotEffect");
var UpdateMatchNumEffect_1 = require("./UpdateMatchNumEffect");
var UpdateScoreEffect_1 = require("./UpdateScoreEffect");
var ClearDailyChallengeHelper = /** @class */ (function () {
    function ClearDailyChallengeHelper() {
    }
    ClearDailyChallengeHelper.modifyClear = function () {
        return this._gameContext.clearModifier.modifyClear(this._input);
    };
    ClearDailyChallengeHelper.updateCanMatchTiles = function () {
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearDailyChallengeHelper.addCombo = function (e) {
        if (e === void 0) { e = 1; }
        this._gameContext.comboModifier.addCombo(e);
    };
    ClearDailyChallengeHelper.calAddScore = function () {
        return this._gameContext.scoreModifier.calAddScore();
    };
    ClearDailyChallengeHelper.modifyClearHitTips = function (e) {
        return this._gameContext.gameModifier.modifyClearHitTips(e[0], e[1]);
    };
    ClearDailyChallengeHelper.canShowCombo = function () {
        return this._gameContext.comboChecker.canShowCombo();
    };
    ClearDailyChallengeHelper.getComboNum = function () {
        return this._gameContext.getGameData().getComboNum();
    };
    ClearDailyChallengeHelper.getDaxiaoCardMathInfos = function (e) {
        var t = this._gameContext.daxiaoChecker.getCanClearDaxiaoCardInfos(e);
        if (t && t.length > 0)
            return t;
    };
    ClearDailyChallengeHelper.parseDaxiao = function (e) {
        this._gameContext.daxiaoModifier.modifyDaxiaoCard(this._input, e);
        return {
            combo: e.length
        };
    };
    ClearDailyChallengeHelper.runClear = function (e, t, o) {
        this._gameContext = e;
        this._input = t;
        this._baseInput = o;
        var n = this.modifyClear();
        this.updateCanMatchTiles();
        this.addCombo(1);
        var r = this.getDaxiaoCardMathInfos(n);
        if (r) {
            var l = this.parseDaxiao(r).combo;
            this.addCombo(l);
        }
        var s = this.calAddScore(), c = __read(this.modifyClearHitTips(n), 2), u = c[0], p = c[1], f = this.canShowCombo(), d = this.getComboNum(), h = false, y = false, m = false;
        if (t.inputType === GameInputEnum_1.EGameInputEnum.AutoMerge) {
            h = this._gameContext.getGameData().getHasTriggeredFullCombo();
            y = this._gameContext.getGameData().getHasTriggeredRewardCombo();
        }
        else {
            (m = this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(n)) || (h = this._gameContext.fullComboChecker.canFullCombo());
            m && this.parseDuoxiaoCard(n);
        }
        this._options = {
            input: t,
            tileIds: n,
            addScore: s,
            showCombo: f,
            comboNum: d,
            isShowMotivationalWords: false,
            indexMotivationalWords: 0,
            isShowFullCombo: h,
            isShowRewardCombo: y,
            isShowDuoxiaoCombo: m,
            clearHit: u,
            hideHitIds: p,
            daxiaoCardMatchInfos: r
        };
        this.pushClearEffects();
    };
    ClearDailyChallengeHelper.pushDaxiaoClearEffectEffect = function (e) {
        var t = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearDailyChallengeHelper.pushEmptyEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "Empty"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearDailyChallengeHelper.pushDaxiaoClearTipEffect = function () {
        var e = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: this._options.daxiaoCardMatchInfos
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.parseDuoxiaoCard = function (e) {
        var t = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(e);
        if (!t)
            return false;
        this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(t.count);
        return true;
    };
    ClearDailyChallengeHelper.pushClearEffects = function () {
        this.tryPushClearHitTipsEffect();
        var e = this._baseInput.pushClearEffect(this._options.tileIds[0], this._options.tileIds[1], this._options.isShowRewardCombo, this._options.isShowFullCombo);
        this._options.daxiaoCardMatchInfos && this.pushDaxiaoClearTipEffect();
        this._options.clearEffectOptions = e;
        this._options.isShowDuoxiaoCombo && this.pushBlockInputRefEffect(true, "duoxiaoComboStart");
        if (this._options.daxiaoCardMatchInfos) {
            this.pushDaxiaoClearEffectEffect(this._options.daxiaoCardMatchInfos);
            this.pushClearEffectEffect();
            this.pushEmptyEffect();
        }
        this.pushAfterClearEffect();
        this._options.daxiaoCardMatchInfos || this.pushClearEffectEffect();
        this.parseBombCard();
        this.pushUpdateMatchNumEffect(), this.tryShowMotivationalWords();
        this.pushScoreFlotEffect();
        this.tryExcuteShowCombo();
        this.tryExcuteRewardCombo();
        this.tryExcuteFullCombo();
        this.tryExcuteDuoxiaoCombo();
        this.tryExcuteEnd();
        this.pushClearBehaviorFinishEffect();
    };
    ClearDailyChallengeHelper.tryPushClearHitTipsEffect = function () {
        if (this._options.clearHit && this._options.hideHitIds && this._options.hideHitIds.length > 0)
            return this.pushClearHitTipsEffect(this._options.hideHitIds);
    };
    ClearDailyChallengeHelper.pushClearHitTipsEffect = function (e) {
        var t = new HitTipsEffect_1.HitTipsEffect({
            isClearHit: true,
            tileId1: e[0] || "",
            tileId2: e[1] || ""
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.pushAfterClearEffect = function () {
        var e = this._options.tileIds[0], t = this._options.tileIds[1], o = new EmptyEffect_1.EmptyEffect({
            inputType: GameInputEnum_1.EGameInputEnum.TouchStart,
            name: "touchStart"
        }), n = this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Root), i = {
            lastEffectId: n.lastEffectId,
            newEffectId: n.newEffectId,
            tileId: e,
            lastTileId: t,
            options: this._options
        };
        this._baseInput.dispatchClearAfterEvent(i);
        return n;
    };
    ClearDailyChallengeHelper.pushClearEffectEffect = function () {
        var e = this._options.tileIds[0], t = this._options.tileIds[1], o = new ClearEffectEffect_1.ClearEffectEffect({
            tileId: e,
            lastTileId: t
        });
        return this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.parseBombCard = function () {
        var e = this, t = null, o = function o(n) {
            var i = e._gameContext.tileTypeChecker.parseBombCard(n);
            if (i) {
                t || (t = e._baseInput.pushParallerEffect().newEffectId);
                var a = e.getDaxiaoCardMathInfos(i.bombIds);
                if (a) {
                    var c = e.parseDaxiao(a).combo;
                    e.addCombo(c);
                }
                var p = e._gameContext.tileTypesModifier.modifyBombCard(e._input, i.bombIds), f = p.addScore, v = p.combo, g = p.showCombo, _ = new BombEffect_1.BombEffect({
                    pos1: i.pos1,
                    pos2: i.pos2,
                    bombIds: i.bombIds
                }), T = e._baseInput.pushEffect(_, BehaviorsEnum_1.EInsertType.Serial, t, false).newEffectId;
                if (a) {
                    var C = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
                        tileIds: e._options.tileIds,
                        finalMatchInfos: a
                    });
                    e._baseInput.pushEffect(C, BehaviorsEnum_1.EInsertType.Serial, T, false);
                    var b = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
                        tileIds: e._options.tileIds,
                        finalMatchInfos: a
                    });
                    e._baseInput.pushEffect(b, BehaviorsEnum_1.EInsertType.Serial, T, false);
                }
                var S = e._gameContext.duoxiaoChecker.isHasDuoxiaoCard(i.bombIds), w = e._gameContext.duoxiaoChecker.isInDuoxiaoCombo();
                if (S) {
                    e.parseDuoxiaoCard(i.bombIds);
                    if (!w) {
                        var B = new BlockInputRefEffect_1.BlockInputRefEffect({
                            block: true,
                            from: "bombDuoxiao"
                        });
                        e._baseInput.pushEffect(B, BehaviorsEnum_1.EInsertType.Serial, T, false);
                    }
                }
                var x = new EmptyEffect_1.EmptyEffect({
                    inputType: e._input.inputType,
                    name: "BombParallelGroup"
                }), M = e._baseInput.pushEffect(x, BehaviorsEnum_1.EInsertType.Serial, T, false).newEffectId, O = new ScoreFlotEffect_1.ScoreFlotEffect({
                    tileId: i.bombIds[0],
                    lastTileId: i.bombIds[1],
                    isCombo: g,
                    addScore: f,
                    size: e._gameContext.getTileMapObject().getTileObject(i.bombIds[0]).getContentSize()
                }), D = e._baseInput.pushEffect(O, BehaviorsEnum_1.EInsertType.Parallel, M).newEffectId, P = e._gameContext.getGameData(), A = new UpdateScoreEffect_1.UpdateScoreEffect({
                    addScore: f,
                    targetScore: P.getScore(),
                    isShowCombo: g
                });
                e._baseInput.pushEffect(A, BehaviorsEnum_1.EInsertType.Serial, D, false);
                if (g) {
                    var R = new ComboEffect_1.ComboEffect({
                        comboNum: v
                    });
                    e._baseInput.pushEffect(R, BehaviorsEnum_1.EInsertType.Parallel, M);
                }
                if (S && !w) {
                    if (e._gameContext.resultChecker.checkIsEndOrDead())
                        e._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
                    else {
                        var N = new DuoxiaoComboEffect_1.DuoxiaoComboEffect({
                            duoxiaoCount: e._gameContext.getDuoxiaoClearCount()
                        });
                        e._baseInput.pushEffect(N, BehaviorsEnum_1.EInsertType.Serial, T, false);
                    }
                    B = new BlockInputRefEffect_1.BlockInputRefEffect({
                        block: false,
                        from: "bombDuoxiaoComboEnd"
                    });
                    e._baseInput.pushEffect(B, BehaviorsEnum_1.EInsertType.Serial, T, false);
                }
                e._options.insertEndEffectId = M;
                e._options.insertEndEffectType = BehaviorsEnum_1.EInsertType.Serial;
                o(i.bombIds);
            }
        };
        o(this._options.tileIds);
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearDailyChallengeHelper.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this._gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.pushMotivationalWordsEffect = function (e, t, o, n) {
        var i = new MotivationalWordsEffect_1.MotivationalWordsEffect({
            index: e,
            comboNum: t,
            tileId1: o,
            tileId2: n
        });
        return this._baseInput.pushEffect(i, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.pushMotivationalWordsEffectEffect = function (e) {
        var t = new MotivationalWordsEffectEffect_1.MotivationalWordsEffectEffect({
            index: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.tryShowMotivationalWords = function () {
        if (this._options.isShowMotivationalWords) {
            this.pushMotivationalWordsEffect(this._options.indexMotivationalWords, this._gameContext.getGameData().getComboNum(), this._options.tileIds[1], this._options.tileIds[0]);
            return this.pushMotivationalWordsEffectEffect(this._options.indexMotivationalWords);
        }
    };
    ClearDailyChallengeHelper.pushScoreFlotEffect = function () {
        var e = this._options.tileIds[0], t = this._options.tileIds[1], o = this._options.showCombo, n = this._options.addScore, i = new ScoreFlotEffect_1.ScoreFlotEffect({
            tileId: e,
            lastTileId: t,
            isCombo: o,
            addScore: n,
            size: this._gameContext.getTileMapObject().getTileObject(e).getContentSize()
        }), a = this._baseInput.pushEffect(i, BehaviorsEnum_1.EInsertType.Parallel), l = (a.lastEffectId, a.newEffectId), s = this._gameContext.getGameData(), c = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: n,
            targetScore: s.getScore(),
            isShowCombo: o
        });
        return this._baseInput.pushEffect(c, BehaviorsEnum_1.EInsertType.Serial, l, false);
    };
    ClearDailyChallengeHelper.tryExcuteShowCombo = function () {
        this._options.showCombo && this.pushComboEffect(this._options.comboNum);
    };
    ClearDailyChallengeHelper.pushComboEffect = function (e) {
        var t = new ComboEffect_1.ComboEffect({
            comboNum: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.tryExcuteRewardCombo = function () {
        if (this._options.isShowRewardCombo) {
            var e = this._gameContext.getGameData();
            if (!e.getHasTriggeredRewardCombo()) {
                e.setHasTriggeredRewardCombo(true);
                return this.pushRewardComboEffect();
            }
        }
    };
    ClearDailyChallengeHelper.pushRewardComboEffect = function () {
        var e = new RewardComboEffect_1.RewardComboEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.tryExcuteFullCombo = function () {
        if (this._options.isShowFullCombo && !this._options.isShowRewardCombo) {
            var e = this._gameContext.getGameData();
            if (!e.getHasTriggeredFullCombo()) {
                e.setHasTriggeredFullCombo(true);
                return this.pushFullComboEffect();
            }
        }
    };
    ClearDailyChallengeHelper.tryExcuteDuoxiaoCombo = function () {
        if (this._options.isShowDuoxiaoCombo) {
            var e;
            if (this._gameContext.resultChecker.checkIsEndOrDead())
                this._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
            else {
                var t = new DuoxiaoComboEffect_1.DuoxiaoComboEffect({
                    duoxiaoCount: this._gameContext.getDuoxiaoClearCount()
                });
                e = this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
            }
            this.pushBlockInputRefEffect(false, "duoxiaoComboEnd");
            return e;
        }
    };
    ClearDailyChallengeHelper.pushFullComboEffect = function () {
        var e = new FullComboEffect_1.FullComboEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.tryExcuteEnd = function () {
        if (this._gameContext.resultChecker.checkResult()) {
            var e = this._gameContext.gameTimeData.time;
            this._gameContext.getGameData().updateAvgClearIntervals();
            this._gameContext.gameModifier.modifyWinForDailyChallenge(e);
            var t = this.pushBeforeDailyChallengeEndEffect();
            return this.pushDailyChallengeEndEffect(t);
        }
        this.shouldCheckFail(this._options.isShowFullCombo, this._options.isShowRewardCombo) && this.tryExcuteFail();
    };
    ClearDailyChallengeHelper.pushBeforeDailyChallengeEndEffect = function () {
        var e = new BeforeDailyChallengeEndEffect_1.BeforeDailyChallengeEndEffect({});
        return this._options.insertEndEffectId ? this._baseInput.pushEffect(e, this._options.insertEndEffectType, this._options.insertEndEffectId, false) : this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper.pushDailyChallengeEndEffect = function (e) {
        var t = new DailyChallengeEndEffect_1.DailyChallengeEndEffect({
            score: this._gameContext.getGameData().getScore(),
            settlementScore: this._gameContext.getGameData().getSettlementScore(),
            perfectMaxScore: this._gameContext.scoreModifier.getPerfectMaxScore(),
            challengeDate: this._gameContext.getGameData().getDailyChallengeTimestamp()
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId, false);
    };
    ClearDailyChallengeHelper.shouldCheckFail = function (e, t) {
        return !e && !t;
    };
    ClearDailyChallengeHelper.tryExcuteFail = function () {
        var e = this._options.tileIds || [];
        if (this._gameContext.getTileMapObject().checkIsDead(e))
            return this.pushFailEffect();
    };
    ClearDailyChallengeHelper.getPreShuffleData = function () {
        return null;
    };
    ClearDailyChallengeHelper.pushFailEffect = function () {
        var e = this._gameContext.getGameData(), t = new FailEffect_1.FailEffect({
            shuffleNum: e.getShuffleNums(),
            preShuffleData: this.getPreShuffleData()
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearDailyChallengeHelper.pushClearBehaviorFinishEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "ClearBehaviorFinish"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearDailyChallengeHelper.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearDailyChallengeHelper._gameContext = null;
    ClearDailyChallengeHelper._input = null;
    ClearDailyChallengeHelper._baseInput = null;
    ClearDailyChallengeHelper._options = null;
    __decorate([
        mj.traitEvent("ClrDailyHlp_shldChkFail")
    ], ClearDailyChallengeHelper, "shouldCheckFail", null);
    __decorate([
        mj.traitEvent("ClrDailyHlp_tryExcFail")
    ], ClearDailyChallengeHelper, "tryExcuteFail", null);
    __decorate([
        mj.traitEvent("ClrDailyHlp_getPreShf")
    ], ClearDailyChallengeHelper, "getPreShuffleData", null);
    __decorate([
        mj.traitEvent("ClrDailyHlp_pushClrFinish")
    ], ClearDailyChallengeHelper, "pushClearBehaviorFinishEffect", null);
    return ClearDailyChallengeHelper;
}());
exports.default = ClearDailyChallengeHelper;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFyRGFpbHlDaGFsbGVuZ2VIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF1RDtBQUN2RCxvRUFBb0U7QUFDcEUsNkRBQTREO0FBQzVELDJDQUEwQztBQUMxQyx5REFBd0Q7QUFDeEQsNkNBQTRDO0FBQzVDLGlGQUFnRjtBQUNoRixxRUFBb0U7QUFDcEUscUVBQW9FO0FBQ3BFLCtEQUE4RDtBQUM5RCwyREFBMEQ7QUFDMUQsNkNBQTRDO0FBQzVDLDJDQUEwQztBQUMxQyxxREFBb0Q7QUFDcEQsaURBQWdEO0FBQ2hELHFFQUFvRTtBQUNwRSxpRkFBZ0Y7QUFDaEYseURBQXdEO0FBQ3hELHFEQUFvRDtBQUNwRCwrREFBOEQ7QUFDOUQseURBQXdEO0FBQ3hEO0lBQUE7SUFrYUEsQ0FBQztJQTdaUSxxQ0FBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ00sNkNBQW1CLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUNNLGtDQUFRLEdBQWYsVUFBZ0IsQ0FBSztRQUFMLGtCQUFBLEVBQUEsS0FBSztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNNLHFDQUFXLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBQ00sNENBQWtCLEdBQXpCLFVBQTBCLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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OzREQUd0QztJQVVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQzt3RUFPMUM7SUFRSCxnQ0FBQztDQWxhRCxBQWthQyxJQUFBO2tCQWxhb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEJsb2NrSW5wdXRSZWZFZmZlY3QgfSBmcm9tICcuL0Jsb2NrSW5wdXRSZWZFZmZlY3QnO1xuaW1wb3J0IHsgQm9tYkVmZmVjdCB9IGZyb20gJy4vQm9tYkVmZmVjdCc7XG5pbXBvcnQgeyBDbGVhckVmZmVjdEVmZmVjdCB9IGZyb20gJy4vQ2xlYXJFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgQ29tYm9FZmZlY3QgfSBmcm9tICcuL0NvbWJvRWZmZWN0JztcbmltcG9ydCB7IEJlZm9yZURhaWx5Q2hhbGxlbmdlRW5kRWZmZWN0IH0gZnJvbSAnLi9CZWZvcmVEYWlseUNoYWxsZW5nZUVuZEVmZmVjdCc7XG5pbXBvcnQgeyBEYWlseUNoYWxsZW5nZUVuZEVmZmVjdCB9IGZyb20gJy4vRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3QnO1xuaW1wb3J0IHsgRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QgfSBmcm9tICcuL0RheGlhb0NsZWFyRWZmZWN0RWZmZWN0JztcbmltcG9ydCB7IERheGlhb0NsZWFyVGlwRWZmZWN0IH0gZnJvbSAnLi9EYXhpYW9DbGVhclRpcEVmZmVjdCc7XG5pbXBvcnQgeyBEdW94aWFvQ29tYm9FZmZlY3QgfSBmcm9tICcuL0R1b3hpYW9Db21ib0VmZmVjdCc7XG5pbXBvcnQgeyBFbXB0eUVmZmVjdCB9IGZyb20gJy4vRW1wdHlFZmZlY3QnO1xuaW1wb3J0IHsgRmFpbEVmZmVjdCB9IGZyb20gJy4vRmFpbEVmZmVjdCc7XG5pbXBvcnQgeyBGdWxsQ29tYm9FZmZlY3QgfSBmcm9tICcuL0Z1bGxDb21ib0VmZmVjdCc7XG5pbXBvcnQgeyBIaXRUaXBzRWZmZWN0IH0gZnJvbSAnLi9IaXRUaXBzRWZmZWN0JztcbmltcG9ydCB7IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0IH0gZnJvbSAnLi9Nb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCc7XG5pbXBvcnQgeyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEVmZmVjdCB9IGZyb20gJy4vTW90aXZhdGlvbmFsV29yZHNFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgUmV3YXJkQ29tYm9FZmZlY3QgfSBmcm9tICcuL1Jld2FyZENvbWJvRWZmZWN0JztcbmltcG9ydCB7IFNjb3JlRmxvdEVmZmVjdCB9IGZyb20gJy4vU2NvcmVGbG90RWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZU1hdGNoTnVtRWZmZWN0IH0gZnJvbSAnLi9VcGRhdGVNYXRjaE51bUVmZmVjdCc7XG5pbXBvcnQgeyBVcGRhdGVTY29yZUVmZmVjdCB9IGZyb20gJy4vVXBkYXRlU2NvcmVFZmZlY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJEYWlseUNoYWxsZW5nZUhlbHBlciB7XG4gIHN0YXRpYyBfZ2FtZUNvbnRleHQgPSBudWxsO1xuICBzdGF0aWMgX2lucHV0ID0gbnVsbDtcbiAgc3RhdGljIF9iYXNlSW5wdXQgPSBudWxsO1xuICBzdGF0aWMgX29wdGlvbnMgPSBudWxsO1xuICBzdGF0aWMgbW9kaWZ5Q2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmNsZWFyTW9kaWZpZXIubW9kaWZ5Q2xlYXIodGhpcy5faW5wdXQpO1xuICB9XG4gIHN0YXRpYyB1cGRhdGVDYW5NYXRjaFRpbGVzKCkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gIH1cbiAgc3RhdGljIGFkZENvbWJvKGUgPSAxKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQuY29tYm9Nb2RpZmllci5hZGRDb21ibyhlKTtcbiAgfVxuICBzdGF0aWMgY2FsQWRkU2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnNjb3JlTW9kaWZpZXIuY2FsQWRkU2NvcmUoKTtcbiAgfVxuICBzdGF0aWMgbW9kaWZ5Q2xlYXJIaXRUaXBzKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeUNsZWFySGl0VGlwcyhlWzBdLCBlWzFdKTtcbiAgfVxuICBzdGF0aWMgY2FuU2hvd0NvbWJvKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dC5jb21ib0NoZWNrZXIuY2FuU2hvd0NvbWJvKCk7XG4gIH1cbiAgc3RhdGljIGdldENvbWJvTnVtKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldENvbWJvTnVtKCk7XG4gIH1cbiAgc3RhdGljIGdldERheGlhb0NhcmRNYXRoSW5mb3MoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fZ2FtZUNvbnRleHQuZGF4aWFvQ2hlY2tlci5nZXRDYW5DbGVhckRheGlhb0NhcmRJbmZvcyhlKTtcbiAgICBpZiAodCAmJiB0Lmxlbmd0aCA+IDApIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBwYXJzZURheGlhbyhlKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQuZGF4aWFvTW9kaWZpZXIubW9kaWZ5RGF4aWFvQ2FyZCh0aGlzLl9pbnB1dCwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbWJvOiBlLmxlbmd0aFxuICAgIH07XG4gIH1cbiAgc3RhdGljIHJ1bkNsZWFyKGUsIHQsIG8pIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dCA9IGU7XG4gICAgdGhpcy5faW5wdXQgPSB0O1xuICAgIHRoaXMuX2Jhc2VJbnB1dCA9IG87XG4gICAgdmFyIG4gPSB0aGlzLm1vZGlmeUNsZWFyKCk7XG4gICAgdGhpcy51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgdGhpcy5hZGRDb21ibygxKTtcbiAgICB2YXIgciA9IHRoaXMuZ2V0RGF4aWFvQ2FyZE1hdGhJbmZvcyhuKTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIGwgPSB0aGlzLnBhcnNlRGF4aWFvKHIpLmNvbWJvO1xuICAgICAgdGhpcy5hZGRDb21ibyhsKTtcbiAgICB9XG4gICAgdmFyIHMgPSB0aGlzLmNhbEFkZFNjb3JlKCksXG4gICAgICBjID0gX19yZWFkKHRoaXMubW9kaWZ5Q2xlYXJIaXRUaXBzKG4pLCAyKSxcbiAgICAgIHUgPSBjWzBdLFxuICAgICAgcCA9IGNbMV0sXG4gICAgICBmID0gdGhpcy5jYW5TaG93Q29tYm8oKSxcbiAgICAgIGQgPSB0aGlzLmdldENvbWJvTnVtKCksXG4gICAgICBoID0gZmFsc2UsXG4gICAgICB5ID0gZmFsc2UsXG4gICAgICBtID0gZmFsc2U7XG4gICAgaWYgKHQuaW5wdXRUeXBlID09PSBFR2FtZUlucHV0RW51bS5BdXRvTWVyZ2UpIHtcbiAgICAgIGggPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEhhc1RyaWdnZXJlZEZ1bGxDb21ibygpO1xuICAgICAgeSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0SGFzVHJpZ2dlcmVkUmV3YXJkQ29tYm8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKG0gPSB0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvQ2hlY2tlci5jYW5TaG93RHVveGlhb0NvbWJvKG4pKSB8fCAoaCA9IHRoaXMuX2dhbWVDb250ZXh0LmZ1bGxDb21ib0NoZWNrZXIuY2FuRnVsbENvbWJvKCkpO1xuICAgICAgbSAmJiB0aGlzLnBhcnNlRHVveGlhb0NhcmQobik7XG4gICAgfVxuICAgIHRoaXMuX29wdGlvbnMgPSB7XG4gICAgICBpbnB1dDogdCxcbiAgICAgIHRpbGVJZHM6IG4sXG4gICAgICBhZGRTY29yZTogcyxcbiAgICAgIHNob3dDb21ibzogZixcbiAgICAgIGNvbWJvTnVtOiBkLFxuICAgICAgaXNTaG93TW90aXZhdGlvbmFsV29yZHM6IGZhbHNlLFxuICAgICAgaW5kZXhNb3RpdmF0aW9uYWxXb3JkczogMCxcbiAgICAgIGlzU2hvd0Z1bGxDb21ibzogaCxcbiAgICAgIGlzU2hvd1Jld2FyZENvbWJvOiB5LFxuICAgICAgaXNTaG93RHVveGlhb0NvbWJvOiBtLFxuICAgICAgY2xlYXJIaXQ6IHUsXG4gICAgICBoaWRlSGl0SWRzOiBwLFxuICAgICAgZGF4aWFvQ2FyZE1hdGNoSW5mb3M6IHJcbiAgICB9O1xuICAgIHRoaXMucHVzaENsZWFyRWZmZWN0cygpO1xuICB9XG4gIHN0YXRpYyBwdXNoRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KHtcbiAgICAgIHRpbGVJZHM6IHRoaXMuX29wdGlvbnMudGlsZUlkcyxcbiAgICAgIGZpbmFsTWF0Y2hJbmZvczogZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBzdGF0aWMgcHVzaEVtcHR5RWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IEVtcHR5RWZmZWN0KHtcbiAgICAgIGlucHV0VHlwZTogdGhpcy5faW5wdXQuaW5wdXRUeXBlLFxuICAgICAgbmFtZTogXCJFbXB0eVwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwdXNoRGF4aWFvQ2xlYXJUaXBFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgRGF4aWFvQ2xlYXJUaXBFZmZlY3Qoe1xuICAgICAgdGlsZUlkczogdGhpcy5fb3B0aW9ucy50aWxlSWRzLFxuICAgICAgZmluYWxNYXRjaEluZm9zOiB0aGlzLl9vcHRpb25zLmRheGlhb0NhcmRNYXRjaEluZm9zXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcGFyc2VEdW94aWFvQ2FyZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvQ2hlY2tlci5nZXRDYW5DbGVhckR1b3hpYW9DYXJkSW5mb3MoZSk7XG4gICAgaWYgKCF0KSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQuZHVveGlhb01vZGlmaWVyLm1vZGlmeUR1b3hpYW9DbGVhckNvdW50KHQuY291bnQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2xlYXJFZmZlY3RzKCkge1xuICAgIHRoaXMudHJ5UHVzaENsZWFySGl0VGlwc0VmZmVjdCgpO1xuICAgIHZhciBlID0gdGhpcy5fYmFzZUlucHV0LnB1c2hDbGVhckVmZmVjdCh0aGlzLl9vcHRpb25zLnRpbGVJZHNbMF0sIHRoaXMuX29wdGlvbnMudGlsZUlkc1sxXSwgdGhpcy5fb3B0aW9ucy5pc1Nob3dSZXdhcmRDb21ibywgdGhpcy5fb3B0aW9ucy5pc1Nob3dGdWxsQ29tYm8pO1xuICAgIHRoaXMuX29wdGlvbnMuZGF4aWFvQ2FyZE1hdGNoSW5mb3MgJiYgdGhpcy5wdXNoRGF4aWFvQ2xlYXJUaXBFZmZlY3QoKTtcbiAgICB0aGlzLl9vcHRpb25zLmNsZWFyRWZmZWN0T3B0aW9ucyA9IGU7XG4gICAgdGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8gJiYgdGhpcy5wdXNoQmxvY2tJbnB1dFJlZkVmZmVjdCh0cnVlLCBcImR1b3hpYW9Db21ib1N0YXJ0XCIpO1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmRheGlhb0NhcmRNYXRjaEluZm9zKSB7XG4gICAgICB0aGlzLnB1c2hEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCh0aGlzLl9vcHRpb25zLmRheGlhb0NhcmRNYXRjaEluZm9zKTtcbiAgICAgIHRoaXMucHVzaENsZWFyRWZmZWN0RWZmZWN0KCk7XG4gICAgICB0aGlzLnB1c2hFbXB0eUVmZmVjdCgpO1xuICAgIH1cbiAgICB0aGlzLnB1c2hBZnRlckNsZWFyRWZmZWN0KCk7XG4gICAgdGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvcyB8fCB0aGlzLnB1c2hDbGVhckVmZmVjdEVmZmVjdCgpO1xuICAgIHRoaXMucGFyc2VCb21iQ2FyZCgpO1xuICAgIHRoaXMucHVzaFVwZGF0ZU1hdGNoTnVtRWZmZWN0KCksIHRoaXMudHJ5U2hvd01vdGl2YXRpb25hbFdvcmRzKCk7XG4gICAgdGhpcy5wdXNoU2NvcmVGbG90RWZmZWN0KCk7XG4gICAgdGhpcy50cnlFeGN1dGVTaG93Q29tYm8oKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZVJld2FyZENvbWJvKCk7XG4gICAgdGhpcy50cnlFeGN1dGVGdWxsQ29tYm8oKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZUR1b3hpYW9Db21ibygpO1xuICAgIHRoaXMudHJ5RXhjdXRlRW5kKCk7XG4gICAgdGhpcy5wdXNoQ2xlYXJCZWhhdmlvckZpbmlzaEVmZmVjdCgpO1xuICB9XG4gIHN0YXRpYyB0cnlQdXNoQ2xlYXJIaXRUaXBzRWZmZWN0KCkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmNsZWFySGl0ICYmIHRoaXMuX29wdGlvbnMuaGlkZUhpdElkcyAmJiB0aGlzLl9vcHRpb25zLmhpZGVIaXRJZHMubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXMucHVzaENsZWFySGl0VGlwc0VmZmVjdCh0aGlzLl9vcHRpb25zLmhpZGVIaXRJZHMpO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2xlYXJIaXRUaXBzRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBIaXRUaXBzRWZmZWN0KHtcbiAgICAgIGlzQ2xlYXJIaXQ6IHRydWUsXG4gICAgICB0aWxlSWQxOiBlWzBdIHx8IFwiXCIsXG4gICAgICB0aWxlSWQyOiBlWzFdIHx8IFwiXCJcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHN0YXRpYyBwdXNoQWZ0ZXJDbGVhckVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1swXSxcbiAgICAgIHQgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMV0sXG4gICAgICBvID0gbmV3IEVtcHR5RWZmZWN0KHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub3VjaFN0YXJ0LFxuICAgICAgICBuYW1lOiBcInRvdWNoU3RhcnRcIlxuICAgICAgfSksXG4gICAgICBuID0gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUm9vdCksXG4gICAgICBpID0ge1xuICAgICAgICBsYXN0RWZmZWN0SWQ6IG4ubGFzdEVmZmVjdElkLFxuICAgICAgICBuZXdFZmZlY3RJZDogbi5uZXdFZmZlY3RJZCxcbiAgICAgICAgdGlsZUlkOiBlLFxuICAgICAgICBsYXN0VGlsZUlkOiB0LFxuICAgICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zXG4gICAgICB9O1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5kaXNwYXRjaENsZWFyQWZ0ZXJFdmVudChpKTtcbiAgICByZXR1cm4gbjtcbiAgfVxuICBzdGF0aWMgcHVzaENsZWFyRWZmZWN0RWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdLFxuICAgICAgdCA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1sxXSxcbiAgICAgIG8gPSBuZXcgQ2xlYXJFZmZlY3RFZmZlY3Qoe1xuICAgICAgICB0aWxlSWQ6IGUsXG4gICAgICAgIGxhc3RUaWxlSWQ6IHRcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHBhcnNlQm9tYkNhcmQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IG51bGwsXG4gICAgICBvID0gZnVuY3Rpb24gbyhuKSB7XG4gICAgICAgIHZhciBpID0gZS5fZ2FtZUNvbnRleHQudGlsZVR5cGVDaGVja2VyLnBhcnNlQm9tYkNhcmQobik7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgdCB8fCAodCA9IGUuX2Jhc2VJbnB1dC5wdXNoUGFyYWxsZXJFZmZlY3QoKS5uZXdFZmZlY3RJZCk7XG4gICAgICAgICAgdmFyIGEgPSBlLmdldERheGlhb0NhcmRNYXRoSW5mb3MoaS5ib21iSWRzKTtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgdmFyIGMgPSBlLnBhcnNlRGF4aWFvKGEpLmNvbWJvO1xuICAgICAgICAgICAgZS5hZGRDb21ibyhjKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHAgPSBlLl9nYW1lQ29udGV4dC50aWxlVHlwZXNNb2RpZmllci5tb2RpZnlCb21iQ2FyZChlLl9pbnB1dCwgaS5ib21iSWRzKSxcbiAgICAgICAgICAgIGYgPSBwLmFkZFNjb3JlLFxuICAgICAgICAgICAgdiA9IHAuY29tYm8sXG4gICAgICAgICAgICBnID0gcC5zaG93Q29tYm8sXG4gICAgICAgICAgICBfID0gbmV3IEJvbWJFZmZlY3Qoe1xuICAgICAgICAgICAgICBwb3MxOiBpLnBvczEsXG4gICAgICAgICAgICAgIHBvczI6IGkucG9zMixcbiAgICAgICAgICAgICAgYm9tYklkczogaS5ib21iSWRzXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFQgPSBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChfLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIHQsIGZhbHNlKS5uZXdFZmZlY3RJZDtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgdmFyIEMgPSBuZXcgRGF4aWFvQ2xlYXJUaXBFZmZlY3Qoe1xuICAgICAgICAgICAgICB0aWxlSWRzOiBlLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICAgICAgICAgIGZpbmFsTWF0Y2hJbmZvczogYVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChDLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhciBiID0gbmV3IERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KHtcbiAgICAgICAgICAgICAgdGlsZUlkczogZS5fb3B0aW9ucy50aWxlSWRzLFxuICAgICAgICAgICAgICBmaW5hbE1hdGNoSW5mb3M6IGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5fYmFzZUlucHV0LnB1c2hFZmZlY3QoYiwgRUluc2VydFR5cGUuU2VyaWFsLCBULCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBTID0gZS5fZ2FtZUNvbnRleHQuZHVveGlhb0NoZWNrZXIuaXNIYXNEdW94aWFvQ2FyZChpLmJvbWJJZHMpLFxuICAgICAgICAgICAgdyA9IGUuX2dhbWVDb250ZXh0LmR1b3hpYW9DaGVja2VyLmlzSW5EdW94aWFvQ29tYm8oKTtcbiAgICAgICAgICBpZiAoUykge1xuICAgICAgICAgICAgZS5wYXJzZUR1b3hpYW9DYXJkKGkuYm9tYklkcyk7XG4gICAgICAgICAgICBpZiAoIXcpIHtcbiAgICAgICAgICAgICAgdmFyIEIgPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICAgICAgICAgICAgYmxvY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJvbTogXCJib21iRHVveGlhb1wiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChCLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHggPSBuZXcgRW1wdHlFZmZlY3Qoe1xuICAgICAgICAgICAgICBpbnB1dFR5cGU6IGUuX2lucHV0LmlucHV0VHlwZSxcbiAgICAgICAgICAgICAgbmFtZTogXCJCb21iUGFyYWxsZWxHcm91cFwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIE0gPSBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh4LCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKS5uZXdFZmZlY3RJZCxcbiAgICAgICAgICAgIE8gPSBuZXcgU2NvcmVGbG90RWZmZWN0KHtcbiAgICAgICAgICAgICAgdGlsZUlkOiBpLmJvbWJJZHNbMF0sXG4gICAgICAgICAgICAgIGxhc3RUaWxlSWQ6IGkuYm9tYklkc1sxXSxcbiAgICAgICAgICAgICAgaXNDb21ibzogZyxcbiAgICAgICAgICAgICAgYWRkU2NvcmU6IGYsXG4gICAgICAgICAgICAgIHNpemU6IGUuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGkuYm9tYklkc1swXSkuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBEID0gZS5fYmFzZUlucHV0LnB1c2hFZmZlY3QoTywgRUluc2VydFR5cGUuUGFyYWxsZWwsIE0pLm5ld0VmZmVjdElkLFxuICAgICAgICAgICAgUCA9IGUuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICAgICAgICBBID0gbmV3IFVwZGF0ZVNjb3JlRWZmZWN0KHtcbiAgICAgICAgICAgICAgYWRkU2NvcmU6IGYsXG4gICAgICAgICAgICAgIHRhcmdldFNjb3JlOiBQLmdldFNjb3JlKCksXG4gICAgICAgICAgICAgIGlzU2hvd0NvbWJvOiBnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChBLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIEQsIGZhbHNlKTtcbiAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgdmFyIFIgPSBuZXcgQ29tYm9FZmZlY3Qoe1xuICAgICAgICAgICAgICBjb21ib051bTogdlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChSLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgTSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChTICYmICF3KSB7XG4gICAgICAgICAgICBpZiAoZS5fZ2FtZUNvbnRleHQucmVzdWx0Q2hlY2tlci5jaGVja0lzRW5kT3JEZWFkKCkpIGUuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5yZXNldER1b3hpYW9DbGVhckNvdW50KCk7ZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBOID0gbmV3IER1b3hpYW9Db21ib0VmZmVjdCh7XG4gICAgICAgICAgICAgICAgZHVveGlhb0NvdW50OiBlLl9nYW1lQ29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChOLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEIgPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICAgICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgICAgZnJvbTogXCJib21iRHVveGlhb0NvbWJvRW5kXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5fYmFzZUlucHV0LnB1c2hFZmZlY3QoQiwgRUluc2VydFR5cGUuU2VyaWFsLCBULCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWQgPSBNO1xuICAgICAgICAgIGUuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0VHlwZSA9IEVJbnNlcnRUeXBlLlNlcmlhbDtcbiAgICAgICAgICBvKGkuYm9tYklkcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgbyh0aGlzLl9vcHRpb25zLnRpbGVJZHMpO1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gIH1cbiAgc3RhdGljIHB1c2hVcGRhdGVNYXRjaE51bUVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBVcGRhdGVNYXRjaE51bUVmZmVjdCh7XG4gICAgICBjYW5NYXRjaENhcmRQYWlyTnVtOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcHVzaE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0KGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSA9IG5ldyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCh7XG4gICAgICBpbmRleDogZSxcbiAgICAgIGNvbWJvTnVtOiB0LFxuICAgICAgdGlsZUlkMTogbyxcbiAgICAgIHRpbGVJZDI6IG5cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QoaSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHN0YXRpYyBwdXNoTW90aXZhdGlvbmFsV29yZHNFZmZlY3RFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0KHtcbiAgICAgIGluZGV4OiBlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgdHJ5U2hvd01vdGl2YXRpb25hbFdvcmRzKCkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd01vdGl2YXRpb25hbFdvcmRzKSB7XG4gICAgICB0aGlzLnB1c2hNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCh0aGlzLl9vcHRpb25zLmluZGV4TW90aXZhdGlvbmFsV29yZHMsIHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q29tYm9OdW0oKSwgdGhpcy5fb3B0aW9ucy50aWxlSWRzWzFdLCB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMF0pO1xuICAgICAgcmV0dXJuIHRoaXMucHVzaE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0KHRoaXMuX29wdGlvbnMuaW5kZXhNb3RpdmF0aW9uYWxXb3Jkcyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwdXNoU2NvcmVGbG90RWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdLFxuICAgICAgdCA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1sxXSxcbiAgICAgIG8gPSB0aGlzLl9vcHRpb25zLnNob3dDb21ibyxcbiAgICAgIG4gPSB0aGlzLl9vcHRpb25zLmFkZFNjb3JlLFxuICAgICAgaSA9IG5ldyBTY29yZUZsb3RFZmZlY3Qoe1xuICAgICAgICB0aWxlSWQ6IGUsXG4gICAgICAgIGxhc3RUaWxlSWQ6IHQsXG4gICAgICAgIGlzQ29tYm86IG8sXG4gICAgICAgIGFkZFNjb3JlOiBuLFxuICAgICAgICBzaXplOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChlKS5nZXRDb250ZW50U2l6ZSgpXG4gICAgICB9KSxcbiAgICAgIGEgPSB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChpLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCksXG4gICAgICBsID0gKGEubGFzdEVmZmVjdElkLCBhLm5ld0VmZmVjdElkKSxcbiAgICAgIHMgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgYyA9IG5ldyBVcGRhdGVTY29yZUVmZmVjdCh7XG4gICAgICAgIGFkZFNjb3JlOiBuLFxuICAgICAgICB0YXJnZXRTY29yZTogcy5nZXRTY29yZSgpLFxuICAgICAgICBpc1Nob3dDb21ibzogb1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGMsIEVJbnNlcnRUeXBlLlNlcmlhbCwgbCwgZmFsc2UpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVTaG93Q29tYm8oKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93Q29tYm8gJiYgdGhpcy5wdXNoQ29tYm9FZmZlY3QodGhpcy5fb3B0aW9ucy5jb21ib051bSk7XG4gIH1cbiAgc3RhdGljIHB1c2hDb21ib0VmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgQ29tYm9FZmZlY3Qoe1xuICAgICAgY29tYm9OdW06IGVcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVSZXdhcmRDb21ibygpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dSZXdhcmRDb21ibykge1xuICAgICAgdmFyIGUgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpO1xuICAgICAgaWYgKCFlLmdldEhhc1RyaWdnZXJlZFJld2FyZENvbWJvKCkpIHtcbiAgICAgICAgZS5zZXRIYXNUcmlnZ2VyZWRSZXdhcmRDb21ibyh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFJld2FyZENvbWJvRWZmZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwdXNoUmV3YXJkQ29tYm9FZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgUmV3YXJkQ29tYm9FZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZUZ1bGxDb21ibygpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dGdWxsQ29tYm8gJiYgIXRoaXMuX29wdGlvbnMuaXNTaG93UmV3YXJkQ29tYm8pIHtcbiAgICAgIHZhciBlID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICAgIGlmICghZS5nZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8oKSkge1xuICAgICAgICBlLnNldEhhc1RyaWdnZXJlZEZ1bGxDb21ibyh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaEZ1bGxDb21ib0VmZmVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgdHJ5RXhjdXRlRHVveGlhb0NvbWJvKCkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd0R1b3hpYW9Db21ibykge1xuICAgICAgdmFyIGU7XG4gICAgICBpZiAodGhpcy5fZ2FtZUNvbnRleHQucmVzdWx0Q2hlY2tlci5jaGVja0lzRW5kT3JEZWFkKCkpIHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5yZXNldER1b3hpYW9DbGVhckNvdW50KCk7ZWxzZSB7XG4gICAgICAgIHZhciB0ID0gbmV3IER1b3hpYW9Db21ib0VmZmVjdCh7XG4gICAgICAgICAgZHVveGlhb0NvdW50OiB0aGlzLl9nYW1lQ29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpXG4gICAgICAgIH0pO1xuICAgICAgICBlID0gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoQmxvY2tJbnB1dFJlZkVmZmVjdChmYWxzZSwgXCJkdW94aWFvQ29tYm9FbmRcIik7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHB1c2hGdWxsQ29tYm9FZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgRnVsbENvbWJvRWZmZWN0KHt9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVFbmQoKSB7XG4gICAgaWYgKHRoaXMuX2dhbWVDb250ZXh0LnJlc3VsdENoZWNrZXIuY2hlY2tSZXN1bHQoKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9nYW1lQ29udGV4dC5nYW1lVGltZURhdGEudGltZTtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkudXBkYXRlQXZnQ2xlYXJJbnRlcnZhbHMoKTtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LmdhbWVNb2RpZmllci5tb2RpZnlXaW5Gb3JEYWlseUNoYWxsZW5nZShlKTtcbiAgICAgIHZhciB0ID0gdGhpcy5wdXNoQmVmb3JlRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3QoKTtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hEYWlseUNoYWxsZW5nZUVuZEVmZmVjdCh0KTtcbiAgICB9XG4gICAgdGhpcy5zaG91bGRDaGVja0ZhaWwodGhpcy5fb3B0aW9ucy5pc1Nob3dGdWxsQ29tYm8sIHRoaXMuX29wdGlvbnMuaXNTaG93UmV3YXJkQ29tYm8pICYmIHRoaXMudHJ5RXhjdXRlRmFpbCgpO1xuICB9XG4gIHN0YXRpYyBwdXNoQmVmb3JlRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgQmVmb3JlRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmluc2VydEVuZEVmZmVjdElkID8gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QoZSwgdGhpcy5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RUeXBlLCB0aGlzLl9vcHRpb25zLmluc2VydEVuZEVmZmVjdElkLCBmYWxzZSkgOiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHB1c2hEYWlseUNoYWxsZW5nZUVuZEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgRGFpbHlDaGFsbGVuZ2VFbmRFZmZlY3Qoe1xuICAgICAgc2NvcmU6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0U2NvcmUoKSxcbiAgICAgIHNldHRsZW1lbnRTY29yZTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTZXR0bGVtZW50U2NvcmUoKSxcbiAgICAgIHBlcmZlY3RNYXhTY29yZTogdGhpcy5fZ2FtZUNvbnRleHQuc2NvcmVNb2RpZmllci5nZXRQZXJmZWN0TWF4U2NvcmUoKSxcbiAgICAgIGNoYWxsZW5nZURhdGU6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0RGFpbHlDaGFsbGVuZ2VUaW1lc3RhbXAoKVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5TZXJpYWwsIGUubmV3RWZmZWN0SWQsIGZhbHNlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsckRhaWx5SGxwX3NobGRDaGtGYWlsXCIpXG4gIHN0YXRpYyBzaG91bGRDaGVja0ZhaWwoZSwgdCkge1xuICAgIHJldHVybiAhZSAmJiAhdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsckRhaWx5SGxwX3RyeUV4Y0ZhaWxcIilcbiAgc3RhdGljIHRyeUV4Y3V0ZUZhaWwoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHMgfHwgW107XG4gICAgaWYgKHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jaGVja0lzRGVhZChlKSkgcmV0dXJuIHRoaXMucHVzaEZhaWxFZmZlY3QoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsckRhaWx5SGxwX2dldFByZVNoZlwiKVxuICBzdGF0aWMgZ2V0UHJlU2h1ZmZsZURhdGEoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgc3RhdGljIHB1c2hGYWlsRWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgIHQgPSBuZXcgRmFpbEVmZmVjdCh7XG4gICAgICAgIHNodWZmbGVOdW06IGUuZ2V0U2h1ZmZsZU51bXMoKSxcbiAgICAgICAgcHJlU2h1ZmZsZURhdGE6IHRoaXMuZ2V0UHJlU2h1ZmZsZURhdGEoKVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xyRGFpbHlIbHBfcHVzaENsckZpbmlzaFwiKVxuICBzdGF0aWMgcHVzaENsZWFyQmVoYXZpb3JGaW5pc2hFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgRW1wdHlFZmZlY3Qoe1xuICAgICAgaW5wdXRUeXBlOiB0aGlzLl9pbnB1dC5pbnB1dFR5cGUsXG4gICAgICBuYW1lOiBcIkNsZWFyQmVoYXZpb3JGaW5pc2hcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBzdGF0aWMgcHVzaEJsb2NrSW5wdXRSZWZFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gbmV3IEJsb2NrSW5wdXRSZWZFZmZlY3Qoe1xuICAgICAgYmxvY2s6IGUsXG4gICAgICBmcm9tOiB0XG4gICAgfSk7XG4gICAgdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG59Il19
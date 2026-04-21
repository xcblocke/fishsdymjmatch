"use strict";
cc._RF.push(module, 'a6fa0Yl8oRDWI1oWWyqZQQI', 'ClearNormalHelper');
// Scripts/ClearNormalHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var BeforeEndEffect_1 = require("./BeforeEndEffect");
var BlockInputRefEffect_1 = require("./BlockInputRefEffect");
var BombEffect_1 = require("./BombEffect");
var ClearEffectEffect_1 = require("./ClearEffectEffect");
var ComboEffect_1 = require("./ComboEffect");
var DaxiaoClearEffectEffect_1 = require("./DaxiaoClearEffectEffect");
var DaxiaoClearTipEffect_1 = require("./DaxiaoClearTipEffect");
var DuoxiaoComboEffect_1 = require("./DuoxiaoComboEffect");
var EmptyEffect_1 = require("./EmptyEffect");
var EndEffect_1 = require("./EndEffect");
var FailEffect_1 = require("./FailEffect");
var FullComboEffect_1 = require("./FullComboEffect");
var HitTipsEffect_1 = require("./HitTipsEffect");
var MotivationalWordsEffect_1 = require("./MotivationalWordsEffect");
var MotivationalWordsEffectEffect_1 = require("./MotivationalWordsEffectEffect");
var RewardComboEffect_1 = require("./RewardComboEffect");
var ScoreFlotEffect_1 = require("./ScoreFlotEffect");
var UpdateMatchNumEffect_1 = require("./UpdateMatchNumEffect");
var UpdateScoreEffect_1 = require("./UpdateScoreEffect");
var ClearNormalHelper = /** @class */ (function () {
    function ClearNormalHelper() {
    }
    ClearNormalHelper.modifyClear = function () {
        return this._gameContext.clearModifier.modifyClear(this._input);
    };
    ClearNormalHelper.updateCanMatchTiles = function () {
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearNormalHelper.addCombo = function (e) {
        if (e === void 0) { e = 1; }
        this._gameContext.comboModifier.addCombo(e);
    };
    ClearNormalHelper.calAddScore = function () {
        return this._gameContext.scoreModifier.calAddScore();
    };
    ClearNormalHelper.modifyClearHitTips = function (e) {
        return this._gameContext.gameModifier.modifyClearHitTips(e[0], e[1]);
    };
    ClearNormalHelper.canShowCombo = function () {
        return this._gameContext.comboChecker.canShowCombo();
    };
    ClearNormalHelper.getComboNum = function () {
        return this._gameContext.getGameData().getComboNum();
    };
    ClearNormalHelper.getDaxiaoCardMathInfos = function (e) {
        var t = this._gameContext.daxiaoChecker.getCanClearDaxiaoCardInfos(e);
        if (t && t.length > 0)
            return t;
    };
    ClearNormalHelper.parseDaxiao = function (e) {
        this._gameContext.daxiaoModifier.modifyDaxiaoCard(this._input, e);
        return {
            combo: e.length
        };
    };
    ClearNormalHelper.runClear = function (e, t, o) {
        this._gameContext = e;
        this._input = t;
        this._baseInput = o;
        var n = this._gameContext.getGameData(), r = this.modifyClear(), l = this.getDaxiaoCardMathInfos(r);
        if (l) {
            var s = this.parseDaxiao(l).combo;
            this.addCombo(s);
        }
        this.updateCanMatchTiles();
        this.addCombo(1);
        var c = n.isBreakBest(), u = this.calAddScore(), p = n.isBreakBest(), f = __read(this.modifyClearHitTips(r), 2), d = f[0], h = f[1], y = this.canShowCombo(), m = this.getComboNum(), v = false, g = 0, _ = false, T = false, C = false, b = c != p && p;
        if (t.inputType === GameInputEnum_1.EGameInputEnum.AutoMerge) {
            v = false;
            _ = this._gameContext.getGameData().getHasTriggeredFullCombo();
            T = this._gameContext.getGameData().getHasTriggeredRewardCombo();
        }
        else {
            var E = this._gameContext.motivationalWordsChecker.canShowMotivationalWords(), S = E.isShow, I = E.index;
            mj.triggerInternalEvent("ClrNormHlp_motiv", this, [S, I]);
            v = S;
            g = I;
            if (!(C = this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(r))) {
                _ = this._gameContext.fullComboChecker.canFullCombo();
                T = this._gameContext.rewardComboChecker.shouldTriNow();
            }
            C && this.parseDuoxiaoCard(r);
        }
        this._options = {
            input: t,
            tileIds: r,
            addScore: u,
            showCombo: y,
            comboNum: m,
            isShowMotivationalWords: v,
            indexMotivationalWords: g,
            isShowFullCombo: _,
            isShowRewardCombo: T,
            isShowDuoxiaoCombo: C,
            isBreakBest: b,
            clearHit: d,
            hideHitIds: h,
            daxiaoCardMatchInfos: l
        };
        this.pushClearEffects();
    };
    ClearNormalHelper.pushDaxiaoClearEffectEffect = function (e) {
        var t = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearNormalHelper.pushEmptyEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "Empty"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearNormalHelper.pushDaxiaoClearTipEffect = function () {
        var e = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: this._options.daxiaoCardMatchInfos
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.parseDuoxiaoCard = function (e) {
        var t = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(e);
        if (!t)
            return false;
        this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(t.count);
        return true;
    };
    ClearNormalHelper.pushClearEffects = function () {
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
    ClearNormalHelper.tryPushClearHitTipsEffect = function () {
        if (this._options.clearHit && this._options.hideHitIds && this._options.hideHitIds.length > 0)
            return this.pushClearHitTipsEffect(this._options.hideHitIds);
    };
    ClearNormalHelper.pushClearHitTipsEffect = function (e) {
        var t = new HitTipsEffect_1.HitTipsEffect({
            isClearHit: true,
            tileId1: e[0] || "",
            tileId2: e[1] || ""
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.pushAfterClearEffect = function () {
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
    ClearNormalHelper.pushClearEffectEffect = function () {
        var e = this._options.tileIds[0], t = this._options.tileIds[1], o = new ClearEffectEffect_1.ClearEffectEffect({
            tileId: e,
            lastTileId: t
        });
        return this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.parseBombCard = function () {
        var e = this, t = null, o = function o(n) {
            var i = e._gameContext.tileTypeChecker.parseBombCard(n);
            if (i) {
                t || (t = e._baseInput.pushParallerEffect().newEffectId);
                var a = e.getDaxiaoCardMathInfos(i.bombIds);
                if (a) {
                    var l = e.parseDaxiao(a).combo;
                    e.addCombo(l);
                }
                var u = e._gameContext.tileTypesModifier.modifyBombCard(e._input, i.bombIds), m = u.addScore, v = u.combo, g = u.showCombo, _ = new BombEffect_1.BombEffect({
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
                    addScore: m,
                    size: e._gameContext.getTileMapObject().getTileObject(i.bombIds[0]).getContentSize()
                }), D = e._baseInput.pushEffect(O, BehaviorsEnum_1.EInsertType.Parallel, M).newEffectId, P = e._gameContext.getGameData(), A = new UpdateScoreEffect_1.UpdateScoreEffect({
                    addScore: m,
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
                e.checkBombMotivWords(i.bombIds, M);
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
    ClearNormalHelper.checkBombMotivWords = function () { };
    ClearNormalHelper.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this._gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.pushMotivationalWordsEffect = function (e, t, o, n) {
        var i = new MotivationalWordsEffect_1.MotivationalWordsEffect({
            index: e,
            comboNum: t,
            tileId1: o,
            tileId2: n
        });
        return this._baseInput.pushEffect(i, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.pushMotivationalWordsEffectEffect = function (e) {
        var t = new MotivationalWordsEffectEffect_1.MotivationalWordsEffectEffect({
            index: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.tryShowMotivationalWords = function () {
        if (this._options.isShowMotivationalWords) {
            this.pushMotivationalWordsEffect(this._options.indexMotivationalWords, this._gameContext.getGameData().getComboNum(), this._options.tileIds[1], this._options.tileIds[0]);
            return this.pushMotivationalWordsEffectEffect(this._options.indexMotivationalWords);
        }
    };
    ClearNormalHelper.pushScoreFlotEffect = function () {
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
    ClearNormalHelper.tryExcuteShowCombo = function () {
        this._options.showCombo && this.pushComboEffect(this._options.comboNum);
    };
    ClearNormalHelper.pushComboEffect = function (e) {
        var t = new ComboEffect_1.ComboEffect({
            comboNum: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.tryExcuteRewardCombo = function () {
        if (this._options.isShowRewardCombo) {
            var e = this._gameContext.getGameData();
            if (!e.getHasTriggeredRewardCombo()) {
                e.setHasTriggeredRewardCombo(true);
                return this.pushRewardComboEffect();
            }
        }
    };
    ClearNormalHelper.pushRewardComboEffect = function () {
        var e = new RewardComboEffect_1.RewardComboEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.tryExcuteFullCombo = function () {
        if (this._options.isShowFullCombo && !this._options.isShowRewardCombo) {
            var e = this._gameContext.getGameData();
            if (!e.getHasTriggeredFullCombo()) {
                e.setHasTriggeredFullCombo(true);
                var t = this.pushFullComboEffect();
                this._options.fullComboEffectOptions = t;
                return t;
            }
        }
    };
    ClearNormalHelper.tryExcuteDuoxiaoCombo = function () {
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
    ClearNormalHelper.pushFullComboEffect = function () {
        var e = new FullComboEffect_1.FullComboEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.tryExcuteEnd = function () {
        if (this._gameContext.resultChecker.checkResult()) {
            var e = this._gameContext.gameTimeData.time;
            this._gameContext.getGameData().updateAvgClearIntervals();
            this._gameContext.gameModifier.modifyWin(e);
            var t = this.pushBeforeEndEffect();
            return this.pushEndEffect(t);
        }
        this.shouldCheckFail(this._options.isShowFullCombo, this._options.isShowRewardCombo) && this.tryExcuteFail();
    };
    ClearNormalHelper.pushBeforeEndEffect = function () {
        this.beforePushEndEffect();
        var e = new BeforeEndEffect_1.BeforeEndEffect({});
        return this._options.insertEndEffectId ? this._baseInput.pushEffect(e, this._options.insertEndEffectType, this._options.insertEndEffectId, false) : this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper.beforePushEndEffect = function () { };
    ClearNormalHelper.pushEndEffect = function (e) {
        var t = new EndEffect_1.EndEffect({
            score: this._gameContext.getGameData().getScore(),
            settlementScore: this._gameContext.getGameData().getSettlementScore(),
            perfectMaxScore: this._gameContext.scoreModifier.getPerfectMaxScore(),
            curLv: this._gameContext.getGameData().getLevelId()
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId, false);
    };
    ClearNormalHelper.shouldCheckFail = function (e, t) {
        return !e && !t;
    };
    ClearNormalHelper.tryExcuteFail = function () {
        var e = this._options.tileIds || [];
        if (this._gameContext.getTileMapObject().checkIsDead(e))
            return this.pushFailEffect();
    };
    ClearNormalHelper.getPreShuffleData = function () {
        return null;
    };
    ClearNormalHelper.pushFailEffect = function () {
        var e = this._gameContext.getGameData(), t = new FailEffect_1.FailEffect({
            shuffleNum: e.getShuffleNums(),
            preShuffleData: this.getPreShuffleData()
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearNormalHelper.pushClearBehaviorFinishEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "ClearBehaviorFinish"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearNormalHelper.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearNormalHelper._gameContext = null;
    ClearNormalHelper._input = null;
    ClearNormalHelper._baseInput = null;
    ClearNormalHelper._options = null;
    __decorate([
        mj.traitEvent("ClrNormHlp_parseBomb")
    ], ClearNormalHelper, "parseBombCard", null);
    __decorate([
        mj.traitEvent("ClrNormHlp_chkBombMotiv")
    ], ClearNormalHelper, "checkBombMotivWords", null);
    __decorate([
        mj.traitEvent("ClrNormHlp_tryShwMotWrd")
    ], ClearNormalHelper, "tryShowMotivationalWords", null);
    __decorate([
        mj.traitEvent("ClrNormHlp_bfrPushEnd")
    ], ClearNormalHelper, "beforePushEndEffect", null);
    __decorate([
        mj.traitEvent("ClrNormHlp_shldChkFail")
    ], ClearNormalHelper, "shouldCheckFail", null);
    __decorate([
        mj.traitEvent("ClrNormHlp_tryExcFail")
    ], ClearNormalHelper, "tryExcuteFail", null);
    __decorate([
        mj.traitEvent("ClrNormHlp_getPreShf")
    ], ClearNormalHelper, "getPreShuffleData", null);
    __decorate([
        mj.traitEvent("ClrNormHlp_pushClrFinish")
    ], ClearNormalHelper, "pushClearBehaviorFinishEffect", null);
    return ClearNormalHelper;
}());
exports.default = ClearNormalHelper;

cc._RF.pop();
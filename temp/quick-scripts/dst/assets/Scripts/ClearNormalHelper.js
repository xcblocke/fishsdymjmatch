
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearNormalHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFyTm9ybWFsSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFLHFEQUFvRDtBQUNwRCw2REFBNEQ7QUFDNUQsMkNBQTBDO0FBQzFDLHlEQUF3RDtBQUN4RCw2Q0FBNEM7QUFDNUMscUVBQW9FO0FBQ3BFLCtEQUE4RDtBQUM5RCwyREFBMEQ7QUFDMUQsNkNBQTRDO0FBQzVDLHlDQUF3QztBQUN4QywyQ0FBMEM7QUFDMUMscURBQW9EO0FBQ3BELGlEQUFnRDtBQUNoRCxxRUFBb0U7QUFDcEUsaUZBQWdGO0FBQ2hGLHlEQUF3RDtBQUN4RCxxREFBb0Q7QUFDcEQsK0RBQThEO0FBQzlELHlEQUF3RDtBQUN4RDtJQUFBO0lBNmJBLENBQUM7SUF4YlEsNkJBQVcsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNNLHFDQUFtQixHQUExQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLENBQUs7UUFBTCxrQkFBQSxFQUFBLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTSw2QkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNNLG9DQUFrQixHQUF6QixVQUEwQixDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDTSw4QkFBWSxHQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNNLDZCQUFXLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFDTSx3Q0FBc0IsR0FBN0IsVUFBOEIsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ00sNkJBQVcsR0FBbEIsVUFBbUIsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU07U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUN0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNuQixDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ3RCLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsS0FBSyxFQUNULENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUMsU0FBUyxLQUFLLDhCQUFjLENBQUMsU0FBUyxFQUFFO1lBQzVDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQy9ELENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUM7U0FDbEU7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUMsd0JBQXdCLEVBQUUsRUFDM0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDZCxFQUFFLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RELENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pEO1lBQ0QsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7WUFDWCxTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsdUJBQXVCLEVBQUUsQ0FBQztZQUMxQixzQkFBc0IsRUFBRSxDQUFDO1lBQ3pCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsa0JBQWtCLEVBQUUsQ0FBQztZQUNyQixXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixvQkFBb0IsRUFBRSxDQUFDO1NBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ00sNkNBQTJCLEdBQWxDLFVBQW1DLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxpREFBdUIsQ0FBQztZQUNsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPO1lBQzlCLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNNLGlDQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSx5QkFBVyxDQUFDO1lBQ3RCLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDaEMsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTSwwQ0FBd0IsR0FBL0I7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLDJDQUFvQixDQUFDO1lBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDOUIsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CO1NBQ3BELENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNNLGtDQUFnQixHQUF2QixVQUF3QixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25FLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLGtDQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1SixJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtZQUN0QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ00sMkNBQXlCLEdBQWhDO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUosQ0FBQztJQUNNLHdDQUFzQixHQUE3QixVQUE4QixDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksNkJBQWEsQ0FBQztZQUN4QixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ3BCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNNLHNDQUFvQixHQUEzQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQzVCLENBQUMsR0FBRyxJQUFJLHlCQUFXLENBQUM7WUFDbEIsU0FBUyxFQUFFLDhCQUFjLENBQUMsVUFBVTtZQUNwQyxJQUFJLEVBQUUsWUFBWTtTQUNuQixDQUFDLEVBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxFQUNuRCxDQUFDLEdBQUc7WUFDRixZQUFZLEVBQUUsQ0FBQyxDQUFDLFlBQVk7WUFDNUIsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXO1lBQzFCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLENBQUM7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdkIsQ0FBQztRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00sdUNBQXFCLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDNUIsQ0FBQyxHQUFHLElBQUkscUNBQWlCLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUM7WUFDVCxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUMsQ0FBQztRQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLCtCQUFhLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2Y7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQzFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUNmLENBQUMsR0FBRyxJQUFJLHVCQUFVLENBQUM7b0JBQ2pCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtvQkFDWixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7b0JBQ1osT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO2lCQUNuQixDQUFDLEVBQ0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLDJDQUFvQixDQUFDO3dCQUMvQixPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPO3dCQUMzQixlQUFlLEVBQUUsQ0FBQztxQkFDbkIsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksaURBQXVCLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU87d0JBQzNCLGVBQWUsRUFBRSxDQUFDO3FCQUNuQixDQUFDLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDTixJQUFJLENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDOzRCQUM5QixLQUFLLEVBQUUsSUFBSTs0QkFDWCxJQUFJLEVBQUUsYUFBYTt5QkFDcEIsQ0FBQyxDQUFDO3dCQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQzFEO2lCQUNGO2dCQUNELElBQUksQ0FBQyxHQUFHLElBQUkseUJBQVcsQ0FBQztvQkFDcEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUztvQkFDN0IsSUFBSSxFQUFFLG1CQUFtQjtpQkFDMUIsQ0FBQyxFQUNGLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFDeEUsQ0FBQyxHQUFHLElBQUksaUNBQWUsQ0FBQztvQkFDdEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNwQixVQUFVLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFFBQVEsRUFBRSxDQUFDO29CQUNYLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7aUJBQ3JGLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDbkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQ2hDLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDO29CQUN4QixRQUFRLEVBQUUsQ0FBQztvQkFDWCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDekIsV0FBVyxFQUFFLENBQUM7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLElBQUkseUJBQVcsQ0FBQzt3QkFDdEIsUUFBUSxFQUFFLENBQUM7cUJBQ1osQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckQ7Z0JBQ0QsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUNYLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7d0JBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt5QkFBSzt3QkFDaEgsSUFBSSxDQUFDLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQzs0QkFDN0IsWUFBWSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUU7eUJBQ3BELENBQUMsQ0FBQzt3QkFDSCxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUMxRDtvQkFDRCxDQUFDLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQzt3QkFDMUIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLHFCQUFxQjtxQkFDNUIsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzFEO2dCQUNELENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixHQUFHLDJCQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRU0scUNBQW1CLEdBQTFCLGNBQThCLENBQUM7SUFDeEIsMENBQXdCLEdBQS9CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQztZQUMvQixtQkFBbUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsc0JBQXNCLEVBQUU7U0FDbkYsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ00sNkNBQTJCLEdBQWxDLFVBQW1DLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxpREFBdUIsQ0FBQztZQUNsQyxLQUFLLEVBQUUsQ0FBQztZQUNSLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNNLG1EQUFpQyxHQUF4QyxVQUF5QyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLElBQUksNkRBQTZCLENBQUM7WUFDeEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSwwQ0FBd0IsR0FBL0I7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7WUFDekMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFLLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNyRjtJQUNILENBQUM7SUFDTSxxQ0FBbUIsR0FBMUI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDOUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFDMUIsQ0FBQyxHQUFHLElBQUksaUNBQWUsQ0FBQztZQUN0QixNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxDQUFDO1lBQ2IsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtTQUM3RSxDQUFDLEVBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxFQUN2RCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQ25DLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDO1lBQ3hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsV0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDekIsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNNLG9DQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ00saUNBQWUsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxJQUFJLHlCQUFXLENBQUM7WUFDdEIsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTSxzQ0FBb0IsR0FBM0I7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLEVBQUU7Z0JBQ25DLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQztJQUNNLHVDQUFxQixHQUE1QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUkscUNBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ00sb0NBQWtCLEdBQXpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDckUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLEVBQUU7Z0JBQ2pDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0Y7SUFDSCxDQUFDO0lBQ00sdUNBQXFCLEdBQTVCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2lCQUFLO2dCQUN0SCxJQUFJLENBQUMsR0FBRyxJQUFJLHVDQUFrQixDQUFDO29CQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtpQkFDdkQsQ0FBQyxDQUFDO2dCQUNILENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN6RDtZQUNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNNLHFDQUFtQixHQUExQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTSw4QkFBWSxHQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9HLENBQUM7SUFDTSxxQ0FBbUIsR0FBMUI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxTSxDQUFDO0lBRU0scUNBQW1CLEdBQTFCLGNBQThCLENBQUM7SUFDeEIsK0JBQWEsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLHFCQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2pELGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JFLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRTtZQUNyRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUU7U0FDcEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU0saUNBQWUsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0sK0JBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hGLENBQUM7SUFFTSxtQ0FBaUIsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxnQ0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQ3JDLENBQUMsR0FBRyxJQUFJLHVCQUFVLENBQUM7WUFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDOUIsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtTQUN6QyxDQUFDLENBQUM7UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSwrQ0FBNkIsR0FBcEM7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLHlCQUFXLENBQUM7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztZQUNoQyxJQUFJLEVBQUUscUJBQXFCO1NBQzVCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNNLHlDQUF1QixHQUE5QixVQUErQixDQUFDLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUM7U0FDUixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBM2JNLDhCQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLHdCQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2QsNEJBQVUsR0FBRyxJQUFJLENBQUM7SUFDbEIsMEJBQVEsR0FBRyxJQUFJLENBQUM7SUF1THZCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztnREE4RnJDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3NEQUNWO0lBdUIvQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7MkRBTXhDO0lBeUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztzREFDUjtJQVcvQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7a0RBR3ZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO2dEQUl0QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztvREFHckM7SUFVRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7Z0VBT3pDO0lBUUgsd0JBQUM7Q0E3YkQsQUE2YkMsSUFBQTtrQkE3Ym9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBCZWZvcmVFbmRFZmZlY3QgfSBmcm9tICcuL0JlZm9yZUVuZEVmZmVjdCc7XG5pbXBvcnQgeyBCbG9ja0lucHV0UmVmRWZmZWN0IH0gZnJvbSAnLi9CbG9ja0lucHV0UmVmRWZmZWN0JztcbmltcG9ydCB7IEJvbWJFZmZlY3QgfSBmcm9tICcuL0JvbWJFZmZlY3QnO1xuaW1wb3J0IHsgQ2xlYXJFZmZlY3RFZmZlY3QgfSBmcm9tICcuL0NsZWFyRWZmZWN0RWZmZWN0JztcbmltcG9ydCB7IENvbWJvRWZmZWN0IH0gZnJvbSAnLi9Db21ib0VmZmVjdCc7XG5pbXBvcnQgeyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCB9IGZyb20gJy4vRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgRGF4aWFvQ2xlYXJUaXBFZmZlY3QgfSBmcm9tICcuL0RheGlhb0NsZWFyVGlwRWZmZWN0JztcbmltcG9ydCB7IER1b3hpYW9Db21ib0VmZmVjdCB9IGZyb20gJy4vRHVveGlhb0NvbWJvRWZmZWN0JztcbmltcG9ydCB7IEVtcHR5RWZmZWN0IH0gZnJvbSAnLi9FbXB0eUVmZmVjdCc7XG5pbXBvcnQgeyBFbmRFZmZlY3QgfSBmcm9tICcuL0VuZEVmZmVjdCc7XG5pbXBvcnQgeyBGYWlsRWZmZWN0IH0gZnJvbSAnLi9GYWlsRWZmZWN0JztcbmltcG9ydCB7IEZ1bGxDb21ib0VmZmVjdCB9IGZyb20gJy4vRnVsbENvbWJvRWZmZWN0JztcbmltcG9ydCB7IEhpdFRpcHNFZmZlY3QgfSBmcm9tICcuL0hpdFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgTW90aXZhdGlvbmFsV29yZHNFZmZlY3QgfSBmcm9tICcuL01vdGl2YXRpb25hbFdvcmRzRWZmZWN0JztcbmltcG9ydCB7IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0IH0gZnJvbSAnLi9Nb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEVmZmVjdCc7XG5pbXBvcnQgeyBSZXdhcmRDb21ib0VmZmVjdCB9IGZyb20gJy4vUmV3YXJkQ29tYm9FZmZlY3QnO1xuaW1wb3J0IHsgU2NvcmVGbG90RWZmZWN0IH0gZnJvbSAnLi9TY29yZUZsb3RFZmZlY3QnO1xuaW1wb3J0IHsgVXBkYXRlTWF0Y2hOdW1FZmZlY3QgfSBmcm9tICcuL1VwZGF0ZU1hdGNoTnVtRWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZVNjb3JlRWZmZWN0IH0gZnJvbSAnLi9VcGRhdGVTY29yZUVmZmVjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhck5vcm1hbEhlbHBlciB7XG4gIHN0YXRpYyBfZ2FtZUNvbnRleHQgPSBudWxsO1xuICBzdGF0aWMgX2lucHV0ID0gbnVsbDtcbiAgc3RhdGljIF9iYXNlSW5wdXQgPSBudWxsO1xuICBzdGF0aWMgX29wdGlvbnMgPSBudWxsO1xuICBzdGF0aWMgbW9kaWZ5Q2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmNsZWFyTW9kaWZpZXIubW9kaWZ5Q2xlYXIodGhpcy5faW5wdXQpO1xuICB9XG4gIHN0YXRpYyB1cGRhdGVDYW5NYXRjaFRpbGVzKCkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gIH1cbiAgc3RhdGljIGFkZENvbWJvKGUgPSAxKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQuY29tYm9Nb2RpZmllci5hZGRDb21ibyhlKTtcbiAgfVxuICBzdGF0aWMgY2FsQWRkU2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LnNjb3JlTW9kaWZpZXIuY2FsQWRkU2NvcmUoKTtcbiAgfVxuICBzdGF0aWMgbW9kaWZ5Q2xlYXJIaXRUaXBzKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeUNsZWFySGl0VGlwcyhlWzBdLCBlWzFdKTtcbiAgfVxuICBzdGF0aWMgY2FuU2hvd0NvbWJvKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dC5jb21ib0NoZWNrZXIuY2FuU2hvd0NvbWJvKCk7XG4gIH1cbiAgc3RhdGljIGdldENvbWJvTnVtKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldENvbWJvTnVtKCk7XG4gIH1cbiAgc3RhdGljIGdldERheGlhb0NhcmRNYXRoSW5mb3MoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fZ2FtZUNvbnRleHQuZGF4aWFvQ2hlY2tlci5nZXRDYW5DbGVhckRheGlhb0NhcmRJbmZvcyhlKTtcbiAgICBpZiAodCAmJiB0Lmxlbmd0aCA+IDApIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBwYXJzZURheGlhbyhlKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQuZGF4aWFvTW9kaWZpZXIubW9kaWZ5RGF4aWFvQ2FyZCh0aGlzLl9pbnB1dCwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbWJvOiBlLmxlbmd0aFxuICAgIH07XG4gIH1cbiAgc3RhdGljIHJ1bkNsZWFyKGUsIHQsIG8pIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dCA9IGU7XG4gICAgdGhpcy5faW5wdXQgPSB0O1xuICAgIHRoaXMuX2Jhc2VJbnB1dCA9IG87XG4gICAgdmFyIG4gPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgciA9IHRoaXMubW9kaWZ5Q2xlYXIoKSxcbiAgICAgIGwgPSB0aGlzLmdldERheGlhb0NhcmRNYXRoSW5mb3Mocik7XG4gICAgaWYgKGwpIHtcbiAgICAgIHZhciBzID0gdGhpcy5wYXJzZURheGlhbyhsKS5jb21ibztcbiAgICAgIHRoaXMuYWRkQ29tYm8ocyk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHRoaXMuYWRkQ29tYm8oMSk7XG4gICAgdmFyIGMgPSBuLmlzQnJlYWtCZXN0KCksXG4gICAgICB1ID0gdGhpcy5jYWxBZGRTY29yZSgpLFxuICAgICAgcCA9IG4uaXNCcmVha0Jlc3QoKSxcbiAgICAgIGYgPSBfX3JlYWQodGhpcy5tb2RpZnlDbGVhckhpdFRpcHMociksIDIpLFxuICAgICAgZCA9IGZbMF0sXG4gICAgICBoID0gZlsxXSxcbiAgICAgIHkgPSB0aGlzLmNhblNob3dDb21ibygpLFxuICAgICAgbSA9IHRoaXMuZ2V0Q29tYm9OdW0oKSxcbiAgICAgIHYgPSBmYWxzZSxcbiAgICAgIGcgPSAwLFxuICAgICAgXyA9IGZhbHNlLFxuICAgICAgVCA9IGZhbHNlLFxuICAgICAgQyA9IGZhbHNlLFxuICAgICAgYiA9IGMgIT0gcCAmJiBwO1xuICAgIGlmICh0LmlucHV0VHlwZSA9PT0gRUdhbWVJbnB1dEVudW0uQXV0b01lcmdlKSB7XG4gICAgICB2ID0gZmFsc2U7XG4gICAgICBfID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8oKTtcbiAgICAgIFQgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEhhc1RyaWdnZXJlZFJld2FyZENvbWJvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBFID0gdGhpcy5fZ2FtZUNvbnRleHQubW90aXZhdGlvbmFsV29yZHNDaGVja2VyLmNhblNob3dNb3RpdmF0aW9uYWxXb3JkcygpLFxuICAgICAgICBTID0gRS5pc1Nob3csXG4gICAgICAgIEkgPSBFLmluZGV4O1xuICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJDbHJOb3JtSGxwX21vdGl2XCIsIHRoaXMsIFtTLCBJXSk7XG4gICAgICB2ID0gUztcbiAgICAgIGcgPSBJO1xuICAgICAgaWYgKCEoQyA9IHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9DaGVja2VyLmNhblNob3dEdW94aWFvQ29tYm8ocikpKSB7XG4gICAgICAgIF8gPSB0aGlzLl9nYW1lQ29udGV4dC5mdWxsQ29tYm9DaGVja2VyLmNhbkZ1bGxDb21ibygpO1xuICAgICAgICBUID0gdGhpcy5fZ2FtZUNvbnRleHQucmV3YXJkQ29tYm9DaGVja2VyLnNob3VsZFRyaU5vdygpO1xuICAgICAgfVxuICAgICAgQyAmJiB0aGlzLnBhcnNlRHVveGlhb0NhcmQocik7XG4gICAgfVxuICAgIHRoaXMuX29wdGlvbnMgPSB7XG4gICAgICBpbnB1dDogdCxcbiAgICAgIHRpbGVJZHM6IHIsXG4gICAgICBhZGRTY29yZTogdSxcbiAgICAgIHNob3dDb21ibzogeSxcbiAgICAgIGNvbWJvTnVtOiBtLFxuICAgICAgaXNTaG93TW90aXZhdGlvbmFsV29yZHM6IHYsXG4gICAgICBpbmRleE1vdGl2YXRpb25hbFdvcmRzOiBnLFxuICAgICAgaXNTaG93RnVsbENvbWJvOiBfLFxuICAgICAgaXNTaG93UmV3YXJkQ29tYm86IFQsXG4gICAgICBpc1Nob3dEdW94aWFvQ29tYm86IEMsXG4gICAgICBpc0JyZWFrQmVzdDogYixcbiAgICAgIGNsZWFySGl0OiBkLFxuICAgICAgaGlkZUhpdElkczogaCxcbiAgICAgIGRheGlhb0NhcmRNYXRjaEluZm9zOiBsXG4gICAgfTtcbiAgICB0aGlzLnB1c2hDbGVhckVmZmVjdHMoKTtcbiAgfVxuICBzdGF0aWMgcHVzaERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCh7XG4gICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICBmaW5hbE1hdGNoSW5mb3M6IGVcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgc3RhdGljIHB1c2hFbXB0eUVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICBpbnB1dFR5cGU6IHRoaXMuX2lucHV0LmlucHV0VHlwZSxcbiAgICAgIG5hbWU6IFwiRW1wdHlcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBzdGF0aWMgcHVzaERheGlhb0NsZWFyVGlwRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IERheGlhb0NsZWFyVGlwRWZmZWN0KHtcbiAgICAgIHRpbGVJZHM6IHRoaXMuX29wdGlvbnMudGlsZUlkcyxcbiAgICAgIGZpbmFsTWF0Y2hJbmZvczogdGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHBhcnNlRHVveGlhb0NhcmQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fZ2FtZUNvbnRleHQuZHVveGlhb0NoZWNrZXIuZ2V0Q2FuQ2xlYXJEdW94aWFvQ2FyZEluZm9zKGUpO1xuICAgIGlmICghdCkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5tb2RpZnlEdW94aWFvQ2xlYXJDb3VudCh0LmNvdW50KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzdGF0aWMgcHVzaENsZWFyRWZmZWN0cygpIHtcbiAgICB0aGlzLnRyeVB1c2hDbGVhckhpdFRpcHNFZmZlY3QoKTtcbiAgICB2YXIgZSA9IHRoaXMuX2Jhc2VJbnB1dC5wdXNoQ2xlYXJFZmZlY3QodGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdLCB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMV0sIHRoaXMuX29wdGlvbnMuaXNTaG93UmV3YXJkQ29tYm8sIHRoaXMuX29wdGlvbnMuaXNTaG93RnVsbENvbWJvKTtcbiAgICB0aGlzLl9vcHRpb25zLmRheGlhb0NhcmRNYXRjaEluZm9zICYmIHRoaXMucHVzaERheGlhb0NsZWFyVGlwRWZmZWN0KCk7XG4gICAgdGhpcy5fb3B0aW9ucy5jbGVhckVmZmVjdE9wdGlvbnMgPSBlO1xuICAgIHRoaXMuX29wdGlvbnMuaXNTaG93RHVveGlhb0NvbWJvICYmIHRoaXMucHVzaEJsb2NrSW5wdXRSZWZFZmZlY3QodHJ1ZSwgXCJkdW94aWFvQ29tYm9TdGFydFwiKTtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvcykge1xuICAgICAgdGhpcy5wdXNoRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QodGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvcyk7XG4gICAgICB0aGlzLnB1c2hDbGVhckVmZmVjdEVmZmVjdCgpO1xuICAgICAgdGhpcy5wdXNoRW1wdHlFZmZlY3QoKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoQWZ0ZXJDbGVhckVmZmVjdCgpO1xuICAgIHRoaXMuX29wdGlvbnMuZGF4aWFvQ2FyZE1hdGNoSW5mb3MgfHwgdGhpcy5wdXNoQ2xlYXJFZmZlY3RFZmZlY3QoKTtcbiAgICB0aGlzLnBhcnNlQm9tYkNhcmQoKTtcbiAgICB0aGlzLnB1c2hVcGRhdGVNYXRjaE51bUVmZmVjdCgpLCB0aGlzLnRyeVNob3dNb3RpdmF0aW9uYWxXb3JkcygpO1xuICAgIHRoaXMucHVzaFNjb3JlRmxvdEVmZmVjdCgpO1xuICAgIHRoaXMudHJ5RXhjdXRlU2hvd0NvbWJvKCk7XG4gICAgdGhpcy50cnlFeGN1dGVSZXdhcmRDb21ibygpO1xuICAgIHRoaXMudHJ5RXhjdXRlRnVsbENvbWJvKCk7XG4gICAgdGhpcy50cnlFeGN1dGVEdW94aWFvQ29tYm8oKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZUVuZCgpO1xuICAgIHRoaXMucHVzaENsZWFyQmVoYXZpb3JGaW5pc2hFZmZlY3QoKTtcbiAgfVxuICBzdGF0aWMgdHJ5UHVzaENsZWFySGl0VGlwc0VmZmVjdCgpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGVhckhpdCAmJiB0aGlzLl9vcHRpb25zLmhpZGVIaXRJZHMgJiYgdGhpcy5fb3B0aW9ucy5oaWRlSGl0SWRzLmxlbmd0aCA+IDApIHJldHVybiB0aGlzLnB1c2hDbGVhckhpdFRpcHNFZmZlY3QodGhpcy5fb3B0aW9ucy5oaWRlSGl0SWRzKTtcbiAgfVxuICBzdGF0aWMgcHVzaENsZWFySGl0VGlwc0VmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgSGl0VGlwc0VmZmVjdCh7XG4gICAgICBpc0NsZWFySGl0OiB0cnVlLFxuICAgICAgdGlsZUlkMTogZVswXSB8fCBcIlwiLFxuICAgICAgdGlsZUlkMjogZVsxXSB8fCBcIlwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcHVzaEFmdGVyQ2xlYXJFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMF0sXG4gICAgICB0ID0gdGhpcy5fb3B0aW9ucy50aWxlSWRzWzFdLFxuICAgICAgbyA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVG91Y2hTdGFydCxcbiAgICAgICAgbmFtZTogXCJ0b3VjaFN0YXJ0XCJcbiAgICAgIH0pLFxuICAgICAgbiA9IHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlJvb3QpLFxuICAgICAgaSA9IHtcbiAgICAgICAgbGFzdEVmZmVjdElkOiBuLmxhc3RFZmZlY3RJZCxcbiAgICAgICAgbmV3RWZmZWN0SWQ6IG4ubmV3RWZmZWN0SWQsXG4gICAgICAgIHRpbGVJZDogZSxcbiAgICAgICAgbGFzdFRpbGVJZDogdCxcbiAgICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9uc1xuICAgICAgfTtcbiAgICB0aGlzLl9iYXNlSW5wdXQuZGlzcGF0Y2hDbGVhckFmdGVyRXZlbnQoaSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgc3RhdGljIHB1c2hDbGVhckVmZmVjdEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1swXSxcbiAgICAgIHQgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMV0sXG4gICAgICBvID0gbmV3IENsZWFyRWZmZWN0RWZmZWN0KHtcbiAgICAgICAgdGlsZUlkOiBlLFxuICAgICAgICBsYXN0VGlsZUlkOiB0XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xyTm9ybUhscF9wYXJzZUJvbWJcIilcbiAgc3RhdGljIHBhcnNlQm9tYkNhcmQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IG51bGwsXG4gICAgICBvID0gZnVuY3Rpb24gbyhuKSB7XG4gICAgICAgIHZhciBpID0gZS5fZ2FtZUNvbnRleHQudGlsZVR5cGVDaGVja2VyLnBhcnNlQm9tYkNhcmQobik7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgdCB8fCAodCA9IGUuX2Jhc2VJbnB1dC5wdXNoUGFyYWxsZXJFZmZlY3QoKS5uZXdFZmZlY3RJZCk7XG4gICAgICAgICAgdmFyIGEgPSBlLmdldERheGlhb0NhcmRNYXRoSW5mb3MoaS5ib21iSWRzKTtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgdmFyIGwgPSBlLnBhcnNlRGF4aWFvKGEpLmNvbWJvO1xuICAgICAgICAgICAgZS5hZGRDb21ibyhsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHUgPSBlLl9nYW1lQ29udGV4dC50aWxlVHlwZXNNb2RpZmllci5tb2RpZnlCb21iQ2FyZChlLl9pbnB1dCwgaS5ib21iSWRzKSxcbiAgICAgICAgICAgIG0gPSB1LmFkZFNjb3JlLFxuICAgICAgICAgICAgdiA9IHUuY29tYm8sXG4gICAgICAgICAgICBnID0gdS5zaG93Q29tYm8sXG4gICAgICAgICAgICBfID0gbmV3IEJvbWJFZmZlY3Qoe1xuICAgICAgICAgICAgICBwb3MxOiBpLnBvczEsXG4gICAgICAgICAgICAgIHBvczI6IGkucG9zMixcbiAgICAgICAgICAgICAgYm9tYklkczogaS5ib21iSWRzXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFQgPSBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChfLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIHQsIGZhbHNlKS5uZXdFZmZlY3RJZDtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgdmFyIEMgPSBuZXcgRGF4aWFvQ2xlYXJUaXBFZmZlY3Qoe1xuICAgICAgICAgICAgICB0aWxlSWRzOiBlLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICAgICAgICAgIGZpbmFsTWF0Y2hJbmZvczogYVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChDLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhciBiID0gbmV3IERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KHtcbiAgICAgICAgICAgICAgdGlsZUlkczogZS5fb3B0aW9ucy50aWxlSWRzLFxuICAgICAgICAgICAgICBmaW5hbE1hdGNoSW5mb3M6IGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5fYmFzZUlucHV0LnB1c2hFZmZlY3QoYiwgRUluc2VydFR5cGUuU2VyaWFsLCBULCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBTID0gZS5fZ2FtZUNvbnRleHQuZHVveGlhb0NoZWNrZXIuaXNIYXNEdW94aWFvQ2FyZChpLmJvbWJJZHMpLFxuICAgICAgICAgICAgdyA9IGUuX2dhbWVDb250ZXh0LmR1b3hpYW9DaGVja2VyLmlzSW5EdW94aWFvQ29tYm8oKTtcbiAgICAgICAgICBpZiAoUykge1xuICAgICAgICAgICAgZS5wYXJzZUR1b3hpYW9DYXJkKGkuYm9tYklkcyk7XG4gICAgICAgICAgICBpZiAoIXcpIHtcbiAgICAgICAgICAgICAgdmFyIEIgPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICAgICAgICAgICAgYmxvY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJvbTogXCJib21iRHVveGlhb1wiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChCLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHggPSBuZXcgRW1wdHlFZmZlY3Qoe1xuICAgICAgICAgICAgICBpbnB1dFR5cGU6IGUuX2lucHV0LmlucHV0VHlwZSxcbiAgICAgICAgICAgICAgbmFtZTogXCJCb21iUGFyYWxsZWxHcm91cFwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIE0gPSBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh4LCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKS5uZXdFZmZlY3RJZCxcbiAgICAgICAgICAgIE8gPSBuZXcgU2NvcmVGbG90RWZmZWN0KHtcbiAgICAgICAgICAgICAgdGlsZUlkOiBpLmJvbWJJZHNbMF0sXG4gICAgICAgICAgICAgIGxhc3RUaWxlSWQ6IGkuYm9tYklkc1sxXSxcbiAgICAgICAgICAgICAgaXNDb21ibzogZyxcbiAgICAgICAgICAgICAgYWRkU2NvcmU6IG0sXG4gICAgICAgICAgICAgIHNpemU6IGUuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGkuYm9tYklkc1swXSkuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBEID0gZS5fYmFzZUlucHV0LnB1c2hFZmZlY3QoTywgRUluc2VydFR5cGUuUGFyYWxsZWwsIE0pLm5ld0VmZmVjdElkLFxuICAgICAgICAgICAgUCA9IGUuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCksXG4gICAgICAgICAgICBBID0gbmV3IFVwZGF0ZVNjb3JlRWZmZWN0KHtcbiAgICAgICAgICAgICAgYWRkU2NvcmU6IG0sXG4gICAgICAgICAgICAgIHRhcmdldFNjb3JlOiBQLmdldFNjb3JlKCksXG4gICAgICAgICAgICAgIGlzU2hvd0NvbWJvOiBnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChBLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIEQsIGZhbHNlKTtcbiAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgdmFyIFIgPSBuZXcgQ29tYm9FZmZlY3Qoe1xuICAgICAgICAgICAgICBjb21ib051bTogdlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChSLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgTSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuY2hlY2tCb21iTW90aXZXb3JkcyhpLmJvbWJJZHMsIE0pO1xuICAgICAgICAgIGlmIChTICYmICF3KSB7XG4gICAgICAgICAgICBpZiAoZS5fZ2FtZUNvbnRleHQucmVzdWx0Q2hlY2tlci5jaGVja0lzRW5kT3JEZWFkKCkpIGUuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5yZXNldER1b3hpYW9DbGVhckNvdW50KCk7ZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBOID0gbmV3IER1b3hpYW9Db21ib0VmZmVjdCh7XG4gICAgICAgICAgICAgICAgZHVveGlhb0NvdW50OiBlLl9nYW1lQ29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChOLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIFQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEIgPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICAgICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgICAgZnJvbTogXCJib21iRHVveGlhb0NvbWJvRW5kXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5fYmFzZUlucHV0LnB1c2hFZmZlY3QoQiwgRUluc2VydFR5cGUuU2VyaWFsLCBULCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWQgPSBNO1xuICAgICAgICAgIGUuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0VHlwZSA9IEVJbnNlcnRUeXBlLlNlcmlhbDtcbiAgICAgICAgICBvKGkuYm9tYklkcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgbyh0aGlzLl9vcHRpb25zLnRpbGVJZHMpO1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbHJOb3JtSGxwX2Noa0JvbWJNb3RpdlwiKVxuICBzdGF0aWMgY2hlY2tCb21iTW90aXZXb3JkcygpIHt9XG4gIHN0YXRpYyBwdXNoVXBkYXRlTWF0Y2hOdW1FZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgVXBkYXRlTWF0Y2hOdW1FZmZlY3Qoe1xuICAgICAgY2FuTWF0Y2hDYXJkUGFpck51bTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHB1c2hNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdChlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGkgPSBuZXcgTW90aXZhdGlvbmFsV29yZHNFZmZlY3Qoe1xuICAgICAgaW5kZXg6IGUsXG4gICAgICBjb21ib051bTogdCxcbiAgICAgIHRpbGVJZDE6IG8sXG4gICAgICB0aWxlSWQyOiBuXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGksIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcHVzaE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEVmZmVjdCh7XG4gICAgICBpbmRleDogZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbHJOb3JtSGxwX3RyeVNod01vdFdyZFwiKVxuICBzdGF0aWMgdHJ5U2hvd01vdGl2YXRpb25hbFdvcmRzKCkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmlzU2hvd01vdGl2YXRpb25hbFdvcmRzKSB7XG4gICAgICB0aGlzLnB1c2hNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCh0aGlzLl9vcHRpb25zLmluZGV4TW90aXZhdGlvbmFsV29yZHMsIHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q29tYm9OdW0oKSwgdGhpcy5fb3B0aW9ucy50aWxlSWRzWzFdLCB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMF0pO1xuICAgICAgcmV0dXJuIHRoaXMucHVzaE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0KHRoaXMuX29wdGlvbnMuaW5kZXhNb3RpdmF0aW9uYWxXb3Jkcyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwdXNoU2NvcmVGbG90RWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdLFxuICAgICAgdCA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1sxXSxcbiAgICAgIG8gPSB0aGlzLl9vcHRpb25zLnNob3dDb21ibyxcbiAgICAgIG4gPSB0aGlzLl9vcHRpb25zLmFkZFNjb3JlLFxuICAgICAgaSA9IG5ldyBTY29yZUZsb3RFZmZlY3Qoe1xuICAgICAgICB0aWxlSWQ6IGUsXG4gICAgICAgIGxhc3RUaWxlSWQ6IHQsXG4gICAgICAgIGlzQ29tYm86IG8sXG4gICAgICAgIGFkZFNjb3JlOiBuLFxuICAgICAgICBzaXplOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChlKS5nZXRDb250ZW50U2l6ZSgpXG4gICAgICB9KSxcbiAgICAgIGEgPSB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChpLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCksXG4gICAgICBsID0gKGEubGFzdEVmZmVjdElkLCBhLm5ld0VmZmVjdElkKSxcbiAgICAgIHMgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgYyA9IG5ldyBVcGRhdGVTY29yZUVmZmVjdCh7XG4gICAgICAgIGFkZFNjb3JlOiBuLFxuICAgICAgICB0YXJnZXRTY29yZTogcy5nZXRTY29yZSgpLFxuICAgICAgICBpc1Nob3dDb21ibzogb1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGMsIEVJbnNlcnRUeXBlLlNlcmlhbCwgbCwgZmFsc2UpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVTaG93Q29tYm8oKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5zaG93Q29tYm8gJiYgdGhpcy5wdXNoQ29tYm9FZmZlY3QodGhpcy5fb3B0aW9ucy5jb21ib051bSk7XG4gIH1cbiAgc3RhdGljIHB1c2hDb21ib0VmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgQ29tYm9FZmZlY3Qoe1xuICAgICAgY29tYm9OdW06IGVcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVSZXdhcmRDb21ibygpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dSZXdhcmRDb21ibykge1xuICAgICAgdmFyIGUgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpO1xuICAgICAgaWYgKCFlLmdldEhhc1RyaWdnZXJlZFJld2FyZENvbWJvKCkpIHtcbiAgICAgICAgZS5zZXRIYXNUcmlnZ2VyZWRSZXdhcmRDb21ibyh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFJld2FyZENvbWJvRWZmZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwdXNoUmV3YXJkQ29tYm9FZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgUmV3YXJkQ29tYm9FZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZUZ1bGxDb21ibygpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dGdWxsQ29tYm8gJiYgIXRoaXMuX29wdGlvbnMuaXNTaG93UmV3YXJkQ29tYm8pIHtcbiAgICAgIHZhciBlID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICAgIGlmICghZS5nZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8oKSkge1xuICAgICAgICBlLnNldEhhc1RyaWdnZXJlZEZ1bGxDb21ibyh0cnVlKTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnB1c2hGdWxsQ29tYm9FZmZlY3QoKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mdWxsQ29tYm9FZmZlY3RPcHRpb25zID0gdDtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVEdW94aWFvQ29tYm8oKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNTaG93RHVveGlhb0NvbWJvKSB7XG4gICAgICB2YXIgZTtcbiAgICAgIGlmICh0aGlzLl9nYW1lQ29udGV4dC5yZXN1bHRDaGVja2VyLmNoZWNrSXNFbmRPckRlYWQoKSkgdGhpcy5fZ2FtZUNvbnRleHQuZHVveGlhb01vZGlmaWVyLnJlc2V0RHVveGlhb0NsZWFyQ291bnQoKTtlbHNlIHtcbiAgICAgICAgdmFyIHQgPSBuZXcgRHVveGlhb0NvbWJvRWZmZWN0KHtcbiAgICAgICAgICBkdW94aWFvQ291bnQ6IHRoaXMuX2dhbWVDb250ZXh0LmdldER1b3hpYW9DbGVhckNvdW50KClcbiAgICAgICAgfSk7XG4gICAgICAgIGUgPSB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hCbG9ja0lucHV0UmVmRWZmZWN0KGZhbHNlLCBcImR1b3hpYW9Db21ib0VuZFwiKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcHVzaEZ1bGxDb21ib0VmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBGdWxsQ29tYm9FZmZlY3Qoe30pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZUVuZCgpIHtcbiAgICBpZiAodGhpcy5fZ2FtZUNvbnRleHQucmVzdWx0Q2hlY2tlci5jaGVja1Jlc3VsdCgpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2dhbWVDb250ZXh0LmdhbWVUaW1lRGF0YS50aW1lO1xuICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS51cGRhdGVBdmdDbGVhckludGVydmFscygpO1xuICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeVdpbihlKTtcbiAgICAgIHZhciB0ID0gdGhpcy5wdXNoQmVmb3JlRW5kRWZmZWN0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoRW5kRWZmZWN0KHQpO1xuICAgIH1cbiAgICB0aGlzLnNob3VsZENoZWNrRmFpbCh0aGlzLl9vcHRpb25zLmlzU2hvd0Z1bGxDb21ibywgdGhpcy5fb3B0aW9ucy5pc1Nob3dSZXdhcmRDb21ibykgJiYgdGhpcy50cnlFeGN1dGVGYWlsKCk7XG4gIH1cbiAgc3RhdGljIHB1c2hCZWZvcmVFbmRFZmZlY3QoKSB7XG4gICAgdGhpcy5iZWZvcmVQdXNoRW5kRWZmZWN0KCk7XG4gICAgdmFyIGUgPSBuZXcgQmVmb3JlRW5kRWZmZWN0KHt9KTtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RJZCA/IHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIHRoaXMuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0VHlwZSwgdGhpcy5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RJZCwgZmFsc2UpIDogdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xyTm9ybUhscF9iZnJQdXNoRW5kXCIpXG4gIHN0YXRpYyBiZWZvcmVQdXNoRW5kRWZmZWN0KCkge31cbiAgc3RhdGljIHB1c2hFbmRFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IEVuZEVmZmVjdCh7XG4gICAgICBzY29yZTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTY29yZSgpLFxuICAgICAgc2V0dGxlbWVudFNjb3JlOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFNldHRsZW1lbnRTY29yZSgpLFxuICAgICAgcGVyZmVjdE1heFNjb3JlOiB0aGlzLl9nYW1lQ29udGV4dC5zY29yZU1vZGlmaWVyLmdldFBlcmZlY3RNYXhTY29yZSgpLFxuICAgICAgY3VyTHY6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlNlcmlhbCwgZS5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xyTm9ybUhscF9zaGxkQ2hrRmFpbFwiKVxuICBzdGF0aWMgc2hvdWxkQ2hlY2tGYWlsKGUsIHQpIHtcbiAgICByZXR1cm4gIWUgJiYgIXQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbHJOb3JtSGxwX3RyeUV4Y0ZhaWxcIilcbiAgc3RhdGljIHRyeUV4Y3V0ZUZhaWwoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHMgfHwgW107XG4gICAgaWYgKHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jaGVja0lzRGVhZChlKSkgcmV0dXJuIHRoaXMucHVzaEZhaWxFZmZlY3QoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsck5vcm1IbHBfZ2V0UHJlU2hmXCIpXG4gIHN0YXRpYyBnZXRQcmVTaHVmZmxlRGF0YSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzdGF0aWMgcHVzaEZhaWxFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgdCA9IG5ldyBGYWlsRWZmZWN0KHtcbiAgICAgICAgc2h1ZmZsZU51bTogZS5nZXRTaHVmZmxlTnVtcygpLFxuICAgICAgICBwcmVTaHVmZmxlRGF0YTogdGhpcy5nZXRQcmVTaHVmZmxlRGF0YSgpXG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbHJOb3JtSGxwX3B1c2hDbHJGaW5pc2hcIilcbiAgc3RhdGljIHB1c2hDbGVhckJlaGF2aW9yRmluaXNoRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IEVtcHR5RWZmZWN0KHtcbiAgICAgIGlucHV0VHlwZTogdGhpcy5faW5wdXQuaW5wdXRUeXBlLFxuICAgICAgbmFtZTogXCJDbGVhckJlaGF2aW9yRmluaXNoXCJcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgc3RhdGljIHB1c2hCbG9ja0lucHV0UmVmRWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgbyA9IG5ldyBCbG9ja0lucHV0UmVmRWZmZWN0KHtcbiAgICAgIGJsb2NrOiBlLFxuICAgICAgZnJvbTogdFxuICAgIH0pO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxufSJdfQ==
"use strict";
cc._RF.push(module, 'cad515JG8RACbYLWxdlZYU5', 'ClearClassiclHelper');
// Scripts/ClearClassiclHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DDebugInfo_1 = require("./gamePlay/dot/DDebugInfo");
var LoginModel_1 = require("./gamePlay/login/model/LoginModel");
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var BeforeEndEffect_1 = require("./BeforeEndEffect");
var BlockInputRefEffect_1 = require("./BlockInputRefEffect");
var BlockInputRefWithParamEffect_1 = require("./BlockInputRefWithParamEffect");
var BombEffect_1 = require("./BombEffect");
var ChangeBatchAnimEffect_1 = require("./ChangeBatchAnimEffect");
var ClassicBeforeFailEffect_1 = require("./ClassicBeforeFailEffect");
var ClassicFailEffect_1 = require("./ClassicFailEffect");
var ClassicReviveEffect_1 = require("./ClassicReviveEffect");
var ClearEffectEffect_1 = require("./ClearEffectEffect");
var ComboEffect_1 = require("./ComboEffect");
var DaxiaoClearEffectEffect_1 = require("./DaxiaoClearEffectEffect");
var DaxiaoClearTipEffect_1 = require("./DaxiaoClearTipEffect");
var DuoxiaoComboEffect_1 = require("./DuoxiaoComboEffect");
var EmptyEffect_1 = require("./EmptyEffect");
var EndEffect_1 = require("./EndEffect");
var FullComboEffect_1 = require("./FullComboEffect");
var HitTipsEffect_1 = require("./HitTipsEffect");
var MotivationalWordsEffect_1 = require("./MotivationalWordsEffect");
var MotivationalWordsEffectEffect_1 = require("./MotivationalWordsEffectEffect");
var PushBatchInfoEffect_1 = require("./PushBatchInfoEffect");
var RewardComboEffect_1 = require("./RewardComboEffect");
var ScoreFlotEffect_1 = require("./ScoreFlotEffect");
var UpdateMatchNumEffect_1 = require("./UpdateMatchNumEffect");
var UpdateScoreEffect_1 = require("./UpdateScoreEffect");
var ClearClassiclHelper = /** @class */ (function () {
    function ClearClassiclHelper() {
    }
    ClearClassiclHelper.modifyClear = function () {
        return this._gameContext.clearModifier.modifyClear(this._input);
    };
    ClearClassiclHelper.updateCanMatchTiles = function () {
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearClassiclHelper.addCombo = function (e) {
        if (e === void 0) { e = 1; }
        this._gameContext.comboModifier.addCombo(e);
    };
    ClearClassiclHelper.calAddScore = function () {
        var e = this.getBreakBestState();
        return {
            addScore: this._gameContext.scoreModifier.calAddScoreClassic(),
            breakBestState: this.getBreakBestState().map(function (t, o) {
                return 1 == t && 0 == e[o];
            })
        };
    };
    ClearClassiclHelper.getBreakBestState = function () {
        var e = this._gameContext.getGameData();
        return [e.isBreakBest(), e.isBreakWeek(), e.isBreakToday()];
    };
    ClearClassiclHelper.modifyClearHitTips = function (e) {
        return this._gameContext.gameModifier.modifyClearHitTips(e[0], e[1]);
    };
    ClearClassiclHelper.canShowCombo = function () {
        return this._gameContext.comboChecker.canShowCombo();
    };
    ClearClassiclHelper.getComboNum = function () {
        return this._gameContext.getGameData().getComboNum();
    };
    ClearClassiclHelper.getDaxiaoCardMathInfos = function (e) {
        var t = this._gameContext.daxiaoChecker.getCanClearDaxiaoCardInfos(e);
        if (t && t.length > 0)
            return t;
    };
    ClearClassiclHelper.parseDaxiao = function (e) {
        this._gameContext.daxiaoModifier.modifyDaxiaoCard(this._input, e);
        return {
            combo: e.length
        };
    };
    ClearClassiclHelper.runClear = function (e, t, o) {
        this._gameContext = e;
        this._input = t;
        this._baseInput = o;
        var n = this.modifyClear(), r = this.getDaxiaoCardMathInfos(n);
        if (r) {
            var a = this.parseDaxiao(r).combo;
            this.addCombo(a);
        }
        this.updateCanMatchTiles();
        this.addCombo(1);
        var l = this.calAddScore(), c = l.addScore, u = l.breakBestState, p = __read(this.modifyClearHitTips(n), 2), f = p[0], d = p[1], h = this.canShowCombo(), y = this.getComboNum(), m = false, v = 0, g = false, _ = false, T = false;
        if (t.inputType === GameInputEnum_1.EGameInputEnum.AutoMerge) {
            m = false;
            g = this._gameContext.getGameData().getHasTriggeredFullCombo();
            _ = this._gameContext.getGameData().getHasTriggeredRewardCombo();
        }
        else {
            var C = this._gameContext.motivationalWordsChecker.canShowMotivationalWords();
            m = C.isShow;
            v = C.index;
            (T = this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(n)) && this.parseDuoxiaoCard(n);
        }
        this._options = {
            input: t,
            tileIds: n,
            addScore: c,
            breakBestState: u,
            showCombo: h,
            comboNum: y,
            isShowMotivationalWords: m,
            indexMotivationalWords: v,
            isShowFullCombo: g,
            isShowRewardCombo: _,
            isShowDuoxiaoCombo: T,
            clearHit: f,
            hideHitIds: d,
            daxiaoCardMatchInfos: r
        };
        var b = this.pushBlockInputRefEffectRoot(true, "clearClassiclStart");
        this.pushClearEffects();
        var E = this.pushBlockInputRefEffectRoot(false, "clearClassiclEnd"), S = this.checkNeedBlockInput(b, E);
        b.data.isValid = S;
        E.data.isValid = S;
    };
    ClearClassiclHelper.checkNeedBlockInput = function () {
        return this._options.isGetNextBatchInfo ? 1 : 0;
    };
    ClearClassiclHelper.pushDaxiaoClearEffectEffect = function (e) {
        var t = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearClassiclHelper.pushEmptyEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "Empty"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearClassiclHelper.pushDaxiaoClearTipEffect = function () {
        var e = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: this._options.daxiaoCardMatchInfos
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.parseDuoxiaoCard = function (e) {
        var t = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(e);
        if (!t)
            return false;
        this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(t.count);
        return true;
    };
    ClearClassiclHelper.pushClearEffects = function () {
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
        this.tryGetNextBatchInfoPre(BehaviorsEnum_1.EInsertType.Parallel);
        this.parseBombCard();
        this.pushUpdateMatchNumEffect(), this.tryShowMotivationalWords();
        this.pushScoreFlotEffect();
        this.pushBreakBestEffect();
        this.tryExcuteShowCombo();
        this.tryExcuteRewardCombo();
        this.tryExcuteFullCombo();
        this.tryExcuteDuoxiaoCombo();
        this.tryExcuteEnd();
        this.pushClearBehaviorFinishEffect();
    };
    ClearClassiclHelper.pushBreakBestEffect = function () { };
    ClearClassiclHelper.tryGetNextBatchInfoPre = function (e) {
        if (e === void 0) { e = BehaviorsEnum_1.EInsertType.Root; }
        if (this._gameContext.classicLevelChecker.getNeedInitNextLevel(this._options.tileIds)) {
            this._gameContext.getOpenGenerateState() || (this._options.isGetNextBatchInfo = true);
            this.pushPushBatchInfoEffectPre(e);
            this.pushChangeBatchAnimEffectPre();
        }
    };
    ClearClassiclHelper.pushPushBatchInfoEffectPre = function (e) {
        if (e === void 0) { e = BehaviorsEnum_1.EInsertType.Root; }
        var t = new PushBatchInfoEffect_1.PushBatchInfoEffect({
            isOpenGenerateState: this._gameContext.getOpenGenerateState()
        });
        this._baseInput.pushEffect(t, e);
    };
    ClearClassiclHelper.pushChangeBatchAnimEffectPre = function () {
        var e = this._gameContext.getGameData().getNextBatchId(), t = new ChangeBatchAnimEffect_1.ChangeBatchAnimEffect({
            batchId: e,
            isOpenGenerateState: this._gameContext.getOpenGenerateState()
        });
        this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.tryPushClearHitTipsEffect = function () {
        if (this._options.clearHit && this._options.hideHitIds && this._options.hideHitIds.length > 0)
            return this.pushClearHitTipsEffect(this._options.hideHitIds);
    };
    ClearClassiclHelper.pushClearHitTipsEffect = function (e) {
        var t = new HitTipsEffect_1.HitTipsEffect({
            isClearHit: true,
            tileId1: e[0] || "",
            tileId2: e[1] || ""
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.pushAfterClearEffect = function () {
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
    ClearClassiclHelper.pushClearEffectEffect = function () {
        var e = this._options.tileIds[0], t = this._options.tileIds[1], o = new ClearEffectEffect_1.ClearEffectEffect({
            tileId: e,
            lastTileId: t
        });
        return this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.parseBombCard = function () {
        var e = this, t = null, o = function o(n) {
            var i = e._gameContext.tileTypeChecker.parseBombCard(n);
            if (i) {
                t || (t = e._baseInput.pushParallerEffect().newEffectId);
                var r = e.getDaxiaoCardMathInfos(i.bombIds);
                if (r) {
                    var a = e.parseDaxiao(r).combo;
                    e.addCombo(a);
                }
                var s = e._gameContext.tileTypesModifier.modifyBombCard(e._input, i.bombIds), c = s.addScore, p = s.combo, d = s.showCombo, h = new BombEffect_1.BombEffect({
                    pos1: i.pos1,
                    pos2: i.pos2,
                    bombIds: i.bombIds
                }), y = e._baseInput.pushEffect(h, BehaviorsEnum_1.EInsertType.Serial, t, false).newEffectId;
                if (r) {
                    var m = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
                        tileIds: e._options.tileIds,
                        finalMatchInfos: r
                    });
                    e._baseInput.pushEffect(m, BehaviorsEnum_1.EInsertType.Serial, y, false);
                    var v = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
                        tileIds: e._options.tileIds,
                        finalMatchInfos: r
                    });
                    e._baseInput.pushEffect(v, BehaviorsEnum_1.EInsertType.Serial, y, false);
                }
                var E = e._gameContext.duoxiaoChecker.isHasDuoxiaoCard(i.bombIds), S = e._gameContext.duoxiaoChecker.isInDuoxiaoCombo();
                if (E) {
                    e.parseDuoxiaoCard(i.bombIds);
                    if (!S) {
                        var I = new BlockInputRefEffect_1.BlockInputRefEffect({
                            block: true,
                            from: "bombDuoxiao"
                        });
                        e._baseInput.pushEffect(I, BehaviorsEnum_1.EInsertType.Serial, y, false);
                    }
                }
                var w = new EmptyEffect_1.EmptyEffect({
                    inputType: e._input.inputType,
                    name: "BombParallelGroup"
                }), B = e._baseInput.pushEffect(w, BehaviorsEnum_1.EInsertType.Serial, y, false).newEffectId, x = new ScoreFlotEffect_1.ScoreFlotEffect({
                    tileId: i.bombIds[0],
                    lastTileId: i.bombIds[1],
                    isCombo: d,
                    addScore: c,
                    size: e._gameContext.getTileMapObject().getTileObject(i.bombIds[0]).getContentSize()
                }), M = e._baseInput.pushEffect(x, BehaviorsEnum_1.EInsertType.Parallel, B).newEffectId, D = e._gameContext.getGameData(), A = new UpdateScoreEffect_1.UpdateScoreEffect({
                    addScore: c,
                    targetScore: D.getScore(),
                    isShowCombo: d
                });
                e._baseInput.pushEffect(A, BehaviorsEnum_1.EInsertType.Serial, M, false);
                if (d) {
                    var R = new ComboEffect_1.ComboEffect({
                        comboNum: p
                    });
                    e._baseInput.pushEffect(R, BehaviorsEnum_1.EInsertType.Parallel, B);
                }
                e.checkBombMotivWords(i.bombIds, B);
                if (E && !S) {
                    if (e._gameContext.resultChecker.checkIsEndOrDead())
                        e._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
                    else {
                        var N = new DuoxiaoComboEffect_1.DuoxiaoComboEffect({
                            duoxiaoCount: e._gameContext.getDuoxiaoClearCount()
                        });
                        e._baseInput.pushEffect(N, BehaviorsEnum_1.EInsertType.Serial, y, false);
                    }
                    I = new BlockInputRefEffect_1.BlockInputRefEffect({
                        block: false,
                        from: "bombDuoxiaoComboEnd"
                    });
                    e._baseInput.pushEffect(I, BehaviorsEnum_1.EInsertType.Serial, y, false);
                }
                e._options.insertEndEffectId = B;
                e._options.insertEndEffectType = BehaviorsEnum_1.EInsertType.Serial;
                o(i.bombIds);
            }
        };
        o(this._options.tileIds);
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearClassiclHelper.checkBombMotivWords = function () { };
    ClearClassiclHelper.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this._gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.pushMotivationalWordsEffect = function (e, t, o, n) {
        var i = new MotivationalWordsEffect_1.MotivationalWordsEffect({
            index: e,
            comboNum: t,
            tileId1: o,
            tileId2: n
        });
        return this._baseInput.pushEffect(i, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.pushMotivationalWordsEffectEffect = function (e) {
        var t = new MotivationalWordsEffectEffect_1.MotivationalWordsEffectEffect({
            index: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.tryShowMotivationalWords = function () {
        if (this._options.isShowMotivationalWords) {
            this.pushMotivationalWordsEffect(this._options.indexMotivationalWords, this._gameContext.getGameData().getComboNum(), this._options.tileIds[1], this._options.tileIds[0]);
            return this.pushMotivationalWordsEffectEffect(this._options.indexMotivationalWords);
        }
    };
    ClearClassiclHelper.pushScoreFlotEffect = function () {
        var e = this._options.tileIds[0], t = this._options.tileIds[1], o = this._options.showCombo, n = this._options.addScore, i = new ScoreFlotEffect_1.ScoreFlotEffect({
            tileId: e,
            lastTileId: t,
            isCombo: o,
            addScore: n,
            size: this._gameContext.getTileMapObject().getTileObject(e).getContentSize()
        }), r = this._baseInput.pushEffect(i, BehaviorsEnum_1.EInsertType.Parallel), a = (r.lastEffectId, r.newEffectId), s = this._gameContext.getGameData(), c = new UpdateScoreEffect_1.UpdateScoreEffect({
            addScore: n,
            targetScore: s.getScore(),
            isShowCombo: o
        });
        return this._baseInput.pushEffect(c, BehaviorsEnum_1.EInsertType.Serial, a, false);
    };
    ClearClassiclHelper.tryExcuteShowCombo = function () {
        this._options.showCombo && this.pushComboEffect(this._options.comboNum);
    };
    ClearClassiclHelper.pushComboEffect = function (e) {
        var t = new ComboEffect_1.ComboEffect({
            comboNum: e
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.tryExcuteRewardCombo = function () {
        if (this._options.isShowRewardCombo) {
            var e = this._gameContext.getGameData();
            if (!e.getHasTriggeredRewardCombo()) {
                e.setHasTriggeredRewardCombo(true);
                return this.pushRewardComboEffect();
            }
        }
    };
    ClearClassiclHelper.pushRewardComboEffect = function () {
        var e = new RewardComboEffect_1.RewardComboEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.tryExcuteFullCombo = function () {
        if (this._options.isShowFullCombo && !this._options.isShowRewardCombo) {
            var e = this._gameContext.getGameData();
            if (!e.getHasTriggeredFullCombo()) {
                e.setHasTriggeredFullCombo(true);
                return this.pushFullComboEffect();
            }
        }
    };
    ClearClassiclHelper.tryExcuteDuoxiaoCombo = function () {
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
    ClearClassiclHelper.pushFullComboEffect = function () {
        var e = new FullComboEffect_1.FullComboEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.tryExcuteEnd = function () {
        if (this._gameContext.resultChecker.checkResult()) {
            this._gameContext.gameTimeData.time;
            this._gameContext.getGameData().updateAvgClearIntervals();
        }
        else
            this._options.isShowFullCombo || this._options.isShowRewardCombo || this.tryExcuteFail();
    };
    ClearClassiclHelper.pushDefaultLevelEffect = function () {
        this._gameContext.gameSimulator.input({
            inputType: GameInputEnum_1.EGameInputEnum.AddLevelClassic,
            levelData: {
                levelStr: this._gameContext.getGameData().getOriginalLevelData()
            }
        });
        var e = (LoginModel_1.default.getInstance().version || "") + " || " + (LoginModel_1.default.getInstance().isOnline() ? "线上" : "本地") + " || 保底推关卡 批次ID:" + this._gameContext.classicLevelModifier.getCurrentBatchId();
        DDebugInfo_1.DDebugInfo.dot(e);
    };
    ClearClassiclHelper.pushBeforeEndEffect = function () {
        var e = new BeforeEndEffect_1.BeforeEndEffect({});
        return this._options.insertEndEffectId ? this._baseInput.pushEffect(e, this._options.insertEndEffectType, this._options.insertEndEffectId, false) : this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.pushEndEffect = function (e) {
        var t = new EndEffect_1.EndEffect({
            score: this._gameContext.getGameData().getScore(),
            settlementScore: this._gameContext.getGameData().getSettlementScore(),
            perfectMaxScore: this._gameContext.scoreModifier.getPerfectMaxScore(),
            curLv: this._gameContext.getGameData().getLevelId()
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId, false);
    };
    ClearClassiclHelper.tryExcuteFail = function () {
        var e = this._options.tileIds || [];
        if (this._gameContext.getTileMapObject().checkIsDead(e)) {
            if (this._gameContext.classicReviveChecker.canRevive())
                return this.pushReviveEffect();
            this._gameContext.gameModifier.modifyClassicEnd();
            this.pushClassicBeforeFailEffect();
            return this.pushFailEffect();
        }
    };
    ClearClassiclHelper.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearClassiclHelper.pushFailEffect = function () {
        var e = new ClassicFailEffect_1.ClassicFailEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearClassiclHelper.pushReviveEffect = function () {
        this._gameContext.getGameData();
        var e = new ClassicReviveEffect_1.ClassicReviveEffect({});
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearClassiclHelper.pushClearBehaviorFinishEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "ClearBehaviorFinish"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearClassiclHelper.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearClassiclHelper.pushBlockInputRefEffectRoot = function (e, t) {
        var o = new BlockInputRefWithParamEffect_1.BlockInputRefWithParamEffect({
            block: e,
            from: t,
            isValid: 1
        });
        this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
        return o;
    };
    ClearClassiclHelper._gameContext = null;
    ClearClassiclHelper._input = null;
    ClearClassiclHelper._baseInput = null;
    ClearClassiclHelper._options = null;
    __decorate([
        mj.traitEvent("ClrClsHlp_pushBreakBest")
    ], ClearClassiclHelper, "pushBreakBestEffect", null);
    return ClearClassiclHelper;
}());
exports.default = ClearClassiclHelper;

cc._RF.pop();
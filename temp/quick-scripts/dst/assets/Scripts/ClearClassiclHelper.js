
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearClassiclHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFyQ2xhc3NpY2xIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxnRUFBMkQ7QUFDM0QsMERBQXVEO0FBQ3ZELG9FQUFvRTtBQUNwRSxxREFBb0Q7QUFDcEQsNkRBQTREO0FBQzVELCtFQUE4RTtBQUM5RSwyQ0FBMEM7QUFDMUMsaUVBQWdFO0FBQ2hFLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQsNkRBQTREO0FBQzVELHlEQUF3RDtBQUN4RCw2Q0FBNEM7QUFDNUMscUVBQW9FO0FBQ3BFLCtEQUE4RDtBQUM5RCwyREFBMEQ7QUFDMUQsNkNBQTRDO0FBQzVDLHlDQUF3QztBQUN4QyxxREFBb0Q7QUFDcEQsaURBQWdEO0FBQ2hELHFFQUFvRTtBQUNwRSxpRkFBZ0Y7QUFDaEYsNkRBQTREO0FBQzVELHlEQUF3RDtBQUN4RCxxREFBb0Q7QUFDcEQsK0RBQThEO0FBQzlELHlEQUF3RDtBQUN4RDtJQUFBO0lBc2VBLENBQUM7SUFqZVEsK0JBQVcsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNNLHVDQUFtQixHQUExQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDTSw0QkFBUSxHQUFmLFVBQWdCLENBQUs7UUFBTCxrQkFBQSxFQUFBLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTSwrQkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFD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Q0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXBlTSxnQ0FBWSxHQUFHLElBQUksQ0FBQztJQUNwQiwwQkFBTSxHQUFHLElBQUksQ0FBQztJQUNkLDhCQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLDRCQUFRLEdBQUcsSUFBSSxDQUFDO0lBNEp2QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7d0RBQ1Y7SUFzVWpDLDBCQUFDO0NBdGVELEFBc2VDLElBQUE7a0JBdGVvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERGVidWdJbmZvIH0gZnJvbSAnLi9nYW1lUGxheS9kb3QvRERlYnVnSW5mbyc7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEJlZm9yZUVuZEVmZmVjdCB9IGZyb20gJy4vQmVmb3JlRW5kRWZmZWN0JztcbmltcG9ydCB7IEJsb2NrSW5wdXRSZWZFZmZlY3QgfSBmcm9tICcuL0Jsb2NrSW5wdXRSZWZFZmZlY3QnO1xuaW1wb3J0IHsgQmxvY2tJbnB1dFJlZldpdGhQYXJhbUVmZmVjdCB9IGZyb20gJy4vQmxvY2tJbnB1dFJlZldpdGhQYXJhbUVmZmVjdCc7XG5pbXBvcnQgeyBCb21iRWZmZWN0IH0gZnJvbSAnLi9Cb21iRWZmZWN0JztcbmltcG9ydCB7IENoYW5nZUJhdGNoQW5pbUVmZmVjdCB9IGZyb20gJy4vQ2hhbmdlQmF0Y2hBbmltRWZmZWN0JztcbmltcG9ydCB7IENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0IH0gZnJvbSAnLi9DbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCc7XG5pbXBvcnQgeyBDbGFzc2ljRmFpbEVmZmVjdCB9IGZyb20gJy4vQ2xhc3NpY0ZhaWxFZmZlY3QnO1xuaW1wb3J0IHsgQ2xhc3NpY1Jldml2ZUVmZmVjdCB9IGZyb20gJy4vQ2xhc3NpY1Jldml2ZUVmZmVjdCc7XG5pbXBvcnQgeyBDbGVhckVmZmVjdEVmZmVjdCB9IGZyb20gJy4vQ2xlYXJFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgQ29tYm9FZmZlY3QgfSBmcm9tICcuL0NvbWJvRWZmZWN0JztcbmltcG9ydCB7IERheGlhb0NsZWFyRWZmZWN0RWZmZWN0IH0gZnJvbSAnLi9EYXhpYW9DbGVhckVmZmVjdEVmZmVjdCc7XG5pbXBvcnQgeyBEYXhpYW9DbGVhclRpcEVmZmVjdCB9IGZyb20gJy4vRGF4aWFvQ2xlYXJUaXBFZmZlY3QnO1xuaW1wb3J0IHsgRHVveGlhb0NvbWJvRWZmZWN0IH0gZnJvbSAnLi9EdW94aWFvQ29tYm9FZmZlY3QnO1xuaW1wb3J0IHsgRW1wdHlFZmZlY3QgfSBmcm9tICcuL0VtcHR5RWZmZWN0JztcbmltcG9ydCB7IEVuZEVmZmVjdCB9IGZyb20gJy4vRW5kRWZmZWN0JztcbmltcG9ydCB7IEZ1bGxDb21ib0VmZmVjdCB9IGZyb20gJy4vRnVsbENvbWJvRWZmZWN0JztcbmltcG9ydCB7IEhpdFRpcHNFZmZlY3QgfSBmcm9tICcuL0hpdFRpcHNFZmZlY3QnO1xuaW1wb3J0IHsgTW90aXZhdGlvbmFsV29yZHNFZmZlY3QgfSBmcm9tICcuL01vdGl2YXRpb25hbFdvcmRzRWZmZWN0JztcbmltcG9ydCB7IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0IH0gZnJvbSAnLi9Nb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEVmZmVjdCc7XG5pbXBvcnQgeyBQdXNoQmF0Y2hJbmZvRWZmZWN0IH0gZnJvbSAnLi9QdXNoQmF0Y2hJbmZvRWZmZWN0JztcbmltcG9ydCB7IFJld2FyZENvbWJvRWZmZWN0IH0gZnJvbSAnLi9SZXdhcmRDb21ib0VmZmVjdCc7XG5pbXBvcnQgeyBTY29yZUZsb3RFZmZlY3QgfSBmcm9tICcuL1Njb3JlRmxvdEVmZmVjdCc7XG5pbXBvcnQgeyBVcGRhdGVNYXRjaE51bUVmZmVjdCB9IGZyb20gJy4vVXBkYXRlTWF0Y2hOdW1FZmZlY3QnO1xuaW1wb3J0IHsgVXBkYXRlU2NvcmVFZmZlY3QgfSBmcm9tICcuL1VwZGF0ZVNjb3JlRWZmZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyQ2xhc3NpY2xIZWxwZXIge1xuICBzdGF0aWMgX2dhbWVDb250ZXh0ID0gbnVsbDtcbiAgc3RhdGljIF9pbnB1dCA9IG51bGw7XG4gIHN0YXRpYyBfYmFzZUlucHV0ID0gbnVsbDtcbiAgc3RhdGljIF9vcHRpb25zID0gbnVsbDtcbiAgc3RhdGljIG1vZGlmeUNsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dC5jbGVhck1vZGlmaWVyLm1vZGlmeUNsZWFyKHRoaXMuX2lucHV0KTtcbiAgfVxuICBzdGF0aWMgdXBkYXRlQ2FuTWF0Y2hUaWxlcygpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICB9XG4gIHN0YXRpYyBhZGRDb21ibyhlID0gMSkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmNvbWJvTW9kaWZpZXIuYWRkQ29tYm8oZSk7XG4gIH1cbiAgc3RhdGljIGNhbEFkZFNjb3JlKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRCcmVha0Jlc3RTdGF0ZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBhZGRTY29yZTogdGhpcy5fZ2FtZUNvbnRleHQuc2NvcmVNb2RpZmllci5jYWxBZGRTY29yZUNsYXNzaWMoKSxcbiAgICAgIGJyZWFrQmVzdFN0YXRlOiB0aGlzLmdldEJyZWFrQmVzdFN0YXRlKCkubWFwKGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgIHJldHVybiAxID09IHQgJiYgMCA9PSBlW29dO1xuICAgICAgfSlcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBnZXRCcmVha0Jlc3RTdGF0ZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgcmV0dXJuIFtlLmlzQnJlYWtCZXN0KCksIGUuaXNCcmVha1dlZWsoKSwgZS5pc0JyZWFrVG9kYXkoKV07XG4gIH1cbiAgc3RhdGljIG1vZGlmeUNsZWFySGl0VGlwcyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmdhbWVNb2RpZmllci5tb2RpZnlDbGVhckhpdFRpcHMoZVswXSwgZVsxXSk7XG4gIH1cbiAgc3RhdGljIGNhblNob3dDb21ibygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbnRleHQuY29tYm9DaGVja2VyLmNhblNob3dDb21ibygpO1xuICB9XG4gIHN0YXRpYyBnZXRDb21ib051bSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDb21ib051bSgpO1xuICB9XG4gIHN0YXRpYyBnZXREYXhpYW9DYXJkTWF0aEluZm9zKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2dhbWVDb250ZXh0LmRheGlhb0NoZWNrZXIuZ2V0Q2FuQ2xlYXJEYXhpYW9DYXJkSW5mb3MoZSk7XG4gICAgaWYgKHQgJiYgdC5sZW5ndGggPiAwKSByZXR1cm4gdDtcbiAgfVxuICBzdGF0aWMgcGFyc2VEYXhpYW8oZSkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmRheGlhb01vZGlmaWVyLm1vZGlmeURheGlhb0NhcmQodGhpcy5faW5wdXQsIGUpO1xuICAgIHJldHVybiB7XG4gICAgICBjb21ibzogZS5sZW5ndGhcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBydW5DbGVhcihlLCB0LCBvKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQgPSBlO1xuICAgIHRoaXMuX2lucHV0ID0gdDtcbiAgICB0aGlzLl9iYXNlSW5wdXQgPSBvO1xuICAgIHZhciBuID0gdGhpcy5tb2RpZnlDbGVhcigpLFxuICAgICAgciA9IHRoaXMuZ2V0RGF4aWFvQ2FyZE1hdGhJbmZvcyhuKTtcbiAgICBpZiAocikge1xuICAgICAgdmFyIGEgPSB0aGlzLnBhcnNlRGF4aWFvKHIpLmNvbWJvO1xuICAgICAgdGhpcy5hZGRDb21ibyhhKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgdGhpcy5hZGRDb21ibygxKTtcbiAgICB2YXIgbCA9IHRoaXMuY2FsQWRkU2NvcmUoKSxcbiAgICAgIGMgPSBsLmFkZFNjb3JlLFxuICAgICAgdSA9IGwuYnJlYWtCZXN0U3RhdGUsXG4gICAgICBwID0gX19yZWFkKHRoaXMubW9kaWZ5Q2xlYXJIaXRUaXBzKG4pLCAyKSxcbiAgICAgIGYgPSBwWzBdLFxuICAgICAgZCA9IHBbMV0sXG4gICAgICBoID0gdGhpcy5jYW5TaG93Q29tYm8oKSxcbiAgICAgIHkgPSB0aGlzLmdldENvbWJvTnVtKCksXG4gICAgICBtID0gZmFsc2UsXG4gICAgICB2ID0gMCxcbiAgICAgIGcgPSBmYWxzZSxcbiAgICAgIF8gPSBmYWxzZSxcbiAgICAgIFQgPSBmYWxzZTtcbiAgICBpZiAodC5pbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLkF1dG9NZXJnZSkge1xuICAgICAgbSA9IGZhbHNlO1xuICAgICAgZyA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKCk7XG4gICAgICBfID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRIYXNUcmlnZ2VyZWRSZXdhcmRDb21ibygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgQyA9IHRoaXMuX2dhbWVDb250ZXh0Lm1vdGl2YXRpb25hbFdvcmRzQ2hlY2tlci5jYW5TaG93TW90aXZhdGlvbmFsV29yZHMoKTtcbiAgICAgIG0gPSBDLmlzU2hvdztcbiAgICAgIHYgPSBDLmluZGV4O1xuICAgICAgKFQgPSB0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvQ2hlY2tlci5jYW5TaG93RHVveGlhb0NvbWJvKG4pKSAmJiB0aGlzLnBhcnNlRHVveGlhb0NhcmQobik7XG4gICAgfVxuICAgIHRoaXMuX29wdGlvbnMgPSB7XG4gICAgICBpbnB1dDogdCxcbiAgICAgIHRpbGVJZHM6IG4sXG4gICAgICBhZGRTY29yZTogYyxcbiAgICAgIGJyZWFrQmVzdFN0YXRlOiB1LFxuICAgICAgc2hvd0NvbWJvOiBoLFxuICAgICAgY29tYm9OdW06IHksXG4gICAgICBpc1Nob3dNb3RpdmF0aW9uYWxXb3JkczogbSxcbiAgICAgIGluZGV4TW90aXZhdGlvbmFsV29yZHM6IHYsXG4gICAgICBpc1Nob3dGdWxsQ29tYm86IGcsXG4gICAgICBpc1Nob3dSZXdhcmRDb21ibzogXyxcbiAgICAgIGlzU2hvd0R1b3hpYW9Db21ibzogVCxcbiAgICAgIGNsZWFySGl0OiBmLFxuICAgICAgaGlkZUhpdElkczogZCxcbiAgICAgIGRheGlhb0NhcmRNYXRjaEluZm9zOiByXG4gICAgfTtcbiAgICB2YXIgYiA9IHRoaXMucHVzaEJsb2NrSW5wdXRSZWZFZmZlY3RSb290KHRydWUsIFwiY2xlYXJDbGFzc2ljbFN0YXJ0XCIpO1xuICAgIHRoaXMucHVzaENsZWFyRWZmZWN0cygpO1xuICAgIHZhciBFID0gdGhpcy5wdXNoQmxvY2tJbnB1dFJlZkVmZmVjdFJvb3QoZmFsc2UsIFwiY2xlYXJDbGFzc2ljbEVuZFwiKSxcbiAgICAgIFMgPSB0aGlzLmNoZWNrTmVlZEJsb2NrSW5wdXQoYiwgRSk7XG4gICAgYi5kYXRhLmlzVmFsaWQgPSBTO1xuICAgIEUuZGF0YS5pc1ZhbGlkID0gUztcbiAgfVxuICBzdGF0aWMgY2hlY2tOZWVkQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5pc0dldE5leHRCYXRjaEluZm8gPyAxIDogMDtcbiAgfVxuICBzdGF0aWMgcHVzaERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCh7XG4gICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICBmaW5hbE1hdGNoSW5mb3M6IGVcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbiAgc3RhdGljIHB1c2hFbXB0eUVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICBpbnB1dFR5cGU6IHRoaXMuX2lucHV0LmlucHV0VHlwZSxcbiAgICAgIG5hbWU6IFwiRW1wdHlcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBzdGF0aWMgcHVzaERheGlhb0NsZWFyVGlwRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IERheGlhb0NsZWFyVGlwRWZmZWN0KHtcbiAgICAgIHRpbGVJZHM6IHRoaXMuX29wdGlvbnMudGlsZUlkcyxcbiAgICAgIGZpbmFsTWF0Y2hJbmZvczogdGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHBhcnNlRHVveGlhb0NhcmQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fZ2FtZUNvbnRleHQuZHVveGlhb0NoZWNrZXIuZ2V0Q2FuQ2xlYXJEdW94aWFvQ2FyZEluZm9zKGUpO1xuICAgIGlmICghdCkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9Nb2RpZmllci5tb2RpZnlEdW94aWFvQ2xlYXJDb3VudCh0LmNvdW50KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzdGF0aWMgcHVzaENsZWFyRWZmZWN0cygpIHtcbiAgICB0aGlzLnRyeVB1c2hDbGVhckhpdFRpcHNFZmZlY3QoKTtcbiAgICB2YXIgZSA9IHRoaXMuX2Jhc2VJbnB1dC5wdXNoQ2xlYXJFZmZlY3QodGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdLCB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMV0sIHRoaXMuX29wdGlvbnMuaXNTaG93UmV3YXJkQ29tYm8sIHRoaXMuX29wdGlvbnMuaXNTaG93RnVsbENvbWJvKTtcbiAgICB0aGlzLl9vcHRpb25zLmRheGlhb0NhcmRNYXRjaEluZm9zICYmIHRoaXMucHVzaERheGlhb0NsZWFyVGlwRWZmZWN0KCk7XG4gICAgdGhpcy5fb3B0aW9ucy5jbGVhckVmZmVjdE9wdGlvbnMgPSBlO1xuICAgIHRoaXMuX29wdGlvbnMuaXNTaG93RHVveGlhb0NvbWJvICYmIHRoaXMucHVzaEJsb2NrSW5wdXRSZWZFZmZlY3QodHJ1ZSwgXCJkdW94aWFvQ29tYm9TdGFydFwiKTtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvcykge1xuICAgICAgdGhpcy5wdXNoRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QodGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvcyk7XG4gICAgICB0aGlzLnB1c2hDbGVhckVmZmVjdEVmZmVjdCgpO1xuICAgICAgdGhpcy5wdXNoRW1wdHlFZmZlY3QoKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoQWZ0ZXJDbGVhckVmZmVjdCgpO1xuICAgIHRoaXMuX29wdGlvbnMuZGF4aWFvQ2FyZE1hdGNoSW5mb3MgfHwgdGhpcy5wdXNoQ2xlYXJFZmZlY3RFZmZlY3QoKTtcbiAgICB0aGlzLnRyeUdldE5leHRCYXRjaEluZm9QcmUoRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICAgIHRoaXMucGFyc2VCb21iQ2FyZCgpO1xuICAgIHRoaXMucHVzaFVwZGF0ZU1hdGNoTnVtRWZmZWN0KCksIHRoaXMudHJ5U2hvd01vdGl2YXRpb25hbFdvcmRzKCk7XG4gICAgdGhpcy5wdXNoU2NvcmVGbG90RWZmZWN0KCk7XG4gICAgdGhpcy5wdXNoQnJlYWtCZXN0RWZmZWN0KCk7XG4gICAgdGhpcy50cnlFeGN1dGVTaG93Q29tYm8oKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZVJld2FyZENvbWJvKCk7XG4gICAgdGhpcy50cnlFeGN1dGVGdWxsQ29tYm8oKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZUR1b3hpYW9Db21ibygpO1xuICAgIHRoaXMudHJ5RXhjdXRlRW5kKCk7XG4gICAgdGhpcy5wdXNoQ2xlYXJCZWhhdmlvckZpbmlzaEVmZmVjdCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xyQ2xzSGxwX3B1c2hCcmVha0Jlc3RcIilcbiAgc3RhdGljIHB1c2hCcmVha0Jlc3RFZmZlY3QoKSB7fVxuICBzdGF0aWMgdHJ5R2V0TmV4dEJhdGNoSW5mb1ByZShlID0gRUluc2VydFR5cGUuUm9vdCkge1xuICAgIGlmICh0aGlzLl9nYW1lQ29udGV4dC5jbGFzc2ljTGV2ZWxDaGVja2VyLmdldE5lZWRJbml0TmV4dExldmVsKHRoaXMuX29wdGlvbnMudGlsZUlkcykpIHtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldE9wZW5HZW5lcmF0ZVN0YXRlKCkgfHwgKHRoaXMuX29wdGlvbnMuaXNHZXROZXh0QmF0Y2hJbmZvID0gdHJ1ZSk7XG4gICAgICB0aGlzLnB1c2hQdXNoQmF0Y2hJbmZvRWZmZWN0UHJlKGUpO1xuICAgICAgdGhpcy5wdXNoQ2hhbmdlQmF0Y2hBbmltRWZmZWN0UHJlKCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwdXNoUHVzaEJhdGNoSW5mb0VmZmVjdFByZShlID0gRUluc2VydFR5cGUuUm9vdCkge1xuICAgIHZhciB0ID0gbmV3IFB1c2hCYXRjaEluZm9FZmZlY3Qoe1xuICAgICAgaXNPcGVuR2VuZXJhdGVTdGF0ZTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0T3BlbkdlbmVyYXRlU3RhdGUoKVxuICAgIH0pO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIGUpO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2hhbmdlQmF0Y2hBbmltRWZmZWN0UHJlKCkge1xuICAgIHZhciBlID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXROZXh0QmF0Y2hJZCgpLFxuICAgICAgdCA9IG5ldyBDaGFuZ2VCYXRjaEFuaW1FZmZlY3Qoe1xuICAgICAgICBiYXRjaElkOiBlLFxuICAgICAgICBpc09wZW5HZW5lcmF0ZVN0YXRlOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRPcGVuR2VuZXJhdGVTdGF0ZSgpXG4gICAgICB9KTtcbiAgICB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHRyeVB1c2hDbGVhckhpdFRpcHNFZmZlY3QoKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY2xlYXJIaXQgJiYgdGhpcy5fb3B0aW9ucy5oaWRlSGl0SWRzICYmIHRoaXMuX29wdGlvbnMuaGlkZUhpdElkcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5wdXNoQ2xlYXJIaXRUaXBzRWZmZWN0KHRoaXMuX29wdGlvbnMuaGlkZUhpdElkcyk7XG4gIH1cbiAgc3RhdGljIHB1c2hDbGVhckhpdFRpcHNFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IEhpdFRpcHNFZmZlY3Qoe1xuICAgICAgaXNDbGVhckhpdDogdHJ1ZSxcbiAgICAgIHRpbGVJZDE6IGVbMF0gfHwgXCJcIixcbiAgICAgIHRpbGVJZDI6IGVbMV0gfHwgXCJcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHB1c2hBZnRlckNsZWFyRWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdLFxuICAgICAgdCA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1sxXSxcbiAgICAgIG8gPSBuZXcgRW1wdHlFZmZlY3Qoe1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRvdWNoU3RhcnQsXG4gICAgICAgIG5hbWU6IFwidG91Y2hTdGFydFwiXG4gICAgICB9KSxcbiAgICAgIG4gPSB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5Sb290KSxcbiAgICAgIGkgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogbi5sYXN0RWZmZWN0SWQsXG4gICAgICAgIG5ld0VmZmVjdElkOiBuLm5ld0VmZmVjdElkLFxuICAgICAgICB0aWxlSWQ6IGUsXG4gICAgICAgIGxhc3RUaWxlSWQ6IHQsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnNcbiAgICAgIH07XG4gICAgdGhpcy5fYmFzZUlucHV0LmRpc3BhdGNoQ2xlYXJBZnRlckV2ZW50KGkpO1xuICAgIHJldHVybiBuO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2xlYXJFZmZlY3RFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMF0sXG4gICAgICB0ID0gdGhpcy5fb3B0aW9ucy50aWxlSWRzWzFdLFxuICAgICAgbyA9IG5ldyBDbGVhckVmZmVjdEVmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogZSxcbiAgICAgICAgbGFzdFRpbGVJZDogdFxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcGFyc2VCb21iQ2FyZCgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gbnVsbCxcbiAgICAgIG8gPSBmdW5jdGlvbiBvKG4pIHtcbiAgICAgICAgdmFyIGkgPSBlLl9nYW1lQ29udGV4dC50aWxlVHlwZUNoZWNrZXIucGFyc2VCb21iQ2FyZChuKTtcbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB0IHx8ICh0ID0gZS5fYmFzZUlucHV0LnB1c2hQYXJhbGxlckVmZmVjdCgpLm5ld0VmZmVjdElkKTtcbiAgICAgICAgICB2YXIgciA9IGUuZ2V0RGF4aWFvQ2FyZE1hdGhJbmZvcyhpLmJvbWJJZHMpO1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICB2YXIgYSA9IGUucGFyc2VEYXhpYW8ocikuY29tYm87XG4gICAgICAgICAgICBlLmFkZENvbWJvKGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcyA9IGUuX2dhbWVDb250ZXh0LnRpbGVUeXBlc01vZGlmaWVyLm1vZGlmeUJvbWJDYXJkKGUuX2lucHV0LCBpLmJvbWJJZHMpLFxuICAgICAgICAgICAgYyA9IHMuYWRkU2NvcmUsXG4gICAgICAgICAgICBwID0gcy5jb21ibyxcbiAgICAgICAgICAgIGQgPSBzLnNob3dDb21ibyxcbiAgICAgICAgICAgIGggPSBuZXcgQm9tYkVmZmVjdCh7XG4gICAgICAgICAgICAgIHBvczE6IGkucG9zMSxcbiAgICAgICAgICAgICAgcG9zMjogaS5wb3MyLFxuICAgICAgICAgICAgICBib21iSWRzOiBpLmJvbWJJZHNcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgeSA9IGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGgsIEVJbnNlcnRUeXBlLlNlcmlhbCwgdCwgZmFsc2UpLm5ld0VmZmVjdElkO1xuICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICB2YXIgbSA9IG5ldyBEYXhpYW9DbGVhclRpcEVmZmVjdCh7XG4gICAgICAgICAgICAgIHRpbGVJZHM6IGUuX29wdGlvbnMudGlsZUlkcyxcbiAgICAgICAgICAgICAgZmluYWxNYXRjaEluZm9zOiByXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KG0sIEVJbnNlcnRUeXBlLlNlcmlhbCwgeSwgZmFsc2UpO1xuICAgICAgICAgICAgdmFyIHYgPSBuZXcgRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3Qoe1xuICAgICAgICAgICAgICB0aWxlSWRzOiBlLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICAgICAgICAgIGZpbmFsTWF0Y2hJbmZvczogclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh2LCBFSW5zZXJ0VHlwZS5TZXJpYWwsIHksIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIEUgPSBlLl9nYW1lQ29udGV4dC5kdW94aWFvQ2hlY2tlci5pc0hhc0R1b3hpYW9DYXJkKGkuYm9tYklkcyksXG4gICAgICAgICAgICBTID0gZS5fZ2FtZUNvbnRleHQuZHVveGlhb0NoZWNrZXIuaXNJbkR1b3hpYW9Db21ibygpO1xuICAgICAgICAgIGlmIChFKSB7XG4gICAgICAgICAgICBlLnBhcnNlRHVveGlhb0NhcmQoaS5ib21iSWRzKTtcbiAgICAgICAgICAgIGlmICghUykge1xuICAgICAgICAgICAgICB2YXIgSSA9IG5ldyBCbG9ja0lucHV0UmVmRWZmZWN0KHtcbiAgICAgICAgICAgICAgICBibG9jazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmcm9tOiBcImJvbWJEdW94aWFvXCJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KEksIEVJbnNlcnRUeXBlLlNlcmlhbCwgeSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdyA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICAgICAgICAgIGlucHV0VHlwZTogZS5faW5wdXQuaW5wdXRUeXBlLFxuICAgICAgICAgICAgICBuYW1lOiBcIkJvbWJQYXJhbGxlbEdyb3VwXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgQiA9IGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHcsIEVJbnNlcnRUeXBlLlNlcmlhbCwgeSwgZmFsc2UpLm5ld0VmZmVjdElkLFxuICAgICAgICAgICAgeCA9IG5ldyBTY29yZUZsb3RFZmZlY3Qoe1xuICAgICAgICAgICAgICB0aWxlSWQ6IGkuYm9tYklkc1swXSxcbiAgICAgICAgICAgICAgbGFzdFRpbGVJZDogaS5ib21iSWRzWzFdLFxuICAgICAgICAgICAgICBpc0NvbWJvOiBkLFxuICAgICAgICAgICAgICBhZGRTY29yZTogYyxcbiAgICAgICAgICAgICAgc2l6ZTogZS5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoaS5ib21iSWRzWzBdKS5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIE0gPSBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh4LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgQikubmV3RWZmZWN0SWQsXG4gICAgICAgICAgICBEID0gZS5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgICAgICAgIEEgPSBuZXcgVXBkYXRlU2NvcmVFZmZlY3Qoe1xuICAgICAgICAgICAgICBhZGRTY29yZTogYyxcbiAgICAgICAgICAgICAgdGFyZ2V0U2NvcmU6IEQuZ2V0U2NvcmUoKSxcbiAgICAgICAgICAgICAgaXNTaG93Q29tYm86IGRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KEEsIEVJbnNlcnRUeXBlLlNlcmlhbCwgTSwgZmFsc2UpO1xuICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICB2YXIgUiA9IG5ldyBDb21ib0VmZmVjdCh7XG4gICAgICAgICAgICAgIGNvbWJvTnVtOiBwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KFIsIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBCKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5jaGVja0JvbWJNb3RpdldvcmRzKGkuYm9tYklkcywgQik7XG4gICAgICAgICAgaWYgKEUgJiYgIVMpIHtcbiAgICAgICAgICAgIGlmIChlLl9nYW1lQ29udGV4dC5yZXN1bHRDaGVja2VyLmNoZWNrSXNFbmRPckRlYWQoKSkgZS5fZ2FtZUNvbnRleHQuZHVveGlhb01vZGlmaWVyLnJlc2V0RHVveGlhb0NsZWFyQ291bnQoKTtlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIE4gPSBuZXcgRHVveGlhb0NvbWJvRWZmZWN0KHtcbiAgICAgICAgICAgICAgICBkdW94aWFvQ291bnQ6IGUuX2dhbWVDb250ZXh0LmdldER1b3hpYW9DbGVhckNvdW50KClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KE4sIEVJbnNlcnRUeXBlLlNlcmlhbCwgeSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IG5ldyBCbG9ja0lucHV0UmVmRWZmZWN0KHtcbiAgICAgICAgICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgICBmcm9tOiBcImJvbWJEdW94aWFvQ29tYm9FbmRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChJLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIHksIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RJZCA9IEI7XG4gICAgICAgICAgZS5fb3B0aW9ucy5pbnNlcnRFbmRFZmZlY3RUeXBlID0gRUluc2VydFR5cGUuU2VyaWFsO1xuICAgICAgICAgIG8oaS5ib21iSWRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICBvKHRoaXMuX29wdGlvbnMudGlsZUlkcyk7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgfVxuICBzdGF0aWMgY2hlY2tCb21iTW90aXZXb3JkcygpIHt9XG4gIHN0YXRpYyBwdXNoVXBkYXRlTWF0Y2hOdW1FZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgVXBkYXRlTWF0Y2hOdW1FZmZlY3Qoe1xuICAgICAgY2FuTWF0Y2hDYXJkUGFpck51bTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHB1c2hNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdChlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGkgPSBuZXcgTW90aXZhdGlvbmFsV29yZHNFZmZlY3Qoe1xuICAgICAgaW5kZXg6IGUsXG4gICAgICBjb21ib051bTogdCxcbiAgICAgIHRpbGVJZDE6IG8sXG4gICAgICB0aWxlSWQyOiBuXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGksIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcHVzaE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEVmZmVjdCh7XG4gICAgICBpbmRleDogZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHRyeVNob3dNb3RpdmF0aW9uYWxXb3JkcygpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dNb3RpdmF0aW9uYWxXb3Jkcykge1xuICAgICAgdGhpcy5wdXNoTW90aXZhdGlvbmFsV29yZHNFZmZlY3QodGhpcy5fb3B0aW9ucy5pbmRleE1vdGl2YXRpb25hbFdvcmRzLCB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldENvbWJvTnVtKCksIHRoaXMuX29wdGlvbnMudGlsZUlkc1sxXSwgdGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdKTtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEVmZmVjdCh0aGlzLl9vcHRpb25zLmluZGV4TW90aXZhdGlvbmFsV29yZHMpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcHVzaFNjb3JlRmxvdEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1swXSxcbiAgICAgIHQgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMV0sXG4gICAgICBvID0gdGhpcy5fb3B0aW9ucy5zaG93Q29tYm8sXG4gICAgICBuID0gdGhpcy5fb3B0aW9ucy5hZGRTY29yZSxcbiAgICAgIGkgPSBuZXcgU2NvcmVGbG90RWZmZWN0KHtcbiAgICAgICAgdGlsZUlkOiBlLFxuICAgICAgICBsYXN0VGlsZUlkOiB0LFxuICAgICAgICBpc0NvbWJvOiBvLFxuICAgICAgICBhZGRTY29yZTogbixcbiAgICAgICAgc2l6ZTogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZSkuZ2V0Q29udGVudFNpemUoKVxuICAgICAgfSksXG4gICAgICByID0gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QoaSwgRUluc2VydFR5cGUuUGFyYWxsZWwpLFxuICAgICAgYSA9IChyLmxhc3RFZmZlY3RJZCwgci5uZXdFZmZlY3RJZCksXG4gICAgICBzID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgIGMgPSBuZXcgVXBkYXRlU2NvcmVFZmZlY3Qoe1xuICAgICAgICBhZGRTY29yZTogbixcbiAgICAgICAgdGFyZ2V0U2NvcmU6IHMuZ2V0U2NvcmUoKSxcbiAgICAgICAgaXNTaG93Q29tYm86IG9cbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChjLCBFSW5zZXJ0VHlwZS5TZXJpYWwsIGEsIGZhbHNlKTtcbiAgfVxuICBzdGF0aWMgdHJ5RXhjdXRlU2hvd0NvbWJvKCkge1xuICAgIHRoaXMuX29wdGlvbnMuc2hvd0NvbWJvICYmIHRoaXMucHVzaENvbWJvRWZmZWN0KHRoaXMuX29wdGlvbnMuY29tYm9OdW0pO1xuICB9XG4gIHN0YXRpYyBwdXNoQ29tYm9FZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IENvbWJvRWZmZWN0KHtcbiAgICAgIGNvbWJvTnVtOiBlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgdHJ5RXhjdXRlUmV3YXJkQ29tYm8oKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNTaG93UmV3YXJkQ29tYm8pIHtcbiAgICAgIHZhciBlID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICAgIGlmICghZS5nZXRIYXNUcmlnZ2VyZWRSZXdhcmRDb21ibygpKSB7XG4gICAgICAgIGUuc2V0SGFzVHJpZ2dlcmVkUmV3YXJkQ29tYm8odHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZXdhcmRDb21ib0VmZmVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0aWMgcHVzaFJld2FyZENvbWJvRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IFJld2FyZENvbWJvRWZmZWN0KHt9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVGdWxsQ29tYm8oKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNTaG93RnVsbENvbWJvICYmICF0aGlzLl9vcHRpb25zLmlzU2hvd1Jld2FyZENvbWJvKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgICBpZiAoIWUuZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKCkpIHtcbiAgICAgICAgZS5zZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8odHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hGdWxsQ29tYm9FZmZlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZUR1b3hpYW9Db21ibygpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8pIHtcbiAgICAgIHZhciBlO1xuICAgICAgaWYgKHRoaXMuX2dhbWVDb250ZXh0LnJlc3VsdENoZWNrZXIuY2hlY2tJc0VuZE9yRGVhZCgpKSB0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvTW9kaWZpZXIucmVzZXREdW94aWFvQ2xlYXJDb3VudCgpO2Vsc2Uge1xuICAgICAgICB2YXIgdCA9IG5ldyBEdW94aWFvQ29tYm9FZmZlY3Qoe1xuICAgICAgICAgIGR1b3hpYW9Db3VudDogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0RHVveGlhb0NsZWFyQ291bnQoKVxuICAgICAgICB9KTtcbiAgICAgICAgZSA9IHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVzaEJsb2NrSW5wdXRSZWZFZmZlY3QoZmFsc2UsIFwiZHVveGlhb0NvbWJvRW5kXCIpO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwdXNoRnVsbENvbWJvRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IEZ1bGxDb21ib0VmZmVjdCh7fSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgdHJ5RXhjdXRlRW5kKCkge1xuICAgIGlmICh0aGlzLl9nYW1lQ29udGV4dC5yZXN1bHRDaGVja2VyLmNoZWNrUmVzdWx0KCkpIHtcbiAgICAgIHRoaXMuX2dhbWVDb250ZXh0LmdhbWVUaW1lRGF0YS50aW1lO1xuICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS51cGRhdGVBdmdDbGVhckludGVydmFscygpO1xuICAgIH0gZWxzZSB0aGlzLl9vcHRpb25zLmlzU2hvd0Z1bGxDb21ibyB8fCB0aGlzLl9vcHRpb25zLmlzU2hvd1Jld2FyZENvbWJvIHx8IHRoaXMudHJ5RXhjdXRlRmFpbCgpO1xuICB9XG4gIHN0YXRpYyBwdXNoRGVmYXVsdExldmVsRWZmZWN0KCkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdhbWVTaW11bGF0b3IuaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5BZGRMZXZlbENsYXNzaWMsXG4gICAgICBsZXZlbERhdGE6IHtcbiAgICAgICAgbGV2ZWxTdHI6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBlID0gKExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS52ZXJzaW9uIHx8IFwiXCIpICsgXCIgfHwgXCIgKyAoTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmlzT25saW5lKCkgPyBcIue6v+S4ilwiIDogXCLmnKzlnLBcIikgKyBcIiB8fCDkv53lupXmjqjlhbPljaEg5om55qyhSUQ6XCIgKyB0aGlzLl9nYW1lQ29udGV4dC5jbGFzc2ljTGV2ZWxNb2RpZmllci5nZXRDdXJyZW50QmF0Y2hJZCgpO1xuICAgIEREZWJ1Z0luZm8uZG90KGUpO1xuICB9XG4gIHN0YXRpYyBwdXNoQmVmb3JlRW5kRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IEJlZm9yZUVuZEVmZmVjdCh7fSk7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWQgPyB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChlLCB0aGlzLl9vcHRpb25zLmluc2VydEVuZEVmZmVjdFR5cGUsIHRoaXMuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWQsIGZhbHNlKSA6IHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcHVzaEVuZEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgRW5kRWZmZWN0KHtcbiAgICAgIHNjb3JlOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFNjb3JlKCksXG4gICAgICBzZXR0bGVtZW50U2NvcmU6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0U2V0dGxlbWVudFNjb3JlKCksXG4gICAgICBwZXJmZWN0TWF4U2NvcmU6IHRoaXMuX2dhbWVDb250ZXh0LnNjb3JlTW9kaWZpZXIuZ2V0UGVyZmVjdE1heFNjb3JlKCksXG4gICAgICBjdXJMdjogdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbElkKClcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuU2VyaWFsLCBlLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gIH1cbiAgc3RhdGljIHRyeUV4Y3V0ZUZhaWwoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9vcHRpb25zLnRpbGVJZHMgfHwgW107XG4gICAgaWYgKHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jaGVja0lzRGVhZChlKSkge1xuICAgICAgaWYgKHRoaXMuX2dhbWVDb250ZXh0LmNsYXNzaWNSZXZpdmVDaGVja2VyLmNhblJldml2ZSgpKSByZXR1cm4gdGhpcy5wdXNoUmV2aXZlRWZmZWN0KCk7XG4gICAgICB0aGlzLl9nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIubW9kaWZ5Q2xhc3NpY0VuZCgpO1xuICAgICAgdGhpcy5wdXNoQ2xhc3NpY0JlZm9yZUZhaWxFZmZlY3QoKTtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hGYWlsRWZmZWN0KCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBwdXNoQ2xhc3NpY0JlZm9yZUZhaWxFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgQ2xhc3NpY0JlZm9yZUZhaWxFZmZlY3Qoe30pO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwdXNoRmFpbEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBDbGFzc2ljRmFpbEVmZmVjdCh7fSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwdXNoUmV2aXZlRWZmZWN0KCkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgdmFyIGUgPSBuZXcgQ2xhc3NpY1Jldml2ZUVmZmVjdCh7fSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2xlYXJCZWhhdmlvckZpbmlzaEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICBpbnB1dFR5cGU6IHRoaXMuX2lucHV0LmlucHV0VHlwZSxcbiAgICAgIG5hbWU6IFwiQ2xlYXJCZWhhdmlvckZpbmlzaFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwdXNoQmxvY2tJbnB1dFJlZkVmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8gPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICBibG9jazogZSxcbiAgICAgIGZyb206IHRcbiAgICB9KTtcbiAgICB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHB1c2hCbG9ja0lucHV0UmVmRWZmZWN0Um9vdChlLCB0KSB7XG4gICAgdmFyIG8gPSBuZXcgQmxvY2tJbnB1dFJlZldpdGhQYXJhbUVmZmVjdCh7XG4gICAgICBibG9jazogZSxcbiAgICAgIGZyb206IHQsXG4gICAgICBpc1ZhbGlkOiAxXG4gICAgfSk7XG4gICAgdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUm9vdCk7XG4gICAgcmV0dXJuIG87XG4gIH1cbn0iXX0=
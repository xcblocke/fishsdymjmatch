"use strict";
cc._RF.push(module, 'cadd6E7lEtP7KMGjSjInvKe', 'ClearTravelHelper');
// Scripts/ClearTravelHelper.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BlockInputEffect_1 = require("./BlockInputEffect");
var BlockInputRefEffect_1 = require("./BlockInputRefEffect");
var BombEffect_1 = require("./BombEffect");
var ClearEffectEffect_1 = require("./ClearEffectEffect");
var CollectFlyEffect_1 = require("./CollectFlyEffect");
var DaxiaoClearEffectEffect_1 = require("./DaxiaoClearEffectEffect");
var DaxiaoClearTipEffect_1 = require("./DaxiaoClearTipEffect");
var DuoxiaoComboEffect_1 = require("./DuoxiaoComboEffect");
var EmptyEffect_1 = require("./EmptyEffect");
var FailEffect_1 = require("./FailEffect");
var GoalAchieveEffect_1 = require("./GoalAchieveEffect");
var HitTipsEffect_1 = require("./HitTipsEffect");
var TravelEndEffect_1 = require("./TravelEndEffect");
var UpdateCollectTargetEffect_1 = require("./UpdateCollectTargetEffect");
var UpdateMatchNumEffect_1 = require("./UpdateMatchNumEffect");
var YogaCardEffect_1 = require("./YogaCardEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var ClearTravelHelper = /** @class */ (function () {
    function ClearTravelHelper() {
    }
    ClearTravelHelper.modifyClear = function () {
        return this._gameContext.clearModifier.modifyClear(this._input);
    };
    ClearTravelHelper.modifyTileTypesClear = function () {
        return this._gameContext.clearModifier.modifyTileTypesClear(this._input);
    };
    ClearTravelHelper.getCollectDetails = function (e) {
        var t = this._gameContext.getTileMapObject(), o = [];
        e.forEach(function (e) {
            var n, i = t.getTileObject(e), r = null === (n = null == t ? void 0 : t.collectSystem) || void 0 === n ? void 0 : n.getCollectDetailByCardId(i.type, i.cardId);
            r && o.push(r);
        });
        return o;
    };
    ClearTravelHelper.updateCanMatchTiles = function () {
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearTravelHelper.modifyClearHitTips = function (e) {
        return this._gameContext.gameModifier.modifyClearHitTips(e[0], e[1]);
    };
    ClearTravelHelper.getDaxiaoCardMathInfos = function (e) {
        var t = this._gameContext.daxiaoChecker.getCanClearDaxiaoCardInfos(e);
        if (t && t.length > 0)
            return t;
    };
    ClearTravelHelper.parseDaxiao = function (e) {
        this._gameContext.daxiaoModifier.modifyDaxiaoCard(this._input, e);
        return {
            combo: e.length
        };
    };
    ClearTravelHelper.runClear = function (e, t, o) {
        this._gameContext = e;
        this._input = t;
        this._baseInput = o;
        var n = this.modifyClear(), r = this.getDaxiaoCardMathInfos(n);
        r && this.parseDaxiao(r);
        var a = this.modifyTileTypesClear(), l = __read(this.modifyClearHitTips(n), 2), s = l[0], c = l[1], u = this._gameContext.getGameData().isAutoMerging();
        this.updateCanMatchTiles();
        var p = false;
        u || (p = this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(n)) && this.parseDuoxiaoCard(n);
        this._options = {
            input: t,
            tileIds: n,
            specialClearResult: a,
            clearHit: s,
            hideHitIds: c,
            isShowDuoxiaoCombo: p,
            isAutoMerging: u,
            daxiaoCardMatchInfos: r
        };
        this.pushClearEffects();
    };
    ClearTravelHelper.pushDaxiaoClearEffectEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "Empty"
        }), t = this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Serial, this._options.clearEffectOptions.newEffectId, false);
        this.pushClearEffectEffect(t.newEffectId);
        var o = new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: this._options.daxiaoCardMatchInfos
        });
        return this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel, t.newEffectId, false);
    };
    ClearTravelHelper.pushEmptyEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "Empty"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearTravelHelper.parseDuoxiaoCard = function (e) {
        var t = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(e);
        if (!t)
            return false;
        this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(t.count);
        return true;
    };
    ClearTravelHelper.pushDaxiaoClearTipEffect = function () {
        var e = new DaxiaoClearTipEffect_1.DaxiaoClearTipEffect({
            tileIds: this._options.tileIds,
            finalMatchInfos: this._options.daxiaoCardMatchInfos
        });
        return this._baseInput.pushEffectWithNodeByName(BehaviorsMapping_1.BehaviorsMapping.Clear, e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearTravelHelper.pushClearEffects = function () {
        this.tryPushClearHitTipsEffect();
        var e = this._baseInput.pushClearEffect(this._options.tileIds[0], this._options.tileIds[1], false, false);
        this._options.clearEffectOptions = e;
        this._options.daxiaoCardMatchInfos && this.pushDaxiaoClearEffectEffect();
        this._options.isShowDuoxiaoCombo && this.pushBlockInputRefEffect(true, "duoxiaoComboStart");
        var t = new Map();
        t.set("clearEffectOptions", e);
        var o = this.pushAfterClearEffect(t);
        this._options.afterClearEffectOptions = o;
        var n = null;
        this._options.daxiaoCardMatchInfos || (n = this.pushClearEffectEffect());
        this._options.daxiaoCardMatchInfos && this.pushDaxiaoClearTipEffect();
        if (!this._options.isAutoMerging) {
            var i, r = this.tryPushCollectSpecialCardEffect(t);
            i = r ? this.pushUpdateSpecialCollectTargetEffect(r) : this.pushUpdateNormalCollectTargetEffect(n);
            this.tryExcuteDuoxiaoCombo();
            this.tryExcuteEnd(i);
        }
        this.pushClearBehaviorFinishEffect();
    };
    ClearTravelHelper.tryExcuteDuoxiaoCombo = function () {
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
    ClearTravelHelper.tryPushCollectSpecialCardEffect = function (e) {
        if (this._options.specialClearResult) {
            var t = this._options.specialClearResult.yogaCardIds;
            return t.length > 0 ? this.pushYogaCardEffect(e, t) : void 0;
        }
    };
    ClearTravelHelper.pushYogaCardEffect = function (e, t) {
        var o = new YogaCardEffect_1.YogaCardEffect({
            tileIds: t
        }), n = e.get("clearEffectOptions");
        return this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel, n.lastEffectId, false);
    };
    ClearTravelHelper.pushUpdateSpecialCollectTargetEffect = function (e) {
        var t = this._options.specialClearResult.yogaCardIds, o = this.getCollectDetails(t);
        if (o.length > 0)
            return this.pushUpdateCollectTargetEffect(o, e);
    };
    ClearTravelHelper.pushUpdateCollectTargetEffect = function (e, t) {
        var o = new UpdateCollectTargetEffect_1.UpdateCollectTargetEffect({
            collectDetails: e
        });
        return this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, t.newEffectId, false);
    };
    ClearTravelHelper.pushCollectFlyEffect = function (e, t) {
        var o, n;
        if (0 === e.length)
            return t;
        var i = this._gameContext.getTileMapObject(), l = null;
        try {
            for (var c = __values(e), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = i.getTileObject(p);
                if (f && f.type === TileTypeEnum_1.ETileType.RollCard) {
                    l = p;
                    break;
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        l || (l = e[0]);
        var h = i.getTileObject(l);
        if (!h)
            return t;
        var y = h.type === TileTypeEnum_1.ETileType.RollCard ? "" + h.type : h.type + "_" + h.cardId, m = new CollectFlyEffect_1.CollectFlyEffect({
            collectKey: y,
            tileType: h.type
        });
        return this._baseInput.pushEffect(m, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearTravelHelper.pushUpdateNormalCollectTargetEffect = function (e) {
        var t = this.getCollectDetails(this._options.tileIds);
        if (t.length > 0) {
            var o = this.pushCollectFlyEffect(this._options.tileIds, e);
            return this.pushUpdateCollectTargetEffect(t, o);
        }
    };
    ClearTravelHelper.tryPushClearHitTipsEffect = function () {
        if (this._options.clearHit && this._options.hideHitIds && this._options.hideHitIds.length > 0)
            return this.pushClearHitTipsEffect(this._options.hideHitIds);
    };
    ClearTravelHelper.pushClearHitTipsEffect = function (e) {
        var t = new HitTipsEffect_1.HitTipsEffect({
            isClearHit: true,
            tileId1: e[0] || "",
            tileId2: e[1] || ""
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearTravelHelper.pushAfterClearEffect = function (e) {
        var t = this._options.tileIds[0], o = this._options.tileIds[1], n = new EmptyEffect_1.EmptyEffect({
            inputType: GameInputEnum_1.EGameInputEnum.TouchStart,
            name: "touchStart"
        }), i = e.get("clearEffectOptions"), r = this._baseInput.pushEffect(n, BehaviorsEnum_1.EInsertType.Serial, i.newEffectId), s = {
            lastEffectId: r.lastEffectId,
            newEffectId: r.newEffectId,
            tileId: t,
            lastTileId: o,
            options: this._options
        };
        this._baseInput.dispatchClearAfterEvent(s);
        return r;
    };
    ClearTravelHelper.pushClearEffectEffect = function (e) {
        var t = this._options.tileIds[0], o = this._options.tileIds[1], n = new ClearEffectEffect_1.ClearEffectEffect({
            tileId: t,
            lastTileId: o
        });
        return e ? this._baseInput.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, e, false) : this._baseInput.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearTravelHelper.parseBombCard = function () {
        var e = this, t = null, o = function o(n) {
            var i = e._gameContext.tileTypeChecker.parseBombCard(n);
            if (i) {
                t || (t = e._baseInput.pushParallerEffect().newEffectId);
                e._gameContext.tileTypesModifier.modifyBombCard_travel(e._input, i.bombIds);
                var r = new BombEffect_1.BombEffect({
                    pos1: i.pos1,
                    pos2: i.pos2,
                    bombIds: i.bombIds
                }), l = e._baseInput.pushEffect(r, BehaviorsEnum_1.EInsertType.Serial, t, false).newEffectId, s = new EmptyEffect_1.EmptyEffect({
                    inputType: e._input.inputType,
                    name: "BombParallelGroup"
                }), c = e._baseInput.pushEffect(s, BehaviorsEnum_1.EInsertType.Serial, l, false).newEffectId;
                e._options.insertEndEffectId = c;
                e._options.insertEndEffectType = BehaviorsEnum_1.EInsertType.Serial;
                o(i.bombIds);
            }
        };
        o(this._options.tileIds);
        this._gameContext.getTileMapObject().updateCanMatchTiles();
    };
    ClearTravelHelper.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this._gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearTravelHelper.tryExcuteEnd = function (e) {
        if (this._gameContext.resultChecker.checkResult()) {
            var t = this._gameContext.gameTimeData.time;
            this._gameContext.getGameData().updateAvgClearIntervals();
            this._gameContext.gameModifier.modifyWinForTravel(t);
            this.pushBlockInputEffect();
            return this.pushGoalAchieveEffect(e);
        }
        this.shouldCheckFail() && this.tryExcuteFail();
    };
    ClearTravelHelper.pushBlockInputEffect = function () {
        var e = new BlockInputEffect_1.BlockInputEffect({
            block: true
        });
        this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearTravelHelper.pushGoalAchieveEffect = function (e) {
        this._gameContext.getGameData().setAutoMerging(true);
        var t = new GoalAchieveEffect_1.GoalAchieveEffect({});
        return e && e.newEffectId ? this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Serial, e.newEffectId, false) : this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearTravelHelper.pushEndEffect = function () {
        var e, t, o, n = null !== (o = null === (t = null === (e = this._gameContext.getTileMapObject()) || void 0 === e ? void 0 : e.collectSystem) || void 0 === t ? void 0 : t.getAllCollectDetails()) && void 0 !== o ? o : [], i = new TravelEndEffect_1.TravelEndEffect({
            curLv: this._gameContext.getGameData().getLevelId(),
            collects: n
        });
        return this._options.insertEndEffectId ? this._baseInput.pushEffect(i, this._options.insertEndEffectType, this._options.insertEndEffectId, false) : this._baseInput.pushEffect(i, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearTravelHelper.shouldCheckFail = function () {
        return true;
    };
    ClearTravelHelper.tryExcuteFail = function () {
        var e = this._options.tileIds || [];
        if (this._gameContext.getTileMapObject().checkIsDead(e))
            return this.pushFailEffect();
    };
    ClearTravelHelper.getPreShuffleData = function () {
        return null;
    };
    ClearTravelHelper.pushFailEffect = function () {
        var e = this._gameContext.getGameData(), t = new FailEffect_1.FailEffect({
            shuffleNum: e.getShuffleNums(),
            preShuffleData: this.getPreShuffleData()
        });
        return this._baseInput.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearTravelHelper.pushClearBehaviorFinishEffect = function () {
        var e = new EmptyEffect_1.EmptyEffect({
            inputType: this._input.inputType,
            name: "ClearBehaviorFinish"
        });
        return this._baseInput.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    ClearTravelHelper.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this._baseInput.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    ClearTravelHelper._gameContext = null;
    ClearTravelHelper._input = null;
    ClearTravelHelper._baseInput = null;
    ClearTravelHelper._options = null;
    __decorate([
        mj.traitEvent("ClrTravelHlp_collTagEff")
    ], ClearTravelHelper, "pushUpdateCollectTargetEffect", null);
    __decorate([
        mj.traitEvent("ClrTravelHlp_shldChkFail")
    ], ClearTravelHelper, "shouldCheckFail", null);
    __decorate([
        mj.traitEvent("ClrTravelHlp_tryExcFail")
    ], ClearTravelHelper, "tryExcuteFail", null);
    __decorate([
        mj.traitEvent("ClrTravelHlp_getPreShf")
    ], ClearTravelHelper, "getPreShuffleData", null);
    return ClearTravelHelper;
}());
exports.default = ClearTravelHelper;

cc._RF.pop();
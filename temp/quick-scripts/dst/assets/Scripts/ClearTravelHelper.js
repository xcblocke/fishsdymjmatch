
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ClearTravelHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NsZWFyVHJhdmVsSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFLGtFQUE4RDtBQUM5RCx1REFBc0Q7QUFDdEQsNkRBQTREO0FBQzVELDJDQUEwQztBQUMxQyx5REFBd0Q7QUFDeEQsdURBQXNEO0FBQ3RELHFFQUFvRTtBQUNwRSwrREFBOEQ7QUFDOUQsMkRBQTBEO0FBQzFELDZDQUE0QztBQUM1QywyQ0FBMEM7QUFDMUMseURBQXdEO0FBQ3hELGlEQUFnRDtBQUNoRCxxREFBb0Q7QUFDcEQseUVBQXdFO0FBQ3hFLCtEQUE4RDtBQUM5RCxtREFBa0Q7QUFDbEQsK0RBQThEO0FBQzlEO0lBQUE7SUFtVkEsQ0FBQztJQTlVUSw2QkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ00sc0NBQW9CLEdBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNNLG1DQUFpQixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFDMUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUN0QixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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dXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBCbG9ja0lucHV0RWZmZWN0IH0gZnJvbSAnLi9CbG9ja0lucHV0RWZmZWN0JztcbmltcG9ydCB7IEJsb2NrSW5wdXRSZWZFZmZlY3QgfSBmcm9tICcuL0Jsb2NrSW5wdXRSZWZFZmZlY3QnO1xuaW1wb3J0IHsgQm9tYkVmZmVjdCB9IGZyb20gJy4vQm9tYkVmZmVjdCc7XG5pbXBvcnQgeyBDbGVhckVmZmVjdEVmZmVjdCB9IGZyb20gJy4vQ2xlYXJFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgQ29sbGVjdEZseUVmZmVjdCB9IGZyb20gJy4vQ29sbGVjdEZseUVmZmVjdCc7XG5pbXBvcnQgeyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCB9IGZyb20gJy4vRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QnO1xuaW1wb3J0IHsgRGF4aWFvQ2xlYXJUaXBFZmZlY3QgfSBmcm9tICcuL0RheGlhb0NsZWFyVGlwRWZmZWN0JztcbmltcG9ydCB7IER1b3hpYW9Db21ib0VmZmVjdCB9IGZyb20gJy4vRHVveGlhb0NvbWJvRWZmZWN0JztcbmltcG9ydCB7IEVtcHR5RWZmZWN0IH0gZnJvbSAnLi9FbXB0eUVmZmVjdCc7XG5pbXBvcnQgeyBGYWlsRWZmZWN0IH0gZnJvbSAnLi9GYWlsRWZmZWN0JztcbmltcG9ydCB7IEdvYWxBY2hpZXZlRWZmZWN0IH0gZnJvbSAnLi9Hb2FsQWNoaWV2ZUVmZmVjdCc7XG5pbXBvcnQgeyBIaXRUaXBzRWZmZWN0IH0gZnJvbSAnLi9IaXRUaXBzRWZmZWN0JztcbmltcG9ydCB7IFRyYXZlbEVuZEVmZmVjdCB9IGZyb20gJy4vVHJhdmVsRW5kRWZmZWN0JztcbmltcG9ydCB7IFVwZGF0ZUNvbGxlY3RUYXJnZXRFZmZlY3QgfSBmcm9tICcuL1VwZGF0ZUNvbGxlY3RUYXJnZXRFZmZlY3QnO1xuaW1wb3J0IHsgVXBkYXRlTWF0Y2hOdW1FZmZlY3QgfSBmcm9tICcuL1VwZGF0ZU1hdGNoTnVtRWZmZWN0JztcbmltcG9ydCB7IFlvZ2FDYXJkRWZmZWN0IH0gZnJvbSAnLi9Zb2dhQ2FyZEVmZmVjdCc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJUcmF2ZWxIZWxwZXIge1xuICBzdGF0aWMgX2dhbWVDb250ZXh0ID0gbnVsbDtcbiAgc3RhdGljIF9pbnB1dCA9IG51bGw7XG4gIHN0YXRpYyBfYmFzZUlucHV0ID0gbnVsbDtcbiAgc3RhdGljIF9vcHRpb25zID0gbnVsbDtcbiAgc3RhdGljIG1vZGlmeUNsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dC5jbGVhck1vZGlmaWVyLm1vZGlmeUNsZWFyKHRoaXMuX2lucHV0KTtcbiAgfVxuICBzdGF0aWMgbW9kaWZ5VGlsZVR5cGVzQ2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmNsZWFyTW9kaWZpZXIubW9kaWZ5VGlsZVR5cGVzQ2xlYXIodGhpcy5faW5wdXQpO1xuICB9XG4gIHN0YXRpYyBnZXRDb2xsZWN0RGV0YWlscyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBvID0gW107XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgbixcbiAgICAgICAgaSA9IHQuZ2V0VGlsZU9iamVjdChlKSxcbiAgICAgICAgciA9IG51bGwgPT09IChuID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5jb2xsZWN0U3lzdGVtKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdldENvbGxlY3REZXRhaWxCeUNhcmRJZChpLnR5cGUsIGkuY2FyZElkKTtcbiAgICAgIHIgJiYgby5wdXNoKHIpO1xuICAgIH0pO1xuICAgIHJldHVybiBvO1xuICB9XG4gIHN0YXRpYyB1cGRhdGVDYW5NYXRjaFRpbGVzKCkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gIH1cbiAgc3RhdGljIG1vZGlmeUNsZWFySGl0VGlwcyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmdhbWVNb2RpZmllci5tb2RpZnlDbGVhckhpdFRpcHMoZVswXSwgZVsxXSk7XG4gIH1cbiAgc3RhdGljIGdldERheGlhb0NhcmRNYXRoSW5mb3MoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fZ2FtZUNvbnRleHQuZGF4aWFvQ2hlY2tlci5nZXRDYW5DbGVhckRheGlhb0NhcmRJbmZvcyhlKTtcbiAgICBpZiAodCAmJiB0Lmxlbmd0aCA+IDApIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBwYXJzZURheGlhbyhlKSB7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQuZGF4aWFvTW9kaWZpZXIubW9kaWZ5RGF4aWFvQ2FyZCh0aGlzLl9pbnB1dCwgZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbWJvOiBlLmxlbmd0aFxuICAgIH07XG4gIH1cbiAgc3RhdGljIHJ1bkNsZWFyKGUsIHQsIG8pIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dCA9IGU7XG4gICAgdGhpcy5faW5wdXQgPSB0O1xuICAgIHRoaXMuX2Jhc2VJbnB1dCA9IG87XG4gICAgdmFyIG4gPSB0aGlzLm1vZGlmeUNsZWFyKCksXG4gICAgICByID0gdGhpcy5nZXREYXhpYW9DYXJkTWF0aEluZm9zKG4pO1xuICAgIHIgJiYgdGhpcy5wYXJzZURheGlhbyhyKTtcbiAgICB2YXIgYSA9IHRoaXMubW9kaWZ5VGlsZVR5cGVzQ2xlYXIoKSxcbiAgICAgIGwgPSBfX3JlYWQodGhpcy5tb2RpZnlDbGVhckhpdFRpcHMobiksIDIpLFxuICAgICAgcyA9IGxbMF0sXG4gICAgICBjID0gbFsxXSxcbiAgICAgIHUgPSB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmlzQXV0b01lcmdpbmcoKTtcbiAgICB0aGlzLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICB2YXIgcCA9IGZhbHNlO1xuICAgIHUgfHwgKHAgPSB0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvQ2hlY2tlci5jYW5TaG93RHVveGlhb0NvbWJvKG4pKSAmJiB0aGlzLnBhcnNlRHVveGlhb0NhcmQobik7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIGlucHV0OiB0LFxuICAgICAgdGlsZUlkczogbixcbiAgICAgIHNwZWNpYWxDbGVhclJlc3VsdDogYSxcbiAgICAgIGNsZWFySGl0OiBzLFxuICAgICAgaGlkZUhpdElkczogYyxcbiAgICAgIGlzU2hvd0R1b3hpYW9Db21ibzogcCxcbiAgICAgIGlzQXV0b01lcmdpbmc6IHUsXG4gICAgICBkYXhpYW9DYXJkTWF0Y2hJbmZvczogclxuICAgIH07XG4gICAgdGhpcy5wdXNoQ2xlYXJFZmZlY3RzKCk7XG4gIH1cbiAgc3RhdGljIHB1c2hEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICAgIGlucHV0VHlwZTogdGhpcy5faW5wdXQuaW5wdXRUeXBlLFxuICAgICAgICBuYW1lOiBcIkVtcHR5XCJcbiAgICAgIH0pLFxuICAgICAgdCA9IHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlNlcmlhbCwgdGhpcy5fb3B0aW9ucy5jbGVhckVmZmVjdE9wdGlvbnMubmV3RWZmZWN0SWQsIGZhbHNlKTtcbiAgICB0aGlzLnB1c2hDbGVhckVmZmVjdEVmZmVjdCh0Lm5ld0VmZmVjdElkKTtcbiAgICB2YXIgbyA9IG5ldyBEYXhpYW9DbGVhckVmZmVjdEVmZmVjdCh7XG4gICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICBmaW5hbE1hdGNoSW5mb3M6IHRoaXMuX29wdGlvbnMuZGF4aWFvQ2FyZE1hdGNoSW5mb3NcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUGFyYWxsZWwsIHQubmV3RWZmZWN0SWQsIGZhbHNlKTtcbiAgfVxuICBzdGF0aWMgcHVzaEVtcHR5RWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IEVtcHR5RWZmZWN0KHtcbiAgICAgIGlucHV0VHlwZTogdGhpcy5faW5wdXQuaW5wdXRUeXBlLFxuICAgICAgbmFtZTogXCJFbXB0eVwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwYXJzZUR1b3hpYW9DYXJkKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2dhbWVDb250ZXh0LmR1b3hpYW9DaGVja2VyLmdldENhbkNsZWFyRHVveGlhb0NhcmRJbmZvcyhlKTtcbiAgICBpZiAoIXQpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5kdW94aWFvTW9kaWZpZXIubW9kaWZ5RHVveGlhb0NsZWFyQ291bnQodC5jb3VudCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgc3RhdGljIHB1c2hEYXhpYW9DbGVhclRpcEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBEYXhpYW9DbGVhclRpcEVmZmVjdCh7XG4gICAgICB0aWxlSWRzOiB0aGlzLl9vcHRpb25zLnRpbGVJZHMsXG4gICAgICBmaW5hbE1hdGNoSW5mb3M6IHRoaXMuX29wdGlvbnMuZGF4aWFvQ2FyZE1hdGNoSW5mb3NcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3RXaXRoTm9kZUJ5TmFtZShCZWhhdmlvcnNNYXBwaW5nLkNsZWFyLCBlLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHB1c2hDbGVhckVmZmVjdHMoKSB7XG4gICAgdGhpcy50cnlQdXNoQ2xlYXJIaXRUaXBzRWZmZWN0KCk7XG4gICAgdmFyIGUgPSB0aGlzLl9iYXNlSW5wdXQucHVzaENsZWFyRWZmZWN0KHRoaXMuX29wdGlvbnMudGlsZUlkc1swXSwgdGhpcy5fb3B0aW9ucy50aWxlSWRzWzFdLCBmYWxzZSwgZmFsc2UpO1xuICAgIHRoaXMuX29wdGlvbnMuY2xlYXJFZmZlY3RPcHRpb25zID0gZTtcbiAgICB0aGlzLl9vcHRpb25zLmRheGlhb0NhcmRNYXRjaEluZm9zICYmIHRoaXMucHVzaERheGlhb0NsZWFyRWZmZWN0RWZmZWN0KCk7XG4gICAgdGhpcy5fb3B0aW9ucy5pc1Nob3dEdW94aWFvQ29tYm8gJiYgdGhpcy5wdXNoQmxvY2tJbnB1dFJlZkVmZmVjdCh0cnVlLCBcImR1b3hpYW9Db21ib1N0YXJ0XCIpO1xuICAgIHZhciB0ID0gbmV3IE1hcCgpO1xuICAgIHQuc2V0KFwiY2xlYXJFZmZlY3RPcHRpb25zXCIsIGUpO1xuICAgIHZhciBvID0gdGhpcy5wdXNoQWZ0ZXJDbGVhckVmZmVjdCh0KTtcbiAgICB0aGlzLl9vcHRpb25zLmFmdGVyQ2xlYXJFZmZlY3RPcHRpb25zID0gbztcbiAgICB2YXIgbiA9IG51bGw7XG4gICAgdGhpcy5fb3B0aW9ucy5kYXhpYW9DYXJkTWF0Y2hJbmZvcyB8fCAobiA9IHRoaXMucHVzaENsZWFyRWZmZWN0RWZmZWN0KCkpO1xuICAgIHRoaXMuX29wdGlvbnMuZGF4aWFvQ2FyZE1hdGNoSW5mb3MgJiYgdGhpcy5wdXNoRGF4aWFvQ2xlYXJUaXBFZmZlY3QoKTtcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMuaXNBdXRvTWVyZ2luZykge1xuICAgICAgdmFyIGksXG4gICAgICAgIHIgPSB0aGlzLnRyeVB1c2hDb2xsZWN0U3BlY2lhbENhcmRFZmZlY3QodCk7XG4gICAgICBpID0gciA/IHRoaXMucHVzaFVwZGF0ZVNwZWNpYWxDb2xsZWN0VGFyZ2V0RWZmZWN0KHIpIDogdGhpcy5wdXNoVXBkYXRlTm9ybWFsQ29sbGVjdFRhcmdldEVmZmVjdChuKTtcbiAgICAgIHRoaXMudHJ5RXhjdXRlRHVveGlhb0NvbWJvKCk7XG4gICAgICB0aGlzLnRyeUV4Y3V0ZUVuZChpKTtcbiAgICB9XG4gICAgdGhpcy5wdXNoQ2xlYXJCZWhhdmlvckZpbmlzaEVmZmVjdCgpO1xuICB9XG4gIHN0YXRpYyB0cnlFeGN1dGVEdW94aWFvQ29tYm8oKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNTaG93RHVveGlhb0NvbWJvKSB7XG4gICAgICB2YXIgZTtcbiAgICAgIGlmICh0aGlzLl9nYW1lQ29udGV4dC5yZXN1bHRDaGVja2VyLmNoZWNrSXNFbmRPckRlYWQoKSkgdGhpcy5fZ2FtZUNvbnRleHQuZHVveGlhb01vZGlmaWVyLnJlc2V0RHVveGlhb0NsZWFyQ291bnQoKTtlbHNlIHtcbiAgICAgICAgdmFyIHQgPSBuZXcgRHVveGlhb0NvbWJvRWZmZWN0KHtcbiAgICAgICAgICBkdW94aWFvQ291bnQ6IHRoaXMuX2dhbWVDb250ZXh0LmdldER1b3hpYW9DbGVhckNvdW50KClcbiAgICAgICAgfSk7XG4gICAgICAgIGUgPSB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hCbG9ja0lucHV0UmVmRWZmZWN0KGZhbHNlLCBcImR1b3hpYW9Db21ib0VuZFwiKTtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdHJ5UHVzaENvbGxlY3RTcGVjaWFsQ2FyZEVmZmVjdChlKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuc3BlY2lhbENsZWFyUmVzdWx0KSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX29wdGlvbnMuc3BlY2lhbENsZWFyUmVzdWx0LnlvZ2FDYXJkSWRzO1xuICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMCA/IHRoaXMucHVzaFlvZ2FDYXJkRWZmZWN0KGUsIHQpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgcHVzaFlvZ2FDYXJkRWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgbyA9IG5ldyBZb2dhQ2FyZEVmZmVjdCh7XG4gICAgICAgIHRpbGVJZHM6IHRcbiAgICAgIH0pLFxuICAgICAgbiA9IGUuZ2V0KFwiY2xlYXJFZmZlY3RPcHRpb25zXCIpO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgbi5sYXN0RWZmZWN0SWQsIGZhbHNlKTtcbiAgfVxuICBzdGF0aWMgcHVzaFVwZGF0ZVNwZWNpYWxDb2xsZWN0VGFyZ2V0RWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX29wdGlvbnMuc3BlY2lhbENsZWFyUmVzdWx0LnlvZ2FDYXJkSWRzLFxuICAgICAgbyA9IHRoaXMuZ2V0Q29sbGVjdERldGFpbHModCk7XG4gICAgaWYgKG8ubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXMucHVzaFVwZGF0ZUNvbGxlY3RUYXJnZXRFZmZlY3QobywgZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbHJUcmF2ZWxIbHBfY29sbFRhZ0VmZlwiKVxuICBzdGF0aWMgcHVzaFVwZGF0ZUNvbGxlY3RUYXJnZXRFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gbmV3IFVwZGF0ZUNvbGxlY3RUYXJnZXRFZmZlY3Qoe1xuICAgICAgY29sbGVjdERldGFpbHM6IGVcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuU2VyaWFsLCB0Lm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gIH1cbiAgc3RhdGljIHB1c2hDb2xsZWN0Rmx5RWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHJldHVybiB0O1xuICAgIHZhciBpID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhlKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlLFxuICAgICAgICAgIGYgPSBpLmdldFRpbGVPYmplY3QocCk7XG4gICAgICAgIGlmIChmICYmIGYudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkKSB7XG4gICAgICAgICAgbCA9IHA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gYy5yZXR1cm4pICYmIG4uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBsIHx8IChsID0gZVswXSk7XG4gICAgdmFyIGggPSBpLmdldFRpbGVPYmplY3QobCk7XG4gICAgaWYgKCFoKSByZXR1cm4gdDtcbiAgICB2YXIgeSA9IGgudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkID8gXCJcIiArIGgudHlwZSA6IGgudHlwZSArIFwiX1wiICsgaC5jYXJkSWQsXG4gICAgICBtID0gbmV3IENvbGxlY3RGbHlFZmZlY3Qoe1xuICAgICAgICBjb2xsZWN0S2V5OiB5LFxuICAgICAgICB0aWxlVHlwZTogaC50eXBlXG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHN0YXRpYyBwdXNoVXBkYXRlTm9ybWFsQ29sbGVjdFRhcmdldEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldENvbGxlY3REZXRhaWxzKHRoaXMuX29wdGlvbnMudGlsZUlkcyk7XG4gICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIG8gPSB0aGlzLnB1c2hDb2xsZWN0Rmx5RWZmZWN0KHRoaXMuX29wdGlvbnMudGlsZUlkcywgZSk7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoVXBkYXRlQ29sbGVjdFRhcmdldEVmZmVjdCh0LCBvKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHRyeVB1c2hDbGVhckhpdFRpcHNFZmZlY3QoKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY2xlYXJIaXQgJiYgdGhpcy5fb3B0aW9ucy5oaWRlSGl0SWRzICYmIHRoaXMuX29wdGlvbnMuaGlkZUhpdElkcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5wdXNoQ2xlYXJIaXRUaXBzRWZmZWN0KHRoaXMuX29wdGlvbnMuaGlkZUhpdElkcyk7XG4gIH1cbiAgc3RhdGljIHB1c2hDbGVhckhpdFRpcHNFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IEhpdFRpcHNFZmZlY3Qoe1xuICAgICAgaXNDbGVhckhpdDogdHJ1ZSxcbiAgICAgIHRpbGVJZDE6IGVbMF0gfHwgXCJcIixcbiAgICAgIHRpbGVJZDI6IGVbMV0gfHwgXCJcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgc3RhdGljIHB1c2hBZnRlckNsZWFyRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1swXSxcbiAgICAgIG8gPSB0aGlzLl9vcHRpb25zLnRpbGVJZHNbMV0sXG4gICAgICBuID0gbmV3IEVtcHR5RWZmZWN0KHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ub3VjaFN0YXJ0LFxuICAgICAgICBuYW1lOiBcInRvdWNoU3RhcnRcIlxuICAgICAgfSksXG4gICAgICBpID0gZS5nZXQoXCJjbGVhckVmZmVjdE9wdGlvbnNcIiksXG4gICAgICByID0gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobiwgRUluc2VydFR5cGUuU2VyaWFsLCBpLm5ld0VmZmVjdElkKSxcbiAgICAgIHMgPSB7XG4gICAgICAgIGxhc3RFZmZlY3RJZDogci5sYXN0RWZmZWN0SWQsXG4gICAgICAgIG5ld0VmZmVjdElkOiByLm5ld0VmZmVjdElkLFxuICAgICAgICB0aWxlSWQ6IHQsXG4gICAgICAgIGxhc3RUaWxlSWQ6IG8sXG4gICAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnNcbiAgICAgIH07XG4gICAgdGhpcy5fYmFzZUlucHV0LmRpc3BhdGNoQ2xlYXJBZnRlckV2ZW50KHMpO1xuICAgIHJldHVybiByO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2xlYXJFZmZlY3RFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fb3B0aW9ucy50aWxlSWRzWzBdLFxuICAgICAgbyA9IHRoaXMuX29wdGlvbnMudGlsZUlkc1sxXSxcbiAgICAgIG4gPSBuZXcgQ2xlYXJFZmZlY3RFZmZlY3Qoe1xuICAgICAgICB0aWxlSWQ6IHQsXG4gICAgICAgIGxhc3RUaWxlSWQ6IG9cbiAgICAgIH0pO1xuICAgIHJldHVybiBlID8gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QobiwgRUluc2VydFR5cGUuUGFyYWxsZWwsIGUsIGZhbHNlKSA6IHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KG4sIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcGFyc2VCb21iQ2FyZCgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gbnVsbCxcbiAgICAgIG8gPSBmdW5jdGlvbiBvKG4pIHtcbiAgICAgICAgdmFyIGkgPSBlLl9nYW1lQ29udGV4dC50aWxlVHlwZUNoZWNrZXIucGFyc2VCb21iQ2FyZChuKTtcbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB0IHx8ICh0ID0gZS5fYmFzZUlucHV0LnB1c2hQYXJhbGxlckVmZmVjdCgpLm5ld0VmZmVjdElkKTtcbiAgICAgICAgICBlLl9nYW1lQ29udGV4dC50aWxlVHlwZXNNb2RpZmllci5tb2RpZnlCb21iQ2FyZF90cmF2ZWwoZS5faW5wdXQsIGkuYm9tYklkcyk7XG4gICAgICAgICAgdmFyIHIgPSBuZXcgQm9tYkVmZmVjdCh7XG4gICAgICAgICAgICAgIHBvczE6IGkucG9zMSxcbiAgICAgICAgICAgICAgcG9zMjogaS5wb3MyLFxuICAgICAgICAgICAgICBib21iSWRzOiBpLmJvbWJJZHNcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbCA9IGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHIsIEVJbnNlcnRUeXBlLlNlcmlhbCwgdCwgZmFsc2UpLm5ld0VmZmVjdElkLFxuICAgICAgICAgICAgcyA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICAgICAgICAgIGlucHV0VHlwZTogZS5faW5wdXQuaW5wdXRUeXBlLFxuICAgICAgICAgICAgICBuYW1lOiBcIkJvbWJQYXJhbGxlbEdyb3VwXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYyA9IGUuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHMsIEVJbnNlcnRUeXBlLlNlcmlhbCwgbCwgZmFsc2UpLm5ld0VmZmVjdElkO1xuICAgICAgICAgIGUuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWQgPSBjO1xuICAgICAgICAgIGUuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0VHlwZSA9IEVJbnNlcnRUeXBlLlNlcmlhbDtcbiAgICAgICAgICBvKGkuYm9tYklkcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgbyh0aGlzLl9vcHRpb25zLnRpbGVJZHMpO1xuICAgIHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gIH1cbiAgc3RhdGljIHB1c2hVcGRhdGVNYXRjaE51bUVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBVcGRhdGVNYXRjaE51bUVmZmVjdCh7XG4gICAgICBjYW5NYXRjaENhcmRQYWlyTnVtOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgdHJ5RXhjdXRlRW5kKGUpIHtcbiAgICBpZiAodGhpcy5fZ2FtZUNvbnRleHQucmVzdWx0Q2hlY2tlci5jaGVja1Jlc3VsdCgpKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX2dhbWVDb250ZXh0LmdhbWVUaW1lRGF0YS50aW1lO1xuICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS51cGRhdGVBdmdDbGVhckludGVydmFscygpO1xuICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeVdpbkZvclRyYXZlbCh0KTtcbiAgICAgIHRoaXMucHVzaEJsb2NrSW5wdXRFZmZlY3QoKTtcbiAgICAgIHJldHVybiB0aGlzLnB1c2hHb2FsQWNoaWV2ZUVmZmVjdChlKTtcbiAgICB9XG4gICAgdGhpcy5zaG91bGRDaGVja0ZhaWwoKSAmJiB0aGlzLnRyeUV4Y3V0ZUZhaWwoKTtcbiAgfVxuICBzdGF0aWMgcHVzaEJsb2NrSW5wdXRFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSBuZXcgQmxvY2tJbnB1dEVmZmVjdCh7XG4gICAgICBibG9jazogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgfVxuICBzdGF0aWMgcHVzaEdvYWxBY2hpZXZlRWZmZWN0KGUpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnNldEF1dG9NZXJnaW5nKHRydWUpO1xuICAgIHZhciB0ID0gbmV3IEdvYWxBY2hpZXZlRWZmZWN0KHt9KTtcbiAgICByZXR1cm4gZSAmJiBlLm5ld0VmZmVjdElkID8gdGhpcy5fYmFzZUlucHV0LnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuU2VyaWFsLCBlLm5ld0VmZmVjdElkLCBmYWxzZSkgOiB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdCh0LCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBzdGF0aWMgcHVzaEVuZEVmZmVjdCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbiA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jb2xsZWN0U3lzdGVtKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldEFsbENvbGxlY3REZXRhaWxzKCkpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiBbXSxcbiAgICAgIGkgPSBuZXcgVHJhdmVsRW5kRWZmZWN0KHtcbiAgICAgICAgY3VyTHY6IHRoaXMuX2dhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpLFxuICAgICAgICBjb2xsZWN0czogblxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWQgPyB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChpLCB0aGlzLl9vcHRpb25zLmluc2VydEVuZEVmZmVjdFR5cGUsIHRoaXMuX29wdGlvbnMuaW5zZXJ0RW5kRWZmZWN0SWQsIGZhbHNlKSA6IHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGksIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xyVHJhdmVsSGxwX3NobGRDaGtGYWlsXCIpXG4gIHN0YXRpYyBzaG91bGRDaGVja0ZhaWwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbHJUcmF2ZWxIbHBfdHJ5RXhjRmFpbFwiKVxuICBzdGF0aWMgdHJ5RXhjdXRlRmFpbCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX29wdGlvbnMudGlsZUlkcyB8fCBbXTtcbiAgICBpZiAodGhpcy5fZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmNoZWNrSXNEZWFkKGUpKSByZXR1cm4gdGhpcy5wdXNoRmFpbEVmZmVjdCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xyVHJhdmVsSGxwX2dldFByZVNoZlwiKVxuICBzdGF0aWMgZ2V0UHJlU2h1ZmZsZURhdGEoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgc3RhdGljIHB1c2hGYWlsRWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgIHQgPSBuZXcgRmFpbEVmZmVjdCh7XG4gICAgICAgIHNodWZmbGVOdW06IGUuZ2V0U2h1ZmZsZU51bXMoKSxcbiAgICAgICAgcHJlU2h1ZmZsZURhdGE6IHRoaXMuZ2V0UHJlU2h1ZmZsZURhdGEoKVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwdXNoQ2xlYXJCZWhhdmlvckZpbmlzaEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBFbXB0eUVmZmVjdCh7XG4gICAgICBpbnB1dFR5cGU6IHRoaXMuX2lucHV0LmlucHV0VHlwZSxcbiAgICAgIG5hbWU6IFwiQ2xlYXJCZWhhdmlvckZpbmlzaFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VJbnB1dC5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHN0YXRpYyBwdXNoQmxvY2tJbnB1dFJlZkVmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8gPSBuZXcgQmxvY2tJbnB1dFJlZkVmZmVjdCh7XG4gICAgICBibG9jazogZSxcbiAgICAgIGZyb206IHRcbiAgICB9KTtcbiAgICB0aGlzLl9iYXNlSW5wdXQucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbn0iXX0=
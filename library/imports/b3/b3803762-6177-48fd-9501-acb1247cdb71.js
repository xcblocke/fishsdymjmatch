"use strict";
cc._RF.push(module, 'b3803diYXdI/ZUBrLEkfNtx', 'InputTile2Revive');
// Scripts/InputTile2Revive.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("./gamePlay/dot/DGameUseItem");
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var DaxiaoClearEffectEffect_1 = require("./DaxiaoClearEffectEffect");
var Tile2RemoveHitTipsEffect_1 = require("./Tile2RemoveHitTipsEffect");
var Tile2ReviveEffect_1 = require("./Tile2ReviveEffect");
var Tile2RollCardEffect_1 = require("./Tile2RollCardEffect");
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var Tile2NormalBackEffect_1 = require("./Tile2NormalBackEffect");
var Tile2SlotCardNumChangeEffect_1 = require("./Tile2SlotCardNumChangeEffect");
var InputTile2Revive = /** @class */ (function (_super) {
    __extends(InputTile2Revive, _super);
    function InputTile2Revive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2Revive.prototype.excute = function (e) {
        var t, o, n = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), i = this.gameContext.getGameData().getReviveNums();
        this.gameContext.getGameData().changeReviveNums(-1);
        this.onPropUsed();
        this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Revive, e.from);
        this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Revive, -1);
        this.gameContext.tile2DotTrackerModifier.recordUseRevive();
        DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
            itemId: GameTypeEnums_1.EItemId.Revive,
            afterNum: this.gameContext.getGameData().getReviveNums(),
            beforeNum: i
        });
        var r = false;
        this.canMagnetRevive() && (r = this.pushMagnetReviveEffect(e));
        r || this.pushReviveEffect(e);
        var a = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot();
        this.pushTile2SlotCardNumChangeEffect(null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0, null !== (o = null == a ? void 0 : a.length) && void 0 !== o ? o : 0);
        this.reviveEnd();
    };
    InputTile2Revive.prototype.reviveEnd = function () { };
    InputTile2Revive.prototype.onPropUsed = function () { };
    InputTile2Revive.prototype.pushTile2SlotCardNumChangeEffect = function (e, t) {
        var o = this.pushNewRootEffect(this.input, "Tile2SlotCardNumChangeEffect"), n = new Tile2SlotCardNumChangeEffect_1.Tile2SlotCardNumChangeEffect({
            startSlotBarCardCount: e,
            endSlotBarCardCount: t
        });
        this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, o.newEffectId, false);
    };
    InputTile2Revive.prototype.getReviveAnimType = function () {
        return 0;
    };
    InputTile2Revive.prototype.pushReturnEffects = function (e) {
        this.pushEffect(new Tile2ReviveEffect_1.Tile2ReviveEffect({
            returnedTileIds: e
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    InputTile2Revive.prototype.pushClearEffects = function (e, t) {
        var o = this.buildClearMatchInfos(t);
        if (0 !== o.length) {
            this.gameContext.daxiaoModifier.modifyDaxiaoCard(e, o);
            this.pushEffect(new Tile2ReviveEffect_1.Tile2ReviveEffect({
                returnedTileIds: t,
                reviveType: "clear"
            }), BehaviorsEnum_1.EInsertType.Root);
            var n = o.flatMap(function (e) {
                return [e.tileId1, e.tileId2];
            });
            this.pushEffect(new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
                tileIds: n,
                finalMatchInfos: o
            }), BehaviorsEnum_1.EInsertType.Root);
        }
        else
            this.pushReturnEffects(t);
    };
    InputTile2Revive.prototype.buildClearMatchInfos = function (e) {
        var t, o, n, i, r = this.gameContext.getTileMapObject(), l = new Set(e), s = new Map();
        try {
            for (var c = __values(r.aliveTiles()), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                if (!l.has(p.id)) {
                    var f = p.cardId;
                    s.has(f) || s.set(f, []);
                    s.get(f).push(p.id);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var d = [], h = new Set();
        try {
            for (var y = __values(e), m = y.next(); !m.done; m = y.next()) {
                var v = m.value, g = r.getTileObject(v);
                if (g) {
                    var _ = (s.get(g.cardId) || []).filter(function (e) {
                        return !h.has(e);
                    });
                    if (0 !== _.length) {
                        var T = _[Math.floor(Math.random() * _.length)];
                        h.add(T);
                        d.push({
                            tileId1: v,
                            tileId2: T,
                            isFix: false
                        });
                    }
                }
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (i = y.return) && i.call(y);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        return d;
    };
    InputTile2Revive.prototype.pushRollCardEffects = function (e, t) {
        var o, n;
        try {
            for (var i = __values(t), r = i.next(); !r.done; r = i.next()) {
                var l = r.value, c = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: l.tileId,
                    frontToBack: l.frontToBack
                });
                this.pushEffect(c, BehaviorsEnum_1.EInsertType.Parallel, e.newEffectId, false);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    InputTile2Revive.prototype.pushReviveEffect = function (e) {
        var t = this.gameContext.tile2SlotBarModifier.returnSlotBarToBoard(), o = this.gameContext.tile2RollCardModifier.modifyRollCardDatas(), n = this.gameContext.getCanHitTips();
        n.length >= 2 && this.gameContext.setCanHitTips();
        if (1 === this.getReviveAnimType()) {
            this.pushClearEffects(e, t);
        }
        else {
            this.pushReturnEffects(t);
        }
        var i = this.gameContext.tile2NormalBackModifier.modifyStatus();
        this.pushNormalBackEffects(i);
        var r = this.pushNewRootEffect(this.input, "roll");
        this.pushRollCardEffects(r, o);
        this.pushEffect(new Tile2RemoveHitTipsEffect_1.Tile2RemoveHitTipsEffect({
            tileId1: n[0],
            tileId2: n[1]
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    InputTile2Revive.prototype.pushNormalBackEffects = function (e) {
        if (e && 0 != e.length) {
            var t = this.pushNewRootEffect(this.input, "Tile2NormalBackEffect"), o = new Tile2NormalBackEffect_1.Tile2NormalBackEffect({
                normalBackList: e
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, t.newEffectId, false);
        }
    };
    InputTile2Revive.prototype.canMagnetRevive = function () {
        return false;
    };
    InputTile2Revive.prototype.getMagnetCnt = function () {
        return 0;
    };
    InputTile2Revive.prototype.pushMagnetReviveEffect = function (e) {
        var t = this.getMagnetCnt();
        if (t <= 0)
            return false;
        var o = this.gameContext.tile2MagnetChecker.findMagnetTiles(t);
        if (!o || 0 === o.length)
            return false;
        var n = o.slice();
        ClearHelper_1.default.runClear(this.gameContext, e, this, {
            tileIds: o,
            outTiles: n,
            magnetPair: t
        });
        return true;
    };
    __decorate([
        mj.traitEvent("T2Revive_reviveEnd")
    ], InputTile2Revive.prototype, "reviveEnd", null);
    __decorate([
        mj.traitEvent("T2Revive_used")
    ], InputTile2Revive.prototype, "onPropUsed", null);
    __decorate([
        mj.traitEvent("T2Revive_animType")
    ], InputTile2Revive.prototype, "getReviveAnimType", null);
    __decorate([
        mj.traitEvent("T2Revive_pushReturn")
    ], InputTile2Revive.prototype, "pushReturnEffects", null);
    __decorate([
        mj.traitEvent("T2Revive_pushClear")
    ], InputTile2Revive.prototype, "pushClearEffects", null);
    __decorate([
        mj.traitEvent("T2Revive_magnetRevive")
    ], InputTile2Revive.prototype, "canMagnetRevive", null);
    __decorate([
        mj.traitEvent("T2Revive_magnetCnt")
    ], InputTile2Revive.prototype, "getMagnetCnt", null);
    return InputTile2Revive;
}(InputBase_1.InputBase));
exports.default = InputTile2Revive;

cc._RF.pop();
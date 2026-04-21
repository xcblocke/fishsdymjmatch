"use strict";
cc._RF.push(module, '6f7b4Kl7CxDfZdb4vtczyFX', 'InputTile2Revert');
// Scripts/input/InputTile2Revert.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2NotEnoughItemsEffect_1 = require("../Tile2NotEnoughItemsEffect");
var Tile2RevertEffect_1 = require("../Tile2RevertEffect");
var Tile2RevertVibrateEffect_1 = require("../Tile2RevertVibrateEffect");
var Tile2UpdateRevertItemEffect_1 = require("../Tile2UpdateRevertItemEffect");
var Tile2UpdateSlotBarEffect_1 = require("../Tile2UpdateSlotBarEffect");
var InputBase_1 = require("../inputbase/InputBase");
var Tile2NoValidTilesEffect_1 = require("../Tile2NoValidTilesEffect");
var Tile2RollCardEffect_1 = require("../Tile2RollCardEffect");
var Tile2NormalBackEffect_1 = require("../Tile2NormalBackEffect");
var Tile2SlotCardNumChangeEffect_1 = require("../Tile2SlotCardNumChangeEffect");
var InputTile2Revert = /** @class */ (function (_super) {
    __extends(InputTile2Revert, _super);
    function InputTile2Revert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2Revert.prototype.excute = function (e) {
        var t, o, n, i, r = this.gameContext.getGameData().getRevertNums();
        if (this.gameContext.getGameData().isRevertEnough()) {
            if (0 !== this.gameContext.getGameData().slotBarIds.length) {
                var p = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), f = this.gameContext.tile2RollCardModifier.getRvertIgnoreIds(), y = this.gameContext.tile2SlotBarModifier.revertLastTile();
                if (y) {
                    var v = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), g = this.gameContext.tile2RollCardModifier.modifyRollCardDatas(f);
                    this.gameContext.getGameData().changeRevertNums(-1);
                    this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Revert);
                    this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Revert, -1);
                    this.gameContext.tile2DotTrackerModifier.recordUseRevert();
                    this.onPropUsed();
                    var _ = this.gameContext.getGameData().getRevertNums();
                    DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                        itemId: GameTypeEnums_1.EItemId.Revert,
                        afterNum: _,
                        beforeNum: r
                    });
                    var T = this.gameContext.tile2SlotBarChecker.getSlotBarChangeList(p, v), C = this.gameContext.tile2NormalBackModifier.modifyStatus(), b = this.pushNewRootEffect(e, "Tile2RevertEffect");
                    this.pushEffect(new Tile2UpdateRevertItemEffect_1.Tile2UpdateRevertItemEffect({
                        curNum: _
                    }), BehaviorsEnum_1.EInsertType.Parallel, b.newEffectId, false);
                    if (T.length > 0)
                        try {
                            for (var E = __values(T), S = E.next(); !S.done; S = E.next()) {
                                var I = S.value;
                                this.pushEffect(new Tile2UpdateSlotBarEffect_1.Tile2UpdateSlotBarEffect({
                                    changeInfo: I
                                }), BehaviorsEnum_1.EInsertType.Parallel, b.newEffectId);
                            }
                        }
                        catch (e) {
                            t = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                S && !S.done && (o = E.return) && o.call(E);
                            }
                            finally {
                                if (t)
                                    throw t.error;
                            }
                        }
                    this.pushTile2SlotCardNumChangeEffect(null !== (n = null == p ? void 0 : p.length) && void 0 !== n ? n : 0, null !== (i = null == v ? void 0 : v.length) && void 0 !== i ? i : 0);
                    this.pushRevertEffect(y, b.newEffectId);
                    this.pushNormalBackEffects(C);
                    var w = this.pushNewRootEffect(this.input, "roll");
                    this.pushRollCardEffects(w, g);
                    this.revetEnd();
                }
            }
            else
                this.pushEffect(new Tile2NoValidTilesEffect_1.Tile2NoValidTilesEffect({}), BehaviorsEnum_1.EInsertType.Parallel);
        }
        else
            this.pushEffect(new Tile2NotEnoughItemsEffect_1.Tile2NotEnoughItemsEffect({
                from: "revert"
            }), BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2Revert.prototype.revetEnd = function () { };
    InputTile2Revert.prototype.pushNormalBackEffects = function (e) {
        if (e && 0 != e.length) {
            var t = this.pushNewRootEffect(this.input, "Tile2NormalBackEffect"), o = new Tile2NormalBackEffect_1.Tile2NormalBackEffect({
                normalBackList: e
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, t.newEffectId, false);
        }
    };
    InputTile2Revert.prototype.onPropUsed = function () { };
    InputTile2Revert.prototype.pushRollCardEffects = function (e, t) {
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
    InputTile2Revert.prototype.pushRevertEffect = function (e, t) {
        var o = new Tile2RevertEffect_1.Tile2RevertEffect({
            tileId: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel, t, false);
        var n = new Tile2RevertVibrateEffect_1.Tile2RevertVibrateEffect({});
        this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, t, false);
    };
    InputTile2Revert.prototype.pushTile2SlotCardNumChangeEffect = function (e, t) {
        var o = this.pushNewRootEffect(this.input, "Tile2SlotCardNumChangeEffect"), n = new Tile2SlotCardNumChangeEffect_1.Tile2SlotCardNumChangeEffect({
            startSlotBarCardCount: e,
            endSlotBarCardCount: t
        });
        this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, o.newEffectId, false);
    };
    __decorate([
        mj.traitEvent("IptT2Revert_exec")
    ], InputTile2Revert.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2Revert_revetEnd")
    ], InputTile2Revert.prototype, "revetEnd", null);
    __decorate([
        mj.traitEvent("IptT2Revert_used")
    ], InputTile2Revert.prototype, "onPropUsed", null);
    return InputTile2Revert;
}(InputBase_1.InputBase));
exports.default = InputTile2Revert;

cc._RF.pop();
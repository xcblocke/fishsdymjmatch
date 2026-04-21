"use strict";
cc._RF.push(module, 'fa5e6l5ECtLSb90CKRwL6qk', 'InputTile2Shuffle');
// Scripts/input/InputTile2Shuffle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var DynamicCurve_1 = require("../types/DynamicCurve");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2HitTipsEffect_1 = require("../Tile2HitTipsEffect");
var Tile2NotEnoughItemsEffect_1 = require("../Tile2NotEnoughItemsEffect");
var Tile2ShuffleEffect_1 = require("../Tile2ShuffleEffect");
var Tile2ShuffleVibrateEffect_1 = require("../Tile2ShuffleVibrateEffect");
var Tile2UpdateItemEffect_1 = require("../Tile2UpdateItemEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2Shuffle = /** @class */ (function (_super) {
    __extends(InputTile2Shuffle, _super);
    function InputTile2Shuffle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2Shuffle.prototype.excute = function (e) {
        var t, o, n = false, i = this.gameContext.getTileMapObject();
        try {
            for (var r = __values(i.tileObjectMap().values()), d = r.next(); !d.done; d = r.next()) {
                var h = d.value;
                if (h.isValid && !h.getIsInSlotBar()) {
                    n = true;
                    break;
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
                d && !d.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (n) {
            var m = this.gameContext.getGameData().getShuffleNums(), v = e.isFree;
            if (!v) {
                if (!this.gameContext.getGameData().isShuffleEnough()) {
                    this.pushEffect(new Tile2NotEnoughItemsEffect_1.Tile2NotEnoughItemsEffect({
                        from: "shuffle"
                    }), BehaviorsEnum_1.EInsertType.Parallel);
                    return;
                }
                this.gameContext.getGameData().changeShuffleNums(-1);
                this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Shuffle, e.from);
                this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Shuffle, -1);
                DynamicCurve_1.default.instance.useShuffle(this.gameContext.gameType);
                DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                    itemId: GameTypeEnums_1.EItemId.Shuffle,
                    beforeNum: m,
                    afterNum: this.gameContext.getGameData().getShuffleNums(),
                    from: e.from
                });
            }
            this.onPropUsed();
            this.gameContext.tile2TouchData.clear();
            this.gameContext.tile2ShuffleModifier.shuffle();
            var g = this.gameContext.tile2HitTipsModifier.clearAllHitTips();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            this.gameContext.tile2TileTypesModifier.saveToGameData();
            this.gameContext.tile2DotTrackerModifier.recordUseShuffle(v);
            this.gameContext.tile2NormalBackModifier.modifyStatus();
            var _ = this.pushNewRootEffect(e, "Tile2ShuffleEffect");
            g && g.length > 0 && this.pushEffect(new Tile2HitTipsEffect_1.Tile2HitTipsEffect({
                isClearHit: true,
                tileId1: g[0] || "",
                tileId2: g[1] || ""
            }), BehaviorsEnum_1.EInsertType.Parallel, _.newEffectId, false);
            this.pushEffect(new Tile2UpdateItemEffect_1.Tile2UpdateItemEffect({
                curNum: this.gameContext.getGameData().getShuffleNums()
            }), BehaviorsEnum_1.EInsertType.Parallel, _.newEffectId, false);
            this.pushShuffleEffect(_.newEffectId);
        }
    };
    InputTile2Shuffle.prototype.onPropUsed = function () { };
    InputTile2Shuffle.prototype.getShuffleEffect = function () {
        return new Tile2ShuffleEffect_1.Tile2ShuffleEffect({});
    };
    InputTile2Shuffle.prototype.pushShuffleEffect = function (e) {
        var t = this.getShuffleEffect();
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel, e, false);
        this.pushEffect(new Tile2ShuffleVibrateEffect_1.Tile2ShuffleVibrateEffect({}), BehaviorsEnum_1.EInsertType.Parallel, e, false);
    };
    __decorate([
        mj.traitEvent("IptT2Shuffle_exec")
    ], InputTile2Shuffle.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2Shuffle_used")
    ], InputTile2Shuffle.prototype, "onPropUsed", null);
    __decorate([
        mj.traitEvent("IptT2Shuffle_getEff")
    ], InputTile2Shuffle.prototype, "getShuffleEffect", null);
    __decorate([
        mj.traitEvent("IptT2Shuffle_pushEff")
    ], InputTile2Shuffle.prototype, "pushShuffleEffect", null);
    return InputTile2Shuffle;
}(InputBase_1.InputBase));
exports.default = InputTile2Shuffle;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'd4bf5uIzmZFL7ijc6QPDYzB', 'InputTile2HitTips');
// Scripts/input/InputTile2HitTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2HitTipsEffect_1 = require("../Tile2HitTipsEffect");
var Tile2HitTipsVibrateEffect_1 = require("../Tile2HitTipsVibrateEffect");
var Tile2NoHintTipsEffect_1 = require("../Tile2NoHintTipsEffect");
var Tile2NotEnoughItemsEffect_1 = require("../Tile2NotEnoughItemsEffect");
var Tile2UpdateHitTipsItemEffect_1 = require("../Tile2UpdateHitTipsItemEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2HitTips = /** @class */ (function (_super) {
    __extends(InputTile2HitTips, _super);
    function InputTile2HitTips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2HitTips.prototype.excute = function (e) {
        if (!(this.gameController.gameContext.getCanHitTips().length > 0))
            if (this.gameContext.getGameData().isHitTipsEnough()) {
                var t = this.selectHitTipIds();
                if (t && t.tileIds && 2 === t.tileIds.length) {
                    var o = t.tileIds[0], n = t.tileIds[1], i = t.flipId, r = this.gameContext.getGameData().getHitTipsNums();
                    this.gameContext.getGameData().changeHitTipsNums(-1);
                    this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Hint);
                    this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Hint, -1);
                    var c = this.gameContext.getGameData().getHitTipsNums();
                    DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                        itemId: GameTypeEnums_1.EItemId.Hint,
                        afterNum: c,
                        beforeNum: r
                    });
                    this.gameContext.tile2DotTrackerModifier.recordUseHint([o, n]);
                    this.onPropUsed();
                    this.gameController.tileMapObject.getTileObject(o).isHint = true;
                    this.gameController.tileMapObject.getTileObject(n).isHint = true;
                    this.gameController.gameContext.setCanHitTips([o, n]);
                    var u = this.pushNewRootEffect(e, "Tile2HitTipsEffect");
                    this.pushEffect(new Tile2UpdateHitTipsItemEffect_1.Tile2UpdateHitTipsItemEffect({
                        curNum: this.gameContext.getGameData().getHitTipsNums()
                    }), BehaviorsEnum_1.EInsertType.Parallel, u.newEffectId, false);
                    this.pushHitTipsEffectWithId(o, n, i, false, u.newEffectId);
                }
                else
                    this.pushEffect(new Tile2NoHintTipsEffect_1.Tile2NoHintTipsEffect({}));
            }
            else
                this.pushEffect(new Tile2NotEnoughItemsEffect_1.Tile2NotEnoughItemsEffect({
                    from: "hitTips"
                }), BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2HitTips.prototype.onPropUsed = function () { };
    InputTile2HitTips.prototype.selectHitTipIds = function () {
        this.gameController.tileMapObject.updateCanMatchTiles();
        var e = this.gameContext.tile2HitTipsChecker.computeTile2Hint();
        return e ? {
            tileIds: [e.clearId1, e.clearId2],
            flipId: e.flipId
        } : null;
    };
    InputTile2HitTips.prototype.pushHitTipsEffectWithId = function (e, t, o, n, i) {
        this.pushEffect(new Tile2HitTipsEffect_1.Tile2HitTipsEffect({
            isClearHit: n,
            tileId1: e,
            tileId2: t,
            flipId: o
        }), BehaviorsEnum_1.EInsertType.Parallel, i, false);
        this.pushEffect(new Tile2HitTipsVibrateEffect_1.Tile2HitTipsVibrateEffect({}), BehaviorsEnum_1.EInsertType.Parallel, i, false);
    };
    __decorate([
        mj.traitEvent("IptT2HitTips_exec")
    ], InputTile2HitTips.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2HitTips_used")
    ], InputTile2HitTips.prototype, "onPropUsed", null);
    __decorate([
        mj.traitEvent("IptT2HitTips_hinkIds")
    ], InputTile2HitTips.prototype, "selectHitTipIds", null);
    __decorate([
        mj.traitEvent("IptT2HitTips_pushEff")
    ], InputTile2HitTips.prototype, "pushHitTipsEffectWithId", null);
    return InputTile2HitTips;
}(InputBase_1.InputBase));
exports.default = InputTile2HitTips;

cc._RF.pop();
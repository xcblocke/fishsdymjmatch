"use strict";
cc._RF.push(module, 'd1b6aD4HaNM1YJU63Gs7T4o', 'InputTile2AddProp');
// Scripts/input/InputTile2AddProp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameGetItem_1 = require("../gamePlay/dot/DGameGetItem");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2UpdateHitTipsItemEffect_1 = require("../Tile2UpdateHitTipsItemEffect");
var Tile2UpdateItemEffect_1 = require("../Tile2UpdateItemEffect");
var Tile2UpdateRevertItemEffect_1 = require("../Tile2UpdateRevertItemEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2AddProp = /** @class */ (function (_super) {
    __extends(InputTile2AddProp, _super);
    function InputTile2AddProp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2AddProp.prototype.excute = function (e) {
        var t = e.propType, o = Number(e.num), n = this.gameContext.getGameData();
        if ("shuffle" === t) {
            n.changeShuffleNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Shuffle, o);
            var i = n.getShuffleNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
            var r = this.pushNewRootEffect(e, "tile2AddPropShuffle");
            this.pushEffect(new Tile2UpdateItemEffect_1.Tile2UpdateItemEffect({
                curNum: i
            }), BehaviorsEnum_1.EInsertType.Parallel, r.newEffectId, false);
        }
        else if ("hitTips" === t) {
            n.changeHitTipsNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Hint, o);
            i = n.getHitTipsNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
            r = this.pushNewRootEffect(e, "tile2AddPropHitTips");
            this.pushEffect(new Tile2UpdateHitTipsItemEffect_1.Tile2UpdateHitTipsItemEffect({
                curNum: i
            }), BehaviorsEnum_1.EInsertType.Parallel, r.newEffectId, false);
        }
        else if ("revert" === t) {
            n.changeRevertNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Revert, o);
            i = n.getRevertNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Revert,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
            r = this.pushNewRootEffect(e, "tile2AddPropRevert");
            this.pushEffect(new Tile2UpdateRevertItemEffect_1.Tile2UpdateRevertItemEffect({
                curNum: i
            }), BehaviorsEnum_1.EInsertType.Parallel, r.newEffectId, false);
        }
        else if ("revive" === t) {
            n.changeReviveNums(o);
            n.toolChange(GameTypeEnums_1.EItemId.Revive, o);
            i = n.getReviveNums();
            DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Revive,
                number: o,
                afterNum: i,
                reasonId: e.reasonId,
                reasonInfo: e.reasonInfo
            });
        }
        else
            console.error("[InputTile2AddProp] 未知的道具类型: " + t);
    };
    __decorate([
        mj.traitEvent("IptT2AddProp_exec")
    ], InputTile2AddProp.prototype, "excute", null);
    return InputTile2AddProp;
}(InputBase_1.InputBase));
exports.default = InputTile2AddProp;

cc._RF.pop();
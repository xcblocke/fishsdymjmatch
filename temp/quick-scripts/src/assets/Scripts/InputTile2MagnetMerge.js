"use strict";
cc._RF.push(module, 'f7af75Te7FPwaG2ShosQYzh', 'InputTile2MagnetMerge');
// Scripts/InputTile2MagnetMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var DGameUseItem_1 = require("./gamePlay/dot/DGameUseItem");
var DGameGetItem_1 = require("./gamePlay/dot/DGameGetItem");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2MagnetMerge = /** @class */ (function (_super) {
    __extends(InputTile2MagnetMerge, _super);
    function InputTile2MagnetMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2MagnetMerge.prototype.excute = function (e) {
        var t, o;
        if (null === (t = this.gameContext.tile2ResultChecker) || void 0 === t || !t.checkIsDead()) {
            var n = e.magnetPair || 1, i = null === (o = this.gameContext.tile2MagnetChecker) || void 0 === o ? void 0 : o.findMagnetTiles(n);
            if (i && 0 !== i.length) {
                var r = i.slice();
                this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Magnet, 1);
                DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                    itemId: GameTypeEnums_1.EItemId.Magnet,
                    afterNum: 1,
                    number: 1,
                    reasonId: GameTypeEnums_1.EGetItemReasonId.AdReward,
                    reasonInfo: "磁铁激励"
                });
                this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Magnet);
                this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Magnet, -1);
                this.gameContext.tile2DotTrackerModifier.recordUseMagnet(i);
                DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                    itemId: GameTypeEnums_1.EItemId.Magnet,
                    afterNum: 0,
                    beforeNum: 1
                });
                ClearHelper_1.default.runClear(this.gameContext, e, this, {
                    tileIds: i,
                    outTiles: r,
                    magnetPair: n
                });
            }
        }
    };
    return InputTile2MagnetMerge;
}(InputBase_1.InputBase));
exports.default = InputTile2MagnetMerge;

cc._RF.pop();
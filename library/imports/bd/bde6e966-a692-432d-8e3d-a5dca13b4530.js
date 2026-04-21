"use strict";
cc._RF.push(module, 'bde6elmppJDLY49pdyhO0Uw', 'InputTile2InitSlotBar');
// Scripts/input/InputTile2InitSlotBar.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameStart_1 = require("../gamePlay/dot/DGameStart");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2InitSlotBarEffect_1 = require("../Tile2InitSlotBarEffect");
var Tile2ScreenEdgeEffect_1 = require("../Tile2ScreenEdgeEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitSlotBar = /** @class */ (function (_super) {
    __extends(InputTile2InitSlotBar, _super);
    function InputTile2InitSlotBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitSlotBar.prototype.excute = function () {
        for (var e = this.gameContext.getGameData(), t = e.slotBarIds, o = this.gameContext.getTileMapObject(), n = [], i = 0; i < t.length; i++) {
            var r = o.getTileObjectByPosId(t[i]);
            r && n.push(r.id);
        }
        var p = e.getSlotLevel(), f = this.gameContext.getTile2SlotType(), d = this.isShowSlot3();
        p = d ? 0 : p;
        this.pushEffect(new Tile2InitSlotBarEffect_1.Tile2InitSlotBarEffect({
            tileIds: n,
            slotLevel: p,
            slotType: f
        }), BehaviorsEnum_1.EInsertType.Root);
        if (this.gameContext.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3 || d) {
            var h = e.getComboNum(), y = this.gameContext.tile2ComboChecker.getReachedScreenEdgeThreshold(h);
            y > 0 && this.pushEffect(new Tile2ScreenEdgeEffect_1.Tile2ScreenEdgeEffect({
                comboNum: y,
                skipBurst: true
            }), BehaviorsEnum_1.EInsertType.Parallel);
        }
        this.gameContext.getIsNewGame() && DGameStart_1.DotGameStart.dot(this.gameContext);
    };
    InputTile2InitSlotBar.prototype.isShowSlot3 = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("IptT2InitSlotBar_exec")
    ], InputTile2InitSlotBar.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2InitSlotBar_isSlot3")
    ], InputTile2InitSlotBar.prototype, "isShowSlot3", null);
    return InputTile2InitSlotBar;
}(InputBase_1.InputBase));
exports.default = InputTile2InitSlotBar;

cc._RF.pop();
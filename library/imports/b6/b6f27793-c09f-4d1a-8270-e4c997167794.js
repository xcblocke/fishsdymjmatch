"use strict";
cc._RF.push(module, 'b6f27eTwJ9NGoJw5MmXFneU', 'Tile2SlotAdvanceBehavior');
// Scripts/base/Tile2SlotAdvanceBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotAdvanceBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2SlotAdvanceBehavior = /** @class */ (function (_super) {
    __extends(Tile2SlotAdvanceBehavior, _super);
    function Tile2SlotAdvanceBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2SlotAdvanceBehavior.prototype.start = function (e) {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        var t = e.data.slotLevel, o = this.context.gameView, n = null == o ? void 0 : o.slotBarView, i = this.isShowSlot4();
        if ((null == n ? void 0 : n.slotBarEffectManager) && i) {
            n.slotBarEffectManager.advanceToLevel(t);
            this.onSlotAdvance(t);
        }
    };
    Tile2SlotAdvanceBehavior.prototype.onSlotAdvance = function () { };
    Tile2SlotAdvanceBehavior.prototype.isShowSlot4 = function () {
        return true;
    };
    __decorate([
        mj.traitEvent("T2SlotAdvBhv_advance")
    ], Tile2SlotAdvanceBehavior.prototype, "onSlotAdvance", null);
    __decorate([
        mj.traitEvent("T2SlotAdvBhv_isShow4")
    ], Tile2SlotAdvanceBehavior.prototype, "isShowSlot4", null);
    return Tile2SlotAdvanceBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2SlotAdvanceBehavior = Tile2SlotAdvanceBehavior;

cc._RF.pop();
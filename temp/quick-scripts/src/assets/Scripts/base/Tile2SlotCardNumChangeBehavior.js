"use strict";
cc._RF.push(module, '90db3DEO7BCP4pSpkyiTyFI', 'Tile2SlotCardNumChangeBehavior');
// Scripts/base/Tile2SlotCardNumChangeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotCardNumChangeBehavior = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2SlotCardNumChangeBehavior = /** @class */ (function (_super) {
    __extends(Tile2SlotCardNumChangeBehavior, _super);
    function Tile2SlotCardNumChangeBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2SlotCardNumChangeBehavior.prototype.start = function () {
        this.context.getTileNodeMap();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2SlotNumChg_start")
    ], Tile2SlotCardNumChangeBehavior.prototype, "start", null);
    return Tile2SlotCardNumChangeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2SlotCardNumChangeBehavior = Tile2SlotCardNumChangeBehavior;

cc._RF.pop();
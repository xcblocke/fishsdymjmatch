"use strict";
cc._RF.push(module, 'f783190UnVEu4Sk5GgeSYMt', 'Tile2RevertVibrateBehavior');
// Scripts/base/Tile2RevertVibrateBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RevertVibrateBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RevertVibrateBehavior = /** @class */ (function (_super) {
    __extends(Tile2RevertVibrateBehavior, _super);
    function Tile2RevertVibrateBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RevertVibrateBehavior.prototype.start = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Medium, VibrateManager_1.EVibratePoint.Tile2Revert);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2RevertVibBhv_start")
    ], Tile2RevertVibrateBehavior.prototype, "start", null);
    return Tile2RevertVibrateBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RevertVibrateBehavior = Tile2RevertVibrateBehavior;

cc._RF.pop();
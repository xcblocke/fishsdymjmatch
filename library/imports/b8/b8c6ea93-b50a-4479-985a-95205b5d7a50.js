"use strict";
cc._RF.push(module, 'b8c6eqTtQpEeZhalSBbXXpQ', 'Tile2ShuffleVibrateBehavior');
// Scripts/base/Tile2ShuffleVibrateBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleVibrateBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ShuffleVibrateBehavior = /** @class */ (function (_super) {
    __extends(Tile2ShuffleVibrateBehavior, _super);
    function Tile2ShuffleVibrateBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ShuffleVibrateBehavior.prototype.start = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Light, VibrateManager_1.EVibratePoint.Tile2ShuffleVibrate);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2ShuffleVibBhv_start")
    ], Tile2ShuffleVibrateBehavior.prototype, "start", null);
    return Tile2ShuffleVibrateBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ShuffleVibrateBehavior = Tile2ShuffleVibrateBehavior;

cc._RF.pop();
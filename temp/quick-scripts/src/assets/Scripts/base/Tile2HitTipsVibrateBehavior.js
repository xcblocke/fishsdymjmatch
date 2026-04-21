"use strict";
cc._RF.push(module, 'aa998KZwI9NWakWgfj6TNVV', 'Tile2HitTipsVibrateBehavior');
// Scripts/base/Tile2HitTipsVibrateBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsVibrateBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2HitTipsVibrateBehavior = /** @class */ (function (_super) {
    __extends(Tile2HitTipsVibrateBehavior, _super);
    function Tile2HitTipsVibrateBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2HitTipsVibrateBehavior.prototype.start = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Light, VibrateManager_1.EVibratePoint.Tile2HitTips);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2HitTipsVibBhv_start")
    ], Tile2HitTipsVibrateBehavior.prototype, "start", null);
    return Tile2HitTipsVibrateBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2HitTipsVibrateBehavior = Tile2HitTipsVibrateBehavior;

cc._RF.pop();
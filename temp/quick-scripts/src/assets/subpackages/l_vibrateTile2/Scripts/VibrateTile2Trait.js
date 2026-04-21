"use strict";
cc._RF.push(module, 'ddc7apRXhpPLJZ3V2L/VcOL', 'VibrateTile2Trait');
// subpackages/l_vibrateTile2/Scripts/VibrateTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateTile2Trait = /** @class */ (function (_super) {
    __extends(VibrateTile2Trait, _super);
    function VibrateTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrateTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    VibrateTile2Trait.prototype.triggerVibrate = function (t, e) {
        VibrateManager_1.default.executeVibrate(t, e);
    };
    VibrateTile2Trait.prototype.triggerTile2Rule = function (t, e) {
        t !== VibrateManager_1.EVibrateStrength.Disabled && this.triggerVibrate(t, e);
    };
    VibrateTile2Trait.prototype.onTile2IptTchEnd_runClr = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Medium, VibrateManager_1.EVibratePoint.Tile2TileSelect);
        e();
    };
    VibrateTile2Trait.prototype.onT2TchRunLock_exec = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Multiple, VibrateManager_1.EVibratePoint.Tile2TileLock);
        e();
    };
    VibrateTile2Trait.prototype.onT2ClearBhv_collision = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2TileClear);
        e();
    };
    VibrateTile2Trait.prototype.onTile2WinBhv_start = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.DoubleWeak, VibrateManager_1.EVibratePoint.Tile2Win);
        e();
    };
    VibrateTile2Trait.prototype.onTile2BfWinBhv_start = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.DoubleWeak, VibrateManager_1.EVibratePoint.Tile2BeforeWin);
        e();
    };
    VibrateTile2Trait.prototype.onTile2FlipAni_AnimComplete = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2Flip);
        e();
    };
    VibrateTile2Trait.prototype.onT2ScreenEdgeBhv_start = function (t, e) {
        t.args[0];
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Light, VibrateManager_1.EVibratePoint.Tile2ScreenEdge);
        e();
    };
    VibrateTile2Trait.prototype.checkComboDelayVibrate = function (t) {
        if ("number" == typeof t && t % 5 == 0) {
            var e = t / 5, r = this.buildComboDelayIntervals(e);
            VibrateManager_1.default.executeDelayedVibrateSequence(VibrateManager_1.EVibrateStrength.Light, r, VibrateManager_1.EVibratePoint.Tile2ComboDelayVibrate);
        }
    };
    VibrateTile2Trait.prototype.buildComboDelayIntervals = function (t) {
        if (t <= 0)
            return [];
        for (var e = [150], r = 1; r < t; r++)
            e.push(200);
        return e;
    };
    VibrateTile2Trait.prototype.onT2SlotAdvBhv_advance = function (t, e) {
        this.triggerVibrate(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2SlotAdvance);
        e();
    };
    VibrateTile2Trait.traitKey = "VibrateTile2";
    VibrateTile2Trait = __decorate([
        mj.trait,
        mj.class("VibrateTile2Trait")
    ], VibrateTile2Trait);
    return VibrateTile2Trait;
}(Trait_1.default));
exports.default = VibrateTile2Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '64024cSny1PjJUhSYpRkHO1', 'Tile2StartAutoMergeBehavior');
// Scripts/base/Tile2StartAutoMergeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2StartAutoMergeBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var StartAutoMergeBehavior_1 = require("./StartAutoMergeBehavior");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2StartAutoMergeBehavior = /** @class */ (function (_super) {
    __extends(Tile2StartAutoMergeBehavior, _super);
    function Tile2StartAutoMergeBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 100;
        return _this;
    }
    Tile2StartAutoMergeBehavior.prototype.start = function (e) {
        var t, o = this, n = null !== (t = e.data.type) && void 0 !== t ? t : "", i = this.getSpeedConfig(n), r = i.initialDelay, c = false, u = function u() {
            var e, t;
            if (!c) {
                var p = o.context.getTileMapObject();
                p.updateCanMatchTiles();
                p.getCanMatchTilesHint();
                var f = p.getAllCardTiles();
                if (!f || f.length <= 0) {
                    c = true;
                    o._onAllPairsExhausted(n);
                }
                else {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.Tile2AutoMerge,
                        type: n
                    });
                    if (i.type === StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate) {
                        var d = null !== (e = i.minDelay) && void 0 !== e ? e : 0.1, h = null !== (t = i.decreaseStep) && void 0 !== t ? t : 0.02;
                        r > d && (r = Math.max(d, r - h));
                    }
                    o.context.gameView.timerComponent.doOnce(r, u);
                }
            }
        };
        u();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2StartAutoMergeBehavior.prototype._onAllPairsExhausted = function (e) {
        "allClear" === e && this._handleAllClearComplete();
    };
    Tile2StartAutoMergeBehavior.prototype._handleAllClearComplete = function () { };
    Tile2StartAutoMergeBehavior.prototype.getSpeedConfig = function (e) {
        return "travelVictory" === e ? this.getTravelSpeedConfig() : this.getMainlineSpeedConfig();
    };
    Tile2StartAutoMergeBehavior.prototype.getMainlineSpeedConfig = function () {
        return {
            type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant,
            initialDelay: 0.33
        };
    };
    Tile2StartAutoMergeBehavior.prototype.getTravelSpeedConfig = function () {
        return {
            type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate,
            initialDelay: 0.33,
            decreaseStep: 0.02,
            minDelay: 0.1
        };
    };
    __decorate([
        mj.traitEvent("T2StAutoMrgBhv_mainSpd")
    ], Tile2StartAutoMergeBehavior.prototype, "getMainlineSpeedConfig", null);
    __decorate([
        mj.traitEvent("T2StAutoMrgBhv_trvSpd")
    ], Tile2StartAutoMergeBehavior.prototype, "getTravelSpeedConfig", null);
    return Tile2StartAutoMergeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2StartAutoMergeBehavior = Tile2StartAutoMergeBehavior;

cc._RF.pop();
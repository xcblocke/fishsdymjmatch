"use strict";
cc._RF.push(module, '25569ynpz5JRoLSlIP/rVkx', 'Tile2FixedStrategy');
// Scripts/Tile2FixedStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2FixedStrategy = /** @class */ (function (_super) {
    __extends(Tile2FixedStrategy, _super);
    function Tile2FixedStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2Fixed";
        _this.priority = 100;
        return _this;
    }
    Tile2FixedStrategy.prototype.getPriority = function () {
        return 100;
    };
    Tile2FixedStrategy.prototype.isFixedLevel = function () {
        return false;
    };
    Tile2FixedStrategy.prototype.getFixedLevelStr = function () {
        return null;
    };
    Tile2FixedStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        return Promise.resolve();
    };
    Tile2FixedStrategy.prototype.canHandle = function (e) {
        var t = e.gameData.getLevelId();
        return !!t && this.isFixedLevel(t);
    };
    Tile2FixedStrategy.prototype.extract = function (e) {
        var t = e.gameData.getLevelId(), o = this.getFixedLevelStr(t);
        return o ? Promise.resolve({
            content: o,
            index: "fixed"
        }) : Promise.resolve(null);
    };
    __decorate([
        mj.traitEvent("T2FixStr_priority")
    ], Tile2FixedStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2FixStr_isFixed")
    ], Tile2FixedStrategy.prototype, "isFixedLevel", null);
    __decorate([
        mj.traitEvent("T2FixStr_getFixed")
    ], Tile2FixedStrategy.prototype, "getFixedLevelStr", null);
    Tile2FixedStrategy = __decorate([
        mj.class("Tile2FixedStrategy")
    ], Tile2FixedStrategy);
    return Tile2FixedStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2FixedStrategy;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'c4c52PHsM9JnarN7itw5osg', 'Tile2HardStrategy');
// Scripts/Tile2HardStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2HardStrategy = /** @class */ (function (_super) {
    __extends(Tile2HardStrategy, _super);
    function Tile2HardStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2Hard";
        _this.priority = 80;
        return _this;
    }
    Tile2HardStrategy.prototype.getPriority = function () {
        return 80;
    };
    Tile2HardStrategy.prototype.isHardLevel = function () {
        return false;
    };
    Tile2HardStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        return Promise.resolve();
    };
    Tile2HardStrategy.prototype.canHandle = function (e) {
        var t = e.gameData.getLevelId();
        return !!t && this.isHardLevel(t);
    };
    Tile2HardStrategy.prototype.extract = function () {
        return Promise.resolve(null);
    };
    __decorate([
        mj.traitEvent("T2HarStr_priority")
    ], Tile2HardStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2HarStr_isHard")
    ], Tile2HardStrategy.prototype, "isHardLevel", null);
    __decorate([
        mj.traitEvent("T2HarStr_extract")
    ], Tile2HardStrategy.prototype, "extract", null);
    Tile2HardStrategy = __decorate([
        mj.class("Tile2HardStrategy")
    ], Tile2HardStrategy);
    return Tile2HardStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2HardStrategy;

cc._RF.pop();
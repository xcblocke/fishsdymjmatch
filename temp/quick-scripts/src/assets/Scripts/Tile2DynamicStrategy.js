"use strict";
cc._RF.push(module, '66c8aiBFJpDgYg7/eSzNri/', 'Tile2DynamicStrategy');
// Scripts/Tile2DynamicStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("./core/extractQuestion/ExtractNormalLevels");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var Tile2CapabilityExtractRegistry_1 = require("./Tile2CapabilityExtractRegistry");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2DynamicStrategy = /** @class */ (function (_super) {
    __extends(Tile2DynamicStrategy, _super);
    function Tile2DynamicStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2Dynamic";
        _this.priority = 40;
        return _this;
    }
    Tile2DynamicStrategy.prototype.getPriority = function () {
        return 40;
    };
    Tile2DynamicStrategy.prototype.isDynamicEnabledTrait = function () {
        return Tile2CapabilityExtractRegistry_1.default.isEnabled();
    };
    Tile2DynamicStrategy.prototype.isDynamicEnabled = function (e) {
        return this.isDynamicEnabledTrait(e);
    };
    Tile2DynamicStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        return Promise.resolve();
    };
    Tile2DynamicStrategy.prototype.canHandle = function (e) {
        return this.isDynamicEnabled(e);
    };
    Tile2DynamicStrategy.prototype.extract = function (e) {
        try {
            var t = e.gameData, o = {
                levelID: t.getLevelId(),
                levelIndex: t.getLevelGenIndex(),
                dieResult: t.getDieResult(),
                gameType: GameTypeEnums_1.MjGameType.Tile2Normal
            };
            o.reallyLevelID = Math.max(1, o.levelIndex);
            return ExtractNormalLevels_1.default.getInstance().getContent(o).then(function (e) {
                var t = __read(e, 5), o = t[0], n = (t[1], t[2]), i = t[3], r = t[4];
                return o ? {
                    content: o,
                    index: String(n),
                    libName: i || r,
                    isCapabilityExtract: true
                } : null;
            }).catch(function () {
                return null;
            });
        }
        catch (e) {
            return Promise.resolve(null);
        }
    };
    __decorate([
        mj.traitEvent("T2DynStr_priority")
    ], Tile2DynamicStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2DynStr_isDyn")
    ], Tile2DynamicStrategy.prototype, "isDynamicEnabledTrait", null);
    __decorate([
        mj.traitEvent("T2DynStr_extract")
    ], Tile2DynamicStrategy.prototype, "extract", null);
    Tile2DynamicStrategy = __decorate([
        mj.class("Tile2DynamicStrategy")
    ], Tile2DynamicStrategy);
    return Tile2DynamicStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2DynamicStrategy;

cc._RF.pop();
"use strict";
cc._RF.push(module, '95a9aR7mu5FQ78QTqBHdo6k', 'ExtractTravelHardLevels');
// Scripts/core/extractQuestion/ExtractTravelHardLevels.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractHardLevelsBase_1 = require("./ExtractHardLevelsBase");
var ExtractTravelHardLevels = /** @class */ (function (_super) {
    __extends(ExtractTravelHardLevels, _super);
    function ExtractTravelHardLevels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtractTravelHardLevels_1 = ExtractTravelHardLevels;
    ExtractTravelHardLevels.getInstance = function () {
        this._instance || (this._instance = new ExtractTravelHardLevels_1());
        return this._instance;
    };
    ExtractTravelHardLevels.prototype.getDataConfig = function () {
        return {};
    };
    ExtractTravelHardLevels.prototype.getConfig = function () {
        var e = {
            storageKey: "ExtractTravelHardLevels",
            dataPath: "config/boards/endless_classic/initial",
            defaultMaxLevels: 500,
            sourceName: "initial",
            logPrefix: "ExtractTravelHardLevels"
        }, t = this.getDataConfig();
        t.dataPath && (e.dataPath = t.dataPath);
        t.bundleName && (e.bundleName = t.bundleName);
        return e;
    };
    ExtractTravelHardLevels.prototype.getLevelData = function () {
        return ExtractTravelHardLevels_1.levelData;
    };
    ExtractTravelHardLevels.prototype.setLevelData = function (e) {
        ExtractTravelHardLevels_1.levelData = e;
    };
    var ExtractTravelHardLevels_1;
    ExtractTravelHardLevels.levelData = null;
    __decorate([
        mj.traitEvent("TravelHardLv_getDataCfg")
    ], ExtractTravelHardLevels.prototype, "getDataConfig", null);
    ExtractTravelHardLevels = ExtractTravelHardLevels_1 = __decorate([
        mj.class("ExtractTravelHardLevels")
    ], ExtractTravelHardLevels);
    return ExtractTravelHardLevels;
}(ExtractHardLevelsBase_1.ExtractHardLevelsBase));
exports.default = ExtractTravelHardLevels;

cc._RF.pop();
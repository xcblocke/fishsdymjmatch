"use strict";
cc._RF.push(module, 'a77d376J1lIh4stlFwwYI+V', 'ExtractSpecialHardLevels');
// Scripts/core/extractQuestion/ExtractSpecialHardLevels.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractHardLevelsBase_1 = require("./ExtractHardLevelsBase");
var ExtractSpecialHardLevels = /** @class */ (function (_super) {
    __extends(ExtractSpecialHardLevels, _super);
    function ExtractSpecialHardLevels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtractSpecialHardLevels.getInstance = function () {
        this._instance || (this._instance = new ExtractSpecialHardLevels());
        return this._instance;
    };
    ExtractSpecialHardLevels.prototype.getDataConfig = function () {
        return {};
    };
    ExtractSpecialHardLevels.prototype.getConfig = function () {
        var e = {
            storageKey: "ExtractSpecialHardLevels",
            dataPath: "config/specialLevels/special_levels",
            defaultMaxLevels: 120,
            sourceName: "special_levels",
            logPrefix: "ExtractSpecialHardLevels"
        }, t = this.getDataConfig();
        t.dataPath && (e.dataPath = t.dataPath);
        t.bundleName && (e.bundleName = t.bundleName);
        return e;
    };
    ExtractSpecialHardLevels.prototype.getLevelData = function () {
        return ExtractSpecialHardLevels.levelData;
    };
    ExtractSpecialHardLevels.prototype.setLevelData = function (e) {
        ExtractSpecialHardLevels.levelData = e;
    };
    ExtractSpecialHardLevels.levelData = null;
    __decorate([
        mj.traitEvent("SpecialHardLv_getDataCfg")
    ], ExtractSpecialHardLevels.prototype, "getDataConfig", null);
    return ExtractSpecialHardLevels;
}(ExtractHardLevelsBase_1.ExtractHardLevelsBase));
exports.default = ExtractSpecialHardLevels;

cc._RF.pop();
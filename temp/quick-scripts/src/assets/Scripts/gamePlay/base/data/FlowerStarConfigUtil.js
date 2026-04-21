"use strict";
cc._RF.push(module, '1bb01ax6zFFTrB5gZy4C+zq', 'FlowerStarConfigUtil');
// Scripts/gamePlay/base/data/FlowerStarConfigUtil.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerStarConfigUtil = void 0;
var DataReader_1 = require("../../../framework/data/DataReader");
var ConfigType_1 = require("./ConfigType");
var FlowerStarConfigUtil = /** @class */ (function () {
    function FlowerStarConfigUtil() {
    }
    FlowerStarConfigUtil.getStarList = function () {
        if (this._cachedStarList)
            return this._cachedStarList;
        var e = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.flower_star_config);
        this._cachedStarList = e.map(function (e) {
            return {
                id: e.id,
                name: e.name,
                bundle: e.bundle,
                isLocal: e.isLocal
            };
        });
        return this._cachedStarList;
    };
    FlowerStarConfigUtil.getFullList = function () {
        if (this._cachedFullList)
            return this._cachedFullList;
        this._cachedFullList = __spreadArrays([{
                id: 0,
                name: "木质",
                bundle: "mainRes",
                isLocal: true
            }], this.getStarList());
        return this._cachedFullList;
    };
    FlowerStarConfigUtil.getById = function (e) {
        return this.getFullList().find(function (t) {
            return t.id === e;
        }) || null;
    };
    FlowerStarConfigUtil.clearCache = function () {
        this._cachedStarList = null;
        this._cachedFullList = null;
    };
    FlowerStarConfigUtil._cachedStarList = null;
    FlowerStarConfigUtil._cachedFullList = null;
    return FlowerStarConfigUtil;
}());
exports.FlowerStarConfigUtil = FlowerStarConfigUtil;

cc._RF.pop();
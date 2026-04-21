"use strict";
cc._RF.push(module, '66b2fuMK9JHArDnNj7/iPMf', 'MappingStrategyBase');
// Scripts/MappingStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategyBase = void 0;
var Common_1 = require("./types/Common");
var MappingStrategyBase = /** @class */ (function () {
    function MappingStrategyBase() {
        this.name = "MappingStrategyBase";
        this.desc = "映射策略基类";
        this.param = {};
    }
    MappingStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    MappingStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    MappingStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_MAPPING; }
    };
    return MappingStrategyBase;
}());
exports.MappingStrategyBase = MappingStrategyBase;

cc._RF.pop();
"use strict";
cc._RF.push(module, '5fdf2avkClNkaeBLGT8XAXT', 'LayerLevelValue');
// Scripts/core/dynamicCurve/LayerLevelValue.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerLevelValue = void 0;
var Common_1 = require("../../types/Common");
var FactoryLevelValue_1 = require("../../FactoryLevelValue");
var LayerLevelValue = /** @class */ (function () {
    function LayerLevelValue() {
        this.strategy = null;
    }
    LayerLevelValue.getAvailableStrategies = function () {
        return FactoryLevelValue_1.FactoryLevelValue.getAllNames();
    };
    LayerLevelValue.prototype.setStrategy = function (e) {
        var t = FactoryLevelValue_1.FactoryLevelValue.get(e.name);
        if (t) {
            this.strategy = t;
            e.param && t.setStrategyParam(e.param);
            return true;
        }
        return false;
    };
    LayerLevelValue.prototype.getStrategyName = function () {
        var e;
        return (null === (e = this.strategy) || void 0 === e ? void 0 : e.name) || "未设置策略";
    };
    LayerLevelValue.prototype.fillLevelValue = function (e) {
        this.strategy && this.strategy.fillLevelValue(e);
    };
    LayerLevelValue.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_LEVEL_VALUE; }
    };
    return LayerLevelValue;
}());
exports.LayerLevelValue = LayerLevelValue;

cc._RF.pop();
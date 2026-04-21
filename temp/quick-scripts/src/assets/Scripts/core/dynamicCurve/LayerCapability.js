"use strict";
cc._RF.push(module, '8ddd6mOoeFE4IWddzuizrq3', 'LayerCapability');
// Scripts/core/dynamicCurve/LayerCapability.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerCapability = void 0;
var FactoryCapability_1 = require("../../FactoryCapability");
var Common_1 = require("../../types/Common");
var LayerCapability = /** @class */ (function () {
    function LayerCapability() {
        this.strategy = null;
    }
    LayerCapability.getAvailableStrategies = function () {
        return FactoryCapability_1.FactoryCapability.getAllNames();
    };
    LayerCapability.prototype.setStrategy = function (e) {
        var t = FactoryCapability_1.FactoryCapability.get(e.name);
        if (t) {
            this.strategy = t;
            e.param && t.setStrategyParam(e.param);
            return true;
        }
        return false;
    };
    LayerCapability.prototype.getStrategyName = function () {
        var e;
        return (null === (e = this.strategy) || void 0 === e ? void 0 : e.name) || "未设置策略";
    };
    LayerCapability.prototype.updateCapability = function (e) {
        this.strategy && this.strategy.updateCapability(e);
    };
    LayerCapability.prototype.getCapability = function (e) {
        return this.strategy ? this.strategy.getCapability(e) : e.defaultCapability;
    };
    LayerCapability.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_CAPABILITY; }
    };
    return LayerCapability;
}());
exports.LayerCapability = LayerCapability;

cc._RF.pop();
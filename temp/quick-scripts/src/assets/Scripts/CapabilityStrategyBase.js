"use strict";
cc._RF.push(module, '0552aOls4FMC4kgqecVTgMA', 'CapabilityStrategyBase');
// Scripts/CapabilityStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStrategyBase = exports.sigmoid = void 0;
var Common_1 = require("./types/Common");
var sigmoid = function (e) {
    return 1 / (1 + Math.exp(-e));
};
exports.sigmoid = sigmoid;
var CapabilityStrategyBase = /** @class */ (function () {
    function CapabilityStrategyBase() {
        this.param = {};
    }
    CapabilityStrategyBase.prototype.getPValueKey = function () {
        var e = this, t = Object.keys(this.param);
        t.sort();
        var o = t.map(function (t) {
            return t + "=" + e.param[t];
        }).join("_");
        return Common_1.PrefixCapability + "_" + this.name + "_[" + o + "]";
    };
    CapabilityStrategyBase.prototype.getCapability = function (e) {
        var t = this.getPValueKey();
        return e.extractModel.getCachedData(t, e.defaultCapability);
    };
    CapabilityStrategyBase.prototype.setCapability = function (e, t) {
        var o = this.getPValueKey();
        e.extractModel.cacheData(o, t);
    };
    CapabilityStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_CAPABILITY; }
    };
    CapabilityStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    CapabilityStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    return CapabilityStrategyBase;
}());
exports.CapabilityStrategyBase = CapabilityStrategyBase;

cc._RF.pop();
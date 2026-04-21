"use strict";
cc._RF.push(module, '960a8H9kPpCQKQ9YRHmV0Fo', 'DDAStrategyBase');
// Scripts/DDAStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategyBase = void 0;
var Common_1 = require("./types/Common");
var DDAStrategyBase = /** @class */ (function () {
    function DDAStrategyBase() {
        this.priority = 0;
        this.param = {};
    }
    DDAStrategyBase.prototype.setPriority = function (e) {
        this.priority = e;
    };
    DDAStrategyBase.prototype.getPriority = function () {
        return this.priority;
    };
    DDAStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    DDAStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    DDAStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_DDA; }
    };
    return DDAStrategyBase;
}());
exports.DDAStrategyBase = DDAStrategyBase;

cc._RF.pop();
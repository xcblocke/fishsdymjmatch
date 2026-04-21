"use strict";
cc._RF.push(module, 'c661eZlhGVP1q9dWrH8zMCj', 'FactoryLevelValue');
// Scripts/FactoryLevelValue.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.levelStrategy = exports.FactoryLevelValue = void 0;
var Common_1 = require("./types/Common");
var FactoryLevelValue = /** @class */ (function () {
    function FactoryLevelValue() {
    }
    FactoryLevelValue.register = function (e, t) {
        this.strategies.has(e) || this.strategies.set(e, t);
    };
    FactoryLevelValue.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_LEVEL_VALUE; }
    };
    FactoryLevelValue.get = function (e) {
        var t = this.strategies.get(e);
        return t ? new t() : null;
    };
    FactoryLevelValue.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryLevelValue.strategies = new Map();
    return FactoryLevelValue;
}());
exports.FactoryLevelValue = FactoryLevelValue;
var levelStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.calculateLevelValue = function (t) {
                Date.now();
                var o = e.prototype.calculateLevelValue.call(this, t);
                Date.now();
                return o;
            };
            return t;
        }(t);
        FactoryLevelValue.register(e, o);
        return o;
    };
};
exports.levelStrategy = levelStrategy;

cc._RF.pop();
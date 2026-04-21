"use strict";
cc._RF.push(module, '24b89FPRfNI/7X0zpJmqGTK', 'FactoryMapping');
// Scripts/FactoryMapping.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.mappingStrategy = exports.FactoryMapping = void 0;
var Common_1 = require("./types/Common");
var FactoryMapping = /** @class */ (function () {
    function FactoryMapping() {
    }
    FactoryMapping.register = function (e, t) {
        this.strategies.has(e) || this.strategies.set(e, t);
    };
    FactoryMapping.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_MAPPING; }
    };
    FactoryMapping.get = function (e) {
        var t = this.strategies.get(e);
        return t ? new t() : null;
    };
    FactoryMapping.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryMapping.strategies = new Map();
    return FactoryMapping;
}());
exports.FactoryMapping = FactoryMapping;
var mappingStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.mapping = function (t) {
                Date.now();
                var o = e.prototype.mapping.call(this, t);
                Date.now();
                return o;
            };
            return t;
        }(t);
        FactoryMapping.register(e, o);
        return o;
    };
};
exports.mappingStrategy = mappingStrategy;

cc._RF.pop();
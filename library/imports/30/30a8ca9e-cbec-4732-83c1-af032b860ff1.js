"use strict";
cc._RF.push(module, '30a8cqey+xHMoPBrwMrhg/x', 'FactoryCapability');
// Scripts/FactoryCapability.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.capabilityStrategy = exports.FactoryCapability = void 0;
var Common_1 = require("./types/Common");
var FactoryCapability = /** @class */ (function () {
    function FactoryCapability() {
    }
    FactoryCapability.register = function (e, t) {
        this.strategies.has(e) || this.strategies.set(e, t);
    };
    FactoryCapability.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_CAPABILITY; }
    };
    FactoryCapability.get = function (e) {
        var t = this.strategies.get(e);
        return t ? new t() : null;
    };
    FactoryCapability.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryCapability.strategies = new Map();
    return FactoryCapability;
}());
exports.FactoryCapability = FactoryCapability;
var capabilityStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.updateCapability = function (t) {
                Date.now();
                e.prototype.updateCapability.call(this, t);
                Date.now();
            };
            return t;
        }(t);
        FactoryCapability.register(e, o);
        return o;
    };
};
exports.capabilityStrategy = capabilityStrategy;

cc._RF.pop();
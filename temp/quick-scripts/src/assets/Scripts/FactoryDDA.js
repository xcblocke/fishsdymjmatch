"use strict";
cc._RF.push(module, '73e61Sdwk9CRac4/lSQ6MRI', 'FactoryDDA');
// Scripts/FactoryDDA.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ddaStrategy = exports.FactoryDDA = void 0;
var Common_1 = require("./types/Common");
var FactoryDDA = /** @class */ (function () {
    function FactoryDDA() {
    }
    FactoryDDA.register = function (e) {
        this.strategies.has(e.name) || this.strategies.set(e.name, e);
    };
    FactoryDDA.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_DDA; }
    };
    FactoryDDA.get = function (e) {
        var t;
        return null !== (t = this.strategies.get(e)) && void 0 !== t ? t : null;
    };
    FactoryDDA.getAllNames = function () {
        return Array.from(this.strategies.keys());
    };
    FactoryDDA.getAllStrategies = function () {
        return Array.from(this.strategies.values());
    };
    FactoryDDA.strategies = new Map();
    return FactoryDDA;
}());
exports.FactoryDDA = FactoryDDA;
var ddaStrategy = function (e) {
    return function (t) {
        var o = function (e) {
            __extends(t, e);
            function t() {
                for (var t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return e.apply(this, __spreadArrays(t)) || this;
            }
            t.prototype.filter = function (t) {
                Date.now();
                var o = e.prototype.filter.call(this, t);
                Date.now();
                return o;
            };
            return t;
        }(t), n = new o();
        n.setPriority(e);
        FactoryDDA.register(n);
        return o;
    };
};
exports.ddaStrategy = ddaStrategy;

cc._RF.pop();
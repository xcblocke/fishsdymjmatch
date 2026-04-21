"use strict";
cc._RF.push(module, '8dbf7aYdn1NUK9ObPMN3BFa', 'LayerDDA');
// Scripts/core/dynamicCurve/LayerDDA.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerDDA = void 0;
var IDynamicCurve_1 = require("../../types/IDynamicCurve");
var FactoryDDA_1 = require("../../FactoryDDA");
var Common_1 = require("../../types/Common");
var LayerDDA = /** @class */ (function () {
    function LayerDDA() {
        this.strategies = [];
    }
    LayerDDA.prototype.filter = function (e) {
        var t, o;
        this.strategies.sort(function (e, t) {
            return t.getPriority() - e.getPriority();
        });
        try {
            for (var a = __values(this.strategies), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = __read(s.filter(e), 2), u = c[0], p = c[1];
                if (u === IDynamicCurve_1.EDDAFilter.LEVEL)
                    return [true, p];
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return [false, null];
    };
    LayerDDA.prototype.pushStrategies = function (e) {
        var t, o;
        this.strategies = [];
        try {
            for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                var l = r.value, s = FactoryDDA_1.FactoryDDA.get(l.name);
                if (s) {
                    this.strategies.push(s);
                    l.param && s.setStrategyParam(l.param);
                    void 0 !== l.priority && s.setPriority(l.priority);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    LayerDDA.prototype.addStrategy = function (e) {
        var t = FactoryDDA_1.FactoryDDA.get(e.name);
        if (t) {
            this.strategies.push(t);
            e.param && t.setStrategyParam(e.param);
            void 0 !== e.priority && t.setPriority(e.priority);
        }
    };
    LayerDDA.prototype.clearStrategies = function () {
        this.strategies = [];
    };
    LayerDDA.prototype.getStrategyName = function () {
        return this.strategies.map(function (e) {
            return e.name;
        }).join(",");
    };
    LayerDDA.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_DDA; }
    };
    return LayerDDA;
}());
exports.LayerDDA = LayerDDA;

cc._RF.pop();
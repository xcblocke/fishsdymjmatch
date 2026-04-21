"use strict";
cc._RF.push(module, 'bb283bhEK5Iqq+/ffi+cyH9', 'LayerMapping');
// Scripts/core/dynamicCurve/LayerMapping.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerMapping = void 0;
var Common_1 = require("../../types/Common");
var FactoryMapping_1 = require("../../FactoryMapping");
var LayerMapping = /** @class */ (function () {
    function LayerMapping() {
        this.strategies = [];
    }
    LayerMapping.getAvailableStrategies = function () {
        return FactoryMapping_1.FactoryMapping.getAllNames();
    };
    LayerMapping.prototype.pushStrategy = function (e) {
        var t = FactoryMapping_1.FactoryMapping.get(e.name);
        if (t) {
            this.strategies.push(t);
            e.param && t.setStrategyParam(e.param);
        }
    };
    LayerMapping.prototype.setStrategies = function (e) {
        var t, o;
        this.strategies = [];
        try {
            for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                var a = r.value;
                this.pushStrategy(a);
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
        this.pushStrategy({
            name: "Mapping0"
        });
    };
    LayerMapping.prototype.getStrategyName = function () {
        return this.strategies.map(function (e) {
            return e.name;
        }).join(",");
    };
    LayerMapping.prototype.mapping = function (e) {
        var t, o;
        if (0 === this.strategies.length)
            return null;
        try {
            for (var i = __values(this.strategies), r = i.next(); !r.done; r = i.next()) {
                var a = r.value.mapping(e);
                if (a)
                    return a;
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
        return null;
    };
    LayerMapping.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_MAPPING; }
    };
    return LayerMapping;
}());
exports.LayerMapping = LayerMapping;

cc._RF.pop();
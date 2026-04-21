"use strict";
cc._RF.push(module, '409f0qrc0VKs6Jj33Za+JsU', 'RateUtils');
// Scripts/RateUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RateUtils = /** @class */ (function () {
    function RateUtils() {
    }
    RateUtils.calculateDenominator = function (e) {
        var t = Math.min(10, e);
        return 600 * e + 20 * t * t - 420 * t;
    };
    RateUtils.calculateRate = function (t, o, n) {
        if (o <= 0)
            return 0;
        var i = RateUtils.calculateDenominator(o);
        if (i <= 0)
            return 0;
        var r = 100 * Math.sqrt(t / i);
        null != n && (r *= n);
        return Math.min(r, 99.99);
    };
    RateUtils.getAdjustedRate = function (e, t, o) {
        return t ? e : o ? 0.7 * e : 0.9 * e;
    };
    RateUtils.calculateRateIncrease = function (e, t) {
        return t <= 0 ? 0 : e / t - 1;
    };
    return RateUtils;
}());
exports.default = RateUtils;

cc._RF.pop();
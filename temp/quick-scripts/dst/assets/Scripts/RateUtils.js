
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/RateUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1JhdGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQW1CQSxDQUFDO0lBbEJRLDhCQUFvQixHQUEzQixVQUE0QixDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTSx1QkFBYSxHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00seUJBQWUsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ00sK0JBQXFCLEdBQTVCLFVBQTZCLENBQUMsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0ZVV0aWxzIHtcbiAgc3RhdGljIGNhbGN1bGF0ZURlbm9taW5hdG9yKGUpIHtcbiAgICB2YXIgdCA9IE1hdGgubWluKDEwLCBlKTtcbiAgICByZXR1cm4gNjAwICogZSArIDIwICogdCAqIHQgLSA0MjAgKiB0O1xuICB9XG4gIHN0YXRpYyBjYWxjdWxhdGVSYXRlKHQsIG8sIG4pIHtcbiAgICBpZiAobyA8PSAwKSByZXR1cm4gMDtcbiAgICB2YXIgaSA9IFJhdGVVdGlscy5jYWxjdWxhdGVEZW5vbWluYXRvcihvKTtcbiAgICBpZiAoaSA8PSAwKSByZXR1cm4gMDtcbiAgICB2YXIgciA9IDEwMCAqIE1hdGguc3FydCh0IC8gaSk7XG4gICAgbnVsbCAhPSBuICYmIChyICo9IG4pO1xuICAgIHJldHVybiBNYXRoLm1pbihyLCA5OS45OSk7XG4gIH1cbiAgc3RhdGljIGdldEFkanVzdGVkUmF0ZShlLCB0LCBvKSB7XG4gICAgcmV0dXJuIHQgPyBlIDogbyA/IDAuNyAqIGUgOiAwLjkgKiBlO1xuICB9XG4gIHN0YXRpYyBjYWxjdWxhdGVSYXRlSW5jcmVhc2UoZSwgdCkge1xuICAgIHJldHVybiB0IDw9IDAgPyAwIDogZSAvIHQgLSAxO1xuICB9XG59Il19
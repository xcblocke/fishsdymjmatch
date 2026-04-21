
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c39dNpaS5Ll6NBNDAzEJsr', 'RankUtil');
// subpackages/l_rank/Scripts/RankUtil.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RankUtil = /** @class */ (function () {
    function RankUtil() {
    }
    RankUtil.formatCountdown = function (t) {
        if (t <= 0)
            return "00:00:00";
        var e = Math.floor(t / 1000), o = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), a = e % 60, i = function i(t) {
            return t.toString().padStart(2, "0");
        };
        return i(o) + ":" + i(n) + ":" + i(a);
    };
    RankUtil.formatCountdownDayHourMin = function (t) {
        if (t <= 0)
            return "00:00:00";
        if (t >= 86400)
            return Math.floor(t / 86400) + "d" + (o = Math.floor(t % 86400 / 3600)) + "h" + (n = Math.floor(t % 3600 / 60)) + "m";
        var e = Math.floor(t), o = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), a = e % 60, i = function i(t) {
            return t.toString().padStart(2, "0");
        };
        return i(o) + ":" + i(n) + ":" + i(a);
    };
    return RankUtil;
}());
exports.default = RankUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXdCQSxDQUFDO0lBdkJRLHdCQUFlLEdBQXRCLFVBQXVCLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ3hCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQzdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUNWLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNNLGtDQUF5QixHQUFoQyxVQUFpQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0SSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNuQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQ3hCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQzdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUNWLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua1V0aWwge1xuICBzdGF0aWMgZm9ybWF0Q291bnRkb3duKHQpIHtcbiAgICBpZiAodCA8PSAwKSByZXR1cm4gXCIwMDowMDowMFwiO1xuICAgIHZhciBlID0gTWF0aC5mbG9vcih0IC8gMTAwMCksXG4gICAgICBvID0gTWF0aC5mbG9vcihlIC8gMzYwMCksXG4gICAgICBuID0gTWF0aC5mbG9vcihlICUgMzYwMCAvIDYwKSxcbiAgICAgIGEgPSBlICUgNjAsXG4gICAgICBpID0gZnVuY3Rpb24gaSh0KSB7XG4gICAgICAgIHJldHVybiB0LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgfTtcbiAgICByZXR1cm4gaShvKSArIFwiOlwiICsgaShuKSArIFwiOlwiICsgaShhKTtcbiAgfVxuICBzdGF0aWMgZm9ybWF0Q291bnRkb3duRGF5SG91ck1pbih0KSB7XG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICBpZiAodCA+PSA4NjQwMCkgcmV0dXJuIE1hdGguZmxvb3IodCAvIDg2NDAwKSArIFwiZFwiICsgKG8gPSBNYXRoLmZsb29yKHQgJSA4NjQwMCAvIDM2MDApKSArIFwiaFwiICsgKG4gPSBNYXRoLmZsb29yKHQgJSAzNjAwIC8gNjApKSArIFwibVwiO1xuICAgIHZhciBlID0gTWF0aC5mbG9vcih0KSxcbiAgICAgIG8gPSBNYXRoLmZsb29yKGUgLyAzNjAwKSxcbiAgICAgIG4gPSBNYXRoLmZsb29yKGUgJSAzNjAwIC8gNjApLFxuICAgICAgYSA9IGUgJSA2MCxcbiAgICAgIGkgPSBmdW5jdGlvbiBpKHQpIHtcbiAgICAgICAgcmV0dXJuIHQudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICB9O1xuICAgIHJldHVybiBpKG8pICsgXCI6XCIgKyBpKG4pICsgXCI6XCIgKyBpKGEpO1xuICB9XG59Il19
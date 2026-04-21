
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deathAnalyze/Scripts/DeadSelectUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '194c5mQqOZCQ74W8hketzLe', 'DeadSelectUtils');
// subpackages/l_deathAnalyze/Scripts/DeadSelectUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeadSelectUtils = void 0;
var DeadSelectUtils = /** @class */ (function () {
    function DeadSelectUtils() {
    }
    DeadSelectUtils.getAllMatchTiles = function (t) {
        for (var e = [], r = 0; r < t.length; r++)
            for (var n = r + 1; n < t.length; n++)
                e.push([t[r], t[n]]);
        return e;
    };
    return DeadSelectUtils;
}());
exports.DeadSelectUtils = DeadSelectUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYXRoQW5hbHl6ZS9TY3JpcHRzL0RlYWRTZWxlY3RVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFLQSxDQUFDO0lBSlEsZ0NBQWdCLEdBQXZCLFVBQXdCLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDSCxzQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVhZFNlbGVjdFV0aWxzIHtcbiAgc3RhdGljIGdldEFsbE1hdGNoVGlsZXModCkge1xuICAgIGZvciAodmFyIGUgPSBbXSwgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSBmb3IgKHZhciBuID0gciArIDE7IG4gPCB0Lmxlbmd0aDsgbisrKSBlLnB1c2goW3Rbcl0sIHRbbl1dKTtcbiAgICByZXR1cm4gZTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dda2/Scripts/DDAStrategy2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'edfabN4zwJInYmKmd4+k03+', 'DDAStrategy2');
// subpackages/l_dda2/Scripts/DDAStrategy2.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy2 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var DDAStrategy2 = /** @class */ (function (_super) {
    __extends(DDAStrategy2, _super);
    function DDAStrategy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA2";
        _this.desc = "之前连续x关都不能首次挑战通关【用了洗牌/有过restart】,则本关默认选通关率=1的关";
        return _this;
    }
    DDAStrategy2.prototype.filter = function (t) {
        var e = this.getStrategyParam().x, r = void 0 === e ? 3 : e, o = t.extractModel.getLastLevelRecord(r);
        if (o.length < r)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        for (var n = 0; n < o.length; n++) {
            var i = o[n];
            if (i.replay <= 0 && i.shuffle <= 0)
                return [IDynamicCurve_1.EDDAFilter.NONE, null];
        }
        var c = t.levels.filter(function (t) {
            return 1 === t.rateSuccess;
        });
        if (c.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var u = c[Math.floor(Math.random() * c.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, u];
    };
    DDAStrategy2 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy2);
    return DDAStrategy2;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy2 = DDAStrategy2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RkYTIvU2NyaXB0cy9EREFTdHJhdGVneTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBa0U7QUFDbEUsMERBQTBEO0FBQzFELG9FQUFtRTtBQUVuRTtJQUFrQyxnQ0FBZTtJQUFqRDtRQUFBLHFFQW1CQztRQWxCQyxVQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsVUFBSSxHQUFHLCtDQUErQyxDQUFDOztJQWlCekQsQ0FBQztJQWhCQyw2QkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFDL0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLDBCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDO2dCQUFFLE9BQU8sQ0FBQywwQkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsMEJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQywwQkFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbEJVLFlBQVk7UUFEeEIsd0JBQVcsQ0FBQyxDQUFDLENBQUM7T0FDRixZQUFZLENBbUJ4QjtJQUFELG1CQUFDO0NBbkJELEFBbUJDLENBbkJpQyxpQ0FBZSxHQW1CaEQ7QUFuQlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFRERBRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy90eXBlcy9JRHluYW1pY0N1cnZlJztcbmltcG9ydCB7IGRkYVN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9GYWN0b3J5RERBJztcbmltcG9ydCB7IEREQVN0cmF0ZWd5QmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRERBU3RyYXRlZ3lCYXNlJztcbkBkZGFTdHJhdGVneSgxKVxuZXhwb3J0IGNsYXNzIEREQVN0cmF0ZWd5MiBleHRlbmRzIEREQVN0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIkREQTJcIjtcbiAgZGVzYyA9IFwi5LmL5YmN6L+e57uteOWFs+mDveS4jeiDvemmluasoeaMkeaImOmAmuWFs+OAkOeUqOS6hua0l+eJjC/mnInov4dyZXN0YXJ044CRLOWImeacrOWFs+m7mOiupOmAiemAmuWFs+eOhz0x55qE5YWzXCI7XG4gIGZpbHRlcih0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFN0cmF0ZWd5UGFyYW0oKS54LFxuICAgICAgciA9IHZvaWQgMCA9PT0gZSA/IDMgOiBlLFxuICAgICAgbyA9IHQuZXh0cmFjdE1vZGVsLmdldExhc3RMZXZlbFJlY29yZChyKTtcbiAgICBpZiAoby5sZW5ndGggPCByKSByZXR1cm4gW0VEREFGaWx0ZXIuTk9ORSwgbnVsbF07XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBvLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgaSA9IG9bbl07XG4gICAgICBpZiAoaS5yZXBsYXkgPD0gMCAmJiBpLnNodWZmbGUgPD0gMCkgcmV0dXJuIFtFRERBRmlsdGVyLk5PTkUsIG51bGxdO1xuICAgIH1cbiAgICB2YXIgYyA9IHQubGV2ZWxzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIDEgPT09IHQucmF0ZVN1Y2Nlc3M7XG4gICAgfSk7XG4gICAgaWYgKGMubGVuZ3RoIDw9IDApIHJldHVybiBbRUREQUZpbHRlci5OT05FLCBudWxsXTtcbiAgICB2YXIgdSA9IGNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYy5sZW5ndGgpXTtcbiAgICByZXR1cm4gW0VEREFGaWx0ZXIuTEVWRUwsIHVdO1xuICB9XG59Il19
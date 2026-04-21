
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dda4/Scripts/DDAStrategy4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'febf2RRXCpDW7kvsZPMtD76', 'DDAStrategy4');
// subpackages/l_dda4/Scripts/DDAStrategy4.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy4 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var Common_1 = require("../../../Scripts/types/Common");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var DDAStrategy4 = /** @class */ (function (_super) {
    __extends(DDAStrategy4, _super);
    function DDAStrategy4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA4";
        _this.desc = "之前连续x关>=y秒通关，则本关只从通关时长处于最低z分位的关卡里挑。";
        return _this;
    }
    DDAStrategy4.prototype.filter = function (t) {
        if (t.levels.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var e = this.getStrategyParam(), r = e.x, o = void 0 === r ? 3 : r, n = e.y, i = void 0 === n ? 60 : n, s = e.z, u = void 0 === s ? 10 : s, p = t.extractModel.getLastLevelRecord(o);
        if (p.length < o)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        for (var f = 0; f < p.length; f++) {
            if (p[f].passTime < i)
                return [IDynamicCurve_1.EDDAFilter.NONE, null];
        }
        var l = Common_1.getPercentileKey("predictTime"), y = u / 100, d = t.levels.filter(function (t) {
            return t[l] <= y;
        });
        if (d.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var D = d[Math.floor(Math.random() * d.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, D];
    };
    DDAStrategy4 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy4);
    return DDAStrategy4;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy4 = DDAStrategy4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RkYTQvU2NyaXB0cy9EREFTdHJhdGVneTQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBa0U7QUFDbEUsd0RBQWlFO0FBQ2pFLG9FQUFtRTtBQUNuRSwwREFBMEQ7QUFFMUQ7SUFBa0MsZ0NBQWU7SUFBakQ7UUFBQSxxRUEwQkM7UUF6QkMsVUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFVBQUksR0FBRyxxQ0FBcUMsQ0FBQzs7SUF3Qi9DLENBQUM7SUF2QkMsNkJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsMEJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDUCxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1AsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLDBCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQywwQkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxHQUFHLHlCQUFnQixDQUFDLGFBQWEsQ0FBQyxFQUNyQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLDBCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsMEJBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXpCVSxZQUFZO1FBRHhCLHdCQUFXLENBQUMsQ0FBQyxDQUFDO09BQ0YsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQTFCRCxBQTBCQyxDQTFCaUMsaUNBQWUsR0EwQmhEO0FBMUJZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUREQUZpbHRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHlwZXMvSUR5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgeyBnZXRQZXJjZW50aWxlS2V5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy90eXBlcy9Db21tb24nO1xuaW1wb3J0IHsgRERBU3RyYXRlZ3lCYXNlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9EREFTdHJhdGVneUJhc2UnO1xuaW1wb3J0IHsgZGRhU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0ZhY3RvcnlEREEnO1xuQGRkYVN0cmF0ZWd5KDEpXG5leHBvcnQgY2xhc3MgRERBU3RyYXRlZ3k0IGV4dGVuZHMgRERBU3RyYXRlZ3lCYXNlIHtcbiAgbmFtZSA9IFwiRERBNFwiO1xuICBkZXNjID0gXCLkuYvliY3ov57nu6145YWzPj1556eS6YCa5YWz77yM5YiZ5pys5YWz5Y+q5LuO6YCa5YWz5pe26ZW/5aSE5LqO5pyA5L2OeuWIhuS9jeeahOWFs+WNoemHjOaMkeOAglwiO1xuICBmaWx0ZXIodCkge1xuICAgIGlmICh0LmxldmVscy5sZW5ndGggPD0gMCkgcmV0dXJuIFtFRERBRmlsdGVyLk5PTkUsIG51bGxdO1xuICAgIHZhciBlID0gdGhpcy5nZXRTdHJhdGVneVBhcmFtKCksXG4gICAgICByID0gZS54LFxuICAgICAgbyA9IHZvaWQgMCA9PT0gciA/IDMgOiByLFxuICAgICAgbiA9IGUueSxcbiAgICAgIGkgPSB2b2lkIDAgPT09IG4gPyA2MCA6IG4sXG4gICAgICBzID0gZS56LFxuICAgICAgdSA9IHZvaWQgMCA9PT0gcyA/IDEwIDogcyxcbiAgICAgIHAgPSB0LmV4dHJhY3RNb2RlbC5nZXRMYXN0TGV2ZWxSZWNvcmQobyk7XG4gICAgaWYgKHAubGVuZ3RoIDwgbykgcmV0dXJuIFtFRERBRmlsdGVyLk5PTkUsIG51bGxdO1xuICAgIGZvciAodmFyIGYgPSAwOyBmIDwgcC5sZW5ndGg7IGYrKykge1xuICAgICAgaWYgKHBbZl0ucGFzc1RpbWUgPCBpKSByZXR1cm4gW0VEREFGaWx0ZXIuTk9ORSwgbnVsbF07XG4gICAgfVxuICAgIHZhciBsID0gZ2V0UGVyY2VudGlsZUtleShcInByZWRpY3RUaW1lXCIpLFxuICAgICAgeSA9IHUgLyAxMDAsXG4gICAgICBkID0gdC5sZXZlbHMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0W2xdIDw9IHk7XG4gICAgICB9KTtcbiAgICBpZiAoZC5sZW5ndGggPD0gMCkgcmV0dXJuIFtFRERBRmlsdGVyLk5PTkUsIG51bGxdO1xuICAgIHZhciBEID0gZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkLmxlbmd0aCldO1xuICAgIHJldHVybiBbRUREQUZpbHRlci5MRVZFTCwgRF07XG4gIH1cbn0iXX0=
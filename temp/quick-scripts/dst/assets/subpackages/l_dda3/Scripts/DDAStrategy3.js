
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dda3/Scripts/DDAStrategy3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6febd9xvKNANpsdWUFo/9I2', 'DDAStrategy3');
// subpackages/l_dda3/Scripts/DDAStrategy3.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy3 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var Common_1 = require("../../../Scripts/types/Common");
var DDAStrategy3 = /** @class */ (function (_super) {
    __extends(DDAStrategy3, _super);
    function DDAStrategy3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA3";
        _this.desc = "每累计出现x次关卡时长<y秒失败，则本关只从时长处于最高{z}分位的关里挑。";
        return _this;
    }
    DDAStrategy3.prototype.filter = function (t) {
        if (t.levels.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var e = this.getStrategyParam(), r = e.x, o = void 0 === r ? 3 : r, n = e.y, i = void 0 === n ? 240 : n, c = e.z, s = void 0 === c ? 10 : c, p = t.extractModel, f = Common_1.getCustomDataKey(this.name, [o, i, s]);
        if (p.getCachedData(f, 0) < o)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var y = Common_1.getPercentileKey("predictTime"), l = 1 - s / 100, d = t.levels.filter(function (t) {
            return t[y] >= l;
        });
        if (d.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var D = d[Math.floor(Math.random() * d.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, D];
    };
    DDAStrategy3 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy3);
    return DDAStrategy3;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy3 = DDAStrategy3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RkYTMvU2NyaXB0cy9EREFTdHJhdGVneTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBa0U7QUFDbEUsb0VBQW1FO0FBQ25FLDBEQUEwRDtBQUMxRCx3REFBbUY7QUFFbkY7SUFBa0MsZ0NBQWU7SUFBakQ7UUFBQSxxRUF3QkM7UUF2QkMsVUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFVBQUksR0FBRyx3Q0FBd0MsQ0FBQzs7SUFzQmxELENBQUM7SUFyQkMsNkJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsMEJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDUCxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1AsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUNsQixDQUFDLEdBQUcseUJBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsMEJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEdBQUcseUJBQWdCLENBQUMsYUFBYSxDQUFDLEVBQ3JDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLDBCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsMEJBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXZCVSxZQUFZO1FBRHhCLHdCQUFXLENBQUMsQ0FBQyxDQUFDO09BQ0YsWUFBWSxDQXdCeEI7SUFBRCxtQkFBQztDQXhCRCxBQXdCQyxDQXhCaUMsaUNBQWUsR0F3QmhEO0FBeEJZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUREQUZpbHRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHlwZXMvSUR5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgeyBEREFTdHJhdGVneUJhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0REQVN0cmF0ZWd5QmFzZSc7XG5pbXBvcnQgeyBkZGFTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRmFjdG9yeUREQSc7XG5pbXBvcnQgeyBnZXRDdXN0b21EYXRhS2V5LCBnZXRQZXJjZW50aWxlS2V5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy90eXBlcy9Db21tb24nO1xuQGRkYVN0cmF0ZWd5KDEpXG5leHBvcnQgY2xhc3MgRERBU3RyYXRlZ3kzIGV4dGVuZHMgRERBU3RyYXRlZ3lCYXNlIHtcbiAgbmFtZSA9IFwiRERBM1wiO1xuICBkZXNjID0gXCLmr4/ntK/orqHlh7rnjrB45qyh5YWz5Y2h5pe26ZW/PHnnp5LlpLHotKXvvIzliJnmnKzlhbPlj6rku47ml7bplb/lpITkuo7mnIDpq5h7en3liIbkvY3nmoTlhbPph4zmjJHjgIJcIjtcbiAgZmlsdGVyKHQpIHtcbiAgICBpZiAodC5sZXZlbHMubGVuZ3RoIDw9IDApIHJldHVybiBbRUREQUZpbHRlci5OT05FLCBudWxsXTtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0U3RyYXRlZ3lQYXJhbSgpLFxuICAgICAgciA9IGUueCxcbiAgICAgIG8gPSB2b2lkIDAgPT09IHIgPyAzIDogcixcbiAgICAgIG4gPSBlLnksXG4gICAgICBpID0gdm9pZCAwID09PSBuID8gMjQwIDogbixcbiAgICAgIGMgPSBlLnosXG4gICAgICBzID0gdm9pZCAwID09PSBjID8gMTAgOiBjLFxuICAgICAgcCA9IHQuZXh0cmFjdE1vZGVsLFxuICAgICAgZiA9IGdldEN1c3RvbURhdGFLZXkodGhpcy5uYW1lLCBbbywgaSwgc10pO1xuICAgIGlmIChwLmdldENhY2hlZERhdGEoZiwgMCkgPCBvKSByZXR1cm4gW0VEREFGaWx0ZXIuTk9ORSwgbnVsbF07XG4gICAgdmFyIHkgPSBnZXRQZXJjZW50aWxlS2V5KFwicHJlZGljdFRpbWVcIiksXG4gICAgICBsID0gMSAtIHMgLyAxMDAsXG4gICAgICBkID0gdC5sZXZlbHMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0W3ldID49IGw7XG4gICAgICB9KTtcbiAgICBpZiAoZC5sZW5ndGggPD0gMCkgcmV0dXJuIFtFRERBRmlsdGVyLk5PTkUsIG51bGxdO1xuICAgIHZhciBEID0gZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkLmxlbmd0aCldO1xuICAgIHJldHVybiBbRUREQUZpbHRlci5MRVZFTCwgRF07XG4gIH1cbn0iXX0=
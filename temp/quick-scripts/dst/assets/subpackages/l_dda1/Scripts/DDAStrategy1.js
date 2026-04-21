
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dda1/Scripts/DDAStrategy1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e987dPRL65K54vBX21Zu67Q', 'DDAStrategy1');
// subpackages/l_dda1/Scripts/DDAStrategy1.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy1 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var DDAStrategy1 = /** @class */ (function (_super) {
    __extends(DDAStrategy1, _super);
    function DDAStrategy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA1";
        _this.desc = "上关连续死了>=x次，则本关默认选通关率=1的关。";
        return _this;
    }
    DDAStrategy1.prototype.filter = function (t) {
        var e = this.getStrategyParam().x, r = void 0 === e ? 3 : e, o = t.extractModel.getLastLevelRecord();
        if (o.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        if (o[0].replay < r)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var n = t.levels.filter(function (t) {
            return 1 === t.rateSuccess;
        });
        if (n.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var i = n[Math.floor(Math.random() * n.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, i];
    };
    DDAStrategy1 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy1);
    return DDAStrategy1;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy1 = DDAStrategy1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RkYTEvU2NyaXB0cy9EREFTdHJhdGVneTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBa0U7QUFDbEUsMERBQTBEO0FBQzFELG9FQUFtRTtBQUVuRTtJQUFrQyxnQ0FBZTtJQUFqRDtRQUFBLHFFQWdCQztRQWZDLFVBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBY3JDLENBQUM7SUFiQyw2QkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFDL0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsMEJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsMEJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQywwQkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLDBCQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFmVSxZQUFZO1FBRHhCLHdCQUFXLENBQUMsQ0FBQyxDQUFDO09BQ0YsWUFBWSxDQWdCeEI7SUFBRCxtQkFBQztDQWhCRCxBQWdCQyxDQWhCaUMsaUNBQWUsR0FnQmhEO0FBaEJZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUREQUZpbHRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHlwZXMvSUR5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgeyBkZGFTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRmFjdG9yeUREQSc7XG5pbXBvcnQgeyBEREFTdHJhdGVneUJhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0REQVN0cmF0ZWd5QmFzZSc7XG5AZGRhU3RyYXRlZ3koMSlcbmV4cG9ydCBjbGFzcyBEREFTdHJhdGVneTEgZXh0ZW5kcyBEREFTdHJhdGVneUJhc2Uge1xuICBuYW1lID0gXCJEREExXCI7XG4gIGRlc2MgPSBcIuS4iuWFs+i/nue7reatu+S6hj49eOasoe+8jOWImeacrOWFs+m7mOiupOmAiemAmuWFs+eOhz0x55qE5YWz44CCXCI7XG4gIGZpbHRlcih0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFN0cmF0ZWd5UGFyYW0oKS54LFxuICAgICAgciA9IHZvaWQgMCA9PT0gZSA/IDMgOiBlLFxuICAgICAgbyA9IHQuZXh0cmFjdE1vZGVsLmdldExhc3RMZXZlbFJlY29yZCgpO1xuICAgIGlmIChvLmxlbmd0aCA8PSAwKSByZXR1cm4gW0VEREFGaWx0ZXIuTk9ORSwgbnVsbF07XG4gICAgaWYgKG9bMF0ucmVwbGF5IDwgcikgcmV0dXJuIFtFRERBRmlsdGVyLk5PTkUsIG51bGxdO1xuICAgIHZhciBuID0gdC5sZXZlbHMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gMSA9PT0gdC5yYXRlU3VjY2VzcztcbiAgICB9KTtcbiAgICBpZiAobi5sZW5ndGggPD0gMCkgcmV0dXJuIFtFRERBRmlsdGVyLk5PTkUsIG51bGxdO1xuICAgIHZhciBpID0gbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuLmxlbmd0aCldO1xuICAgIHJldHVybiBbRUREQUZpbHRlci5MRVZFTCwgaV07XG4gIH1cbn0iXX0=
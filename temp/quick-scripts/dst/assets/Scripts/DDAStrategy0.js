
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DDAStrategy0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ad09t5/gBAUY8WILrQXwlK', 'DDAStrategy0');
// Scripts/DDAStrategy0.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy0 = void 0;
var IDynamicCurve_1 = require("./types/IDynamicCurve");
var FactoryDDA_1 = require("./FactoryDDA");
var DDAStrategyBase_1 = require("./DDAStrategyBase");
var DDAStrategy0 = /** @class */ (function (_super) {
    __extends(DDAStrategy0, _super);
    function DDAStrategy0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA0";
        _this.desc = "最近x关不重复";
        return _this;
    }
    DDAStrategy0.prototype.filter = function (e) {
        var t = this.getStrategyParam().x, o = void 0 === t ? 100 : t, n = e.extractModel.getLastLevelRecord(o).map(function (e) {
            return e.levelData.index;
        });
        if (n.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        e.levels = e.levels.filter(function (e) {
            return !n.includes(e.index);
        });
        return [IDynamicCurve_1.EDDAFilter.FILTER, null];
    };
    DDAStrategy0 = __decorate([
        FactoryDDA_1.ddaStrategy(999999)
    ], DDAStrategy0);
    return DDAStrategy0;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy0 = DDAStrategy0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0REQVN0cmF0ZWd5MC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFtRDtBQUNuRCwyQ0FBMkM7QUFDM0MscURBQW9EO0FBRXBEO0lBQWtDLGdDQUFlO0lBQWpEO1FBQUEscUVBZUM7UUFkQyxVQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsVUFBSSxHQUFHLFNBQVMsQ0FBQzs7SUFhbkIsQ0FBQztJQVpDLDZCQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUMvQixDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUN0RCxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsMEJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLDBCQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFkVSxZQUFZO1FBRHhCLHdCQUFXLENBQUMsTUFBTSxDQUFDO09BQ1AsWUFBWSxDQWV4QjtJQUFELG1CQUFDO0NBZkQsQUFlQyxDQWZpQyxpQ0FBZSxHQWVoRDtBQWZZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUREQUZpbHRlciB9IGZyb20gJy4vdHlwZXMvSUR5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgeyBkZGFTdHJhdGVneSB9IGZyb20gJy4vRmFjdG9yeUREQSc7XG5pbXBvcnQgeyBEREFTdHJhdGVneUJhc2UgfSBmcm9tICcuL0REQVN0cmF0ZWd5QmFzZSc7XG5AZGRhU3RyYXRlZ3koOTk5OTk5KVxuZXhwb3J0IGNsYXNzIEREQVN0cmF0ZWd5MCBleHRlbmRzIEREQVN0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIkREQTBcIjtcbiAgZGVzYyA9IFwi5pyA6L+ReOWFs+S4jemHjeWkjVwiO1xuICBmaWx0ZXIoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRTdHJhdGVneVBhcmFtKCkueCxcbiAgICAgIG8gPSB2b2lkIDAgPT09IHQgPyAxMDAgOiB0LFxuICAgICAgbiA9IGUuZXh0cmFjdE1vZGVsLmdldExhc3RMZXZlbFJlY29yZChvKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubGV2ZWxEYXRhLmluZGV4O1xuICAgICAgfSk7XG4gICAgaWYgKG4ubGVuZ3RoIDw9IDApIHJldHVybiBbRUREQUZpbHRlci5OT05FLCBudWxsXTtcbiAgICBlLmxldmVscyA9IGUubGV2ZWxzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuICFuLmluY2x1ZGVzKGUuaW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBbRUREQUZpbHRlci5GSUxURVIsIG51bGxdO1xuICB9XG59Il19
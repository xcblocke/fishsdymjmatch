
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mapping/Scripts/MappingStrategy4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08de0Vl5khHgrSkpLA+L41F', 'MappingStrategy4');
// subpackages/l_mapping/Scripts/MappingStrategy4.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy4 = void 0;
var Common_1 = require("../../../Scripts/types/Common");
var FactoryMapping_1 = require("../../../Scripts/FactoryMapping");
var MappingStrategyBase_1 = require("../../../Scripts/MappingStrategyBase");
var MappingStrategy4 = /** @class */ (function (_super) {
    __extends(MappingStrategy4, _super);
    function MappingStrategy4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping4";
        _this.desc = "无视能力值随机策略";
        return _this;
    }
    MappingStrategy4.prototype.mapping = function (t) {
        var e, r, n = t.levels;
        if (!n || 0 === n.length)
            return null;
        var o = t.extractModel.getLastLevelRecord();
        if (o.length <= 0)
            return null;
        for (var i = o[0], p = this.getStrategyParam(), c = p.x, s = void 0 === c ? 0.25 : c, u = p.y, l = void 0 === u ? 0.25 : u, y = null !== (e = i.levelData[Common_1.LevelValueKey]) && void 0 !== e ? e : 0, g = y - s, f = y + l, v = [], d = 0; d < n.length; d++) {
            var h = null !== (r = n[d][Common_1.LevelValueKey]) && void 0 !== r ? r : 0;
            (h < g && h >= 0 || h > f && h <= 1) && v.push(n[d]);
        }
        return 0 === v.length ? null : v[Math.floor(Math.random() * v.length)];
    };
    MappingStrategy4 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping4")
    ], MappingStrategy4);
    return MappingStrategy4;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy4 = MappingStrategy4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hcHBpbmcvU2NyaXB0cy9NYXBwaW5nU3RyYXRlZ3k0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQThEO0FBQzlELGtFQUFrRTtBQUNsRSw0RUFBMkU7QUFFM0U7SUFBc0Msb0NBQW1CO0lBQXpEO1FBQUEscUVBZ0JDO1FBZkMsVUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNsQixVQUFJLEdBQUcsV0FBVyxDQUFDOztJQWNyQixDQUFDO0lBYkMsa0NBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsc0JBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDelAsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBYSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBZlUsZ0JBQWdCO1FBRDVCLGdDQUFlLENBQUMsVUFBVSxDQUFDO09BQ2YsZ0JBQWdCLENBZ0I1QjtJQUFELHVCQUFDO0NBaEJELEFBZ0JDLENBaEJxQyx5Q0FBbUIsR0FnQnhEO0FBaEJZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExldmVsVmFsdWVLZXkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3R5cGVzL0NvbW1vbic7XG5pbXBvcnQgeyBtYXBwaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0ZhY3RvcnlNYXBwaW5nJztcbmltcG9ydCB7IE1hcHBpbmdTdHJhdGVneUJhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL01hcHBpbmdTdHJhdGVneUJhc2UnO1xuQG1hcHBpbmdTdHJhdGVneShcIk1hcHBpbmc0XCIpXG5leHBvcnQgY2xhc3MgTWFwcGluZ1N0cmF0ZWd5NCBleHRlbmRzIE1hcHBpbmdTdHJhdGVneUJhc2Uge1xuICBuYW1lID0gXCJNYXBwaW5nNFwiO1xuICBkZXNjID0gXCLml6Dop4bog73lipvlgLzpmo/mnLrnrZbnlaVcIjtcbiAgbWFwcGluZyh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgbiA9IHQubGV2ZWxzO1xuICAgIGlmICghbiB8fCAwID09PSBuLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG8gPSB0LmV4dHJhY3RNb2RlbC5nZXRMYXN0TGV2ZWxSZWNvcmQoKTtcbiAgICBpZiAoby5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgZm9yICh2YXIgaSA9IG9bMF0sIHAgPSB0aGlzLmdldFN0cmF0ZWd5UGFyYW0oKSwgYyA9IHAueCwgcyA9IHZvaWQgMCA9PT0gYyA/IDAuMjUgOiBjLCB1ID0gcC55LCBsID0gdm9pZCAwID09PSB1ID8gMC4yNSA6IHUsIHkgPSBudWxsICE9PSAoZSA9IGkubGV2ZWxEYXRhW0xldmVsVmFsdWVLZXldKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMCwgZyA9IHkgLSBzLCBmID0geSArIGwsIHYgPSBbXSwgZCA9IDA7IGQgPCBuLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaCA9IG51bGwgIT09IChyID0gbltkXVtMZXZlbFZhbHVlS2V5XSkgJiYgdm9pZCAwICE9PSByID8gciA6IDA7XG4gICAgICAoaCA8IGcgJiYgaCA+PSAwIHx8IGggPiBmICYmIGggPD0gMSkgJiYgdi5wdXNoKG5bZF0pO1xuICAgIH1cbiAgICByZXR1cm4gMCA9PT0gdi5sZW5ndGggPyBudWxsIDogdltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2Lmxlbmd0aCldO1xuICB9XG59Il19
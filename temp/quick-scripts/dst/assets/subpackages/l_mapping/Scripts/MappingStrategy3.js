
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mapping/Scripts/MappingStrategy3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81a0dAQzLtMxqldV2IX2ibR', 'MappingStrategy3');
// subpackages/l_mapping/Scripts/MappingStrategy3.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy3 = void 0;
var Common_1 = require("../../../Scripts/types/Common");
var FactoryMapping_1 = require("../../../Scripts/FactoryMapping");
var MappingStrategyBase_1 = require("../../../Scripts/MappingStrategyBase");
var MappingStrategy3 = /** @class */ (function (_super) {
    __extends(MappingStrategy3, _super);
    function MappingStrategy3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping3";
        _this.desc = "受限随机策略";
        return _this;
    }
    MappingStrategy3.prototype.mapping = function (t) {
        var e, r = t.levels, n = t.capability;
        if (!r || 0 === r.length)
            return null;
        for (var o = this.getStrategyParam(), i = o.x, p = void 0 === i ? 0.1 : i, c = o.y, s = void 0 === c ? 0.1 : c, u = Math.max(0, n - p), l = Math.min(1, n + s), y = [], g = 0; g < r.length; g++) {
            var f = null !== (e = r[g][Common_1.LevelValueKey]) && void 0 !== e ? e : 0;
            f >= u && f <= l && y.push(r[g]);
        }
        return 0 === y.length ? null : y[Math.floor(Math.random() * y.length)];
    };
    MappingStrategy3 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping3")
    ], MappingStrategy3);
    return MappingStrategy3;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy3 = MappingStrategy3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hcHBpbmcvU2NyaXB0cy9NYXBwaW5nU3RyYXRlZ3kzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQThEO0FBQzlELGtFQUFrRTtBQUNsRSw0RUFBMkU7QUFFM0U7SUFBc0Msb0NBQW1CO0lBQXpEO1FBQUEscUVBY0M7UUFiQyxVQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2xCLFVBQUksR0FBRyxRQUFRLENBQUM7O0lBWWxCLENBQUM7SUFYQyxrQ0FBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNaLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ25CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hNLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFiVSxnQkFBZ0I7UUFENUIsZ0NBQWUsQ0FBQyxVQUFVLENBQUM7T0FDZixnQkFBZ0IsQ0FjNUI7SUFBRCx1QkFBQztDQWRELEFBY0MsQ0FkcUMseUNBQW1CLEdBY3hEO0FBZFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGV2ZWxWYWx1ZUtleSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHlwZXMvQ29tbW9uJztcbmltcG9ydCB7IG1hcHBpbmdTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRmFjdG9yeU1hcHBpbmcnO1xuaW1wb3J0IHsgTWFwcGluZ1N0cmF0ZWd5QmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvTWFwcGluZ1N0cmF0ZWd5QmFzZSc7XG5AbWFwcGluZ1N0cmF0ZWd5KFwiTWFwcGluZzNcIilcbmV4cG9ydCBjbGFzcyBNYXBwaW5nU3RyYXRlZ3kzIGV4dGVuZHMgTWFwcGluZ1N0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIk1hcHBpbmczXCI7XG4gIGRlc2MgPSBcIuWPl+mZkOmaj+acuuetlueVpVwiO1xuICBtYXBwaW5nKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIgPSB0LmxldmVscyxcbiAgICAgIG4gPSB0LmNhcGFiaWxpdHk7XG4gICAgaWYgKCFyIHx8IDAgPT09IHIubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICBmb3IgKHZhciBvID0gdGhpcy5nZXRTdHJhdGVneVBhcmFtKCksIGkgPSBvLngsIHAgPSB2b2lkIDAgPT09IGkgPyAwLjEgOiBpLCBjID0gby55LCBzID0gdm9pZCAwID09PSBjID8gMC4xIDogYywgdSA9IE1hdGgubWF4KDAsIG4gLSBwKSwgbCA9IE1hdGgubWluKDEsIG4gKyBzKSwgeSA9IFtdLCBnID0gMDsgZyA8IHIubGVuZ3RoOyBnKyspIHtcbiAgICAgIHZhciBmID0gbnVsbCAhPT0gKGUgPSByW2ddW0xldmVsVmFsdWVLZXldKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMDtcbiAgICAgIGYgPj0gdSAmJiBmIDw9IGwgJiYgeS5wdXNoKHJbZ10pO1xuICAgIH1cbiAgICByZXR1cm4gMCA9PT0geS5sZW5ndGggPyBudWxsIDogeVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB5Lmxlbmd0aCldO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MappingStrategy1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85a22KHVqhN0LQ73msAn0Fa', 'MappingStrategy1');
// Scripts/MappingStrategy1.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy1 = void 0;
var Common_1 = require("./types/Common");
var FactoryMapping_1 = require("./FactoryMapping");
var MappingStrategyBase_1 = require("./MappingStrategyBase");
var MappingStrategy1 = /** @class */ (function (_super) {
    __extends(MappingStrategy1, _super);
    function MappingStrategy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping1";
        _this.desc = "高精确度匹配策略";
        return _this;
    }
    MappingStrategy1.prototype.mapping = function (e) {
        var t, o, n = e.levels, i = e.capability;
        if (!n || 0 === n.length)
            return null;
        for (var r = n[0], l = Math.abs((null !== (t = n[0][Common_1.LevelValueKey]) && void 0 !== t ? t : 0) - i), s = 1; s < n.length; s++) {
            var c = null !== (o = n[s][Common_1.LevelValueKey]) && void 0 !== o ? o : 0, u = Math.abs(c - i);
            if (u < l) {
                l = u;
                r = n[s];
            }
        }
        return r;
    };
    MappingStrategy1 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping1")
    ], MappingStrategy1);
    return MappingStrategy1;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy1 = MappingStrategy1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01hcHBpbmdTdHJhdGVneTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBK0M7QUFDL0MsbURBQW1EO0FBQ25ELDZEQUE0RDtBQUU1RDtJQUFzQyxvQ0FBbUI7SUFBekQ7UUFBQSxxRUFtQkM7UUFsQkMsVUFBSSxHQUFHLFVBQVUsQ0FBQztRQUNsQixVQUFJLEdBQUcsVUFBVSxDQUFDOztJQWlCcEIsQ0FBQztJQWhCQyxrQ0FBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBYSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzSCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFhLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWxCVSxnQkFBZ0I7UUFENUIsZ0NBQWUsQ0FBQyxVQUFVLENBQUM7T0FDZixnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLHlDQUFtQixHQW1CeEQ7QUFuQlksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGV2ZWxWYWx1ZUtleSB9IGZyb20gJy4vdHlwZXMvQ29tbW9uJztcbmltcG9ydCB7IG1hcHBpbmdTdHJhdGVneSB9IGZyb20gJy4vRmFjdG9yeU1hcHBpbmcnO1xuaW1wb3J0IHsgTWFwcGluZ1N0cmF0ZWd5QmFzZSB9IGZyb20gJy4vTWFwcGluZ1N0cmF0ZWd5QmFzZSc7XG5AbWFwcGluZ1N0cmF0ZWd5KFwiTWFwcGluZzFcIilcbmV4cG9ydCBjbGFzcyBNYXBwaW5nU3RyYXRlZ3kxIGV4dGVuZHMgTWFwcGluZ1N0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIk1hcHBpbmcxXCI7XG4gIGRlc2MgPSBcIumrmOeyvuehruW6puWMuemFjeetlueVpVwiO1xuICBtYXBwaW5nKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gZS5sZXZlbHMsXG4gICAgICBpID0gZS5jYXBhYmlsaXR5O1xuICAgIGlmICghbiB8fCAwID09PSBuLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgZm9yICh2YXIgciA9IG5bMF0sIGwgPSBNYXRoLmFicygobnVsbCAhPT0gKHQgPSBuWzBdW0xldmVsVmFsdWVLZXldKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMCkgLSBpKSwgcyA9IDE7IHMgPCBuLmxlbmd0aDsgcysrKSB7XG4gICAgICB2YXIgYyA9IG51bGwgIT09IChvID0gbltzXVtMZXZlbFZhbHVlS2V5XSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDAsXG4gICAgICAgIHUgPSBNYXRoLmFicyhjIC0gaSk7XG4gICAgICBpZiAodSA8IGwpIHtcbiAgICAgICAgbCA9IHU7XG4gICAgICAgIHIgPSBuW3NdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxufSJdfQ==
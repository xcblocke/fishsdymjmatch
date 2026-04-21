
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mapping/Scripts/MappingStrategy2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abd41XmVp1E8oXdZjRfIbF8', 'MappingStrategy2');
// subpackages/l_mapping/Scripts/MappingStrategy2.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy2 = void 0;
var Common_1 = require("../../../Scripts/types/Common");
var FactoryMapping_1 = require("../../../Scripts/FactoryMapping");
var MappingStrategyBase_1 = require("../../../Scripts/MappingStrategyBase");
var MappingStrategy2 = /** @class */ (function (_super) {
    __extends(MappingStrategy2, _super);
    function MappingStrategy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping2";
        _this.desc = "高精确度反向匹配策略";
        return _this;
    }
    MappingStrategy2.prototype.mapping = function (t) {
        var e, r, n = t.levels, o = t.capability;
        if (!n || 0 === n.length)
            return null;
        for (var i = n[0], p = Math.abs((null !== (e = n[0][Common_1.LevelValueKey]) && void 0 !== e ? e : 0) + o - 1), c = 1; c < n.length; c++) {
            var s = null !== (r = n[c][Common_1.LevelValueKey]) && void 0 !== r ? r : 0, u = Math.abs(s + o - 1);
            if (u < p) {
                p = u;
                i = n[c];
            }
        }
        return i;
    };
    MappingStrategy2 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping2")
    ], MappingStrategy2);
    return MappingStrategy2;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy2 = MappingStrategy2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hcHBpbmcvU2NyaXB0cy9NYXBwaW5nU3RyYXRlZ3kyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQThEO0FBQzlELGtFQUFrRTtBQUNsRSw0RUFBMkU7QUFFM0U7SUFBc0Msb0NBQW1CO0lBQXpEO1FBQUEscUVBbUJDO1FBbEJDLFVBQUksR0FBRyxVQUFVLENBQUM7UUFDbEIsVUFBSSxHQUFHLFlBQVksQ0FBQzs7SUFpQnRCLENBQUM7SUFoQkMsa0NBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFBRSxPQUFPLElBQUksQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ILElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQWEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWxCVSxnQkFBZ0I7UUFENUIsZ0NBQWUsQ0FBQyxVQUFVLENBQUM7T0FDZixnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLHlDQUFtQixHQW1CeEQ7QUFuQlksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGV2ZWxWYWx1ZUtleSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHlwZXMvQ29tbW9uJztcbmltcG9ydCB7IG1hcHBpbmdTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRmFjdG9yeU1hcHBpbmcnO1xuaW1wb3J0IHsgTWFwcGluZ1N0cmF0ZWd5QmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvTWFwcGluZ1N0cmF0ZWd5QmFzZSc7XG5AbWFwcGluZ1N0cmF0ZWd5KFwiTWFwcGluZzJcIilcbmV4cG9ydCBjbGFzcyBNYXBwaW5nU3RyYXRlZ3kyIGV4dGVuZHMgTWFwcGluZ1N0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIk1hcHBpbmcyXCI7XG4gIGRlc2MgPSBcIumrmOeyvuehruW6puWPjeWQkeWMuemFjeetlueVpVwiO1xuICBtYXBwaW5nKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBuID0gdC5sZXZlbHMsXG4gICAgICBvID0gdC5jYXBhYmlsaXR5O1xuICAgIGlmICghbiB8fCAwID09PSBuLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgZm9yICh2YXIgaSA9IG5bMF0sIHAgPSBNYXRoLmFicygobnVsbCAhPT0gKGUgPSBuWzBdW0xldmVsVmFsdWVLZXldKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMCkgKyBvIC0gMSksIGMgPSAxOyBjIDwgbi5sZW5ndGg7IGMrKykge1xuICAgICAgdmFyIHMgPSBudWxsICE9PSAociA9IG5bY11bTGV2ZWxWYWx1ZUtleV0pICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwLFxuICAgICAgICB1ID0gTWF0aC5hYnMocyArIG8gLSAxKTtcbiAgICAgIGlmICh1IDwgcCkge1xuICAgICAgICBwID0gdTtcbiAgICAgICAgaSA9IG5bY107XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG59Il19
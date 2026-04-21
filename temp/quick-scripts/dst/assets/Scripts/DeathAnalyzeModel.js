
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DeathAnalyzeModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bada3xQAlpMupT92VFi3G/c', 'DeathAnalyzeModel');
// Scripts/DeathAnalyzeModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./framework/data/Model");
var DeathAnalyzeModel = /** @class */ (function (_super) {
    __extends(DeathAnalyzeModel, _super);
    function DeathAnalyzeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeathAnalyzeModel.prototype.saveDeath = function (e, t, o) {
        this.localData[e] = [t, o.map(function (e) {
                return e.tiles;
            })];
    };
    DeathAnalyzeModel.prototype.getDeath = function (e, t) {
        try {
            var o = this.localData[e];
            return null != o && void 0 !== o && "" !== o && Array.isArray(o) ? 2 !== o.length ? null : o[0] !== t ? null : {
                levelOriginalData: o[0],
                badMahjongGroups: o[1].map(function (e) {
                    e.forEach(function (e) {
                        e.id = e.gridPosX + "-" + e.gridPosY + "-" + e.layer;
                    });
                    return {
                        key: e.map(function (e) {
                            return e.id;
                        }).sort().join(","),
                        colors: new Set(e.map(function (e) {
                            return e.cardId;
                        })),
                        tileIds: new Set(e.map(function (e) {
                            return e.id;
                        })),
                        tiles: e
                    };
                })
            } : null;
        }
        catch (e) {
            return null;
        }
    };
    DeathAnalyzeModel = __decorate([
        mj.class("DeathAnalyzeModel")
    ], DeathAnalyzeModel);
    return DeathAnalyzeModel;
}(Model_1.default));
exports.default = DeathAnalyzeModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RlYXRoQW5hbHl6ZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFFM0M7SUFBK0MscUNBQUs7SUFBcEQ7O0lBaUNBLENBQUM7SUFoQ0MscUNBQVMsR0FBVCxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELG9DQUFRLEdBQVIsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUNYLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztvQkFDcEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBQ25CLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdkQsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsT0FBTzt3QkFDTCxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7NEJBQ3BCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDZCxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNuQixNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7NEJBQy9CLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsT0FBTyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDOzRCQUNoQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ2QsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsS0FBSyxFQUFFLENBQUM7cUJBQ1QsQ0FBQztnQkFDSixDQUFDLENBQUM7YUFDSCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDVjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFoQ2tCLGlCQUFpQjtRQURyQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBaUNyQztJQUFELHdCQUFDO0NBakNELEFBaUNDLENBakM4QyxlQUFLLEdBaUNuRDtrQkFqQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuL2ZyYW1ld29yay9kYXRhL01vZGVsJztcbkBtai5jbGFzcyhcIkRlYXRoQW5hbHl6ZU1vZGVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWF0aEFuYWx5emVNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgc2F2ZURlYXRoKGUsIHQsIG8pIHtcbiAgICB0aGlzLmxvY2FsRGF0YVtlXSA9IFt0LCBvLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUudGlsZXM7XG4gICAgfSldO1xuICB9XG4gIGdldERlYXRoKGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG8gPSB0aGlzLmxvY2FsRGF0YVtlXTtcbiAgICAgIHJldHVybiBudWxsICE9IG8gJiYgdm9pZCAwICE9PSBvICYmIFwiXCIgIT09IG8gJiYgQXJyYXkuaXNBcnJheShvKSA/IDIgIT09IG8ubGVuZ3RoID8gbnVsbCA6IG9bMF0gIT09IHQgPyBudWxsIDoge1xuICAgICAgICBsZXZlbE9yaWdpbmFsRGF0YTogb1swXSxcbiAgICAgICAgYmFkTWFoam9uZ0dyb3Vwczogb1sxXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuaWQgPSBlLmdyaWRQb3NYICsgXCItXCIgKyBlLmdyaWRQb3NZICsgXCItXCIgKyBlLmxheWVyO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgICAgICAgfSkuc29ydCgpLmpvaW4oXCIsXCIpLFxuICAgICAgICAgICAgY29sb3JzOiBuZXcgU2V0KGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLmNhcmRJZDtcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRpbGVJZHM6IG5ldyBTZXQoZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0aWxlczogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICB9IDogbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn0iXX0=
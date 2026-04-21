
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_unifyLibFormat/Scripts/UnifyBaseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9007fRf5YxMzr9RXLBXOfZP', 'UnifyBaseTrait');
// subpackages/l_unifyLibFormat/Scripts/UnifyBaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var UnifyBaseTrait = /** @class */ (function (_super) {
    __extends(UnifyBaseTrait, _super);
    function UnifyBaseTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelCaches = new Map();
        return _this;
    }
    UnifyBaseTrait.prototype.setLevelCaches = function (t, e) {
        this.levelCaches.set(t, e);
    };
    UnifyBaseTrait.prototype.getLevelCaches = function (t) {
        return this.levelCaches.get(t) || null;
    };
    UnifyBaseTrait.prototype.cacheCurLvData = function (t, e, r) {
        var n = "" + t;
        this.localData[n] = Object.assign(Object.assign({}, r), {
            levelId: e
        });
    };
    UnifyBaseTrait.prototype.getCurLvData = function (t, e) {
        var r = "" + t, n = this.localData[r];
        return null == n || "" === n ? null : (null == n ? void 0 : n.levelId) !== e ? null : n;
    };
    UnifyBaseTrait.prototype.getLevelByLibIndex = function (t, e) {
        var r = this.getLevelCaches(t);
        return null === r ? null : r.find(function (t) {
            return t.index === e;
        }) || null;
    };
    UnifyBaseTrait.prototype.getLevelByArrayIndex = function (t, e) {
        var r = this.getLevelCaches(t);
        return null === r ? null : e < 0 || e >= r.length ? null : r[e];
    };
    UnifyBaseTrait.prototype.onExtractTool_getSolvers = function (t, e) {
        if (this.checkGameMode()) {
            var r = __read(t.args, 2), n = r[0], i = r[1], a = this.getCurLvData(n, i);
            if (null !== a) {
                e({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: null == a ? void 0 : a.solver
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    UnifyBaseTrait.traitKey = "UnifyBase";
    return UnifyBaseTrait;
}(ExtractTrait_1.default));
exports.default = UnifyBaseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VuaWZ5TGliRm9ybWF0L1NjcmlwdHMvVW5pZnlCYXNlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStDQztRQTlDQyxpQkFBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBOEMxQixDQUFDO0lBNUNDLHVDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELHVDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUNELHVDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN0RCxPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNaLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCwyQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0MsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0QsNkNBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxpREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNkLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtpQkFDekMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTVDTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQTZDaEMscUJBQUM7Q0EvQ0QsQUErQ0MsQ0EvQzJDLHNCQUFZLEdBK0N2RDtrQkEvQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZ5QmFzZVRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgbGV2ZWxDYWNoZXMgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVW5pZnlCYXNlXCI7XG4gIHNldExldmVsQ2FjaGVzKHQsIGUpIHtcbiAgICB0aGlzLmxldmVsQ2FjaGVzLnNldCh0LCBlKTtcbiAgfVxuICBnZXRMZXZlbENhY2hlcyh0KSB7XG4gICAgcmV0dXJuIHRoaXMubGV2ZWxDYWNoZXMuZ2V0KHQpIHx8IG51bGw7XG4gIH1cbiAgY2FjaGVDdXJMdkRhdGEodCwgZSwgcikge1xuICAgIHZhciBuID0gXCJcIiArIHQ7XG4gICAgdGhpcy5sb2NhbERhdGFbbl0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHIpLCB7XG4gICAgICBsZXZlbElkOiBlXG4gICAgfSk7XG4gIH1cbiAgZ2V0Q3VyTHZEYXRhKHQsIGUpIHtcbiAgICB2YXIgciA9IFwiXCIgKyB0LFxuICAgICAgbiA9IHRoaXMubG9jYWxEYXRhW3JdO1xuICAgIHJldHVybiBudWxsID09IG4gfHwgXCJcIiA9PT0gbiA/IG51bGwgOiAobnVsbCA9PSBuID8gdm9pZCAwIDogbi5sZXZlbElkKSAhPT0gZSA/IG51bGwgOiBuO1xuICB9XG4gIGdldExldmVsQnlMaWJJbmRleCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldExldmVsQ2FjaGVzKHQpO1xuICAgIHJldHVybiBudWxsID09PSByID8gbnVsbCA6IHIuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuaW5kZXggPT09IGU7XG4gICAgfSkgfHwgbnVsbDtcbiAgfVxuICBnZXRMZXZlbEJ5QXJyYXlJbmRleCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldExldmVsQ2FjaGVzKHQpO1xuICAgIHJldHVybiBudWxsID09PSByID8gbnVsbCA6IGUgPCAwIHx8IGUgPj0gci5sZW5ndGggPyBudWxsIDogcltlXTtcbiAgfVxuICBvbkV4dHJhY3RUb29sX2dldFNvbHZlcnModCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBfX3JlYWQodC5hcmdzLCAyKSxcbiAgICAgICAgbiA9IHJbMF0sXG4gICAgICAgIGkgPSByWzFdLFxuICAgICAgICBhID0gdGhpcy5nZXRDdXJMdkRhdGEobiwgaSk7XG4gICAgICBpZiAobnVsbCAhPT0gYSkge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuc29sdmVyXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelCountry/Scripts/TravelCountryTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf06d38K4ZBRKzvOzaEupmi', 'TravelCountryTrait');
// subpackages/l_travelCountry/Scripts/TravelCountryTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var TravelCountryTrait = /** @class */ (function (_super) {
    __extends(TravelCountryTrait, _super);
    function TravelCountryTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TravelCountryTrait.prototype, "orderList", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.orderList) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelCountryTrait.prototype, "filterCountry", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.countries) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelCountryTrait.prototype, "country", {
        get: function () {
            return LoginModel_1.default.getInstance().country || "";
        },
        enumerable: false,
        configurable: true
    });
    TravelCountryTrait.prototype.onJourney_Order = function (t, e) {
        var r = t.ins;
        this.country, this.filterCountry;
        if (this.filterCountry.includes(this.country)) {
            var n = this.orderList;
            if (n.length <= 0)
                e();
            else {
                var o = r.getCachedJourney();
                o.sort(function (t, e) {
                    return n.includes(t) && n.includes(e) ? n.indexOf(t) - n.indexOf(e) : 0;
                });
                r.cacheJourney(o);
                e();
            }
        }
        else
            e();
    };
    TravelCountryTrait.traitKey = "TravelCountry";
    TravelCountryTrait = __decorate([
        mj.trait,
        mj.class("TravelCountryTrait")
    ], TravelCountryTrait);
    return TravelCountryTrait;
}(Trait_1.default));
exports.default = TravelCountryTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbENvdW50cnkvU2NyaXB0cy9UcmF2ZWxDb3VudHJ5VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwrRUFBMEU7QUFHMUU7SUFBZ0Qsc0NBQUs7SUFBckQ7O0lBNEJBLENBQUM7SUExQkMsc0JBQUkseUNBQVM7YUFBYjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEgsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2Q0FBYTthQUFqQjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEgsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0UsT0FBTyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFDRCw0Q0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFBRSxDQUFDLEVBQUUsQ0FBQztpQkFBSztnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBMUJNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQTRCdEM7SUFBRCx5QkFBQztDQTVCRCxBQTRCQyxDQTVCK0MsZUFBSyxHQTRCcEQ7a0JBNUJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVHJhdmVsQ291bnRyeVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxDb3VudHJ5VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVHJhdmVsQ291bnRyeVwiO1xuICBnZXQgb3JkZXJMaXN0KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQub3JkZXJMaXN0KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogW107XG4gIH1cbiAgZ2V0IGZpbHRlckNvdW50cnkoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb3VudHJpZXMpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBbXTtcbiAgfVxuICBnZXQgY291bnRyeSgpIHtcbiAgICByZXR1cm4gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmNvdW50cnkgfHwgXCJcIjtcbiAgfVxuICBvbkpvdXJuZXlfT3JkZXIodCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgdGhpcy5jb3VudHJ5LCB0aGlzLmZpbHRlckNvdW50cnk7XG4gICAgaWYgKHRoaXMuZmlsdGVyQ291bnRyeS5pbmNsdWRlcyh0aGlzLmNvdW50cnkpKSB7XG4gICAgICB2YXIgbiA9IHRoaXMub3JkZXJMaXN0O1xuICAgICAgaWYgKG4ubGVuZ3RoIDw9IDApIGUoKTtlbHNlIHtcbiAgICAgICAgdmFyIG8gPSByLmdldENhY2hlZEpvdXJuZXkoKTtcbiAgICAgICAgby5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgcmV0dXJuIG4uaW5jbHVkZXModCkgJiYgbi5pbmNsdWRlcyhlKSA/IG4uaW5kZXhPZih0KSAtIG4uaW5kZXhPZihlKSA6IDA7XG4gICAgICAgIH0pO1xuICAgICAgICByLmNhY2hlSm91cm5leShvKTtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=
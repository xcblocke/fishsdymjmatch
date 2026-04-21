
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelFirst/Scripts/TravelFirstTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c33040ISspEEJ9u++uGcWd5', 'TravelFirstTrait');
// subpackages/l_travelFirst/Scripts/TravelFirstTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelFirstTrait = /** @class */ (function (_super) {
    __extends(TravelFirstTrait, _super);
    function TravelFirstTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TravelFirstTrait.prototype, "firstJourney", {
        get: function () {
            return this.traitData.firstJourney;
        },
        enumerable: false,
        configurable: true
    });
    TravelFirstTrait.prototype.onJourney_Order = function (t, r) {
        var e = t.ins, n = e.getCachedJourney(), o = this.firstJourney, i = n.indexOf(o);
        if (-1 !== i) {
            n.splice(i, 1);
            n.unshift(o);
            e.cacheJourney(n);
            r();
        }
        else
            r();
    };
    TravelFirstTrait.traitKey = "TravelFirst";
    TravelFirstTrait = __decorate([
        mj.trait,
        mj.class("TravelFirstTrait")
    ], TravelFirstTrait);
    return TravelFirstTrait;
}(Trait_1.default));
exports.default = TravelFirstTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbEZpcnN0L1NjcmlwdHMvVHJhdmVsRmlyc3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQThDLG9DQUFLO0lBQW5EOztJQWlCQSxDQUFDO0lBZkMsc0JBQUksMENBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBQ0QsMENBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFDeEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWZNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQWlCcEM7SUFBRCx1QkFBQztDQWpCRCxBQWlCQyxDQWpCNkMsZUFBSyxHQWlCbEQ7a0JBakJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxGaXJzdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxGaXJzdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbEZpcnN0XCI7XG4gIGdldCBmaXJzdEpvdXJuZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLmZpcnN0Sm91cm5leTtcbiAgfVxuICBvbkpvdXJuZXlfT3JkZXIodCwgcikge1xuICAgIHZhciBlID0gdC5pbnMsXG4gICAgICBuID0gZS5nZXRDYWNoZWRKb3VybmV5KCksXG4gICAgICBvID0gdGhpcy5maXJzdEpvdXJuZXksXG4gICAgICBpID0gbi5pbmRleE9mKG8pO1xuICAgIGlmICgtMSAhPT0gaSkge1xuICAgICAgbi5zcGxpY2UoaSwgMSk7XG4gICAgICBuLnVuc2hpZnQobyk7XG4gICAgICBlLmNhY2hlSm91cm5leShuKTtcbiAgICAgIHIoKTtcbiAgICB9IGVsc2UgcigpO1xuICB9XG59Il19
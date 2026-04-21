
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rollOnceOpenHard/Scripts/RollOnceOpenHardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b880gyK/FINIyiF4hroOEq', 'RollOnceOpenHardTrait');
// subpackages/l_rollOnceOpenHard/Scripts/RollOnceOpenHardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var RollOnceOpenHardTrait = /** @class */ (function (_super) {
    __extends(RollOnceOpenHardTrait, _super);
    function RollOnceOpenHardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollOnceOpenHardTrait.prototype.onRollOnceOpen_isOpened = function (e, t) {
        var r, o, i, n, a, l, p, d, f, v = null === (r = e.args) || void 0 === r ? void 0 : r[0], y = null === (o = e.args) || void 0 === o ? void 0 : o[1];
        if (void 0 !== v && void 0 !== y) {
            if ((null !== (p = null === (l = null === (a = null === (n = null === (i = UserModel_1.default.getInstance()) || void 0 === i ? void 0 : i.getGameDataByGameType) || void 0 === n ? void 0 : n.call(i, GameTypeEnums_1.MjGameType.Normal)) || void 0 === a ? void 0 : a.getLevelId) || void 0 === l ? void 0 : l.call(a)) && void 0 !== p ? p : 0) >= (Number(null !== (f = null === (d = this._traitData) || void 0 === d ? void 0 : d.level) && void 0 !== f ? f : 20) || 20) && this.isTypeHardLevel(v, y)) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
                return;
            }
            t();
        }
        else
            t();
    };
    RollOnceOpenHardTrait.prototype.isTypeHardLevel = function (e, t) {
        return e === GameTypeEnums_1.MjGameType.Travel ? TravelGameModel_1.default.getInstance().isHardLevel(t) : ExtractTool_1.default.getInstance().isHardLevel(t);
    };
    RollOnceOpenHardTrait.traitKey = "RollOnceOpenHard";
    RollOnceOpenHardTrait = __decorate([
        mj.trait,
        mj.class("RollOnceOpenHardTrait")
    ], RollOnceOpenHardTrait);
    return RollOnceOpenHardTrait;
}(Trait_1.default));
exports.default = RollOnceOpenHardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JvbGxPbmNlT3BlbkhhcmQvU2NyaXB0cy9Sb2xsT25jZU9wZW5IYXJkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxpRkFBNEU7QUFDNUUsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSw4RUFBd0Y7QUFDeEYsMEZBQXFGO0FBR3JGO0lBQW1ELHlDQUFLO0lBQXhEOztJQTZCQSxDQUFDO0lBM0JDLHVEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekQsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsMEJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25kLENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsU0FBUyxFQUFFLEtBQUs7aUJBQ2pCLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELCtDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBM0JNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQTZCekM7SUFBRCw0QkFBQztDQTdCRCxBQTZCQyxDQTdCa0QsZUFBSyxHQTZCdkQ7a0JBN0JvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSb2xsT25jZU9wZW5IYXJkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvbGxPbmNlT3BlbkhhcmRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSb2xsT25jZU9wZW5IYXJkXCI7XG4gIG9uUm9sbE9uY2VPcGVuX2lzT3BlbmVkKGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgbixcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgcCxcbiAgICAgIGQsXG4gICAgICBmLFxuICAgICAgdiA9IG51bGwgPT09IChyID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdLFxuICAgICAgeSA9IG51bGwgPT09IChvID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzFdO1xuICAgIGlmICh2b2lkIDAgIT09IHYgJiYgdm9pZCAwICE9PSB5KSB7XG4gICAgICBpZiAoKG51bGwgIT09IChwID0gbnVsbCA9PT0gKGwgPSBudWxsID09PSAoYSA9IG51bGwgPT09IChuID0gbnVsbCA9PT0gKGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY2FsbChpLCBNakdhbWVUeXBlLk5vcm1hbCkpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2V0TGV2ZWxJZCkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5jYWxsKGEpKSAmJiB2b2lkIDAgIT09IHAgPyBwIDogMCkgPj0gKE51bWJlcihudWxsICE9PSAoZiA9IG51bGwgPT09IChkID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGQgPyB2b2lkIDAgOiBkLmxldmVsKSAmJiB2b2lkIDAgIT09IGYgPyBmIDogMjApIHx8IDIwKSAmJiB0aGlzLmlzVHlwZUhhcmRMZXZlbCh2LCB5KSkge1xuICAgICAgICB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBpc1R5cGVIYXJkTGV2ZWwoZSwgdCkge1xuICAgIHJldHVybiBlID09PSBNakdhbWVUeXBlLlRyYXZlbCA/IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmlzSGFyZExldmVsKHQpIDogRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0hhcmRMZXZlbCh0KTtcbiAgfVxufSJdfQ==
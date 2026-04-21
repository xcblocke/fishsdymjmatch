
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_valentineRedPoint/Scripts/ValentineRedPointTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5afa7x5KbVCqrLl/TPSglAp', 'ValentineRedPointTrait');
// subpackages/l_valentineRedPoint/Scripts/ValentineRedPointTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ValentineRedPointTrait = /** @class */ (function (_super) {
    __extends(ValentineRedPointTrait, _super);
    function ValentineRedPointTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineRedPointTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        e();
        var n = this.isCurrentGuide(), r = this.isShouldOpen(), i = this.isActualOpen();
        if (n) {
            this.dispatchEvent(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.Valentine);
        }
        else {
            if (r && !i) {
                this.dispatchEvent(GameEvent_1.EGameEvent.RedDot_addNotify, GameTypeEnums_1.ERedDotType.Valentine);
            }
            else {
                this.dispatchEvent(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.Valentine);
            }
        }
    };
    ValentineRedPointTrait.prototype.isCurrentGuide = function () {
        var t = UserModel_1.default.getInstance().normalData.getLevelId(), e = UserModel_1.default.getInstance().isGuideFinished();
        return 1 === t && !e;
    };
    ValentineRedPointTrait.prototype.isShouldOpen = function () {
        var t, e = mj.getClassByName("ValentineModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.isActivityOpen();
    };
    ValentineRedPointTrait.prototype.isActualOpen = function () {
        var t, e = mj.getClassByName("ValentineModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.isActualActivityOpen();
    };
    ValentineRedPointTrait.traitKey = "ValentineRedPoint";
    ValentineRedPointTrait = __decorate([
        mj.trait,
        mj.class("ValentineRedPointTrait")
    ], ValentineRedPointTrait);
    return ValentineRedPointTrait;
}(Trait_1.default));
exports.default = ValentineRedPointTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZhbGVudGluZVJlZFBvaW50L1NjcmlwdHMvVmFsZW50aW5lUmVkUG9pbnRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQTJFO0FBQzNFLHdGQUFxRjtBQUNyRixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQW9ELDBDQUFLO0lBQXpEOztJQWdDQSxDQUFDO0lBOUJDLHFEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQVUsQ0FBQyxrQkFBa0IsRUFBRSwyQkFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFVLENBQUMsZ0JBQWdCLEVBQUUsMkJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN4RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFVLENBQUMsa0JBQWtCLEVBQUUsMkJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxRTtTQUNGO0lBQ0gsQ0FBQztJQUNELCtDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFDckQsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCw2Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNHLENBQUM7SUFDRCw2Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDakgsQ0FBQztJQTlCTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FnQzFDO0lBQUQsNkJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ21ELGVBQUssR0FnQ3hEO2tCQWhDb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBFUmVkRG90VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lUmVkUG9pbnRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lUmVkUG9pbnRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWYWxlbnRpbmVSZWRQb2ludFwiO1xuICBvbkluaXRWaWV3Qmh2X2NydFRscyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHZhciBuID0gdGhpcy5pc0N1cnJlbnRHdWlkZSgpLFxuICAgICAgciA9IHRoaXMuaXNTaG91bGRPcGVuKCksXG4gICAgICBpID0gdGhpcy5pc0FjdHVhbE9wZW4oKTtcbiAgICBpZiAobikge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVHYW1lRXZlbnQuUmVkRG90X2NsZWFyTm90aWZ5LCBFUmVkRG90VHlwZS5WYWxlbnRpbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAociAmJiAhaSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRUdhbWVFdmVudC5SZWREb3RfYWRkTm90aWZ5LCBFUmVkRG90VHlwZS5WYWxlbnRpbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVHYW1lRXZlbnQuUmVkRG90X2NsZWFyTm90aWZ5LCBFUmVkRG90VHlwZS5WYWxlbnRpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpc0N1cnJlbnRHdWlkZSgpIHtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpLFxuICAgICAgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpO1xuICAgIHJldHVybiAxID09PSB0ICYmICFlO1xuICB9XG4gIGlzU2hvdWxkT3BlbigpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlZhbGVudGluZU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09PSAodCA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pc0FjdGl2aXR5T3BlbigpO1xuICB9XG4gIGlzQWN0dWFsT3BlbigpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlZhbGVudGluZU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09PSAodCA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pc0FjdHVhbEFjdGl2aXR5T3BlbigpO1xuICB9XG59Il19
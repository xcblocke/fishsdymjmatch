
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_targetCollected/Scripts/TargetCollectedTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '439deOIPydO8pM2s16USjUk', 'TargetCollectedTrait');
// subpackages/r_targetCollected/Scripts/TargetCollectedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TargetCollectedBehavior_1 = require("./TargetCollectedBehavior");
var TargetCollectedUtils_1 = require("./TargetCollectedUtils");
var TargetCollectedTrait = /** @class */ (function (_super) {
    __extends(TargetCollectedTrait, _super);
    function TargetCollectedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCollectedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.TargetCollected, TargetCollectedBehavior_1.TargetCollectedBehavior);
    };
    TargetCollectedTrait.prototype.onClrTravelHlp_collTagEff = function (e, t) {
        this.pushTargetCollectedEffect(e.ins, e.args[0]);
        t();
    };
    TargetCollectedTrait.prototype.pushTargetCollectedEffect = function (e, t) {
        var r = TravelGameModel_1.default.getInstance().getCurJourney(), o = TargetCollectedUtils_1.TargetCollectedUtils.getTargetCollectedRes(r);
        if (o) {
            var a = __read(o, 2), i = a[0], l = a[1], s = new TargetCollectedBehavior_1.TargetCollectedEffect({
                spinePath: i,
                bundleName: l
            });
            e._baseInput.pushEffect(s, BehaviorsEnum_1.EInsertType.Parallel, t.newEffectId, false);
        }
    };
    TargetCollectedTrait.traitKey = "TargetCollected";
    TargetCollectedTrait = __decorate([
        mj.trait,
        mj.class("TargetCollectedTrait")
    ], TargetCollectedTrait);
    return TargetCollectedTrait;
}(Trait_1.default));
exports.default = TargetCollectedTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3RhcmdldENvbGxlY3RlZC9TY3JpcHRzL1RhcmdldENvbGxlY3RlZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBc0U7QUFDdEUsOEVBQTZFO0FBQzdFLG9FQUFtRTtBQUNuRSxnRUFBMkQ7QUFDM0QsMEZBQXFGO0FBQ3JGLHFFQUEyRjtBQUMzRiwrREFBOEQ7QUFHOUQ7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBd0JBLENBQUM7SUF0QkMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBZ0IsQ0FBQyxlQUFlLEVBQUUsaURBQXVCLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBQ0Qsd0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx3REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLDJDQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLCtDQUFxQixDQUFDO2dCQUM1QixTQUFTLEVBQUUsQ0FBQztnQkFDWixVQUFVLEVBQUUsQ0FBQzthQUNkLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQXRCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0F3QnhDO0lBQUQsMkJBQUM7Q0F4QkQsQUF3QkMsQ0F4QmlELGVBQUssR0F3QnREO2tCQXhCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCB7IEJlaGF2aW9yRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmVoYXZpb3JGYWN0b3J5JztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5pbXBvcnQgeyBUYXJnZXRDb2xsZWN0ZWRCZWhhdmlvciwgVGFyZ2V0Q29sbGVjdGVkRWZmZWN0IH0gZnJvbSAnLi9UYXJnZXRDb2xsZWN0ZWRCZWhhdmlvcic7XG5pbXBvcnQgeyBUYXJnZXRDb2xsZWN0ZWRVdGlscyB9IGZyb20gJy4vVGFyZ2V0Q29sbGVjdGVkVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXJnZXRDb2xsZWN0ZWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0Q29sbGVjdGVkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFyZ2V0Q29sbGVjdGVkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBCZWhhdmlvckZhY3RvcnkucmVnaXN0ZXJCZWhhdmlvcihCZWhhdmlvcnNNYXBwaW5nLlRhcmdldENvbGxlY3RlZCwgVGFyZ2V0Q29sbGVjdGVkQmVoYXZpb3IpO1xuICB9XG4gIG9uQ2xyVHJhdmVsSGxwX2NvbGxUYWdFZmYoZSwgdCkge1xuICAgIHRoaXMucHVzaFRhcmdldENvbGxlY3RlZEVmZmVjdChlLmlucywgZS5hcmdzWzBdKTtcbiAgICB0KCk7XG4gIH1cbiAgcHVzaFRhcmdldENvbGxlY3RlZEVmZmVjdChlLCB0KSB7XG4gICAgdmFyIHIgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJKb3VybmV5KCksXG4gICAgICBvID0gVGFyZ2V0Q29sbGVjdGVkVXRpbHMuZ2V0VGFyZ2V0Q29sbGVjdGVkUmVzKHIpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgYSA9IF9fcmVhZChvLCAyKSxcbiAgICAgICAgaSA9IGFbMF0sXG4gICAgICAgIGwgPSBhWzFdLFxuICAgICAgICBzID0gbmV3IFRhcmdldENvbGxlY3RlZEVmZmVjdCh7XG4gICAgICAgICAgc3BpbmVQYXRoOiBpLFxuICAgICAgICAgIGJ1bmRsZU5hbWU6IGxcbiAgICAgICAgfSk7XG4gICAgICBlLl9iYXNlSW5wdXQucHVzaEVmZmVjdChzLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgdC5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxufSJdfQ==
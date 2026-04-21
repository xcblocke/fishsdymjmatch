
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_targetCollected/Scripts/TargetCollected2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b79d58KHGVGmJSEOjv77lFq', 'TargetCollected2Trait');
// subpackages/r_targetCollected/Scripts/TargetCollected2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TargetCollectedBehavior_1 = require("./TargetCollectedBehavior");
var TargetCollectedUtils_1 = require("./TargetCollectedUtils");
var TargetCollected2Trait = /** @class */ (function (_super) {
    __extends(TargetCollected2Trait, _super);
    function TargetCollected2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCollected2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.TargetCollected, TargetCollectedBehavior_1.TargetCollectedBehavior);
    };
    TargetCollected2Trait.prototype.onClrTravelHlp_collTagEff = function (e, t) {
        var r = e.beforReturnVal;
        r && this.pushTargetCollectedEffect(e.ins, r);
        t();
    };
    TargetCollected2Trait.prototype.pushTargetCollectedEffect = function (e, t) {
        var r = TravelGameModel_1.default.getInstance().getCurJourney(), o = TargetCollectedUtils_1.TargetCollectedUtils.getTargetCollectedRes(r);
        if (o) {
            var a = __read(o, 2), i = a[0], l = a[1], s = new TargetCollectedBehavior_1.TargetCollectedEffect({
                spinePath: i,
                bundleName: l
            });
            e._baseInput.pushEffect(s, BehaviorsEnum_1.EInsertType.Parallel, t.newEffectId, false);
        }
    };
    TargetCollected2Trait.traitKey = "TargetCollected2";
    TargetCollected2Trait = __decorate([
        mj.trait,
        mj.class("TargetCollected2Trait")
    ], TargetCollected2Trait);
    return TargetCollected2Trait;
}(Trait_1.default));
exports.default = TargetCollected2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3RhcmdldENvbGxlY3RlZC9TY3JpcHRzL1RhcmdldENvbGxlY3RlZDJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXNFO0FBQ3RFLDhFQUE2RTtBQUM3RSxvRUFBbUU7QUFDbkUsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUNyRixxRUFBMkY7QUFDM0YsK0RBQThEO0FBRzlEO0lBQW1ELHlDQUFLO0lBQXhEOztJQXlCQSxDQUFDO0lBdkJDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsbUNBQWdCLENBQUMsZUFBZSxFQUFFLGlEQUF1QixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNELHlEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3pCLENBQUMsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx5REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLDJDQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLCtDQUFxQixDQUFDO2dCQUM1QixTQUFTLEVBQUUsQ0FBQztnQkFDWixVQUFVLEVBQUUsQ0FBQzthQUNkLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQXZCTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0F5QnpDO0lBQUQsNEJBQUM7Q0F6QkQsQUF5QkMsQ0F6QmtELGVBQUssR0F5QnZEO2tCQXpCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCB7IEJlaGF2aW9yRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmVoYXZpb3JGYWN0b3J5JztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5pbXBvcnQgeyBUYXJnZXRDb2xsZWN0ZWRCZWhhdmlvciwgVGFyZ2V0Q29sbGVjdGVkRWZmZWN0IH0gZnJvbSAnLi9UYXJnZXRDb2xsZWN0ZWRCZWhhdmlvcic7XG5pbXBvcnQgeyBUYXJnZXRDb2xsZWN0ZWRVdGlscyB9IGZyb20gJy4vVGFyZ2V0Q29sbGVjdGVkVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXJnZXRDb2xsZWN0ZWQyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldENvbGxlY3RlZDJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUYXJnZXRDb2xsZWN0ZWQyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBCZWhhdmlvckZhY3RvcnkucmVnaXN0ZXJCZWhhdmlvcihCZWhhdmlvcnNNYXBwaW5nLlRhcmdldENvbGxlY3RlZCwgVGFyZ2V0Q29sbGVjdGVkQmVoYXZpb3IpO1xuICB9XG4gIG9uQ2xyVHJhdmVsSGxwX2NvbGxUYWdFZmYoZSwgdCkge1xuICAgIHZhciByID0gZS5iZWZvclJldHVyblZhbDtcbiAgICByICYmIHRoaXMucHVzaFRhcmdldENvbGxlY3RlZEVmZmVjdChlLmlucywgcik7XG4gICAgdCgpO1xuICB9XG4gIHB1c2hUYXJnZXRDb2xsZWN0ZWRFZmZlY3QoZSwgdCkge1xuICAgIHZhciByID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgbyA9IFRhcmdldENvbGxlY3RlZFV0aWxzLmdldFRhcmdldENvbGxlY3RlZFJlcyhyKTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIGEgPSBfX3JlYWQobywgMiksXG4gICAgICAgIGkgPSBhWzBdLFxuICAgICAgICBsID0gYVsxXSxcbiAgICAgICAgcyA9IG5ldyBUYXJnZXRDb2xsZWN0ZWRFZmZlY3Qoe1xuICAgICAgICAgIHNwaW5lUGF0aDogaSxcbiAgICAgICAgICBidW5kbGVOYW1lOiBsXG4gICAgICAgIH0pO1xuICAgICAgZS5fYmFzZUlucHV0LnB1c2hFZmZlY3QocywgRUluc2VydFR5cGUuUGFyYWxsZWwsIHQubmV3RWZmZWN0SWQsIGZhbHNlKTtcbiAgICB9XG4gIH1cbn0iXX0=
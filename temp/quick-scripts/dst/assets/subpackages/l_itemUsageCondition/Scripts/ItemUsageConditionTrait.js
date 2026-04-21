
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_itemUsageCondition/Scripts/ItemUsageConditionTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c17doLibVK9paUpzt3m8Rn', 'ItemUsageConditionTrait');
// subpackages/l_itemUsageCondition/Scripts/ItemUsageConditionTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ItemUsageConditionTrait = /** @class */ (function (_super) {
    __extends(ItemUsageConditionTrait, _super);
    function ItemUsageConditionTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemUsageConditionTrait.prototype.onItemWarning_check = function (e, t) {
        var r = mj.getClassByName("PropInitTrait");
        if (r && r.getInstance().eventEnabled) {
            if (UserModel_1.default.getInstance().getMainGameType() !== GameTypeEnums_1.MjGameType.Tile2Normal)
                t();
            else {
                var n = UserModel_1.default.getInstance().getCurrentGameType(), o = r.getInstance().isUnlocked(n, IUserData_1.EItemType.Shuffle);
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: o
                });
            }
        }
        else
            t();
    };
    ItemUsageConditionTrait.traitKey = "ItemUsageCondition";
    ItemUsageConditionTrait = __decorate([
        mj.trait,
        mj.class("ItemUsageConditionTrait")
    ], ItemUsageConditionTrait);
    return ItemUsageConditionTrait;
}(Trait_1.default));
exports.default = ItemUsageConditionTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2l0ZW1Vc2FnZUNvbmRpdGlvbi9TY3JpcHRzL0l0ZW1Vc2FnZUNvbmRpdGlvblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELDZEQUE0RDtBQUM1RCxzRUFBaUU7QUFHakU7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBZ0JBLENBQUM7SUFkQyxxREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3JDLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVc7Z0JBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQUs7Z0JBQ2pGLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFDbEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDMUMsU0FBUyxFQUFFLENBQUM7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFkTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FnQjNDO0lBQUQsOEJBQUM7Q0FoQkQsQUFnQkMsQ0FoQm9ELGVBQUssR0FnQnpEO2tCQWhCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRUl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy91c2VyL0lVc2VyRGF0YSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJJdGVtVXNhZ2VDb25kaXRpb25UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVVzYWdlQ29uZGl0aW9uVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSXRlbVVzYWdlQ29uZGl0aW9uXCI7XG4gIG9uSXRlbVdhcm5pbmdfY2hlY2soZSwgdCkge1xuICAgIHZhciByID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJQcm9wSW5pdFRyYWl0XCIpO1xuICAgIGlmIChyICYmIHIuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQpIHtcbiAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgbiA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgICAgIG8gPSByLmdldEluc3RhbmNlKCkuaXNVbmxvY2tlZChuLCBFSXRlbVR5cGUuU2h1ZmZsZSk7XG4gICAgICAgIHQoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogb1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19
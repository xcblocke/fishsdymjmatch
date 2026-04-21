"use strict";
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
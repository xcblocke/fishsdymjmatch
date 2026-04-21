
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_valentineOpenLvLimit/Scripts/ValentineOpenLvLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc40fFiPRhPq7dHmzC+Zg/Y', 'ValentineOpenLvLimitTrait');
// subpackages/l_valentineOpenLvLimit/Scripts/ValentineOpenLvLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ValentineOpenLvLimitTrait = /** @class */ (function (_super) {
    __extends(ValentineOpenLvLimitTrait, _super);
    function ValentineOpenLvLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ValentineOpenLvLimitTrait.prototype, "openLv", {
        get: function () {
            return null != this._traitData.openLv ? this._traitData.openLv : 3;
        },
        enumerable: false,
        configurable: true
    });
    ValentineOpenLvLimitTrait.prototype.onValModel_isActOpen = function (t, e) {
        var r = t.ins.isInActivityTime(), n = this.isValentineLvOpen();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r && n
        });
    };
    ValentineOpenLvLimitTrait.prototype.isValentineLvOpen = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId() >= this.openLv;
    };
    ValentineOpenLvLimitTrait.traitKey = "ValentineOpenLvLimit";
    ValentineOpenLvLimitTrait = __decorate([
        mj.trait,
        mj.class("ValentineOpenLvLimitTrait")
    ], ValentineOpenLvLimitTrait);
    return ValentineOpenLvLimitTrait;
}(Trait_1.default));
exports.default = ValentineOpenLvLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZhbGVudGluZU9wZW5MdkxpbWl0L1NjcmlwdHMvVmFsZW50aW5lT3Blbkx2TGltaXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBdUQsNkNBQUs7SUFBNUQ7O0lBaUJBLENBQUM7SUFmQyxzQkFBSSw2Q0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQzs7O09BQUE7SUFDRCx3REFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUFpQixHQUFqQjtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEcsQ0FBQztJQWZNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFEdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0FpQjdDO0lBQUQsZ0NBQUM7Q0FqQkQsQUFpQkMsQ0FqQnNELGVBQUssR0FpQjNEO2tCQWpCb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lT3Blbkx2TGltaXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lT3Blbkx2TGltaXRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWYWxlbnRpbmVPcGVuTHZMaW1pdFwiO1xuICBnZXQgb3Blbkx2KCkge1xuICAgIHJldHVybiBudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5vcGVuTHYgPyB0aGlzLl90cmFpdERhdGEub3Blbkx2IDogMztcbiAgfVxuICBvblZhbE1vZGVsX2lzQWN0T3Blbih0LCBlKSB7XG4gICAgdmFyIHIgPSB0Lmlucy5pc0luQWN0aXZpdHlUaW1lKCksXG4gICAgICBuID0gdGhpcy5pc1ZhbGVudGluZUx2T3BlbigpO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogciAmJiBuXG4gICAgfSk7XG4gIH1cbiAgaXNWYWxlbnRpbmVMdk9wZW4oKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCkuZ2V0TGV2ZWxJZCgpID49IHRoaXMub3Blbkx2O1xuICB9XG59Il19
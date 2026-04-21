
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_survivalNoFC/Scripts/SurvivalNoFCTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bd66k8btZIP5i8fpWupgfl', 'SurvivalNoFCTrait');
// subpackages/l_survivalNoFC/Scripts/SurvivalNoFCTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SurvivalNoFCTrait = /** @class */ (function (_super) {
    __extends(SurvivalNoFCTrait, _super);
    function SurvivalNoFCTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurvivalNoFCTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SurvivalNoFCTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.canActive() && UserModel_1.default.getInstance().getCurrentGameData().setHasBrokenCombo(true);
        e();
    };
    SurvivalNoFCTrait.prototype.canActive = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    SurvivalNoFCTrait.traitKey = "SurvivalNoFC";
    __decorate([
        mj.traitEvent("SurvNoFCTrait_canActive")
    ], SurvivalNoFCTrait.prototype, "canActive", null);
    SurvivalNoFCTrait = __decorate([
        mj.trait,
        mj.class("SurvivalNoFCTrait")
    ], SurvivalNoFCTrait);
    return SurvivalNoFCTrait;
}(Trait_1.default));
exports.default = SurvivalNoFCTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N1cnZpdmFsTm9GQy9TY3JpcHRzL1N1cnZpdmFsTm9GQ1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDs7SUFhQSxDQUFDO0lBWEMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHVEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsQ0FBQztJQUNqRixDQUFDO0lBWE0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFTakM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3NEQUd4QztJQVprQixpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBYXJDO0lBQUQsd0JBQUM7Q0FiRCxBQWFDLENBYjhDLGVBQUssR0FhbkQ7a0JBYm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlN1cnZpdmFsTm9GQ1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdXJ2aXZhbE5vRkNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTdXJ2aXZhbE5vRkNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblN1cnZpdmFsR2FtZSh0LCBlKSB7XG4gICAgdGhpcy5jYW5BY3RpdmUoKSAmJiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKS5zZXRIYXNCcm9rZW5Db21ibyh0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTdXJ2Tm9GQ1RyYWl0X2NhbkFjdGl2ZVwiKVxuICBjYW5BY3RpdmUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICB9XG59Il19
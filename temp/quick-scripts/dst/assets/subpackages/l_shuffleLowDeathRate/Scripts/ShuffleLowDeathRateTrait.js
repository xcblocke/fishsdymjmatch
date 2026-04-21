
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_shuffleLowDeathRate/Scripts/ShuffleLowDeathRateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4cbe8+HI3BIWZfynxDa78ou', 'ShuffleLowDeathRateTrait');
// subpackages/l_shuffleLowDeathRate/Scripts/ShuffleLowDeathRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ShuffleLowDeathRateTrait = /** @class */ (function (_super) {
    __extends(ShuffleLowDeathRateTrait, _super);
    function ShuffleLowDeathRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleLowDeathRateTrait_1 = ShuffleLowDeathRateTrait;
    ShuffleLowDeathRateTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        null !== (e = (r = this.localData).targetLowDeathLevel) && void 0 !== e || (r.targetLowDeathLevel = 0);
    };
    ShuffleLowDeathRateTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId();
    };
    ShuffleLowDeathRateTrait.prototype.getMinLevel = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.minLevel) || 21;
    };
    ShuffleLowDeathRateTrait.prototype.onIptShuffle_pushEffect = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = this.getCurrentLevel();
            o >= this.getMinLevel() && (this.localData.targetLowDeathLevel = o + 1);
            e();
        }
        catch (t) {
            console.error("[" + ShuffleLowDeathRateTrait_1.traitKey + "] 处理洗牌事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleLowDeathRateTrait.prototype.isTargetLevel = function (t) {
        var e = this.localData.targetLowDeathLevel || 0;
        return e > 0 && t === e;
    };
    ShuffleLowDeathRateTrait.prototype.onExtNormLv_hasDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isTargetLevel(o)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + ShuffleLowDeathRateTrait_1.traitKey + "] 检查低死亡率标记失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ShuffleLowDeathRateTrait.prototype.onExtNormLv_getDeathDirAdj = function (t, e) {
        try {
            if (!this.checkGameMode()) {
                e();
                return;
            }
            var o = t.args[0];
            if (this.isTargetLevel(o)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: -3
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + ShuffleLowDeathRateTrait_1.traitKey + "] 获取低死亡率调整值失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var ShuffleLowDeathRateTrait_1;
    ShuffleLowDeathRateTrait.traitKey = "ShuffleLowDeathRate";
    ShuffleLowDeathRateTrait = ShuffleLowDeathRateTrait_1 = __decorate([
        mj.trait,
        mj.class("ShuffleLowDeathRateTrait")
    ], ShuffleLowDeathRateTrait);
    return ShuffleLowDeathRateTrait;
}(ExtractTrait_1.default));
exports.default = ShuffleLowDeathRateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NodWZmbGVMb3dEZWF0aFJhdGUvU2NyaXB0cy9TaHVmZmxlTG93RGVhdGhSYXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCw4RUFBd0Y7QUFDeEYsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUdqRTtJQUFzRCw0Q0FBWTtJQUFsRTs7SUEwRUEsQ0FBQztpQ0ExRW9CLHdCQUF3QjtJQUUzQyx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFDRCxrREFBZSxHQUFmO1FBQ0UsT0FBTyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkYsQ0FBQztJQUNELDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEYsQ0FBQztJQUNELDBEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FB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QUFHLHFCQUFxQixDQUFDO0lBRHJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBMEU1QztJQUFELCtCQUFDO0NBMUVELEFBMEVDLENBMUVxRCxzQkFBWSxHQTBFakU7a0JBMUVvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2h1ZmZsZUxvd0RlYXRoUmF0ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVmZmxlTG93RGVhdGhSYXRlVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNodWZmbGVMb3dEZWF0aFJhdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIG51bGwgIT09IChlID0gKHIgPSB0aGlzLmxvY2FsRGF0YSkudGFyZ2V0TG93RGVhdGhMZXZlbCkgJiYgdm9pZCAwICE9PSBlIHx8IChyLnRhcmdldExvd0RlYXRoTGV2ZWwgPSAwKTtcbiAgfVxuICBnZXRDdXJyZW50TGV2ZWwoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCkuZ2V0TGV2ZWxJZCgpO1xuICB9XG4gIGdldE1pbkxldmVsKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubWluTGV2ZWwpIHx8IDIxO1xuICB9XG4gIG9uSXB0U2h1ZmZsZV9wdXNoRWZmZWN0KHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gdGhpcy5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgIG8gPj0gdGhpcy5nZXRNaW5MZXZlbCgpICYmICh0aGlzLmxvY2FsRGF0YS50YXJnZXRMb3dEZWF0aExldmVsID0gbyArIDEpO1xuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBTaHVmZmxlTG93RGVhdGhSYXRlVHJhaXQudHJhaXRLZXkgKyBcIl0g5aSE55CG5rSX54mM5LqL5Lu25aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgaXNUYXJnZXRMZXZlbCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS50YXJnZXRMb3dEZWF0aExldmVsIHx8IDA7XG4gICAgcmV0dXJuIGUgPiAwICYmIHQgPT09IGU7XG4gIH1cbiAgb25FeHROb3JtTHZfaGFzRGVhdGhEaXJBZGoodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSB0LmFyZ3NbMF07XG4gICAgICBpZiAodGhpcy5pc1RhcmdldExldmVsKG8pKSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBTaHVmZmxlTG93RGVhdGhSYXRlVHJhaXQudHJhaXRLZXkgKyBcIl0g5qOA5p+l5L2O5q275Lqh546H5qCH6K6w5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0RGVhdGhEaXJBZGoodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSB0LmFyZ3NbMF07XG4gICAgICBpZiAodGhpcy5pc1RhcmdldExldmVsKG8pKSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDogLTNcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgU2h1ZmZsZUxvd0RlYXRoUmF0ZVRyYWl0LnRyYWl0S2V5ICsgXCJdIOiOt+WPluS9juatu+S6oeeOh+iwg+aVtOWAvOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19
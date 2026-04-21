
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskLockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44378paZnVL3b/BoiZQlnLL', 'TaskLockTrait');
// subpackages/l_task/Scripts/TaskLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TaskModel_1 = require("./model/TaskModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TaskLockTrait = /** @class */ (function (_super) {
    __extends(TaskLockTrait, _super);
    function TaskLockTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskLockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "Tile2WinVw_show"
            }]);
        this._config = this._traitData || {};
    };
    TaskLockTrait.prototype.sendTaskRedDotNotify = function () {
        mj.EventManager.emit("RedDot_addNotify", GameTypeEnums_1.ERedDotType.Task);
    };
    TaskLockTrait.prototype.onTaskTrait_canShowTaskBtn = function (t, e) {
        if (this._config.isShowLockBtn) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    TaskLockTrait.prototype.onWinVw_showWinVw = function (t, e) {
        try {
            var a = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, o = TaskModel_1.TaskModel.getInstance();
            if (!o.isTaskOpen()) {
                e();
                return;
            }
            a === o.openCondition().level && this.sendTaskRedDotNotify();
        }
        catch (t) { }
        e();
    };
    TaskLockTrait.prototype.onTile2WinVw_show = function (t, e) {
        try {
            var a = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, o = TaskModel_1.TaskModel.getInstance();
            if (!o.isTaskOpen()) {
                e();
                return;
            }
            a === o.openCondition().level && this.sendTaskRedDotNotify();
        }
        catch (t) { }
        e();
    };
    TaskLockTrait.prototype.onTaskModel_hasRedPoint = function (t, e) {
        try {
            var a = TaskModel_1.TaskModel.getInstance(), o = {
                show: true,
                type: GameTypeEnums_1.ERedDotType.Task
            };
            mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
            if (!o.show) {
                e();
                return;
            }
            if (a.isFirstHomeShow()) {
                e();
                return;
            }
            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() > a.openCondition().level) {
                this.sendTaskRedDotNotify();
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
                return;
            }
        }
        catch (t) { }
        e();
    };
    TaskLockTrait.traitKey = "TaskLock";
    TaskLockTrait = __decorate([
        mj.trait,
        mj.class("TaskLockTrait")
    ], TaskLockTrait);
    return TaskLockTrait;
}(Trait_1.default));
exports.default = TaskLockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrTG9ja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSwrQ0FBOEM7QUFDOUMsd0ZBQXFGO0FBR3JGO0lBQTJDLGlDQUFLO0lBQWhEO1FBQUEscUVBNEVDO1FBM0VDLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBMkVmLENBQUM7SUF6RUMsOEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsNENBQW9CLEdBQXBCO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsMkJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0Qsa0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDOUIsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCx5Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUNoRSxDQUFDLEdBQUcscUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUNuQixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM5RDtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7UUFDZCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx5Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUNoRSxDQUFDLEdBQUcscUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUNuQixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM5RDtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7UUFDZCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwrQ0FBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRztnQkFDRixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsMkJBQVcsQ0FBQyxJQUFJO2FBQ3ZCLENBQUM7WUFDSixFQUFFLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDWCxDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDdkIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3BGLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUM1QixDQUFDLENBQUM7b0JBQ0EsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07b0JBQzFDLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBekVNLHNCQUFRLEdBQUcsVUFBVSxDQUFDO0lBRlYsYUFBYTtRQUZqQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQTRFakM7SUFBRCxvQkFBQztDQTVFRCxBQTRFQyxDQTVFMEMsZUFBSyxHQTRFL0M7a0JBNUVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tICcuL21vZGVsL1Rhc2tNb2RlbCc7XG5pbXBvcnQgeyBFUmVkRG90VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRhc2tMb2NrVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tMb2NrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7fTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUYXNrTG9ja1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJUaWxlMldpblZ3X3Nob3dcIlxuICAgIH1dKTtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl90cmFpdERhdGEgfHwge307XG4gIH1cbiAgc2VuZFRhc2tSZWREb3ROb3RpZnkoKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoXCJSZWREb3RfYWRkTm90aWZ5XCIsIEVSZWREb3RUeXBlLlRhc2spO1xuICB9XG4gIG9uVGFza1RyYWl0X2NhblNob3dUYXNrQnRuKHQsIGUpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmlzU2hvd0xvY2tCdG4pIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25XaW5Wd19zaG93V2luVncodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKSAtIDEsXG4gICAgICAgIG8gPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmICghby5pc1Rhc2tPcGVuKCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhID09PSBvLm9wZW5Db25kaXRpb24oKS5sZXZlbCAmJiB0aGlzLnNlbmRUYXNrUmVkRG90Tm90aWZ5KCk7XG4gICAgfSBjYXRjaCAodCkge31cbiAgICBlKCk7XG4gIH1cbiAgb25UaWxlMldpblZ3X3Nob3codCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKSAtIDEsXG4gICAgICAgIG8gPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmICghby5pc1Rhc2tPcGVuKCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhID09PSBvLm9wZW5Db25kaXRpb24oKS5sZXZlbCAmJiB0aGlzLnNlbmRUYXNrUmVkRG90Tm90aWZ5KCk7XG4gICAgfSBjYXRjaCAodCkge31cbiAgICBlKCk7XG4gIH1cbiAgb25UYXNrTW9kZWxfaGFzUmVkUG9pbnQodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBvID0ge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgdHlwZTogRVJlZERvdFR5cGUuVGFza1xuICAgICAgICB9O1xuICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJSZWREb3RDdHJsX3Nob3dSZWREb3RcIiwgdGhpcywgW29dKTtcbiAgICAgIGlmICghby5zaG93KSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGEuaXNGaXJzdEhvbWVTaG93KCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpID4gYS5vcGVuQ29uZGl0aW9uKCkubGV2ZWwpIHtcbiAgICAgICAgdGhpcy5zZW5kVGFza1JlZERvdE5vdGlmeSgpO1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7fVxuICAgIGUoKTtcbiAgfVxufSJdfQ==
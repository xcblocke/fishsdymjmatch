
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskStageClickTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6d4aV09whCvJ34FnYzWTZp', 'TaskStageClickTrait');
// subpackages/l_task/Scripts/TaskStageClickTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskStageClickTrait = /** @class */ (function (_super) {
    __extends(TaskStageClickTrait, _super);
    function TaskStageClickTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskStageClickTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskStageClickTrait.prototype.onTaskView_stageBtnClick = function (t, e) {
        var a = t.args[0];
        if (TaskModel_1.TaskModel.getInstance().getCurrentStage() > a) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    TaskStageClickTrait.traitKey = "TaskStageClick";
    TaskStageClickTrait = __decorate([
        mj.trait,
        mj.class("TaskStageClickTrait")
    ], TaskStageClickTrait);
    return TaskStageClickTrait;
}(Trait_1.default));
exports.default = TaskStageClickTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrU3RhZ2VDbGlja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLCtDQUE4QztBQUc5QztJQUFpRCx1Q0FBSztJQUF0RDs7SUFpQkEsQ0FBQztJQWZDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBZk0sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBaUJ2QztJQUFELDBCQUFDO0NBakJELEFBaUJDLENBakJnRCxlQUFLLEdBaUJyRDtrQkFqQm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tICcuL21vZGVsL1Rhc2tNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRhc2tTdGFnZUNsaWNrVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tTdGFnZUNsaWNrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza1N0YWdlQ2xpY2tcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVGFza1ZpZXdfc3RhZ2VCdG5DbGljayh0LCBlKSB7XG4gICAgdmFyIGEgPSB0LmFyZ3NbMF07XG4gICAgaWYgKFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRTdGFnZSgpID4gYSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=
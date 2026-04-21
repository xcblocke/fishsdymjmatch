
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskClearTargetTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e5d7o3GuNLdraXppvnDpka', 'TaskClearTargetTrait');
// subpackages/l_task/Scripts/TaskClearTargetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TaskModel_1 = require("./model/TaskModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var TaskClearTargetTrait = /** @class */ (function (_super) {
    __extends(TaskClearTargetTrait, _super);
    function TaskClearTargetTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskClearTargetTrait_1 = TaskClearTargetTrait;
    TaskClearTargetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskClearTargetTrait.prototype.isTaskCard = function (t) {
        var e = TaskModel_1.TaskModel.getInstance();
        return !!e && e.getTaskCardResName() === t;
    };
    TaskClearTargetTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var o;
        try {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            if (this.isTaskCard(i)) {
                var r = CardUtil_1.default.getFullPath(i), s = CardUtil_1.default.getCardBundleName(i), l = CardUtil_1.default.fromAtlas(i);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: r,
                        bundleName: s,
                        fromAtlas: l
                    }
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + TaskClearTargetTrait_1.traitKey + "] 劫持失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var TaskClearTargetTrait_1;
    TaskClearTargetTrait.traitKey = "TaskClearTarget";
    TaskClearTargetTrait = TaskClearTargetTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskClearTargetTrait")
    ], TaskClearTargetTrait);
    return TaskClearTargetTrait;
}(Trait_1.default));
exports.default = TaskClearTargetTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQ2xlYXJUYXJnZXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUMzRCwrQ0FBOEM7QUFDOUMsb0VBQStEO0FBRy9EO0lBQWtELHdDQUFLO0lBQXZEOztJQWtDQSxDQUFDOzZCQWxDb0Isb0JBQW9CO0lBRXZDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx5Q0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QseURBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxrQkFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDO3dCQUNiLFNBQVMsRUFBRSxDQUFDO3FCQUNiO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxzQkFBb0IsQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25HLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDOztJQWhDTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FrQ3hDO0lBQUQsMkJBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ2lELGVBQUssR0FrQ3REO2tCQWxDb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwvVGFza01vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrQ2xlYXJUYXJnZXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NsZWFyVGFyZ2V0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza0NsZWFyVGFyZ2V0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBpc1Rhc2tDYXJkKHQpIHtcbiAgICB2YXIgZSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIHJldHVybiAhIWUgJiYgZS5nZXRUYXNrQ2FyZFJlc05hbWUoKSA9PT0gdDtcbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZSh0LCBlKSB7XG4gICAgdmFyIG87XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKG8gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMF07XG4gICAgICBpZiAodGhpcy5pc1Rhc2tDYXJkKGkpKSB7XG4gICAgICAgIHZhciByID0gQ2FyZFV0aWwuZ2V0RnVsbFBhdGgoaSksXG4gICAgICAgICAgcyA9IENhcmRVdGlsLmdldENhcmRCdW5kbGVOYW1lKGkpLFxuICAgICAgICAgIGwgPSBDYXJkVXRpbC5mcm9tQXRsYXMoaSk7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogcixcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IHMsXG4gICAgICAgICAgICBmcm9tQXRsYXM6IGxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tDbGVhclRhcmdldFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgeWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19
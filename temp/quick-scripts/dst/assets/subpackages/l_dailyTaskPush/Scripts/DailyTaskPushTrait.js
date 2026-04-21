
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dailyTaskPush/Scripts/DailyTaskPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13760TQyKVBOb4ALItt7FRN', 'DailyTaskPushTrait');
// subpackages/l_dailyTaskPush/Scripts/DailyTaskPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var p = {
    pushHour: 20,
    opewaynum: "mbdailytask1",
    taskType: "mbdailytask01"
};
var DailyTaskPushTrait = /** @class */ (function (_super) {
    __extends(DailyTaskPushTrait, _super);
    function DailyTaskPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = p;
        _this._isPushLinkJump = false;
        _this._lastPushCheckTime = 0;
        return _this;
    }
    DailyTaskPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
        }
    };
    DailyTaskPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    DailyTaskPushTrait.prototype.isBeforePushTime = function () {
        return new Date().getHours() < this._config.pushHour;
    };
    DailyTaskPushTrait.prototype.canSendPush = function () {
        return !!this.isBeforePushTime();
    };
    DailyTaskPushTrait.prototype.getTaskModel = function () {
        var t = mj.getClassByName("TaskModel");
        return null == t ? void 0 : t.getInstance();
    };
    DailyTaskPushTrait.prototype.isDailyTaskCompleted = function () {
        var t, e, i = this.getTaskModel();
        if (!i)
            return true;
        if (!i.isTaskOpen || !i.isTaskOpen())
            return false;
        var a = i.getCurrentStage(), n = (i.getTaskData().listTaskType || []).length, o = i.getStageData(a), r = (null === (t = null == o ? void 0 : o.taskCompleteList) || void 0 === t ? void 0 : t.length) || 0;
        return ((null === (e = i.localData) || void 0 === e ? void 0 : e.taskStage) || 1) >= 3 && r >= n;
    };
    DailyTaskPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        i && i.opewaynum === this._config.opewaynum && (this._isPushLinkJump = true);
        e();
    };
    DailyTaskPushTrait.prototype.onHallVw_onPopView = function (t, e) {
        var i;
        if (this._isPushLinkJump) {
            this._isPushLinkJump = false;
            var a = mj.getClassByName("TaskTrait");
            if (null === (i = null == a ? void 0 : a.getInstance()) || void 0 === i ? void 0 : i.eventEnabled) {
                this.showTaskMainUI(1, function (t) {
                    e({
                        isBreak: t
                    });
                });
                return;
            }
        }
        e();
    };
    DailyTaskPushTrait.prototype.onGameUI_onLoad = function (t, e) {
        var i;
        if (this._isPushLinkJump) {
            this._isPushLinkJump = false;
            var a = mj.getClassByName("TaskTrait");
            (null === (i = null == a ? void 0 : a.getInstance()) || void 0 === i ? void 0 : i.eventEnabled) && this.showTaskMainUI(2, function (t) {
                e({
                    isBreak: t
                });
            });
        }
        e();
    };
    DailyTaskPushTrait.prototype.showTaskMainUI = function (t, e) {
        ControllerManager_1.default.getInstance().pushViewByController("TaskController", {
            from: t
        });
        null == e || e(true);
    };
    DailyTaskPushTrait.prototype.onTaskModel_updateProg = function (t, e) {
        if (t.beforReturnVal) {
            var i = Date.now();
            if (Math.abs(i - this._lastPushCheckTime) < 2000)
                e();
            else {
                this._lastPushCheckTime = i;
                this.checkAndTriggerPush();
                e();
            }
        }
        else
            e();
    };
    DailyTaskPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.isDailyTaskCompleted()) {
            this.removePush();
        }
        else {
            this.canSendPush() && this.sendPush();
        }
    };
    DailyTaskPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        }, {
            keyNum: "daily"
        });
    };
    DailyTaskPushTrait.prototype.removePush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
    };
    DailyTaskPushTrait.traitKey = "DailyTaskPush";
    __decorate([
        mj.traitEvent("DailyTaskPush_showTaskVw")
    ], DailyTaskPushTrait.prototype, "showTaskMainUI", null);
    DailyTaskPushTrait = __decorate([
        mj.trait,
        mj.class("DailyTaskPushTrait")
    ], DailyTaskPushTrait);
    return DailyTaskPushTrait;
}(Trait_1.default));
exports.default = DailyTaskPushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5VGFza1B1c2gvU2NyaXB0cy9EYWlseVRhc2tQdXNoVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRixnRUFBMkQ7QUFDM0QsK0VBQTBFO0FBQzFFLElBQUksQ0FBQyxHQUFHO0lBQ04sUUFBUSxFQUFFLEVBQUU7SUFDWixTQUFTLEVBQUUsY0FBYztJQUN6QixRQUFRLEVBQUUsZUFBZTtDQUMxQixDQUFDO0FBR0Y7SUFBZ0Qsc0NBQUs7SUFBckQ7UUFBQSxxRUE4R0M7UUE3R0MsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHdCQUFrQixHQUFHLENBQUMsQ0FBQzs7SUEyR3pCLENBQUM7SUF6R0MsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0YsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25HO0lBQ0gsQ0FBQztJQUNELHNDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxP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U0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQXpHTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQXFFbEM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOzREQU16QztJQTlFa0Isa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQThHdEM7SUFBRCx5QkFBQztDQTlHRCxBQThHQyxDQTlHK0MsZUFBSyxHQThHcEQ7a0JBOUdvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9wdXNoL1B1c2hNYW5hZ2VyJztcbnZhciBwID0ge1xuICBwdXNoSG91cjogMjAsXG4gIG9wZXdheW51bTogXCJtYmRhaWx5dGFzazFcIixcbiAgdGFza1R5cGU6IFwibWJkYWlseXRhc2swMVwiXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEYWlseVRhc2tQdXNoVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5VGFza1B1c2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHA7XG4gIF9pc1B1c2hMaW5rSnVtcCA9IGZhbHNlO1xuICBfbGFzdFB1c2hDaGVja1RpbWUgPSAwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRhaWx5VGFza1B1c2hcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLl90cmFpdERhdGEpIHtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLlRpbWUgJiYgKHRoaXMuX2NvbmZpZy5wdXNoSG91ciA9IHRoaXMuX3RyYWl0RGF0YS5UaW1lKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLlBsYW5Db2RlICYmICh0aGlzLl9jb25maWcub3Bld2F5bnVtID0gdGhpcy5fdHJhaXREYXRhLlBsYW5Db2RlKTtcbiAgICAgIHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLlN0cmF0ZWd5Q29kZSAmJiAodGhpcy5fY29uZmlnLnRhc2tUeXBlID0gdGhpcy5fdHJhaXREYXRhLlN0cmF0ZWd5Q29kZSk7XG4gICAgfVxuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIGlzQmVmb3JlUHVzaFRpbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA8IHRoaXMuX2NvbmZpZy5wdXNoSG91cjtcbiAgfVxuICBjYW5TZW5kUHVzaCgpIHtcbiAgICByZXR1cm4gISF0aGlzLmlzQmVmb3JlUHVzaFRpbWUoKTtcbiAgfVxuICBnZXRUYXNrTW9kZWwoKSB7XG4gICAgdmFyIHQgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGlzRGFpbHlUYXNrQ29tcGxldGVkKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIGkgPSB0aGlzLmdldFRhc2tNb2RlbCgpO1xuICAgIGlmICghaSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKCFpLmlzVGFza09wZW4gfHwgIWkuaXNUYXNrT3BlbigpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGEgPSBpLmdldEN1cnJlbnRTdGFnZSgpLFxuICAgICAgbiA9IChpLmdldFRhc2tEYXRhKCkubGlzdFRhc2tUeXBlIHx8IFtdKS5sZW5ndGgsXG4gICAgICBvID0gaS5nZXRTdGFnZURhdGEoYSksXG4gICAgICByID0gKG51bGwgPT09ICh0ID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby50YXNrQ29tcGxldGVMaXN0KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lmxlbmd0aCkgfHwgMDtcbiAgICByZXR1cm4gKChudWxsID09PSAoZSA9IGkubG9jYWxEYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnRhc2tTdGFnZSkgfHwgMSkgPj0gMyAmJiByID49IG47XG4gIH1cbiAgb25Mb2dpbk1fZW50ZXJHYW1lKHQsIGUpIHtcbiAgICB2YXIgaSA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0T3BlbkFwcE9wZXdheSgpO1xuICAgIGkgJiYgaS5vcGV3YXludW0gPT09IHRoaXMuX2NvbmZpZy5vcGV3YXludW0gJiYgKHRoaXMuX2lzUHVzaExpbmtKdW1wID0gdHJ1ZSk7XG4gICAgZSgpO1xuICB9XG4gIG9uSGFsbFZ3X29uUG9wVmlldyh0LCBlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKHRoaXMuX2lzUHVzaExpbmtKdW1wKSB7XG4gICAgICB0aGlzLl9pc1B1c2hMaW5rSnVtcCA9IGZhbHNlO1xuICAgICAgdmFyIGEgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tUcmFpdFwiKTtcbiAgICAgIGlmIChudWxsID09PSAoaSA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5ldmVudEVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zaG93VGFza01haW5VSSgxLCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGUoe1xuICAgICAgICAgICAgaXNCcmVhazogdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lVUlfb25Mb2FkKHQsIGUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAodGhpcy5faXNQdXNoTGlua0p1bXApIHtcbiAgICAgIHRoaXMuX2lzUHVzaExpbmtKdW1wID0gZmFsc2U7XG4gICAgICB2YXIgYSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVGFza1RyYWl0XCIpO1xuICAgICAgKG51bGwgPT09IChpID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmV2ZW50RW5hYmxlZCkgJiYgdGhpcy5zaG93VGFza01haW5VSSgyLCBmdW5jdGlvbiAodCkge1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRhaWx5VGFza1B1c2hfc2hvd1Rhc2tWd1wiKVxuICBzaG93VGFza01haW5VSSh0LCBlKSB7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRhc2tDb250cm9sbGVyXCIsIHtcbiAgICAgIGZyb206IHRcbiAgICB9KTtcbiAgICBudWxsID09IGUgfHwgZSh0cnVlKTtcbiAgfVxuICBvblRhc2tNb2RlbF91cGRhdGVQcm9nKHQsIGUpIHtcbiAgICBpZiAodC5iZWZvclJldHVyblZhbCkge1xuICAgICAgdmFyIGkgPSBEYXRlLm5vdygpO1xuICAgICAgaWYgKE1hdGguYWJzKGkgLSB0aGlzLl9sYXN0UHVzaENoZWNrVGltZSkgPCAyMDAwKSBlKCk7ZWxzZSB7XG4gICAgICAgIHRoaXMuX2xhc3RQdXNoQ2hlY2tUaW1lID0gaTtcbiAgICAgICAgdGhpcy5jaGVja0FuZFRyaWdnZXJQdXNoKCk7XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGNoZWNrQW5kVHJpZ2dlclB1c2goKSB7XG4gICAgaWYgKHRoaXMuaXNEYWlseVRhc2tDb21wbGV0ZWQoKSkge1xuICAgICAgdGhpcy5yZW1vdmVQdXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FuU2VuZFB1c2goKSAmJiB0aGlzLnNlbmRQdXNoKCk7XG4gICAgfVxuICB9XG4gIHNlbmRQdXNoKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRDb25maWcoKSxcbiAgICAgIGUgPSBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFB1c2hUaW1lc3RhbXAodC5wdXNoSG91cik7XG4gICAgUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZW5kR2FtZVB1c2goe1xuICAgICAgb3Bld2F5bnVtOiB0Lm9wZXdheW51bSxcbiAgICAgIHRhc2tUeXBlOiB0LnRhc2tUeXBlLFxuICAgICAgc2VuZFRpbWU6IGVcbiAgICB9LCB7XG4gICAgICBrZXlOdW06IFwiZGFpbHlcIlxuICAgIH0pO1xuICB9XG4gIHJlbW92ZVB1c2goKSB7XG4gICAgUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZW5kR2FtZVB1c2hSZW1vdmVkKHRoaXMuZ2V0Q29uZmlnKCkub3Bld2F5bnVtKTtcbiAgfVxufSJdfQ==
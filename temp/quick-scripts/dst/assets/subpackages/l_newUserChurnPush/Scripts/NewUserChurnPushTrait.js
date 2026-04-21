
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_newUserChurnPush/Scripts/NewUserChurnPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '905d9Y64lNC8oEo/Wo4ePyd', 'NewUserChurnPushTrait');
// subpackages/l_newUserChurnPush/Scripts/NewUserChurnPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var p = {
    pushHour: 12,
    maxLifecycleDays: 7,
    triggerStartDay: 3,
    opewaynum: "mjcdqzh1",
    taskType: "mjcdqzh01"
};
var NewUserChurnPushTrait = /** @class */ (function (_super) {
    __extends(NewUserChurnPushTrait, _super);
    function NewUserChurnPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = p;
        return _this;
    }
    NewUserChurnPushTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    NewUserChurnPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.visitRecord) && (this.localData.visitRecord = {});
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.maxLifecycleDays && (this._config.maxLifecycleDays = this._traitData.maxLifecycleDays);
            void 0 !== this._traitData.triggerStartDay && (this._config.triggerStartDay = this._traitData.triggerStartDay);
        }
    };
    NewUserChurnPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    NewUserChurnPushTrait.prototype.getUserModel = function () {
        return UserModel_1.default.getInstance();
    };
    NewUserChurnPushTrait.prototype.getActiveDays = function () {
        return this.getUserModel().getGameActiveDays() || 1;
    };
    NewUserChurnPushTrait.prototype.recordTodayVisit = function () {
        var t = this.getActiveDays();
        if (!this.localData.visitRecord[t]) {
            this.localData.visitRecord[t] = true;
            this.localData.visitRecord = this.localData.visitRecord;
        }
    };
    NewUserChurnPushTrait.prototype.checkFirstDayVisitSecondDayMissed = function () {
        var t = this.localData.visitRecord, e = true === t[1], i = true !== t[2];
        return e && i;
    };
    NewUserChurnPushTrait.prototype.isWithinLifecycle = function () {
        return this.getActiveDays() <= this._config.maxLifecycleDays;
    };
    NewUserChurnPushTrait.prototype.isBeforePushTime = function () {
        return new Date().getHours() < this._config.pushHour;
    };
    NewUserChurnPushTrait.prototype.canTriggerPush = function () {
        var t = this.getActiveDays();
        return !(!this.isWithinLifecycle() || t < this._config.triggerStartDay || !this.checkFirstDayVisitSecondDayMissed() || !this.isBeforePushTime());
    };
    NewUserChurnPushTrait.prototype.onPushMgr_init = function (t, e) {
        this.recordTodayVisit();
        this.checkAndTriggerPush();
        e();
    };
    NewUserChurnPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (i && i.opewaynum === this._config.opewaynum) {
            JumpManager_1.default.getInstance().jumpToGame();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    NewUserChurnPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.canTriggerPush()) {
            this.sendPush();
        }
        else {
            this.cancelPush();
        }
    };
    NewUserChurnPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        this.getActiveDays();
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        });
    };
    NewUserChurnPushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    NewUserChurnPushTrait.traitKey = "NewUserChurnPush";
    NewUserChurnPushTrait = __decorate([
        mj.trait,
        mj.class("NewUserChurnPushTrait")
    ], NewUserChurnPushTrait);
    return NewUserChurnPushTrait;
}(Trait_1.default));
exports.default = NewUserChurnPushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25ld1VzZXJDaHVyblB1c2gvU2NyaXB0cy9OZXdVc2VyQ2h1cm5QdXNoVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsK0VBQTBFO0FBQzFFLHNFQUFpRTtBQUNqRSxJQUFJLENBQUMsR0FBRztJQUNOLFFBQVEsRUFBRSxFQUFFO0lBQ1osZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixlQUFlLEVBQUUsQ0FBQztJQUNsQixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsV0FBVztDQUN0QixDQUFDO0FBR0Y7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUFvRkM7UUFuRkMsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUFtRmQsQ0FBQztJQWpGQyw0Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNuRixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xGLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFB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RkQsQUFvRkMsQ0FwRmtELGVBQUssR0FvRnZEO2tCQXBGb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBKdW1wTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvanVtcC9KdW1wTWFuYWdlcic7XG5pbXBvcnQgUHVzaE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3B1c2gvUHVzaE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbnZhciBwID0ge1xuICBwdXNoSG91cjogMTIsXG4gIG1heExpZmVjeWNsZURheXM6IDcsXG4gIHRyaWdnZXJTdGFydERheTogMyxcbiAgb3Bld2F5bnVtOiBcIm1qY2RxemgxXCIsXG4gIHRhc2tUeXBlOiBcIm1qY2RxemgwMVwiXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJOZXdVc2VyQ2h1cm5QdXNoVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1VzZXJDaHVyblB1c2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTmV3VXNlckNodXJuUHVzaFwiO1xuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudmlzaXRSZWNvcmQpICYmICh0aGlzLmxvY2FsRGF0YS52aXNpdFJlY29yZCA9IHt9KTtcbiAgICBpZiAodGhpcy5fdHJhaXREYXRhKSB7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5UaW1lICYmICh0aGlzLl9jb25maWcucHVzaEhvdXIgPSB0aGlzLl90cmFpdERhdGEuVGltZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSAmJiAodGhpcy5fY29uZmlnLm9wZXdheW51bSA9IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUgJiYgKHRoaXMuX2NvbmZpZy50YXNrVHlwZSA9IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEubWF4TGlmZWN5Y2xlRGF5cyAmJiAodGhpcy5fY29uZmlnLm1heExpZmVjeWNsZURheXMgPSB0aGlzLl90cmFpdERhdGEubWF4TGlmZWN5Y2xlRGF5cyk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS50cmlnZ2VyU3RhcnREYXkgJiYgKHRoaXMuX2NvbmZpZy50cmlnZ2VyU3RhcnREYXkgPSB0aGlzLl90cmFpdERhdGEudHJpZ2dlclN0YXJ0RGF5KTtcbiAgICB9XG4gIH1cbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgZ2V0VXNlck1vZGVsKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBnZXRBY3RpdmVEYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJNb2RlbCgpLmdldEdhbWVBY3RpdmVEYXlzKCkgfHwgMTtcbiAgfVxuICByZWNvcmRUb2RheVZpc2l0KCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRBY3RpdmVEYXlzKCk7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS52aXNpdFJlY29yZFt0XSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEudmlzaXRSZWNvcmRbdF0gPSB0cnVlO1xuICAgICAgdGhpcy5sb2NhbERhdGEudmlzaXRSZWNvcmQgPSB0aGlzLmxvY2FsRGF0YS52aXNpdFJlY29yZDtcbiAgICB9XG4gIH1cbiAgY2hlY2tGaXJzdERheVZpc2l0U2Vjb25kRGF5TWlzc2VkKCkge1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEudmlzaXRSZWNvcmQsXG4gICAgICBlID0gdHJ1ZSA9PT0gdFsxXSxcbiAgICAgIGkgPSB0cnVlICE9PSB0WzJdO1xuICAgIHJldHVybiBlICYmIGk7XG4gIH1cbiAgaXNXaXRoaW5MaWZlY3ljbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZlRGF5cygpIDw9IHRoaXMuX2NvbmZpZy5tYXhMaWZlY3ljbGVEYXlzO1xuICB9XG4gIGlzQmVmb3JlUHVzaFRpbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA8IHRoaXMuX2NvbmZpZy5wdXNoSG91cjtcbiAgfVxuICBjYW5UcmlnZ2VyUHVzaCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0QWN0aXZlRGF5cygpO1xuICAgIHJldHVybiAhKCF0aGlzLmlzV2l0aGluTGlmZWN5Y2xlKCkgfHwgdCA8IHRoaXMuX2NvbmZpZy50cmlnZ2VyU3RhcnREYXkgfHwgIXRoaXMuY2hlY2tGaXJzdERheVZpc2l0U2Vjb25kRGF5TWlzc2VkKCkgfHwgIXRoaXMuaXNCZWZvcmVQdXNoVGltZSgpKTtcbiAgfVxuICBvblB1c2hNZ3JfaW5pdCh0LCBlKSB7XG4gICAgdGhpcy5yZWNvcmRUb2RheVZpc2l0KCk7XG4gICAgdGhpcy5jaGVja0FuZFRyaWdnZXJQdXNoKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgdmFyIGkgPSBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE9wZW5BcHBPcGV3YXkoKTtcbiAgICBpZiAoaSAmJiBpLm9wZXdheW51bSA9PT0gdGhpcy5fY29uZmlnLm9wZXdheW51bSkge1xuICAgICAgSnVtcE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5qdW1wVG9HYW1lKCk7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGNoZWNrQW5kVHJpZ2dlclB1c2goKSB7XG4gICAgaWYgKHRoaXMuY2FuVHJpZ2dlclB1c2goKSkge1xuICAgICAgdGhpcy5zZW5kUHVzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbmNlbFB1c2goKTtcbiAgICB9XG4gIH1cbiAgc2VuZFB1c2goKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldENvbmZpZygpLFxuICAgICAgZSA9IFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0UHVzaFRpbWVzdGFtcCh0LnB1c2hIb3VyKTtcbiAgICB0aGlzLmdldEFjdGl2ZURheXMoKTtcbiAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNlbmRHYW1lUHVzaCh7XG4gICAgICBvcGV3YXludW06IHQub3Bld2F5bnVtLFxuICAgICAgdGFza1R5cGU6IHQudGFza1R5cGUsXG4gICAgICBzZW5kVGltZTogZVxuICAgIH0pO1xuICB9XG4gIGNhbmNlbFB1c2goKSB7XG4gICAgUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZW5kR2FtZVB1c2hSZW1vdmVkKHRoaXMuX2NvbmZpZy5vcGV3YXludW0pO1xuICB9XG59Il19
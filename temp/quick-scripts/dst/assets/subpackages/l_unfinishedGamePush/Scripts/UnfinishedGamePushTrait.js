
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_unfinishedGamePush/Scripts/UnfinishedGamePushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27d30BUhopJspvaVWSciIuR', 'UnfinishedGamePushTrait');
// subpackages/l_unfinishedGamePush/Scripts/UnfinishedGamePushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var f = {
    pushHour: 18,
    noVisitMinutes: 30,
    opewaynum: "mjunfinished1",
    taskType: "mjunfinished01"
};
var UnfinishedGamePushTrait = /** @class */ (function (_super) {
    __extends(UnfinishedGamePushTrait, _super);
    function UnfinishedGamePushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = f;
        return _this;
    }
    UnfinishedGamePushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.noVisitMinutes && (this._config.noVisitMinutes = this._traitData.noVisitMinutes);
        }
    };
    UnfinishedGamePushTrait.prototype.getConfig = function () {
        return this._config;
    };
    UnfinishedGamePushTrait.prototype.getUserModel = function () {
        return UserModel_1.default.getInstance();
    };
    UnfinishedGamePushTrait.prototype.isToday = function (e) {
        if (!e || e <= 0)
            return false;
        var t = new Date(), r = new Date(e);
        return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && t.getDate() === r.getDate();
    };
    UnfinishedGamePushTrait.prototype.hasNormalUnfinishedGame = function () {
        var e = this.getUserModel().normalData, t = e.getLevelData();
        if (!t || "" === t)
            return false;
        var r = e.getStartGameTime();
        return this.isToday(r);
    };
    UnfinishedGamePushTrait.prototype.hasTravelUnfinishedGame = function () {
        var e = this.getUserModel().travelData, t = e.getLevelData();
        if (!t || "" === t)
            return false;
        var r = e.getStartGameTime();
        return this.isToday(r);
    };
    UnfinishedGamePushTrait.prototype.checkTodayUnfinishedGame = function (e) {
        var t = e !== GameTypeEnums_1.MjGameType.Normal && this.hasNormalUnfinishedGame(), r = e !== GameTypeEnums_1.MjGameType.Travel && this.hasTravelUnfinishedGame();
        return {
            hasUnfinished: t || r,
            priorityNormal: t
        };
    };
    UnfinishedGamePushTrait.prototype.isBeforePushTime = function () {
        return new Date().getHours() < this._config.pushHour;
    };
    UnfinishedGamePushTrait.prototype.hasVisitedWithinNoVisitWindow = function () {
        var e = this.getUserModel().getAppStartTime();
        if (!e || e <= 0)
            return false;
        var t = new Date(), r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), this._config.pushHour, 0, 0, 0);
        return e >= r.getTime() - 60000 * this._config.noVisitMinutes && e <= r.getTime();
    };
    UnfinishedGamePushTrait.prototype.canSendPush = function () {
        if (!this.isBeforePushTime())
            return {
                canSend: false,
                priorityNormal: false
            };
        var e = this.checkTodayUnfinishedGame();
        return e.hasUnfinished ? this.hasVisitedWithinNoVisitWindow() ? {
            canSend: false,
            priorityNormal: false
        } : {
            canSend: true,
            priorityNormal: e.priorityNormal
        } : {
            canSend: false,
            priorityNormal: false
        };
    };
    UnfinishedGamePushTrait.prototype.onIptSetLv_selEnterAnim = function (e, t) {
        var r = this.getUserModel().getCurrentGameType();
        if (r === GameTypeEnums_1.MjGameType.Normal || r === GameTypeEnums_1.MjGameType.Travel) {
            var i = __read(e.args, 2);
            i[0], i[1];
            this.checkAndTriggerPush();
            t();
        }
        else
            t();
    };
    UnfinishedGamePushTrait.prototype.onGsListener_onGameEnd = function (e, t) {
        var r = this.getUserModel().getCurrentGameType();
        if (r === GameTypeEnums_1.MjGameType.Normal || r === GameTypeEnums_1.MjGameType.Travel) {
            if (this.checkTodayUnfinishedGame(r).hasUnfinished) {
                this.checkAndTriggerPush();
            }
            else {
                this.cancelPush();
            }
            t();
        }
        else
            t();
    };
    UnfinishedGamePushTrait.prototype.onLoginM_enterGame = function (e, t) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            var i = this.checkTodayUnfinishedGame();
            if (i.hasUnfinished) {
                if (i.priorityNormal) {
                    JumpManager_1.default.getInstance().jumpToGame();
                }
                else {
                    JumpManager_1.default.getInstance().jumpToTravelGame();
                }
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
                return;
            }
        }
        t();
    };
    UnfinishedGamePushTrait.prototype.checkAndTriggerPush = function () {
        this.canSendPush().canSend && this.sendPush();
    };
    UnfinishedGamePushTrait.prototype.sendPush = function () {
        var e = this.getConfig(), t = PushManager_1.default.getInstance().getPushTimestamp(e.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: e.opewaynum,
            taskType: e.taskType,
            sendTime: t
        }, {
            keyNum: "unfinished"
        });
    };
    UnfinishedGamePushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    UnfinishedGamePushTrait.traitKey = "UnfinishedGamePush";
    UnfinishedGamePushTrait = __decorate([
        mj.trait,
        mj.class("UnfinishedGamePushTrait")
    ], UnfinishedGamePushTrait);
    return UnfinishedGamePushTrait;
}(Trait_1.default));
exports.default = UnfinishedGamePushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VuZmluaXNoZWRHYW1lUHVzaC9TY3JpcHRzL1VuZmluaXNoZWRHYW1lUHVzaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSwrRUFBMEU7QUFDMUUsc0VBQWlFO0FBQ2pFLElBQUksQ0FBQyxHQUFHO0lBQ04sUUFBUSxFQUFFLEVBQUU7SUFDWixjQUFjLEVBQUUsRUFBRTtJQUNsQixTQUFTLEVBQUUsZUFBZTtJQUMxQixRQUFRLEVBQUUsZ0JBQWdCO0NBQzNCLENBQUM7QUFHRjtJQUFxRCwyQ0FBSztJQUExRDtRQUFBLHFFQWlJQztRQWhJQyxhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQWdJZCxDQUFDO0lBOUhDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEYsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNGLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsRyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsSUFB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LE1BQU07aUJBQzNDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7U0FDRjtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHFEQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUN0QixDQUFDLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNwQixRQUFRLEVBQUUsQ0FBQztTQUNaLEVBQUU7WUFDRCxNQUFNLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNENBQVUsR0FBVjtRQUNFLHFCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBOUhNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFGcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQWlJM0M7SUFBRCw4QkFBQztDQWpJRCxBQWlJQyxDQWpJb0QsZUFBSyxHQWlJekQ7a0JBaklvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSnVtcE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2p1bXAvSnVtcE1hbmFnZXInO1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9wdXNoL1B1c2hNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG52YXIgZiA9IHtcbiAgcHVzaEhvdXI6IDE4LFxuICBub1Zpc2l0TWludXRlczogMzAsXG4gIG9wZXdheW51bTogXCJtanVuZmluaXNoZWQxXCIsXG4gIHRhc2tUeXBlOiBcIm1qdW5maW5pc2hlZDAxXCJcbn07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlVuZmluaXNoZWRHYW1lUHVzaFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmZpbmlzaGVkR2FtZVB1c2hUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IGY7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVW5maW5pc2hlZEdhbWVQdXNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5fdHJhaXREYXRhKSB7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5UaW1lICYmICh0aGlzLl9jb25maWcucHVzaEhvdXIgPSB0aGlzLl90cmFpdERhdGEuVGltZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSAmJiAodGhpcy5fY29uZmlnLm9wZXdheW51bSA9IHRoaXMuX3RyYWl0RGF0YS5QbGFuQ29kZSk7XG4gICAgICB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUgJiYgKHRoaXMuX2NvbmZpZy50YXNrVHlwZSA9IHRoaXMuX3RyYWl0RGF0YS5TdHJhdGVneUNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEubm9WaXNpdE1pbnV0ZXMgJiYgKHRoaXMuX2NvbmZpZy5ub1Zpc2l0TWludXRlcyA9IHRoaXMuX3RyYWl0RGF0YS5ub1Zpc2l0TWludXRlcyk7XG4gICAgfVxuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIGdldFVzZXJNb2RlbCgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgaXNUb2RheShlKSB7XG4gICAgaWYgKCFlIHx8IGUgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0ID0gbmV3IERhdGUoKSxcbiAgICAgIHIgPSBuZXcgRGF0ZShlKTtcbiAgICByZXR1cm4gdC5nZXRGdWxsWWVhcigpID09PSByLmdldEZ1bGxZZWFyKCkgJiYgdC5nZXRNb250aCgpID09PSByLmdldE1vbnRoKCkgJiYgdC5nZXREYXRlKCkgPT09IHIuZ2V0RGF0ZSgpO1xuICB9XG4gIGhhc05vcm1hbFVuZmluaXNoZWRHYW1lKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRVc2VyTW9kZWwoKS5ub3JtYWxEYXRhLFxuICAgICAgdCA9IGUuZ2V0TGV2ZWxEYXRhKCk7XG4gICAgaWYgKCF0IHx8IFwiXCIgPT09IHQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgciA9IGUuZ2V0U3RhcnRHYW1lVGltZSgpO1xuICAgIHJldHVybiB0aGlzLmlzVG9kYXkocik7XG4gIH1cbiAgaGFzVHJhdmVsVW5maW5pc2hlZEdhbWUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFVzZXJNb2RlbCgpLnRyYXZlbERhdGEsXG4gICAgICB0ID0gZS5nZXRMZXZlbERhdGEoKTtcbiAgICBpZiAoIXQgfHwgXCJcIiA9PT0gdCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByID0gZS5nZXRTdGFydEdhbWVUaW1lKCk7XG4gICAgcmV0dXJuIHRoaXMuaXNUb2RheShyKTtcbiAgfVxuICBjaGVja1RvZGF5VW5maW5pc2hlZEdhbWUoZSkge1xuICAgIHZhciB0ID0gZSAhPT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgdGhpcy5oYXNOb3JtYWxVbmZpbmlzaGVkR2FtZSgpLFxuICAgICAgciA9IGUgIT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIHRoaXMuaGFzVHJhdmVsVW5maW5pc2hlZEdhbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzVW5maW5pc2hlZDogdCB8fCByLFxuICAgICAgcHJpb3JpdHlOb3JtYWw6IHRcbiAgICB9O1xuICB9XG4gIGlzQmVmb3JlUHVzaFRpbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA8IHRoaXMuX2NvbmZpZy5wdXNoSG91cjtcbiAgfVxuICBoYXNWaXNpdGVkV2l0aGluTm9WaXNpdFdpbmRvdygpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0VXNlck1vZGVsKCkuZ2V0QXBwU3RhcnRUaW1lKCk7XG4gICAgaWYgKCFlIHx8IGUgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0ID0gbmV3IERhdGUoKSxcbiAgICAgIHIgPSBuZXcgRGF0ZSh0LmdldEZ1bGxZZWFyKCksIHQuZ2V0TW9udGgoKSwgdC5nZXREYXRlKCksIHRoaXMuX2NvbmZpZy5wdXNoSG91ciwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGUgPj0gci5nZXRUaW1lKCkgLSA2MDAwMCAqIHRoaXMuX2NvbmZpZy5ub1Zpc2l0TWludXRlcyAmJiBlIDw9IHIuZ2V0VGltZSgpO1xuICB9XG4gIGNhblNlbmRQdXNoKCkge1xuICAgIGlmICghdGhpcy5pc0JlZm9yZVB1c2hUaW1lKCkpIHJldHVybiB7XG4gICAgICBjYW5TZW5kOiBmYWxzZSxcbiAgICAgIHByaW9yaXR5Tm9ybWFsOiBmYWxzZVxuICAgIH07XG4gICAgdmFyIGUgPSB0aGlzLmNoZWNrVG9kYXlVbmZpbmlzaGVkR2FtZSgpO1xuICAgIHJldHVybiBlLmhhc1VuZmluaXNoZWQgPyB0aGlzLmhhc1Zpc2l0ZWRXaXRoaW5Ob1Zpc2l0V2luZG93KCkgPyB7XG4gICAgICBjYW5TZW5kOiBmYWxzZSxcbiAgICAgIHByaW9yaXR5Tm9ybWFsOiBmYWxzZVxuICAgIH0gOiB7XG4gICAgICBjYW5TZW5kOiB0cnVlLFxuICAgICAgcHJpb3JpdHlOb3JtYWw6IGUucHJpb3JpdHlOb3JtYWxcbiAgICB9IDoge1xuICAgICAgY2FuU2VuZDogZmFsc2UsXG4gICAgICBwcmlvcml0eU5vcm1hbDogZmFsc2VcbiAgICB9O1xuICB9XG4gIG9uSXB0U2V0THZfc2VsRW50ZXJBbmltKGUsIHQpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0VXNlck1vZGVsKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKHIgPT09IE1qR2FtZVR5cGUuTm9ybWFsIHx8IHIgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICB2YXIgaSA9IF9fcmVhZChlLmFyZ3MsIDIpO1xuICAgICAgaVswXSwgaVsxXTtcbiAgICAgIHRoaXMuY2hlY2tBbmRUcmlnZ2VyUHVzaCgpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uR2FtZUVuZChlLCB0KSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldFVzZXJNb2RlbCgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGlmIChyID09PSBNakdhbWVUeXBlLk5vcm1hbCB8fCByID09PSBNakdhbWVUeXBlLlRyYXZlbCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tUb2RheVVuZmluaXNoZWRHYW1lKHIpLmhhc1VuZmluaXNoZWQpIHtcbiAgICAgICAgdGhpcy5jaGVja0FuZFRyaWdnZXJQdXNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbmNlbFB1c2goKTtcbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZShlLCB0KSB7XG4gICAgdmFyIHIgPSBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE9wZW5BcHBPcGV3YXkoKTtcbiAgICBpZiAociAmJiByLm9wZXdheW51bSA9PT0gdGhpcy5fY29uZmlnLm9wZXdheW51bSkge1xuICAgICAgdmFyIGkgPSB0aGlzLmNoZWNrVG9kYXlVbmZpbmlzaGVkR2FtZSgpO1xuICAgICAgaWYgKGkuaGFzVW5maW5pc2hlZCkge1xuICAgICAgICBpZiAoaS5wcmlvcml0eU5vcm1hbCkge1xuICAgICAgICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvR2FtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvVHJhdmVsR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHQoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBjaGVja0FuZFRyaWdnZXJQdXNoKCkge1xuICAgIHRoaXMuY2FuU2VuZFB1c2goKS5jYW5TZW5kICYmIHRoaXMuc2VuZFB1c2goKTtcbiAgfVxuICBzZW5kUHVzaCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q29uZmlnKCksXG4gICAgICB0ID0gUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRQdXNoVGltZXN0YW1wKGUucHVzaEhvdXIpO1xuICAgIFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2VuZEdhbWVQdXNoKHtcbiAgICAgIG9wZXdheW51bTogZS5vcGV3YXludW0sXG4gICAgICB0YXNrVHlwZTogZS50YXNrVHlwZSxcbiAgICAgIHNlbmRUaW1lOiB0XG4gICAgfSwge1xuICAgICAga2V5TnVtOiBcInVuZmluaXNoZWRcIlxuICAgIH0pO1xuICB9XG4gIGNhbmNlbFB1c2goKSB7XG4gICAgUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZW5kR2FtZVB1c2hSZW1vdmVkKHRoaXMuX2NvbmZpZy5vcGV3YXludW0pO1xuICB9XG59Il19
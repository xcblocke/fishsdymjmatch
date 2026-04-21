
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_firstHardLevel/Scripts/FirstHardLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29fe55tChJEEo+dgdmVQcWh', 'FirstHardLevelTrait');
// subpackages/l_firstHardLevel/Scripts/FirstHardLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstHardLevelTrait = /** @class */ (function (_super) {
    __extends(FirstHardLevelTrait, _super);
    function FirstHardLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._checkTime = 0;
        return _this;
    }
    FirstHardLevelTrait_1 = FirstHardLevelTrait;
    FirstHardLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.lastCheckDate) && (this.localData.lastCheckDate = "");
        this.isLocalEmpty(this.localData.remainingDelayRounds) && (this.localData.remainingDelayRounds = 0);
        this.isLocalEmpty(this.localData.dailyChecked) && (this.localData.dailyChecked = false);
        this.isLocalEmpty(this.localData.lastHardLevelID) && (this.localData.lastHardLevelID = 0);
        this.isLocalEmpty(this.localData.pendingForceAfterLevel) && (this.localData.pendingForceAfterLevel = 0);
        this.isLocalEmpty(this.localData.lastLoginTime) && (this.localData.lastLoginTime = 0);
        this._checkTime = 3600000 * this._traitData.checkTime || FirstHardLevelTrait_1.HOURS_48_MS;
        this.checkDailyFirst();
    };
    FirstHardLevelTrait.prototype.getTodayDateString = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    FirstHardLevelTrait.prototype.isHardLevelInternal = function (t) {
        return this.localData.lastHardLevelID === t;
    };
    FirstHardLevelTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    FirstHardLevelTrait.prototype.checkDailyFirst = function () {
        var t = UserModel_1.default.getInstance(), a = this.getTodayDateString();
        if (a !== this.localData.lastCheckDate) {
            this.localData.dailyChecked = false;
            this.localData.lastCheckDate = a;
            this.localData.lastCheckDate = this.localData.lastCheckDate;
        }
        if (!this.localData.dailyChecked) {
            this.localData.dailyChecked = true;
            this.localData.dailyChecked = this.localData.dailyChecked;
            var e = t.getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), i = e.getLevelId(), l = Date.now(), r = this.localData.lastLoginTime || l, o = r > 0 ? l - r : 0;
            this.localData.lastLoginTime = l;
            this.localData.lastLoginTime = this.localData.lastLoginTime;
            if (o >= this._checkTime) {
                this.localData.remainingDelayRounds = 3;
                this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
            }
            else {
                if (1 !== e.getDieResult()) {
                    this.localData.remainingDelayRounds = 2;
                    this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
                }
                else {
                    this.localData.remainingDelayRounds = 0;
                    this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
                }
            }
            if (0 === this.localData.remainingDelayRounds) {
                var s = e.getLevelData(), h = e.getOriginalLevelData();
                if (s && h)
                    if (this.isHardLevelInternal(i))
                        ;
                    else {
                        this.localData.pendingForceAfterLevel = i;
                        this.localData.pendingForceAfterLevel = this.localData.pendingForceAfterLevel;
                    }
            }
        }
    };
    FirstHardLevelTrait.prototype.onExtractTool_isHardUI = function (t, a) {
        if (this.checkGameMode()) {
            var e = t.args[0];
            if (this.localData.remainingDelayRounds > 0)
                a({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: false
                });
            else {
                var i = this.localData.pendingForceAfterLevel || 0;
                if (i > 0 && e > i) {
                    this.localData.pendingForceAfterLevel = 0;
                    this.localData.pendingForceAfterLevel = this.localData.pendingForceAfterLevel;
                    this.localData.lastHardLevelID = e;
                    this.localData.lastHardLevelID = this.localData.lastHardLevelID;
                    a({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: true
                    });
                }
                else
                    a();
            }
        }
        else
            a();
    };
    FirstHardLevelTrait.prototype.onExtractTool_isExpertUI = function (t, a) {
        if (this.checkGameMode()) {
            t.args[0];
            if (this.localData.remainingDelayRounds > 0) {
                a({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: false
                });
            }
            else {
                a();
            }
        }
        else
            a();
    };
    FirstHardLevelTrait.prototype.onHardLvNew_getLastId = function (t, a) {
        if (this.checkGameMode()) {
            var e = t.beforReturnVal || 0, i = this.localData.lastHardLevelID || 0, l = Math.max(e, i);
            if (l > i) {
                this.localData.lastHardLevelID = l;
                this.localData.lastHardLevelID = this.localData.lastHardLevelID;
            }
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: l
            });
        }
        else
            a();
    };
    FirstHardLevelTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, a) {
        if (this.checkGameMode()) {
            if (this.localData.remainingDelayRounds > 0) {
                this.localData.remainingDelayRounds--;
                this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
            }
            a();
        }
        else
            a();
    };
    var FirstHardLevelTrait_1;
    FirstHardLevelTrait.traitKey = "FirstHardLevel";
    FirstHardLevelTrait.HOURS_48_MS = 172800000;
    FirstHardLevelTrait = FirstHardLevelTrait_1 = __decorate([
        mj.trait,
        mj.class("FirstHardLevelTrait")
    ], FirstHardLevelTrait);
    return FirstHardLevelTrait;
}(ExtractTrait_1.default));
exports.default = FirstHardLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpcnN0SGFyZExldmVsL1NjcmlwdHMvRmlyc3RIYXJkTGV2ZWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELHdGQUFvRjtBQUNwRiw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBK0hDO1FBOUhDLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQThIakIsQ0FBQzs0QkEvSG9CLG1CQUFtQjtJQUl0QyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxDQUFD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QUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBK0h2QztJQUFELDBCQUFDO0NBL0hELEFBK0hDLENBL0hnRCxzQkFBWSxHQStINUQ7a0JBL0hvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmlyc3RIYXJkTGV2ZWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RIYXJkTGV2ZWxUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIF9jaGVja1RpbWUgPSAwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZpcnN0SGFyZExldmVsXCI7XG4gIHN0YXRpYyBIT1VSU180OF9NUyA9IDE3MjgwMDAwMDtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RDaGVja0RhdGUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0Q2hlY2tEYXRlID0gXCJcIik7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucmVtYWluaW5nRGVsYXlSb3VuZHMpICYmICh0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcyA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmRhaWx5Q2hlY2tlZCkgJiYgKHRoaXMubG9jYWxEYXRhLmRhaWx5Q2hlY2tlZCA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5wZW5kaW5nRm9yY2VBZnRlckxldmVsKSAmJiAodGhpcy5sb2NhbERhdGEucGVuZGluZ0ZvcmNlQWZ0ZXJMZXZlbCA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpblRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0TG9naW5UaW1lID0gMCk7XG4gICAgdGhpcy5fY2hlY2tUaW1lID0gMzYwMDAwMCAqIHRoaXMuX3RyYWl0RGF0YS5jaGVja1RpbWUgfHwgRmlyc3RIYXJkTGV2ZWxUcmFpdC5IT1VSU180OF9NUztcbiAgICB0aGlzLmNoZWNrRGFpbHlGaXJzdCgpO1xuICB9XG4gIGdldFRvZGF5RGF0ZVN0cmluZygpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgU3RyaW5nKHQuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKSArIFwiLVwiICsgU3RyaW5nKHQuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cbiAgaXNIYXJkTGV2ZWxJbnRlcm5hbCh0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3RIYXJkTGV2ZWxJRCA9PT0gdDtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBjaGVja0RhaWx5Rmlyc3QoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGEgPSB0aGlzLmdldFRvZGF5RGF0ZVN0cmluZygpO1xuICAgIGlmIChhICE9PSB0aGlzLmxvY2FsRGF0YS5sYXN0Q2hlY2tEYXRlKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kYWlseUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RDaGVja0RhdGUgPSBhO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdENoZWNrRGF0ZSA9IHRoaXMubG9jYWxEYXRhLmxhc3RDaGVja0RhdGU7XG4gICAgfVxuICAgIGlmICghdGhpcy5sb2NhbERhdGEuZGFpbHlDaGVja2VkKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kYWlseUNoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZGFpbHlDaGVja2VkID0gdGhpcy5sb2NhbERhdGEuZGFpbHlDaGVja2VkO1xuICAgICAgdmFyIGUgPSB0LmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCksXG4gICAgICAgIGkgPSBlLmdldExldmVsSWQoKSxcbiAgICAgICAgbCA9IERhdGUubm93KCksXG4gICAgICAgIHIgPSB0aGlzLmxvY2FsRGF0YS5sYXN0TG9naW5UaW1lIHx8IGwsXG4gICAgICAgIG8gPSByID4gMCA/IGwgLSByIDogMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpblRpbWUgPSBsO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdExvZ2luVGltZSA9IHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpblRpbWU7XG4gICAgICBpZiAobyA+PSB0aGlzLl9jaGVja1RpbWUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucmVtYWluaW5nRGVsYXlSb3VuZHMgPSAzO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcyA9IHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ0RlbGF5Um91bmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKDEgIT09IGUuZ2V0RGllUmVzdWx0KCkpIHtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcyA9IDI7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucmVtYWluaW5nRGVsYXlSb3VuZHMgPSB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcyA9IDA7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucmVtYWluaW5nRGVsYXlSb3VuZHMgPSB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKDAgPT09IHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ0RlbGF5Um91bmRzKSB7XG4gICAgICAgIHZhciBzID0gZS5nZXRMZXZlbERhdGEoKSxcbiAgICAgICAgICBoID0gZS5nZXRPcmlnaW5hbExldmVsRGF0YSgpO1xuICAgICAgICBpZiAocyAmJiBoKSBpZiAodGhpcy5pc0hhcmRMZXZlbEludGVybmFsKGkpKSA7ZWxzZSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucGVuZGluZ0ZvcmNlQWZ0ZXJMZXZlbCA9IGk7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucGVuZGluZ0ZvcmNlQWZ0ZXJMZXZlbCA9IHRoaXMubG9jYWxEYXRhLnBlbmRpbmdGb3JjZUFmdGVyTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc0hhcmRVSSh0LCBhKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgZSA9IHQuYXJnc1swXTtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcyA+IDApIGEoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMubG9jYWxEYXRhLnBlbmRpbmdGb3JjZUFmdGVyTGV2ZWwgfHwgMDtcbiAgICAgICAgaWYgKGkgPiAwICYmIGUgPiBpKSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucGVuZGluZ0ZvcmNlQWZ0ZXJMZXZlbCA9IDA7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucGVuZGluZ0ZvcmNlQWZ0ZXJMZXZlbCA9IHRoaXMubG9jYWxEYXRhLnBlbmRpbmdGb3JjZUFmdGVyTGV2ZWw7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEhhcmRMZXZlbElEID0gZTtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQgPSB0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQ7XG4gICAgICAgICAgYSh7XG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBhKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGEoKTtcbiAgfVxuICBvbkV4dHJhY3RUb29sX2lzRXhwZXJ0VUkodCwgYSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdC5hcmdzWzBdO1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ0RlbGF5Um91bmRzID4gMCkge1xuICAgICAgICBhKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBhKCk7XG4gIH1cbiAgb25IYXJkTHZOZXdfZ2V0TGFzdElkKHQsIGEpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBlID0gdC5iZWZvclJldHVyblZhbCB8fCAwLFxuICAgICAgICBpID0gdGhpcy5sb2NhbERhdGEubGFzdEhhcmRMZXZlbElEIHx8IDAsXG4gICAgICAgIGwgPSBNYXRoLm1heChlLCBpKTtcbiAgICAgIGlmIChsID4gaSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQgPSBsO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQgPSB0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQ7XG4gICAgICB9XG4gICAgICBhKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBhKCk7XG4gIH1cbiAgb25CZWZvcmVXaW5CaHZfZG9PdGhMZ2ModCwgYSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ0RlbGF5Um91bmRzID4gMCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcy0tO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5yZW1haW5pbmdEZWxheVJvdW5kcyA9IHRoaXMubG9jYWxEYXRhLnJlbWFpbmluZ0RlbGF5Um91bmRzO1xuICAgICAgfVxuICAgICAgYSgpO1xuICAgIH0gZWxzZSBhKCk7XG4gIH1cbn0iXX0=
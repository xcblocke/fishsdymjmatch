
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_firstGameTypeSkipInter/Scripts/FirstGameTypeSkipInterTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ebe7ygbFdOiZswqS5G4B71', 'FirstGameTypeSkipInterTrait');
// subpackages/l_firstGameTypeSkipInter/Scripts/FirstGameTypeSkipInterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FirstGameTypeSkipInterTrait = /** @class */ (function (_super) {
    __extends(FirstGameTypeSkipInterTrait, _super);
    function FirstGameTypeSkipInterTrait() {
        var _this = _super.call(this, arguments) || this;
        _this._mode = "coldStart";
        _this._skipCount = 1;
        _this._coldStartUsageCount = null;
        var _e = {};
        _e[GameTypeEnums_1.MjGameType.Normal] = 0;
        _e[GameTypeEnums_1.MjGameType.DailyChallenge] = 0;
        _e[GameTypeEnums_1.MjGameType.Travel] = 0;
        _e[GameTypeEnums_1.MjGameType.Tile2Normal] = 0;
        _this._coldStartUsageCount = _e;
        return _this;
    }
    FirstGameTypeSkipInterTrait.prototype.onLoad = function () {
        var a, r;
        _super.prototype.onLoad.call(this);
        this._mode = (null === (a = this._traitData) || void 0 === a ? void 0 : a.mode) || "coldStart";
        this._skipCount = (null === (r = this._traitData) || void 0 === r ? void 0 : r.skipCount) || 1;
        var _e = {};
        _e[GameTypeEnums_1.MjGameType.Normal] = 0;
        _e[GameTypeEnums_1.MjGameType.DailyChallenge] = 0;
        _e[GameTypeEnums_1.MjGameType.Travel] = 0;
        _e[GameTypeEnums_1.MjGameType.Tile2Normal] = 0;
        if ("coldStart" === this._mode)
            this._coldStartUsageCount = _e;
        else {
            this.initDailyUsageData();
            this.checkAndResetDaily();
            this.getDailyUsageData();
        }
    };
    FirstGameTypeSkipInterTrait.prototype.initDailyUsageData = function () {
        var t;
        this.localData.dailyUsageData || (this.localData.dailyUsageData = {
            lastResetDate: this.getTodayDateString(),
            usageCount: (t = {}, t[GameTypeEnums_1.MjGameType.Normal] = 0, t[GameTypeEnums_1.MjGameType.DailyChallenge] = 0, t[GameTypeEnums_1.MjGameType.Travel] = 0, t[GameTypeEnums_1.MjGameType.Tile2Normal] = 0, t)
        });
    };
    FirstGameTypeSkipInterTrait.prototype.getDailyUsageData = function () {
        return this.localData.dailyUsageData;
    };
    FirstGameTypeSkipInterTrait.prototype.saveDailyUsageData = function (t) {
        this.localData.dailyUsageData = t;
    };
    FirstGameTypeSkipInterTrait.prototype.checkAndResetDaily = function () {
        var e = this.getTodayDateString(), a = this.getDailyUsageData();
        var _t = {};
        _t[GameTypeEnums_1.MjGameType.Normal] = 0;
        _t[GameTypeEnums_1.MjGameType.DailyChallenge] = 0;
        _t[GameTypeEnums_1.MjGameType.Travel] = 0;
        _t[GameTypeEnums_1.MjGameType.Tile2Normal] = 0;
        if (a.lastResetDate !== e) {
            a.lastResetDate = e;
            a.usageCount = _t;
            this.saveDailyUsageData(a);
        }
    };
    FirstGameTypeSkipInterTrait.prototype.getTodayDateString = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    FirstGameTypeSkipInterTrait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    FirstGameTypeSkipInterTrait.prototype.shouldSkipInterAd = function (t) {
        if (t !== GameTypeEnums_1.MjGameType.Normal && t !== GameTypeEnums_1.MjGameType.DailyChallenge && t !== GameTypeEnums_1.MjGameType.Travel && t !== GameTypeEnums_1.MjGameType.Tile2Normal)
            return false;
        if ("coldStart" === this._mode)
            return this._coldStartUsageCount[t] < this._skipCount;
        this.checkAndResetDaily();
        return this.getDailyUsageData().usageCount[t] < this._skipCount;
    };
    FirstGameTypeSkipInterTrait.prototype.markAsUsed = function (t) {
        if ("coldStart" === this._mode)
            this._coldStartUsageCount[t]++;
        else {
            var e = this.getDailyUsageData();
            e.usageCount[t]++;
            this.saveDailyUsageData(e);
        }
    };
    FirstGameTypeSkipInterTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var a = this.getCurrentGameType();
        if (this.shouldSkipInterAd(a)) {
            this.markAsUsed(a);
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    FirstGameTypeSkipInterTrait.traitKey = "FirstGameTypeSkipInter";
    FirstGameTypeSkipInterTrait = __decorate([
        mj.trait,
        mj.class("FirstGameTypeSkipInterTrait")
    ], FirstGameTypeSkipInterTrait);
    return FirstGameTypeSkipInterTrait;
}(Trait_1.default));
exports.default = FirstGameTypeSkipInterTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpcnN0R2FtZVR5cGVTa2lwSW50ZXIvU2NyaXB0cy9GaXJzdEdhbWVUeXBlU2tpcEludGVyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUdwRjtJQUF5RCwrQ0FBSztJQUs1RDtRQUFBLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBT2pCO1FBWkQsV0FBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUkxQixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsMEJBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLDBCQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsMEJBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsS0FBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQzs7SUFDakMsQ0FBQztJQUNELDRDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUM7UUFDL0YsSUFB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QUM1QjtJQUNILENBQUM7SUFDRCx3REFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQW5GTSxvQ0FBUSxHQUFHLHdCQUF3QixDQUFDO0lBSnhCLDJCQUEyQjtRQUYvQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7T0FDbkIsMkJBQTJCLENBd0YvQztJQUFELGtDQUFDO0NBeEZELEFBd0ZDLENBeEZ3RCxlQUFLLEdBd0Y3RDtrQkF4Rm9CLDJCQUEyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZpcnN0R2FtZVR5cGVTa2lwSW50ZXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RHYW1lVHlwZVNraXBJbnRlclRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfbW9kZSA9IFwiY29sZFN0YXJ0XCI7XG4gIF9za2lwQ291bnQgPSAxO1xuICBfY29sZFN0YXJ0VXNhZ2VDb3VudCA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmlyc3RHYW1lVHlwZVNraXBJbnRlclwiO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihhcmd1bWVudHMpO1xuICAgIHZhciBfZSA9IHt9O1xuICAgIF9lW01qR2FtZVR5cGUuTm9ybWFsXSA9IDA7XG4gICAgX2VbTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZV0gPSAwO1xuICAgIF9lW01qR2FtZVR5cGUuVHJhdmVsXSA9IDA7XG4gICAgX2VbTWpHYW1lVHlwZS5UaWxlMk5vcm1hbF0gPSAwO1xuICAgIHRoaXMuX2NvbGRTdGFydFVzYWdlQ291bnQgPSBfZTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGEsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbW9kZSA9IChudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5tb2RlKSB8fCBcImNvbGRTdGFydFwiO1xuICAgIHRoaXMuX3NraXBDb3VudCA9IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5za2lwQ291bnQpIHx8IDE7XG4gICAgdmFyIF9lID0ge307XG4gICAgX2VbTWpHYW1lVHlwZS5Ob3JtYWxdID0gMDtcbiAgICBfZVtNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlXSA9IDA7XG4gICAgX2VbTWpHYW1lVHlwZS5UcmF2ZWxdID0gMDtcbiAgICBfZVtNakdhbWVUeXBlLlRpbGUyTm9ybWFsXSA9IDA7XG4gICAgaWYgKFwiY29sZFN0YXJ0XCIgPT09IHRoaXMuX21vZGUpIHRoaXMuX2NvbGRTdGFydFVzYWdlQ291bnQgPSBfZTtlbHNlIHtcbiAgICAgIHRoaXMuaW5pdERhaWx5VXNhZ2VEYXRhKCk7XG4gICAgICB0aGlzLmNoZWNrQW5kUmVzZXREYWlseSgpO1xuICAgICAgdGhpcy5nZXREYWlseVVzYWdlRGF0YSgpO1xuICAgIH1cbiAgfVxuICBpbml0RGFpbHlVc2FnZURhdGEoKSB7XG4gICAgdmFyIHQ7XG4gICAgdGhpcy5sb2NhbERhdGEuZGFpbHlVc2FnZURhdGEgfHwgKHRoaXMubG9jYWxEYXRhLmRhaWx5VXNhZ2VEYXRhID0ge1xuICAgICAgbGFzdFJlc2V0RGF0ZTogdGhpcy5nZXRUb2RheURhdGVTdHJpbmcoKSxcbiAgICAgIHVzYWdlQ291bnQ6ICh0ID0ge30sIHRbTWpHYW1lVHlwZS5Ob3JtYWxdID0gMCwgdFtNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlXSA9IDAsIHRbTWpHYW1lVHlwZS5UcmF2ZWxdID0gMCwgdFtNakdhbWVUeXBlLlRpbGUyTm9ybWFsXSA9IDAsIHQpXG4gICAgfSk7XG4gIH1cbiAgZ2V0RGFpbHlVc2FnZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmRhaWx5VXNhZ2VEYXRhO1xuICB9XG4gIHNhdmVEYWlseVVzYWdlRGF0YSh0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZGFpbHlVc2FnZURhdGEgPSB0O1xuICB9XG4gIGNoZWNrQW5kUmVzZXREYWlseSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0VG9kYXlEYXRlU3RyaW5nKCksXG4gICAgICBhID0gdGhpcy5nZXREYWlseVVzYWdlRGF0YSgpO1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W01qR2FtZVR5cGUuTm9ybWFsXSA9IDA7XG4gICAgX3RbTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZV0gPSAwO1xuICAgIF90W01qR2FtZVR5cGUuVHJhdmVsXSA9IDA7XG4gICAgX3RbTWpHYW1lVHlwZS5UaWxlMk5vcm1hbF0gPSAwO1xuICAgIGlmIChhLmxhc3RSZXNldERhdGUgIT09IGUpIHtcbiAgICAgIGEubGFzdFJlc2V0RGF0ZSA9IGU7XG4gICAgICBhLnVzYWdlQ291bnQgPSBfdDtcbiAgICAgIHRoaXMuc2F2ZURhaWx5VXNhZ2VEYXRhKGEpO1xuICAgIH1cbiAgfVxuICBnZXRUb2RheURhdGVTdHJpbmcoKSB7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiB0LmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIFN0cmluZyh0LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIikgKyBcIi1cIiArIFN0cmluZyh0LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG4gIGdldEN1cnJlbnRHYW1lVHlwZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gIH1cbiAgc2hvdWxkU2tpcEludGVyQWQodCkge1xuICAgIGlmICh0ICE9PSBNakdhbWVUeXBlLk5vcm1hbCAmJiB0ICE9PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlICYmIHQgIT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIHQgIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoXCJjb2xkU3RhcnRcIiA9PT0gdGhpcy5fbW9kZSkgcmV0dXJuIHRoaXMuX2NvbGRTdGFydFVzYWdlQ291bnRbdF0gPCB0aGlzLl9za2lwQ291bnQ7XG4gICAgdGhpcy5jaGVja0FuZFJlc2V0RGFpbHkoKTtcbiAgICByZXR1cm4gdGhpcy5nZXREYWlseVVzYWdlRGF0YSgpLnVzYWdlQ291bnRbdF0gPCB0aGlzLl9za2lwQ291bnQ7XG4gIH1cbiAgbWFya0FzVXNlZCh0KSB7XG4gICAgaWYgKFwiY29sZFN0YXJ0XCIgPT09IHRoaXMuX21vZGUpIHRoaXMuX2NvbGRTdGFydFVzYWdlQ291bnRbdF0rKztlbHNlIHtcbiAgICAgIHZhciBlID0gdGhpcy5nZXREYWlseVVzYWdlRGF0YSgpO1xuICAgICAgZS51c2FnZUNvdW50W3RdKys7XG4gICAgICB0aGlzLnNhdmVEYWlseVVzYWdlRGF0YShlKTtcbiAgICB9XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIGUpIHtcbiAgICB2YXIgYSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2tpcEludGVyQWQoYSkpIHtcbiAgICAgIHRoaXMubWFya0FzVXNlZChhKTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=
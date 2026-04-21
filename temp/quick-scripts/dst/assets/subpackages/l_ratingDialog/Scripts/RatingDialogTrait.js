
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_ratingDialog/Scripts/RatingDialogTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5802q69ulEwoo9tIH3maTZ', 'RatingDialogTrait');
// subpackages/l_ratingDialog/Scripts/RatingDialogTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RatingDialogTrait = /** @class */ (function (_super) {
    __extends(RatingDialogTrait, _super);
    function RatingDialogTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxShowCount = 4;
        _this._nextCallback = null;
        return _this;
    }
    RatingDialogTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2WinEvent();
        this.initValue();
        this.updateActiveDays();
    };
    RatingDialogTrait.prototype.registerTile2WinEvent = function () {
        this.registerEvent([{
                event: "Tile2WinVw_popNextView",
                priority: 30
            }]);
    };
    RatingDialogTrait.prototype.initValue = function () {
        var t, e, o, i;
        if (!this.localData.isFirstInit) {
            this.localData.isFirstInit = 1;
            this.localData.totalShowCount = 0;
            this.localData.closeCount = 0;
            this.localData.lastRatingStars = 0;
            this.localData.ratingCount = 0;
            this.localData.lastShowActiveDays = 0;
            this.localData.activeDays = 0;
            this.localData.lastActiveDate = 0;
            this.localData.hasSubmittedHighRating = false;
            this.localData.hasReachedMaxShows = false;
            this.localData.lowStarFirstSubmitShowCount = 0;
            this.localData.totalShowCountDynamicModify = 0;
            this.localData.nextShowIntervalDaysDynamicModify = 0;
        }
        this._config = {
            firstShowRequiredLevels: null !== (t = this._traitData.firstShowRequiredLevels) && void 0 !== t ? t : 9,
            justCloseShowCount: null !== (e = this._traitData.justCloseShowCount) && void 0 !== e ? e : 3,
            lowStarNextShowDays: null !== (o = this._traitData.lowStarNextShowDays) && void 0 !== o ? o : 0,
            lowStarSubmitIndex: null !== (i = this._traitData.lowStarSubmitIndex) && void 0 !== i ? i : 0
        };
        this.localData.totalShowCount > this.localData.closeCount + this.localData.ratingCount && (this.localData.closeCount = this.localData.totalShowCount - this.localData.ratingCount);
    };
    RatingDialogTrait.prototype.updateActiveDays = function () {
        var t = Date.now(), e = this.localData.lastActiveDate;
        if (DateManager_1.default.getInstance().isNewDay(e, t)) {
            this.localData.activeDays++;
            this.localData.lastActiveDate = t;
        }
    };
    RatingDialogTrait.prototype.checkAndShowRatingDialog = function (t, e, o) {
        if (e === void 0) { e = false; }
        if (o === void 0) { o = {}; }
        if (this.shouldShowDialog()) {
            o.hasRating = true;
            this._nextCallback = t;
            this.showRatingDialog(e);
            this.recordDialogShown();
        }
        else
            t && t();
    };
    RatingDialogTrait.prototype.shouldShowDialog = function () {
        this.updateActiveDays();
        if (!this.isNetworkAvailable())
            return false;
        if (this.localData.hasSubmittedHighRating)
            return false;
        if (this.localData.hasReachedMaxShows)
            return false;
        if (this.localData.totalShowCount >= this._maxShowCount) {
            this.localData.hasReachedMaxShows = true;
            return false;
        }
        if (0 === this.localData.totalShowCount) {
            return this.getCurrentLevelsPassed() >= this._config.firstShowRequiredLevels;
        }
        return this.checkSubsequentShowConditions();
    };
    RatingDialogTrait.prototype.getCurrentLevelsPassed = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId() || 0;
        return Math.max(0, t - 1);
    };
    RatingDialogTrait.prototype.checkSubsequentShowConditions = function () {
        var t = this.localData.activeDays - this.localData.lastShowActiveDays - 1;
        if (this.localData.totalShowCountDynamicModify > 0 && this.localData.totalShowCount >= this.localData.totalShowCountDynamicModify)
            return false;
        if (this.localData.lastRatingStars > 0 && this.localData.lastRatingStars <= 3) {
            if (this.localData.lowStarFirstSubmitShowCount > 0 && this.localData.totalShowCount >= 2) {
                this.localData.hasReachedMaxShows = true;
                return false;
            }
            if (t < this.getLowStarInterval())
                return false;
        }
        if (this.localData.closeCount > 0) {
            if (this.localData.closeCount >= 4) {
                this.localData.hasReachedMaxShows = true;
                return false;
            }
            var e = 0;
            switch (this.localData.closeCount) {
                case 1:
                    e = 2;
                    break;
                case 2:
                    e = 3;
                    break;
                case 3:
                    e = 4;
                    break;
                default:
                    e = 4;
            }
            if (t < e)
                return false;
        }
        return true;
    };
    RatingDialogTrait.prototype.recordDialogShown = function () {
        this.localData.totalShowCount++;
        this.localData.lastShowActiveDays = this.localData.activeDays;
    };
    RatingDialogTrait.prototype.isNetworkAvailable = function () {
        if (cc.sys.isNative) {
            return 0 !== cc.sys.getNetworkType();
        }
        return navigator.onLine;
    };
    RatingDialogTrait.prototype.showRatingDialog = function (t) {
        if (t === void 0) { t = false; }
        this.pushController("UIRatingDialogController", {
            bgStyle: null,
            isShowAction: false,
            isGlobal: t
        });
    };
    RatingDialogTrait.prototype.onUserRating = function (t) {
        this.localData.lastRatingStars = t;
        this.localData.ratingCount++;
        if (t >= 4) {
            this.localData.hasSubmittedHighRating = true;
            this.callGotoStore(t);
        }
        else {
            0 === this.localData.lowStarFirstSubmitShowCount && (this.localData.lowStarFirstSubmitShowCount = this.localData.totalShowCount);
            this._config.lowStarSubmitIndex > 0 && this.localData.totalShowCount == this._config.lowStarSubmitIndex && (this.localData.nextShowIntervalDaysDynamicModify = this._config.lowStarNextShowDays);
        }
    };
    RatingDialogTrait.prototype.callGotoStore = function () {
        mj.sdk.comment("1");
    };
    RatingDialogTrait.prototype.onUserClose = function () {
        this.localData.closeCount++;
        this._config.justCloseShowCount > 0 && 1 == this.localData.closeCount && (this.localData.totalShowCountDynamicModify = this.localData.totalShowCount + this._config.justCloseShowCount);
    };
    RatingDialogTrait.prototype.isSlideRatingEnabled = function () {
        return "1" == this._traitData.slideRatingEnabled;
    };
    RatingDialogTrait.prototype.shouldBlockOtherPopup = function () {
        return this.shouldShowDialog();
    };
    RatingDialogTrait.prototype.getLowStarInterval = function () {
        var t = 4;
        this.localData.nextShowIntervalDaysDynamicModify > 0 && (t = this.localData.nextShowIntervalDaysDynamicModify);
        return t;
    };
    RatingDialogTrait.prototype.onWinVw_popNextView = function (t, e) {
        var o, i;
        t.args[0] = t.args[0] || {};
        var a = null !== (i = null === (o = t.args[0]) || void 0 === o ? void 0 : o.immediateNext) && void 0 !== i && i;
        this._nextCallback = null;
        this.checkAndShowRatingDialog(function () {
            e();
        }, a, t.args[0]);
    };
    RatingDialogTrait.prototype.onTile2WinVw_popNextView = function (t, e) {
        var o, i;
        t.args[0] = t.args[0] || {};
        var a = null !== (i = null === (o = t.args[0]) || void 0 === o ? void 0 : o.immediateNext) && void 0 !== i && i;
        this._nextCallback = null;
        this.checkAndShowRatingDialog(function () {
            e();
        }, a, t.args[0]);
    };
    RatingDialogTrait.prototype.onWinVw_showWinVw = function (t, e) {
        e();
        this.checkAndShowRatingDialog();
    };
    RatingDialogTrait.prototype.callNextCallback = function () {
        this._nextCallback && this._nextCallback();
        this._nextCallback = null;
    };
    RatingDialogTrait.traitKey = "RatingDialog";
    RatingDialogTrait.nextTimeOut = -1;
    __decorate([
        mj.traitEvent("RatingDlg_onUserRating")
    ], RatingDialogTrait.prototype, "onUserRating", null);
    __decorate([
        mj.traitEvent("RatingDlg_GotoStore")
    ], RatingDialogTrait.prototype, "callGotoStore", null);
    __decorate([
        mj.traitEvent("RatingDlg_getLowStarIntv")
    ], RatingDialogTrait.prototype, "getLowStarInterval", null);
    RatingDialogTrait = __decorate([
        mj.trait,
        mj.class("RatingDialogTrait")
    ], RatingDialogTrait);
    return RatingDialogTrait;
}(Trait_1.default));
exports.default = RatingDialogTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhdGluZ0RpYWxvZy9TY3JpcHRzL1JhdGluZ0RpYWxvZ1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBMkU7QUFDM0UsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDtRQUFBLHFFQXdMQztRQXZMQyxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLElBQUksQ0FBQzs7SUFzTHZCLENBQUM7SUFuTEMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxpREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLFFBQVEsRUFBRSxFQUFFO2FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QscUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFD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QUM1QixDQUFDLEVBQUUsQ0FBQztRQUNOLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCw2Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsNENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQXBMTSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQUMxQiw2QkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBMkh4QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7eURBV3ZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzBEQUdwQztJQVlEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzsrREFLekM7SUE3SmtCLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0F3THJDO0lBQUQsd0JBQUM7Q0F4TEQsQUF3TEMsQ0F4TDhDLGVBQUssR0F3TG5EO2tCQXhMb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9EYXRlTWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmF0aW5nRGlhbG9nVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGluZ0RpYWxvZ1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfbWF4U2hvd0NvdW50ID0gNDtcbiAgX25leHRDYWxsYmFjayA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmF0aW5nRGlhbG9nXCI7XG4gIHN0YXRpYyBuZXh0VGltZU91dCA9IC0xO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlclRpbGUyV2luRXZlbnQoKTtcbiAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgIHRoaXMudXBkYXRlQWN0aXZlRGF5cygpO1xuICB9XG4gIHJlZ2lzdGVyVGlsZTJXaW5FdmVudCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIlRpbGUyV2luVndfcG9wTmV4dFZpZXdcIixcbiAgICAgIHByaW9yaXR5OiAzMFxuICAgIH1dKTtcbiAgfVxuICBpbml0VmFsdWUoKSB7XG4gICAgdmFyIHQsIGUsIG8sIGk7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0SW5pdCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNGaXJzdEluaXQgPSAxO1xuICAgICAgdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnQgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEuY2xvc2VDb3VudCA9IDA7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UmF0aW5nU3RhcnMgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEucmF0aW5nQ291bnQgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dBY3RpdmVEYXlzID0gMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmFjdGl2ZURheXMgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEFjdGl2ZURhdGUgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEuaGFzU3VibWl0dGVkSGlnaFJhdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuaGFzUmVhY2hlZE1heFNob3dzID0gZmFsc2U7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sb3dTdGFyRmlyc3RTdWJtaXRTaG93Q291bnQgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnREeW5hbWljTW9kaWZ5ID0gMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLm5leHRTaG93SW50ZXJ2YWxEYXlzRHluYW1pY01vZGlmeSA9IDA7XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGZpcnN0U2hvd1JlcXVpcmVkTGV2ZWxzOiBudWxsICE9PSAodCA9IHRoaXMuX3RyYWl0RGF0YS5maXJzdFNob3dSZXF1aXJlZExldmVscykgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDksXG4gICAgICBqdXN0Q2xvc2VTaG93Q291bnQ6IG51bGwgIT09IChlID0gdGhpcy5fdHJhaXREYXRhLmp1c3RDbG9zZVNob3dDb3VudCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDMsXG4gICAgICBsb3dTdGFyTmV4dFNob3dEYXlzOiBudWxsICE9PSAobyA9IHRoaXMuX3RyYWl0RGF0YS5sb3dTdGFyTmV4dFNob3dEYXlzKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMCxcbiAgICAgIGxvd1N0YXJTdWJtaXRJbmRleDogbnVsbCAhPT0gKGkgPSB0aGlzLl90cmFpdERhdGEubG93U3RhclN1Ym1pdEluZGV4KSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMFxuICAgIH07XG4gICAgdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnQgPiB0aGlzLmxvY2FsRGF0YS5jbG9zZUNvdW50ICsgdGhpcy5sb2NhbERhdGEucmF0aW5nQ291bnQgJiYgKHRoaXMubG9jYWxEYXRhLmNsb3NlQ291bnQgPSB0aGlzLmxvY2FsRGF0YS50b3RhbFNob3dDb3VudCAtIHRoaXMubG9jYWxEYXRhLnJhdGluZ0NvdW50KTtcbiAgfVxuICB1cGRhdGVBY3RpdmVEYXlzKCkge1xuICAgIHZhciB0ID0gRGF0ZS5ub3coKSxcbiAgICAgIGUgPSB0aGlzLmxvY2FsRGF0YS5sYXN0QWN0aXZlRGF0ZTtcbiAgICBpZiAoRGF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pc05ld0RheShlLCB0KSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuYWN0aXZlRGF5cysrO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEFjdGl2ZURhdGUgPSB0O1xuICAgIH1cbiAgfVxuICBjaGVja0FuZFNob3dSYXRpbmdEaWFsb2codCwgZSA9IGZhbHNlLCBvID0ge30pIHtcbiAgICBpZiAodGhpcy5zaG91bGRTaG93RGlhbG9nKCkpIHtcbiAgICAgIG8uaGFzUmF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX25leHRDYWxsYmFjayA9IHQ7XG4gICAgICB0aGlzLnNob3dSYXRpbmdEaWFsb2coZSk7XG4gICAgICB0aGlzLnJlY29yZERpYWxvZ1Nob3duKCk7XG4gICAgfSBlbHNlIHQgJiYgdCgpO1xuICB9XG4gIHNob3VsZFNob3dEaWFsb2coKSB7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVEYXlzKCk7XG4gICAgaWYgKCF0aGlzLmlzTmV0d29ya0F2YWlsYWJsZSgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLmhhc1N1Ym1pdHRlZEhpZ2hSYXRpbmcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuaGFzUmVhY2hlZE1heFNob3dzKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLnRvdGFsU2hvd0NvdW50ID49IHRoaXMuX21heFNob3dDb3VudCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaGFzUmVhY2hlZE1heFNob3dzID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKDAgPT09IHRoaXMubG9jYWxEYXRhLnRvdGFsU2hvd0NvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50TGV2ZWxzUGFzc2VkKCkgPj0gdGhpcy5fY29uZmlnLmZpcnN0U2hvd1JlcXVpcmVkTGV2ZWxzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jaGVja1N1YnNlcXVlbnRTaG93Q29uZGl0aW9ucygpO1xuICB9XG4gIGdldEN1cnJlbnRMZXZlbHNQYXNzZWQoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgfHwgMDtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgdCAtIDEpO1xuICB9XG4gIGNoZWNrU3Vic2VxdWVudFNob3dDb25kaXRpb25zKCkge1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEuYWN0aXZlRGF5cyAtIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93QWN0aXZlRGF5cyAtIDE7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLnRvdGFsU2hvd0NvdW50RHluYW1pY01vZGlmeSA+IDAgJiYgdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnQgPj0gdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnREeW5hbWljTW9kaWZ5KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLmxhc3RSYXRpbmdTdGFycyA+IDAgJiYgdGhpcy5sb2NhbERhdGEubGFzdFJhdGluZ1N0YXJzIDw9IDMpIHtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5sb3dTdGFyRmlyc3RTdWJtaXRTaG93Q291bnQgPiAwICYmIHRoaXMubG9jYWxEYXRhLnRvdGFsU2hvd0NvdW50ID49IDIpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuaGFzUmVhY2hlZE1heFNob3dzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHQgPCB0aGlzLmdldExvd1N0YXJJbnRlcnZhbCgpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5jbG9zZUNvdW50ID4gMCkge1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLmNsb3NlQ291bnQgPj0gNCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYXNSZWFjaGVkTWF4U2hvd3MgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgZSA9IDA7XG4gICAgICBzd2l0Y2ggKHRoaXMubG9jYWxEYXRhLmNsb3NlQ291bnQpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGUgPSAyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgZSA9IDM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBlID0gNDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBlID0gNDtcbiAgICAgIH1cbiAgICAgIGlmICh0IDwgZSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWNvcmREaWFsb2dTaG93bigpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS50b3RhbFNob3dDb3VudCsrO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93QWN0aXZlRGF5cyA9IHRoaXMubG9jYWxEYXRhLmFjdGl2ZURheXM7XG4gIH1cbiAgaXNOZXR3b3JrQXZhaWxhYmxlKCkge1xuICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgIHJldHVybiAwICE9PSBjYy5zeXMuZ2V0TmV0d29ya1R5cGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gIH1cbiAgc2hvd1JhdGluZ0RpYWxvZyh0ID0gZmFsc2UpIHtcbiAgICB0aGlzLnB1c2hDb250cm9sbGVyKFwiVUlSYXRpbmdEaWFsb2dDb250cm9sbGVyXCIsIHtcbiAgICAgIGJnU3R5bGU6IG51bGwsXG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlLFxuICAgICAgaXNHbG9iYWw6IHRcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhdGluZ0RsZ19vblVzZXJSYXRpbmdcIilcbiAgb25Vc2VyUmF0aW5nKHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UmF0aW5nU3RhcnMgPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLnJhdGluZ0NvdW50Kys7XG4gICAgaWYgKHQgPj0gNCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaGFzU3VibWl0dGVkSGlnaFJhdGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNhbGxHb3RvU3RvcmUodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIDAgPT09IHRoaXMubG9jYWxEYXRhLmxvd1N0YXJGaXJzdFN1Ym1pdFNob3dDb3VudCAmJiAodGhpcy5sb2NhbERhdGEubG93U3RhckZpcnN0U3VibWl0U2hvd0NvdW50ID0gdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnQpO1xuICAgICAgdGhpcy5fY29uZmlnLmxvd1N0YXJTdWJtaXRJbmRleCA+IDAgJiYgdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnQgPT0gdGhpcy5fY29uZmlnLmxvd1N0YXJTdWJtaXRJbmRleCAmJiAodGhpcy5sb2NhbERhdGEubmV4dFNob3dJbnRlcnZhbERheXNEeW5hbWljTW9kaWZ5ID0gdGhpcy5fY29uZmlnLmxvd1N0YXJOZXh0U2hvd0RheXMpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhdGluZ0RsZ19Hb3RvU3RvcmVcIilcbiAgY2FsbEdvdG9TdG9yZSgpIHtcbiAgICBtai5zZGsuY29tbWVudChcIjFcIik7XG4gIH1cbiAgb25Vc2VyQ2xvc2UoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuY2xvc2VDb3VudCsrO1xuICAgIHRoaXMuX2NvbmZpZy5qdXN0Q2xvc2VTaG93Q291bnQgPiAwICYmIDEgPT0gdGhpcy5sb2NhbERhdGEuY2xvc2VDb3VudCAmJiAodGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnREeW5hbWljTW9kaWZ5ID0gdGhpcy5sb2NhbERhdGEudG90YWxTaG93Q291bnQgKyB0aGlzLl9jb25maWcuanVzdENsb3NlU2hvd0NvdW50KTtcbiAgfVxuICBpc1NsaWRlUmF0aW5nRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gXCIxXCIgPT0gdGhpcy5fdHJhaXREYXRhLnNsaWRlUmF0aW5nRW5hYmxlZDtcbiAgfVxuICBzaG91bGRCbG9ja090aGVyUG9wdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkU2hvd0RpYWxvZygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmF0aW5nRGxnX2dldExvd1N0YXJJbnR2XCIpXG4gIGdldExvd1N0YXJJbnRlcnZhbCgpIHtcbiAgICB2YXIgdCA9IDQ7XG4gICAgdGhpcy5sb2NhbERhdGEubmV4dFNob3dJbnRlcnZhbERheXNEeW5hbWljTW9kaWZ5ID4gMCAmJiAodCA9IHRoaXMubG9jYWxEYXRhLm5leHRTaG93SW50ZXJ2YWxEYXlzRHluYW1pY01vZGlmeSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgb25XaW5Wd19wb3BOZXh0Vmlldyh0LCBlKSB7XG4gICAgdmFyIG8sIGk7XG4gICAgdC5hcmdzWzBdID0gdC5hcmdzWzBdIHx8IHt9O1xuICAgIHZhciBhID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAobyA9IHQuYXJnc1swXSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5pbW1lZGlhdGVOZXh0KSAmJiB2b2lkIDAgIT09IGkgJiYgaTtcbiAgICB0aGlzLl9uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuY2hlY2tBbmRTaG93UmF0aW5nRGlhbG9nKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUoKTtcbiAgICB9LCBhLCB0LmFyZ3NbMF0pO1xuICB9XG4gIG9uVGlsZTJXaW5Wd19wb3BOZXh0Vmlldyh0LCBlKSB7XG4gICAgdmFyIG8sIGk7XG4gICAgdC5hcmdzWzBdID0gdC5hcmdzWzBdIHx8IHt9O1xuICAgIHZhciBhID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAobyA9IHQuYXJnc1swXSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5pbW1lZGlhdGVOZXh0KSAmJiB2b2lkIDAgIT09IGkgJiYgaTtcbiAgICB0aGlzLl9uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuY2hlY2tBbmRTaG93UmF0aW5nRGlhbG9nKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUoKTtcbiAgICB9LCBhLCB0LmFyZ3NbMF0pO1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5jaGVja0FuZFNob3dSYXRpbmdEaWFsb2coKTtcbiAgfVxuICBjYWxsTmV4dENhbGxiYWNrKCkge1xuICAgIHRoaXMuX25leHRDYWxsYmFjayAmJiB0aGlzLl9uZXh0Q2FsbGJhY2soKTtcbiAgICB0aGlzLl9uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICB9XG59Il19
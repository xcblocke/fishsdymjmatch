
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coldSkipFirstInterAd/Scripts/ColdSkipFirstInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44afbPs9ZtEfa+dj3boo1++', 'ColdSkipFirstInterAdTrait');
// subpackages/l_coldSkipFirstInterAd/Scripts/ColdSkipFirstInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ColdSkipFirstInterAdTrait = /** @class */ (function (_super) {
    __extends(ColdSkipFirstInterAdTrait, _super);
    function ColdSkipFirstInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._freeCount = 1;
        _this._consumedCount = 0;
        _this._checkDailyPlayed = false;
        _this._coldStartFirstAdChecked = false;
        _this._isNeedWifiOrCache = false;
        return _this;
    }
    ColdSkipFirstInterAdTrait.prototype.onLoad = function () {
        var e, a, r, i, o;
        _super.prototype.onLoad.call(this);
        this._freeCount = void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.count) ? this._traitData.count : 1;
        this._checkDailyPlayed = null !== (r = null === (a = this._traitData) || void 0 === a ? void 0 : a.checkDailyPlayed) && void 0 !== r && r;
        this._isNeedWifiOrCache = null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.isNeedWifiOrCache) && void 0 !== o && o;
        if (this._checkDailyPlayed) {
            this.localData.lastInterAdDate || (this.localData.lastInterAdDate = "");
            void 0 === this.localData.dailyInterAdPlayed && (this.localData.dailyInterAdPlayed = false);
            void 0 === this.localData.dailySkipCount && (this.localData.dailySkipCount = 0);
            this.checkAndResetDailyStatus();
            this._coldStartFirstAdChecked = false;
        }
        else
            this._consumedCount = 0;
    };
    ColdSkipFirstInterAdTrait.prototype.checkAndResetDailyStatus = function () {
        var t = this.getTodayDateString(), e = this.localData.lastInterAdDate;
        if (e && e !== t) {
            this.localData.dailyInterAdPlayed = false;
            this.localData.dailySkipCount = 0;
        }
    };
    ColdSkipFirstInterAdTrait.prototype.getTodayDateString = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    ColdSkipFirstInterAdTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._checkDailyPlayed) {
                var a = this.getTodayDateString();
                if (!this.localData.dailyInterAdPlayed) {
                    this.localData.dailyInterAdPlayed = true;
                    this.localData.lastInterAdDate = a;
                }
            }
            else
                this._consumedCount++;
            e();
        }
        else
            e();
    };
    ColdSkipFirstInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (this._checkDailyPlayed) {
            if (this._coldStartFirstAdChecked) {
                e();
                return;
            }
            this._coldStartFirstAdChecked = true;
            if (this.localData.dailyInterAdPlayed && this.localData.dailySkipCount < this._freeCount) {
                if (this._isNeedWifiOrCache) {
                    var a = CommonUtils_1.isNetworkAvailable(), r = AdManager_1.default.getInstance().checkInterAdIsReady();
                    if (!a && !r) {
                        e();
                        return;
                    }
                }
                this.localData.dailySkipCount++;
                var i = mj.getClassByName("InterAdCDTrait");
                if (i) {
                    var o = i.getInstance();
                    o && true === o.eventEnabled && o.updateLastPlayTime(Date.now());
                }
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
                return;
            }
            this.localData.dailyInterAdPlayed;
            e();
        }
        else if (this._consumedCount < this._freeCount) {
            if (this._isNeedWifiOrCache) {
                a = CommonUtils_1.isNetworkAvailable(), r = AdManager_1.default.getInstance().checkInterAdIsReady();
                if (!a && !r) {
                    e();
                    return;
                }
            }
            this._consumedCount++;
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ColdSkipFirstInterAdTrait.traitKey = "ColdSkipFirstInterAd";
    ColdSkipFirstInterAdTrait = __decorate([
        mj.trait,
        mj.class("ColdSkipFirstInterAdTrait")
    ], ColdSkipFirstInterAdTrait);
    return ColdSkipFirstInterAdTrait;
}(Trait_1.default));
exports.default = ColdSkipFirstInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbGRTa2lwRmlyc3RJbnRlckFkL1NjcmlwdHMvQ29sZFNraXBGaXJzdEludGVyQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Riw0RUFBa0Y7QUFDbEYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFHcEY7SUFBdUQsNkNBQUs7SUFBNUQ7UUFBQSxxRUE0RkM7UUEzRkMsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQix1QkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsOEJBQXdCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLHdCQUFrQixHQUFHLEtBQUssQ0FBQzs7SUF1RjdCLENBQUM7SUFyRkMsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFD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QUNMO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzNCLENBQUMsR0FBRyxnQ0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ1osQ0FBQyxFQUFFLENBQUM7b0JBQ0osT0FBTztpQkFDUjthQUNGO1lBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsS0FBSztnQkFDaEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBckZNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFOdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0E0RjdDO0lBQUQsZ0NBQUM7Q0E1RkQsQUE0RkMsQ0E1RnNELGVBQUssR0E0RjNEO2tCQTVGb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IGlzTmV0d29ya0F2YWlsYWJsZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNvbGRTa2lwRmlyc3RJbnRlckFkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGRTa2lwRmlyc3RJbnRlckFkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9mcmVlQ291bnQgPSAxO1xuICBfY29uc3VtZWRDb3VudCA9IDA7XG4gIF9jaGVja0RhaWx5UGxheWVkID0gZmFsc2U7XG4gIF9jb2xkU3RhcnRGaXJzdEFkQ2hlY2tlZCA9IGZhbHNlO1xuICBfaXNOZWVkV2lmaU9yQ2FjaGUgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb2xkU2tpcEZpcnN0SW50ZXJBZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIGEsIHIsIGksIG87XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZnJlZUNvdW50ID0gdm9pZCAwICE9PSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY291bnQpID8gdGhpcy5fdHJhaXREYXRhLmNvdW50IDogMTtcbiAgICB0aGlzLl9jaGVja0RhaWx5UGxheWVkID0gbnVsbCAhPT0gKHIgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5jaGVja0RhaWx5UGxheWVkKSAmJiB2b2lkIDAgIT09IHIgJiYgcjtcbiAgICB0aGlzLl9pc05lZWRXaWZpT3JDYWNoZSA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaXNOZWVkV2lmaU9yQ2FjaGUpICYmIHZvaWQgMCAhPT0gbyAmJiBvO1xuICAgIGlmICh0aGlzLl9jaGVja0RhaWx5UGxheWVkKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SW50ZXJBZERhdGUgfHwgKHRoaXMubG9jYWxEYXRhLmxhc3RJbnRlckFkRGF0ZSA9IFwiXCIpO1xuICAgICAgdm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5kYWlseUludGVyQWRQbGF5ZWQgJiYgKHRoaXMubG9jYWxEYXRhLmRhaWx5SW50ZXJBZFBsYXllZCA9IGZhbHNlKTtcbiAgICAgIHZvaWQgMCA9PT0gdGhpcy5sb2NhbERhdGEuZGFpbHlTa2lwQ291bnQgJiYgKHRoaXMubG9jYWxEYXRhLmRhaWx5U2tpcENvdW50ID0gMCk7XG4gICAgICB0aGlzLmNoZWNrQW5kUmVzZXREYWlseVN0YXR1cygpO1xuICAgICAgdGhpcy5fY29sZFN0YXJ0Rmlyc3RBZENoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgdGhpcy5fY29uc3VtZWRDb3VudCA9IDA7XG4gIH1cbiAgY2hlY2tBbmRSZXNldERhaWx5U3RhdHVzKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRUb2RheURhdGVTdHJpbmcoKSxcbiAgICAgIGUgPSB0aGlzLmxvY2FsRGF0YS5sYXN0SW50ZXJBZERhdGU7XG4gICAgaWYgKGUgJiYgZSAhPT0gdCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZGFpbHlJbnRlckFkUGxheWVkID0gZmFsc2U7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kYWlseVNraXBDb3VudCA9IDA7XG4gICAgfVxuICB9XG4gIGdldFRvZGF5RGF0ZVN0cmluZygpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgU3RyaW5nKHQuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKSArIFwiLVwiICsgU3RyaW5nKHQuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cbiAgb25BZE1ncl9pbnRlckFkQ2xvc2UodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5fY2hlY2tEYWlseVBsYXllZCkge1xuICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0VG9kYXlEYXRlU3RyaW5nKCk7XG4gICAgICAgIGlmICghdGhpcy5sb2NhbERhdGEuZGFpbHlJbnRlckFkUGxheWVkKSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEuZGFpbHlJbnRlckFkUGxheWVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SW50ZXJBZERhdGUgPSBhO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdGhpcy5fY29uc3VtZWRDb3VudCsrO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIGUpIHtcbiAgICBpZiAodGhpcy5fY2hlY2tEYWlseVBsYXllZCkge1xuICAgICAgaWYgKHRoaXMuX2NvbGRTdGFydEZpcnN0QWRDaGVja2VkKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29sZFN0YXJ0Rmlyc3RBZENoZWNrZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLmRhaWx5SW50ZXJBZFBsYXllZCAmJiB0aGlzLmxvY2FsRGF0YS5kYWlseVNraXBDb3VudCA8IHRoaXMuX2ZyZWVDb3VudCkge1xuICAgICAgICBpZiAodGhpcy5faXNOZWVkV2lmaU9yQ2FjaGUpIHtcbiAgICAgICAgICB2YXIgYSA9IGlzTmV0d29ya0F2YWlsYWJsZSgpLFxuICAgICAgICAgICAgciA9IEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrSW50ZXJBZElzUmVhZHkoKTtcbiAgICAgICAgICBpZiAoIWEgJiYgIXIpIHtcbiAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbERhdGEuZGFpbHlTa2lwQ291bnQrKztcbiAgICAgICAgdmFyIGkgPSBtai5nZXRDbGFzc0J5TmFtZShcIkludGVyQWRDRFRyYWl0XCIpO1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIHZhciBvID0gaS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICAgIG8gJiYgdHJ1ZSA9PT0gby5ldmVudEVuYWJsZWQgJiYgby51cGRhdGVMYXN0UGxheVRpbWUoRGF0ZS5ub3coKSk7XG4gICAgICAgIH1cbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbERhdGEuZGFpbHlJbnRlckFkUGxheWVkO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29uc3VtZWRDb3VudCA8IHRoaXMuX2ZyZWVDb3VudCkge1xuICAgICAgaWYgKHRoaXMuX2lzTmVlZFdpZmlPckNhY2hlKSB7XG4gICAgICAgIGEgPSBpc05ldHdvcmtBdmFpbGFibGUoKSwgciA9IEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrSW50ZXJBZElzUmVhZHkoKTtcbiAgICAgICAgaWYgKCFhICYmICFyKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fY29uc3VtZWRDb3VudCsrO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==
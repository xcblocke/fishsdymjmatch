
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_firstInterTiming/Scripts/FirstInterstitialTimingTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '063cdeEtXRCc42F/TA0M6E6', 'FirstInterstitialTimingTrait');
// subpackages/l_firstInterTiming/Scripts/FirstInterstitialTimingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstInterstitialTimingTrait = /** @class */ (function (_super) {
    __extends(FirstInterstitialTimingTrait, _super);
    function FirstInterstitialTimingTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mode = 1;
        _this._levelThreshold = 11;
        _this._timeThreshold = 21;
        return _this;
    }
    FirstInterstitialTimingTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    FirstInterstitialTimingTrait.prototype.onLoad = function () {
        var e, r, i;
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.hasPlayedFirstInter) && (this.localData.hasPlayedFirstInter = false);
        this._mode = void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.mode) ? this._traitData.mode : 1;
        this._levelThreshold = void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.levelThreshold) ? this._traitData.levelThreshold : 11;
        this._timeThreshold = void 0 !== (null === (i = this._traitData) || void 0 === i ? void 0 : i.timeThreshold) ? this._traitData.timeThreshold : 21;
        this._mode;
    };
    FirstInterstitialTimingTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.hasPlayedFirstInter)
                e();
            else if (this.checkConditions())
                e();
            else {
                this.getCurrentLevel(), this.getTotalPlayTimeMinutes();
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
        else
            e();
    };
    FirstInterstitialTimingTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.localData.hasPlayedFirstInter || (this.localData.hasPlayedFirstInter = true);
            e();
        }
        else
            e();
    };
    FirstInterstitialTimingTrait.prototype.checkConditions = function () {
        var t = this.getCurrentLevel(), e = this.getTotalPlayTimeMinutes(), r = t >= this._levelThreshold, i = e >= this._timeThreshold;
        return 1 === this._mode ? r && i : r || i;
    };
    FirstInterstitialTimingTrait.prototype.getCurrentLevel = function () {
        var t = UserModel_1.default.getInstance().normalData;
        return t && t.getCurrentLevelId ? t.getCurrentLevelId() : 0;
    };
    FirstInterstitialTimingTrait.prototype.getTotalPlayTimeMinutes = function () {
        return UserModel_1.default.getInstance().getAppUseSecondsTime() / 60;
    };
    FirstInterstitialTimingTrait.prototype.getHasPlayedFirstInter = function () {
        return this.localData.hasPlayedFirstInter || false;
    };
    FirstInterstitialTimingTrait.traitKey = "FirstInterstitialTiming";
    FirstInterstitialTimingTrait = __decorate([
        mj.trait,
        mj.class("FirstInterstitialTimingTrait")
    ], FirstInterstitialTimingTrait);
    return FirstInterstitialTimingTrait;
}(Trait_1.default));
exports.default = FirstInterstitialTimingTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpcnN0SW50ZXJUaW1pbmcvU2NyaXB0cy9GaXJzdEludGVyc3RpdGlhbFRpbWluZ1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFHakU7SUFBMEQsZ0RBQUs7SUFBL0Q7UUFBQSxxRUFvREM7UUFuREMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG9CQUFjLEdBQUcsRUFBRSxDQUFDOztJQWlEdEIsQ0FBQztJQS9DQyxtREFBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCw2Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUss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Q0FBQyxtQkFBbUIsSUFBSSxLQUFLLENBQUM7SUFDckQsQ0FBQztJQS9DTSxxQ0FBUSxHQUFHLHlCQUF5QixDQUFDO0lBSnpCLDRCQUE0QjtRQUZoRCxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUM7T0FDcEIsNEJBQTRCLENBb0RoRDtJQUFELG1DQUFDO0NBcERELEFBb0RDLENBcER5RCxlQUFLLEdBb0Q5RDtrQkFwRG9CLDRCQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZpcnN0SW50ZXJzdGl0aWFsVGltaW5nVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcnN0SW50ZXJzdGl0aWFsVGltaW5nVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9tb2RlID0gMTtcbiAgX2xldmVsVGhyZXNob2xkID0gMTE7XG4gIF90aW1lVGhyZXNob2xkID0gMjE7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmlyc3RJbnRlcnN0aXRpYWxUaW1pbmdcIjtcbiAgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQ7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmhhc1BsYXllZEZpcnN0SW50ZXIpICYmICh0aGlzLmxvY2FsRGF0YS5oYXNQbGF5ZWRGaXJzdEludGVyID0gZmFsc2UpO1xuICAgIHRoaXMuX21vZGUgPSB2b2lkIDAgIT09IChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5tb2RlKSA/IHRoaXMuX3RyYWl0RGF0YS5tb2RlIDogMTtcbiAgICB0aGlzLl9sZXZlbFRocmVzaG9sZCA9IHZvaWQgMCAhPT0gKG51bGwgPT09IChyID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmxldmVsVGhyZXNob2xkKSA/IHRoaXMuX3RyYWl0RGF0YS5sZXZlbFRocmVzaG9sZCA6IDExO1xuICAgIHRoaXMuX3RpbWVUaHJlc2hvbGQgPSB2b2lkIDAgIT09IChudWxsID09PSAoaSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS50aW1lVGhyZXNob2xkKSA/IHRoaXMuX3RyYWl0RGF0YS50aW1lVGhyZXNob2xkIDogMjE7XG4gICAgdGhpcy5fbW9kZTtcbiAgfVxuICBvbkFkTWdyX2Noa0ludGVyQWQodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEuaGFzUGxheWVkRmlyc3RJbnRlcikgZSgpO2Vsc2UgaWYgKHRoaXMuY2hlY2tDb25kaXRpb25zKCkpIGUoKTtlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50TGV2ZWwoKSwgdGhpcy5nZXRUb3RhbFBsYXlUaW1lTWludXRlcygpO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25BZE1ncl9pbnRlckFkQ2xvc2UodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5oYXNQbGF5ZWRGaXJzdEludGVyIHx8ICh0aGlzLmxvY2FsRGF0YS5oYXNQbGF5ZWRGaXJzdEludGVyID0gdHJ1ZSk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBjaGVja0NvbmRpdGlvbnMoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1cnJlbnRMZXZlbCgpLFxuICAgICAgZSA9IHRoaXMuZ2V0VG90YWxQbGF5VGltZU1pbnV0ZXMoKSxcbiAgICAgIHIgPSB0ID49IHRoaXMuX2xldmVsVGhyZXNob2xkLFxuICAgICAgaSA9IGUgPj0gdGhpcy5fdGltZVRocmVzaG9sZDtcbiAgICByZXR1cm4gMSA9PT0gdGhpcy5fbW9kZSA/IHIgJiYgaSA6IHIgfHwgaTtcbiAgfVxuICBnZXRDdXJyZW50TGV2ZWwoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhO1xuICAgIHJldHVybiB0ICYmIHQuZ2V0Q3VycmVudExldmVsSWQgPyB0LmdldEN1cnJlbnRMZXZlbElkKCkgOiAwO1xuICB9XG4gIGdldFRvdGFsUGxheVRpbWVNaW51dGVzKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBcHBVc2VTZWNvbmRzVGltZSgpIC8gNjA7XG4gIH1cbiAgZ2V0SGFzUGxheWVkRmlyc3RJbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaGFzUGxheWVkRmlyc3RJbnRlciB8fCBmYWxzZTtcbiAgfVxufSJdfQ==
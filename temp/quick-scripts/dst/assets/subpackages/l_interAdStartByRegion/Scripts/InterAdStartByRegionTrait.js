
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdStartByRegion/Scripts/InterAdStartByRegionTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce28eAfPnFEVr8fisPeT/py', 'InterAdStartByRegionTrait');
// subpackages/l_interAdStartByRegion/Scripts/InterAdStartByRegionTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdModel_1 = require("../../../Scripts/gamePlay/base/ad/AdModel");
var AdRegionUtils_1 = require("../../../Scripts/AdRegionUtils");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var InterAdStartByRegionTrait = /** @class */ (function (_super) {
    __extends(InterAdStartByRegionTrait, _super);
    function InterAdStartByRegionTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._region = "other_region";
        _this._firstInterEcpm = -1;
        _this._segmentIndex = 0;
        _this._calculatedStartLevel = -1;
        _this._segmentLevelConfig = [];
        _this._hasFirstEcpm = false;
        return _this;
    }
    InterAdStartByRegionTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initSegmentLevelConfig();
        this._region = AdRegionUtils_1.getCurrentUserRegion();
    };
    InterAdStartByRegionTrait.prototype._initSegmentLevelConfig = function () {
        var t = this._traitData.segmentLevelList;
        if (t && Array.isArray(t) && 10 === t.length) {
            this._segmentLevelConfig = __spreadArrays(t);
        }
        else {
            this._segmentLevelConfig = [13, 12, 11, 10, 10, 9, 9, 8, 7, 6];
        }
    };
    InterAdStartByRegionTrait.prototype._getRegionECPMThresholds = function () {
        switch (this._traitData.regionType) {
            case 2:
                return AdRegionUtils_1.ECPM_THRESHOLDS_IOS_FIRST_CACHE;
            default:
                return AdRegionUtils_1.ECPM_THRESHOLDS_GP_FIRST_LOAD;
        }
    };
    InterAdStartByRegionTrait.prototype._tryGetFirstEcpm = function () {
        if (!this._hasFirstEcpm) {
            var t = AdModel_1.default.getInstance(), e = t.getFirstInterLoadEcpm();
            if (!e) {
                if (!mj.sdk.canInvoke("callNativeGetFirstEcpm"))
                    return;
                (e = mj.sdk.getFirstInterLoadEcpm()) && e > 0 && t.setFirstInterLoadEcpm(e);
            }
            if (e) {
                this._firstInterEcpm = e;
                this._hasFirstEcpm = true;
                var r = this._getRegionECPMThresholds()[this._region];
                this._segmentIndex = AdRegionUtils_1.calculateSegmentIndex(this._firstInterEcpm, r);
                this._calculatedStartLevel = this._segmentLevelConfig[this._segmentIndex];
            }
        }
    };
    InterAdStartByRegionTrait.prototype.getStartLevel = function () {
        return this._calculatedStartLevel;
    };
    InterAdStartByRegionTrait.prototype.onInterAdStart_getStartLv = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._hasFirstEcpm || this._tryGetFirstEcpm();
            if (!this._hasFirstEcpm || this._calculatedStartLevel <= 0) {
                e();
            }
            else {
                e({
                    returnVal: this._calculatedStartLevel,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
        else
            e();
    };
    InterAdStartByRegionTrait.traitKey = "InterAdStartByRegion";
    InterAdStartByRegionTrait = __decorate([
        mj.trait,
        mj.class("InterAdStartByRegionTrait")
    ], InterAdStartByRegionTrait);
    return InterAdStartByRegionTrait;
}(Trait_1.default));
exports.default = InterAdStartByRegionTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRTdGFydEJ5UmVnaW9uL1NjcmlwdHMvSW50ZXJBZFN0YXJ0QnlSZWdpb25UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYscUVBQWdFO0FBQ2hFLGdFQUE2SjtBQUM3SixzRUFBaUU7QUFHakU7SUFBdUQsNkNBQUs7SUFBNUQ7UUFBQSxxRUE4REM7UUE3REMsYUFBTyxHQUFHLGNBQWMsQ0FBQztRQUN6QixxQkFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLDJCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNCLHlCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QixtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUF3RHhCLENBQUM7SUF0REMsMENBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQ0FBb0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDRCwyREFBdUIsR0FBdkI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDNUMsSUFBSSxDQUFDLG1CQUFtQixrQkFBTyxDQUFDLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixHQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBQ0QsNERBQXdCLEdBQXhCO1FBQ0UsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNsQyxLQUFLLENBQUM7Z0JBQ0osT0FBTywrQ0FBK0IsQ0FBQztZQUN6QztnQkFDRSxPQUFPLDZDQUE2QixDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUNELG9EQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLGlCQUFPLENBQUMsV0FBVyxFQUFFLEVBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztvQkFBRSxPQUFPO2dCQUN4RCxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RTtZQUNELElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLHFDQUFxQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsaURBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFDRCw2REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxFQUFFO2dCQUMxRCxDQUFDLEVBQUUsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLENBQUMsQ0FBQztvQkFDQSxTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtvQkFDckMsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07aUJBQzNDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBdERNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFQdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0E4RDdDO0lBQUQsZ0NBQUM7Q0E5REQsQUE4REMsQ0E5RHNELGVBQUssR0E4RDNEO2tCQTlEb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEFkTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2FkL0FkTW9kZWwnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXJSZWdpb24sIEVDUE1fVEhSRVNIT0xEU19JT1NfRklSU1RfQ0FDSEUsIEVDUE1fVEhSRVNIT0xEU19HUF9GSVJTVF9MT0FELCBjYWxjdWxhdGVTZWdtZW50SW5kZXggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0FkUmVnaW9uVXRpbHMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSW50ZXJBZFN0YXJ0QnlSZWdpb25UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJBZFN0YXJ0QnlSZWdpb25UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3JlZ2lvbiA9IFwib3RoZXJfcmVnaW9uXCI7XG4gIF9maXJzdEludGVyRWNwbSA9IC0xO1xuICBfc2VnbWVudEluZGV4ID0gMDtcbiAgX2NhbGN1bGF0ZWRTdGFydExldmVsID0gLTE7XG4gIF9zZWdtZW50TGV2ZWxDb25maWcgPSBbXTtcbiAgX2hhc0ZpcnN0RWNwbSA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkludGVyQWRTdGFydEJ5UmVnaW9uXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9pbml0U2VnbWVudExldmVsQ29uZmlnKCk7XG4gICAgdGhpcy5fcmVnaW9uID0gZ2V0Q3VycmVudFVzZXJSZWdpb24oKTtcbiAgfVxuICBfaW5pdFNlZ21lbnRMZXZlbENvbmZpZygpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5zZWdtZW50TGV2ZWxMaXN0O1xuICAgIGlmICh0ICYmIEFycmF5LmlzQXJyYXkodCkgJiYgMTAgPT09IHQubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zZWdtZW50TGV2ZWxDb25maWcgPSBbLi4udF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlZ21lbnRMZXZlbENvbmZpZyA9IFsuLi5bMTMsIDEyLCAxMSwgMTAsIDEwLCA5LCA5LCA4LCA3LCA2XV07XG4gICAgfVxuICB9XG4gIF9nZXRSZWdpb25FQ1BNVGhyZXNob2xkcygpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3RyYWl0RGF0YS5yZWdpb25UeXBlKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBFQ1BNX1RIUkVTSE9MRFNfSU9TX0ZJUlNUX0NBQ0hFO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIEVDUE1fVEhSRVNIT0xEU19HUF9GSVJTVF9MT0FEO1xuICAgIH1cbiAgfVxuICBfdHJ5R2V0Rmlyc3RFY3BtKCkge1xuICAgIGlmICghdGhpcy5faGFzRmlyc3RFY3BtKSB7XG4gICAgICB2YXIgdCA9IEFkTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgZSA9IHQuZ2V0Rmlyc3RJbnRlckxvYWRFY3BtKCk7XG4gICAgICBpZiAoIWUpIHtcbiAgICAgICAgaWYgKCFtai5zZGsuY2FuSW52b2tlKFwiY2FsbE5hdGl2ZUdldEZpcnN0RWNwbVwiKSkgcmV0dXJuO1xuICAgICAgICAoZSA9IG1qLnNkay5nZXRGaXJzdEludGVyTG9hZEVjcG0oKSkgJiYgZSA+IDAgJiYgdC5zZXRGaXJzdEludGVyTG9hZEVjcG0oZSk7XG4gICAgICB9XG4gICAgICBpZiAoZSkge1xuICAgICAgICB0aGlzLl9maXJzdEludGVyRWNwbSA9IGU7XG4gICAgICAgIHRoaXMuX2hhc0ZpcnN0RWNwbSA9IHRydWU7XG4gICAgICAgIHZhciByID0gdGhpcy5fZ2V0UmVnaW9uRUNQTVRocmVzaG9sZHMoKVt0aGlzLl9yZWdpb25dO1xuICAgICAgICB0aGlzLl9zZWdtZW50SW5kZXggPSBjYWxjdWxhdGVTZWdtZW50SW5kZXgodGhpcy5fZmlyc3RJbnRlckVjcG0sIHIpO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVkU3RhcnRMZXZlbCA9IHRoaXMuX3NlZ21lbnRMZXZlbENvbmZpZ1t0aGlzLl9zZWdtZW50SW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRTdGFydExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxjdWxhdGVkU3RhcnRMZXZlbDtcbiAgfVxuICBvbkludGVyQWRTdGFydF9nZXRTdGFydEx2KHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5faGFzRmlyc3RFY3BtIHx8IHRoaXMuX3RyeUdldEZpcnN0RWNwbSgpO1xuICAgICAgaWYgKCF0aGlzLl9oYXNGaXJzdEVjcG0gfHwgdGhpcy5fY2FsY3VsYXRlZFN0YXJ0TGV2ZWwgPD0gMCkge1xuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2NhbGN1bGF0ZWRTdGFydExldmVsLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19
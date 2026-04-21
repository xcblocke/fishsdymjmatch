
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdCDByRegion/Scripts/InterAdCDByRegionTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63ff0RJof5CbJyp2hKg4RWH', 'InterAdCDByRegionTrait');
// subpackages/l_interAdCDByRegion/Scripts/InterAdCDByRegionTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdModel_1 = require("../../../Scripts/gamePlay/base/ad/AdModel");
var AdRegionUtils_1 = require("../../../Scripts/AdRegionUtils");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var d = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55];
var InterAdCDByRegionTrait = /** @class */ (function (_super) {
    __extends(InterAdCDByRegionTrait, _super);
    function InterAdCDByRegionTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._region = "other_region";
        _this._firstInterEcpm = -1;
        _this._segmentIndex = 0;
        _this._calculatedCDTime = -1;
        _this._segmentCDConfig = [];
        _this._hasFirstEcpm = false;
        return _this;
    }
    InterAdCDByRegionTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initSegmentCDConfig();
        this._region = AdRegionUtils_1.getCurrentUserRegion();
    };
    InterAdCDByRegionTrait.prototype._initSegmentCDConfig = function () {
        var t = this._traitData.segmentCDList;
        if (t && Array.isArray(t) && 10 === t.length) {
            this._segmentCDConfig = __spreadArrays(t);
        }
        else {
            this._segmentCDConfig = __spreadArrays(d);
        }
    };
    InterAdCDByRegionTrait.prototype._getRegionECPMThresholds = function () {
        switch (this._traitData.regionType) {
            case 4:
                return AdRegionUtils_1.ECPM_THRESHOLDS_GP_FIRST_LOAD;
            case 3:
                return AdRegionUtils_1.ECPM_THRESHOLDS_IOS_FIRST_CACHE;
            case 2:
                return AdRegionUtils_1.ECPM_THRESHOLDS_IOS_FIRST_SHOW;
            default:
                return AdRegionUtils_1.ECPM_THRESHOLDS_GP_FIRST_SHOW;
        }
    };
    InterAdCDByRegionTrait.prototype._tryGetFirstEcpm = function () {
        if (!this._hasFirstEcpm) {
            var t = AdModel_1.default.getInstance(), e = 0;
            if (this._traitData.useLoadEcpm) {
                if (!(e = t.getFirstInterLoadEcpm())) {
                    if (!mj.sdk.canInvoke("callNativeGetFirstEcpm"))
                        return;
                    (e = mj.sdk.getFirstInterLoadEcpm()) && e > 0 && t.setFirstInterLoadEcpm(e);
                }
            }
            else
                e = t.getFirstInterEcpm();
            if (e) {
                this._firstInterEcpm = e;
                this._hasFirstEcpm = true;
                var r = this._getRegionECPMThresholds()[this._region];
                this._segmentIndex = AdRegionUtils_1.calculateSegmentIndex(this._firstInterEcpm, r);
                this._calculatedCDTime = 1000 * this._segmentCDConfig[this._segmentIndex];
            }
        }
    };
    InterAdCDByRegionTrait.prototype.onInterAdCD_getCDTime = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._hasFirstEcpm || this._tryGetFirstEcpm();
            if (this._hasFirstEcpm && this._calculatedCDTime > 0) {
                e({
                    returnVal: this._calculatedCDTime,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    InterAdCDByRegionTrait.traitKey = "InterAdCDByRegion";
    InterAdCDByRegionTrait = __decorate([
        mj.trait,
        mj.class("InterAdCDByRegionTrait")
    ], InterAdCDByRegionTrait);
    return InterAdCDByRegionTrait;
}(Trait_1.default));
exports.default = InterAdCDByRegionTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRDREJ5UmVnaW9uL1NjcmlwdHMvSW50ZXJBZENEQnlSZWdpb25UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYscUVBQWdFO0FBQ2hFLGdFQUE0TjtBQUM1TixzRUFBaUU7QUFDakUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUdsRDtJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQWlFQztRQWhFQyxhQUFPLEdBQUcsY0FBYyxDQUFDO1FBQ3pCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsc0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLG1CQUFhLEdBQUcsS0FBSyxDQUFDOztJQTJEeEIsQ0FBQztJQXpEQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLG9DQUFvQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUNELHFEQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGdCQUFnQixrQkFBTyxDQUFDLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixrQkFBTyxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFDRCx5REFBd0IsR0FBeEI7UUFDRSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2xDLEtBQUssQ0FBQztnQkFDSixPQUFPLDZDQUE2QixDQUFDO1lBQ3ZDLEtBQUssQ0FBQztnQkFDSixPQUFPLCtDQUErQixDQUFDO1lBQ3pDLEtBQUssQ0FBQztnQkFDSixPQUFPLDhDQUE4QixDQUFDO1lBQ3hDO2dCQUNFLE9BQU8sNkNBQTZCLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBQ0QsaURBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLEVBQUUsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNSLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxFQUFFO29CQUNwQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUM7d0JBQUUsT0FBTztvQkFDeEQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdFO2FBQ0Y7O2dCQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQ0FBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDM0U7U0FDRjtJQUNILENBQUM7SUFDRCxzREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtnQkFDcEQsQ0FBQyxDQUFDO29CQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCO29CQUNqQyxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtpQkFDM0MsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXpETSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBUG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FpRTFDO0lBQUQsNkJBQUM7Q0FqRUQsQUFpRUMsQ0FqRW1ELGVBQUssR0FpRXhEO2tCQWpFb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEFkTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2FkL0FkTW9kZWwnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXJSZWdpb24sIEVDUE1fVEhSRVNIT0xEU19HUF9GSVJTVF9MT0FELCBFQ1BNX1RIUkVTSE9MRFNfSU9TX0ZJUlNUX0NBQ0hFLCBFQ1BNX1RIUkVTSE9MRFNfSU9TX0ZJUlNUX1NIT1csIEVDUE1fVEhSRVNIT0xEU19HUF9GSVJTVF9TSE9XLCBjYWxjdWxhdGVTZWdtZW50SW5kZXggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0FkUmVnaW9uVXRpbHMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbnZhciBkID0gWzEwMCwgOTUsIDkwLCA4NSwgODAsIDc1LCA3MCwgNjUsIDYwLCA1NV07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkludGVyQWRDREJ5UmVnaW9uVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyQWRDREJ5UmVnaW9uVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9yZWdpb24gPSBcIm90aGVyX3JlZ2lvblwiO1xuICBfZmlyc3RJbnRlckVjcG0gPSAtMTtcbiAgX3NlZ21lbnRJbmRleCA9IDA7XG4gIF9jYWxjdWxhdGVkQ0RUaW1lID0gLTE7XG4gIF9zZWdtZW50Q0RDb25maWcgPSBbXTtcbiAgX2hhc0ZpcnN0RWNwbSA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkludGVyQWRDREJ5UmVnaW9uXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9pbml0U2VnbWVudENEQ29uZmlnKCk7XG4gICAgdGhpcy5fcmVnaW9uID0gZ2V0Q3VycmVudFVzZXJSZWdpb24oKTtcbiAgfVxuICBfaW5pdFNlZ21lbnRDRENvbmZpZygpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5zZWdtZW50Q0RMaXN0O1xuICAgIGlmICh0ICYmIEFycmF5LmlzQXJyYXkodCkgJiYgMTAgPT09IHQubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zZWdtZW50Q0RDb25maWcgPSBbLi4udF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlZ21lbnRDRENvbmZpZyA9IFsuLi5kXTtcbiAgICB9XG4gIH1cbiAgX2dldFJlZ2lvbkVDUE1UaHJlc2hvbGRzKCkge1xuICAgIHN3aXRjaCAodGhpcy5fdHJhaXREYXRhLnJlZ2lvblR5cGUpIHtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIEVDUE1fVEhSRVNIT0xEU19HUF9GSVJTVF9MT0FEO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gRUNQTV9USFJFU0hPTERTX0lPU19GSVJTVF9DQUNIRTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIEVDUE1fVEhSRVNIT0xEU19JT1NfRklSU1RfU0hPVztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBFQ1BNX1RIUkVTSE9MRFNfR1BfRklSU1RfU0hPVztcbiAgICB9XG4gIH1cbiAgX3RyeUdldEZpcnN0RWNwbSgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0ZpcnN0RWNwbSkge1xuICAgICAgdmFyIHQgPSBBZE1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIGUgPSAwO1xuICAgICAgaWYgKHRoaXMuX3RyYWl0RGF0YS51c2VMb2FkRWNwbSkge1xuICAgICAgICBpZiAoIShlID0gdC5nZXRGaXJzdEludGVyTG9hZEVjcG0oKSkpIHtcbiAgICAgICAgICBpZiAoIW1qLnNkay5jYW5JbnZva2UoXCJjYWxsTmF0aXZlR2V0Rmlyc3RFY3BtXCIpKSByZXR1cm47XG4gICAgICAgICAgKGUgPSBtai5zZGsuZ2V0Rmlyc3RJbnRlckxvYWRFY3BtKCkpICYmIGUgPiAwICYmIHQuc2V0Rmlyc3RJbnRlckxvYWRFY3BtKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgZSA9IHQuZ2V0Rmlyc3RJbnRlckVjcG0oKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0SW50ZXJFY3BtID0gZTtcbiAgICAgICAgdGhpcy5faGFzRmlyc3RFY3BtID0gdHJ1ZTtcbiAgICAgICAgdmFyIHIgPSB0aGlzLl9nZXRSZWdpb25FQ1BNVGhyZXNob2xkcygpW3RoaXMuX3JlZ2lvbl07XG4gICAgICAgIHRoaXMuX3NlZ21lbnRJbmRleCA9IGNhbGN1bGF0ZVNlZ21lbnRJbmRleCh0aGlzLl9maXJzdEludGVyRWNwbSwgcik7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZWRDRFRpbWUgPSAxMDAwICogdGhpcy5fc2VnbWVudENEQ29uZmlnW3RoaXMuX3NlZ21lbnRJbmRleF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uSW50ZXJBZENEX2dldENEVGltZSh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMuX2hhc0ZpcnN0RWNwbSB8fCB0aGlzLl90cnlHZXRGaXJzdEVjcG0oKTtcbiAgICAgIGlmICh0aGlzLl9oYXNGaXJzdEVjcG0gJiYgdGhpcy5fY2FsY3VsYXRlZENEVGltZSA+IDApIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9jYWxjdWxhdGVkQ0RUaW1lLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19
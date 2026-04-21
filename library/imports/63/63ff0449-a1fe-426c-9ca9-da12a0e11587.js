"use strict";
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
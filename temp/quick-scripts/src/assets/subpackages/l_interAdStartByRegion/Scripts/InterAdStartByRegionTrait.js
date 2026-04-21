"use strict";
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
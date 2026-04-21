import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdModel from '../../../Scripts/gamePlay/base/ad/AdModel';
import { getCurrentUserRegion, ECPM_THRESHOLDS_IOS_FIRST_CACHE, ECPM_THRESHOLDS_GP_FIRST_LOAD, calculateSegmentIndex } from '../../../Scripts/AdRegionUtils';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("InterAdStartByRegionTrait")
export default class InterAdStartByRegionTrait extends Trait {
  _region = "other_region";
  _firstInterEcpm = -1;
  _segmentIndex = 0;
  _calculatedStartLevel = -1;
  _segmentLevelConfig = [];
  _hasFirstEcpm = false;
  static traitKey = "InterAdStartByRegion";
  onLoad() {
    super.onLoad.call(this);
    this._initSegmentLevelConfig();
    this._region = getCurrentUserRegion();
  }
  _initSegmentLevelConfig() {
    var t = this._traitData.segmentLevelList;
    if (t && Array.isArray(t) && 10 === t.length) {
      this._segmentLevelConfig = [...t];
    } else {
      this._segmentLevelConfig = [...[13, 12, 11, 10, 10, 9, 9, 8, 7, 6]];
    }
  }
  _getRegionECPMThresholds() {
    switch (this._traitData.regionType) {
      case 2:
        return ECPM_THRESHOLDS_IOS_FIRST_CACHE;
      default:
        return ECPM_THRESHOLDS_GP_FIRST_LOAD;
    }
  }
  _tryGetFirstEcpm() {
    if (!this._hasFirstEcpm) {
      var t = AdModel.getInstance(),
        e = t.getFirstInterLoadEcpm();
      if (!e) {
        if (!mj.sdk.canInvoke("callNativeGetFirstEcpm")) return;
        (e = mj.sdk.getFirstInterLoadEcpm()) && e > 0 && t.setFirstInterLoadEcpm(e);
      }
      if (e) {
        this._firstInterEcpm = e;
        this._hasFirstEcpm = true;
        var r = this._getRegionECPMThresholds()[this._region];
        this._segmentIndex = calculateSegmentIndex(this._firstInterEcpm, r);
        this._calculatedStartLevel = this._segmentLevelConfig[this._segmentIndex];
      }
    }
  }
  getStartLevel() {
    return this._calculatedStartLevel;
  }
  onInterAdStart_getStartLv(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this._hasFirstEcpm || this._tryGetFirstEcpm();
      if (!this._hasFirstEcpm || this._calculatedStartLevel <= 0) {
        e();
      } else {
        e({
          returnVal: this._calculatedStartLevel,
          returnType: TraitCallbackReturnType.return
        });
      }
    } else e();
  }
}
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdModel from '../../../Scripts/gamePlay/base/ad/AdModel';
import { getCurrentUserRegion, ECPM_THRESHOLDS_GP_FIRST_LOAD, ECPM_THRESHOLDS_IOS_FIRST_CACHE, ECPM_THRESHOLDS_IOS_FIRST_SHOW, ECPM_THRESHOLDS_GP_FIRST_SHOW, calculateSegmentIndex } from '../../../Scripts/AdRegionUtils';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var d = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55];
@mj.trait
@mj.class("InterAdCDByRegionTrait")
export default class InterAdCDByRegionTrait extends Trait {
  _region = "other_region";
  _firstInterEcpm = -1;
  _segmentIndex = 0;
  _calculatedCDTime = -1;
  _segmentCDConfig = [];
  _hasFirstEcpm = false;
  static traitKey = "InterAdCDByRegion";
  onLoad() {
    super.onLoad.call(this);
    this._initSegmentCDConfig();
    this._region = getCurrentUserRegion();
  }
  _initSegmentCDConfig() {
    var t = this._traitData.segmentCDList;
    if (t && Array.isArray(t) && 10 === t.length) {
      this._segmentCDConfig = [...t];
    } else {
      this._segmentCDConfig = [...d];
    }
  }
  _getRegionECPMThresholds() {
    switch (this._traitData.regionType) {
      case 4:
        return ECPM_THRESHOLDS_GP_FIRST_LOAD;
      case 3:
        return ECPM_THRESHOLDS_IOS_FIRST_CACHE;
      case 2:
        return ECPM_THRESHOLDS_IOS_FIRST_SHOW;
      default:
        return ECPM_THRESHOLDS_GP_FIRST_SHOW;
    }
  }
  _tryGetFirstEcpm() {
    if (!this._hasFirstEcpm) {
      var t = AdModel.getInstance(),
        e = 0;
      if (this._traitData.useLoadEcpm) {
        if (!(e = t.getFirstInterLoadEcpm())) {
          if (!mj.sdk.canInvoke("callNativeGetFirstEcpm")) return;
          (e = mj.sdk.getFirstInterLoadEcpm()) && e > 0 && t.setFirstInterLoadEcpm(e);
        }
      } else e = t.getFirstInterEcpm();
      if (e) {
        this._firstInterEcpm = e;
        this._hasFirstEcpm = true;
        var r = this._getRegionECPMThresholds()[this._region];
        this._segmentIndex = calculateSegmentIndex(this._firstInterEcpm, r);
        this._calculatedCDTime = 1000 * this._segmentCDConfig[this._segmentIndex];
      }
    }
  }
  onInterAdCD_getCDTime(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this._hasFirstEcpm || this._tryGetFirstEcpm();
      if (this._hasFirstEcpm && this._calculatedCDTime > 0) {
        e({
          returnVal: this._calculatedCDTime,
          returnType: TraitCallbackReturnType.return
        });
      } else {
        e();
      }
    } else e();
  }
}
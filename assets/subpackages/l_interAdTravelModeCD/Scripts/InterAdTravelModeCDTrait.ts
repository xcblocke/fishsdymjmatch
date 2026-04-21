import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("InterAdTravelModeCDTrait")
export default class InterAdTravelModeCDTrait extends Trait {
  _travelCDTime = 30000;
  _normalCDTime = 0;
  _isInitialized = false;
  _lastGameType = MjGameType.None;
  static traitKey = "InterAdTravelModeCD";
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  onLoad() {
    var t;
    super.onLoad.call(this);
    void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.travelModeCDTime) && (this._travelCDTime = 1000 * this._traitData.travelModeCDTime);
  }
  ensureInitialized() {
    if (!this._isInitialized) {
      this.localData.travelRemainingCD = this._travelCDTime;
      this.localData.normalRemainingCD = this.getNormalCDTime();
      this.localData.hallEnterTime = 0;
      this._isInitialized = true;
    }
  }
  getInterAdCDTrait() {
    var e = mj.getClassByName("InterAdCDTrait");
    if (e) {
      var t = e.getInstance();
      if (t && true === t.eventEnabled) return t;
    }
    return null;
  }
  getNormalCDTime() {
    if (this._normalCDTime > 0) return this._normalCDTime;
    var e = this.getInterAdCDTrait();
    if (e && e.getCDTime) {
      this._normalCDTime = e.getCDTime();
    } else {
      this._normalCDTime = 70000;
    }
    return this._normalCDTime;
  }
  onMainGameCtrl_uiDes(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.ensureInitialized();
      var a = this.getInterAdCDTrait();
      if (a) {
        var r = Date.now(),
          i = a.getRemainingCD();
        if (this._lastGameType === MjGameType.Travel) {
          this.localData.travelRemainingCD = i;
        } else {
          this._lastGameType !== MjGameType.None && (this.localData.normalRemainingCD = i);
        }
        0 === this.localData.hallEnterTime && (this.localData.hallEnterTime = r);
        t();
      } else t();
    } else t();
  }
  onHallCtl_viewDidShow(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.ensureInitialized();
      if (0 === this.localData.hallEnterTime) {
        var a = Date.now();
        this.localData.hallEnterTime = a;
      }
      t();
    } else t();
  }
  isHallNoCdTimeEnabled() {
    var e = mj.getClassByName("HallNoCdTimeTrait");
    if (e) {
      var t = e.getInstance();
      if (t && true === t.eventEnabled) return true;
    }
    return false;
  }
  onMainGameCtrl_vwLoad(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.ensureInitialized();
      var a = this.getInterAdCDTrait();
      if (a) {
        var r = UserModel.getInstance().getCurrentGameType();
        this._lastGameType = r;
        var i,
          n = this.isHallNoCdTimeEnabled(),
          l = Date.now();
        i = n ? 0 : this.localData.hallEnterTime > 0 ? l - this.localData.hallEnterTime : 0;
        var o = 0,
          c = 0;
        if (r === MjGameType.Travel) {
          o = this.localData.travelRemainingCD || 0;
          c = this._travelCDTime;
        } else {
          o = this.localData.normalRemainingCD || 0;
          c = this.getNormalCDTime();
        }
        var p = l - (c - Math.max(0, o - i));
        a.adjustLastPlayTime(p);
        this.localData.hallEnterTime = 0;
        t();
      } else t();
    } else t();
  }
  onInterAdCD_getCDTime(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var a = UserModel.getInstance().getCurrentGameType();
      a === MjGameType.None && (a = this._lastGameType);
      if (a === MjGameType.Travel) {
        t({
          returnVal: this._travelCDTime,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else {
        t();
      }
    } else t();
  }
  onAdMgr_interAdClose(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var a = UserModel.getInstance().getCurrentGameType();
      a === MjGameType.None && (a = this._lastGameType);
      if (a === MjGameType.Travel) this.localData.travelRemainingCD = this._travelCDTime;else if (a !== MjGameType.None) {
        var r = this.getNormalCDTime();
        this.localData.normalRemainingCD = r;
      }
      t();
    } else t();
  }
}
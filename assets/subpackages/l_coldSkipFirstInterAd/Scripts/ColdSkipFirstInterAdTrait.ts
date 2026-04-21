import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
import AdManager from '../../../Scripts/base/ad/AdManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("ColdSkipFirstInterAdTrait")
export default class ColdSkipFirstInterAdTrait extends Trait {
  _freeCount = 1;
  _consumedCount = 0;
  _checkDailyPlayed = false;
  _coldStartFirstAdChecked = false;
  _isNeedWifiOrCache = false;
  static traitKey = "ColdSkipFirstInterAd";
  onLoad() {
    var e, a, r, i, o;
    super.onLoad.call(this);
    this._freeCount = void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.count) ? this._traitData.count : 1;
    this._checkDailyPlayed = null !== (r = null === (a = this._traitData) || void 0 === a ? void 0 : a.checkDailyPlayed) && void 0 !== r && r;
    this._isNeedWifiOrCache = null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.isNeedWifiOrCache) && void 0 !== o && o;
    if (this._checkDailyPlayed) {
      this.localData.lastInterAdDate || (this.localData.lastInterAdDate = "");
      void 0 === this.localData.dailyInterAdPlayed && (this.localData.dailyInterAdPlayed = false);
      void 0 === this.localData.dailySkipCount && (this.localData.dailySkipCount = 0);
      this.checkAndResetDailyStatus();
      this._coldStartFirstAdChecked = false;
    } else this._consumedCount = 0;
  }
  checkAndResetDailyStatus() {
    var t = this.getTodayDateString(),
      e = this.localData.lastInterAdDate;
    if (e && e !== t) {
      this.localData.dailyInterAdPlayed = false;
      this.localData.dailySkipCount = 0;
    }
  }
  getTodayDateString() {
    var t = new Date();
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  onAdMgr_interAdClose(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._checkDailyPlayed) {
        var a = this.getTodayDateString();
        if (!this.localData.dailyInterAdPlayed) {
          this.localData.dailyInterAdPlayed = true;
          this.localData.lastInterAdDate = a;
        }
      } else this._consumedCount++;
      e();
    } else e();
  }
  onAdMgr_chkInterAd(t, e) {
    if (this._checkDailyPlayed) {
      if (this._coldStartFirstAdChecked) {
        e();
        return;
      }
      this._coldStartFirstAdChecked = true;
      if (this.localData.dailyInterAdPlayed && this.localData.dailySkipCount < this._freeCount) {
        if (this._isNeedWifiOrCache) {
          var a = isNetworkAvailable(),
            r = AdManager.getInstance().checkInterAdIsReady();
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
          returnType: TraitCallbackReturnType.return
        });
        return;
      }
      this.localData.dailyInterAdPlayed;
      e();
    } else if (this._consumedCount < this._freeCount) {
      if (this._isNeedWifiOrCache) {
        a = isNetworkAvailable(), r = AdManager.getInstance().checkInterAdIsReady();
        if (!a && !r) {
          e();
          return;
        }
      }
      this._consumedCount++;
      e({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}
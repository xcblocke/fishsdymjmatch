import DateManager from '../../../Scripts/core/simulator/util/DateManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("RatingDialogTrait")
export default class RatingDialogTrait extends Trait {
  _maxShowCount = 4;
  _nextCallback = null;
  static traitKey = "RatingDialog";
  static nextTimeOut = -1;
  onLoad() {
    super.onLoad.call(this);
    this.registerTile2WinEvent();
    this.initValue();
    this.updateActiveDays();
  }
  registerTile2WinEvent() {
    this.registerEvent([{
      event: "Tile2WinVw_popNextView",
      priority: 30
    }]);
  }
  initValue() {
    var t, e, o, i;
    if (!this.localData.isFirstInit) {
      this.localData.isFirstInit = 1;
      this.localData.totalShowCount = 0;
      this.localData.closeCount = 0;
      this.localData.lastRatingStars = 0;
      this.localData.ratingCount = 0;
      this.localData.lastShowActiveDays = 0;
      this.localData.activeDays = 0;
      this.localData.lastActiveDate = 0;
      this.localData.hasSubmittedHighRating = false;
      this.localData.hasReachedMaxShows = false;
      this.localData.lowStarFirstSubmitShowCount = 0;
      this.localData.totalShowCountDynamicModify = 0;
      this.localData.nextShowIntervalDaysDynamicModify = 0;
    }
    this._config = {
      firstShowRequiredLevels: null !== (t = this._traitData.firstShowRequiredLevels) && void 0 !== t ? t : 9,
      justCloseShowCount: null !== (e = this._traitData.justCloseShowCount) && void 0 !== e ? e : 3,
      lowStarNextShowDays: null !== (o = this._traitData.lowStarNextShowDays) && void 0 !== o ? o : 0,
      lowStarSubmitIndex: null !== (i = this._traitData.lowStarSubmitIndex) && void 0 !== i ? i : 0
    };
    this.localData.totalShowCount > this.localData.closeCount + this.localData.ratingCount && (this.localData.closeCount = this.localData.totalShowCount - this.localData.ratingCount);
  }
  updateActiveDays() {
    var t = Date.now(),
      e = this.localData.lastActiveDate;
    if (DateManager.getInstance().isNewDay(e, t)) {
      this.localData.activeDays++;
      this.localData.lastActiveDate = t;
    }
  }
  checkAndShowRatingDialog(t, e = false, o = {}) {
    if (this.shouldShowDialog()) {
      o.hasRating = true;
      this._nextCallback = t;
      this.showRatingDialog(e);
      this.recordDialogShown();
    } else t && t();
  }
  shouldShowDialog() {
    this.updateActiveDays();
    if (!this.isNetworkAvailable()) return false;
    if (this.localData.hasSubmittedHighRating) return false;
    if (this.localData.hasReachedMaxShows) return false;
    if (this.localData.totalShowCount >= this._maxShowCount) {
      this.localData.hasReachedMaxShows = true;
      return false;
    }
    if (0 === this.localData.totalShowCount) {
      return this.getCurrentLevelsPassed() >= this._config.firstShowRequiredLevels;
    }
    return this.checkSubsequentShowConditions();
  }
  getCurrentLevelsPassed() {
    var t = UserModel.getInstance().getMainGameData().getLevelId() || 0;
    return Math.max(0, t - 1);
  }
  checkSubsequentShowConditions() {
    var t = this.localData.activeDays - this.localData.lastShowActiveDays - 1;
    if (this.localData.totalShowCountDynamicModify > 0 && this.localData.totalShowCount >= this.localData.totalShowCountDynamicModify) return false;
    if (this.localData.lastRatingStars > 0 && this.localData.lastRatingStars <= 3) {
      if (this.localData.lowStarFirstSubmitShowCount > 0 && this.localData.totalShowCount >= 2) {
        this.localData.hasReachedMaxShows = true;
        return false;
      }
      if (t < this.getLowStarInterval()) return false;
    }
    if (this.localData.closeCount > 0) {
      if (this.localData.closeCount >= 4) {
        this.localData.hasReachedMaxShows = true;
        return false;
      }
      var e = 0;
      switch (this.localData.closeCount) {
        case 1:
          e = 2;
          break;
        case 2:
          e = 3;
          break;
        case 3:
          e = 4;
          break;
        default:
          e = 4;
      }
      if (t < e) return false;
    }
    return true;
  }
  recordDialogShown() {
    this.localData.totalShowCount++;
    this.localData.lastShowActiveDays = this.localData.activeDays;
  }
  isNetworkAvailable() {
    if (cc.sys.isNative) {
      return 0 !== cc.sys.getNetworkType();
    }
    return navigator.onLine;
  }
  showRatingDialog(t = false) {
    this.pushController("UIRatingDialogController", {
      bgStyle: null,
      isShowAction: false,
      isGlobal: t
    });
  }
  @mj.traitEvent("RatingDlg_onUserRating")
  onUserRating(t) {
    this.localData.lastRatingStars = t;
    this.localData.ratingCount++;
    if (t >= 4) {
      this.localData.hasSubmittedHighRating = true;
      this.callGotoStore(t);
    } else {
      0 === this.localData.lowStarFirstSubmitShowCount && (this.localData.lowStarFirstSubmitShowCount = this.localData.totalShowCount);
      this._config.lowStarSubmitIndex > 0 && this.localData.totalShowCount == this._config.lowStarSubmitIndex && (this.localData.nextShowIntervalDaysDynamicModify = this._config.lowStarNextShowDays);
    }
  }
  @mj.traitEvent("RatingDlg_GotoStore")
  callGotoStore() {
    mj.sdk.comment("1");
  }
  onUserClose() {
    this.localData.closeCount++;
    this._config.justCloseShowCount > 0 && 1 == this.localData.closeCount && (this.localData.totalShowCountDynamicModify = this.localData.totalShowCount + this._config.justCloseShowCount);
  }
  isSlideRatingEnabled() {
    return "1" == this._traitData.slideRatingEnabled;
  }
  shouldBlockOtherPopup() {
    return this.shouldShowDialog();
  }
  @mj.traitEvent("RatingDlg_getLowStarIntv")
  getLowStarInterval() {
    var t = 4;
    this.localData.nextShowIntervalDaysDynamicModify > 0 && (t = this.localData.nextShowIntervalDaysDynamicModify);
    return t;
  }
  onWinVw_popNextView(t, e) {
    var o, i;
    t.args[0] = t.args[0] || {};
    var a = null !== (i = null === (o = t.args[0]) || void 0 === o ? void 0 : o.immediateNext) && void 0 !== i && i;
    this._nextCallback = null;
    this.checkAndShowRatingDialog(function () {
      e();
    }, a, t.args[0]);
  }
  onTile2WinVw_popNextView(t, e) {
    var o, i;
    t.args[0] = t.args[0] || {};
    var a = null !== (i = null === (o = t.args[0]) || void 0 === o ? void 0 : o.immediateNext) && void 0 !== i && i;
    this._nextCallback = null;
    this.checkAndShowRatingDialog(function () {
      e();
    }, a, t.args[0]);
  }
  onWinVw_showWinVw(t, e) {
    e();
    this.checkAndShowRatingDialog();
  }
  callNextCallback() {
    this._nextCallback && this._nextCallback();
    this._nextCallback = null;
  }
}
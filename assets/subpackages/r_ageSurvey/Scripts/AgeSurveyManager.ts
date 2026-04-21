import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { SingletonFactory } from '../../../Scripts/framework/utils/SingletonFactory';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AgeSurveyModel from './AgeSurveyModel';
enum i {
  Show = 0,
  Skip = 1,
  Stop = 2,
}
@mj.class("AgeSurveyManager")
export default class AgeSurveyManager {
  _configs = [];
  _descI18nIds = [];
  _isShowing = false;
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  setConfigs(t, e) {
    this._configs = t || [];
    this._descI18nIds = e || [];
  }
  @mj.traitEvent("AgeSrvMgr_getConfigs")
  getConfigs() {
    return this._configs;
  }
  @mj.traitEvent("AgeSrvMgr_isCanReward")
  isCanReward(t) {
    var e = this.getConfigs()[t];
    return !!(null == e ? void 0 : e.rewardConfig);
  }
  @mj.traitEvent("AgeSrvMgr_canShowSurvey")
  canShowSurvey() {
    return true;
  }
  @mj.traitEvent("AgeSrvMgr_isNeedChkGuide")
  isNeedCheckGuide() {
    return true;
  }
  @mj.traitEvent("AgeSrvMgr_isShuffle")
  isShuffle() {
    return true;
  }
  @mj.traitEvent("AgeSrvMgr_descI18nIds")
  getDescI18nIds() {
    return this._descI18nIds;
  }
  @mj.traitEvent("AgeSrvMgr_getAgeRanges")
  getAgeRanges(t) {
    var e;
    return (null === (e = this.getConfigs()[t]) || void 0 === e ? void 0 : e.ageRanges) || [];
  }
  @mj.traitEvent("AgeSrvMgr_getRewardCfg")
  getRewardConfig(t) {
    var e = this.getConfigs()[t];
    return e ? this.parseRewardConfig(e) : null;
  }
  @mj.traitEvent("AgeSrvMgr_autoCloseTime")
  getAutoCloseTime() {
    return 0;
  }
  tryShowNextSurvey(t = 0, e?) {
    var r = this;
    if (this._isShowing) return false;
    for (var o = this.getConfigs(), n = t; n < o.length; n++) {
      var a = o[n];
      if (!a) break;
      if (!this.canShowSurvey(n)) break;
      var s = this.shouldShowSurvey(n);
      if (s !== i.Skip) {
        if (s === i.Stop) break;
        this._isShowing = true;
        this.showAgeSurvey(a, n, function () {
          r._isShowing = false;
          null == e || e();
        });
        break;
      }
    }
    return this._isShowing;
  }
  shouldShowSurvey(t) {
    var e,
      r = AgeSurveyModel.getInstance();
    if (r.isCompleted(t)) return i.Skip;
    if (r.isClosed(t)) return i.Skip;
    if (0 === t) return this.isNeedCheckGuide() && UserModel.getInstance().isGuideFinished() ? i.Skip : i.Show;
    var o = t - 1;
    if (!r.isCompleted(o)) return i.Stop;
    var n = this.getConfigs()[t],
      a = null !== (e = null == n ? void 0 : n.delayHours) && void 0 !== e ? e : 24;
    return r.isPassedHoursSince(o, a) ? i.Show : i.Stop;
  }
  getDescI18nId(t) {
    var e = this.getDescI18nIds();
    if (e) {
      if ("string" == typeof e) return e || void 0;
      if (0 !== e.length) return e[Math.min(t, e.length - 1)];
    }
  }
  parseAgeRanges(t) {
    return t && 0 !== t.length ? t.map(function (t) {
      return {
        id: t,
        label: t
      };
    }) : [];
  }
  parseRewardConfig(t) {
    var e, r, o;
    return t.rewardConfig ? {
      shuffleCount: null !== (e = t.rewardConfig.shuffle) && void 0 !== e ? e : 0,
      hintCount: null !== (r = t.rewardConfig.hint) && void 0 !== r ? r : 0,
      adMultiplier: null !== (o = t.rewardConfig.adMultiplier) && void 0 !== o ? o : 1
    } : null;
  }
  showAgeSurvey(t, e, r) {
    var o = this.getAgeRanges(e),
      i = this.parseAgeRanges(o),
      a = this.isCanReward(e) ? this.getRewardConfig(e) : null,
      s = this.isShuffle(e),
      c = this.getDescI18nId(e),
      l = this.getAutoCloseTime(e);
    if (0 !== i.length) {
      ControllerManager.getInstance().pushViewByController("AgeSurveyController", {
        ageRanges: i,
        rewardConfig: a,
        surveyIndex: e,
        shuffle: s,
        descI18nId: c,
        autoCloseTime: l,
        onClose: r
      });
    } else {
      r();
    }
  }
}
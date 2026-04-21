import { SingletonFactory } from '../../../framework/utils/SingletonFactory';
import { DGameAdShow, AdCallBackType } from '../../dot/DGameAdShow';
import { DGameBannerRevenue } from '../../dot/DGameBannerRevenue';
import { DGameAdRevenue } from '../../dot/DGameAdRevenue';
import { DotGameAdShowStage } from '../../dot/DGameAdShowStage';
import { DotAdVisit } from '../../dot/DAdVisit';
import AdModel from './AdModel';
import { AdType } from '../../../base/ad/AdManager';
export default class AdTracker {
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  trackInterRequest(e) {
    AdModel.getInstance().updateRequestAdInter();
    DGameAdRevenue.dot(e);
  }
  trackRewardRequest(e) {
    AdModel.getInstance().updateRequestAdReward();
    DGameAdRevenue.dot(e);
  }
  trackInterClose(e, t) {
    if ("" !== e && null != e) {
      var o = Number(e);
      isNaN(o) || AdModel.getInstance().updateInterAdIncome(o / 1000);
    }
    AdModel.getInstance().updateAdInterSuccess(t);
  }
  trackRewardClose(e, t) {
    if ("" !== e && null != e) {
      var o = Number(e);
      isNaN(o) || AdModel.getInstance().updateRewardAdIncome(o / 1000);
    }
    AdModel.getInstance().updateAdRewardSuccess(t);
  }
  trackRewardShow(e, t, o, n, r) {
    DGameAdShow.dot({
      adType: AdType.RewardVideo,
      callBackType: AdCallBackType.Close,
      sTime: t,
      adSceneId: o,
      extraData: n,
      dotTime: r,
      adPosition: e
    });
  }
  trackInterShow(e, t, o, n, r) {
    DGameAdShow.dot({
      adType: AdType.Interstitial,
      sTime: t,
      callBackType: AdCallBackType.Close,
      adSceneId: o,
      extraData: n,
      isReward: true,
      adPosition: e,
      dotTime: r
    });
  }
  trackBannerRevenue() {
    DGameBannerRevenue.dot();
  }
  trackAdStageStart(e) {
    DotGameAdShowStage.dot(e, "start");
  }
  trackAdStageEnd(e, t, o, n) {
    DotGameAdShowStage.dot(e, "end", t ? "true" : "false", o, n);
  }
  trackInterVisit(e) {
    DotAdVisit.dotAdVisitInterAD(e);
  }
}
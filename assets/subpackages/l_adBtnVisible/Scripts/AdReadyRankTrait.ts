import { EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("AdReadyRankTrait")
export default class AdReadyRankTrait extends Trait {
  static traitKey = "AdReadyRank";
  onLoad() {
    super.onLoad.call(this);
  }
  getExperimentId() {
    return this.traitData.experimentId || 1;
  }
  isNeedReadShowAd() {
    return this.traitData.isNeedReadyShowAd || false;
  }
  isCoolStartClaimed() {
    return this.traitData.isCoolStartClaimed || false;
  }
  isReadyAd() {
    return AdManager.getInstance().checkVideoAdIsReady();
  }
  onGsListener_onNewGame(t, e) {
    this.dispatchReward(true);
    e();
  }
  onGsListener_onReplayGame(t, e) {
    this.dispatchReward(true);
    e();
  }
  onGsListener_onSurvivalGame(t, e) {
    this.dispatchReward(true);
    e();
  }
  onHallVw_updateUI(t, e) {
    this.dispatchReward(false);
    e();
  }
  onRankBoxVw_isShowAdBtn(t, e) {
    if (this.isNeedReadShowAd()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.isReadyAd()
      });
    } else {
      e();
    }
  }
  onRankBoxVw_adBtnClick(t, e) {
    var o, r, i;
    if (this.isCoolStartClaimed()) {
      var a = null === (o = t.ins) || void 0 === o ? void 0 : o.getReward();
      if (a) {
        for (var n = {
            adScale: (null === (r = t.ins) || void 0 === r ? void 0 : r.getAdScale()) || 1,
            items: [],
            rank: (null === (i = t.ins) || void 0 === i ? void 0 : i.getMyRank()) || 1
          }, s = 0; s < a.Items.length; s++) {
          var d = a.Items[s],
            c = a.Counts[s];
          c <= 0 || n.items.push({
            item: d,
            count: c
          });
        }
        this.saveRewardConfig(n);
      }
    }
    e();
  }
  onRankBoxVw_adSuccess(t, e) {
    var o, r;
    this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
    e();
  }
  onRankBoxVw_adFailed(t, e) {
    this.isCoolStartClaimed() && this.clearRewardConfig();
    e();
  }
  saveRewardConfig(t) {
    this.localData.rewardConfig = t;
  }
  clearRewardConfig() {
    this.localData.rewardConfig && (this.localData.rewardConfig = null);
  }
  dispatchReward(t) {
    if (this.isCoolStartClaimed()) {
      var e = this.localData.rewardConfig;
      if (e && e.items && 0 !== e.items.length) {
        for (var o = e.adScale - 1, r = 0; r < e.items.length; r++) {
          var i = e.items[r],
            a = i.count * o;
          if (!(a <= 0)) {
            var d = EGetItemReasonId.LeaderBoardAd,
              c = "冷启动_排行榜宝箱奖励_看广告翻倍_到达第" + e.rank + "名";
            GameUtils.deliverProp({
              isInGame: t,
              reasonId: d,
              reasonInfo: c,
              itemType: i.item,
              itemCount: a
            });
          }
        }
        this.clearRewardConfig();
      }
    }
  }
}
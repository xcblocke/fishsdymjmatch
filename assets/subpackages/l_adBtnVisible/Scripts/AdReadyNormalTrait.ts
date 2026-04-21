import { EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("AdReadyNormalTrait")
export default class AdReadyNormalTrait extends Trait {
  static traitKey = "AdReadyNormal";
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
  onLoad() {
    super.onLoad.call(this);
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
  onLvBoxVw_isShowAdBtn(t, e) {
    if (this.isNeedReadShowAd()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.isReadyAd()
      });
    } else {
      e();
    }
  }
  onLvBoxVw_adFailed(t, e) {
    this.isCoolStartClaimed() && this.clearRewardConfig();
    e();
  }
  onLvBoxVw_adSuccess(t, e) {
    var o, r;
    this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
    e();
  }
  onBoxOpenUI_isShowAdBtn(t, e) {
    if (this.isNeedReadShowAd()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.isReadyAd()
      });
    } else {
      e();
    }
  }
  onBoxOpenUI_adSuccess(t, e) {
    var o, r;
    this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
    e();
  }
  onBoxOpenUI_adFailed(t, e) {
    this.isCoolStartClaimed() && this.clearRewardConfig();
    e();
  }
  onLvBoxVw_adBtnClick(t, e) {
    var o, r;
    if (this.isCoolStartClaimed()) {
      var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
      if (i) {
        var a = {
          adScale: i.adScale,
          items: i.items,
          rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
        };
        this.saveRewardConfig(a);
      }
    }
    e();
  }
  onBoxOpenUI_adBtnClick(t, e) {
    var o, r;
    if (this.isCoolStartClaimed()) {
      var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
      if (i) {
        var a = {
          adScale: i.adScale,
          items: i.rewards,
          rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
        };
        this.saveRewardConfig(a);
      }
    }
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
            var d = EGetItemReasonId.LevelBoxAd,
              c = "冷启动_主关卡宝箱奖励_看广告翻倍_到达第" + e.rewardLevel + "关";
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
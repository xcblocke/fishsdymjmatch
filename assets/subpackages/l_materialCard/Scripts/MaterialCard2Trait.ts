import MaterialCardBaseTrait from './MaterialCardBaseTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MaterialCard2Trait")
export default class MaterialCard2Trait extends MaterialCardBaseTrait {
  static traitKey = "MaterialCard2";
  static ALL_MODES = [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge];
  onLoad() {
    super.onLoad.call(this);
    this._initData();
  }
  _initData() {
    this.localData.modes || (this.localData.modes = {});
  }
  setCurMaterialCard(t) {
    var e = UserModel.getInstance();
    e.normalData.setCardMaterialID(t);
    e.travelData.setCardMaterialID(t);
    e.dailyChallengeData.setCardMaterialID(t);
  }
  _setAdFlagForAllModes() {
    this.localData.modes || (this.localData.modes = {});
    var t = this.localData.modes;
    MaterialCard2Trait.ALL_MODES.forEach(function (e) {
      t[e] || (t[e] = {
        hadInterAdLastRound: false,
        hadInterAdThisRound: false
      });
      var r = t[e];
      r && (r.hadInterAdLastRound = true);
    });
    this.localData.modes = this.localData.modes;
  }
  _clearAdFlagForAllModes() {
    if (this.localData.modes) {
      var t = this.localData.modes;
      MaterialCard2Trait.ALL_MODES.forEach(function (e) {
        var r = t[e];
        r && (r.hadInterAdLastRound = false);
      });
      this.localData.modes = this.localData.modes;
    }
  }
  _getModeData(t) {
    var e;
    this.localData.modes || (this.localData.modes = {});
    if (!this.localData.modes[t]) {
      this.localData.modes[t] = {
        hadInterAdLastRound: false,
        hadInterAdThisRound: false
      };
      this.localData.modes = this.localData.modes;
    }
    return null !== (e = this.localData.modes[t]) && void 0 !== e ? e : {
      hadInterAdLastRound: false,
      hadInterAdThisRound: false
    };
  }
  onAdMgr_interAdClose(t, e) {
    try {
      var a = this.getCurrentGameType();
      this._getModeData(a).hadInterAdThisRound = true;
      this.localData.modes = this.localData.modes;
      this._setAdFlagForAllModes();
    } catch (t) {
      console.error("[" + MaterialCard2Trait.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onGsListener_onNewGame(t, e) {
    try {
      var a = this.getCurrentGameType();
      if (!this.isNormalMode() && !this.isTravelMode() && !this.isDailyMode()) {
        e();
        return;
      }
      this._getModeData(a).hadInterAdLastRound && this.switchToNextMaterialCard();
    } catch (t) {
      console.error("[" + MaterialCard2Trait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onWinVw_showWinVw(t, e) {
    this._handleWinEvent("Normal");
    e();
  }
  onTLWinVw_showTLWinVw(t, e) {
    this._handleWinEvent("Travel");
    e();
  }
  onDCWinVw_showWinVw(t, e) {
    this._handleWinEvent("DailyChallenge");
    e();
  }
  _handleWinEvent() {
    var t, e;
    try {
      var a = this.getCurrentGameType(),
        i = null === (t = this.localData.modes) || void 0 === t ? void 0 : t[a];
      (null == i ? void 0 : i.hadInterAdThisRound) || this._clearAdFlagForAllModes();
      var o = null === (e = this.localData.modes) || void 0 === e ? void 0 : e[a];
      if (o) {
        o.hadInterAdThisRound = false;
        this.localData.modes = this.localData.modes;
      }
    } catch (t) {
      console.error("[" + MaterialCard2Trait.traitKey + "] 胜利处理失败: " + (null == t ? void 0 : t.message));
    }
  }
}
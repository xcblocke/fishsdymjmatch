import MaterialCardBaseTrait from './MaterialCardBaseTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MaterialCard6Trait")
export default class MaterialCard6Trait extends MaterialCardBaseTrait {
  _startLevel = 6;
  _interval = 5;
  static traitKey = "MaterialCard6";
  onLoad() {
    var e, r, a, i;
    super.onLoad.call(this);
    this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
    this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
  }
  _getModeData(t) {
    var e;
    if (!this.localData[t]) {
      this.localData[t] = {
        shouldSwitchNextRound: false
      };
      this.localData[t] = this.localData[t];
    }
    return null !== (e = this.localData[t]) && void 0 !== e ? e : {
      shouldSwitchNextRound: false
    };
  }
  _shouldEnableForLevel(t) {
    return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
  }
  onGsListener_onNewGame(t, e) {
    try {
      var a = this.getCurrentGameType();
      if (this.isNormalMode()) {
        var i = this.getCurrentLevel();
        this._shouldEnableForLevel(i) && this.switchToNextMaterialCard();
      } else if (this.isDailyMode()) {
        var o = this._getModeData(a);
        if (o.shouldSwitchNextRound) {
          this.switchToNextMaterialCard();
          o.shouldSwitchNextRound = false;
          this.localData[a] = this.localData[a];
        }
      }
      e();
    } catch (t) {
      console.error("[" + MaterialCard6Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onTLWinVw_showTLWinVw(t, e) {
    try {
      var a = t.ins,
        i = null == a ? void 0 : a._curReward,
        o = null == a ? void 0 : a._curLv,
        l = null == a ? void 0 : a._canGain;
      i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
    } catch (t) {
      console.error("[" + MaterialCard6Trait.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onDCWinVw_showWinVw(t, e) {
    try {
      var a = MjGameType.DailyChallenge;
      this._getModeData(a).shouldSwitchNextRound = true;
      this.localData[a] = this.localData[a];
    } catch (t) {
      console.error("[" + MaterialCard6Trait.traitKey + "] 每日挑战胜利处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
}
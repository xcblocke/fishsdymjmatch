import MaterialCardBaseTrait from './MaterialCardBaseTrait';
@mj.trait
@mj.class("MaterialCard4Trait")
export default class MaterialCard4Trait extends MaterialCardBaseTrait {
  _startLevel = 6;
  _interval = 5;
  static traitKey = "MaterialCard4";
  onLoad() {
    var e, r, a, i;
    super.onLoad.call(this);
    this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
    this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
  }
  _shouldEnableForLevel(t) {
    return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (this.isNormalMode()) {
        var a = this.getCurrentLevel();
        this._shouldEnableForLevel(a) && this.switchToNextMaterialCard();
      }
      e();
    } catch (t) {
      console.error("[" + MaterialCard4Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
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
      console.error("[" + MaterialCard4Trait.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
}
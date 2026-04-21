import MaterialCardBaseTrait from './MaterialCardBaseTrait';
@mj.trait
@mj.class("MaterialCard3Trait")
export default class MaterialCard3Trait extends MaterialCardBaseTrait {
  _startLevel = 6;
  _interval = 5;
  static traitKey = "MaterialCard3";
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
      if (!this.isNormalMode()) {
        e();
        return;
      }
      var a = this.getCurrentLevel();
      if (!this._shouldEnableForLevel(a)) {
        e();
        return;
      }
      this.switchToNextMaterialCard();
      e();
    } catch (t) {
      console.error("[" + MaterialCard3Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
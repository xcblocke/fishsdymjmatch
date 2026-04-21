import MaterialCardBaseTrait from './MaterialCardBaseTrait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MaterialCard9Trait")
export default class MaterialCard9Trait extends MaterialCardBaseTrait {
  _startLevel = 20;
  _interval = 1;
  static traitKey = "MaterialCard9";
  onLoad() {
    var e, r, a, i;
    super.onLoad.call(this);
    this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 20;
    this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 1;
  }
  _getCurrentModeLevel() {
    var t,
      e,
      r = UserModel.getInstance(),
      a = r.getCurrentGameData();
    return this.isNormalMode() ? null !== (t = r.normalData.getLevelId()) && void 0 !== t ? t : 0 : this.isTravelMode() && null !== (e = a.getLevelId()) && void 0 !== e ? e : 0;
  }
  _shouldEnableForLevel(t) {
    return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (!this.isNormalMode() && !this.isTravelMode()) {
        e();
        return;
      }
      this.getCurrentGameType();
      var a = this._getCurrentModeLevel();
      if (!this._shouldEnableForLevel(a)) {
        e();
        return;
      }
      this.switchToNextMaterialCard();
      e();
    } catch (t) {
      console.error("[" + MaterialCard9Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
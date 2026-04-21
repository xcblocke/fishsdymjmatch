import MaterialCardBaseTrait from './MaterialCardBaseTrait';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MaterialCard11Trait")
export default class MaterialCard11Trait extends MaterialCardBaseTrait {
  static traitKey = "MaterialCard11";
  onLoad() {
    super.onLoad.call(this);
  }
  _getCurrentModeLevel() {
    var t,
      e,
      r = UserModel.getInstance(),
      a = r.getCurrentGameData();
    return this.isNormalMode() ? null !== (t = r.normalData.getLevelId()) && void 0 !== t ? t : 0 : this.isTravelMode() && null !== (e = a.getLevelId()) && void 0 !== e ? e : 0;
  }
  _isHardLevel(t) {
    return GameUtils.isTypeHardLevel(this.getCurrentGameType(), t);
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (!this.isNormalMode() && !this.isTravelMode()) {
        e();
        return;
      }
      this.getCurrentGameType();
      var a = this._getCurrentModeLevel();
      if (this._isHardLevel(a)) {
        this.switchToNextMaterialCard();
      } else {
        0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
      }
      e();
    } catch (t) {
      console.error("[" + MaterialCard11Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
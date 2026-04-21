import MaterialCardBaseTrait from './MaterialCardBaseTrait';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("MaterialCard10Trait")
export default class MaterialCard10Trait extends MaterialCardBaseTrait {
  static traitKey = "MaterialCard10";
  onLoad() {
    super.onLoad.call(this);
  }
  _isHardLevel(t) {
    return GameUtils.isTypeHardLevel(this.getCurrentGameType(), t);
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (!this.isNormalMode()) {
        e();
        return;
      }
      var a = this.getCurrentLevel();
      if (this._isHardLevel(a)) {
        this.switchToNextMaterialCard();
      } else {
        0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
      }
      e();
    } catch (t) {
      console.error("[" + MaterialCard10Trait.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
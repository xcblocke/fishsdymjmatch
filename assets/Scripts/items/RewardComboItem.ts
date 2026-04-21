import BaseUI from '../framework/ui/BaseUI';
import GameUtils from '../core/simulator/util/GameUtils';
@mj.class
export default class RewardComboItem extends BaseUI {
  _spineAnim = null;
  static prefabUrl = "prefabs/effects/EffectRewardCombo";
  onLoad() {
    super.onLoad.call(this);
    this._initComponents();
  }
  @mj.traitEvent("RwdComboItem_initComp")
  _initComponents() {
    this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
    this._spineAnim;
  }
  @mj.traitEvent("RwdComboItem_startPlayAni")
  startPlayAni(e, t) {
    var o = this;
    GameUtils.playSpine(this._spineAnim, e, false, function () {
      null == t || t();
      o.node.destroy();
    });
  }
}
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class DianZanItem extends BaseUI {
  _spineAnim = null;
  static prefabUrl = "prefabs/effects/EffectDianZhan";
  onLoad() {
    super.onLoad.call(this);
    this._initComponents();
  }
  @mj.traitEvent("DianZanItem_initComp")
  _initComponents() {
    this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
    this._spineAnim;
  }
  startPlayAni(t = "in", e?) {
    var n = this;
    GameUtils.playSpine(this._spineAnim, t, false, function () {
      null == e || e();
      n.node.destroy();
    });
  }
  setScale(t) {
    this._spineAnim.node.scale = t;
  }
}
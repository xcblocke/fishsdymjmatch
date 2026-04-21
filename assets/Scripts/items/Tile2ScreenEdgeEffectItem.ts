import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import BaseUI from '../framework/ui/BaseUI';
@mj.class
export default class Tile2ScreenEdgeEffectItem extends BaseUI {
  _spinLeft = null;
  _spinRight = null;
  static getPrefabPath() {
    return "prefabs/effects/Tile2EffectScreenEdge";
  }
  static create() {
    return this.createUI(this.getPrefabPath()).then(function (e) {
      return e.getComponent(Tile2ScreenEdgeEffectItem);
    });
  }
  onLoad() {
    super.onLoad.call(this);
    this.initSpines();
  }
  initSpines() {
    var e = this.getSpinePath(),
      t = cc.find("leftNode/spin", this.node),
      o = cc.find("rightNode/spin", this.node);
    t && (this._spinLeft = BaseSpine.refreshWithNode(t, e));
    o && (this._spinRight = BaseSpine.refreshWithNode(o, e));
  }
  @mj.traitEvent("T2ScreenEEffIt_getSpPh")
  getSpinePath() {
    return "spine/tile2Combo/gameplay_combo_side";
  }
  playAnimation(e) {
    var t = this.getAnimationName(),
      o = false,
      n = function n() {
        if (!o) {
          o = true;
          null == e || e();
        }
      };
    this._spinLeft && this._spinLeft.setAnimation(t, 1, n);
    this._spinRight && this._spinRight.setAnimation(t, 1, n);
    this._spinLeft || this._spinRight || null == e || e();
  }
  getAnimationName() {
    return "in";
  }
}
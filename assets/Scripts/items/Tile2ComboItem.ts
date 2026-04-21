import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import BaseUI from '../framework/ui/BaseUI';
@mj.class
export default class Tile2ComboItem extends BaseUI {
  _spinCombo = null;
  _spinDown = null;
  _spinUp = null;
  _lblCombo = null;
  static getPrefabPath() {
    return "prefabs/effects/Tile2EffectCombo";
  }
  static create() {
    return this.createUI(this.getPrefabPath()).then(function (e) {
      return e.getComponent(Tile2ComboItem);
    });
  }
  onLoad() {
    var t;
    super.onLoad.call(this);
    this._lblCombo = null === (t = cc.find("rightNode/lblCombo", this.node)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this.initSpines();
  }
  initSpines() {
    var e = this.getSpinePath(),
      t = cc.find("spinCombo", this.node),
      o = cc.find("rightNode/spinDown", this.node),
      n = cc.find("rightNode/spinUp", this.node);
    t && (this._spinCombo = BaseSpine.refreshWithNode(t, e));
    o && (this._spinDown = BaseSpine.refreshWithNode(o, e));
    n && (this._spinUp = BaseSpine.refreshWithNode(n, e));
  }
  getSpinePath() {
    return "spine/combo/gameplay_combo_num";
  }
  setComboNum(e) {
    if (this._lblCombo) {
      this._lblCombo.string = this.formatComboString(e);
      this._lblCombo._forceUpdateRenderData();
    }
  }
  formatComboString(e) {
    return e.toString();
  }
  getLabelWidth() {
    return this._lblCombo ? this._lblCombo.node.width : 0;
  }
  adjustSpinePositions() {
    if (this._lblCombo) {
      var e = this._lblCombo.node.width;
      this._spinDown && (this._spinDown.node.position = cc.v3(e / 2, this._spinDown.node.y));
      this._spinUp && (this._spinUp.node.position = cc.v3(e / 2, this._spinUp.node.y));
    }
  }
  getAnimationConfig() {
    return {
      rawWidth: 137,
      lblScaleStart: 3,
      scaleDown: 0.7,
      scaleDownTime: 0.17,
      scaleUp: 1,
      scaleUpTime: 0.1,
      delay: 0.37,
      scaleEnd: 0.9,
      fadeTime: 0.17
    };
  }
  playComboAnimation(e) {
    this._spinCombo && this._spinCombo.setAnimation("in_combo", 1);
    this._spinDown && this._spinDown.setAnimation("in_down", 1);
    this._spinUp && this._spinUp.setAnimation("in_up", 1);
    if (this._lblCombo) {
      var t = this.getAnimationConfig(),
        o = this._lblCombo.node;
      cc.Tween.stopAllByTarget(o);
      o.scale = t.lblScaleStart;
      o.opacity = 255;
      cc.tween(o).to(t.scaleDownTime, {
        scale: t.scaleDown
      }).to(t.scaleUpTime, {
        scale: t.scaleUp
      }).delay(t.delay).to(t.fadeTime, {
        scale: t.scaleEnd,
        opacity: 0
      }).call(function () {
        null == e || e();
      }).start();
    } else null == e || e();
  }
  stopAllAnimations() {
    var e, t;
    cc.Tween.stopAllByTarget(this.node);
    this.stopAllTweensRecursively(this.node);
    var o = this.node.getComponentsInChildren(sp.Skeleton);
    try {
      for (var n = __values(o), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        (null == r ? void 0 : r.node) && r.clearTracks();
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  stopAllTweensRecursively(e) {
    var t, o;
    try {
      for (var n = __values(e.children), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        cc.Tween.stopAllByTarget(r);
        this.stopAllTweensRecursively(r);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
  }
}
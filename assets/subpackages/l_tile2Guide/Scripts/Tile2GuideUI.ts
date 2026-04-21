import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class Tile2GuideUI extends BaseUI {
  _showHand = false;
  static prefabUrl = "prefabs/ui/Tile2GuideView";
  static bundleName = "mainRes";
  @mj.traitEvent("Tile2GuideUI_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this._nodeHand = this.node.getChildByName("nodeHand");
    this._btnSkip = cc.find("skip/btnSkip", this.node);
    this._nodeTip = cc.find("nodeTip", this.node);
    this._text = cc.find("nodeTip/labelDesc1", this.node).getComponent(cc.RichText);
    this._handSpine = cc.find("nodeHand/guidehand", this.node).getComponent(sp.Skeleton);
    this._btnSkip.active = false;
    this._nodeHand.active = false;
    cc.isValid(this._nodeTip) && (this._nodeTip.active = false);
    this.OnButtonClick(this._btnSkip, this.onSkip.bind(this));
  }
  @mj.traitEvent("Tile2GuideUI_setText")
  setText(e, t) {
    var i = this._nodeTip,
      o = this._text,
      a = !(null == e || "" === String(e).trim());
    if (cc.isValid(i)) if (a) {
      i.active = true;
      o.string = e;
      if (t > 0) {
        this.playTextAnim({
          type: "switch"
        });
      } else {
        this.playTipAppearAni();
      }
    } else {
      cc.Tween.stopAllByTarget(i);
      cc.isValid(null == o ? void 0 : o.node) && cc.Tween.stopAllByTarget(o.node);
      i.active = false;
      o && (o.string = "");
    }
  }
  setGuidePosition(e, t, i) {
    var o = this;
    if (this._showHand != i || this._tileId != e) {
      this._showHand = i;
      if (i) {
        this._nodeHand.active = true;
        this.playHandSpi();
      }
      var a = this.node.parent.convertToNodeSpaceAR(t);
      this._tileId !== e && (this._tileId = e);
      cc.Tween.stopAllByTarget(this._nodeHand);
      if (i) {
        this._nodeHand.opacity = 255;
        cc.tween(this._nodeHand).to(0.23, {
          position: a
        }).call(function () {
          cc.isValid(o._nodeHand) && o._nodeHand.setPosition(a);
        }).start();
      } else this._nodeHand.opacity = 0;
    }
  }
  setShowHand(e) {
    this._nodeHand.active = e;
  }
  setTipPos(e) {
    var t = this._nodeTip;
    if (cc.isValid(t)) {
      var i = t.getComponent(cc.Widget);
      i && (i.enabled = false);
      t.setPosition(e.x, e.y);
    }
  }
  setShowSkip(e) {
    if (cc.isValid(this._btnSkip)) if (e && !this._btnSkip.active) {
      this._btnSkip.active = true;
      this.playSkipAppearAni();
    } else e || (this._btnSkip.active = false);
  }
  @mj.traitEvent("Tile2GuideUI_playHandSpi")
  playHandSpi() {
    var e = this;
    GameUtils.playSpine(this._handSpine, "in", false, function () {
      GameUtils.playSpine(e._handSpine, "init", true);
    });
  }
  @mj.traitEvent("Tile2GuideUI_skip")
  onSkip() {}
  playTipAppearAni() {
    var e = this._nodeTip,
      t = this._text ? this._text.node : null;
    if (cc.isValid(e)) {
      e.active = true;
      e.scaleX = 1;
      e.scaleY = 0.5;
      cc.Tween.stopAllByTarget(e);
      if (cc.isValid(t)) {
        t.opacity = 0;
        cc.Tween.stopAllByTarget(t);
      }
      cc.tween(e).to(0.33, {
        scaleY: 1
      }, {
        easing: "backOut"
      }).start();
      cc.isValid(t) && cc.tween(t).to(0.16, {
        opacity: 255
      }, {
        easing: "sineInOut"
      }).start();
    }
  }
  playSkipAppearAni() {
    var e = this._btnSkip;
    if (cc.isValid(e)) {
      e.scale = 0;
      e.opacity = 0;
      cc.Tween.stopAllByTarget(e);
      cc.tween(e).parallel(cc.tween().to(0.23, {
        scale: 1
      }, {
        easing: "backOut"
      }), cc.tween().to(0.16, {
        opacity: 255
      }, {
        easing: "circOut"
      })).start();
    }
  }
  playTextAnim(e) {
    var t = this._nodeTip,
      i = this._text,
      o = i ? i.node : null;
    if (cc.isValid(t) && cc.isValid(o)) {
      cc.Tween.stopAllByTarget(o);
      cc.Tween.stopAllByTarget(t);
      if ("switch" !== e.type) {
        if ("hide" === e.type) {
          var a = false;
          o.opacity < 255 && (o.opacity = 255);
          t.opacity < 255 && (t.opacity = 255);
          cc.tween(o).to(0.16, {
            opacity: 0
          }, {
            easing: "circOut"
          }).call(function () {
            if (!a) {
              a = true;
              (null == e ? void 0 : e.cb) && e.cb();
            }
          }).start();
          cc.tween(t).to(0.16, {
            opacity: 0
          }, {
            easing: "circOut"
          }).start();
        }
      } else cc.tween(o).to(0.16, {
        opacity: 0
      }, {
        easing: "circOut"
      }).call(function () {
        o.opacity = 0;
      }).to(0.16, {
        opacity: 255
      }, {
        easing: "sineInOut"
      }).call(function () {
        (null == e ? void 0 : e.cb) && e.cb();
      }).start();
    } else (null == e ? void 0 : e.cb) && e.cb();
  }
  getNodeHand() {
    return this._nodeHand;
  }
  getHandSpine() {
    return this._handSpine;
  }
}
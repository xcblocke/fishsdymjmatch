import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class GuideUI extends BaseUI {
  _showHand = false;
  static prefabUrl = "prefabs/ui/GLMahjongGuideView";
  static bundleName = "mainRes";
  @mj.traitEvent("GuideUI_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this._nodeHand = this.node.getChildByName("nodeHand");
    this._btnSkip = cc.find("skip/btnSkip", this.node);
    this._nodeTip = cc.find("nodeTip", this.node);
    this._text = cc.find("nodeTip/labelDesc1", this.node).getComponent(cc.RichText);
    this._handSpine = cc.find("nodeHand/guidehand", this.node).getComponent(sp.Skeleton);
    this._btnSkip.active = true;
    this._nodeHand.active = false;
    this.playSkipAppearAni();
    this.playTipAppearAni();
    this.OnButtonClick(this._btnSkip, this.onSkip.bind(this));
  }
  @mj.traitEvent("GuideUI_setText")
  setText(t) {
    t && (this._text.string = t);
  }
  setGuidePosition(t, e, i) {
    var n = this;
    if (this._showHand != i || this._tileId != t) {
      this._showHand = i;
      if (i) {
        this._nodeHand.active = true;
        this.playHandSpi();
      }
      var o = this.node.parent.convertToNodeSpaceAR(e);
      this._tileId !== t && (this._tileId = t);
      cc.Tween.stopAllByTarget(this._nodeHand);
      if (i) {
        this._nodeHand.opacity = 255;
        cc.tween(this._nodeHand).to(0.23, {
          position: o
        }).call(function () {
          n._nodeHand.setPosition(o);
        }).start();
      } else this._nodeHand.opacity = 0;
    }
  }
  setShowHand(t) {
    this._nodeHand.active = t;
  }
  @mj.traitEvent("GuideUI_playHandSpi")
  playHandSpi() {
    var t = this;
    GameUtils.playSpine(this._handSpine, "in", false, function () {
      GameUtils.playSpine(t._handSpine, "init", true);
    });
  }
  @mj.traitEvent("GuideUI_skip")
  onSkip() {}
  playTipAppearAni() {
    var t = this._nodeTip,
      e = this._text ? this._text.node : null;
    if (cc.isValid(t)) {
      t.active = true;
      t.scaleX = 1;
      t.scaleY = 0.5;
      cc.Tween.stopAllByTarget(t);
      if (cc.isValid(e)) {
        e.opacity = 0;
        cc.Tween.stopAllByTarget(e);
      }
      cc.tween(t).to(0.33, {
        scaleY: 1
      }, {
        easing: "backOut"
      }).start();
      cc.isValid(e) && cc.tween(e).to(0.16, {
        opacity: 255
      }, {
        easing: "sineInOut"
      }).start();
    }
  }
  playSkipAppearAni() {
    var t = this._btnSkip;
    if (cc.isValid(t)) {
      t.scale = 0;
      t.opacity = 0;
      cc.Tween.stopAllByTarget(t);
      cc.tween(t).parallel(cc.tween().to(0.23, {
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
  playTextAnim(t) {
    var e = this._nodeTip,
      i = this._text,
      n = i ? i.node : null;
    if (cc.isValid(e) && cc.isValid(n)) {
      cc.Tween.stopAllByTarget(n);
      cc.Tween.stopAllByTarget(e);
      if ("switch" !== t.type) {
        if ("hide" === t.type) {
          var o = false;
          n.opacity < 255 && (n.opacity = 255);
          e.opacity < 255 && (e.opacity = 255);
          cc.tween(n).to(0.16, {
            opacity: 0
          }, {
            easing: "circOut"
          }).call(function () {
            if (!o) {
              o = true;
              (null == t ? void 0 : t.cb) && t.cb();
            }
          }).start();
          cc.tween(e).to(0.16, {
            opacity: 0
          }, {
            easing: "circOut"
          }).start();
        }
      } else cc.tween(n).to(0.16, {
        opacity: 0
      }, {
        easing: "circOut"
      }).call(function () {
        n.opacity = 0;
      }).to(0.16, {
        opacity: 255
      }, {
        easing: "sineInOut"
      }).call(function () {
        (null == t ? void 0 : t.cb) && t.cb();
      }).start();
    } else (null == t ? void 0 : t.cb) && t.cb();
  }
  getNodeHand() {
    return this._nodeHand;
  }
  getHandSpine() {
    return this._handSpine;
  }
}
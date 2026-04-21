import I18NComponent from './I18NComponent';
const {
  ccclass,
  property
} = cc._decorator;
@ccclass
export default class I18NAdBtnLayout extends cc.Component {
  _adIconNode = null;
  _label = null;
  maxWidth = 200;
  spacing = 24;
  _adIconWidth = 0;
  _i18nComponent = null;
  static MAX_WIDTH_1 = 564;
  static MAX_WIDTH_2 = 500;
  static MARGIN = 24;
  static setupLayout(e, t, n, i, r = 24) {
    if (e) {
      var a = cc.find(t, e),
        l = cc.find(n, e);
      I18NAdBtnLayout.setupLayoutByNode(a, l, i, r);
    }
  }
  static setupLayoutByNode(e, t, n = I18NAdBtnLayout.MAX_WIDTH_1, i = I18NAdBtnLayout.MARGIN) {
    if (e && t && cc.isValid(e) && cc.isValid(t)) {
      var r = t.getComponent(I18NAdBtnLayout);
      r || (r = t.addComponent(I18NAdBtnLayout));
      r.initComponents(e, t.getComponent(cc.Label), n, i);
    }
  }
  initComponents(e, t, o, n = 24) {
    var i,
      r = this;
    this._adIconNode = e;
    this._label = t;
    this.maxWidth = o;
    this.spacing = n;
    if (this._adIconNode && this._label) {
      this._adIconWidth = this._adIconNode.width;
      this._label.overflow = cc.Label.Overflow.NONE;
      var l = null === (i = this._adIconNode.parent) || void 0 === i ? void 0 : i.getComponent(cc.Layout);
      l && (l.enabled = false);
      this._i18nComponent = this._label.node.getComponent(I18NComponent);
      this._i18nComponent && this._i18nComponent.setOnUpdateTextCallback(function () {
        r.onTextUpdated();
      });
      this.node.activeInHierarchy && this.scheduleOnce(function () {
        r.updateLayout();
      }, 0);
    }
  }
  onTextUpdated() {
    var e = this;
    this.scheduleOnce(function () {
      e.updateLayout();
    }, 0);
  }
  updateLayout() {
    if (this._adIconNode && this._label) {
      var e = this._label.node.width;
      if (this._adIconWidth + this.spacing + e <= this.maxWidth) {
        this.layoutCenter(e);
      } else {
        this.layoutScale(e);
      }
    }
  }
  layoutCenter(e) {
    var t = -(this._adIconWidth + this.spacing + e) / 2;
    this._adIconNode.x = t + this._adIconWidth * this._adIconNode.anchorX;
    var o = t + this._adIconWidth + this.spacing,
      n = this._label.node.anchorX;
    this._label.node.x = o + e * n;
    this._label.node.scale = 1;
  }
  layoutScale(e) {
    var t = -this.maxWidth / 2;
    this._adIconNode.x = t + this._adIconWidth * this._adIconNode.anchorX;
    var o = (this.maxWidth - this._adIconWidth - this.spacing) / e,
      n = t + this._adIconWidth + this.spacing,
      i = e * o,
      r = this._label.node.anchorX;
    this._label.node.x = n + i * r;
    this._label.node.scale = o;
  }
  forceUpdate() {
    var e = this;
    this.scheduleOnce(function () {
      e.updateLayout();
    }, 0);
  }
}
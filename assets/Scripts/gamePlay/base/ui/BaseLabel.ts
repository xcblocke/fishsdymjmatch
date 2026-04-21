import BaseUI from '../../../framework/ui/BaseUI';
const {
  property
} = cc._decorator;
@mj.class
export default class BaseLabel extends BaseUI {
  _isLoading = false;
  _loadingPath = "";
  _label = null;
  _loadInitiated = false;
  _loadFontEndFunc = null;
  @property
  _fontPath = "";
  @property
  _fontBundleName = void 0;
  get label() {
    this._label || (this._label = this.node.getComponent(cc.Label));
    return this._label;
  }
  get string() {
    return this.label ? this.label.string : "";
  }
  set string(e) {
    this.label && (this.label.string = e);
  }
  static create(e, t, o = "mainRes", n = 20) {
    var i = new cc.Node(),
      r = i.addComponent(this),
      a = i.addComponent(cc.Label);
    a.string = e;
    a.fontSize = n;
    a.lineHeight = n;
    r._label = a;
    t && r.loadFont(t, o);
    return r;
  }
  static refreshWithNode(e, t, n = "mainRes", i = null) {
    var r = e.getComponent(BaseLabel);
    if (r) {
      r._loadFontEndFunc = i;
      r.loadFont(t, n);
      return r;
    }
    var a = e.getComponent(cc.Label);
    a || (a = e.addComponent(cc.Label));
    var l = e.addComponent(this);
    l._label = a;
    l._loadFontEndFunc = i;
    l.loadFont(t, n);
    return l;
  }
  onLoad() {
    super.onLoad.call(this);
    this._fontPath && !this._loadInitiated && this.loadFont(this._fontPath, this._fontBundleName);
  }
  resetState(e) {
    if (this._loadingPath === e) {
      this._isLoading = false;
      this._loadingPath = "";
    }
  }
  loadFont(e, t = "mainRes") {
    var o = this;
    if (e) {
      this._fontPath = e;
      this._fontBundleName = t;
      this._loadInitiated = true;
      if (!this._isLoading || this._loadingPath !== e) {
        this._loadingPath = e;
        var n = e.includes("texture/") ? cc.BitmapFont : cc.Font,
          i = this.getRes(e, n, t);
        if (i && this.label) {
          this.label.font = i;
          this.label.useSystemFont = false;
          this.resetState(e);
          this.onLoadFontEnd();
        } else {
          this._isLoading = true;
          this.loadRes(e, n, t).then(function (t) {
            o.onLoadFontAsyncEnd(t, e);
          });
        }
      }
    }
  }
  onLoadFontAsyncEnd(e, t) {
    if (cc.isValid(this.node)) {
      if (this._loadingPath === t) if (e) {
        if (this.label) {
          this.label.font = e;
          this.label.useSystemFont = false;
        }
        this.resetState(t);
        this.onLoadFontEnd();
      } else this.resetState(t);
    } else this.resetState(t);
  }
  onLoadFontEnd() {
    if (this._loadFontEndFunc) {
      this._loadFontEndFunc();
      this._loadFontEndFunc = null;
    }
  }
  setSystemFont(e = "Arial") {
    if (this.label) {
      this.label.useSystemFont = true;
      this.label.fontFamily = e;
    }
  }
  setFontSize(e) {
    if (this.label) {
      this.label.fontSize = e;
      this.label.lineHeight = e;
    }
  }
  setColor(e) {
    this.node && (this.node.color = e);
  }
  setAlign(e = cc.Label.HorizontalAlign.CENTER, t = cc.Label.VerticalAlign.CENTER) {
    if (this.label) {
      this.label.horizontalAlign = e;
      this.label.verticalAlign = t;
    }
  }
}
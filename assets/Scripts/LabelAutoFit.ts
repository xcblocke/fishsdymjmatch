const {
  ccclass,
  property,
  executeInEditMode,
  requireComponent
} = cc._decorator;
@ccclass
@executeInEditMode
@requireComponent(cc.Label)
export default class LabelAutoFit extends cc.Component {
  @property
  _maxWidth = 200;
  @property
  _maxHeight = 100;
  @property
  _minFontSize = 38;
  @property
  _maxFontSize = 56;
  @property
  _enableAutoFit = true;
  @property
  _autoLineHeight = true;
  @property
  _lineHeightRatio = 1.2;
  _label = null;
  _layoutDirty = true;
  _lastString = "";
  _originalLineHeight = 0;
  @property({
    displayName: "最大宽度",
    tooltip: "文本显示的最大宽度"
  })
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(e) {
    this._maxWidth = e;
    this._doLayoutDirty();
  }
  @property({
    displayName: "最大高度",
    tooltip: "文本显示的最大高度"
  })
  get maxHeight() {
    return this._maxHeight;
  }
  set maxHeight(e) {
    this._maxHeight = e;
    this._doLayoutDirty();
  }
  @property({
    displayName: "最小字号",
    tooltip: "字体的最小大小"
  })
  get minFontSize() {
    return this._minFontSize;
  }
  set minFontSize(e) {
    this._minFontSize = Math.max(1, e);
    this._doLayoutDirty();
  }
  @property({
    displayName: "最大字号",
    tooltip: "字体的最大大小"
  })
  get maxFontSize() {
    return this._maxFontSize;
  }
  set maxFontSize(e) {
    this._maxFontSize = Math.max(this._minFontSize, e);
    this._doLayoutDirty();
  }
  @property({
    displayName: "启用自适应",
    tooltip: "是否启用字号自适应"
  })
  get enableAutoFit() {
    return this._enableAutoFit;
  }
  set enableAutoFit(e) {
    this._enableAutoFit = e;
    this._doLayoutDirty();
  }
  @property({
    displayName: "自动行高",
    tooltip: "是否根据字号自动调整行高"
  })
  get autoLineHeight() {
    return this._autoLineHeight;
  }
  set autoLineHeight(e) {
    this._autoLineHeight = e;
    this._doLayoutDirty();
  }
  @property({
    displayName: "行高比例",
    tooltip: "行高相对于字号的比例（如1.2表示行高为字号的1.2倍）",
    visible: function () {
      return this._autoLineHeight;
    }
  })
  get lineHeightRatio() {
    return this._lineHeightRatio;
  }
  set lineHeightRatio(e) {
    this._lineHeightRatio = Math.max(0.5, Math.min(3, e));
    this._doLayoutDirty();
  }
  onLoad() {
    this._label = this.getComponent(cc.Label);
    if (this._label) {
      this._lastString = this._label.string;
      0 === this._originalLineHeight && (this._originalLineHeight = this._label.lineHeight);
      this._label.overflow = cc.Label.Overflow.NONE;
    }
    this._setupLabelWatcher();
    this._addEventListeners();
    this._doLayoutDirty();
  }
  onEnable() {
    if (!this._label) {
      this._label = this.getComponent(cc.Label);
      if (this._label) {
        this._lastString = this._label.string;
        0 === this._originalLineHeight && (this._originalLineHeight = this._label.lineHeight);
        this._label.overflow = cc.Label.Overflow.NONE;
      }
      this._setupLabelWatcher();
    }
    this._addEventListeners();
    this._doLayoutDirty();
  }
  onDisable() {
    this._removeEventListeners();
  }
  onDestroy() {
    this._removeEventListeners();
  }
  _doLayoutDirty() {
    this._layoutDirty = true;
  }
  _setupLabelWatcher() {
    if (this._label && !this._label._autoFitWatched) {
      this._label._autoFitWatched = true;
      var e = Object.getPrototypeOf(this._label),
        t = Object.getOwnPropertyDescriptor(e, "string");
      if (t && t.set) {
        var o = t.set,
          n = this;
        Object.defineProperty(this._label, "string", {
          get: t.get,
          set: function (e) {
            o.call(this, e);
            n._doLayoutDirty();
          },
          enumerable: t.enumerable,
          configurable: t.configurable
        });
      }
    }
  }
  _addEventListeners() {
    this._label && cc.director.on(cc.Director.EVENT_AFTER_UPDATE, this.updateFit, this);
  }
  _removeEventListeners() {
    cc.director.off(cc.Director.EVENT_AFTER_UPDATE, this.updateFit, this);
  }
  updateFit() {
    if (this._label && this._enableAutoFit) {
      var e = this._label.string;
      if (this._layoutDirty || e !== this._lastString) {
        this._lastString = e;
        this._layoutDirty = false;
        if (e && 0 !== e.length) this._fitFontSize();else {
          this._applyFontSize(this._maxFontSize);
          this._label.node.width = 0;
        }
      }
    }
  }
  _applyFontSize(e) {
    this._label.fontSize = e;
    this._autoLineHeight && (this._label.lineHeight = Math.round(e * this._lineHeightRatio));
  }
  _measureText(e) {
    var t = this._label.fontSize,
      o = this._label.lineHeight;
    this._applyFontSize(e);
    this._label._forceUpdateRenderData();
    var n = this._label.node.width,
      i = this._label.node.height;
    this._label.fontSize = t;
    this._label.lineHeight = o;
    return {
      width: n,
      height: i
    };
  }
  _fitFontSize() {
    this._label.overflow = cc.Label.Overflow.NONE;
    var e = this._measureText(this._maxFontSize);
    if (e.width <= this._maxWidth && e.height <= this._maxHeight) {
      this._applyFontSize(this._maxFontSize);
      this._label.node.width = e.width;
      this._label._forceUpdateRenderData();
    } else {
      for (var t = this._minFontSize, o = this._maxFontSize - 1, n = t, i = 0; t <= o;) {
        var r = Math.floor((t + o) / 2),
          a = this._measureText(r);
        if (a.width <= this._maxWidth && a.height <= this._maxHeight) {
          n = r;
          i = a.width;
          t = r + 1;
        } else o = r - 1;
      }
      this._applyFontSize(n);
      this._label.node.width = i;
      this._label._forceUpdateRenderData();
    }
  }
  refresh() {
    this._doLayoutDirty();
    this.updateFit();
  }
  setString(e) {
    if (this._label) {
      this._label.string = e;
      this._doLayoutDirty();
    }
  }
  update() {}
}
import I18NStrings from '../framework/data/I18NStrings';
import LoginModel from '../gamePlay/login/model/LoginModel';
const {
  ccclass,
  property,
  disallowMultiple
} = cc._decorator;
@ccclass
@disallowMultiple
export default class I18NComponent extends cc.Component {
  @property({
    tooltip: "文本ID,对应语言表里的key"
  })
  translateId = "";
  @property({
    tooltip: "默认文本,取不到对应语言时显示的文本,一般为英文"
  })
  defaultText = "";
  _str = "";
  _label = null;
  _richText = null;
  _args = [];
  _origFont = null;
  _onUpdateTextCallback = null;
  static _artFontLanguages = ["en", "fr", "de", "pt", "es"];
  static _enableSystemFontFallback = true;
  static setEnableSystemFontFallback(e) {
    I18NComponent._enableSystemFontFallback = e;
  }
  static isEnableSystemFontFallback() {
    return I18NComponent._enableSystemFontFallback;
  }
  onLoad() {
    this._label = this.node.getComponent(cc.Label);
    this._richText = this.node.getComponent(cc.RichText);
    this.setOrigFont();
    mj.EventManager.on("language-changed", this.updateText, this);
    this.updateText();
  }
  start() {
    this.updateText();
  }
  onDestroy() {
    mj.EventManager.off("language-changed", this.updateText, this);
  }
  setTranslateId(e, t = "", o = []) {
    this.translateId = e;
    this.defaultText = t || this.translateId;
    this._args = o || [];
    this.updateText();
  }
  updateText() {
    if (this.enabled && (this.translateId || this.defaultText)) {
      var e = I18NStrings.get(this.translateId, this.defaultText) || "";
      e && this.applySystemFontIfNotEnglish();
      this._args && this._args.length > 0 && (e = I18NStrings.stringFormat.apply(I18NStrings, [...[e], ...this._args]));
      if (e !== this._str) {
        if (this._label) {
          this._str = e;
          this._label.string = this._str;
        }
        if (this._richText) {
          this._str = e;
          this._richText.string = this._str;
        }
        this._onUpdateTextCallback && this._onUpdateTextCallback();
      }
    }
  }
  setOnUpdateTextCallback(e) {
    this._onUpdateTextCallback = e;
  }
  applySystemFontIfNotEnglish() {
    if (I18NComponent.isEnableSystemFontFallback()) {
      var e = LoginModel.getInstance().language,
        t = I18NComponent._artFontLanguages.some(function (t) {
          return e.toLowerCase().includes(t);
        });
      if (this._label) {
        this._label.useSystemFont = !t;
        t && this._origFont && (this._label.font = this._origFont);
      }
      if (this._richText) {
        this._richText.useSystemFont = !t;
        t && this._origFont && (this._richText.font = this._origFont);
      }
    }
  }
  setOrigFont() {
    this._label && this._label.font && (this._origFont = this._label.font);
    this._richText && this._richText.font && (this._origFont = this._richText.font);
  }
  useOrigFont() {
    this._label && this._origFont && (this._label.font = this._origFont);
    this._richText && this._origFont && (this._richText.font = this._origFont);
  }
}
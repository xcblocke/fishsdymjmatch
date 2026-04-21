import UIView from '../../../Scripts/framework/ui/UIView';
@mj.class
export default class FailFreeShuffleDialogView extends UIView {
  _closeBtn = null;
  _freeShuffleBtn = null;
  _onFreeShuffleCallback = null;
  _onCloseCallback = null;
  static prefabUrl = "prefabs/FailFreeShuffleDialog";
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.initEvents();
  }
  initUI() {
    this._freeShuffleBtn = cc.find("content/btn_use", this.node);
  }
  initEvents() {
    this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
    this._freeShuffleBtn && this.OnButtonClick(this._freeShuffleBtn, this.onFreeShuffleBtnClick.bind(this));
  }
  setCallbacks(e) {
    this._onFreeShuffleCallback = e.onFreeShuffle || null;
    this._onCloseCallback = e.onClose || null;
  }
  onCloseBtnClick() {
    var e, t;
    null === (e = this._onCloseCallback) || void 0 === e || e.call(this);
    null === (t = this.delegate) || void 0 === t || t.close();
  }
  onFreeShuffleBtnClick() {
    var e, t;
    null === (e = this._onFreeShuffleCallback) || void 0 === e || e.call(this);
    null === (t = this.delegate) || void 0 === t || t.close();
  }
}
import UIView from '../framework/ui/UIView';
@mj.class
export default class AlertView extends UIView {
  cancelBtn = null;
  sureBtn = null;
  content = null;
  sureCallback = null;
  cancelCallback = null;
  autoClose = false;
  static prefabUrl = "prefabs/common/Alert";
  onLoad() {
    super.onLoad.call(this);
    this.cancelBtn = cc.find("Container/main_img_bg/cancelBtn", this.node);
    this.cancelBtn.active = false;
    this.sureBtn = cc.find("Container/main_img_bg/sureBtn", this.node);
    this.sureBtn.active = false;
    this.content = cc.find("Container/main_img_bg/scrollview/view/content/tipsContent", this.node).getComponent(cc.Label);
    this.OnButtonClick(this.cancelBtn, this.onCancelBtnClick.bind(this));
    this.OnButtonClick(this.sureBtn, this.onSureBtnClick.bind(this));
  }
  show(e) {
    this.content.string = e.content || "";
    this.sureCallback = e.sureCallback || null;
    this.cancelCallback = e.cancelCallback || null;
    this.autoClose = e.autoClose || false;
    e.cancelCallback && (this.cancelBtn.active = true);
    e.sureCallback && (this.sureBtn.active = true);
  }
  onCancelBtnClick() {
    var e;
    null === (e = this.cancelCallback) || void 0 === e || e.call(this);
    this.autoClose && this.delegate.close();
  }
  onSureBtnClick() {
    var e;
    null === (e = this.sureCallback) || void 0 === e || e.call(this);
    this.autoClose && this.delegate.close();
  }
}
import ElementBase from './ElementBase';
export default class ElementBg extends ElementBase {
  static prefabUrl = "";
  static size = new cc.Size(1080, 1920);
  uiOnLoad() {
    super.uiOnLoad.call(this);
    cc.isValid(this.node.parent) && this.node.setContentSize(cc.size(this.node.parent.width, this.node.height));
    this.adapterBg();
  }
  adapterBg() {
    var e = this.node.getComponent(cc.Widget) || this.node.addComponent(cc.Widget);
    e.isAlignTop = false;
    e.isAlignBottom = false;
    e.isAlignLeft = true;
    e.isAlignRight = true;
    e.isAbsoluteBottom = false;
    e.isAbsoluteTop = false;
    e.isAbsoluteLeft = true;
    e.isAbsoluteRight = true;
    e.left = 0;
    e.right = 0;
  }
  updateUI() {
    super.updateUI.call(this);
  }
}
import ElementBase from './ElementBase';
@mj.class
export default class ElementBuilding extends ElementBase {
  static prefabUrl = "";
  static size = new cc.Size(1080, 1920);
  uiOnLoad() {
    super.uiOnLoad.call(this);
    cc.isValid(this.node.parent) && this.node.setContentSize(cc.size(this.node.parent.width, this.node.height));
  }
  updateUI() {
    super.updateUI.call(this);
  }
  getDesignZOrder() {
    return cc.isValid(this.node.parent) ? this.node.parent.children.length - 1 : 0;
  }
}
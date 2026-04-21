import BaseCell from './base/ui/BaseCell';
import BaseSpine from './gamePlay/base/ui/BaseSpine';
@mj.class
export default class ElementBase extends BaseCell {
  static size = new cc.Size(0, 0);
  uiOnLoad() {}
  updateUI() {
    if (cc.isValid(this.node.parent)) {
      var e = this.getDesignZOrder();
      this.node.setSiblingIndex(e);
    }
  }
  getDesignZOrder() {
    return 0;
  }
  getBaseSpine(e) {
    var t = BaseSpine.refreshWithNode(e);
    t.markReady("");
    return t;
  }
  hookNode(e, t, o, n) {
    e && cc.isValid(o) && cc.isValid(n) && cc.isValid(this.node.parent) && o.parent === n && e.attachNode(t, function () {
      return o;
    });
  }
}
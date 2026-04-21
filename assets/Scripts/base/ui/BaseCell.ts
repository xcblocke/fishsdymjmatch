import BaseUI from '../../framework/ui/BaseUI';
import { resManager } from '../../framework/manager/ResManager';
@mj.class
export default class BaseCell extends BaseUI {
  static prefabUrl = "";
  static adapter(e) {
    e.isAlignTop = true;
    e.isAlignBottom = true;
    e.isAlignLeft = true;
    e.isAlignRight = true;
    e.isAbsoluteBottom = true;
    e.isAbsoluteTop = true;
    e.isAbsoluteLeft = true;
    e.isAbsoluteRight = true;
    e.left = 0;
    e.bottom = 0;
    e.right = 0;
    e.top = 0;
  }
  static createCell(e, t = true) {
    var n = new cc.Node();
    n.cellType = e || "default";
    var i = n.addComponent(this);
    resManager.loadRes(this.prefabUrl, cc.Prefab, this.bundleName).then(function (e) {
      var r = Array.isArray(e) ? e[0] : e;
      if (cc.isValid(r)) {
        i.cacheRes(r);
        if (cc.isValid(n)) {
          var a = cc.instantiate(r);
          n.setContentSize(a.getContentSize());
          i.addUI(a);
          if (t) {
            var l = a.getComponent(cc.Widget);
            if (!l) {
              l = a.addComponent(cc.Widget);
              BaseCell.adapter(l);
            }
          }
        }
      }
    }).catch(function () {});
    return n;
  }
  addUI(e) {
    this.node.addChild(e);
    this._cellUI = e;
    this.uiOnLoad();
    this._data && this.updateUI();
  }
  updateCell(e) {
    this._data = e;
    this._cellUI && cc.isValid(this._cellUI) && this.updateUI();
  }
  getData() {
    return this._data;
  }
}
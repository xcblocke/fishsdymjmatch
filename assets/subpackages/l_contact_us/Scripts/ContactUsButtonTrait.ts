import Trait from '../../../Scripts/framework/trait/Trait';
import UIContactUsButton from './UIContactUsButton';
@mj.trait
@mj.class("ContactUsButtonTrait")
export default class ContactUsButtonTrait extends Trait {
  static traitKey = "ContactUsButton";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetDlgCtrl_initDRes(t, o) {
    if ("1" != this._traitData.home) {
      this.addPreloadRes(t);
      o();
    } else o();
  }
  onUISetHomeCtrl_initDRes(t, o) {
    this.addPreloadRes(t);
    o();
  }
  addPreloadRes(t) {
    var o = t.ins;
    o && "function" == typeof o.addPreloadRes && o.addPreloadRes("Prefab", UIContactUsButton.getUrl());
  }
  onUISetHome_adjustPH(t, o) {
    this.adjustPanelHeight(t, function () {
      o();
    });
  }
  onUISetDlg_adjustPH(t, o) {
    if ("1" != this._traitData.home) {
      this.adjustPanelHeight(t, function () {
        o();
      });
    } else {
      o();
    }
  }
  adjustPanelHeight(t, o) {
    UIContactUsButton.createUI().then(function (e) {
      if (cc.isValid(e) && (null == t ? void 0 : t.args)) {
        var n = t.args[0] || [];
        n.push(e);
        t.args[0] = n;
      }
      o();
    }).catch(function (t) {
      console.error("[" + ContactUsButtonTrait.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "contact us 按钮加载失败"));
      o();
    });
  }
  onContactUsBtnClick() {
    mj.sdk.contactUs();
  }
}
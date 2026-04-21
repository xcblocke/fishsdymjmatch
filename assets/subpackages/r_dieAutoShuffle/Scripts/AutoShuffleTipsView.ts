import UIView from '../../../Scripts/framework/ui/UIView';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import DieAutoShuffleTrait from './DieAutoShuffleTrait';
@mj.class
export default class AutoShuffleTipsView extends UIView {
  btnUse = null;
  btnReplay = null;
  lblUse = null;
  lblReplay = null;
  lblDesc = null;
  static prefabUrl = "prefabs/ui/FailView";
  static bundleName = "mainRes";
  onLoad() {
    super.onLoad.call(this);
    var e = this.node.getChildByName("content_node");
    this.btnUse = e.getChildByName("btn_use");
    this.btnReplay = e.getChildByName("btn_replay");
    this.lblUse = this.btnUse.getChildByName("use").getComponent(cc.Label);
    this.lblReplay = this.btnReplay.getChildByName("replay").getComponent(cc.Label);
    this.lblDesc = e.getChildByName("desc").getComponent(cc.Label);
    this.btnUse && this.OnButtonClick(this.btnUse, this.onAutoBtnClick.bind(this));
    this.btnReplay && this.OnButtonClick(this.btnReplay, this.onUnAutoBtnClick.bind(this));
  }
  onCloseBtnClick() {
    this.delegate.close();
  }
  show() {
    var t,
      e,
      i,
      o = null === (t = this.btnUse) || void 0 === t ? void 0 : t.getChildByName("nodeNum"),
      n = null === (e = this.btnUse) || void 0 === e ? void 0 : e.getChildByName("use"),
      l = null === (i = this.btnUse) || void 0 === i ? void 0 : i.getChildByName("ad");
    cc.isValid(o) && (o.active = false);
    cc.isValid(l) && (l.active = false);
    cc.isValid(n) && (n.active = true);
    this.lblDesc.string = I18NStrings.get("AutoShuffleTips_01", "AutoShuffleTips_01");
    this.lblUse.string = I18NStrings.get("AutoShuffleTips_02", "AutoShuffleTips_02");
    this.lblReplay.string = I18NStrings.get("AutoShuffleTips_03", "AutoShuffleTips_03");
  }
  onAutoBtnClick() {
    var t = DieAutoShuffleTrait.getActiveSettingsInstance();
    t && t.setAutoShuffleEnabled(true, "AutoShuffleTipsView_onAutoBtnClick");
    this.onCloseBtnClick();
  }
  onUnAutoBtnClick() {
    var t = DieAutoShuffleTrait.getActiveSettingsInstance();
    t && t.setAutoShuffleEnabled(false, "AutoShuffleTipsView_onUnAutoBtnClick");
    this.onCloseBtnClick();
  }
}
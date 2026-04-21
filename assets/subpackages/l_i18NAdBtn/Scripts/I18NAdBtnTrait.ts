import Trait from '../../../Scripts/framework/trait/Trait';
import I18NAdBtnLayout from '../../../Scripts/component/I18NAdBtnLayout';
@mj.trait
@mj.class("I18NAdBtnTrait")
export default class I18NAdBtnTrait extends Trait {
  static traitKey = "I18NAdBtn";
  onLoad() {
    super.onLoad.call(this);
  }
  onLvBoxVw_initComps(t, o) {
    var e = t.ins;
    I18NAdBtnLayout.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout.MAX_WIDTH_1, I18NAdBtnLayout.MARGIN);
    o();
  }
  onBoxOpenUI_initComponents(t, o) {
    var e = t.ins;
    I18NAdBtnLayout.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout.MAX_WIDTH_1, I18NAdBtnLayout.MARGIN);
    o();
  }
  onTLBoxVw_initComponents(t, o) {
    var e = t.ins;
    I18NAdBtnLayout.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout.MAX_WIDTH_1, I18NAdBtnLayout.MARGIN);
    o();
  }
  onRankBoxVw_initComps(t, o) {
    var e = t.ins;
    I18NAdBtnLayout.setupLayout(e._claimAdBtnNode, "bg/Ad", "bg/Claim", I18NAdBtnLayout.MAX_WIDTH_1, I18NAdBtnLayout.MARGIN);
    o();
  }
  onFailVw_onLoad(t, o) {
    var e = t.ins;
    I18NAdBtnLayout.setupLayout(e.btnUse, "ad/icon", "ad/desc", I18NAdBtnLayout.MAX_WIDTH_2, I18NAdBtnLayout.MARGIN);
    o();
  }
  onWatchAdVw_onLoad(t, o) {
    var e = t.ins;
    I18NAdBtnLayout.setupLayout(e._btnConfirm, "bg/layout/icon", "bg/layout/text", I18NAdBtnLayout.MAX_WIDTH_2, I18NAdBtnLayout.MARGIN);
    o();
  }
  onAdUnavailVw_onLoad(t, o) {
    var e = t.ins;
    I18NAdBtnLayout.setupLayout(e._btnRetry, "layout/icon", "layout/title", I18NAdBtnLayout.MAX_WIDTH_2, I18NAdBtnLayout.MARGIN);
    o();
  }
}
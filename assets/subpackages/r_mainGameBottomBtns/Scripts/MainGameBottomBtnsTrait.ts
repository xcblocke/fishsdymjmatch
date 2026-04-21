import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("MainGameBottomBtnsTrait")
export default class MainGameBottomBtnsTrait extends Trait {
  static traitKey = "MainGameBottomBtns";
  static DEFAULT_BUNDLE = "r_mainGameBottomBtns";
  static DEFAULT_IMG_REFRESH_PATH = "texture/gameplay_btn_refresh";
  static DEFAULT_IMG_HINT_PATH = "texture/gameplay_btn_hint";
  onLoad() {
    var e, i;
    super.onLoad.call(this);
    var n = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs;
    this._bundle = (null === (i = this._traitData) || void 0 === i ? void 0 : i.bundle) || MainGameBottomBtnsTrait.DEFAULT_BUNDLE;
    this._imgRefreshPath = (null == n ? void 0 : n.imgRefreshPath) || MainGameBottomBtnsTrait.DEFAULT_IMG_REFRESH_PATH;
    this._imgHintPath = (null == n ? void 0 : n.imgHintPath) || MainGameBottomBtnsTrait.DEFAULT_IMG_HINT_PATH;
  }
  onGameUI_onLoad(t, e) {
    var r = t.ins;
    if (r) {
      this.refreshBtnBackground(r.btnShuffle, this._imgRefreshPath);
      this.refreshBtnBackground(r.btnHitTips, this._imgHintPath);
      e();
    } else e();
  }
  refreshBtnBackground(t, e) {
    if (t) {
      var r = t.getChildByName("Background");
      r && BaseSprite.refreshWithNode(r, e, false, true, this._bundle);
    }
  }
}
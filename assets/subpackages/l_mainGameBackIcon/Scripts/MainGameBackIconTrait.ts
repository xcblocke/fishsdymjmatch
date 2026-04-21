import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("MainGameBackIconTrait")
export default class MainGameBackIconTrait extends Trait {
  static traitKey = "MainGameBackIcon";
  static DEFAULT_ICON_PATH = "texture/gamePlayTop/gameplay_img_home";
  onLoad() {
    super.onLoad.call(this);
  }
  getIconPath() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.iconPath) || MainGameBackIconTrait.DEFAULT_ICON_PATH;
  }
  isMatchGameType(t) {
    var e;
    return !((null === (e = this._traitData) || void 0 === e ? void 0 : e.gameTypes) && Array.isArray(this._traitData.gameTypes)) || this._traitData.gameTypes.includes(t);
  }
  onMainGRTop_applyTSCfg(t, e) {
    var r,
      o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
    if (o && this.isMatchGameType(o.gameType)) {
      var a = cc.find("btnBack/Background/icon", o.topRootNode),
        i = this.getIconPath();
      BaseSprite.refreshWithNode(a, i, false, false, "mainRes");
      a.setPosition(1, 4);
      e();
    } else e();
  }
}
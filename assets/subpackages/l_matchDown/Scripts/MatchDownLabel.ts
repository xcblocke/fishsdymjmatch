import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { formatLanguageCodeToString } from '../../../Scripts/framework/utils/CommonUtils';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
var u = {
  EN_US: "English",
  EN_GB: "English",
  ZH_CN: "Chinese",
  ZH_HK: "TraditionalChinese",
  ZH_TW: "TraditionalChinese",
  PT_PT: "Portuguese",
  PT_BR: "Portuguese",
  ES: "Spanish",
  ES_419: "Spanish",
  FR: "French",
  DE: "German",
  JA: "Japanese",
  KO: "Korean",
  RU: "Russian"
};
var p = Object.keys(u);
@mj.class
export default class MatchDownLabel extends BaseUI {
  matchCount = null;
  matchDesc = null;
  static prefabUrl = "prefabs/matchDown";
  static bundleName = "l_matchDown";
  onLoad() {
    var t;
    super.onLoad.call(this);
    this.matchCount = null === (t = this.node.getChildByName("MatchCount")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this.matchDesc = this.node.getChildByName("MatchDesc");
    mj.EventManager.on("language-changed", this.updateDesc, this);
    this.updateDesc();
  }
  getLanguageCode() {
    var e = LoginModel.getInstance().language,
      t = formatLanguageCodeToString(e);
    -1 == p.indexOf(t) && (t = "EN_US");
    return t;
  }
  updateDesc() {
    if (cc.isValid(this.matchDesc)) {
      var e = this.getLanguageCode();
      BaseSprite.refreshWithNode(this.matchDesc, "atlas/match_down/gameplay_txt_" + u[e], true, true, "l_matchDown");
    }
  }
  updateCount(e) {
    cc.isValid(this.matchCount) && (this.matchCount.string = e.toString());
  }
}
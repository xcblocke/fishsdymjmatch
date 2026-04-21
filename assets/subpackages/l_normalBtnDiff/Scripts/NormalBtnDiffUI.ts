import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
export enum ELevelDiff {
  Normal = 0,
  Expert = 1,
  Hard = 2,
}
@mj.class
export default class NormalBtnDiffUI extends BaseUI {
  @mj.node("BgExpert")
  expertBgNode: "BgExpert" = null;
  @mj.node("BgExpertUp")
  expertUpBgNode: "BgExpertUp" = null;
  @mj.node("BgHard")
  hardBgNode: "BgHard" = null;
  @mj.node("BgHardUP")
  hardUpBgNode: "BgHardUP" = null;
  @mj.node("LabeUp")
  labelUpNode: "LabeUp" = null;
  static prefabUrl = "prefabs/hall/NormalBtnDiff";
  getMessageListeners() {
    return {
      "language-changed": this.onLanguageChanged.bind(this)
    };
  }
  onLanguageChanged() {
    var t = this;
    this.enabledInHierarchy && this.scheduleOnce(function () {
      cc.isValid(t.labelUpNode) && t.labelUpNode.active && t.updateBgWidth();
    }, 0);
  }
  @mj.traitEvent("NorBtnDiffUI_updateBgW")
  updateBgWidth() {
    this.hardUpBgNode.width = this.labelUpNode.width + 50;
    this.expertUpBgNode.width = this.labelUpNode.width + 50;
  }
  updateDiff(t) {
    if (!cc.isValid(this.expertBgNode)) return false;
    this.expertBgNode.active = false;
    this.expertUpBgNode.active = false;
    this.hardBgNode.active = false;
    this.hardUpBgNode.active = false;
    this.labelUpNode.active = false;
    if (t === ELevelDiff.Expert) {
      this.showExpert();
    } else {
      if (t === ELevelDiff.Hard) {
        this.showHard();
      } else {
        t === ELevelDiff.Normal && this.showNormal();
      }
    }
    this.onLanguageChanged();
    return true;
  }
  @mj.traitEvent("NorBtnDiffUI_showExpert")
  showExpert() {
    this.expertBgNode.active = true;
    this.expertUpBgNode.active = true;
    this.labelUpNode.active = true;
    I18NStrings.setText(this.labelUpNode, "Expert", "MahjongTiles_VeryHard");
  }
  @mj.traitEvent("NorBtnDiffUI_showHard")
  showHard() {
    this.hardBgNode.active = true;
    this.hardUpBgNode.active = true;
    this.labelUpNode.active = true;
    I18NStrings.setText(this.labelUpNode, "Hard", "MahjongTiles_Hard");
  }
  @mj.traitEvent("NorBtnDiffUI_showNormal")
  showNormal() {}
}
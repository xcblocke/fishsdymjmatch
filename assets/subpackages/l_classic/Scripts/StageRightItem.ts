import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
@mj.class
export default class StageRightItem extends BaseUI {
  @mj.component("label", cc.Label)
  stageLabel: "label" = null;
  _currentStage = 1;
  static prefabUrl = "prefabs/StageRightItem";
  static bundleName = "l_classic";
  onLoad() {
    super.onLoad.call(this);
  }
  updateStage(t) {
    if (cc.isValid(this.stageLabel)) {
      this._currentStage = t;
      var e = I18NStrings.get("classic_stage", "Stage"),
        n = I18NStrings.stringFormat(e + " {0}", t);
      this.stageLabel.string = n;
    }
  }
  getCurrentStage() {
    return this._currentStage;
  }
  checkAndUpdate(t) {
    if (t !== this._currentStage) {
      this.updateStage(t);
      return true;
    }
    return false;
  }
}
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class HighestScoreItem extends BaseUI {
  @mj.component("label", cc.Label)
  scoreLabel: "label" = null;
  _currentMaxScore = 0;
  static prefabUrl = "prefabs/HighestScoreItem";
  static bundleName = "l_classic";
  onLoad() {
    super.onLoad.call(this);
  }
  updateScore(t) {
    if (cc.isValid(this.scoreLabel)) {
      this._currentMaxScore = t;
      this.scoreLabel.string = t.toString();
    }
  }
  getCurrentMaxScore() {
    return this._currentMaxScore;
  }
  checkAndUpdate(t, e) {
    var n = Math.max(t, e);
    if (n > this._currentMaxScore) {
      this.updateScore(n);
      return true;
    }
    return false;
  }
  reset(t) {
    this.updateScore(t);
  }
}
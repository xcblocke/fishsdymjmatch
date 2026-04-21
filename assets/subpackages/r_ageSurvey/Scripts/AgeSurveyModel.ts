import Model from '../../../Scripts/framework/data/Model';
import { EGetItemReasonId, EItemId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DotGameGetItem } from '../../../Scripts/gamePlay/dot/DGameGetItem';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.class("AgeSurveyModel")
export default class AgeSurveyModel extends Model {
  getSurveyData(t) {
    this.localData.surveys || (this.localData.surveys = []);
    this.localData.surveys[t] || (this.localData.surveys[t] = {});
    return this.localData.surveys[t];
  }
  saveSurveyData() {
    this.localData.surveys = this.localData.surveys;
  }
  setCompleted(t, e) {
    var r = this.getSurveyData(t);
    r.completed = e;
    e && (r.completedTime = Date.now());
    this.saveSurveyData();
  }
  isCompleted(t) {
    var e;
    return null !== (e = this.getSurveyData(t).completed) && void 0 !== e && e;
  }
  setClosed(t, e) {
    this.getSurveyData(t).closed = e;
    this.saveSurveyData();
  }
  isClosed(t) {
    var e;
    return null !== (e = this.getSurveyData(t).closed) && void 0 !== e && e;
  }
  setSelectedAge(t, e) {
    this.getSurveyData(t).selectedAge = e;
    this.saveSurveyData();
  }
  getSelectedAge(t) {
    var e;
    return null !== (e = this.getSurveyData(t).selectedAge) && void 0 !== e ? e : "";
  }
  getCompletedTime(t) {
    var e;
    return null !== (e = this.getSurveyData(t).completedTime) && void 0 !== e ? e : 0;
  }
  isPassedHoursSince(t, e) {
    var r = this.getCompletedTime(t);
    if (!this.isCompleted(t) || 0 === r) return false;
    var o = Date.now() - r >= 3600000 * e;
    return o;
  }
  giveRewards(t, e = 1, r = false, o = 0) {
    var i = UserModel.getInstance().getCurrentGameData(),
      n = r ? EGetItemReasonId.AgeSurveyAd : EGetItemReasonId.AgeSurvey,
      a = "弹窗" + (o + 1),
      u = r ? a + "_看广告奖励" : a + "_奖励";
    if (t.shuffleCount > 0) {
      var p = t.shuffleCount * e;
      i.changeShuffleNums(p);
      var d = i.getShuffleNums();
      DotGameGetItem.dotGetItem(i, {
        itemId: EItemId.Shuffle,
        number: p,
        afterNum: d,
        reasonId: n,
        reasonInfo: u
      });
    }
    if (t.hintCount > 0) {
      p = t.hintCount * e;
      i.changeHitTipsNums(p);
      d = i.getHitTipsNums();
      DotGameGetItem.dotGetItem(i, {
        itemId: EItemId.Hint,
        number: p,
        afterNum: d,
        reasonId: n,
        reasonInfo: u
      });
    }
  }
}
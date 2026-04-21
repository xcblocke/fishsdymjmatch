import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class RankMotivationUI extends BaseUI {
  @mj.node("titleNode")
  _titleNode: "titleNode" = null;
  @mj.node("timeNode")
  _timeNode: "timeNode" = null;
  @mj.node("desc")
  _desc: "desc" = null;
  static bundleName = "r_rankMotivation";
  static prefabUrl = "prefabs/rankMotivation";
  onLoad() {
    super.onLoad.call(this);
  }
  updateUI(t, e, o) {
    this.node.getComponent(cc.Widget).updateAlignment();
    t.parent = this._titleNode;
    t.setPosition(0, 0, 0);
    e.parent = this._timeNode;
    e.setPosition(0, 0, 0);
    var n = I18NStrings.get("LeaderBoard_rank_1", "<color=#f5e8c4>You climbed an amazing </c><outline color=#602e0b width=3><color=#ffd04b><size=38>13</size></color></outline><color=#f5e8c4> sports up the leaderboard</c>").replace("{0}", String(o));
    this._desc.getComponent(cc.RichText).string = n;
  }
  onDestroy() {
    super.onDestroy.call(this);
  }
}
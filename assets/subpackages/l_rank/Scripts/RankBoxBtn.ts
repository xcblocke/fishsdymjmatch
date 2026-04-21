import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import RankModel from './RankModel';
@mj.class
export default class RankBoxBtn extends BaseUI {
  _rankNum = 1;
  static prefabUrl = "prefabs/rank/buttons/Rank1BoxBtn";
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node.children[0], this.onBoxClick.bind(this));
  }
  setRankNum(t) {
    this._rankNum = t;
  }
  getRankNum() {
    return this._rankNum;
  }
  getConfigReward() {
    return RankModel.getInstance().getRewardIdByRank(this._rankNum);
  }
  @mj.traitEvent("RankBoxBtn_boxClk")
  onBoxClick() {}
  onDestroy() {
    super.onDestroy.call(this);
  }
}
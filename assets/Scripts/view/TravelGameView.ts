import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import MainGameView from '../game/view/MainGameView';
@mj.class
export default class TravelGameView extends MainGameView {
  _logName = "TravelGameView";
  _gameType = MjGameType.Travel;
  static prefabUrl = "prefabs/game/MainGameTravel";
  get nodeCollect() {
    return this._nodeCollect;
  }
  get nodeCollectShow() {
    return this._nodeCollectShow;
  }
  initScoreItem() {
    this.scoreRootNode && (this.scoreRootNode.active = false);
  }
  @mj.traitEvent("TravelGmVw_initExpands")
  initExpandNodes() {
    this._nodeCollect = this.topRootNode.getChildByName("nodeCollect");
    this._nodeCollectShow = this.gameUI.node.getChildByName("collectShowRoot");
  }
  clearAllNode() {
    super.clearAllNode.call(this);
    this._nodeCollect.removeAllChildren();
  }
}
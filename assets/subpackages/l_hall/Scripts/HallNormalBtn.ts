import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import { DotGameBtnClick, EHomePageClickType } from '../../../Scripts/dot/DGameBtnClick';
import { EVT_MSG_HALL_FORCE_UPDATE } from '../../../Scripts/base/event/EventDefine';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class
export default class HallNormalBtn extends BaseUI {
  @mj.component("BgBtn/Label", cc.Label)
  levelLabel: "BgBtn/Label" = null;
  levelId = 0;
  @mj.node("BgBtn")
  _bgBtnNode: "BgBtn" = null;
  static prefabUrl = "prefabs/hall/HallNormalBtn";
  get BgBtnNode() {
    return this._bgBtnNode;
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
    return _t;
  }
  @mj.traitEvent("HallNmlBtn_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
  }
  @mj.traitEvent("HallNmlBtn_updateUI")
  updateUI() {
    if (cc.isValid(this.levelLabel)) {
      this.levelId = UserModel.getInstance().getMainGameData().getLevelId();
      I18NStrings.setText(this.levelLabel.node, "Level " + this.levelId, "MahjongTiles_MapPage_Level", [this.levelId]);
    }
  }
  @mj.traitEvent("HallNmlBtn_onBtnClk")
  onBtnClick() {
    this.dispatchEvent("RankModel_updTime");
    if (UserModel.getInstance().getMainGameType() === MjGameType.Tile2Normal) {
      ControllerManager.getInstance().pushViewByController("Tile2GameController");
    } else {
      ControllerManager.getInstance().pushViewByController("MainGameController");
    }
    DotGameBtnClick.dotHall(EHomePageClickType.Level, this.levelId);
  }
  @mj.traitEvent("HallNmlBtn_forceUpdate")
  onForceUpdate() {}
}
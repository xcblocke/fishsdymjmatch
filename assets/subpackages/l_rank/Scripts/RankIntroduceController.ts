import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import RankIntroduceView from './util/RankIntroduceView';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class("RankIntroduceController")
export default class RankIntroduceController extends ViewController {
  viewClass = RankIntroduceView;
  viewMode = viewMode.PANEL;
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("RankIntroCtrl_viewShow")
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show", e);
  }
  close() {
    super.close.call(this);
  }
  collect() {
    this.dispatchEvent("RankModel_updTime");
    if (UserModel.getInstance().getMainGameType() === MjGameType.Tile2Normal) {
      ControllerManager.getInstance().pushViewByController("Tile2GameController");
    } else {
      ControllerManager.getInstance().pushViewByController("MainGameController");
    }
  }
}
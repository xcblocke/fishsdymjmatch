import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import RankModel from './RankModel';
import RankView from './util/RankView';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class("RankController")
export default class RankController extends ViewController {
  viewClass = RankView;
  viewMode = viewMode.SCENE;
  bundleName = "mainRes";
  _model = null;
  get model() {
    return this._model;
  }
  @mj.traitEvent("RankCtrl_initRes")
  initDependRes() {
    this.preloadResMap = {
      Prefab: ["prefabs/rank/RankView"]
    };
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this._model = RankModel.getInstance();
  }
  @mj.traitEvent("RankCtrl_viewShow")
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show", e);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
  jump() {
    this.dispatchEvent("RankModel_updTime");
    if (UserModel.getInstance().getMainGameType() === MjGameType.Tile2Normal) {
      ControllerManager.getInstance().pushViewByController("Tile2GameController");
    } else {
      ControllerManager.getInstance().pushViewByController("MainGameController");
    }
  }
  showTips() {
    ControllerManager.getInstance().pushViewByController("RankIntroduceController", {
      isReuse: true,
      isShowAction: true,
      isAutoOpen: false
    });
  }
}
import { SingletonFactory } from '../../framework/utils/SingletonFactory';
import ControllerManager from '../../framework/manager/ControllerManager';
import { MjGameType } from '../../core/simulator/constant/GameTypeEnums';
import { DotGamePageShow, EPageShowType } from '../../dot/DGamePageShow';
import TravelGameModel from '../../gamePlay/travel/model/TravelGameModel';
import { HIDELOADING } from '../../Config';
export default class JumpManager {
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  @mj.traitEvent("JumpMgr_init")
  init() {}
  @mj.traitEvent("JumpMgr_jumpTravelGm")
  jumpToTravelGame(e, t) {
    if (!TravelGameModel.getInstance().isSessionActive()) return false;
    ControllerManager.getInstance().pushViewByController("TravelGameController", e || {}, t);
    return true;
  }
  @mj.traitEvent("JumpMgr_jumpDaily")
  jumpToDailyChallenge(e) {
    var t = this;
    ControllerManager.getInstance().pushViewByController("HallController", {
      isReplace: true,
      isReuse: true
    }, function () {
      mj.EventManager.emit(HIDELOADING, t);
      var o = (null == e ? void 0 : e.timeStamp) || new Date().format("YYYY-mm-dd");
      ControllerManager.getInstance().pushViewByController("DailyController", Object.assign({
        isShowAction: false,
        isReuse: false,
        timeStamp: o
      }, e));
    });
  }
  @mj.traitEvent("JumpMgr_jumpHall")
  jumpToHall(e) {
    ControllerManager.getInstance().pushViewByController("HallController", Object.assign({
      isReplace: true,
      isReuse: true
    }, e));
  }
  @mj.traitEvent("JumpMgr_jumpGame")
  jumpToGame(e) {
    ControllerManager.getInstance().pushViewByController("MainGameController", e);
  }
  @mj.traitEvent("JumpMgr_jumpTravel")
  jumpToTravelMap(e) {
    ControllerManager.getInstance().pushViewByController("TravelMapController", Object.assign({
      isReplace: true
    }, e));
  }
  @mj.traitEvent("JumpMgr_popView")
  popView() {
    ControllerManager.getInstance().popView();
  }
  @mj.traitEvent("JumpMgr_popTo")
  popToController(e, t) {
    return ControllerManager.getInstance().popToTargetViewByName(e, t);
  }
  @mj.traitEvent("JumpMgr_backByType")
  backByGameType(e) {
    ControllerManager.getInstance().getTopSceneController();
    if (e === MjGameType.Travel) this.jumpToTravelMap();else if (e === MjGameType.DailyChallenge) this.jumpToDailyChallenge();else {
      this.jumpToHall();
      e === MjGameType.Normal && DotGamePageShow.dot(EPageShowType.LevelToMainPage);
    }
  }
  @mj.traitEvent("JumpMgr_closeView")
  closeView(e) {
    ControllerManager.getInstance().closeView(e);
  }
  @mj.traitEvent("JumpMgr_closeByName")
  closeViewByName(e) {
    ControllerManager.getInstance().closeViewByName(e);
  }
}
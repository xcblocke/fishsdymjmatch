import ControllerManager from '../framework/manager/ControllerManager';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2WinBehavior extends GameBehaviorsBase {
  @mj.traitEvent("Tile2WinBhv_start")
  start(e) {
    ControllerManager.getInstance().closeAllPanelsAndAlerts();
    this.pushWinView(e);
    this.finish();
  }
  @mj.traitEvent("Tile2WinBhv_pushView")
  pushWinView(e) {
    ControllerManager.getInstance().pushViewByController("Tile2WinController", {
      data: e.data,
      isShowAction: false
    }, null);
  }
}
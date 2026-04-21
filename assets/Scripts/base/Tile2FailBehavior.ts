import ControllerManager from '../framework/manager/ControllerManager';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2FailBehavior extends GameBehaviorsBase {
  @mj.traitEvent("Tile2FailBhv_start")
  start(e) {
    ControllerManager.getInstance().closeAllPanelsAndAlerts();
    this.pushFailView(e);
    this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("Tile2FailBhv_pushView")
  pushFailView(e) {
    var t, o, n, i;
    ControllerManager.getInstance().pushViewByController("Tile2FailController", {
      tiles: null === (t = e.data) || void 0 === t ? void 0 : t.tiles,
      reviveNum: null === (o = e.data) || void 0 === o ? void 0 : o.reviveNum,
      tilePreviewLayout: null === (n = e.data) || void 0 === n ? void 0 : n.tilePreviewLayout,
      adReviveAllowed: null === (i = e.data) || void 0 === i ? void 0 : i.adReviveAllowed
    });
  }
}
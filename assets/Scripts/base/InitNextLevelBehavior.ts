import UserModel from '../gamePlay/user/UserModel';
import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class InitNextLevelBehavior extends GameBehaviorsBase {
  _timeout = 0;
  onAbort() {
    super.onAbort.call(this);
  }
  start(e) {
    var t = this;
    Date.now();
    e.data.addGameLayerInfo.openGenerateState || this.cancelAnim(e);
    this.createNextLevelTileNodes(e).then(function () {
      Date.now();
      e.data.addGameLayerInfo.openGenerateState || t.refreshCardLockDarken(e);
      t.finish();
    });
  }
  refreshCardLockDarken() {
    UserModel.getInstance().isLockHighlightEnabled() && GameInteraction.input({
      inputType: EGameInputEnum.RefreshCardLockDarken,
      isShowAni: false
    });
  }
  cancelAnim(e) {
    var t,
      o,
      n = this.context.getTileNodeManager();
    (null !== (o = null === (t = e.data.addGameLayerInfo.failingTiles) || void 0 === t ? void 0 : t.map(function (e) {
      return e.tile.id;
    })) && void 0 !== o ? o : []).forEach(function (e) {
      var t = n.getTileNodeByTileId(e);
      if (t) {
        t.cancelSelected();
        t.hidePropHint();
        t.stopAllAnimation();
      }
    });
  }
  createNextLevelTileNodes(e) {
    return this.context.getTileNodeManager().createNextLevelTileNodes(e.data.addGameLayerInfo);
  }
}
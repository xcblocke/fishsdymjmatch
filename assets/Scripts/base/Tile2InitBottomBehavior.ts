import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import Tile2NodeBottomView from '../gamePlay/tile2game/view/Tile2NodeBottomView';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2InitBottomBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this,
      o = e.data,
      n = o.shuffleNum,
      i = o.hitTipsNum,
      l = o.revertNum,
      s = this.context.gameView,
      c = null == s ? void 0 : s.nodeBottomView,
      u = function u(e) {
        e.updateShuffleNum(n);
        e.updateHitTipsNum(i);
        e.updateRevertNum(l);
      };
    if (c) {
      u(c);
      this.finish(EBehaviorEnum.Success);
    } else Tile2NodeBottomView.createUI("prefabs/game/Tile2nodeBottom").then(function (e) {
      var o = s.getBottomNode();
      if (cc.isValid(o)) {
        e.parent = o;
        var n = e.getComponent(Tile2NodeBottomView);
        s.setNodeBottomView(n);
        u(n);
        n.delegate = t.context.gameCtr;
        t.finish(EBehaviorEnum.Success);
      } else t.finish(EBehaviorEnum.Fail);
    });
  }
}
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import Tile2NodeTopView from '../gamePlay/tile2game/view/Tile2NodeTopView';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2InitTopBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this,
      o = e.data,
      n = o.level,
      i = o.matchNum,
      l = o.score,
      s = o.isCombo,
      c = this.context.gameView,
      u = null == c ? void 0 : c.nodeTopView;
    if (u) {
      u.updateLevel(n);
      u.updateMatchNum(i);
      u.updateScore(0, l, s);
      this.finish(EBehaviorEnum.Success);
    } else Tile2NodeTopView.createUI("prefabs/game/Tile2nodeTop").then(function (e) {
      var o = c.getTopNode();
      if (cc.isValid(o)) {
        e.parent = o;
        var u = e.getComponent(Tile2NodeTopView);
        c.setNodeTopView(u);
        u.updateLevel(n);
        u.updateMatchNum(i);
        u.updateScore(0, l, s);
        t.finish(EBehaviorEnum.Success);
        u.delegate = t.context.gameCtr;
      } else t.finish(EBehaviorEnum.Fail);
    });
  }
}
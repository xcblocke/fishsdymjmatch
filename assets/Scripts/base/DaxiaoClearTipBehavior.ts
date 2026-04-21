import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { TileNodeZIndexMap, ETileNodeNames } from '../BaseTileNode';
import { DaxiaoAnimPlayer } from '../anim/DaxiaoAnimPlayer';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class DaxiaoClearTipBehavior extends GameBehaviorsBase {
  start(e) {
    e.data.tileIds;
    var t = e.data.finalMatchInfos,
      o = DaxiaoAnimPlayer.configBase.resources.flowLight;
    this.showTip(t, o.path, o.bundle);
    this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("DaxiaoTipBhr_showTip")
  showTip(e, t, o) {
    var n, i;
    try {
      for (var r = __values(e), l = r.next(); !l.done; l = r.next()) {
        var s = l.value;
        if (s.isFix) {
          var c = this.context.getTileNodeMap().get(s.tileId1),
            u = this.context.getTileNodeMap().get(s.tileId2);
          this.showDaxiaoClearTip(c, t, o);
          this.showDaxiaoClearTip(u, t, o);
        } else {
          c = this.context.getTileNodeMap().get(s.tileId1);
          this.showDaxiaoClearTip(c, t, o);
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (i = r.return) && i.call(r);
      } finally {
        if (n) throw n.error;
      }
    }
  }
  showDaxiaoClearTip(e, t, o) {
    if (e && cc.isValid(e.tileNode)) {
      var n = e.tileNode;
      if (!n.getChildByName("DaxiaoCardTipNode")) {
        var i = new cc.Node();
        i.name = "DaxiaoCardTipNode";
        n.addChild(i);
        i.zIndex = TileNodeZIndexMap[ETileNodeNames.imgCard] + 1;
        i.scale = 1 * e.info.tileObject.layoutScale;
        BaseSpine.refreshWithNode(i, t, o).setAnimation("init", -1, null, false);
      }
    }
  }
}
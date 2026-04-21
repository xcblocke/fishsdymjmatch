import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import SlotBarView from '../gamePlay/tile2game/view/SlotBarView';
import { ETile2SlotType } from '../core/simulator/constant/GameTypeEnums';
export class Tile2InitSlotBarBehavior extends GameBehaviorsBase {
  @mj.traitEvent("T2InitSlotBarBhv_start")
  start(e) {
    var t = this,
      o = e.data,
      n = o.tileIds,
      i = o.slotLevel,
      r = this.context.gameView,
      l = null == r ? void 0 : r.slotBarView;
    if (l) this.initSlotBar(l, n, i);else {
      var u = "prefabs/game/Tile2nodeSlotBar";
      e.data.slotType === ETile2SlotType.Slot4 && (u = "prefabs/game/Tile2Slot4nodeSlotBar");
      SlotBarView.createUI(u).then(function (o) {
        var l = r.getSlotBarNode();
        if (cc.isValid(l)) {
          l.setContentSize(o.getContentSize());
          o.parent = l;
          var c = o.getComponent(SlotBarView);
          r.setSlotBarView(c);
          c.init(e.data.slotType);
          t.initSlotBar(c, n, i);
        } else t.finish(EBehaviorEnum.Fail);
      });
    }
  }
  initSlotBar(e, t, o) {
    var n = this.context.getTileNodeMap();
    t.forEach(function (t, o) {
      var i = n.get(t);
      if (i) {
        e.addTileNode(i, o);
        i.tile2ShowFrontImmediately();
      }
    });
    o > 0 && e.slotBarEffectManager && e.slotBarEffectManager.initToLevel(o);
    this.finish(EBehaviorEnum.Success);
  }
}
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { ETile2SlotType } from '../core/simulator/constant/GameTypeEnums';
import Tile2ScreenEdgeEffectItem from '../items/Tile2ScreenEdgeEffectItem';
import { GameBehaviorsBase } from './GameBehaviorsBase';
var p = {
  5: 1,
  15: 2,
  30: 3
};
export class Tile2ScreenEdgeEffectBehavior extends GameBehaviorsBase {
  static clearParticles(e) {
    if (cc.isValid(e)) {
      var t = e.getChildByName("__comboEdgeParticles__");
      t && cc.isValid(t) && t.destroy();
    }
  }
  @mj.traitEvent("T2ScreenEdgeBhv_isSlot4")
  isSlot4() {
    return this.context.getTile2SlotType() === ETile2SlotType.Slot4;
  }
  @mj.traitEvent("T2ScreenEdgeBhv_start")
  start(e) {
    var o;
    this.finish(EBehaviorEnum.Success);
    var n = null === (o = this.context.gameView) || void 0 === o ? void 0 : o.effectNode;
    if (cc.isValid(n)) if (this.isSlot4()) this.handleSlot4Effect(e, n);else if (e.data.isClear) Tile2ScreenEdgeEffectBehavior.clearParticles(n);else {
      var i = this.getStage(e.data.comboNum);
      i >= 4 && this.handleSlot4Effect(e, n);
      if (i && !(i >= 4)) {
        Tile2ScreenEdgeEffectBehavior.clearParticles(n);
        var r = cc.v2(-n.width / 2, n.height / 2),
          a = cc.v2(n.width / 2, n.height / 2);
        e.data.skipBurst || this.createBurstSpines(n, i, r, a);
        this.createParticleSpines(n, i, r, a);
      }
    }
  }
  @mj.traitEvent("T2ScreenEdgeBhv_getStage")
  getStage(e) {
    return p[e];
  }
  handleSlot4Effect(e, t) {
    e.data.isClear || this.createSlot4Item(t);
  }
  createSlot4Item(e) {
    Tile2ScreenEdgeEffectItem.create().then(function (t) {
      if (t && cc.isValid(e)) {
        t.node.parent = e;
        t.playAnimation(function () {
          cc.isValid(t.node) && t.node.destroy();
        });
      }
    });
  }
  createBurstSpines(e, t, o, n) {
    var i = BaseSpine.create("spine/tile3Combo/gameplay_combo_effect_a", "in_" + t + "a", 1, null, true);
    i.node.parent = e;
    i.node.setPosition(o.x, o.y);
    var r = BaseSpine.create("spine/tile3Combo/gameplay_combo_effect_a", "in_" + t + "b", 1, null, true);
    r.node.parent = e;
    r.node.setPosition(n.x, n.y);
  }
  createParticleSpines(e, t, o, n) {
    var i = new cc.Node("__comboEdgeParticles__");
    i.parent = e;
    var r = BaseSpine.create("spine/tile3Combo/gameplay_combo_effect_b", "init_" + t + "a", -1, null, false);
    r.node.parent = i;
    r.node.setPosition(o.x, o.y);
    var l = BaseSpine.create("spine/tile3Combo/gameplay_combo_effect_b", "init_" + t + "b", -1, null, false);
    l.node.parent = i;
    l.node.setPosition(n.x, n.y);
  }
}
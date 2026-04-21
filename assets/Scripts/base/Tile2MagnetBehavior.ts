import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import Tile2MagnetItem from '../items/Tile2MagnetItem';
export class Tile2MagnetBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.magnetCount || 1;
    try {
      var o = this.context.gameView;
      this.showItem(o, t);
    } catch (e) {}
    this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("Tile2MagnetBhv_showItem")
  showItem(e, t) {
    var o = this;
    if (e && cc.isValid(e.nodeTopEffectRoot)) {
      var n = e.nodeTopEffectRoot.getChildByName("magnetNode");
      if (n && cc.isValid(n)) {
        n.active || this.playEnterAnimation(n, t);
      } else {
        this.createMagnetNode(e, t, function (e) {
          o.playEnterAnimation(e, t);
        });
      }
    }
  }
  @mj.traitEvent("Tile2MagnetBhv_nodeCfg")
  getNodeCfg() {
    return null;
  }
  createMagnetNode(e, t, o) {
    var n = this.getNodeCfg();
    n && Tile2MagnetItem.createUI(n.url, n.bundleName).then(function (t) {
      if (!cc.isValid(t)) return null;
      if (!e || !cc.isValid(e.nodeTopEffectRoot)) {
        t.destroy();
        return null;
      }
      e.nodeTopEffectRoot.addChild(t);
      t.active = false;
      null == o || o(t);
    }).catch(function () {});
  }
  playEnterAnimation(e, t) {
    var o = this.context.gameView,
      n = null == o ? void 0 : o.getSlotBarNode(),
      i = null == o ? void 0 : o.nodeTopEffectRoot;
    if (e && cc.isValid(e) && n && cc.isValid(n) && i && cc.isValid(i)) {
      var r = this.getOffset(),
        a = n.convertToWorldSpaceAR(r),
        l = i.convertToNodeSpaceAR(a);
      e.active = true;
      var c = e.getComponent(Tile2MagnetItem);
      if (c && c.playEnterAnimation) {
        var u = {
          enterDuration: this.getEnterTime(),
          countdownDuration: this.getDownTime(),
          exitDuration: this.getExitTime(),
          targetPos: l,
          magnetCount: t
        };
        c.playEnterAnimation(u);
      }
    }
  }
  @mj.traitEvent("Tile2MagnetBhv_offset")
  getOffset() {
    return cc.v2(-455, -120);
  }
  @mj.traitEvent("Tile2MagnetBhv_enterTime")
  getEnterTime() {
    return 0.5;
  }
  @mj.traitEvent("Tile2MagnetBhv_downTime")
  getDownTime() {
    return 5;
  }
  @mj.traitEvent("Tile2MagnetBhv_exitTime")
  getExitTime() {
    return 0.3;
  }
}
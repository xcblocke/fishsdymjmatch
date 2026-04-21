import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import DianZanItem from './DianZanItem';
export class DianZanBehavior extends GameBehaviorsBase {
  async start(t) {
    var e, n, r, o, i, a, p, l, f, h, y, _, d, v;
    e = t.data;
    n = e.tileId;
    r = e.lastTileId;
    if (!n || !r) {
      this.finish(EBehaviorEnum.Success);
      return;
    }
    this.finish(EBehaviorEnum.Success);
    o = this.context.getTileNodeWorldPosition(n);
    i = this.context.getTileNodeWorldPosition(r);
    a = this.getScale(this.context.layoutScale);
    p = await DianZanItem.createUI();
    l = await DianZanItem.createUI();
    f = this.context.gameView.effectNode;
    p.parent = f;
    h = f.convertToNodeSpaceAR(o);
    p.position = this.getDianZanPosition(h);
    l.parent = f;
    y = f.convertToNodeSpaceAR(i);
    l.position = this.getDianZanPosition(y);
    _ = p.getComponent(DianZanItem);
    d = l.getComponent(DianZanItem);
    v = this.getAnimName();
    this.playDianZanAni(_, d, v, a);
    return;
  }
  @mj.traitEvent("DianZanBhv_getPos")
  getDianZanPosition(t) {
    return cc.v3(t.x, t.y, 0);
  }
  @mj.traitEvent("DianZanBhv_getScale")
  getScale(t) {
    return t;
  }
  @mj.traitEvent("DianZanBhv_getAniName")
  getAnimName() {
    return "in";
  }
  @mj.traitEvent("DianZanBhv_playAni")
  playDianZanAni(t, e, n, r) {
    t.setScale(r);
    e.setScale(r);
    t.startPlayAni(n);
    e.startPlayAni(n, function () {});
  }
}
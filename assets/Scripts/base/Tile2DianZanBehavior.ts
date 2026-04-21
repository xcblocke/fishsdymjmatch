import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
export class Tile2DianZanBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o = e.data,
      n = o.tileId1;
    this.finish(EBehaviorEnum.Success);
    try {
      var i = this.context.getTileNodeWorldPosition(n),
        r = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.effectNode,
        l = null == r ? void 0 : r.convertToNodeSpaceAR(i);
      this.createItem(r, this.getPosition(l), o.dianZanCondition);
    } catch (e) {}
  }
  @mj.traitEvent("Tile2DZanBhv_createItem")
  createItem(e, t, o) {
    var n = this;
    if (!e || !cc.isValid(e)) return null;
    var i = new cc.Node();
    i.parent = e;
    i.position = t;
    var r = new cc.Node();
    r.parent = i;
    r.scale = this.getScale(this.context.layoutScale);
    var a = BaseSpine.refreshWithNode(r, this.getSpineUrl(o), this.getSpineBundleName(o));
    a.setOnReadyCallback(function () {
      n.playAni(i, a, o);
    });
    return i;
  }
  @mj.traitEvent("Tile2DZanBhv_playAni")
  playAni(e, t, o) {
    var n = this;
    e && cc.isValid(e) && t && (null == t || t.setAnimation(this.getAnimName(o), 1, function () {
      n.playAniEnd();
      e.destroy();
    }));
  }
  @mj.traitEvent("Tile2DZanBhv_playAniEnd")
  playAniEnd() {}
  @mj.traitEvent("Tile2DZanBhv_spUrl")
  getSpineUrl() {
    return "spine/dianZan/gameplay_hand";
  }
  @mj.traitEvent("Tile2DZanBhv_spBundle")
  getSpineBundleName() {
    return "mainRes";
  }
  @mj.traitEvent("Tile2DZanBhv_pos")
  getPosition(e) {
    return cc.v3(e.x, e.y, 0);
  }
  @mj.traitEvent("Tile2DZanBhv_scale")
  getScale(e) {
    return e;
  }
  @mj.traitEvent("Tile2DZanBhv_animName")
  getAnimName() {
    return "in";
  }
}
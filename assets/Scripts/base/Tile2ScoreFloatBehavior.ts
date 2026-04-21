import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import Tile2ScoreFloatItem from '../items/Tile2ScoreFloatItem';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2ScoreFloatBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this,
      o = e.data,
      n = o.addScore,
      i = o.isCombo,
      r = o.isMagnetMerge;
    (i ? Tile2ScoreFloatItem.createCombo() : Tile2ScoreFloatItem.createNormal()).then(function (e) {
      if (e) {
        var o = t.context.gameView.nodeTopEffectRoot;
        e.node.parent = o;
        var i = t.getWorldPos(r);
        e.node.position = t.getFloatPosition(o, r);
        e.setScore(n);
        var l = t.getHolderLocalPosition(o);
        if (l) {
          var s = t.getSpawnZone(i);
          e.playFlyToHolderAnimation(l, s, function () {
            return t.onArriveAtHolder();
          }, function () {
            return t.onComplete();
          });
        } else {
          t.finish(EBehaviorEnum.Success);
          e.node.destroy();
        }
      } else t.finish(EBehaviorEnum.Success);
    });
  }
  @mj.traitEvent("T2ScoreFloatBhv_worldPos")
  getWorldPos(e) {
    if (!e) return this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0);
    var t = this.getOffset(true),
      o = this.context.gameView,
      n = null == o ? void 0 : o.getSlotBarNode();
    if (!n || !cc.isValid(n)) return cc.v3(0, 0, 0);
    var i = n.convertToWorldSpaceAR(t);
    return cc.v3(i.x, i.y, 0);
  }
  @mj.traitEvent("T2ScoreFloatBhv_offset")
  getOffset() {
    return cc.v2(0, 0);
  }
  getFloatPosition(e, t) {
    var o = this.getWorldPos(t),
      n = e.convertToNodeSpaceAR(o),
      i = this.getFloatOffset();
    return cc.v3(n.x + i.x, n.y + i.y, 0);
  }
  getFloatOffset() {
    return cc.v2(0, 100);
  }
  getSpawnZone(e) {
    var t,
      o = null === (t = cc.Canvas.instance) || void 0 === t ? void 0 : t.node;
    if (!o || !cc.isValid(o)) return 5;
    var n = o.convertToNodeSpaceAR(e),
      i = o.getContentSize(),
      r = o.anchorY,
      a = i.height * (1 - r),
      l = -i.height * r,
      s = (a - n.y) / (a - l);
    return Math.min(10, Math.max(1, Math.floor(10 * s) + 1));
  }
  getHolderLocalPosition(e) {
    var t,
      o,
      n = null === (o = null === (t = this.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem) || void 0 === o ? void 0 : o.node;
    if (!n || !cc.isValid(n)) return null;
    var i = n.convertToWorldSpaceAR(cc.v2(0, 0));
    return e.convertToNodeSpaceAR(i);
  }
  onArriveAtHolder() {
    this.finish(EBehaviorEnum.Success);
  }
  onComplete() {}
}
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { FadeNodeStateAni } from '../tilenodes/fsm/ani/FadeNodeStateAni';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class BombBehavior extends GameBehaviorsBase {
  start(e) {
    if (e.data.bombIds && 2 === e.data.bombIds.length) {
      var t = this.context.gameView.nodeTopEffectRoot,
        o = e.data.pos1,
        n = e.data.pos2,
        i = this.context.getTileNodeManager().getFirstLayer(),
        r = i.convertToWorldSpaceAR(o),
        a = i.convertToWorldSpaceAR(n),
        s = t.convertToNodeSpaceAR(r),
        c = t.convertToNodeSpaceAR(a),
        u = s.add(c).mul(0.5),
        p = e.data.bombIds[0],
        f = e.data.bombIds[1],
        d = this.context.getTileNodeByTileId(p),
        h = this.context.getTileNodeByTileId(f),
        y = null == d ? void 0 : d.cardNode,
        m = null == h ? void 0 : h.cardNode;
      if (d && h && y && m) {
        var v = y.parent.convertToWorldSpaceAR(y.position),
          g = m.parent.convertToWorldSpaceAR(m.position),
          _ = t.convertToNodeSpaceAR(v),
          T = t.convertToNodeSpaceAR(g);
        this.playBomb(t, u, _, T, d, h);
      } else this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("BombBhv_spineBundleName")
  getSpineAndBundleName() {
    return {
      name: "spine/bomb/gameplay_props",
      bundleName: "mainRes"
    };
  }
  @mj.traitEvent("BombBhv_playBomb")
  playBomb(e, t, o, n, i, r) {
    var l = this,
      s = this.getSpineAndBundleName(),
      c = s.name,
      u = s.bundleName,
      p = BaseSpine.create(c, "in_hammer", 1, function () {
        var e = p.getComponent(sp.Skeleton);
        e && e.destroy();
      }, false, u),
      f = BaseSpine.create(c, "in_hammer", 1, function () {
        var e = p.getComponent(sp.Skeleton);
        e && e.destroy();
      }, false, u);
    p.node.parent = e;
    p.node.position = t;
    f.node.parent = e;
    f.node.position = t;
    p.node.name = "bombNode1";
    f.node.name = "bombNode2";
    this.playMove(p, o, i, function () {
      mj.triggerInternalEvent("BombBhv_finish", l, [o, n]) || l.finish();
    });
    this.playMove(f, n, r, function () {});
  }
  getDelayTime() {
    return 0.2;
  }
  @mj.traitEvent("BombBhv_moveTime")
  getMoveTime() {
    return 0.2;
  }
  playMove(e, t, o, n) {
    var i = this;
    cc.tween(e.node).to(this.getMoveTime(), {
      position: t
    }).delay(this.getDelayTime()).call(function () {
      var e = new FadeNodeStateAni(o.cardNode, o);
      o.attachNodeStateAnis([e]);
      o.forceExitPlayAttachExitAni(null, function () {
        i.context.removeTileNodeByTileId(o.tileObject.id);
      });
      i.context.gameView.playShake();
      var r = i.context.gameView.nodeTopEffectRoot,
        l = i.getSpineAndBundleName(),
        s = l.name,
        u = l.bundleName,
        p = BaseSpine.create(s, "in_broken", 1, null, true, u);
      p.node.parent = r;
      p.node.position = t;
      i.playAudio();
      null == n || n();
    }).delay(2).call(function () {
      cc.isValid(e.node) && e.node.destroy();
    }).start();
  }
  @mj.traitEvent("BombBhv_playAudio")
  playAudio() {
    mj.audioManager.playEffect(EAudioID.Hammer);
  }
}
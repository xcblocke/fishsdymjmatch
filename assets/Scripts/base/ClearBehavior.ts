import { EGameInputEnum, EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { ETileType } from '../simulator/constant/TileTypeEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ClearBehavior extends GameBehaviorsBase {
  startStayTime = 0.033;
  halfWidthDev = 2;
  flyTimeStep1Min = 0.18;
  flyTimeStep1Max = 0.25;
  flyTimeStep2Min = 0.035;
  flyTimeStep2Max = 0.15;
  _type = ETileType.Normal;
  start(e) {
    var t,
      o,
      n,
      i,
      r = this,
      l = this.context.getTileNodeMap(),
      s = this.context.gameView.nodeDragCardRoot,
      c = [e.data.tileId, e.data.lastTileId].map(function (e) {
        var t = l.get(e);
        return {
          tileNode: t,
          cardNode: null == t ? void 0 : t.cardNode,
          shadowNode: null == t ? void 0 : t.shadowCardNode
        };
      });
    if ((null === (t = c[0]) || void 0 === t ? void 0 : t.cardNode) && (null === (o = c[1]) || void 0 === o ? void 0 : o.cardNode)) {
      this.prepareClear([c[0].tileNode, c[1].tileNode]);
      this._type = null === (i = null === (n = c[0].tileNode) || void 0 === n ? void 0 : n.tileObject) || void 0 === i ? void 0 : i.type;
      var u = e.data.inputType === EGameInputEnum.TouchEnd,
        p = c[1].cardNode.convertToWorldSpaceAR(cc.v2(0, 0)),
        f = cc.isValid(c[1].shadowNode) ? c[1].shadowNode.convertToWorldSpaceAR(cc.v2(0, 0)) : cc.v2(0, 0);
      c.forEach(function (e) {
        var t = e.tileNode,
          o = e.cardNode,
          n = e.shadowNode;
        t.clearCancelSelected();
        var i = u ? p : o.convertToWorldSpaceAR(cc.v2(0, 0)),
          r = s.convertToNodeSpaceAR(i);
        o.parent = s;
        o.position = cc.v3(r.x, r.y, 0);
        if (n) {
          var a = u ? f : n.convertToWorldSpaceAR(cc.v2(0, 0)),
            l = s.convertToNodeSpaceAR(a);
          n.parent = s;
          n.position = cc.v3(l.x, l.y, 0);
          var c = cc.v3(n.position.x - o.position.x, n.position.y - o.position.y, 0);
          n._shadowOffset = c;
        }
      });
      var d = c[0].cardNode.position.x > c[1].cardNode.position.x;
      [c[0], c[1]].forEach(function (e, t) {
        var o = e.cardNode,
          n = e.shadowNode,
          i = d ? 0 === t : 1 === t;
        o.zIndex = i ? 1 : 0;
        n && (n.zIndex = i ? -1 : -2);
      });
      this.playKillCardAnimation(c[0].cardNode, c[1].cardNode, c[0].cardNode.width, c[0].cardNode.height, u, function (t) {
        r.context.setLastCollisionWorldPos(t);
        r.playMatchAudio(e.data.isBonus, e.data.isFullCombo);
        r.onTileClearCollision();
        r.finish(EBehaviorEnum.Success);
      }, function () {
        var e = [];
        c.forEach(function (t) {
          var o = t.tileNode;
          t.cardNode, t.shadowNode;
          cc.isValid(o) && cc.isValid(o.cardNode) && e.push(o.info.tileObject.id);
        });
        r.context.removeTileNodeByTileIds(e);
        r.clearFinish();
      });
      var h = c.map(function (e) {
        return e.shadowNode;
      }).filter(Boolean);
      2 === h.length && this.playKillCardAnimation(h[0], h[1], c[0].cardNode.width, c[0].cardNode.height, u);
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("ClearBhv_prepareClear")
  prepareClear() {}
  @mj.traitEvent("ClearBhv_playMove")
  playMove(e, t, o, n, i, r) {
    if (e && cc.isValid(e) && n && n.length > 0) cc.tween(e).to(t, {
      position: n[0]
    }, {
      easing: cc.easing.circOut
    }).to(o, {
      position: n[1]
    }, {
      easing: cc.easing.cubicIn
    }).call(function () {
      null == i || i();
      null == r || r();
    }).start();else {
      null == i || i();
      null == r || r();
    }
  }
  @mj.traitEvent("ClearBhv_collision")
  onTileClearCollision() {}
  clearFinish() {}
  getTargetPosList(e, t, o, n, i) {
    var r = i ? -1 : 1,
      a = e.getPosition().clone();
    a.x += 0.5 * o * this.halfWidthDev * r;
    a.y = t.y;
    var l = t.clone();
    return [cc.v3(a.x, a.y), l];
  }
  playKillCardAnimation(e, t, o = 216, n = 268, i = false, r?, a?) {
    var l,
      s,
      c = e.getPosition(),
      u = t.getPosition();
    if (Math.abs(c.x - u.x) < 0.01) {
      l = c.y <= u.y ? e : t;
      s = c.y > u.y ? e : t;
    } else {
      l = c.x < u.x ? e : t;
      s = c.x > u.x ? e : t;
    }
    var p,
      f = s.x - l.x,
      d = o > 0 ? Math.ceil(f / o) : 1;
    p = d <= 3 ? 1 : d <= 7 ? 2 : 3;
    var h = 1;
    i && (h = 1);
    var y = l.getPosition().add(s.getPosition()).mulSelf(0.5),
      m = cc.v3(y.x, y.y, 0),
      v = this.getTargetPosList(l, m, o, n, true),
      g = this.getTargetPosList(s, m, o, n, false),
      _ = e.parent.convertToWorldSpaceAR(m);
    this.playKillAnimation(l, v, p, h);
    this.playKillAnimation(s, g, p, h, function () {
      null == r || r(_);
    }, a);
  }
  playKillAnimation(e, t, o, n, i, r) {
    var a = cc.v2(e.width, 3 * e.height).len(),
      l = e.width,
      s = cc.Vec2.distance(t[0], e.position),
      c = cc.misc.clampf((s - l) / (a - l), 0, 1),
      u = cc.misc.lerp(this.flyTimeStep1Min, this.flyTimeStep1Max, c) * n,
      p = 3 * e.width,
      f = e.width,
      d = Math.abs(t[1].x - t[0].x),
      h = cc.misc.clampf((d - f) / (p - f), 0, 1),
      y = cc.misc.lerp(this.flyTimeStep2Min, this.flyTimeStep2Max, h) * n;
    this.playMove(e, u, y, t, i, r);
  }
  @mj.traitEvent("ClearBhv_matchAud")
  playMatchAudio(e = false, t = false) {
    if (this._type != ETileType.RankCard) {
      mj.audioManager.playEffect(EAudioID.Match);
    } else {
      mj.audioManager.playEffect(EAudioID.Special2Streak);
    }
  }
}
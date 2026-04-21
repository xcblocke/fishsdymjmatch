import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import TravelGameModel from '../gamePlay/travel/model/TravelGameModel';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { MjGameType, EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export default class YogaCardBehavior extends GameBehaviorsBase {
  static playCollectAudio() {
    mj.audioManager.playEffect(EAudioID.CollectionSpecial);
  }
  static playTwoStageAnimation(e, o, n, i, r = 0.15, a = 0.5, l?) {
    if (e && cc.isValid(e)) {
      e.position = o;
      var s = o.x + 0.2 * (n.x - o.x),
        c = o.y + 0.3 * (n.y - o.y),
        u = cc.v2(s, c),
        p = o.x + 0.5 * (n.x - o.x),
        f = o.y + 0.85 * (n.y - o.y),
        d = cc.v2(p, f),
        h = cc.v2(n.x, n.y),
        y = n.x + 0.25 * (i.x - n.x),
        m = n.y + 0.15 * (i.y - n.y),
        v = cc.v2(y, m),
        g = n.x + 0.7 * (i.x - n.x),
        _ = n.y + 0.6 * (i.y - n.y),
        T = cc.v2(g, _),
        C = cc.v2(i.x, i.y);
      cc.tween(e).delay(0.77).call(function () {
        YogaCardBehavior.playCollectAudio();
      }).bezierTo(r, u, d, h).bezierTo(a, v, T, C).call(function () {
        null == l || l();
      }).start();
    }
  }
  start(e) {
    var o,
      n,
      i = this,
      s = e.data.tileIds,
      u = function u(e) {
        var o = p.context.getTileNodeMap().get(e);
        if (o) {
          var n = o.tileObject.type + "_" + o.tileObject.cardId,
            a = p.context.getTileNodeWorldPosition(e),
            s = p.context.getCollectTargetPosition(n);
          if (!s) {
            var u = p.context.gameView.topRootNode.position;
            s = p.context.gameView.topRootNode.parent.convertToWorldSpaceAR(u);
          }
          o.hide();
          p.context.removeTileNodeByTileId(e);
          var f = __read(p.getAnimPath(), 2),
            d = f[0],
            h = f[1],
            y = BaseSpine.create(h, "in", 1, null, false, d);
          p.context.gameView.effectNode.addChild(y.node);
          var m = p.context.gameView.effectNode.convertToNodeSpaceAR(a),
            v = new cc.Vec3(m.x, m.y, 0),
            g = p.context.gameView.effectNode.convertToNodeSpaceAR(s),
            _ = new cc.Vec3(m.x, m.y - 200, 0);
          p.playInitAudio();
          YogaCardBehavior.playTwoStageAnimation(y.node, v, _, g, 0.15, 0.44, function () {
            cc.isValid(y.node) && y.node.destroy();
            i.finish(EBehaviorEnum.Success);
          });
        }
      },
      p = this;
    try {
      for (var f = __values(s), d = f.next(); !d.done; d = f.next()) u(d.value);
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (n = f.return) && n.call(f);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  getAnimPath() {
    if (this.context.gameCtr.gameType === MjGameType.Travel) {
      var e = TravelGameModel.getInstance().getCurJourney(),
        t = TravelGameModel.getInstance().getConfig(e);
      if (t && t.yogaAnim) {
        var o = t.yogaAnim.split(":");
        return 2 === o.length ? [o[0], "spine/" + o[1]] : ["mainRes", "spine/yoga/" + t.yogaAnim];
      }
    }
    return ["mainRes", "spine/yoga/gameplay_obstacle"];
  }
  playInitAudio() {
    mj.audioManager.playEffect(EAudioID.CollectionShow);
  }
}
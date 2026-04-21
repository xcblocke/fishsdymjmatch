import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { MotivationalWordsEffect } from '../MotivationalWordsEffect';
import GameUtils from '../core/simulator/util/GameUtils';
import { PoolName } from '../constant/enumRes';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export default class MotivationalWordsBehavior extends GameBehaviorsBase {
  @mj.traitEvent("MotivWordsBhv_start")
  start(e) {
    var t,
      o = this,
      n = e.data,
      i = (n.comboNum, n.index),
      r = (n.tileId1, n.tileId2, this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0)),
      l = cc.v2(r.x, r.y),
      c = this.getAnimationName(i),
      u = this.createEffectNode(l, i);
    if (u) {
      var p = null === (t = cc.find("spin", u)) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton);
      if (p) {
        this.playSound(i);
        GameUtils.playSpine(p, c, false, function () {
          o.context.gameView.gameObjectPool.push(o.nodeName(), u);
          o.finish(EBehaviorEnum.Success);
        });
      } else this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("MotivWordsBhv_getAni")
  getAnimationName(e) {
    return MotivationalWordsEffect.aniCfg[e];
  }
  @mj.traitEvent("MotivWordsBhv_nodeName")
  nodeName() {
    return PoolName.MotivationalWords;
  }
  @mj.traitEvent("MotivWordsBhv_getParent")
  getParentLayer() {
    return this.context.gameView.nodeTopEffectRoot;
  }
  createEffectNode(e, t) {
    var o = this.getParentLayer(),
      n = this.context.gameView.gameObjectPool.get(this.nodeName());
    if (!n || !cc.isValid(o)) return null;
    n.active = true;
    n.parent = o;
    var i = cc.v2(e.x, e.y),
      r = this.getSafePosition(n, i, t),
      a = o.convertToNodeSpaceAR(r);
    n.position = cc.v3(a.x, a.y + 80, 0);
    return n;
  }
  @mj.traitEvent("MotivWordsBhv_safePos")
  getSafePosition(e, t) {
    return t;
  }
  clampToScreenWorld(e, t, o) {
    var n = cc.view.getVisibleSize(),
      i = n.width,
      r = n.height,
      a = this.getWordsSize(o),
      l = a.width,
      s = a.height,
      c = e.anchorX,
      u = e.anchorY,
      p = t.x - l * c,
      f = t.x + l * (1 - c),
      d = t.y - s * u,
      h = t.y + s * (1 - u),
      y = 0,
      m = 0;
    if (p < 0) {
      y = 0 - p;
    } else {
      f > i && (y = i - f);
    }
    if (d < 0) {
      m = 0 - d;
    } else {
      h > r && (m = r - h);
    }
    if (0 !== y || 0 !== m) {
      return cc.v2(t.x + y, t.y + m);
    }
    return t;
  }
  @mj.traitEvent("MotivWordsBhv_getSize")
  getWordsSize(e) {
    var t = [{
      width: 300,
      height: 150
    }, {
      width: 320,
      height: 150
    }, {
      width: 450,
      height: 150
    }, {
      width: 450,
      height: 150
    }, {
      width: 580,
      height: 150
    }];
    return e < 0 || e >= t.length ? {
      width: 350,
      height: 150
    } : t[e];
  }
  @mj.traitEvent("MotivWordsBhv_playSound")
  playSound(e) {
    var t = MotivationalWordsEffect.soundNameArr[e];
    t && mj.audioManager && mj.audioManager.playEffect(t);
  }
  drawDebugBounds(e, t) {
    var o = e.getChildByName("__DEBUG_BOUNDS__");
    o && o.destroy();
    var n = this.getWordsSize(t),
      i = n.width,
      r = n.height,
      a = new cc.Node("__DEBUG_BOUNDS__");
    a.parent = e;
    a.anchorX = e.anchorX;
    a.anchorY = e.anchorY;
    a.position = cc.v3(0, 0, 0);
    a.opacity = 100;
    var l = a.addComponent(cc.Graphics),
      s = -i * e.anchorX,
      c = -r * e.anchorY;
    l.lineWidth = 3;
    l.strokeColor = cc.Color.GREEN;
    l.rect(s, c, i, r);
    l.stroke();
    l.fillColor = new cc.Color(0, 255, 0, 30);
    l.rect(s, c, i, r);
    l.fill();
    var u = new cc.Node("DebugLabel");
    u.parent = a;
    u.position = cc.v3(0, r / 2 + 20, 0);
    var p = u.addComponent(cc.Label);
    p.string = ["Good", "Great", "Excellent", "Amazing", "Unbelievable"][t] + ": " + i + "x" + r;
    p.fontSize = 20;
    p.lineHeight = 24;
    p.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    var f = u.addComponent(cc.LabelOutline);
    f.color = cc.Color.BLACK;
    f.width = 2;
  }
}
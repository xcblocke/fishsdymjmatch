import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import GameUtils from '../core/simulator/util/GameUtils';
import { PoolName } from '../constant/enumRes';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class UpdateComboBehavior extends GameBehaviorsBase {
  _currentComboNum = 0;
  static _currentComboNode = null;
  static _comboAnimationId = 0;
  @mj.traitEvent("UpdComboBhv_start")
  start(e) {
    var o,
      n,
      i,
      r,
      a = this.context.gameView.effectNode;
    UpdateComboBehavior._currentComboNode && cc.isValid(UpdateComboBehavior._currentComboNode) && this.stopAndRecycleCurrentCombo();
    var s = this.context.gameView.gameObjectPool.get(this.getPoolName());
    if (s) {
      UpdateComboBehavior._currentComboNode = s;
      UpdateComboBehavior._comboAnimationId++;
      var c = UpdateComboBehavior._comboAnimationId;
      s.active = true;
      var u = null === (o = cc.find("spinCombo", s)) || void 0 === o ? void 0 : o.getComponent(sp.Skeleton),
        p = null === (n = cc.find("rightNode/spinDown", s)) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton),
        f = null === (i = cc.find("rightNode/spinUp", s)) || void 0 === i ? void 0 : i.getComponent(sp.Skeleton),
        d = null === (r = cc.find("rightNode/lblCombo", s)) || void 0 === r ? void 0 : r.getComponent(cc.Label);
      if (u && p && f && d) {
        this._currentComboNum = e.data.comboNum;
        d.string = this.formatComboString(e.data.comboNum);
        s.parent = a;
        var h = this.context.gameView.topRootNode,
          y = h.parent.convertToWorldSpaceAR(cc.v2(h.x, h.y - h.height / 2)),
          m = s.parent.convertToNodeSpaceAR(y),
          v = this.getComboPosition(m),
          g = d.node.width;
        p.node.position = cc.v3(g / 2, p.node.y);
        f.node.position = cc.v3(g / 2, f.node.y);
        var _ = g - 116;
        v.x -= 0.5 * _;
        s.position = v;
        cc.Tween.stopAllByTarget(d.node);
        d.node.scale = 3;
        d.node.opacity = 255;
        this.playComboAnimation(u, p, f, d, c, s);
        this.finish(EBehaviorEnum.Success);
      } else this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("UpdComboBhv_poolName")
  getPoolName() {
    return PoolName.EffectCombo;
  }
  @mj.traitEvent("UpdComboBhv_playAnim")
  playComboAnimation(e, t, o, n, i, r) {
    var a = this;
    GameUtils.playSpine(e, "in_combo", false, function () {});
    GameUtils.playSpine(t, "in_down", false, function () {});
    GameUtils.playSpine(o, "in_up", false, function () {});
    cc.tween(n.node).to(0.17, {
      scale: 0.7
    }).to(0.1, {
      scale: 1
    }).delay(0.37).to(0.17, {
      scale: 0.9,
      opacity: 0
    }).call(function () {
      a.checkAndFinish(i, r);
    }).start();
  }
  stopAndRecycleCurrentCombo() {
    var e, o, n, i;
    if (UpdateComboBehavior._currentComboNode && cc.isValid(UpdateComboBehavior._currentComboNode)) {
      var r = UpdateComboBehavior._currentComboNode;
      cc.Tween.stopAllByTarget(r);
      var l = r.children;
      try {
        for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
          var u = c.value;
          cc.Tween.stopAllByTarget(u);
          this.stopAllTweensRecursively(u);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          c && !c.done && (o = s.return) && o.call(s);
        } finally {
          if (e) throw e.error;
        }
      }
      var p = r.getComponentsInChildren(sp.Skeleton);
      try {
        for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
          var h = d.value;
          h && h.node && h.clearTracks();
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          d && !d.done && (i = f.return) && i.call(f);
        } finally {
          if (n) throw n.error;
        }
      }
      this.context.gameView.gameObjectPool.push(this.getPoolName(), r);
      UpdateComboBehavior._currentComboNode = null;
    }
  }
  stopAllTweensRecursively(e) {
    var t, o;
    cc.Tween.stopAllByTarget(e);
    try {
      for (var n = __values(e.children), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        this.stopAllTweensRecursively(r);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  checkAndFinish(e, o) {
    if (e === UpdateComboBehavior._comboAnimationId && UpdateComboBehavior._currentComboNode === o) {
      this.context.gameView.gameObjectPool.push(this.getPoolName(), o);
      UpdateComboBehavior._currentComboNode = null;
    }
  }
  @mj.traitEvent("UpdComboBhv_fmtStr")
  formatComboString(e) {
    return e.toString();
  }
  @mj.traitEvent("UpdComboBhv_getPos")
  getComboPosition(e) {
    return cc.v3(e.x - 56, e.y - 100);
  }
}
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import VibrateManager, { EVibrateStrength, EVibratePoint } from '../gamePlay/base/vibrate/VibrateManager';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
export class Tile2MagnetMergeBehavior extends GameBehaviorsBase {
  _timeout = 0;
  start(e) {
    var t, o;
    this._clearTileIds = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.clearTileIds;
    if (this._clearTileIds && 0 !== this._clearTileIds.length) {
      this._clearTileIds.length;
      var n = this.context.gameView,
        i = null === (o = null == n ? void 0 : n.slotBarView) || void 0 === o ? void 0 : o.node;
      if (i && cc.isValid(i)) {
        var r = this.getMagnetClearOffset();
        this.createItem(i, cc.v3(r.x, r.y, 0)) || this.finish(EBehaviorEnum.Success);
      } else this.finish(EBehaviorEnum.Fail);
    } else this.finish(EBehaviorEnum.Success);
  }
  createItem(e, t) {
    var o = this,
      n = this.getSpineCfg();
    if (!(n && n.url1 && n.url2 && n.bundleName)) {
      this.finish(EBehaviorEnum.Success);
      return null;
    }
    var i = e.getChildByName("magnetHoleNode");
    if (!i) {
      var r = e.getChildByName("nodeBgEffect");
      null == r || r.getSiblingIndex();
      (i = new cc.Node("magnetHoleNode")).parent = e;
      i.position = t;
    }
    var a = null,
      s = null,
      c = false,
      u = false;
    a = this.createSpineNode(i, "spine_hole", n.url1, n.bundleName, function () {
      (c = true) && u && o.playEnterAni(i, a, s);
    });
    s = this.createSpineNode(i, "spine_hole2", n.url2, n.bundleName, function () {
      u = true;
      c && u && o.playEnterAni(i, a, s);
    });
    return i;
  }
  createSpineNode(e, t, o, n, i) {
    var r = e.getChildByName(t);
    if (!r) {
      (r = new cc.Node()).parent = e;
      r.name = t;
    }
    var a = BaseSpine.refreshWithNode(r, o, n);
    a.setOnReadyCallback(i);
    return a;
  }
  playEnterAni(e, t, o) {
    var n = this;
    if (e && cc.isValid(e) && t && o) {
      t.setAnimation("init", -1);
      o.setAnimation("init", -1);
      e.setScale(0, 0.4);
      e.opacity = 255;
      cc.tween(e).to(0.067, {
        scaleX: 1.1,
        scaleY: 0.5
      }, {
        easing: cc.easing.cubicInOut
      }).to(0.133, {
        scaleX: 0.8,
        scaleY: 1.3
      }, {
        easing: cc.easing.cubicInOut
      }).to(0.2, {
        scaleX: 1,
        scaleY: 1
      }, {
        easing: cc.easing.cubicInOut
      }).call(function () {
        var i;
        n.playMergeAnimations(e, t, o, (null === (i = n._clearTileIds) || void 0 === i ? void 0 : i.length) || 0);
      }).start();
    } else this.finish(EBehaviorEnum.Success);
  }
  onMergeFinished(e, t, o) {
    this.finish(EBehaviorEnum.Success);
    if (e && cc.isValid(e) && t && o) {
      cc.tween(o.node).to(0.2, {
        opacity: 0
      }, {
        easing: cc.easing.cubicInOut
      }).start();
      cc.tween(e).to(0.14, {
        scale: 1.2
      }, {
        easing: cc.easing.cubicInOut
      }).to(0.24, {
        scale: 0
      }, {
        easing: cc.easing.cubicInOut
      }).call(function () {
        cc.isValid(e) && e.destroy();
      }).start();
    }
  }
  playMergeAnimations(e, t, o, n) {
    var i = this,
      r = 0,
      s = this.getMergeDelay(),
      c = this.context.gameView,
      f = null == c ? void 0 : c.nodeDragCardRoot,
      d = null == c ? void 0 : c.slotBarView,
      h = null == c ? void 0 : c.timerComponent;
    if (c && f && cc.isValid(f) && h) {
      var y = 0,
        m = function m() {
          var c, v, g, _, T;
          if (!(r >= n)) if (cc.isValid(e) && cc.isValid(f)) {
            var C = null === (T = i._clearTileIds) || void 0 === T ? void 0 : T[r];
            if (C && 0 !== C.length) {
              var b = e.convertToWorldSpaceAR(cc.Vec2.ZERO),
                E = [];
              try {
                for (var S = __values(C), I = S.next(); !I.done; I = S.next()) {
                  var w = I.value;
                  (M = i.context.getTileNodeMap().get(w)) && M.cardNode && cc.isValid(M.cardNode) && E.push(M);
                }
              } catch (e) {
                c = {
                  error: e
                };
              } finally {
                try {
                  I && !I.done && (v = S.return) && v.call(S);
                } finally {
                  if (c) throw c.error;
                }
              }
              if (0 !== E.length) {
                try {
                  for (var B = __values(E), x = B.next(); !x.done; x = B.next()) {
                    var M;
                    (M = x.value).onClear();
                    i.moveNodeToDragRoot(M, f);
                  }
                } catch (e) {
                  g = {
                    error: e
                  };
                } finally {
                  try {
                    x && !x.done && (_ = B.return) && _.call(B);
                  } finally {
                    if (g) throw g.error;
                  }
                }
                null == d || d.removeSlotBar(C);
                var O = 0,
                  D = function D() {
                    if (++O == 2 * E.length) {
                      i.context.removeTileNodeByTileIds(C);
                      VibrateManager.executeVibrate(EVibrateStrength.Multiple, EVibratePoint.Tile2MagnetMerge);
                      ++y === n && i.onMergeFinished(e, t, o);
                    }
                  };
                mj.audioManager.playEffect(EAudioID.MagnetMerge);
                E.forEach(function (e) {
                  var t = f.convertToNodeSpaceAR(b),
                    o = e;
                  i.playToHoleAnimation(e.cardNode, cc.v3(t.x, t.y, 0), D, o);
                  i.playToHoleAnimation(e.shadowCardNode, cc.v3(t.x, t.y, 0), D);
                });
                ++r < n && h.doOnce(s, m);
              } else ++r < n && h.doOnce(s, m);
            } else ++r < n && h.doOnce(s, m);
          } else i.finish(EBehaviorEnum.Success);
        };
      m();
    } else this.finish(EBehaviorEnum.Success);
  }
  playToHoleAnimation(e, t, o, n) {
    if (cc.isValid(e)) {
      n && "function" == typeof n.tile2SetLockDarken && n.tile2SetLockDarken(false, false);
      var i = cc.easing.cubicInOut,
        r = cc.tween().to(0.4, {
          scale: 0.6
        }, {
          easing: i
        }).to(0.3, {
          scale: 0.1
        }, {
          easing: i
        }),
        a = cc.tween().delay(0.4).to(0.3, {
          opacity: 0
        }, {
          easing: i
        }),
        l = cc.tween().to(0.5, {
          position: t
        }, {
          easing: i
        }).delay(0.1).call(o);
      cc.tween(e).parallel(r, a, l).start();
    } else null == o || o();
  }
  moveNodeToDragRoot(e, t) {
    if (e && t && cc.isValid(t) && cc.isValid(e.cardNode)) {
      var o = function o(e) {
          var o = e.convertToWorldSpaceAR(cc.v2(0, 0));
          return t.convertToNodeSpaceAR(o);
        },
        n = e.cardNode,
        i = e.shadowCardNode,
        r = o(n);
      n.parent = t;
      n.zIndex = 8000;
      n.position = cc.v3(r.x, r.y, 0);
      if (i && cc.isValid(i)) {
        var a = o(i);
        i.parent = t;
        i.position = cc.v3(a.x, a.y, 0);
        i.zIndex = 7000;
      }
    }
  }
  onAbort() {
    var e = this;
    if (this._clearTileIds && this._clearTileIds.length > 0) {
      var t = this.context.gameView,
        o = null == t ? void 0 : t.slotBarView;
      this._clearTileIds.forEach(function (t) {
        e.context.removeTileNodeByTileIds(t);
        null == o || o.removeSlotBar(t);
      });
    }
  }
  @mj.traitEvent("T2MagMrgBhv_spCfg")
  getSpineCfg() {
    return null;
  }
  @mj.traitEvent("T2MagMrgBhv_offset")
  getMagnetClearOffset() {
    return cc.v2(210, 0);
  }
  @mj.traitEvent("T2MagMrgBhv_delay")
  getMergeDelay() {
    return 0.3;
  }
}
import { EGameEvent } from '../simulator/constant/GameEvent';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import ShuffleUtils from '../UiUtils/ShuffleUtils';
import { GameBehaviorsBase } from './GameBehaviorsBase';
var f = function f() {
  this.gatherExpandTime = 0.2;
  this.gatherExpandDist = 10;
  this.gatherShrinkTime = 0.3;
  this.shakeRotations = [0, 5, -5, 5, 0];
  this.shakeTimes = [0, 0.07, 0.14, 0.21, 0.3];
  this.scaleStartTime = 0.21;
  this.scaleTime = 0.09;
  this.scaleValue = 0.8;
  this.scaleBackTime = 0.1;
  this.bottomLayerExpandTime = 0.3;
  this.bottomLayerExpandDist = 10;
  this.bottomLayerBackTime = 0.1;
  this.topLayerExpandTime = 0.4;
  this.topLayerExpandDist = 20;
  this.topLayerBackTime = 0.2;
  this.shadowFadeOutTime = 0.2;
  this.shadowFadeInTime = 0.3;
};
export class ShuffleBehavior extends GameBehaviorsBase {
  static calculateLayerParam(e, t, o, n) {
    return t <= 1 ? o : o + e / (t - 1) * (n - o);
  }
  static playSingleCardScaleAnimation(e, t) {
    cc.tween(e).delay(t.scaleStartTime).to(t.scaleTime, {
      scale: t.scaleValue
    }, {
      easing: "quadIn"
    }).to(t.scaleBackTime, {
      scale: 1
    }, {
      easing: "quadOut"
    }).start();
  }
  static scheduleStayEndCallback(e, t) {
    t && cc.tween({}).delay(e).call(t).start();
  }
  @mj.traitEvent("ShuffleBhv_playAud")
  playShuffleAudio() {
    mj.audioManager.playEffect(EAudioID.Refresh);
  }
  start() {
    var e,
      t,
      o,
      n,
      i = this;
    this.playShuffleAudio();
    var r = new f(),
      l = this.calculatePhaseTimings(r),
      c = l.phase1Time,
      u = l.phase2Time,
      p = l.stayEndTime,
      d = this.context.getTileNodeManager(),
      h = d.getTileNodes().filter(function (e) {
        return e.tileObject && e.tileObject.isValid;
      });
    try {
      for (var y = __values(h), m = y.next(); !m.done; m = y.next()) (T = m.value).stopAllAnimation();
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        m && !m.done && (t = y.return) && t.call(y);
      } finally {
        if (e) throw e.error;
      }
    }
    this.onShuffleStayStart(h);
    if (0 != h.length) {
      var v = this.getCenterPosition(h[0].cardNode.parent);
      try {
        for (var g = __values(h), _ = g.next(); !_.done; _ = g.next()) {
          var T = _.value;
          this.playSingleCardGatherAnimation(T, v, r);
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          _ && !_.done && (n = g.return) && n.call(g);
        } finally {
          if (o) throw o.error;
        }
      }
      cc.tween(d.root).delay(c).call(function () {
        var e, t;
        try {
          for (var o = __values(h), n = o.next(); !n.done; n = o.next()) {
            var l = n.value;
            i.playSingleCardShakeAnimation(l.cardNode, r);
            i.playSingleCardShakeAnimation(l.shadowCardNode, r);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            n && !n.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
      }).delay(p - c).call(function () {
        var e, t;
        d.rebuildChangeTypeTileNodes(h);
        var o = d.getTileNodes().filter(function (e) {
          return e.tileObject && e.tileObject.isValid;
        });
        try {
          for (var n = __values(o), r = n.next(); !r.done; r = n.next()) {
            var l = r.value;
            l.cardNode.position = v;
            l.shadowCardNode.position = v;
            l.shadowCardNode.opacity = 0;
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            r && !r.done && (t = n.return) && t.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        i.onShuffleStayEnd(o);
      }).delay(c + u - (p - c) - c).call(function () {
        i.playLayerAnimation(v, r);
      }).start();
    } else this.finish(EBehaviorEnum.Success);
  }
  playLayerAnimation(e, t) {
    for (var o, n, i = this, r = this.context.getTileNodeManager(), l = [], s = this.context.getTileMapObject().mapLayers(), c = s.length - 1; c >= 0; c--) {
      var u = {
        layerIndex: c,
        tileNodeObjects: []
      };
      try {
        for (var p = (o = void 0, __values(s[c].allCards)), f = p.next(); !f.done; f = p.next()) {
          var d = f.value,
            h = r.getTileNodeByTileId(d.id);
          d.isValid && h && u.tileNodeObjects.push(h);
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (n = p.return) && n.call(p);
        } finally {
          if (o) throw o.error;
        }
      }
      u.tileNodeObjects.length > 0 && l.push(u);
    }
    for (c = 0; c < l.length; c++) {
      u = l[c];
      for (var y = this.calculateLayerAnimationParams(c, l.length, t), m = y.expandTime, v = y.expandDist, g = y.backTime, _ = 0; _ < u.tileNodeObjects.length; _++) {
        h = u.tileNodeObjects[_];
        var T = c === l.length - 1 && _ === u.tileNodeObjects.length - 1;
        this.playSingleCardExpandAnimation(h, e, m, v, g, T, function () {
          i.onShuffleAnimationEnd();
        });
      }
    }
  }
  calculatePhaseTimings(e) {
    return {
      phase1Time: e.gatherExpandTime + e.gatherShrinkTime,
      phase2Time: e.shakeTimes[e.shakeTimes.length - 1],
      stayEndTime: e.gatherExpandTime + e.gatherShrinkTime + e.scaleStartTime
    };
  }
  getCenterPosition(e) {
    var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
    return cc.v3(t.x, t.y);
  }
  playSingleCardGatherAnimation(e, t, o) {
    var n = e.cardNode.position.clone().clone().subtract(t),
      i = n.mag();
    if (i > 0) {
      n.normalizeSelf();
      var r = t.add(n.mul(i + o.gatherExpandDist));
      cc.tween(e.cardNode).to(o.gatherExpandTime, {
        position: r
      }, {
        easing: "quadOut"
      }).to(o.gatherShrinkTime, {
        position: t
      }, {
        easing: "quadIn"
      }).start();
      cc.tween(e.shadowCardNode).to(o.gatherExpandTime, {
        position: r
      }, {
        easing: "quadOut"
      }).to(o.gatherShrinkTime, {
        position: t,
        opacity: 0
      }, {
        easing: "quadIn"
      }).start();
    } else {
      var a = o.gatherExpandTime + o.gatherShrinkTime;
      cc.tween(e.cardNode).delay(a).start();
      cc.tween(e.shadowCardNode).delay(o.gatherExpandTime).to(o.gatherShrinkTime, {
        opacity: 0
      }).start();
    }
  }
  playSingleCardShakeAnimation(e, t) {
    for (var o = cc.tween(e), n = 1; n < t.shakeTimes.length; n++) {
      var i = t.shakeTimes[n] - t.shakeTimes[n - 1];
      o.to(i, {
        angle: t.shakeRotations[n]
      }, {
        easing: "sineInOut"
      });
    }
    o.start();
  }
  calculateLayerAnimationParams(e, o, n) {
    return {
      expandTime: ShuffleBehavior.calculateLayerParam(e, o, n.topLayerExpandTime, n.bottomLayerExpandTime),
      expandDist: ShuffleBehavior.calculateLayerParam(e, o, n.topLayerExpandDist, n.bottomLayerExpandDist),
      backTime: ShuffleBehavior.calculateLayerParam(e, o, n.topLayerBackTime, n.bottomLayerBackTime)
    };
  }
  playSingleCardExpandAnimation(e, t, o, n, i, r, a) {
    if (e && e.tileObject) {
      var l = e.tileObject.getPosition();
      if (l) {
        var s = l.clone().subtract(t),
          c = s.mag();
        if (c > 0) {
          s.normalizeSelf();
          var u = t.add(s.mul(c + n));
          cc.tween(e.cardNode).to(o, {
            position: u
          }, {
            easing: "cubicOut"
          }).to(i, {
            position: l
          }, {
            easing: "backOut"
          }).start();
          cc.tween(e.shadowCardNode).to(o, {
            position: u,
            opacity: 255
          }, {
            easing: "cubicOut"
          }).to(i, {
            position: l
          }, {
            easing: "backOut"
          }).call(function () {
            r && (null == a || a());
          }).start();
        } else {
          cc.tween(e.cardNode).delay(o).to(i, {
            position: l
          }, {
            easing: "backOut"
          }).start();
          cc.tween(e.shadowCardNode).delay(o).to(i, {
            position: l,
            opacity: 255
          }, {
            easing: "backOut"
          }).call(function () {
            r && (null == a || a());
          }).start();
        }
      } else r && (null == a || a());
    } else r && (null == a || a());
  }
  @mj.traitEvent("ShuffleBhv_onStayBeg")
  onShuffleStayStart(e) {
    var t, o;
    this.context.gameView.setSwallowEventNodeActive(true);
    try {
      for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        r.cancelSelected();
        r.hidePropHint();
        r.stopAllAnimation();
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
    this.onShuffleStayStartPlay();
    ShuffleUtils.onShuffleStayStartPlay(this._context);
  }
  @mj.traitEvent("ShuffleBhv_startPlay")
  onShuffleStayStartPlay() {}
  @mj.traitEvent("ShuffleBhv_endPlay")
  onShuffleStayEndPlay() {
    ShuffleUtils.playRefreshAnimation(this._context);
    mj.EventManager.emit(EGameEvent.Behavior_ShuffleStayEnd, this);
  }
  @mj.traitEvent("ShuffleBhv_onStayEnd")
  onShuffleStayEnd(e) {
    var t, o;
    try {
      for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        r.refreshNode(r.info);
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
    this.onShuffleStayEndPlay();
    mj.EventManager.emit(EGameEvent.Behavior_ShuffleStayEnd, this);
  }
  @mj.traitEvent("ShuffleBhv_onAnimEnd")
  onShuffleAnimationEnd() {
    mj.EventManager.emit(EGameEvent.Behavior_ShuffleBehaviorFinish);
    this.context.gameView.setSwallowEventNodeActive(false);
    this.finish(EBehaviorEnum.Success);
  }
}
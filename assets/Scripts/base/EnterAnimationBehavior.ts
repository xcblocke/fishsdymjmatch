import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { EnterAnimationManager } from '../animation/manager/EnterAnimationManager';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import GameConstant from '../core/simulator/constant/GameConstant';
import { AnimationManager } from '../animation_old/manager/AnimationManager';
export class EnterAnimationBehavior extends GameBehaviorsBase {
  _isAborted = false;
  start(e) {
    this._isAborted = false;
    this._cardLayoutConfig = e.data.cardLayoutConfig;
    this.startPlayEnterAnimation();
  }
  @mj.traitEvent("EnterAniBhv_startPlay")
  startPlayEnterAnimation() {
    this.playEnterAnimation_old();
  }
  playEnterAnimation() {
    var e = this;
    mj.audioManager.playEffect(EAudioID.Birth);
    var t = EnterAnimationManager.getInstance(),
      o = {
        tileNodeMap: this.getFilteredTileNodeMap(),
        cardLayoutConfig: this._cardLayoutConfig,
        screenSize: cc.winSize
      };
    t.play({
      context: o,
      timerComponent: this.context.gameView.timerComponent,
      callbacks: {
        onStart: function () {
          e._isAborted || e.context.gameView.setSwallowEventNodeActive(true);
        },
        onComplete: function () {
          if (!e._isAborted) {
            e.context.gameView.setSwallowEventNodeActive(false);
            e.finish(EBehaviorEnum.Success);
          }
        }
      }
    });
  }
  getFilteredTileNodeMap() {
    var e,
      t,
      o,
      n = this.context.getTileNodeMap(),
      i = new Map();
    try {
      for (var r = __values(n), s = r.next(); !s.done; s = r.next()) {
        var c = __read(s.value, 2),
          u = c[0],
          p = c[1];
        (null === (o = p.isInSlotBar) || void 0 === o ? void 0 : o.call(p)) || i.set(u, p);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (t = r.return) && t.call(r);
      } finally {
        if (e) throw e.error;
      }
    }
    return i;
  }
  getHalfCardWidth() {
    return 0.5 * this._cardLayoutConfig.cardSize[0];
  }
  getMaxTileCountX() {
    return GameConstant.MaxTileCountX;
  }
  getMaxTileCountY() {
    return GameConstant.MaxTileCountY;
  }
  splitAllCardRects() {
    var e,
      t,
      o = [],
      n = this.context.getTileMapObject();
    if (!n || !n.mapLayers) return [];
    for (var i = 0; i < n.mapLayers().length; i++) {
      var r = new Map();
      o.push(r);
    }
    try {
      for (var s = __values(this.getFilteredTileNodeMap()), c = s.next(); !c.done; c = s.next()) {
        var u = __read(c.value, 2),
          p = (u[0], u[1]),
          f = p.info.tileObject,
          d = (i = f.layer, f.gridPosY),
          h = f.gridPosX;
        o[i] || (o[i] = new Map());
        (r = o[i]).has(d) || r.set(d, new Map());
        r.get(d).set(h, p.cardNode);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (t = s.return) && t.call(s);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  getAllCardShadows() {
    var e,
      t,
      o = [];
    try {
      for (var n = __values(this.getFilteredTileNodeMap()), i = n.next(); !i.done; i = n.next()) {
        var r = __read(i.value, 2),
          s = (r[0], r[1]);
        o.push(s.shadowNode.getComponent(cc.Sprite));
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  @mj.traitEvent("EnterAniBhv_playOld")
  playEnterAnimation_old() {
    var e = this;
    mj.audioManager.playEffect(EAudioID.Birth);
    var t = AnimationManager.getInstance();
    t.randomizeAnimationConfig();
    t.playFadeInAnimation({
      timerComponent: this.context.gameView.timerComponent,
      rects: this.splitAllCardRects(),
      shadows: this.getAllCardShadows(),
      halfCardWidth: this.getHalfCardWidth(),
      halfMaxColNum: this.getMaxTileCountX(),
      halfMaxRowNum: this.getMaxTileCountY(),
      startCallback: function () {
        e._isAborted || e.context.gameView.setSwallowEventNodeActive(true);
      },
      beforeShadowCallback: function () {},
      endCallback: function () {
        if (!e._isAborted) {
          e.context.gameView.setSwallowEventNodeActive(false);
          e.finish(EBehaviorEnum.Success);
        }
      }
    });
  }
  onAbort() {
    var e;
    this._isAborted = true;
    AnimationManager.getInstance().stopCurrentAnimation();
    EnterAnimationManager.getInstance().stop();
    null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
  }
}
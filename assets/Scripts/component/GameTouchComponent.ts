import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../GameInteraction/GameInteraction';
const {
  ccclass,
  property
} = cc._decorator;
@ccclass
export class GameTouchComponent extends cc.Component {
  _nodeCardRoot = null;
  _touchMap = new Map();
  _activeTouchId = null;
  _isEventsRegistered = false;
  _gameType = null;
  _touchStartPos = null;
  _isMoving = false;
  _touchTime = 0;
  _closeTouchMove = false;
  onLoad() {}
  getGameType() {
    return this._gameType;
  }
  registerTouchEvents(e) {
    this._gameType = e;
    if (!this._isEventsRegistered) {
      this._nodeCardRoot = this.node.getChildByName("nodeCardRoot");
      if (this._nodeCardRoot) {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this._gameType == MjGameType.Tile2Normal && cc.game.on("__ui_btn_touch_lock__", this._onBtnTouchLock, this);
        this._isEventsRegistered = true;
      }
    }
  }
  onDestroy() {
    cc.game.off("__ui_btn_touch_lock__", this._onBtnTouchLock, this);
  }
  unregisterTouchEvents() {
    if (this._isEventsRegistered) {
      this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      cc.game.off("__ui_btn_touch_lock__", this._onBtnTouchLock, this);
      this._touchMap.clear();
      this._activeTouchId = null;
      this._closeTouchMove = false;
      this._isEventsRegistered = false;
    }
  }
  convertToRootPos(e) {
    return this._nodeCardRoot.convertToNodeSpaceAR(e);
  }
  onTouchStart(e) {
    var t = e.getID(),
      o = e.getLocation(),
      n = cc.v2(o.x, o.y),
      i = this.convertToRootPos(o);
    this._touchMap.set(t, {
      startPos: n,
      lastPos: n,
      isMoving: false
    });
    if (null == this._activeTouchId) {
      this._activeTouchId = t;
      GameInteraction.input({
        inputType: EGameInputEnum.TouchStart,
        pos: i
      });
    }
  }
  onTouchEnd(e) {
    var t,
      o,
      n = e.getID(),
      i = e.getLocation(),
      r = this.convertToRootPos(i);
    if (this._activeTouchId === n) {
      GameInteraction.input({
        inputType: EGameInputEnum.TouchEnd,
        pos: r
      });
      this._touchMap.delete(n);
      this._activeTouchId = null;
      try {
        for (var c = __values(this._touchMap), p = c.next(); !p.done; p = c.next()) {
          var f = __read(p.value, 2),
            d = f[0],
            h = f[1];
          this._activeTouchId = d;
          var y = this.convertToRootPos(h.lastPos);
          GameInteraction.input({
            inputType: EGameInputEnum.TouchStart,
            pos: y,
            multiTouch: true
          });
          break;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          p && !p.done && (o = c.return) && o.call(c);
        } finally {
          if (t) throw t.error;
        }
      }
    } else this._touchMap.delete(n);
  }
  @mj.traitEvent("Gtc_isOpenTouchMove")
  isOpenTouchMove() {
    return true;
  }
  onTouchMove(e) {
    if (!this._closeTouchMove && this.isOpenTouchMove()) {
      var t = e.getID(),
        o = e.getLocation(),
        n = this._touchMap.get(t);
      if (n) {
        var i = cc.v2(o.x - n.startPos.x, o.y - n.startPos.y);
        n.isMoving || Math.sqrt(i.x * i.x + i.y * i.y) > 10 && (n.isMoving = true);
        var r = n.lastPos;
        n.lastPos = cc.v2(o.x, o.y);
        this._touchMap.set(t, n);
        if (this._activeTouchId === t && n.isMoving) {
          var a = this.convertToRootPos(o),
            l = cc.v2(o.x - r.x, o.y - r.y);
          GameInteraction.input({
            inputType: EGameInputEnum.TouchMove,
            pos: a,
            delta: l
          });
        }
      }
    } else this._closeTouchMove = true;
  }
  onTouchCancel(e) {
    var t,
      o,
      n = e.getID(),
      i = e.getLocation(),
      r = this.convertToRootPos(i);
    if (this._activeTouchId === n) {
      GameInteraction.input({
        inputType: EGameInputEnum.TouchCancel,
        pos: r
      });
      this._touchMap.delete(n);
      this._activeTouchId = null;
      try {
        for (var c = __values(this._touchMap), p = c.next(); !p.done; p = c.next()) {
          var f = __read(p.value, 2),
            d = f[0],
            h = f[1];
          this._activeTouchId = d;
          var y = this.convertToRootPos(h.lastPos);
          GameInteraction.input({
            inputType: EGameInputEnum.TouchStart,
            pos: y,
            multiTouch: true
          });
          break;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          p && !p.done && (o = c.return) && o.call(c);
        } finally {
          if (t) throw t.error;
        }
      }
    } else this._touchMap.delete(n);
  }
  _onBtnTouchLock() {
    if (null !== this._activeTouchId) {
      var e = this._touchMap.get(this._activeTouchId);
      if (e) {
        var t = this.convertToRootPos(e.lastPos);
        GameInteraction.input({
          inputType: EGameInputEnum.TouchCancel,
          pos: t
        });
      }
    }
    this._touchMap.clear();
    this._activeTouchId = null;
    this._closeTouchMove = false;
  }
}
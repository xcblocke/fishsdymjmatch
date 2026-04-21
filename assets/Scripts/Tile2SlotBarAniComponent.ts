import { AniStateManager } from './fsm/base/AniStateManager';
import { Tile2FlyToSlotAni } from './fsm/ani/Tile2FlyToSlotAni';
import { Tile2MoveBackAni } from './fsm/ani/Tile2MoveBackAni';
import { Tile2MoveInSlotAni } from './fsm/ani/Tile2MoveInSlotAni';
import { Tile2ClearFromSlotBarToPosAni } from './fsm/ani/Tile2ClearFromSlotBarToPosAni';
import { Tile2ClearFromBoardToPosAni } from './fsm/ani/Tile2ClearFromBoardToPosAni';
import { Tile2ClearFromBoardToSlotBarAni } from './fsm/ani/Tile2ClearFromBoardToSlotBarAni';
import { Tile2ClearWaitOnSlotBarAni } from './fsm/ani/Tile2ClearWaitOnSlotBarAni';
import { Tile2NoClearAddToSlotBarAni } from './fsm/ani/Tile2NoClearAddToSlotBarAni';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2SlotBarAniComponent extends TileNodeComponent {
  _queue = [];
  _isPlaying = false;
  onInitAnim() {
    var e = this._host;
    this._flyAni = new Tile2FlyToSlotAni(e.cardNode, e);
    this._moveInAni = new Tile2MoveInSlotAni(e.cardNode, e);
    this._moveBackAni = new Tile2MoveBackAni(e.cardNode, e);
    this._clearFromSlotBarToPosAni = new Tile2ClearFromSlotBarToPosAni(e.cardNode, e);
    this._clearFromBoardToPosAni = new Tile2ClearFromBoardToPosAni(e.cardNode, e);
    this._clearFromBoardToSlotBarAni = new Tile2ClearFromBoardToSlotBarAni(e.cardNode, e);
    this._clearWaitOnSlotBarAni = new Tile2ClearWaitOnSlotBarAni(e.cardNode, e);
    this._noClearAddToSlotBarAni = new Tile2NoClearAddToSlotBarAni(e.cardNode, e);
    this._aniMgr = new AniStateManager().add("fly", this._flyAni).add("moveInSlot", this._moveInAni).add("moveBack", this._moveBackAni).add("clearFromSlotBarToPos", this._clearFromSlotBarToPosAni).add("clearFromBoardToPos", this._clearFromBoardToPosAni).add("clearFromBoardToSlotBar", this._clearFromBoardToSlotBarAni).add("clearWaitOnSlotBar", this._clearWaitOnSlotBarAni).add("noClearAddToSlotBar", this._noClearAddToSlotBarAni);
    this._shadowAniMgr = new AniStateManager().add("fly", new Tile2FlyToSlotAni(e.shadowCardNode, e)).add("moveInSlot", new Tile2MoveInSlotAni(e.shadowCardNode, e)).add("moveBack", new Tile2MoveBackAni(e.shadowCardNode, e)).add("clearFromSlotBarToPos", new Tile2ClearFromSlotBarToPosAni(e.shadowCardNode, e)).add("clearFromBoardToPos", new Tile2ClearFromBoardToPosAni(e.shadowCardNode, e)).add("clearFromBoardToSlotBar", new Tile2ClearFromBoardToSlotBarAni(e.shadowCardNode, e)).add("clearWaitOnSlotBar", new Tile2ClearWaitOnSlotBarAni(e.shadowCardNode, e)).add("noClearAddToSlotBar", new Tile2NoClearAddToSlotBarAni(e.shadowCardNode, e));
  }
  onClear() {
    this.cancelAll();
  }
  onDestroy() {
    this.cancelAll();
  }
  flyToSlot(e, t, o = false) {
    var n = this;
    this._dispatch(function () {
      n._host;
      n._shadowAniMgr.play("fly");
      n._aniMgr.play("fly", e, function () {
        null == t || t();
        n._onTaskDone();
      });
    }, o, function () {
      null == t || t();
    });
  }
  moveInSlot(e, t, o = true) {
    var n = this;
    this._dispatch(function () {
      n._shadowAniMgr.play("moveInSlot", e);
      n._aniMgr.play("moveInSlot", e, function () {
        null == t || t();
        n._onTaskDone();
      });
    }, o, function () {
      null == t || t();
    });
  }
  moveBack(e, t = false) {
    var o = this;
    this._dispatch(function () {
      var t = o._host;
      o._reparent(t.shadowCardNode, o._host.dragRootNode);
      o._shadowAniMgr.play("moveBack", void 0, function () {
        o._reparent(t.shadowCardNode, t.shadowLayerNode);
      });
      o._reparent(t.cardNode, o._host.dragRootNode);
      o._aniMgr.play("moveBack", void 0, function () {
        o._reparent(t.cardNode, t.layerNode);
        null == e || e();
        o._onTaskDone();
      });
    }, t, function () {
      null == e || e();
    });
  }
  cancelAll() {
    var e,
      t,
      o = this._queue;
    this._queue = [];
    this._isPlaying = false;
    this._aniMgr.cancelAll();
    this._shadowAniMgr.cancelAll();
    try {
      for (var n = __values(o), i = n.next(); !i.done; i = n.next()) i.value.skip();
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
  }
  _dispatch(e, t, o = function () {}) {
    var n, i;
    if (t) {
      this._queue.push({
        run: e,
        skip: o
      });
      this._isPlaying || this._playNext();
    } else {
      var r = this._queue;
      this._queue = [];
      this._isPlaying = true;
      this._isPlaying = true;
      try {
        for (var l = __values(r), s = l.next(); !s.done; s = l.next()) s.value.skip();
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          s && !s.done && (i = l.return) && i.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      e();
    }
  }
  _playNext() {
    if (0 !== this._queue.length) {
      this._isPlaying = true;
      this._queue.shift().run();
    } else this._isPlaying = false;
  }
  _onTaskDone() {
    this._isPlaying && this._playNext();
  }
  tile2DragMove(e) {
    var t = this._host,
      o = t.dragRootNode;
    this._reparent(t.shadowCardNode, o);
    this._shadowAniMgr.cancel("fly");
    this._shadowAniMgr.cancel("moveBack");
    this._applyDelta(t.shadowCardNode, e);
    this._reparent(t.cardNode, o);
    this._aniMgr.cancel("fly");
    this._aniMgr.cancel("moveBack");
    this._applyDelta(t.cardNode, e);
  }
  beforeFail(e, t, o = true) {
    var n = this;
    this._dispatch(function () {
      if (cc.isValid(e)) {
        var o = n._host;
        n._reparent(o.shadowCardNode, e);
        n._reparent(o.cardNode, e);
        null == t || t();
        n._onTaskDone();
      } else {
        null == t || t();
        n._onTaskDone();
      }
    }, o, function () {
      null == t || t();
    });
  }
  clearFromSlotBarToPos(e, t, o = true) {
    var n = this;
    this._dispatch(function () {
      n._shadowAniMgr.play("clearFromSlotBarToPos", e);
      n._aniMgr.play("clearFromSlotBarToPos", e, function () {
        null == t || t();
        n._onTaskDone();
      });
    }, o, function () {
      null == t || t();
    });
  }
  clearFromBoardToPos(e, t, o = false) {
    var n = this;
    this._dispatch(function () {
      n._shadowAniMgr.play("clearFromBoardToPos", e);
      n._aniMgr.play("clearFromBoardToPos", e, function () {
        null == t || t();
        n._onTaskDone();
      });
    }, o, function () {
      null == t || t();
    });
  }
  clearFromBoardToSlotBar(e, t, o = false) {
    var n = this;
    this._dispatch(function () {
      n._shadowAniMgr.play("clearFromBoardToSlotBar", e);
      n._aniMgr.play("clearFromBoardToSlotBar", e, function () {
        null == t || t();
        n._onTaskDone();
      });
    }, o, function () {
      null == t || t();
    });
  }
  clearWaitOnSlotBar(e, t, o = true) {
    var n = this;
    this._dispatch(function () {
      n._shadowAniMgr.play("clearWaitOnSlotBar", e);
      n._aniMgr.play("clearWaitOnSlotBar", e, function () {
        null == t || t();
        n._onTaskDone();
      });
    }, o, function () {
      null == t || t();
    });
  }
  noClearAddToSlotBar(e, t, o = false) {
    var n = this;
    this._dispatch(function () {
      n._host.hidePropHint();
      n._shadowAniMgr.play("noClearAddToSlotBar", Object.assign(Object.assign({}, e), {
        isShadow: true
      }));
      n._aniMgr.play("noClearAddToSlotBar", e, function () {
        null == t || t();
        n._onTaskDone();
      });
    }, o, function () {
      null == t || t();
    });
  }
  _cardParent() {
    var e,
      t = this._host;
    return cc.isValid(null === (e = t.cardNode) || void 0 === e ? void 0 : e.parent) ? t.cardNode.parent : t.layerNode;
  }
  _shadowParent() {
    var e,
      t = this._host;
    return cc.isValid(null === (e = t.shadowCardNode) || void 0 === e ? void 0 : e.parent) ? t.shadowCardNode.parent : t.shadowLayerNode;
  }
  _applyDelta(e, t) {
    cc.isValid(e) && (e.position = new cc.Vec3(e.position.x + t.x, e.position.y + t.y, e.position.z));
  }
  _reparent(e, t) {
    if (e && t && e.parent !== t) {
      var o = e.convertToWorldSpaceAR(cc.v2(0, 0)),
        n = t.convertToNodeSpaceAR(o);
      e.parent = t;
      e.setPosition(n.x, n.y);
    }
  }
}
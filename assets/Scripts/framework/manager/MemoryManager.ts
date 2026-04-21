import ControllerManager from './ControllerManager';
export default class MemoryManager {
  _delayReleaseMap = {};
  _cacheIndex = 0;
  _isGarbageCollect = false;
  isLowMemory = null;
  static _manager = null;
  static _clearTimer = null;
  static _emergencyClearTimer = null;
  static _clearTime = 300000;
  static getInstance() {
    var t = this;
    if (!this._manager) {
      cc.sys.isNative && cc.sys.isMobile || (MemoryManager._clearTime = 300000);
      this._manager = new MemoryManager();
      this._clearTimer = setTimeout(function () {
        var o, n;
        clearTimeout(MemoryManager._emergencyClearTimer);
        MemoryManager._emergencyClearTimer = null;
        t._manager.didReceiveMemoryWarning(null === (n = (o = t._manager).isLowMemory) || void 0 === n ? void 0 : n.call(o));
      }, this._clearTime);
    }
    return this._manager;
  }
  cacheDelayReleaseRes(e, t = 1) {
    var o = e._uuid,
      n = this._delayReleaseMap[o];
    if (n && n[0] !== e) {
      n[0].decRef();
      n[0] = e;
    }
    if (n) {
      n[1] += t;
      n[2] = this._cacheIndex++;
      e.decRef();
    } else this._delayReleaseMap[o] = [e, t, this._cacheIndex++];
  }
  releaseDelayRes(e) {
    if (e) {
      for (var t in this._delayReleaseMap) (a = (n = this._delayReleaseMap[t])[0]).isValid && a.decRef();
      this._delayReleaseMap = {};
    } else {
      var o = [];
      for (var t in this._delayReleaseMap) {
        var n = this._delayReleaseMap[t];
        o.push(n);
      }
      o.sort(function (e, t) {
        return e[1] !== t[1] ? e[1] - t[1] : e[2] - t[2];
      });
      var i = o.length;
      i > 10 && (i = Math.floor(i / 2));
      for (var r = 0; r < i; r++) {
        var a = (n = o[r])[0];
        delete this._delayReleaseMap[a._uuid];
        a.isValid && a.decRef();
      }
    }
  }
  didReceiveMemoryWarning(t = false) {
    var o = this;
    ControllerManager.isDestroyed || ControllerManager.getInstance().destroyUnusedView();
    mj.EventManager.emit("removeUnusedRes");
    this.releaseDelayRes(t);
    this.releaseUnusedAssets();
    if (MemoryManager._clearTimer) {
      clearTimeout(MemoryManager._clearTimer);
      clearTimeout(MemoryManager._emergencyClearTimer);
      MemoryManager._emergencyClearTimer = null;
      MemoryManager._clearTimer = setTimeout(function () {
        var t, n;
        o.didReceiveMemoryWarning(null === (n = (t = MemoryManager.getInstance()).isLowMemory) || void 0 === n ? void 0 : n.call(t));
      }, MemoryManager._clearTime);
    }
  }
  tryReleaseInLowMemory() {
    var t,
      o = this;
    (null === (t = this.isLowMemory) || void 0 === t ? void 0 : t.call(this)) && (MemoryManager._emergencyClearTimer || (MemoryManager._emergencyClearTimer = setTimeout(function () {
      MemoryManager._emergencyClearTimer = setTimeout(function () {
        o.didReceiveMemoryWarning(false);
        MemoryManager._emergencyClearTimer = null;
      }, 500);
    }, 500)));
  }
  releaseUnusedAssets() {
    var e = this;
    if (!this._isGarbageCollect) {
      this._isGarbageCollect = true;
      setTimeout(function () {
        e._isGarbageCollect = false;
      }, 5000);
    }
  }
}
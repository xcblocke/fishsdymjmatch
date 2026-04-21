import Model from '../data/Model';
import { resManager } from '../manager/ResManager';
@mj.class("Trait")
export default class Trait extends Model {
  _eventEnabled = false;
  _pendingEvents = null;
  _initEventTriggered = false;
  static traitKey = "";
  static nextTimeOut = 5;
  get traitData() {
    return this._traitData;
  }
  __init(e) {
    var t = this;
    if (!this._traitData) {
      this._traitData = e;
      this._tm = cc.js.getClassByName("TraitManager").getInstance();
      var o = function o() {
        t._traitData.onlyDownload || t.onLoad();
      };
      if (this._traitData.bundle) {
        this.prepare(function (e, t) {
          if (t) {
            var n = "Failed to load bundle " + e + ": " + t;
            -3 != t.cause && console.error(n);
          } else o();
        });
      } else {
        o();
      }
    }
  }
  prepare(e) {
    if (resManager.isRemoteBundle(this._traitData.bundle)) {
      this._tm.preloadAllRes(this._traitData.bundle, e);
    } else {
      e();
    }
  }
  onLoad() {
    this.eventEnabled = true;
    this.initEvent();
  }
  initEvent() {
    var e = this._traitData.events;
    if (e && 0 !== e.length) {
      var t = e.filter(function (e) {
        return e.isPre;
      });
      if (1 === t.length) {
        this._pendingEvents = e.filter(function (e) {
          return !e.isPre;
        });
        this._initEventTriggered = false;
        this.registerEvent(t);
      } else this.registerEvent(e);
    }
  }
  _registerPendingEvents() {
    if (!this._initEventTriggered && this._pendingEvents && 0 !== this._pendingEvents.length) {
      this._initEventTriggered = true;
      this.registerEvent(this._pendingEvents);
      this._pendingEvents = null;
    }
  }
  registerEvent(e) {
    var t, o;
    new Set();
    try {
      for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
        var r = i.value,
          l = r.type,
          s = r.event,
          c = r.priority,
          u = r.isPre,
          p = this["on" + s];
        if (c) {
          c += c < 0 ? -1000 : 1000;
        } else {
          c = this._tm.getTraitIndex(this._traitData);
        }
        l = l || TraitEventPositionType.befor;
        if (p) {
          u && (p = this._wrapPreEventCallback(p));
          this._tm.registerEvent(s, c, p, l, this);
        } else if (this.onDefCallback) {
          var f = this.onDefCallback;
          u && (f = this._wrapPreEventCallback(f));
          this._tm.registerEvent(s, c, f, l, this);
        }
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
  _wrapPreEventCallback(e) {
    var t = this;
    return function (o, n) {
      t._registerPendingEvents();
      e.call(t, o, n);
    };
  }
}
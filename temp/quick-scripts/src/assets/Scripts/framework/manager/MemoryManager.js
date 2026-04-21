"use strict";
cc._RF.push(module, '23cce0aOQ1Le7xQDIAoZ9vw', 'MemoryManager');
// Scripts/framework/manager/MemoryManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("./ControllerManager");
var MemoryManager = /** @class */ (function () {
    function MemoryManager() {
        this._delayReleaseMap = {};
        this._cacheIndex = 0;
        this._isGarbageCollect = false;
        this.isLowMemory = null;
    }
    MemoryManager.getInstance = function () {
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
    };
    MemoryManager.prototype.cacheDelayReleaseRes = function (e, t) {
        if (t === void 0) { t = 1; }
        var o = e._uuid, n = this._delayReleaseMap[o];
        if (n && n[0] !== e) {
            n[0].decRef();
            n[0] = e;
        }
        if (n) {
            n[1] += t;
            n[2] = this._cacheIndex++;
            e.decRef();
        }
        else
            this._delayReleaseMap[o] = [e, t, this._cacheIndex++];
    };
    MemoryManager.prototype.releaseDelayRes = function (e) {
        if (e) {
            for (var t in this._delayReleaseMap)
                (a = (n = this._delayReleaseMap[t])[0]).isValid && a.decRef();
            this._delayReleaseMap = {};
        }
        else {
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
    };
    MemoryManager.prototype.didReceiveMemoryWarning = function (t) {
        if (t === void 0) { t = false; }
        var o = this;
        ControllerManager_1.default.isDestroyed || ControllerManager_1.default.getInstance().destroyUnusedView();
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
    };
    MemoryManager.prototype.tryReleaseInLowMemory = function () {
        var t, o = this;
        (null === (t = this.isLowMemory) || void 0 === t ? void 0 : t.call(this)) && (MemoryManager._emergencyClearTimer || (MemoryManager._emergencyClearTimer = setTimeout(function () {
            MemoryManager._emergencyClearTimer = setTimeout(function () {
                o.didReceiveMemoryWarning(false);
                MemoryManager._emergencyClearTimer = null;
            }, 500);
        }, 500)));
    };
    MemoryManager.prototype.releaseUnusedAssets = function () {
        var e = this;
        if (!this._isGarbageCollect) {
            this._isGarbageCollect = true;
            setTimeout(function () {
                e._isGarbageCollect = false;
            }, 5000);
        }
    };
    MemoryManager._manager = null;
    MemoryManager._clearTimer = null;
    MemoryManager._emergencyClearTimer = null;
    MemoryManager._clearTime = 300000;
    return MemoryManager;
}());
exports.default = MemoryManager;

cc._RF.pop();
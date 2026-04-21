"use strict";
cc._RF.push(module, '34588v41gBJAoUsbaeBwOSs', 'JsonManager');
// Scripts/JsonManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var JsonManager = /** @class */ (function () {
    function JsonManager() {
        this.dataCache = new Map();
        this.loadingPromises = new Map();
    }
    JsonManager_1 = JsonManager;
    JsonManager.getInstance = function () {
        this.instance || (this.instance = new JsonManager_1());
        return this.instance;
    };
    JsonManager.prototype.clear = function () {
        this.dataCache.clear();
        this.loadingPromises.clear();
    };
    JsonManager.prototype.getCacheData = function (e) {
        return this.dataCache.get(e);
    };
    JsonManager.prototype.setCacheData = function (e, t) {
        this.dataCache.set(e, t);
    };
    JsonManager.prototype.clearCacheData = function (e) {
        this.dataCache.delete(e);
    };
    JsonManager.prototype.loadJson = function (e, t, o) {
        if (o === void 0) { o = -1; }
        var n = this;
        return new Promise(function (i) {
            var r = t + ":" + e, a = n.getCacheData(r);
            if (a) {
                var l = n.cloneData(a);
                return i(l);
            }
            var s = n.loadRawData(r, e, t);
            (s = n.raceTimeout(s, o, e, t)).then(function (e) {
                i(e ? n.cloneData(e) : null);
            }).catch(function () {
                i(null);
            });
        });
    };
    JsonManager.prototype.loadRawData = function (e, t, o) {
        var n = this, r = this.loadingPromises.get(e);
        if (r)
            return r;
        var a = ResManager_1.resManager.loadRes(t, cc.JsonAsset, o).then(function (t) {
            if (!(t && t instanceof cc.JsonAsset))
                return null;
            var o = JSON.parse(JSON.stringify(t.json));
            n.getCacheData(e) || n.setCacheData(e, o);
            t.decRef();
            return o;
        }).catch(function () {
            return null;
        }).then(function (t) {
            n.loadingPromises.delete(e);
            return t;
        });
        this.loadingPromises.set(e, a);
        return a;
    };
    JsonManager.prototype.raceTimeout = function (e, t) {
        return new Promise(function (o) {
            var n = false, i = -1;
            t > 0 && (i = setTimeout(function () {
                if (!n) {
                    n = true;
                    o(null);
                }
            }, t));
            e.then(function (e) {
                if (!n) {
                    n = true;
                    t > 0 && clearTimeout(i);
                    o(e);
                }
            });
        });
    };
    JsonManager.prototype.cloneData = function (e) {
        try {
            return JSON.parse(JSON.stringify(e));
        }
        catch (e) {
            return null;
        }
    };
    var JsonManager_1;
    JsonManager.instance = null;
    JsonManager = JsonManager_1 = __decorate([
        mj.class("JsonManager")
    ], JsonManager);
    return JsonManager;
}());
exports.default = JsonManager;

cc._RF.pop();
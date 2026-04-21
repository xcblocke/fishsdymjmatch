"use strict";
cc._RF.push(module, 'f498esgC7VM9Jw+U8DFR3Z5', 'ClassicLevelRepository');
// Scripts/core/extractClassic/ClassicLevelRepository.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicLevelRepository = void 0;
var ResManager_1 = require("../../framework/manager/ResManager");
var ClassicLevelRepository = /** @class */ (function () {
    function ClassicLevelRepository() {
        this._initialLevels = [];
        this._loopLevels = [];
        this._loopLevelsByLayer = new Map();
        this._initialized = false;
        this._initPromise = null;
        this._lastInitialIndex = null;
    }
    ClassicLevelRepository_1 = ClassicLevelRepository;
    ClassicLevelRepository.getInstance = function () {
        ClassicLevelRepository_1._instance || (ClassicLevelRepository_1._instance = new ClassicLevelRepository_1());
        return ClassicLevelRepository_1._instance;
    };
    ClassicLevelRepository.prototype.init = function () {
        var e = this;
        if (this._initialized)
            return Promise.resolve();
        if (this._initPromise)
            return this._initPromise;
        this._initPromise = this._loadAllLevels();
        return this._initPromise.then(function () {
            e._initPromise = null;
        });
    };
    ClassicLevelRepository.prototype.getLoopPath = function () {
        return "config/boards/endless_classic/loop";
    };
    ClassicLevelRepository.prototype.getInitialPath = function () {
        return "config/boards/endless_classic/initial";
    };
    ClassicLevelRepository.prototype.getLibName = function (e) {
        var t;
        return (null === (t = e.split("/").pop()) || void 0 === t ? void 0 : t.split(".")[0]) || "";
    };
    ClassicLevelRepository.prototype._loadAllLevels = function () {
        var e = this;
        Date.now();
        return Promise.all([this._loadLevels(this.getInitialPath(), "initial"), this._loadLevels(this.getLoopPath(), "loop")]).then(function (t) {
            var o = __read(t, 2), n = o[0], r = o[1];
            e._initialLevels = n;
            e._loopLevels = r;
            e._buildLayerCache();
            e._initialized = true;
            Date.now();
        }).catch(function (e) {
            console.error("【无尽关卡-仓库】加载关卡数据失败:", e);
            throw e;
        });
    };
    ClassicLevelRepository.prototype._buildLayerCache = function () {
        var e, t, o;
        this._loopLevelsByLayer.clear();
        try {
            for (var n = __values(this._loopLevels), i = n.next(); !i.done; i = n.next()) {
                var a = i.value, l = null !== (o = a.Layer) && void 0 !== o ? o : 0;
                this._loopLevelsByLayer.has(l) || this._loopLevelsByLayer.set(l, []);
                this._loopLevelsByLayer.get(l).push(a);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    ClassicLevelRepository.prototype._getLayerDistributionStr = function () {
        var e, t, o = [], n = Array.from(this._loopLevelsByLayer.keys()).sort(function (e, t) {
            return e - t;
        });
        try {
            for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                o.push("Layer" + l + "=" + this._loopLevelsByLayer.get(l).length);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o.join(", ");
    };
    ClassicLevelRepository.prototype._loadLevels = function (e) {
        return ResManager_1.resManager.loadRes(e, cc.JsonAsset, "mainRes").then(function (e) {
            return (Array.isArray(e) ? e[0] : e).json;
        });
    };
    ClassicLevelRepository.prototype.getAllInitialLevels = function () {
        return this._initialLevels;
    };
    ClassicLevelRepository.prototype.getInitialLevelCount = function () {
        return this._initialLevels.length;
    };
    ClassicLevelRepository.prototype.getRandomInitialLevel = function () {
        if (0 === this._initialLevels.length)
            return null;
        if (1 === this._initialLevels.length)
            return this._initialLevels[0];
        var e, t = 0;
        do {
            var o = Math.floor(Math.random() * this._initialLevels.length);
            e = this._initialLevels[o];
            t++;
        } while (e.Index === this._lastInitialIndex && t < 10);
        this._lastInitialIndex = e.Index;
        return e;
    };
    ClassicLevelRepository.prototype.getAllLoopLevels = function () {
        return this._loopLevels;
    };
    ClassicLevelRepository.prototype.getRandomLoopLevel = function () {
        if (0 === this._loopLevels.length)
            return null;
        var e = Math.floor(Math.random() * this._loopLevels.length);
        return this._loopLevels[e];
    };
    ClassicLevelRepository.prototype.getRandomLoopLevelByLayers = function (e) {
        var t, o;
        if (0 === e.length)
            return this.getRandomLoopLevel();
        var n = [];
        try {
            for (var i = __values(e), l = i.next(); !l.done; l = i.next()) {
                var s = l.value, c = this._loopLevelsByLayer.get(s);
                c && n.push.apply(n, __spreadArrays(c));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0 === n.length ? this.getRandomLoopLevel() : n[Math.floor(Math.random() * n.length)];
    };
    var ClassicLevelRepository_1;
    ClassicLevelRepository = ClassicLevelRepository_1 = __decorate([
        mj.class("ClassicLevelRepository")
    ], ClassicLevelRepository);
    return ClassicLevelRepository;
}());
exports.ClassicLevelRepository = ClassicLevelRepository;

cc._RF.pop();
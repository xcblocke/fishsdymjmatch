"use strict";
cc._RF.push(module, 'f32dcWnbWlIO6m5kbjANPma', 'ResManager');
// Scripts/framework/manager/ResManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.resManager = void 0;
var delayFrame = function (e, t) {
    var o = 0, n = function n() {
        if (++o >= t) {
            e();
        }
        else {
            setTimeout(n, 0);
        }
    };
    setTimeout(n, 0);
};
var ResManager = /** @class */ (function () {
    function ResManager() {
        this.defaultBundleName = "mainRes";
        this.preloadedBundles = {};
    }
    ResManager.prototype.preDownLoadByDir = function (e, t, o, n) {
        var i = this;
        if (this.preloadedBundles[n]) {
            null == o || o(n, null);
        }
        else {
            this.loadBundle(n).then(function (r) {
                r.preloadDir(e, cc.Asset, t || function () {
                }, function (e) {
                    if (e) {
                        var t = "[ResManager] preDownLoadByDir preloadDir failed " + n + ": " + e;
                        -3 != e.cause && console.error(t);
                    }
                    else
                        i.preloadedBundles[n] = r;
                    null == o || o(n, e);
                });
            }).catch(function (e) {
                var t = "[ResManager] preDownLoadByDir loadBundle failed " + n + ": " + e;
                -3 != e.cause && console.error(t);
                null == o || o(n, e);
            });
        }
    };
    ResManager.prototype.isBundlePreLoaded = function (e) {
        return null != this.preloadedBundles[e];
    };
    ResManager.prototype.isRemoteBundle = function (e) {
        var t;
        return !(null === (t = cc.assetManager.remoteBundles) || void 0 === t || !t[e]);
    };
    ResManager.prototype.getRes = function (e, t) {
        if (t === void 0) { t = this.defaultBundleName; }
        var o = this.getBundle(t);
        if (o && o.getInfoWithPath(e))
            return o.get(e);
    };
    ResManager.prototype.loadRes = function (e, t, o, n) {
        if (t === void 0) { t = cc.Asset; }
        if (o === void 0) { o = this.defaultBundleName; }
        if (n === void 0) { n = false; }
        return this.loadBundle(o).then(function (o) {
            return new Promise(function (i, r) {
                var a = function a(t, o) {
                    if (t)
                        return r(t);
                    Array.isArray(e) && !Array.isArray(o) && (o = [o]);
                    n && (Array.isArray(o) ? o : [o]).forEach(function (e) {
                        e.addRef();
                    });
                    return i(o);
                };
                if (!Array.isArray(e)) {
                    var l = o.get(e, t);
                    if (l) {
                        a(null, l);
                        return;
                    }
                }
                o.load(e, t, a);
            });
        }).catch(function (e) {
            throw e;
        });
    };
    ResManager.prototype.getBundle = function (e) {
        if (e === void 0) { e = this.defaultBundleName; }
        return cc.assetManager.getBundle(e);
    };
    ResManager.prototype.loadBundle = function (e) {
        var t = this, o = this.getBundle(e);
        return o ? Promise.resolve(o) : new Promise(function (o, n) {
            var i = function i(r) {
                if (r === void 0) { r = false; }
                cc.assetManager.loadBundle(e, {}, function (a, s) {
                    if (a) {
                        t.isRemoteBundle(e) && t.clearRemoteBundleCache(e);
                        if (r) {
                            delayFrame(function () {
                                i();
                            }, 2);
                            return;
                        }
                        return n(a);
                    }
                    return o(s);
                });
            };
            i(true);
        });
    };
    ResManager.prototype.clearRemoteBundleCache = function (e) {
        try {
            if (!cc.sys.isNative)
                return;
            var t = cc.assetManager.cacheManager;
            jsb.fileUtils.removeDirectory(t.cacheDir + "/" + e);
            var o = t.cachedFiles;
            if (o) {
                var n = [];
                o.forEach(function (t, o) {
                    t && t.bundle === e && n.push(o);
                });
                n.length > 0 && n.forEach(function (e) {
                    t.removeCache(e);
                });
            }
        }
        catch (e) {
        }
    };
    ResManager.prototype.findAssetType = function (e) {
        var t, o;
        try {
            for (var n = __values(["cc", "sp", "dragonBones"]), i = n.next(); !i.done; i = n.next()) {
                var a = i.value, l = globalThis[a];
                if (l && l[e])
                    return l[e];
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return null;
    };
    ResManager.prototype.parseResUrls = function (e, t) {
        return (Array.isArray(e) ? e : [e]).map(function (e) {
            var o = e.indexOf(":");
            return o > 0 ? {
                url: e.substring(o + 1),
                bundleName: e.substring(0, o)
            } : {
                url: e,
                bundleName: t
            };
        });
    };
    ResManager.prototype.groupResMapByBundle = function (e, t) {
        var o, n, i, l, s = {};
        try {
            for (var c = __values(Object.entries(e)), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = p[0], d = p[1], h = this.parseResUrls(d, t);
                try {
                    for (var y = (i = void 0, __values(h)), m = y.next(); !m.done; m = y.next()) {
                        var v = m.value;
                        s[v.bundleName] || (s[v.bundleName] = {});
                        s[v.bundleName][f] || (s[v.bundleName][f] = []);
                        s[v.bundleName][f].push(v.url);
                    }
                }
                catch (e) {
                    i = {
                        error: e
                    };
                }
                finally {
                    try {
                        m && !m.done && (l = y.return) && l.call(y);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return s;
    };
    ResManager.prototype.loadResByTypeMap = function (e, t) {
        if (t === void 0) { t = this.defaultBundleName; }
        return __awaiter(this, void 0, void 0, function () {
            var o, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this;
                        o = Object.entries(e).map(function (e) {
                            var e, o, n, r_local;
                            return __awaiter(this, void 0, void 0, function () {
                                var __async_this, o, l, s, __error_1_0_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            __async_this = r;
                                            o = __read(e, 2), l = o[0], s = o[1];
                                            e = __async_this.findAssetType(l);
                                            assert(e, "在已知命名空间内未找到资源类型: " + l);
                                            o = Array.isArray(s) ? s : [s];
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, __async_this.loadRes(o, e, t, true)];
                                        case 2:
                                            n = _a.sent();
                                            return [2 /*return*/, Array.isArray(n) ? n : [n]];
                                        case 3:
                                            __error_1_0_1 = _a.sent();
                                            r_local = __error_1_0_1;
                                            console.error("[ResManager] 加载资源失败 [" + l + "]:", o, r_local);
                                            throw r_local;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        return [4 /*yield*/, Promise.all(o)];
                    case 1: return [2 /*return*/, (_a.sent()).reduce(function (e, t) {
                            return e.concat(t);
                        }, [])];
                }
            });
        });
    };
    ResManager.prototype.loadResByMultiBundleTypeMap = function (e, t) {
        if (t === void 0) { t = this.defaultBundleName; }
        return __awaiter(this, void 0, void 0, function () {
            var o, r, s, c, u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        u = this;
                        o = this.groupResMapByBundle(e, t);
                        r = Object.entries(o).map(function (e) {
                            return __awaiter(this, void 0, void 0, function () {
                                var __async_this, t, o, r;
                                return __generator(this, function (_a) {
                                    __async_this = u;
                                    t = __read(e, 2), o = t[0], r = t[1];
                                    return [2 /*return*/, __async_this.loadResByTypeMap(r, o)];
                                });
                            });
                        });
                        return [4 /*yield*/, Promise.all(r)];
                    case 1:
                        s = _a.sent();
                        c = s.reduce(function (e, t) {
                            return e.concat(t);
                        }, []);
                        delayFrame(function () {
                            c.forEach(function (e) {
                                e.decRef();
                            });
                        }, 2);
                        return [2 /*return*/, c];
                }
            });
        });
    };
    ResManager.prototype.loadRemoteLevelTiles = function (e, t, o) {
        var n = (cc.assetManager.downloader.remoteServerAddress || "http://mbhpacker2.youxi123.com:6899/cdn/update/mahjong_android_test/remoteRes/1/") + "levelTile2/", i = Array.isArray(e), r = (i ? e : [e]).map(function (e) {
            return {
                url: n + e,
                ext: ".json"
            };
        }), a = function a(o, n) {
            if (o) {
                console.error("[ResManager] 下载远端题库失败:", o);
                t(o, null);
            }
            else
                t(null, i ? e.length > 1 ? n : [n] : n);
        };
        if (o) {
            cc.assetManager.loadAny(r, {}, function (e, t) {
                return o(e, t);
            }, a);
        }
        else {
            cc.assetManager.loadAny(r, {}, a);
        }
    };
    ResManager.baseBundleName = "mainRes";
    return ResManager;
}());
exports.default = ResManager;
exports.resManager = new ResManager();

cc._RF.pop();
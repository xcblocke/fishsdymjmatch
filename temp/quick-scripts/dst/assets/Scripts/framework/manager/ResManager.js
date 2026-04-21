
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/manager/ResManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO0lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ1YsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixDQUFDLEVBQUUsQ0FBQztTQUNQO2FBQU07WUFDSCxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQyxDQUFDO0lBQ04sVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRjtJQUFBO1FBQ0ksc0JBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQzlCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQTBRMUIsQ0FBQztJQXZRRyxxQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7Z0JBQy9CLENBQUMsRUFBRSxVQUFVLENBQUM7b0JBQ1YsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsSUFBSSxDQUFDLEdBQUcsa0RBQWtELEdBQUcsQ0FBQyxHQUFHLElBQUksR0FB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QzthQUNkOztnQkFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLEVBQUU7WUFDSCxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ0gsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUF4UU0seUJBQWMsR0FBRyxTQUFTLENBQUM7SUF5UXRDLGlCQUFDO0NBNVFELEFBNFFDLElBQUE7a0JBNVFvQixVQUFVO0FBNlFwQixRQUFBLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlbGF5RnJhbWUgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgIHZhciBvID0gMCxcbiAgICAgICAgbiA9IGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgICAgICBpZiAoKytvID49IHQpIHtcbiAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobiwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgc2V0VGltZW91dChuLCAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc01hbmFnZXIge1xuICAgIGRlZmF1bHRCdW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gICAgcHJlbG9hZGVkQnVuZGxlcyA9IHt9O1xuICAgIHN0YXRpYyBiYXNlQnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuXG4gICAgcHJlRG93bkxvYWRCeURpcihlLCB0LCBvLCBuKSB7XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZGVkQnVuZGxlc1tuXSkge1xuICAgICAgICAgICAgbnVsbCA9PSBvIHx8IG8obiwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRCdW5kbGUobikudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHIucHJlbG9hZERpcihlLCBjYy5Bc3NldCwgdCB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gXCJbUmVzTWFuYWdlcl0gcHJlRG93bkxvYWRCeURpciBwcmVsb2FkRGlyIGZhaWxlZCBcIiArIG4gKyBcIjogXCIgKyBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLTMgIT0gZS5jYXVzZSAmJiBjb25zb2xlLmVycm9yKHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaS5wcmVsb2FkZWRCdW5kbGVzW25dID0gcjtcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSBvIHx8IG8obiwgZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gXCJbUmVzTWFuYWdlcl0gcHJlRG93bkxvYWRCeURpciBsb2FkQnVuZGxlIGZhaWxlZCBcIiArIG4gKyBcIjogXCIgKyBlO1xuICAgICAgICAgICAgICAgIC0zICE9IGUuY2F1c2UgJiYgY29uc29sZS5lcnJvcih0KTtcbiAgICAgICAgICAgICAgICBudWxsID09IG8gfHwgbyhuLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNCdW5kbGVQcmVMb2FkZWQoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCAhPSB0aGlzLnByZWxvYWRlZEJ1bmRsZXNbZV07XG4gICAgfVxuXG4gICAgaXNSZW1vdGVCdW5kbGUoZSkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgcmV0dXJuICEobnVsbCA9PT0gKHQgPSBjYy5hc3NldE1hbmFnZXIucmVtb3RlQnVuZGxlcykgfHwgdm9pZCAwID09PSB0IHx8ICF0W2VdKTtcbiAgICB9XG5cbiAgICBnZXRSZXMoZSwgdCA9IHRoaXMuZGVmYXVsdEJ1bmRsZU5hbWUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmdldEJ1bmRsZSh0KTtcbiAgICAgICAgaWYgKG8gJiYgby5nZXRJbmZvV2l0aFBhdGgoZSkpIHJldHVybiBvLmdldChlKTtcbiAgICB9XG5cbiAgICBsb2FkUmVzKGUsIHQgPSBjYy5Bc3NldCwgbyA9IHRoaXMuZGVmYXVsdEJ1bmRsZU5hbWUsIG4gPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQnVuZGxlKG8pLnRoZW4oZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSwgcikge1xuICAgICAgICAgICAgICAgIHZhciBhID0gZnVuY3Rpb24gYSh0LCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0KSByZXR1cm4gcih0KTtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShlKSAmJiAhQXJyYXkuaXNBcnJheShvKSAmJiAobyA9IFtvXSk7XG4gICAgICAgICAgICAgICAgICAgIG4gJiYgKEFycmF5LmlzQXJyYXkobykgPyBvIDogW29dKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmFkZFJlZigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkobyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBvLmdldChlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEobnVsbCwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgby5sb2FkKGUsIHQsIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRCdW5kbGUoZSA9IHRoaXMuZGVmYXVsdEJ1bmRsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoZSk7XG4gICAgfVxuXG4gICAgbG9hZEJ1bmRsZShlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcyxcbiAgICAgICAgICAgIG8gPSB0aGlzLmdldEJ1bmRsZShlKTtcbiAgICAgICAgcmV0dXJuIG8gPyBQcm9taXNlLnJlc29sdmUobykgOiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobywgbikge1xuICAgICAgICAgICAgdmFyIGkgPSBmdW5jdGlvbiBpKHIgPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGUsIHt9LCBmdW5jdGlvbiAoYSwgcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5pc1JlbW90ZUJ1bmRsZShlKSAmJiB0LmNsZWFyUmVtb3RlQnVuZGxlQ2FjaGUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4oYSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8ocyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJSZW1vdGVCdW5kbGVDYWNoZShlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHQgPSBjYy5hc3NldE1hbmFnZXIuY2FjaGVNYW5hZ2VyO1xuICAgICAgICAgICAganNiLmZpbGVVdGlscy5yZW1vdmVEaXJlY3RvcnkodC5jYWNoZURpciArIFwiL1wiICsgZSk7XG4gICAgICAgICAgICB2YXIgbyA9IHQuY2FjaGVkRmlsZXM7XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gW107XG4gICAgICAgICAgICAgICAgby5mb3JFYWNoKGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgJiYgdC5idW5kbGUgPT09IGUgJiYgbi5wdXNoKG8pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG4ubGVuZ3RoID4gMCAmJiBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVDYWNoZShlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEFzc2V0VHlwZShlKSB7XG4gICAgICAgIHZhciB0LCBvO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKFtcImNjXCIsIFwic3BcIiwgXCJkcmFnb25Cb25lc1wiXSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBsID0gZ2xvYmFsVGhpc1thXTtcbiAgICAgICAgICAgICAgICBpZiAobCAmJiBsW2VdKSByZXR1cm4gbFtlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaSAmJiAhaS5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcGFyc2VSZXNVcmxzKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGUpID8gZSA6IFtlXSkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGUuaW5kZXhPZihcIjpcIik7XG4gICAgICAgICAgICByZXR1cm4gbyA+IDAgPyB7XG4gICAgICAgICAgICAgICAgdXJsOiBlLnN1YnN0cmluZyhvICsgMSksXG4gICAgICAgICAgICAgICAgYnVuZGxlTmFtZTogZS5zdWJzdHJpbmcoMCwgbylcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBlLFxuICAgICAgICAgICAgICAgIGJ1bmRsZU5hbWU6IHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdyb3VwUmVzTWFwQnlCdW5kbGUoZSwgdCkge1xuICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHMgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhPYmplY3QuZW50cmllcyhlKSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBfX3JlYWQodS52YWx1ZSwgMiksXG4gICAgICAgICAgICAgICAgICAgIGYgPSBwWzBdLFxuICAgICAgICAgICAgICAgICAgICBkID0gcFsxXSxcbiAgICAgICAgICAgICAgICAgICAgaCA9IHRoaXMucGFyc2VSZXNVcmxzKGQsIHQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoaCkpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1t2LmJ1bmRsZU5hbWVdIHx8IChzW3YuYnVuZGxlTmFtZV0gPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW3YuYnVuZGxlTmFtZV1bZl0gfHwgKHNbdi5idW5kbGVOYW1lXVtmXSA9IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbdi5idW5kbGVOYW1lXVtmXS5wdXNoKHYudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gJiYgIW0uZG9uZSAmJiAobCA9IHkucmV0dXJuKSAmJiBsLmNhbGwoeSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gYy5yZXR1cm4pICYmIG4uY2FsbChjKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFJlc0J5VHlwZU1hcChlLCB0ID0gdGhpcy5kZWZhdWx0QnVuZGxlTmFtZSkge1xuICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgIHIgPSB0aGlzO1xuICAgICAgICBvID0gT2JqZWN0LmVudHJpZXMoZSkubWFwKGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zdCBfX2FzeW5jX3RoaXMgPSByO1xuICAgICAgICAgICAgdmFyIG8gPSBfX3JlYWQoZSwgMiksXG4gICAgICAgICAgICAgICAgbCA9IG9bMF0sXG4gICAgICAgICAgICAgICAgcyA9IG9bMV07XG4gICAgICAgICAgICB2YXIgZSwgbywgbiwgcl9sb2NhbDtcbiAgICAgICAgICAgIGUgPSBfX2FzeW5jX3RoaXMuZmluZEFzc2V0VHlwZShsKTtcbiAgICAgICAgICAgIGFzc2VydChlLCBcIuWcqOW3suefpeWRveWQjeepuumXtOWGheacquaJvuWIsOi1hOa6kOexu+WeizogXCIgKyBsKTtcbiAgICAgICAgICAgIG8gPSBBcnJheS5pc0FycmF5KHMpID8gcyA6IFtzXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbiA9IGF3YWl0IF9fYXN5bmNfdGhpcy5sb2FkUmVzKG8sIGUsIHQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG4pID8gbiA6IFtuXTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKF9fZXJyb3JfMV8wKSB7XG4gICAgICAgICAgICAgICAgcl9sb2NhbCA9IF9fZXJyb3JfMV8wO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUmVzTWFuYWdlcl0g5Yqg6L296LWE5rqQ5aSx6LSlIFtcIiArIGwgKyBcIl06XCIsIG8sIHJfbG9jYWwpO1xuICAgICAgICAgICAgICAgIHRocm93IHJfbG9jYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKG8pKS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmNvbmNhdCh0KTtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRSZXNCeU11bHRpQnVuZGxlVHlwZU1hcChlLCB0ID0gdGhpcy5kZWZhdWx0QnVuZGxlTmFtZSkge1xuICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIHUgPSB0aGlzO1xuICAgICAgICBvID0gdGhpcy5ncm91cFJlc01hcEJ5QnVuZGxlKGUsIHQpO1xuICAgICAgICByID0gT2JqZWN0LmVudHJpZXMobykubWFwKGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zdCBfX2FzeW5jX3RoaXMgPSB1O1xuICAgICAgICAgICAgdmFyIHQgPSBfX3JlYWQoZSwgMiksXG4gICAgICAgICAgICAgICAgbyA9IHRbMF0sXG4gICAgICAgICAgICAgICAgciA9IHRbMV07XG4gICAgICAgICAgICByZXR1cm4gX19hc3luY190aGlzLmxvYWRSZXNCeVR5cGVNYXAociwgbyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzID0gYXdhaXQgUHJvbWlzZS5hbGwocik7XG4gICAgICAgIGMgPSBzLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIGUuY29uY2F0KHQpO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIGRlbGF5RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5kZWNSZWYoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyKTtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfVxuXG4gICAgbG9hZFJlbW90ZUxldmVsVGlsZXMoZSwgdCwgbykge1xuICAgICAgICB2YXIgbiA9IChjYy5hc3NldE1hbmFnZXIuZG93bmxvYWRlci5yZW1vdGVTZXJ2ZXJBZGRyZXNzIHx8IFwiaHR0cDovL21iaHBhY2tlcjIueW91eGkxMjMuY29tOjY4OTkvY2RuL3VwZGF0ZS9tYWhqb25nX2FuZHJvaWRfdGVzdC9yZW1vdGVSZXMvMS9cIikgKyBcImxldmVsVGlsZTIvXCIsXG4gICAgICAgICAgICBpID0gQXJyYXkuaXNBcnJheShlKSxcbiAgICAgICAgICAgIHIgPSAoaSA/IGUgOiBbZV0pLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogbiArIGUsXG4gICAgICAgICAgICAgICAgICAgIGV4dDogXCIuanNvblwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYSA9IGZ1bmN0aW9uIGEobywgbikge1xuICAgICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUmVzTWFuYWdlcl0g5LiL6L296L+c56uv6aKY5bqT5aSx6LSlOlwiLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgdChvLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgdChudWxsLCBpID8gZS5sZW5ndGggPiAxID8gbiA6IFtuXSA6IG4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQW55KHIsIHt9LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvKGUsIHQpO1xuICAgICAgICAgICAgfSwgYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEFueShyLCB7fSwgYSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgdmFyIHJlc01hbmFnZXIgPSBuZXcgUmVzTWFuYWdlcigpOyJdfQ==
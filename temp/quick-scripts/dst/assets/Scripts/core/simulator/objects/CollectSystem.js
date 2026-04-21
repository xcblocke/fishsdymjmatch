
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/objects/CollectSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c27abiITlORq16a4lsPlnf', 'CollectSystem');
// Scripts/core/simulator/objects/CollectSystem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../../../gamePlay/user/UserModel");
var TileTypeEnum_1 = require("../../../simulator/constant/TileTypeEnum");
var CollectSystem = /** @class */ (function () {
    function CollectSystem(e) {
        this._collectTargetTypes = [];
        this._allCount = 0;
        this._collectCardIdMap = new Map();
        this._tempCollectIds = [];
        this._tileMapObject = null;
        this._tileMapObject = e;
    }
    Object.defineProperty(CollectSystem.prototype, "allCount", {
        get: function () {
            return this._allCount;
        },
        enumerable: false,
        configurable: true
    });
    CollectSystem.prototype.makeCardIdKey = function (e, t) {
        return e === TileTypeEnum_1.ETileType.RollCard ? "" + e : e + "_" + t;
    };
    CollectSystem.prototype.stringToTileType = function (e) {
        if (Object.values(TileTypeEnum_1.ETileType).includes(e))
            return e;
    };
    CollectSystem.prototype.setCollectTargetTypes = function (e) {
        var t, o, n = new Array();
        if (e) {
            var r = e.split(",");
            try {
                for (var a = __values(r), l = a.next(); !l.done; l = a.next()) {
                    var s = l.value;
                    s && n.push(this.stringToTileType(s));
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (o = a.return) && o.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        this._collectTargetTypes = n;
    };
    CollectSystem.prototype.recordCollectTargetIds = function (e) {
        if (e) {
            this.deserializeData(e);
        }
        else {
            this.generateCollectTargets();
        }
    };
    CollectSystem.prototype.generateCollectTargets = function () {
        var e = this;
        this._collectCardIdMap.clear();
        this._allCount = 0;
        this._tileMapObject.tileObjectMap().forEach(function (t) {
            if (t.isValid && e._collectTargetTypes.includes(t.type)) {
                var o = t.type, n = t.resId, i = t.cardId, r = e.makeCardIdKey(o, i);
                e._collectCardIdMap.has(r) || e._collectCardIdMap.set(r, {
                    type: o,
                    resId: n,
                    cardId: i,
                    resName: t.resName,
                    count: 0,
                    allCount: 0
                });
                var a = e._collectCardIdMap.get(r);
                a.count++;
                a.allCount++;
                e._allCount++;
            }
        });
        this.saveCollectData();
    };
    CollectSystem.prototype.saveCollectData = function () {
        var e = this.serializeData();
        UserModel_1.default.getInstance().travelData.setCollectData(e);
    };
    CollectSystem.prototype.addCollectTarget = function (e) {
        var t, o;
        if (e) {
            var n = e.tileIds || [];
            try {
                for (var r = __values(n), a = r.next(); !a.done; a = r.next()) {
                    var l = a.value, s = this._tileMapObject.getTileObject(l);
                    if (s && this._collectTargetTypes.includes(s.type)) {
                        var c = s.type, u = s.cardId, p = this.makeCardIdKey(c, u), f = this._collectCardIdMap.get(p);
                        if (f) {
                            f.count--;
                            f.count;
                        }
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (o = r.return) && o.call(r);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this._tempCollectIds.push(e);
            this.saveCollectData();
        }
    };
    CollectSystem.prototype.getCollectTempInfo = function (e) {
        if (e === void 0) { e = true; }
        var t = __spreadArrays(this._tempCollectIds);
        e && (this._tempCollectIds = []);
        return t;
    };
    CollectSystem.prototype.isAllCollected = function () {
        var e, t;
        try {
            for (var o = __values(this._collectCardIdMap.values()), n = o.next(); !n.done; n = o.next())
                if (n.value.count > 0)
                    return false;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return true;
    };
    CollectSystem.prototype.getCollectDetailsByType = function (e) {
        var t = [];
        this._collectCardIdMap.forEach(function (o) {
            o.type === e && t.push(Object.assign({}, o));
        });
        return t;
    };
    CollectSystem.prototype.getCollectDetailByCardId = function (e, t) {
        var o = this.makeCardIdKey(e, t), i = this._collectCardIdMap.get(o);
        return i ? Object.assign({}, i) : null;
    };
    CollectSystem.prototype.getCollectCountByCardId = function (e, t) {
        var o = this.makeCardIdKey(e, t), n = this._collectCardIdMap.get(o);
        return n ? n.count : 0;
    };
    CollectSystem.prototype.getAllCollectDetails = function () {
        return Array.from(this._collectCardIdMap.values()).map(function (e) {
            return Object.assign({}, e);
        });
    };
    CollectSystem.prototype.getCollectCountByType = function (e) {
        var t = 0;
        this._collectCardIdMap.forEach(function (o) {
            o.type === e && (t += o.count);
        });
        return t;
    };
    CollectSystem.prototype.serializeData = function () {
        try {
            var e = Array.from(this._collectCardIdMap.entries()).map(function (e) {
                var t = __read(e, 2), o = t[0], n = t[1];
                return {
                    key: o,
                    type: n.type,
                    resId: n.resId,
                    cardId: n.cardId,
                    resName: n.resName,
                    count: n.count,
                    allCount: n.allCount
                };
            });
            return JSON.stringify(e);
        }
        catch (e) {
            return "";
        }
    };
    CollectSystem.prototype.deserializeData = function (e) {
        var t = this;
        try {
            if (!e)
                return;
            var o = JSON.parse(e);
            this._collectCardIdMap.clear();
            this._allCount = 0;
            Array.isArray(o) && o.forEach(function (e) {
                t._collectCardIdMap.set(e.key, {
                    type: e.type,
                    resId: e.resId,
                    cardId: e.cardId || 0,
                    resName: e.resName || "",
                    count: e.count,
                    allCount: e.allCount
                });
                t._allCount += e.count;
            });
            var n = new Set();
            this._collectCardIdMap.forEach(function (e) {
                n.add(e.type);
            });
            this._collectTargetTypes = Array.from(n);
        }
        catch (e) { }
    };
    return CollectSystem;
}());
exports.default = CollectSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL29iamVjdHMvQ29sbGVjdFN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELHlFQUFxRTtBQUNyRTtJQVNFLHVCQUFZLENBQUM7UUFSYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFLcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUxELHNCQUFJLG1DQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFJRCxxQ0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEtBQUssd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsNkNBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJO2dCQUNGLEtB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QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDaEIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FuTkEsQUFtTkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0U3lzdGVtIHtcbiAgX2NvbGxlY3RUYXJnZXRUeXBlcyA9IFtdO1xuICBfYWxsQ291bnQgPSAwO1xuICBfY29sbGVjdENhcmRJZE1hcCA9IG5ldyBNYXAoKTtcbiAgX3RlbXBDb2xsZWN0SWRzID0gW107XG4gIF90aWxlTWFwT2JqZWN0ID0gbnVsbDtcbiAgZ2V0IGFsbENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxDb3VudDtcbiAgfVxuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5fdGlsZU1hcE9iamVjdCA9IGU7XG4gIH1cbiAgbWFrZUNhcmRJZEtleShlLCB0KSB7XG4gICAgcmV0dXJuIGUgPT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCA/IFwiXCIgKyBlIDogZSArIFwiX1wiICsgdDtcbiAgfVxuICBzdHJpbmdUb1RpbGVUeXBlKGUpIHtcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhFVGlsZVR5cGUpLmluY2x1ZGVzKGUpKSByZXR1cm4gZTtcbiAgfVxuICBzZXRDb2xsZWN0VGFyZ2V0VHlwZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBuZXcgQXJyYXkoKTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHIgPSBlLnNwbGl0KFwiLFwiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhyKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgICAgcyAmJiBuLnB1c2godGhpcy5zdHJpbmdUb1RpbGVUeXBlKHMpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobyA9IGEucmV0dXJuKSAmJiBvLmNhbGwoYSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29sbGVjdFRhcmdldFR5cGVzID0gbjtcbiAgfVxuICByZWNvcmRDb2xsZWN0VGFyZ2V0SWRzKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5kZXNlcmlhbGl6ZURhdGEoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDb2xsZWN0VGFyZ2V0cygpO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZUNvbGxlY3RUYXJnZXRzKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLl9jb2xsZWN0Q2FyZElkTWFwLmNsZWFyKCk7XG4gICAgdGhpcy5fYWxsQ291bnQgPSAwO1xuICAgIHRoaXMuX3RpbGVNYXBPYmplY3QudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICh0LmlzVmFsaWQgJiYgZS5fY29sbGVjdFRhcmdldFR5cGVzLmluY2x1ZGVzKHQudHlwZSkpIHtcbiAgICAgICAgdmFyIG8gPSB0LnR5cGUsXG4gICAgICAgICAgbiA9IHQucmVzSWQsXG4gICAgICAgICAgaSA9IHQuY2FyZElkLFxuICAgICAgICAgIHIgPSBlLm1ha2VDYXJkSWRLZXkobywgaSk7XG4gICAgICAgIGUuX2NvbGxlY3RDYXJkSWRNYXAuaGFzKHIpIHx8IGUuX2NvbGxlY3RDYXJkSWRNYXAuc2V0KHIsIHtcbiAgICAgICAgICB0eXBlOiBvLFxuICAgICAgICAgIHJlc0lkOiBuLFxuICAgICAgICAgIGNhcmRJZDogaSxcbiAgICAgICAgICByZXNOYW1lOiB0LnJlc05hbWUsXG4gICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgYWxsQ291bnQ6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBhID0gZS5fY29sbGVjdENhcmRJZE1hcC5nZXQocik7XG4gICAgICAgIGEuY291bnQrKztcbiAgICAgICAgYS5hbGxDb3VudCsrO1xuICAgICAgICBlLl9hbGxDb3VudCsrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2F2ZUNvbGxlY3REYXRhKCk7XG4gIH1cbiAgc2F2ZUNvbGxlY3REYXRhKCkge1xuICAgIHZhciBlID0gdGhpcy5zZXJpYWxpemVEYXRhKCk7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkudHJhdmVsRGF0YS5zZXRDb2xsZWN0RGF0YShlKTtcbiAgfVxuICBhZGRDb2xsZWN0VGFyZ2V0KGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIG4gPSBlLnRpbGVJZHMgfHwgW107XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciByID0gX192YWx1ZXMobiksIGEgPSByLm5leHQoKTsgIWEuZG9uZTsgYSA9IHIubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGwgPSBhLnZhbHVlLFxuICAgICAgICAgICAgcyA9IHRoaXMuX3RpbGVNYXBPYmplY3QuZ2V0VGlsZU9iamVjdChsKTtcbiAgICAgICAgICBpZiAocyAmJiB0aGlzLl9jb2xsZWN0VGFyZ2V0VHlwZXMuaW5jbHVkZXMocy50eXBlKSkge1xuICAgICAgICAgICAgdmFyIGMgPSBzLnR5cGUsXG4gICAgICAgICAgICAgIHUgPSBzLmNhcmRJZCxcbiAgICAgICAgICAgICAgcCA9IHRoaXMubWFrZUNhcmRJZEtleShjLCB1KSxcbiAgICAgICAgICAgICAgZiA9IHRoaXMuX2NvbGxlY3RDYXJkSWRNYXAuZ2V0KHApO1xuICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgZi5jb3VudC0tO1xuICAgICAgICAgICAgICBmLmNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobyA9IHIucmV0dXJuKSAmJiBvLmNhbGwocik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3RlbXBDb2xsZWN0SWRzLnB1c2goZSk7XG4gICAgICB0aGlzLnNhdmVDb2xsZWN0RGF0YSgpO1xuICAgIH1cbiAgfVxuICBnZXRDb2xsZWN0VGVtcEluZm8oZSA9IHRydWUpIHtcbiAgICB2YXIgdCA9IFsuLi50aGlzLl90ZW1wQ29sbGVjdElkc107XG4gICAgZSAmJiAodGhpcy5fdGVtcENvbGxlY3RJZHMgPSBbXSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgaXNBbGxDb2xsZWN0ZWQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLl9jb2xsZWN0Q2FyZElkTWFwLnZhbHVlcygpKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIGlmIChuLnZhbHVlLmNvdW50ID4gMCkgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKHQgPSBvLnJldHVybikgJiYgdC5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldENvbGxlY3REZXRhaWxzQnlUeXBlKGUpIHtcbiAgICB2YXIgdCA9IFtdO1xuICAgIHRoaXMuX2NvbGxlY3RDYXJkSWRNYXAuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgby50eXBlID09PSBlICYmIHQucHVzaChPYmplY3QuYXNzaWduKHt9LCBvKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgZ2V0Q29sbGVjdERldGFpbEJ5Q2FyZElkKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMubWFrZUNhcmRJZEtleShlLCB0KSxcbiAgICAgIGkgPSB0aGlzLl9jb2xsZWN0Q2FyZElkTWFwLmdldChvKTtcbiAgICByZXR1cm4gaSA/IE9iamVjdC5hc3NpZ24oe30sIGkpIDogbnVsbDtcbiAgfVxuICBnZXRDb2xsZWN0Q291bnRCeUNhcmRJZChlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLm1ha2VDYXJkSWRLZXkoZSwgdCksXG4gICAgICBuID0gdGhpcy5fY29sbGVjdENhcmRJZE1hcC5nZXQobyk7XG4gICAgcmV0dXJuIG4gPyBuLmNvdW50IDogMDtcbiAgfVxuICBnZXRBbGxDb2xsZWN0RGV0YWlscygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9jb2xsZWN0Q2FyZElkTWFwLnZhbHVlcygpKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlKTtcbiAgICB9KTtcbiAgfVxuICBnZXRDb2xsZWN0Q291bnRCeVR5cGUoZSkge1xuICAgIHZhciB0ID0gMDtcbiAgICB0aGlzLl9jb2xsZWN0Q2FyZElkTWFwLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgIG8udHlwZSA9PT0gZSAmJiAodCArPSBvLmNvdW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBzZXJpYWxpemVEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgZSA9IEFycmF5LmZyb20odGhpcy5fY29sbGVjdENhcmRJZE1hcC5lbnRyaWVzKCkpLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IF9fcmVhZChlLCAyKSxcbiAgICAgICAgICBvID0gdFswXSxcbiAgICAgICAgICBuID0gdFsxXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IG8sXG4gICAgICAgICAgdHlwZTogbi50eXBlLFxuICAgICAgICAgIHJlc0lkOiBuLnJlc0lkLFxuICAgICAgICAgIGNhcmRJZDogbi5jYXJkSWQsXG4gICAgICAgICAgcmVzTmFtZTogbi5yZXNOYW1lLFxuICAgICAgICAgIGNvdW50OiBuLmNvdW50LFxuICAgICAgICAgIGFsbENvdW50OiBuLmFsbENvdW50XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbiAgZGVzZXJpYWxpemVEYXRhKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgdmFyIG8gPSBKU09OLnBhcnNlKGUpO1xuICAgICAgdGhpcy5fY29sbGVjdENhcmRJZE1hcC5jbGVhcigpO1xuICAgICAgdGhpcy5fYWxsQ291bnQgPSAwO1xuICAgICAgQXJyYXkuaXNBcnJheShvKSAmJiBvLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdC5fY29sbGVjdENhcmRJZE1hcC5zZXQoZS5rZXksIHtcbiAgICAgICAgICB0eXBlOiBlLnR5cGUsXG4gICAgICAgICAgcmVzSWQ6IGUucmVzSWQsXG4gICAgICAgICAgY2FyZElkOiBlLmNhcmRJZCB8fCAwLFxuICAgICAgICAgIHJlc05hbWU6IGUucmVzTmFtZSB8fCBcIlwiLFxuICAgICAgICAgIGNvdW50OiBlLmNvdW50LFxuICAgICAgICAgIGFsbENvdW50OiBlLmFsbENvdW50XG4gICAgICAgIH0pO1xuICAgICAgICB0Ll9hbGxDb3VudCArPSBlLmNvdW50O1xuICAgICAgfSk7XG4gICAgICB2YXIgbiA9IG5ldyBTZXQoKTtcbiAgICAgIHRoaXMuX2NvbGxlY3RDYXJkSWRNYXAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBuLmFkZChlLnR5cGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jb2xsZWN0VGFyZ2V0VHlwZXMgPSBBcnJheS5mcm9tKG4pO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn0iXX0=
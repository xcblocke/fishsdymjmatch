
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/dianzan/Tile2DianZanChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eea002Xu+JEv5fuHwQZguL8', 'Tile2DianZanChecker');
// Scripts/process/dianzan/Tile2DianZanChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DianZanChecker = exports.EDianZanCondition = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var EDianZanCondition;
(function (EDianZanCondition) {
    EDianZanCondition[EDianZanCondition["None"] = 0] = "None";
    EDianZanCondition[EDianZanCondition["ContinueRollCard"] = 1] = "ContinueRollCard";
    EDianZanCondition[EDianZanCondition["SlotBarMatchNoRollCard"] = 2] = "SlotBarMatchNoRollCard";
    EDianZanCondition[EDianZanCondition["UnlockRollCardCanDianZan"] = 3] = "UnlockRollCardCanDianZan";
})(EDianZanCondition = exports.EDianZanCondition || (exports.EDianZanCondition = {}));
var Tile2DianZanChecker = /** @class */ (function (_super) {
    __extends(Tile2DianZanChecker, _super);
    function Tile2DianZanChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2DianZanChecker.prototype.isAllClearing = function () {
        var e, t = this._context.getGameData();
        return t && (null === (e = t.getHasTriggeredAllClear) || void 0 === e ? void 0 : e.call(t)) || false;
    };
    Tile2DianZanChecker.prototype.isCheckDianZan = function () {
        return false;
    };
    Tile2DianZanChecker.prototype.isCheckDZState = function () {
        return false;
    };
    Tile2DianZanChecker.prototype.checkContinueRollCard = function (e) {
        if (!this.isCheckDianZan())
            return false;
        if (this.isAllClearing())
            return false;
        var t = this._context.getTileMapObject(), o = (null == e ? void 0 : e.length) || 0;
        if (o >= 2) {
            var n = t.getTileObjectByPosId(e[o - 1]), i = t.getTileObjectByPosId(e[o - 2]);
            if (i && n && n.isValid && i.isValid && i.cardId == n.cardId && (i.checkHasType(TileTypeEnum_1.ETileType.RollCard) || n.checkHasType(TileTypeEnum_1.ETileType.RollCard)))
                return true;
        }
        return false;
    };
    Tile2DianZanChecker.prototype.checkSlotBarCanMatch = function (e, t) {
        if (t === void 0) { t = true; }
        var o, n, i, r;
        if (!this.isCheckDianZan())
            return false;
        if (this.isAllClearing())
            return false;
        if (((null == e ? void 0 : e.length) || 0) < 1)
            return false;
        var l = this._context.getTileMapObject();
        l.updateCanMatchTiles();
        var c = l.getCanMatchTiles();
        try {
            for (var u = __values(e), p = u.next(); !p.done; p = u.next()) {
                var f = p.value, d = l.getTileObjectByPosId(f);
                if (d && d.isValid) {
                    var h = c.get(d.cardId);
                    if (h && h.length >= 2) {
                        if (!t)
                            return true;
                        var y = true;
                        try {
                            for (var m = (i = void 0, __values(h)), v = m.next(); !v.done; v = m.next()) {
                                var g = v.value;
                                if (g.checkHasType(TileTypeEnum_1.ETileType.RollCard) && g.getIsBack()) {
                                    y = false;
                                    break;
                                }
                            }
                        }
                        catch (e) {
                            i = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                v && !v.done && (r = m.return) && r.call(m);
                            }
                            finally {
                                if (i)
                                    throw i.error;
                            }
                        }
                        if (y)
                            return true;
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
                p && !p.done && (n = u.return) && n.call(u);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    Tile2DianZanChecker.prototype.checkLockRollCard = function () {
        var e, t;
        if (this.isCheckDZState() && !this.isAllClearing()) {
            var o = this._context.tile2SlotBarData, n = this.context.getTileMapObject(), i = n.getValidTileObjects();
            try {
                for (var r = __values(i), l = r.next(); !l.done; l = r.next()) {
                    var c = l.value;
                    c.checkHasType(TileTypeEnum_1.ETileType.RollCard) && c.getIsBack() && n.isCardLock(c) > 0 && o.addRollCardLockTileId(c.id, c.cardId);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    l && !l.done && (t = r.return) && t.call(r);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    Tile2DianZanChecker.prototype.checkAddTileCanDianZan = function (e, t) {
        var o, n;
        if (!this.isCheckDianZan())
            return false;
        if (!this.isCheckDZState())
            return false;
        if (this.isAllClearing())
            return false;
        var i = this._context.tile2SlotBarData, r = i.canDianZanTileIds;
        if (!t || 0 === t.length || !r || 0 === r.length)
            return false;
        var l = this.context.getTileMapObject(), s = 0;
        try {
            for (var c = __values(t), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                if (!e || 0 == e.length || !e.includes(p)) {
                    var f = l.getTileObjectByPosId(p);
                    f && f.isValid && r.includes(f.id) && s++;
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
        i.canDianZanTileIds = null;
        return s > 0;
    };
    Tile2DianZanChecker.prototype.checkUnlockRollCard = function (e) {
        var t, o, n, i;
        if (this.isCheckDZState() && !this.isAllClearing()) {
            var r = this._context.tile2SlotBarData, l = r.getRollCardLockTileIds();
            if (l && 0 !== l.length) {
                var s = this.context.getTileMapObject(), c = [];
                try {
                    for (var u = __values(l), p = u.next(); !p.done; p = u.next()) {
                        var f = p.value, d = s.getTileObject(f);
                        if (d && d.isValid) {
                            if (e && e.length > 0 && e.includes(d.saveKey()))
                                r.removeRollCardLockTileId(f);
                            else if (0 === s.isCardLock(d)) {
                                r.removeRollCardLockTileId(f);
                                if (e && 3 == e.length) {
                                    var h = false;
                                    try {
                                        for (var y = (n = void 0, __values(e)), m = y.next(); !m.done; m = y.next()) {
                                            var v = m.value, g = s.getTileObjectByPosId(v);
                                            if (g && g.isValid && g.cardId == d.cardId) {
                                                h = true;
                                                break;
                                            }
                                        }
                                    }
                                    catch (e) {
                                        n = {
                                            error: e
                                        };
                                    }
                                    finally {
                                        try {
                                            m && !m.done && (i = y.return) && i.call(y);
                                        }
                                        finally {
                                            if (n)
                                                throw n.error;
                                        }
                                    }
                                    h && c.push(d.id);
                                }
                            }
                        }
                        else
                            r.removeRollCardLockTileId(f);
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (o = u.return) && o.call(u);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                r.canDianZanTileIds = c;
                r.clearCardLockData();
            }
            else
                r.clearCardLockData();
        }
    };
    __decorate([
        mj.traitEvent("T2DianZCheck_isDianZan")
    ], Tile2DianZanChecker.prototype, "isCheckDianZan", null);
    __decorate([
        mj.traitEvent("T2DianZCheck_isChkDZState")
    ], Tile2DianZanChecker.prototype, "isCheckDZState", null);
    return Tile2DianZanChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2DianZanChecker = Tile2DianZanChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvZGlhbnphbi9UaWxlMkRpYW5aYW5DaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELHNFQUFrRTtBQUNsRSxJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDM0IseURBQVEsQ0FBQTtJQUNSLGlGQUFvQixDQUFBO0lBQ3BCLDZGQUEwQixDQUFBO0lBQzFCLGlHQUE0QixDQUFBO0FBQzlCLENBQUMsRUFMVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUs1QjtBQUNEO0lBQXlDLHVDQUFjO0lBQ3JELDZCQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsMkNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7SUFDdkcsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxJ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QXBNRCxBQW9NQyxDQXBNd0MsK0JBQWMsR0FvTXREO0FBcE1ZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgZW51bSBFRGlhblphbkNvbmRpdGlvbiB7XG4gIE5vbmUgPSAwLFxuICBDb250aW51ZVJvbGxDYXJkID0gMSxcbiAgU2xvdEJhck1hdGNoTm9Sb2xsQ2FyZCA9IDIsXG4gIFVubG9ja1JvbGxDYXJkQ2FuRGlhblphbiA9IDMsXG59XG5leHBvcnQgY2xhc3MgVGlsZTJEaWFuWmFuQ2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGlzQWxsQ2xlYXJpbmcoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpO1xuICAgIHJldHVybiB0ICYmIChudWxsID09PSAoZSA9IHQuZ2V0SGFzVHJpZ2dlcmVkQWxsQ2xlYXIpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbCh0KSkgfHwgZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkRpYW5aQ2hlY2tfaXNEaWFuWmFuXCIpXG4gIGlzQ2hlY2tEaWFuWmFuKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyRGlhblpDaGVja19pc0Noa0RaU3RhdGVcIilcbiAgaXNDaGVja0RaU3RhdGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNoZWNrQ29udGludWVSb2xsQ2FyZChlKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2hlY2tEaWFuWmFuKCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5pc0FsbENsZWFyaW5nKCkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdCA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbyA9IChudWxsID09IGUgPyB2b2lkIDAgOiBlLmxlbmd0aCkgfHwgMDtcbiAgICBpZiAobyA+PSAyKSB7XG4gICAgICB2YXIgbiA9IHQuZ2V0VGlsZU9iamVjdEJ5UG9zSWQoZVtvIC0gMV0pLFxuICAgICAgICBpID0gdC5nZXRUaWxlT2JqZWN0QnlQb3NJZChlW28gLSAyXSk7XG4gICAgICBpZiAoaSAmJiBuICYmIG4uaXNWYWxpZCAmJiBpLmlzVmFsaWQgJiYgaS5jYXJkSWQgPT0gbi5jYXJkSWQgJiYgKGkuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Sb2xsQ2FyZCkgfHwgbi5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJvbGxDYXJkKSkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY2hlY2tTbG90QmFyQ2FuTWF0Y2goZSwgdCA9IHRydWUpIHtcbiAgICB2YXIgbywgbiwgaSwgcjtcbiAgICBpZiAoIXRoaXMuaXNDaGVja0RpYW5aYW4oKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0aGlzLmlzQWxsQ2xlYXJpbmcoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICgoKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubGVuZ3RoKSB8fCAwKSA8IDEpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbCA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgIGwudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHZhciBjID0gbC5nZXRDYW5NYXRjaFRpbGVzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhlKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGYgPSBwLnZhbHVlLFxuICAgICAgICAgIGQgPSBsLmdldFRpbGVPYmplY3RCeVBvc0lkKGYpO1xuICAgICAgICBpZiAoZCAmJiBkLmlzVmFsaWQpIHtcbiAgICAgICAgICB2YXIgaCA9IGMuZ2V0KGQuY2FyZElkKTtcbiAgICAgICAgICBpZiAoaCAmJiBoLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICBpZiAoIXQpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIHkgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IChpID0gdm9pZCAwLCBfX3ZhbHVlcyhoKSksIHYgPSBtLm5leHQoKTsgIXYuZG9uZTsgdiA9IG0ubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGcgPSB2LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChnLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuUm9sbENhcmQpICYmIGcuZ2V0SXNCYWNrKCkpIHtcbiAgICAgICAgICAgICAgICAgIHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHYgJiYgIXYuZG9uZSAmJiAociA9IG0ucmV0dXJuKSAmJiByLmNhbGwobSk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY2hlY2tMb2NrUm9sbENhcmQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgaWYgKHRoaXMuaXNDaGVja0RaU3RhdGUoKSAmJiAhdGhpcy5pc0FsbENsZWFyaW5nKCkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fY29udGV4dC50aWxlMlNsb3RCYXJEYXRhLFxuICAgICAgICBuID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgICAgaSA9IG4uZ2V0VmFsaWRUaWxlT2JqZWN0cygpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKGkpLCBsID0gci5uZXh0KCk7ICFsLmRvbmU7IGwgPSByLm5leHQoKSkge1xuICAgICAgICAgIHZhciBjID0gbC52YWx1ZTtcbiAgICAgICAgICBjLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuUm9sbENhcmQpICYmIGMuZ2V0SXNCYWNrKCkgJiYgbi5pc0NhcmRMb2NrKGMpID4gMCAmJiBvLmFkZFJvbGxDYXJkTG9ja1RpbGVJZChjLmlkLCBjLmNhcmRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKHQgPSByLnJldHVybikgJiYgdC5jYWxsKHIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNoZWNrQWRkVGlsZUNhbkRpYW5aYW4oZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIGlmICghdGhpcy5pc0NoZWNrRGlhblphbigpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzQ2hlY2tEWlN0YXRlKCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5pc0FsbENsZWFyaW5nKCkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgaSA9IHRoaXMuX2NvbnRleHQudGlsZTJTbG90QmFyRGF0YSxcbiAgICAgIHIgPSBpLmNhbkRpYW5aYW5UaWxlSWRzO1xuICAgIGlmICghdCB8fCAwID09PSB0Lmxlbmd0aCB8fCAhciB8fCAwID09PSByLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBsID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIHMgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXModCksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gdS52YWx1ZTtcbiAgICAgICAgaWYgKCFlIHx8IDAgPT0gZS5sZW5ndGggfHwgIWUuaW5jbHVkZXMocCkpIHtcbiAgICAgICAgICB2YXIgZiA9IGwuZ2V0VGlsZU9iamVjdEJ5UG9zSWQocCk7XG4gICAgICAgICAgZiAmJiBmLmlzVmFsaWQgJiYgci5pbmNsdWRlcyhmLmlkKSAmJiBzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gYy5yZXR1cm4pICYmIG4uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpLmNhbkRpYW5aYW5UaWxlSWRzID0gbnVsbDtcbiAgICByZXR1cm4gcyA+IDA7XG4gIH1cbiAgY2hlY2tVbmxvY2tSb2xsQ2FyZChlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGk7XG4gICAgaWYgKHRoaXMuaXNDaGVja0RaU3RhdGUoKSAmJiAhdGhpcy5pc0FsbENsZWFyaW5nKCkpIHtcbiAgICAgIHZhciByID0gdGhpcy5fY29udGV4dC50aWxlMlNsb3RCYXJEYXRhLFxuICAgICAgICBsID0gci5nZXRSb2xsQ2FyZExvY2tUaWxlSWRzKCk7XG4gICAgICBpZiAobCAmJiAwICE9PSBsLmxlbmd0aCkge1xuICAgICAgICB2YXIgcyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICAgICAgYyA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhsKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBmID0gcC52YWx1ZSxcbiAgICAgICAgICAgICAgZCA9IHMuZ2V0VGlsZU9iamVjdChmKTtcbiAgICAgICAgICAgIGlmIChkICYmIGQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICBpZiAoZSAmJiBlLmxlbmd0aCA+IDAgJiYgZS5pbmNsdWRlcyhkLnNhdmVLZXkoKSkpIHIucmVtb3ZlUm9sbENhcmRMb2NrVGlsZUlkKGYpO2Vsc2UgaWYgKDAgPT09IHMuaXNDYXJkTG9jayhkKSkge1xuICAgICAgICAgICAgICAgIHIucmVtb3ZlUm9sbENhcmRMb2NrVGlsZUlkKGYpO1xuICAgICAgICAgICAgICAgIGlmIChlICYmIDMgPT0gZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gKG4gPSB2b2lkIDAsIF9fdmFsdWVzKGUpKSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IG0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gcy5nZXRUaWxlT2JqZWN0QnlQb3NJZCh2KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZyAmJiBnLmlzVmFsaWQgJiYgZy5jYXJkSWQgPT0gZC5jYXJkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgbSAmJiAhbS5kb25lICYmIChpID0geS5yZXR1cm4pICYmIGkuY2FsbCh5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaCAmJiBjLnB1c2goZC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Ugci5yZW1vdmVSb2xsQ2FyZExvY2tUaWxlSWQoZik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gdS5yZXR1cm4pICYmIG8uY2FsbCh1KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHIuY2FuRGlhblphblRpbGVJZHMgPSBjO1xuICAgICAgICByLmNsZWFyQ2FyZExvY2tEYXRhKCk7XG4gICAgICB9IGVsc2Ugci5jbGVhckNhcmRMb2NrRGF0YSgpO1xuICAgIH1cbiAgfVxufSJdfQ==
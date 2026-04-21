
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/magnet/Tile2MagnetChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d11dPNF+5E95hmDKikuTfz', 'Tile2MagnetChecker');
// Scripts/process/magnet/Tile2MagnetChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var Tile2MagnetChecker = /** @class */ (function (_super) {
    __extends(Tile2MagnetChecker, _super);
    function Tile2MagnetChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2MagnetChecker.prototype.isCanMagnet = function () {
        return false;
    };
    Tile2MagnetChecker.prototype.getMagnetCount = function () {
        return 1;
    };
    Tile2MagnetChecker.prototype.checkMagnet = function () {
        var e = this.checkMagnetCondition(), t = e ? this.getMagnetCount() : 0;
        e && 0 == this.findMagnetTiles(1).length && (e = false);
        return {
            triggerMagnet: e,
            isShowIconItem: e,
            magnetCount: t
        };
    };
    Tile2MagnetChecker.prototype.checkMagnetCondition = function () {
        var e = this.context.getTileMapObject();
        e.updateCanMatchTiles();
        return 0 === e.getCanMatchTilesHint().length;
    };
    Tile2MagnetChecker.prototype.findMagnetTiles = function (e) {
        var t, o, n, i, r, l = this.context.getTileMapObject();
        l.updateCanMatchTiles();
        var s = [], c = [], u = null !== (r = this.context.getGameData().slotBarIds) && void 0 !== r ? r : [], p = l.getCanMatchTiles(), f = 0;
        if (u.length > 0)
            try {
                for (var d = __values(u), h = d.next(); !h.done; h = d.next()) {
                    var y = h.value, m = l.getTileObjectByPosId(y);
                    if ((null == m ? void 0 : m.isValid) && !this.isIgnoreTile(m)) {
                        var v = p.get(m.cardId);
                        if (v && v.length >= 2) {
                            for (var g = 0; g < v.length; g++)
                                if ((b = v[g]).id !== m.id && !this.isIgnoreTile(b) && !c.includes(b.id)) {
                                    s.push(b.id);
                                    c.push(m.id);
                                    c.push(b.id);
                                    f++;
                                    break;
                                }
                        }
                        else {
                            var _ = l.tileObjectMap().values();
                            try {
                                for (var T = (n = void 0, __values(_)), C = T.next(); !C.done; C = T.next()) {
                                    var b;
                                    if ((b = C.value).isValid && !c.includes(b.id)) {
                                        if (b.cardId === m.cardId && b.id !== m.id && !this.isIgnoreTile(b)) {
                                            s.push(b.id);
                                            c.push(m.id);
                                            c.push(b.id);
                                            f++;
                                            break;
                                        }
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
                                    C && !C.done && (i = T.return) && i.call(T);
                                }
                                finally {
                                    if (n)
                                        throw n.error;
                                }
                            }
                        }
                        if (f >= e)
                            return s;
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
                    h && !h.done && (o = d.return) && o.call(d);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        if (p.size > 0 && this.findTilesInCanMatchTiles(p, c, e, s))
            return s;
        this.findTilesInTileObjectValues(l, c, e, s);
        return s;
    };
    Tile2MagnetChecker.prototype.findTilesInCanMatchTiles = function (e, t, o, n) {
        var i, r;
        if (!t || !e || !n)
            return false;
        var s = t.length / 2;
        if (s >= o)
            return true;
        try {
            for (var c = __values(e.entries()), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = (p[0], p[1]);
                if (f.length >= 2) {
                    if (this.isIgnoreTile(f[0]) || this.isIgnoreTile(f[1]))
                        continue;
                    if (t.includes(f[0].id) || t.includes(f[1].id))
                        continue;
                    var d = f[0], h = f[1];
                    n.push(d.id);
                    n.push(h.id);
                    t.push(d.id);
                    t.push(h.id);
                    if (++s >= o)
                        return true;
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
                u && !u.done && (r = c.return) && r.call(c);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return false;
    };
    Tile2MagnetChecker.prototype.isIgnoreTile = function (e) {
        return !!(e.checkHasType(TileTypeEnum_1.ETileType.RankCard) || e.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) || e.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) || e.checkHasType(TileTypeEnum_1.ETileType.Bomb));
    };
    Tile2MagnetChecker.prototype.findTilesInTileObjectValues = function (e, t, o, n) {
        var i, r;
        if (!t || !e || !n)
            return false;
        var l = t.length / 2;
        if (l >= o)
            return true;
        var s = e.tileObjectMap().values(), c = new Map();
        try {
            for (var u = __values(s), p = u.next(); !p.done; p = u.next()) {
                var f = p.value;
                if (f.isValid && !this.isIgnoreTile(f) && !t.includes(f.id)) {
                    var d = f.cardId, h = c.get(d);
                    if (h) {
                        n.push(h);
                        n.push(f.id);
                        t.push(h);
                        t.push(f.id);
                        if (++l >= o)
                            return true;
                    }
                    else
                        c.set(d, f.id);
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
                p && !p.done && (r = u.return) && r.call(u);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
    };
    __decorate([
        mj.traitEvent("T2MagnetChk_canMagnet")
    ], Tile2MagnetChecker.prototype, "isCanMagnet", null);
    __decorate([
        mj.traitEvent("T2MagnetChk_magnetCnt")
    ], Tile2MagnetChecker.prototype, "getMagnetCount", null);
    __decorate([
        mj.traitEvent("T2MagnetChk_checkMagnet")
    ], Tile2MagnetChecker.prototype, "checkMagnet", null);
    __decorate([
        mj.traitEvent("T2MagnetChk_chkCon")
    ], Tile2MagnetChecker.prototype, "checkMagnetCondition", null);
    return Tile2MagnetChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2MagnetChecker = Tile2MagnetChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvbWFnbmV0L1RpbGUyTWFnbmV0Q2hlY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxzRUFBa0U7QUFDbEU7SUFBd0Msc0NBQWM7SUFDcEQsNEJBQVksQ0FBQztlQUNYLGtCQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFDakMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN4RCxPQUFPO1lBQ0wsYUFBYSxFQUFFLENBQUM7WUFDaEIsY0FBYyxFQUFFLENBQUM7WUFDakIsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDL0MsQ0FBQztJQUNELDRDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxD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LCtCQUFjLEdBNEtyRDtBQTVLWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuZXhwb3J0IGNsYXNzIFRpbGUyTWFnbmV0Q2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJNYWduZXRDaGtfY2FuTWFnbmV0XCIpXG4gIGlzQ2FuTWFnbmV0KCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyTWFnbmV0Q2hrX21hZ25ldENudFwiKVxuICBnZXRNYWduZXRDb3VudCgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyTWFnbmV0Q2hrX2NoZWNrTWFnbmV0XCIpXG4gIGNoZWNrTWFnbmV0KCkge1xuICAgIHZhciBlID0gdGhpcy5jaGVja01hZ25ldENvbmRpdGlvbigpLFxuICAgICAgdCA9IGUgPyB0aGlzLmdldE1hZ25ldENvdW50KCkgOiAwO1xuICAgIGUgJiYgMCA9PSB0aGlzLmZpbmRNYWduZXRUaWxlcygxKS5sZW5ndGggJiYgKGUgPSBmYWxzZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyaWdnZXJNYWduZXQ6IGUsXG4gICAgICBpc1Nob3dJY29uSXRlbTogZSxcbiAgICAgIG1hZ25ldENvdW50OiB0XG4gICAgfTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyTWFnbmV0Q2hrX2Noa0NvblwiKVxuICBjaGVja01hZ25ldENvbmRpdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgZS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgcmV0dXJuIDAgPT09IGUuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKS5sZW5ndGg7XG4gIH1cbiAgZmluZE1hZ25ldFRpbGVzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBsID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKTtcbiAgICBsLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICB2YXIgcyA9IFtdLFxuICAgICAgYyA9IFtdLFxuICAgICAgdSA9IG51bGwgIT09IChyID0gdGhpcy5jb250ZXh0LmdldEdhbWVEYXRhKCkuc2xvdEJhcklkcykgJiYgdm9pZCAwICE9PSByID8gciA6IFtdLFxuICAgICAgcCA9IGwuZ2V0Q2FuTWF0Y2hUaWxlcygpLFxuICAgICAgZiA9IDA7XG4gICAgaWYgKHUubGVuZ3RoID4gMCkgdHJ5IHtcbiAgICAgIGZvciAodmFyIGQgPSBfX3ZhbHVlcyh1KSwgaCA9IGQubmV4dCgpOyAhaC5kb25lOyBoID0gZC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHkgPSBoLnZhbHVlLFxuICAgICAgICAgIG0gPSBsLmdldFRpbGVPYmplY3RCeVBvc0lkKHkpO1xuICAgICAgICBpZiAoKG51bGwgPT0gbSA/IHZvaWQgMCA6IG0uaXNWYWxpZCkgJiYgIXRoaXMuaXNJZ25vcmVUaWxlKG0pKSB7XG4gICAgICAgICAgdmFyIHYgPSBwLmdldChtLmNhcmRJZCk7XG4gICAgICAgICAgaWYgKHYgJiYgdi5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgZm9yICh2YXIgZyA9IDA7IGcgPCB2Lmxlbmd0aDsgZysrKSBpZiAoKGIgPSB2W2ddKS5pZCAhPT0gbS5pZCAmJiAhdGhpcy5pc0lnbm9yZVRpbGUoYikgJiYgIWMuaW5jbHVkZXMoYi5pZCkpIHtcbiAgICAgICAgICAgICAgcy5wdXNoKGIuaWQpO1xuICAgICAgICAgICAgICBjLnB1c2gobS5pZCk7XG4gICAgICAgICAgICAgIGMucHVzaChiLmlkKTtcbiAgICAgICAgICAgICAgZisrO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF8gPSBsLnRpbGVPYmplY3RNYXAoKS52YWx1ZXMoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIFQgPSAobiA9IHZvaWQgMCwgX192YWx1ZXMoXykpLCBDID0gVC5uZXh0KCk7ICFDLmRvbmU7IEMgPSBULm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBiO1xuICAgICAgICAgICAgICAgIGlmICgoYiA9IEMudmFsdWUpLmlzVmFsaWQgJiYgIWMuaW5jbHVkZXMoYi5pZCkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChiLmNhcmRJZCA9PT0gbS5jYXJkSWQgJiYgYi5pZCAhPT0gbS5pZCAmJiAhdGhpcy5pc0lnbm9yZVRpbGUoYikpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wdXNoKGIuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjLnB1c2gobS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGMucHVzaChiLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZisrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBDICYmICFDLmRvbmUgJiYgKGkgPSBULnJldHVybikgJiYgaS5jYWxsKFQpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmID49IGUpIHJldHVybiBzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGggJiYgIWguZG9uZSAmJiAobyA9IGQucmV0dXJuKSAmJiBvLmNhbGwoZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHAuc2l6ZSA+IDAgJiYgdGhpcy5maW5kVGlsZXNJbkNhbk1hdGNoVGlsZXMocCwgYywgZSwgcykpIHJldHVybiBzO1xuICAgIHRoaXMuZmluZFRpbGVzSW5UaWxlT2JqZWN0VmFsdWVzKGwsIGMsIGUsIHMpO1xuICAgIHJldHVybiBzO1xuICB9XG4gIGZpbmRUaWxlc0luQ2FuTWF0Y2hUaWxlcyhlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGksIHI7XG4gICAgaWYgKCF0IHx8ICFlIHx8ICFuKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHMgPSB0Lmxlbmd0aCAvIDI7XG4gICAgaWYgKHMgPj0gbykgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhlLmVudHJpZXMoKSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gX19yZWFkKHUudmFsdWUsIDIpLFxuICAgICAgICAgIGYgPSAocFswXSwgcFsxXSk7XG4gICAgICAgIGlmIChmLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNJZ25vcmVUaWxlKGZbMF0pIHx8IHRoaXMuaXNJZ25vcmVUaWxlKGZbMV0pKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAodC5pbmNsdWRlcyhmWzBdLmlkKSB8fCB0LmluY2x1ZGVzKGZbMV0uaWQpKSBjb250aW51ZTtcbiAgICAgICAgICB2YXIgZCA9IGZbMF0sXG4gICAgICAgICAgICBoID0gZlsxXTtcbiAgICAgICAgICBuLnB1c2goZC5pZCk7XG4gICAgICAgICAgbi5wdXNoKGguaWQpO1xuICAgICAgICAgIHQucHVzaChkLmlkKTtcbiAgICAgICAgICB0LnB1c2goaC5pZCk7XG4gICAgICAgICAgaWYgKCsrcyA+PSBvKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB1ICYmICF1LmRvbmUgJiYgKHIgPSBjLnJldHVybikgJiYgci5jYWxsKGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpc0lnbm9yZVRpbGUoZSkge1xuICAgIHJldHVybiAhIShlLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuUmFua0NhcmQpIHx8IGUuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5EdW94aWFvQ2FyZCkgfHwgZS5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkRheGlhb0NhcmQpIHx8IGUuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Cb21iKSk7XG4gIH1cbiAgZmluZFRpbGVzSW5UaWxlT2JqZWN0VmFsdWVzKGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSwgcjtcbiAgICBpZiAoIXQgfHwgIWUgfHwgIW4pIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbCA9IHQubGVuZ3RoIC8gMjtcbiAgICBpZiAobCA+PSBvKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgcyA9IGUudGlsZU9iamVjdE1hcCgpLnZhbHVlcygpLFxuICAgICAgYyA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHMpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IHAudmFsdWU7XG4gICAgICAgIGlmIChmLmlzVmFsaWQgJiYgIXRoaXMuaXNJZ25vcmVUaWxlKGYpICYmICF0LmluY2x1ZGVzKGYuaWQpKSB7XG4gICAgICAgICAgdmFyIGQgPSBmLmNhcmRJZCxcbiAgICAgICAgICAgIGggPSBjLmdldChkKTtcbiAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgbi5wdXNoKGgpO1xuICAgICAgICAgICAgbi5wdXNoKGYuaWQpO1xuICAgICAgICAgICAgdC5wdXNoKGgpO1xuICAgICAgICAgICAgdC5wdXNoKGYuaWQpO1xuICAgICAgICAgICAgaWYgKCsrbCA+PSBvKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgYy5zZXQoZCwgZi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChyID0gdS5yZXR1cm4pICYmIHIuY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==
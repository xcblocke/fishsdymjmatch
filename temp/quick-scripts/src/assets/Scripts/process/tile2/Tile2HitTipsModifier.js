"use strict";
cc._RF.push(module, '7530bGYnqNEOLOCDOQdzAal', 'Tile2HitTipsModifier');
// Scripts/process/tile2/Tile2HitTipsModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2HitTipsModifier = /** @class */ (function (_super) {
    __extends(Tile2HitTipsModifier, _super);
    function Tile2HitTipsModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2HitTipsModifier.prototype.clearAllHitTips = function () {
        var e, t, o = this.context.getCanHitTips() || [];
        try {
            for (var n = __values(o), i = n.next(); !i.done; i = n.next()) {
                var a = i.value;
                this.context.getTileMapObject().getTileObject(a).isHint = false;
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
        this.context.setCanHitTips([]);
        return o;
    };
    Tile2HitTipsModifier.prototype.tryClearHitTips = function (e) {
        var t, o, n, i;
        if (!e || e.length <= 0)
            return false;
        var a = this.context.getTileMapObject().getTileObject(e[0]), l = this.context.getTileMapObject().getTileObject(e[1]);
        if (!a || !l)
            return false;
        var s = this.context.getCanHitTips() || [];
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = this.context.getTileMapObject().getTileObject(p);
                if (f) {
                    var d = f.cardId;
                    if (d == a.cardId || d == l.cardId) {
                        try {
                            for (var h = (n = void 0, __values(s)), y = h.next(); !y.done; y = h.next()) {
                                var m = y.value;
                                this.context.getTileMapObject().getTileObject(m).isHint = false;
                            }
                        }
                        catch (e) {
                            n = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                y && !y.done && (i = h.return) && i.call(h);
                            }
                            finally {
                                if (n)
                                    throw n.error;
                            }
                        }
                        this.context.setCanHitTips([]);
                        return true;
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
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return false;
    };
    Tile2HitTipsModifier.prototype.modifyClearHitTips = function (e) {
        var t, o;
        if (!e || e.length <= 0)
            return {
                clearHit: false,
                hideHitIds: []
            };
        var n = this.context.getCanHitTips() || [];
        if (n.length <= 0)
            return {
                clearHit: false,
                hideHitIds: []
            };
        try {
            for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                if (this.tryClearHitTips(l))
                    return {
                        clearHit: true,
                        hideHitIds: n
                    };
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            clearHit: false,
            hideHitIds: []
        };
    };
    return Tile2HitTipsModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2HitTipsModifier = Tile2HitTipsModifier;

cc._RF.pop();
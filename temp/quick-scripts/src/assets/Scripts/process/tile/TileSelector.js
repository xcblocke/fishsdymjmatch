"use strict";
cc._RF.push(module, 'a9fe7gZF2VDdK9AXUufF+Od', 'TileSelector');
// Scripts/process/tile/TileSelector.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileSelector = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileSelector = /** @class */ (function (_super) {
    __extends(TileSelector, _super);
    function TileSelector(t) {
        return _super.call(this, t) || this;
    }
    TileSelector.prototype.getTouchSizeOffsets = function (e) {
        return e.getTouchSizeOffsets();
    };
    TileSelector.prototype.isMatch = function (e, t) {
        var o = t.getPosition(), n = t.getContentSize(), i = this.getTouchSizeOffsets(t), r = o.x - n.width / 2 - i[0], a = o.x + n.width / 2 + i[1], l = o.y - n.height / 2 - i[3], s = o.y + n.height / 2 + i[2];
        return new cc.Rect(r, l, a - r, s - l).contains(e);
    };
    TileSelector.prototype.getDistance = function (e, t) {
        var o = t.getPosition(), n = e.x - o.x, i = e.y - o.y;
        return Math.sqrt(n * n + i * i);
    };
    TileSelector.prototype.touchStart = function (e) {
        for (var t, o, n = this.context.getTileMapObject().mapLayers(), i = n.length - 1; i >= 0; i--) {
            var r = n[i].allCards;
            try {
                for (var l = (t = void 0, __values(r)), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    if (c.isValid && !c.getIsInSlotBar() && this.isMatch(e, c))
                        return c.id;
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (o = l.return) && o.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    TileSelector.prototype.checkIsLock = function (e) {
        var t = this.context.getTileMapObject(), o = this.context.getTileMapObject().getTileObject(e);
        return !!o && 0 != t.isCardLock(o);
    };
    TileSelector.prototype.getExpandMultiple = function () {
        return 1.5;
    };
    TileSelector.prototype.checkIsMatchTouchEnd = function (e, t, o) {
        if (o === void 0) { o = true; }
        var n = this.context.getTileMapObject().getTileObject(t), i = n.getPosition(), r = n.getContentSize(), a = o ? this.getExpandMultiple() : 1;
        return o ? new cc.Rect(i.x - r.width * a, i.y - r.height * a, r.width * a * 2, r.height * a * 2).contains(e) : new cc.Rect(i.x - r.width / 2, i.y - r.height / 2, r.width, r.height).contains(e);
    };
    TileSelector.prototype.touchEnd = function (e, t) {
        var o, n;
        if (t)
            for (var i = this.context.getTileMapObject().getTileObject(t), r = this.context.getTileMapObject().mapLayers(), l = r.length - 1; l >= 0; l--) {
                var s = r[l].allCards;
                try {
                    for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
                        var p = u.value;
                        if (p.isValid && p.id != i.id && p.cardId == i.cardId && !this.checkIsLock(p.id) && this.checkIsMatchTouchEnd(e, p.id))
                            return p.id;
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
            }
    };
    TileSelector.prototype.getLockTileId = function (e, t) {
        var o, n;
        if (t)
            for (var i = this.context.getTileMapObject().getTileObject(t), r = this.context.getTileMapObject().mapLayers(), l = r.length - 1; l >= 0; l--) {
                var s = r[l].allCards;
                try {
                    for (var c = (o = void 0, __values(s)), u = c.next(); !u.done; u = c.next()) {
                        var p = u.value;
                        if (p.isValid && p.id != i.id && this.checkIsLock(p.id) && this.checkIsMatchTouchEnd(e, p.id, false))
                            return p.id;
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
            }
    };
    __decorate([
        mj.traitEvent("TileSelector_isMatch")
    ], TileSelector.prototype, "isMatch", null);
    __decorate([
        mj.traitEvent("TileSelector_touchStart")
    ], TileSelector.prototype, "touchStart", null);
    __decorate([
        mj.traitEvent("TileSelector_exMultiple")
    ], TileSelector.prototype, "getExpandMultiple", null);
    return TileSelector;
}(BaseCoreObject_1.BaseCoreObject));
exports.TileSelector = TileSelector;

cc._RF.pop();
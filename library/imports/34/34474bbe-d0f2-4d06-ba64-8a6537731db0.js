"use strict";
cc._RF.push(module, '34474u+0PJNBrpkimU3cx2w', 'Tile2RollCardModifier');
// Scripts/process/tile2/Tile2RollCardModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2RollCardModifier = /** @class */ (function (_super) {
    __extends(Tile2RollCardModifier, _super);
    function Tile2RollCardModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardModifier.prototype.getRvertIgnoreIds = function () {
        var e, t, o = [], n = this._context.getTileMapObject().tileObjectMap();
        try {
            for (var i = __values(n.values()), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                l.isHasRollCard() && !l.getIsInSlotBar() && o.push(l.id);
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
        return o;
    };
    Tile2RollCardModifier.prototype.modifyRollCardDatas = function (e) {
        var t, o;
        e || (e = []);
        var n = [], i = this._context.getTileMapObject().tileObjectMap();
        try {
            for (var a = __values(i.values()), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                if (s.isHasRollCard() && !e.includes(s.id))
                    if (s.isValid) {
                        if (s.getIsBack()) {
                            if (s.getIsInSlotBar()) {
                                s.setIsBack(false);
                                n.push({
                                    tileId: s.id,
                                    frontToBack: false
                                });
                            }
                        }
                        else if (!s.getIsInSlotBar()) {
                            s.setIsBack(true);
                            n.push({
                                tileId: s.id,
                                frontToBack: true
                            });
                        }
                    }
                    else if (s.getIsBack()) {
                        s.setIsBack(false);
                        n.push({
                            tileId: s.id,
                            frontToBack: false
                        });
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
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    Tile2RollCardModifier.prototype.tryBack2FrontByTileIds = function (e) {
        var t, o, n = [];
        try {
            for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = this.tryBack2Front(l);
                s && n.push(s);
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
        return n;
    };
    Tile2RollCardModifier.prototype.tryBack2Front = function (e) {
        var t = this._context.getTileMapObject().getTileObject(e);
        if (!t)
            return null;
        if (!t.isValid)
            return null;
        if (t.getIsInSlotBar())
            return null;
        if (t.isHasRollCard() && t.getIsBack()) {
            t.setIsBack(false);
            return {
                tileId: e,
                frontToBack: false
            };
        }
        return null;
    };
    Tile2RollCardModifier.prototype.tryFront2Back = function (e) {
        var t, o, n = [];
        if (!e || 0 === e.length)
            return n;
        try {
            for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = this._context.getTileMapObject().getTileObject(l);
                if (s && s.isHasRollCard() && !s.getIsBack()) {
                    s.setIsBack(true);
                    n.push({
                        tileId: l,
                        frontToBack: false
                    });
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
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    Tile2RollCardModifier.prototype.getRollCardDatas = function (e) {
        var t, o, n = [], i = this.context.tile2RollCardChecker.getOpenRollCardTileObjectIds(), a = this.tryBack2Front(e);
        if (a) {
            n.push(a);
            try {
                for (var s = __values(i), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value;
                    if (!this.context.tile2SlotBarChecker.checkCanClearWithIds(e, u)) {
                        var p = this.tryFront2Back([u]);
                        n.push.apply(n, __spreadArrays(p));
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
                    c && !c.done && (o = s.return) && o.call(s);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        return n;
    };
    return Tile2RollCardModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2RollCardModifier;

cc._RF.pop();
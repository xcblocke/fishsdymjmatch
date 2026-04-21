"use strict";
cc._RF.push(module, '5de3dpJRtxLV6HjIM25BbsP', 'GuaranteedShuffleModifier');
// subpackages/l_guaranteedShuffle/Scripts/GuaranteedShuffleModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteedShuffleModifier = void 0;
var BaseCoreObject_1 = require("../../../Scripts/BaseCoreObject");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var LayoutSelector_1 = require("../../../Scripts/process/layout/LayoutSelector");
var GuaranteedShuffleModifier = /** @class */ (function (_super) {
    __extends(GuaranteedShuffleModifier, _super);
    function GuaranteedShuffleModifier(t) {
        var _this = _super.call(this, t) || this;
        _this._shuffleOriginalPositions = new Map();
        return _this;
    }
    GuaranteedShuffleModifier.prototype.getShuffleOriginalPositions = function () {
        return this._shuffleOriginalPositions;
    };
    GuaranteedShuffleModifier.prototype.shuffleToFixedArea = function () {
        var e, t, r, o;
        Date.now();
        this._shuffleOriginalPositions.clear();
        var i = this.collectValidTiles();
        if (0 !== i.length) {
            var n = this._context.getTileMapObject(), l = n.mapLayers(), s = new Set(i);
            try {
                for (var u = __values(l), c = u.next(); !c.done; c = u.next()) {
                    var h = c.value, p = __spreadArrays(h.allCards);
                    try {
                        for (var d = (r = void 0, __values(p)), y = d.next(); !y.done; y = d.next()) {
                            var v = y.value;
                            if (!s.has(v)) {
                                h.removeCard(v);
                                n.tileObjectMap().delete(v.id);
                            }
                        }
                    }
                    catch (e) {
                        r = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            y && !y.done && (o = d.return) && o.call(d);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (t = u.return) && t.call(u);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            this.saveShuffleOriginalData(i);
            this.shuffleFlat(i);
            this._context.getTileMapObject().updateInitGameLayer();
            this.recalculateLayoutScale();
            Date.now();
        }
    };
    GuaranteedShuffleModifier.prototype.shuffleFlat = function (e) {
        for (var t = this.groupAndSortByCardId(e), r = this._context.getTileMapObject(), o = 0, i = 0; i < t.length; i++) {
            var a = t[i], n = Math.floor(i / 16);
            n > o && (o = n);
            var f = 0;
            i % 4 >= 2 && (f = 1);
            var l = 2 * (i % 4 + f), u = 2 * Math.floor(i % 16 / 4);
            r.moveTileToPosition(a, l, u, n);
        }
        this._context.gameType == GameTypeEnums_1.MjGameType.Classic && this._context.getTileMapObject().applyCenterOffsetToAllTiles();
    };
    GuaranteedShuffleModifier.prototype.groupAndSortByCardId = function (e) {
        var t, r, o, i, n = new Map();
        try {
            for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
                var u = s.value, c = u.cardId;
                n.has(c) || n.set(c, []);
                n.get(c).push(u);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (r = l.return) && r.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var h = [];
        try {
            for (var p = __values(n.values()), d = p.next(); !d.done; d = p.next()) {
                var y = d.value;
                h.push.apply(h, __spreadArrays(y));
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (i = p.return) && i.call(p);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return h;
    };
    GuaranteedShuffleModifier.prototype.collectValidTiles = function () {
        return this._context.getTileMapObject().aliveTiles();
    };
    GuaranteedShuffleModifier.prototype.saveShuffleOriginalData = function (e) {
        var t, r;
        try {
            for (var o = __values(e), i = o.next(); !i.done; i = o.next()) {
                var n = i.value, f = n.getPosition();
                this._shuffleOriginalPositions.set(n, f);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (r = o.return) && r.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    GuaranteedShuffleModifier.prototype.recalculateLayoutScale = function () {
        var e = this._context.getContentSize(), t = new LayoutSelector_1.LayoutSelector(this._context).chooseLayout({
            contentSize: new cc.Size(e.width, e.height)
        });
        this._context.getLayoutScale();
        this._context.gameType != GameTypeEnums_1.MjGameType.Classic && this._context.setLayoutScale(t.scale);
        this.context.getTileMapObject().updatePositonOffset();
    };
    return GuaranteedShuffleModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.GuaranteedShuffleModifier = GuaranteedShuffleModifier;

cc._RF.pop();
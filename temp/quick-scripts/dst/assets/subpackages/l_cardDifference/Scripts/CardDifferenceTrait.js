
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardDifference/Scripts/CardDifferenceTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37560O5FGJKCrY8H72Hv/yc', 'CardDifferenceTrait');
// subpackages/l_cardDifference/Scripts/CardDifferenceTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TileMapObject_1 = require("../../../Scripts/objects/TileMapObject");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var c;
(function (c) {
    c[c["FullyVisible"] = 1] = "FullyVisible";
    c[c["PartiallyVisible"] = 2] = "PartiallyVisible";
    c[c["Selectable"] = 3] = "Selectable";
    c[c["NotVisible"] = 4] = "NotVisible";
})(c || (c = {}));
var v = /** @class */ (function () {
    function v(t) {
        this.dict = new Map();
        this._cardIdSet = new Set();
        var e = this;
        t.forEach(function (t) {
            e._cardIdSet.add(t.CardId1);
            var r = Math.min(t.CardId1, t.CardId2) + "_" + Math.max(t.CardId1, t.CardId2);
            e.dict.set(r, t.Difference);
        });
    }
    v.prototype.hasCard = function (t) {
        return this._cardIdSet.has(t);
    };
    v.prototype.get = function (t, e) {
        if (t === e)
            return 0;
        var r = Math.min(t, e) + "_" + Math.max(t, e), i = this.dict.get(r);
        return void 0 !== i ? i : 50;
    };
    return v;
}());
var CardDifferenceTrait = /** @class */ (function (_super) {
    __extends(CardDifferenceTrait, _super);
    function CardDifferenceTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._differenceLookup = null;
        _this._history = [];
        return _this;
    }
    CardDifferenceTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this.localData.history || (this.localData.history = []);
        var i = this._traitData.config || {};
        this._config = {
            C: i.C || 20,
            allowSimilar: i.allowSimilar || false,
            isRandom: i.isRandom || false,
            restartChange: null !== (e = i.restartChange) && void 0 !== e && e,
            isSimilarLow: null === (r = i.isSimilarLow) || void 0 === r || r
        };
        this.loadDifferenceConfig();
    };
    CardDifferenceTrait.prototype.loadDifferenceConfig = function () {
        var t = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.card_difference2);
        t && t.length > 0 && (this._differenceLookup = new v(t));
    };
    CardDifferenceTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
        if (this.checkGameMode()) {
            if (this._differenceLookup) {
                var r = t.ins, i = t.args[0].levelData;
                if (i.isNewGame) {
                    if (!i.isRestart || this._config.restartChange) {
                        var a = i.levelId;
                        if (ExtractTool_1.default.getInstance().isHardLevel(a))
                            e();
                        else if (ExtractTool_1.default.getInstance().isFixedLevel(a))
                            e();
                        else {
                            this.changeBoard(r.tileMapObject, r.gameContext, a);
                            e();
                        }
                    }
                    else
                        e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    CardDifferenceTrait.prototype.changeBoard = function (t, e, r) {
        var i = t.mapLayers();
        if (i && 0 !== i.length) {
            var a = this.collectOriginalCardIds(i), n = a.size;
            if (!(n <= 0)) {
                var o = this.buildCandidateCardIdSet(e, r);
                o.size < n && a.forEach(function (t) {
                    return o.add(t);
                });
                var l, s = this.computeFamiliarity(o), c = this.classifyFacesByCardId(i), f = this.countLayerCardsByCardId(c);
                l = this._config.isRandom ? this.pickRandomFaces(o, n) : this.pickFacesByStrategy(o, n, this._config.C, this._config.allowSimilar, s);
                this.applyLayeredFaceDistributionByCardId(t, e, i, l, c, f);
                this.printLevelDiffLog(l);
                this.updateRecentHistory(l);
            }
        }
    };
    CardDifferenceTrait.prototype.collectOriginalCardIds = function (t) {
        var e = new Set();
        t.forEach(function (t) {
            t.allCards.forEach(function (t) {
                t.type === TileTypeEnum_1.ETileType.Normal && e.add(t.cardId);
            });
        });
        return e;
    };
    CardDifferenceTrait.prototype.buildCandidateCardIdSet = function (t, e) {
        var r = this, i = t.getCardConfigMap(), a = new Set();
        i.forEach(function (t) {
            var i = t.cardId;
            TileMapObject_1.TileMapObject.isSpecialCardId(i) || 35 === i && e < 4 || 36 === i && e < 6 || r._differenceLookup.hasCard(i) && a.add(i);
        });
        return a;
    };
    CardDifferenceTrait.prototype.computeFamiliarity = function (t) {
        this._history = this.loadRecentHistory();
        var e = new Map();
        t.forEach(function (t) {
            return e.set(t, 0);
        });
        for (var r = function r(t) {
            var r = Math.pow(0.8, t);
            i._history[t].forEach(function (t) {
                e.has(t) && e.set(t, e.get(t) + r);
            });
        }, i = this, a = 0; a < this._history.length; a++)
            r(a);
        return e;
    };
    CardDifferenceTrait.prototype.loadRecentHistory = function () {
        var t = this.localData.history;
        return t && Array.isArray(t) ? t : [];
    };
    CardDifferenceTrait.prototype.updateRecentHistory = function (t) {
        var e = this._history;
        e.unshift(t);
        for (; e.length > 5;)
            e.pop();
        this.localData.history = e;
    };
    CardDifferenceTrait.prototype.classifyFacesByCardId = function (t) {
        var e = this, r = [];
        t.forEach(function (t) {
            t.allCards.forEach(function (t) {
                if (t.type === TileTypeEnum_1.ETileType.Normal) {
                    var i = e.getVisibilityType(t);
                    r.push({
                        cardId: t.cardId,
                        visibilityType: i,
                        tileObject: t
                    });
                }
            });
        });
        return r;
    };
    CardDifferenceTrait.prototype.getVisibilityType = function (t) {
        var e = t.tileMapObject, r = 0 !== e.isCardLock(t), i = e.isHasCover(t);
        return i || r ? !i && r ? c.FullyVisible : i && this.isPartiallyVisible(t) ? c.PartiallyVisible : c.NotVisible : c.Selectable;
    };
    CardDifferenceTrait.prototype.isPartiallyVisible = function (t) {
        var e, r, i = t.tileMapObject, a = t.layer + 1;
        if (a >= i.mapLayers().length)
            return true;
        var n = 0;
        try {
            for (var l = __values(t.ownerGridIds), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                i.isHasCard(a, c) && n++;
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (r = l.return) && r.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return n < 4;
    };
    CardDifferenceTrait.prototype.countLayerCardsByCardId = function (t) {
        var e = new Map();
        t.forEach(function (t) {
            var r = t.cardId;
            e.has(r) || e.set(r, []);
            e.get(r).push(t.visibilityType);
        });
        var r = 0, i = 0, a = 0;
        e.forEach(function (t) {
            var e = t.includes(c.FullyVisible), n = t.includes(c.Selectable), o = t.includes(c.PartiallyVisible);
            if (e || n) {
                r++;
            }
            else {
                if (o) {
                    i++;
                }
                else {
                    a++;
                }
            }
        });
        return {
            N1: r,
            N2: i,
            N3: a
        };
    };
    CardDifferenceTrait.prototype.pickRandomFaces = function (t, e) {
        var r = Array.from(t);
        this.shuffle(r);
        return r.slice(0, e);
    };
    CardDifferenceTrait.prototype.pickFacesByStrategy = function (t, e, r, i, a) {
        var n = this, l = this.selectFirstCardByFamiliarity(a, t), s = [l], c = new Set(t);
        c.delete(l);
        for (var f = [], u = false, d = function d() {
            var t, a, l, d, p, y, v, g, b = -1, _ = -Infinity;
            try {
                for (var m = (t = void 0, __values(c)), C = m.next(); !C.done; C = m.next()) {
                    var I = C.value, M = 0;
                    try {
                        for (var w = (l = void 0, __values(s)), T = w.next(); !T.done; T = w.next()) {
                            var x = T.value;
                            M += h._differenceLookup.get(x, I);
                        }
                    }
                    catch (t) {
                        l = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            T && !T.done && (d = w.return) && d.call(w);
                        }
                        finally {
                            if (l)
                                throw l.error;
                        }
                    }
                    if (M > _) {
                        _ = M;
                        b = I;
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
                    C && !C.done && (a = m.return) && a.call(m);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            if (!i && s.length < e && s.some(function (t) {
                return n._differenceLookup.get(t, b) <= r;
            })) {
                c.delete(b);
                f.push(b);
                return "continue";
            }
            if (i && s.length === e - 1) {
                for (var S = false, N = 0; N < s.length && !S; N++)
                    for (var E = N + 1; E < s.length && !S; E++)
                        S = h._differenceLookup.get(s[N], s[E]) <= r;
                if (!S) {
                    var L = -1, F = Infinity;
                    try {
                        for (var D = (p = void 0, __values(c)), O = D.next(); !O.done; O = D.next()) {
                            I = O.value;
                            var R = Infinity;
                            try {
                                for (var V = (v = void 0, __values(s)), j = V.next(); !j.done; j = V.next()) {
                                    x = j.value;
                                    R = Math.min(R, h._differenceLookup.get(x, I));
                                }
                            }
                            catch (t) {
                                v = {
                                    error: t
                                };
                            }
                            finally {
                                try {
                                    j && !j.done && (g = V.return) && g.call(V);
                                }
                                finally {
                                    if (v)
                                        throw v.error;
                                }
                            }
                            if (R < F) {
                                F = R;
                                L = I;
                            }
                        }
                    }
                    catch (t) {
                        p = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            O && !O.done && (y = D.return) && y.call(D);
                        }
                        finally {
                            if (p)
                                throw p.error;
                        }
                    }
                    b = L;
                    u = true;
                }
            }
            if (-1 === b) {
                var P = Array.from(c);
                b = P[Math.floor(Math.random() * P.length)];
            }
            s.push(b);
            c.delete(b);
        }, h = this; s.length < e && c.size > 0;)
            d();
        if (s.length < e && f.length > 0)
            for (var p = e - s.length, y = 0; y < p; y++) {
                var v = Math.floor(Math.random() * f.length), g = f[v];
                s.push(g);
                f.splice(v, 1);
            }
        if (u && s.length > 1) {
            var b = s[s.length - 1];
            s.pop();
            var _ = Math.floor(Math.random() * (s.length + 1));
            s.splice(_, 0, b);
        }
        return s.length > e ? s.slice(0, e) : s;
    };
    CardDifferenceTrait.prototype.selectFirstCardByFamiliarity = function (t, e) {
        var r, i, a = this._config.isSimilarLow, n = a ? Infinity : -Infinity, l = [];
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var f = c.value, u = t.get(f) || 0;
                if (a) {
                    if (u < n) {
                        n = u;
                        l.length = 0;
                        l.push(f);
                    }
                    else
                        Math.abs(u - n) < 0.0001 && l.push(f);
                }
                else if (u > n) {
                    n = u;
                    l.length = 0;
                    l.push(f);
                }
                else
                    Math.abs(u - n) < 0.0001 && l.push(f);
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (i = s.return) && i.call(s);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return 0 === l.length ? Array.from(e)[0] : l[Math.floor(Math.random() * l.length)];
    };
    CardDifferenceTrait.prototype.applyLayeredFaceDistributionByCardId = function (t, e, r, i, a, n) {
        var o = this.collectPrioritizedCardIds(a, n), l = this.buildOldToNewMapping(o, i, n);
        this.applyCardIdMappingToResId(t, e, r, l);
    };
    CardDifferenceTrait.prototype.collectPrioritizedCardIds = function (t) {
        var e = new Map();
        t.forEach(function (t) {
            var r = t.cardId;
            e.has(r) || e.set(r, []);
            e.get(r).push(t.visibilityType);
        });
        var r = [], i = [];
        e.forEach(function (t, e) {
            (t.includes(c.FullyVisible) || t.includes(c.Selectable)) && i.push(e);
        });
        r.push.apply(r, __spreadArrays(i));
        var a = [];
        e.forEach(function (t, e) {
            !t.includes(c.PartiallyVisible) || t.includes(c.Selectable) || t.includes(c.FullyVisible) || a.push(e);
        });
        r.push.apply(r, __spreadArrays(a));
        var n = [];
        e.forEach(function (t, e) {
            t.includes(c.FullyVisible) || t.includes(c.PartiallyVisible) || t.includes(c.Selectable) || n.push(e);
        });
        r.push.apply(r, __spreadArrays(n));
        return r;
    };
    CardDifferenceTrait.prototype.applyCardIdMappingToResId = function (t, e, r, i) {
        var a = e.getCardConfigMap(), n = new Map();
        a.forEach(function (t) {
            var e = t.cardId, r = t.id;
            n.has(e) || n.set(e, []);
            n.get(e).push(r);
        });
        r.forEach(function (e) {
            e.allCards.forEach(function (e) {
                var r = e.cardId, a = i.get(r);
                if (void 0 !== a && a !== r) {
                    var o = n.get(a);
                    if (o && o.length > 0) {
                        var l = o[Math.floor(Math.random() * o.length)];
                        t.changeTileResId(e.id, l);
                    }
                }
            });
        });
    };
    CardDifferenceTrait.prototype.buildOldToNewMapping = function (t, e, r) {
        var i = new Map(), a = 0;
        if (r.N1 > 0 && a + r.N1 <= t.length) {
            var n = t.slice(a, a + r.N1), o = e.slice(a, a + r.N1);
            this.shuffle(n);
            this.shuffle(o);
            for (var l = 0; l < r.N1; l++)
                i.set(n[l], o[l]);
            a += r.N1;
        }
        if (r.N2 > 0 && a + r.N2 <= t.length) {
            var s = t.slice(a, a + r.N2), c = e.slice(a, a + r.N2);
            this.shuffle(s);
            this.shuffle(c);
            for (l = 0; l < r.N2; l++)
                i.set(s[l], c[l]);
            a += r.N2;
        }
        if (r.N3 > 0 && a + r.N3 <= t.length) {
            var f = t.slice(a, a + r.N3), u = e.slice(a, a + r.N3);
            this.shuffle(f);
            this.shuffle(u);
            for (l = 0; l < r.N3; l++)
                i.set(f[l], u[l]);
        }
        return i;
    };
    CardDifferenceTrait.prototype.printLevelDiffLog = function (t) {
        for (var e = Infinity, r = 0; r < t.length; r++)
            for (var i = r + 1; i < t.length; i++) {
                var a = this._differenceLookup.get(t[r], t[i]);
                e = Math.min(e, a);
            }
        Infinity === e && (e = 0);
    };
    CardDifferenceTrait.prototype.shuffle = function (t) {
        for (var e, r = t.length - 1; r > 0; r--) {
            var i = Math.floor(Math.random() * (r + 1));
            e = __read([t[i], t[r]], 2), t[r] = e[0], t[i] = e[1];
        }
    };
    CardDifferenceTrait.traitKey = "CardDifference";
    CardDifferenceTrait = __decorate([
        mj.trait,
        mj.class("CardDifferenceTrait")
    ], CardDifferenceTrait);
    return CardDifferenceTrait;
}(ExtractTrait_1.default));
exports.default = CardDifferenceTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmREaWZmZXJlbmNlL1NjcmlwdHMvQ2FyZERpZmZlcmVuY2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELHdFQUF1RTtBQUN2RSxpRkFBNEU7QUFDNUUsaUZBQTZFO0FBQzdFLHlFQUF3RTtBQUN4RSw2RUFBNEU7QUFDNUUsSUFBSyxDQUtKO0FBTEQsV0FBSyxDQUFDO0lBQ0oseUNBQWdCLENBQUE7SUFDaEIsaURBQW9CLENBQUE7SUFDcEIscUNBQWMsQ0FBQTtJQUNkLHFDQUFjLENBQUE7QUFDaEIsQ0FBQyxFQUxJLENBQUMsS0FBRCxDQUFDLFFBS0w7QUFDRDtJQUdFLFdBQVksQ0FBQztRQUZiLFNBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbUJBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBUaWxlTWFwT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9vYmplY3RzL1RpbGVNYXBPYmplY3QnO1xuaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuZW51bSBjIHtcbiAgRnVsbHlWaXNpYmxlID0gMSxcbiAgUGFydGlhbGx5VmlzaWJsZSA9IDIsXG4gIFNlbGVjdGFibGUgPSAzLFxuICBOb3RWaXNpYmxlID0gNCxcbn1cbmNsYXNzIHYge1xuICBkaWN0ID0gbmV3IE1hcCgpO1xuICBfY2FyZElkU2V0ID0gbmV3IFNldCgpO1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgZS5fY2FyZElkU2V0LmFkZCh0LkNhcmRJZDEpO1xuICAgICAgdmFyIHIgPSBNYXRoLm1pbih0LkNhcmRJZDEsIHQuQ2FyZElkMikgKyBcIl9cIiArIE1hdGgubWF4KHQuQ2FyZElkMSwgdC5DYXJkSWQyKTtcbiAgICAgIGUuZGljdC5zZXQociwgdC5EaWZmZXJlbmNlKTtcbiAgICB9KTtcbiAgfVxuICBoYXNDYXJkKHQpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZElkU2V0Lmhhcyh0KTtcbiAgfVxuICBnZXQodCwgZSkge1xuICAgIGlmICh0ID09PSBlKSByZXR1cm4gMDtcbiAgICB2YXIgciA9IE1hdGgubWluKHQsIGUpICsgXCJfXCIgKyBNYXRoLm1heCh0LCBlKSxcbiAgICAgIGkgPSB0aGlzLmRpY3QuZ2V0KHIpO1xuICAgIHJldHVybiB2b2lkIDAgIT09IGkgPyBpIDogNTA7XG4gIH1cbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2FyZERpZmZlcmVuY2VUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZERpZmZlcmVuY2VUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIF9kaWZmZXJlbmNlTG9va3VwID0gbnVsbDtcbiAgX2hpc3RvcnkgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDYXJkRGlmZmVyZW5jZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5sb2NhbERhdGEuaGlzdG9yeSB8fCAodGhpcy5sb2NhbERhdGEuaGlzdG9yeSA9IFtdKTtcbiAgICB2YXIgaSA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWcgfHwge307XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgQzogaS5DIHx8IDIwLFxuICAgICAgYWxsb3dTaW1pbGFyOiBpLmFsbG93U2ltaWxhciB8fCBmYWxzZSxcbiAgICAgIGlzUmFuZG9tOiBpLmlzUmFuZG9tIHx8IGZhbHNlLFxuICAgICAgcmVzdGFydENoYW5nZTogbnVsbCAhPT0gKGUgPSBpLnJlc3RhcnRDaGFuZ2UpICYmIHZvaWQgMCAhPT0gZSAmJiBlLFxuICAgICAgaXNTaW1pbGFyTG93OiBudWxsID09PSAociA9IGkuaXNTaW1pbGFyTG93KSB8fCB2b2lkIDAgPT09IHIgfHwgclxuICAgIH07XG4gICAgdGhpcy5sb2FkRGlmZmVyZW5jZUNvbmZpZygpO1xuICB9XG4gIGxvYWREaWZmZXJlbmNlQ29uZmlnKCkge1xuICAgIHZhciB0ID0gRGF0YVJlYWRlci5nZXRMaXN0KENvbmZpZ1R5cGUuY2FyZF9kaWZmZXJlbmNlMik7XG4gICAgdCAmJiB0Lmxlbmd0aCA+IDAgJiYgKHRoaXMuX2RpZmZlcmVuY2VMb29rdXAgPSBuZXcgdih0KSk7XG4gIH1cbiAgb25JcHRTZXRMdl9yZUdlbkZhY2VzKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGlmICh0aGlzLl9kaWZmZXJlbmNlTG9va3VwKSB7XG4gICAgICAgIHZhciByID0gdC5pbnMsXG4gICAgICAgICAgaSA9IHQuYXJnc1swXS5sZXZlbERhdGE7XG4gICAgICAgIGlmIChpLmlzTmV3R2FtZSkge1xuICAgICAgICAgIGlmICghaS5pc1Jlc3RhcnQgfHwgdGhpcy5fY29uZmlnLnJlc3RhcnRDaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBhID0gaS5sZXZlbElkO1xuICAgICAgICAgICAgaWYgKEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNIYXJkTGV2ZWwoYSkpIGUoKTtlbHNlIGlmIChFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzRml4ZWRMZXZlbChhKSkgZSgpO2Vsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZUJvYXJkKHIudGlsZU1hcE9iamVjdCwgci5nYW1lQ29udGV4dCwgYSk7XG4gICAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgZSgpO1xuICAgICAgICB9IGVsc2UgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGNoYW5nZUJvYXJkKHQsIGUsIHIpIHtcbiAgICB2YXIgaSA9IHQubWFwTGF5ZXJzKCk7XG4gICAgaWYgKGkgJiYgMCAhPT0gaS5sZW5ndGgpIHtcbiAgICAgIHZhciBhID0gdGhpcy5jb2xsZWN0T3JpZ2luYWxDYXJkSWRzKGkpLFxuICAgICAgICBuID0gYS5zaXplO1xuICAgICAgaWYgKCEobiA8PSAwKSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuYnVpbGRDYW5kaWRhdGVDYXJkSWRTZXQoZSwgcik7XG4gICAgICAgIG8uc2l6ZSA8IG4gJiYgYS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIG8uYWRkKHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGwsXG4gICAgICAgICAgcyA9IHRoaXMuY29tcHV0ZUZhbWlsaWFyaXR5KG8pLFxuICAgICAgICAgIGMgPSB0aGlzLmNsYXNzaWZ5RmFjZXNCeUNhcmRJZChpKSxcbiAgICAgICAgICBmID0gdGhpcy5jb3VudExheWVyQ2FyZHNCeUNhcmRJZChjKTtcbiAgICAgICAgbCA9IHRoaXMuX2NvbmZpZy5pc1JhbmRvbSA/IHRoaXMucGlja1JhbmRvbUZhY2VzKG8sIG4pIDogdGhpcy5waWNrRmFjZXNCeVN0cmF0ZWd5KG8sIG4sIHRoaXMuX2NvbmZpZy5DLCB0aGlzLl9jb25maWcuYWxsb3dTaW1pbGFyLCBzKTtcbiAgICAgICAgdGhpcy5hcHBseUxheWVyZWRGYWNlRGlzdHJpYnV0aW9uQnlDYXJkSWQodCwgZSwgaSwgbCwgYywgZik7XG4gICAgICAgIHRoaXMucHJpbnRMZXZlbERpZmZMb2cobCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVjZW50SGlzdG9yeShsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29sbGVjdE9yaWdpbmFsQ2FyZElkcyh0KSB7XG4gICAgdmFyIGUgPSBuZXcgU2V0KCk7XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB0LmFsbENhcmRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdC50eXBlID09PSBFVGlsZVR5cGUuTm9ybWFsICYmIGUuYWRkKHQuY2FyZElkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGJ1aWxkQ2FuZGlkYXRlQ2FyZElkU2V0KHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMsXG4gICAgICBpID0gdC5nZXRDYXJkQ29uZmlnTWFwKCksXG4gICAgICBhID0gbmV3IFNldCgpO1xuICAgIGkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIGkgPSB0LmNhcmRJZDtcbiAgICAgIFRpbGVNYXBPYmplY3QuaXNTcGVjaWFsQ2FyZElkKGkpIHx8IDM1ID09PSBpICYmIGUgPCA0IHx8IDM2ID09PSBpICYmIGUgPCA2IHx8IHIuX2RpZmZlcmVuY2VMb29rdXAuaGFzQ2FyZChpKSAmJiBhLmFkZChpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBjb21wdXRlRmFtaWxpYXJpdHkodCkge1xuICAgIHRoaXMuX2hpc3RvcnkgPSB0aGlzLmxvYWRSZWNlbnRIaXN0b3J5KCk7XG4gICAgdmFyIGUgPSBuZXcgTWFwKCk7XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gZS5zZXQodCwgMCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgciA9IGZ1bmN0aW9uIHIodCkge1xuICAgICAgICB2YXIgciA9IE1hdGgucG93KDAuOCwgdCk7XG4gICAgICAgIGkuX2hpc3RvcnlbdF0uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGUuaGFzKHQpICYmIGUuc2V0KHQsIGUuZ2V0KHQpICsgcik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgaSA9IHRoaXMsIGEgPSAwOyBhIDwgdGhpcy5faGlzdG9yeS5sZW5ndGg7IGErKykgcihhKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBsb2FkUmVjZW50SGlzdG9yeSgpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLmhpc3Rvcnk7XG4gICAgcmV0dXJuIHQgJiYgQXJyYXkuaXNBcnJheSh0KSA/IHQgOiBbXTtcbiAgfVxuICB1cGRhdGVSZWNlbnRIaXN0b3J5KHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2hpc3Rvcnk7XG4gICAgZS51bnNoaWZ0KHQpO1xuICAgIGZvciAoOyBlLmxlbmd0aCA+IDU7KSBlLnBvcCgpO1xuICAgIHRoaXMubG9jYWxEYXRhLmhpc3RvcnkgPSBlO1xuICB9XG4gIGNsYXNzaWZ5RmFjZXNCeUNhcmRJZCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgciA9IFtdO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5hbGxDYXJkcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0LnR5cGUgPT09IEVUaWxlVHlwZS5Ob3JtYWwpIHtcbiAgICAgICAgICB2YXIgaSA9IGUuZ2V0VmlzaWJpbGl0eVR5cGUodCk7XG4gICAgICAgICAgci5wdXNoKHtcbiAgICAgICAgICAgIGNhcmRJZDogdC5jYXJkSWQsXG4gICAgICAgICAgICB2aXNpYmlsaXR5VHlwZTogaSxcbiAgICAgICAgICAgIHRpbGVPYmplY3Q6IHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZ2V0VmlzaWJpbGl0eVR5cGUodCkge1xuICAgIHZhciBlID0gdC50aWxlTWFwT2JqZWN0LFxuICAgICAgciA9IDAgIT09IGUuaXNDYXJkTG9jayh0KSxcbiAgICAgIGkgPSBlLmlzSGFzQ292ZXIodCk7XG4gICAgcmV0dXJuIGkgfHwgciA/ICFpICYmIHIgPyBjLkZ1bGx5VmlzaWJsZSA6IGkgJiYgdGhpcy5pc1BhcnRpYWxseVZpc2libGUodCkgPyBjLlBhcnRpYWxseVZpc2libGUgOiBjLk5vdFZpc2libGUgOiBjLlNlbGVjdGFibGU7XG4gIH1cbiAgaXNQYXJ0aWFsbHlWaXNpYmxlKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBpID0gdC50aWxlTWFwT2JqZWN0LFxuICAgICAgYSA9IHQubGF5ZXIgKyAxO1xuICAgIGlmIChhID49IGkubWFwTGF5ZXJzKCkubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyh0Lm93bmVyR3JpZElkcyksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gcy52YWx1ZTtcbiAgICAgICAgaS5pc0hhc0NhcmQoYSwgYykgJiYgbisrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKHIgPSBsLnJldHVybikgJiYgci5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuIDwgNDtcbiAgfVxuICBjb3VudExheWVyQ2FyZHNCeUNhcmRJZCh0KSB7XG4gICAgdmFyIGUgPSBuZXcgTWFwKCk7XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgciA9IHQuY2FyZElkO1xuICAgICAgZS5oYXMocikgfHwgZS5zZXQociwgW10pO1xuICAgICAgZS5nZXQocikucHVzaCh0LnZpc2liaWxpdHlUeXBlKTtcbiAgICB9KTtcbiAgICB2YXIgciA9IDAsXG4gICAgICBpID0gMCxcbiAgICAgIGEgPSAwO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIGUgPSB0LmluY2x1ZGVzKGMuRnVsbHlWaXNpYmxlKSxcbiAgICAgICAgbiA9IHQuaW5jbHVkZXMoYy5TZWxlY3RhYmxlKSxcbiAgICAgICAgbyA9IHQuaW5jbHVkZXMoYy5QYXJ0aWFsbHlWaXNpYmxlKTtcbiAgICAgIGlmIChlIHx8IG4pIHtcbiAgICAgICAgcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE4xOiByLFxuICAgICAgTjI6IGksXG4gICAgICBOMzogYVxuICAgIH07XG4gIH1cbiAgcGlja1JhbmRvbUZhY2VzKHQsIGUpIHtcbiAgICB2YXIgciA9IEFycmF5LmZyb20odCk7XG4gICAgdGhpcy5zaHVmZmxlKHIpO1xuICAgIHJldHVybiByLnNsaWNlKDAsIGUpO1xuICB9XG4gIHBpY2tGYWNlc0J5U3RyYXRlZ3kodCwgZSwgciwgaSwgYSkge1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgIGwgPSB0aGlzLnNlbGVjdEZpcnN0Q2FyZEJ5RmFtaWxpYXJpdHkoYSwgdCksXG4gICAgICBzID0gW2xdLFxuICAgICAgYyA9IG5ldyBTZXQodCk7XG4gICAgYy5kZWxldGUobCk7XG4gICAgZm9yICh2YXIgZiA9IFtdLCB1ID0gZmFsc2UsIGQgPSBmdW5jdGlvbiBkKCkge1xuICAgICAgICB2YXIgdCxcbiAgICAgICAgICBhLFxuICAgICAgICAgIGwsXG4gICAgICAgICAgZCxcbiAgICAgICAgICBwLFxuICAgICAgICAgIHksXG4gICAgICAgICAgdixcbiAgICAgICAgICBnLFxuICAgICAgICAgIGIgPSAtMSxcbiAgICAgICAgICBfID0gLUluZmluaXR5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIG0gPSAodCA9IHZvaWQgMCwgX192YWx1ZXMoYykpLCBDID0gbS5uZXh0KCk7ICFDLmRvbmU7IEMgPSBtLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIEkgPSBDLnZhbHVlLFxuICAgICAgICAgICAgICBNID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHcgPSAobCA9IHZvaWQgMCwgX192YWx1ZXMocykpLCBUID0gdy5uZXh0KCk7ICFULmRvbmU7IFQgPSB3Lm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciB4ID0gVC52YWx1ZTtcbiAgICAgICAgICAgICAgICBNICs9IGguX2RpZmZlcmVuY2VMb29rdXAuZ2V0KHgsIEkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgIGwgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgVCAmJiAhVC5kb25lICYmIChkID0gdy5yZXR1cm4pICYmIGQuY2FsbCh3KTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE0gPiBfKSB7XG4gICAgICAgICAgICAgIF8gPSBNO1xuICAgICAgICAgICAgICBiID0gSTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBDICYmICFDLmRvbmUgJiYgKGEgPSBtLnJldHVybikgJiYgYS5jYWxsKG0pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpICYmIHMubGVuZ3RoIDwgZSAmJiBzLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gbi5fZGlmZmVyZW5jZUxvb2t1cC5nZXQodCwgYikgPD0gcjtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBjLmRlbGV0ZShiKTtcbiAgICAgICAgICBmLnB1c2goYik7XG4gICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSAmJiBzLmxlbmd0aCA9PT0gZSAtIDEpIHtcbiAgICAgICAgICBmb3IgKHZhciBTID0gZmFsc2UsIE4gPSAwOyBOIDwgcy5sZW5ndGggJiYgIVM7IE4rKykgZm9yICh2YXIgRSA9IE4gKyAxOyBFIDwgcy5sZW5ndGggJiYgIVM7IEUrKykgUyA9IGguX2RpZmZlcmVuY2VMb29rdXAuZ2V0KHNbTl0sIHNbRV0pIDw9IHI7XG4gICAgICAgICAgaWYgKCFTKSB7XG4gICAgICAgICAgICB2YXIgTCA9IC0xLFxuICAgICAgICAgICAgICBGID0gSW5maW5pdHk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBEID0gKHAgPSB2b2lkIDAsIF9fdmFsdWVzKGMpKSwgTyA9IEQubmV4dCgpOyAhTy5kb25lOyBPID0gRC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBJID0gTy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgUiA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBWID0gKHYgPSB2b2lkIDAsIF9fdmFsdWVzKHMpKSwgaiA9IFYubmV4dCgpOyAhai5kb25lOyBqID0gVi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGoudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIFIgPSBNYXRoLm1pbihSLCBoLl9kaWZmZXJlbmNlTG9va3VwLmdldCh4LCBJKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgICAgdiA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGogJiYgIWouZG9uZSAmJiAoZyA9IFYucmV0dXJuKSAmJiBnLmNhbGwoVik7XG4gICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodikgdGhyb3cgdi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFIgPCBGKSB7XG4gICAgICAgICAgICAgICAgICBGID0gUjtcbiAgICAgICAgICAgICAgICAgIEwgPSBJO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICBwID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIE8gJiYgIU8uZG9uZSAmJiAoeSA9IEQucmV0dXJuKSAmJiB5LmNhbGwoRCk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHApIHRocm93IHAuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGIgPSBMO1xuICAgICAgICAgICAgdSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgtMSA9PT0gYikge1xuICAgICAgICAgIHZhciBQID0gQXJyYXkuZnJvbShjKTtcbiAgICAgICAgICBiID0gUFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBQLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIHMucHVzaChiKTtcbiAgICAgICAgYy5kZWxldGUoYik7XG4gICAgICB9LCBoID0gdGhpczsgcy5sZW5ndGggPCBlICYmIGMuc2l6ZSA+IDA7KSBkKCk7XG4gICAgaWYgKHMubGVuZ3RoIDwgZSAmJiBmLmxlbmd0aCA+IDApIGZvciAodmFyIHAgPSBlIC0gcy5sZW5ndGgsIHkgPSAwOyB5IDwgcDsgeSsrKSB7XG4gICAgICB2YXIgdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGYubGVuZ3RoKSxcbiAgICAgICAgZyA9IGZbdl07XG4gICAgICBzLnB1c2goZyk7XG4gICAgICBmLnNwbGljZSh2LCAxKTtcbiAgICB9XG4gICAgaWYgKHUgJiYgcy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgYiA9IHNbcy5sZW5ndGggLSAxXTtcbiAgICAgIHMucG9wKCk7XG4gICAgICB2YXIgXyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChzLmxlbmd0aCArIDEpKTtcbiAgICAgIHMuc3BsaWNlKF8sIDAsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gcy5sZW5ndGggPiBlID8gcy5zbGljZSgwLCBlKSA6IHM7XG4gIH1cbiAgc2VsZWN0Rmlyc3RDYXJkQnlGYW1pbGlhcml0eSh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBpLFxuICAgICAgYSA9IHRoaXMuX2NvbmZpZy5pc1NpbWlsYXJMb3csXG4gICAgICBuID0gYSA/IEluZmluaXR5IDogLUluZmluaXR5LFxuICAgICAgbCA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBzID0gX192YWx1ZXMoZSksIGMgPSBzLm5leHQoKTsgIWMuZG9uZTsgYyA9IHMubmV4dCgpKSB7XG4gICAgICAgIHZhciBmID0gYy52YWx1ZSxcbiAgICAgICAgICB1ID0gdC5nZXQoZikgfHwgMDtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICBpZiAodSA8IG4pIHtcbiAgICAgICAgICAgIG4gPSB1O1xuICAgICAgICAgICAgbC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgbC5wdXNoKGYpO1xuICAgICAgICAgIH0gZWxzZSBNYXRoLmFicyh1IC0gbikgPCAwLjAwMDEgJiYgbC5wdXNoKGYpO1xuICAgICAgICB9IGVsc2UgaWYgKHUgPiBuKSB7XG4gICAgICAgICAgbiA9IHU7XG4gICAgICAgICAgbC5sZW5ndGggPSAwO1xuICAgICAgICAgIGwucHVzaChmKTtcbiAgICAgICAgfSBlbHNlIE1hdGguYWJzKHUgLSBuKSA8IDAuMDAwMSAmJiBsLnB1c2goZik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAoaSA9IHMucmV0dXJuKSAmJiBpLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDAgPT09IGwubGVuZ3RoID8gQXJyYXkuZnJvbShlKVswXSA6IGxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbC5sZW5ndGgpXTtcbiAgfVxuICBhcHBseUxheWVyZWRGYWNlRGlzdHJpYnV0aW9uQnlDYXJkSWQodCwgZSwgciwgaSwgYSwgbikge1xuICAgIHZhciBvID0gdGhpcy5jb2xsZWN0UHJpb3JpdGl6ZWRDYXJkSWRzKGEsIG4pLFxuICAgICAgbCA9IHRoaXMuYnVpbGRPbGRUb05ld01hcHBpbmcobywgaSwgbik7XG4gICAgdGhpcy5hcHBseUNhcmRJZE1hcHBpbmdUb1Jlc0lkKHQsIGUsIHIsIGwpO1xuICB9XG4gIGNvbGxlY3RQcmlvcml0aXplZENhcmRJZHModCkge1xuICAgIHZhciBlID0gbmV3IE1hcCgpO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIHIgPSB0LmNhcmRJZDtcbiAgICAgIGUuaGFzKHIpIHx8IGUuc2V0KHIsIFtdKTtcbiAgICAgIGUuZ2V0KHIpLnB1c2godC52aXNpYmlsaXR5VHlwZSk7XG4gICAgfSk7XG4gICAgdmFyIHIgPSBbXSxcbiAgICAgIGkgPSBbXTtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICh0LmluY2x1ZGVzKGMuRnVsbHlWaXNpYmxlKSB8fCB0LmluY2x1ZGVzKGMuU2VsZWN0YWJsZSkpICYmIGkucHVzaChlKTtcbiAgICB9KTtcbiAgICByLnB1c2guYXBwbHkociwgWy4uLmldKTtcbiAgICB2YXIgYSA9IFtdO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgIXQuaW5jbHVkZXMoYy5QYXJ0aWFsbHlWaXNpYmxlKSB8fCB0LmluY2x1ZGVzKGMuU2VsZWN0YWJsZSkgfHwgdC5pbmNsdWRlcyhjLkZ1bGx5VmlzaWJsZSkgfHwgYS5wdXNoKGUpO1xuICAgIH0pO1xuICAgIHIucHVzaC5hcHBseShyLCBbLi4uYV0pO1xuICAgIHZhciBuID0gW107XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICB0LmluY2x1ZGVzKGMuRnVsbHlWaXNpYmxlKSB8fCB0LmluY2x1ZGVzKGMuUGFydGlhbGx5VmlzaWJsZSkgfHwgdC5pbmNsdWRlcyhjLlNlbGVjdGFibGUpIHx8IG4ucHVzaChlKTtcbiAgICB9KTtcbiAgICByLnB1c2guYXBwbHkociwgWy4uLm5dKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBhcHBseUNhcmRJZE1hcHBpbmdUb1Jlc0lkKHQsIGUsIHIsIGkpIHtcbiAgICB2YXIgYSA9IGUuZ2V0Q2FyZENvbmZpZ01hcCgpLFxuICAgICAgbiA9IG5ldyBNYXAoKTtcbiAgICBhLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciBlID0gdC5jYXJkSWQsXG4gICAgICAgIHIgPSB0LmlkO1xuICAgICAgbi5oYXMoZSkgfHwgbi5zZXQoZSwgW10pO1xuICAgICAgbi5nZXQoZSkucHVzaChyKTtcbiAgICB9KTtcbiAgICByLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuYWxsQ2FyZHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgciA9IGUuY2FyZElkLFxuICAgICAgICAgIGEgPSBpLmdldChyKTtcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gYSAmJiBhICE9PSByKSB7XG4gICAgICAgICAgdmFyIG8gPSBuLmdldChhKTtcbiAgICAgICAgICBpZiAobyAmJiBvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBsID0gb1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvLmxlbmd0aCldO1xuICAgICAgICAgICAgdC5jaGFuZ2VUaWxlUmVzSWQoZS5pZCwgbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBidWlsZE9sZFRvTmV3TWFwcGluZyh0LCBlLCByKSB7XG4gICAgdmFyIGkgPSBuZXcgTWFwKCksXG4gICAgICBhID0gMDtcbiAgICBpZiAoci5OMSA+IDAgJiYgYSArIHIuTjEgPD0gdC5sZW5ndGgpIHtcbiAgICAgIHZhciBuID0gdC5zbGljZShhLCBhICsgci5OMSksXG4gICAgICAgIG8gPSBlLnNsaWNlKGEsIGEgKyByLk4xKTtcbiAgICAgIHRoaXMuc2h1ZmZsZShuKTtcbiAgICAgIHRoaXMuc2h1ZmZsZShvKTtcbiAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgci5OMTsgbCsrKSBpLnNldChuW2xdLCBvW2xdKTtcbiAgICAgIGEgKz0gci5OMTtcbiAgICB9XG4gICAgaWYgKHIuTjIgPiAwICYmIGEgKyByLk4yIDw9IHQubGVuZ3RoKSB7XG4gICAgICB2YXIgcyA9IHQuc2xpY2UoYSwgYSArIHIuTjIpLFxuICAgICAgICBjID0gZS5zbGljZShhLCBhICsgci5OMik7XG4gICAgICB0aGlzLnNodWZmbGUocyk7XG4gICAgICB0aGlzLnNodWZmbGUoYyk7XG4gICAgICBmb3IgKGwgPSAwOyBsIDwgci5OMjsgbCsrKSBpLnNldChzW2xdLCBjW2xdKTtcbiAgICAgIGEgKz0gci5OMjtcbiAgICB9XG4gICAgaWYgKHIuTjMgPiAwICYmIGEgKyByLk4zIDw9IHQubGVuZ3RoKSB7XG4gICAgICB2YXIgZiA9IHQuc2xpY2UoYSwgYSArIHIuTjMpLFxuICAgICAgICB1ID0gZS5zbGljZShhLCBhICsgci5OMyk7XG4gICAgICB0aGlzLnNodWZmbGUoZik7XG4gICAgICB0aGlzLnNodWZmbGUodSk7XG4gICAgICBmb3IgKGwgPSAwOyBsIDwgci5OMzsgbCsrKSBpLnNldChmW2xdLCB1W2xdKTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgcHJpbnRMZXZlbERpZmZMb2codCkge1xuICAgIGZvciAodmFyIGUgPSBJbmZpbml0eSwgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSBmb3IgKHZhciBpID0gciArIDE7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYSA9IHRoaXMuX2RpZmZlcmVuY2VMb29rdXAuZ2V0KHRbcl0sIHRbaV0pO1xuICAgICAgZSA9IE1hdGgubWluKGUsIGEpO1xuICAgIH1cbiAgICBJbmZpbml0eSA9PT0gZSAmJiAoZSA9IDApO1xuICB9XG4gIHNodWZmbGUodCkge1xuICAgIGZvciAodmFyIGUsIHIgPSB0Lmxlbmd0aCAtIDE7IHIgPiAwOyByLS0pIHtcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHIgKyAxKSk7XG4gICAgICBlID0gX19yZWFkKFt0W2ldLCB0W3JdXSwgMiksIHRbcl0gPSBlWzBdLCB0W2ldID0gZVsxXTtcbiAgICB9XG4gIH1cbn0iXX0=
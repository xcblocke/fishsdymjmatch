
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_delWords/Scripts/DelWordsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfb7dxatNJCPKIE45AP7Hmf', 'DelWordsTrait');
// subpackages/l_delWords/Scripts/DelWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var c;
(function (c) {
    c[c["Selectable"] = 1] = "Selectable";
    c[c["FullyVisible"] = 2] = "FullyVisible";
    c[c["PartiallyVisible"] = 3] = "PartiallyVisible";
    c[c["NotVisible"] = 4] = "NotVisible";
})(c || (c = {}));
var DelWordsTrait = /** @class */ (function (_super) {
    __extends(DelWordsTrait, _super);
    function DelWordsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EXCLUDED_TILE_TYPES = new Set([TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.ColorCard, TileTypeEnum_1.ETileType.Yoga, TileTypeEnum_1.ETileType.Bomb]);
        _this._currentExcludedCardIds = [];
        return _this;
    }
    DelWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.config || this._traitData, t = e.exptId || "";
        this._config = {
            exptId: t,
            materialGroups: [],
            cycleConfig: e.cycleConfig || "{1;2;3;4,5,6}",
            levelNumLimit: e.levelNumLimit || 999999
        };
        t && (this._config.materialGroups = this.loadMaterialGroupsFromConfig(t));
        this._config.materialGroups.length;
    };
    DelWordsTrait.prototype.loadMaterialGroupsFromConfig = function (r) {
        var e, t, a = [], i = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.SelectCardGroupConfig, "ExptId", r);
        if (!i || 0 === i.length)
            return a;
        try {
            for (var o = __values(i), l = o.next(); !l.done; l = o.next()) {
                var s = l.value;
                a.push({
                    groupId: s.SelectCardGroupId,
                    cardIds: s.CardIdList || [],
                    selectLimit: s.SelectCount,
                    remark: s["##Note"] || "组" + s.SelectCardGroupId
                });
            }
        }
        catch (r) {
            e = {
                error: r
            };
        }
        finally {
            try {
                l && !l.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        a.sort(function (r, e) {
            return r.groupId - e.groupId;
        });
        return a;
    };
    DelWordsTrait.prototype.onChgResId_getExcluded = function (r, e) {
        if (this.checkGameMode()) {
            e({
                returnType: TraitCallbackReturnType.jump,
                isBreak: true,
                returnVal: this._currentExcludedCardIds
            });
        }
        else {
            e();
        }
    };
    DelWordsTrait.prototype.onIptSetLv_reGenFaces = function (r, e) {
        if (this.checkGameMode()) {
            var t = r.ins, a = r.args[0].levelData;
            if (this.shouldProcess(a)) {
                this._currentExcludedCardIds = this.calculateExcludedCardIds();
                this.remapMaterials(t.tileMapObject, t.gameContext, a.levelId);
                e();
            }
            else {
                this._currentExcludedCardIds = [];
                e();
            }
        }
        else
            e();
    };
    DelWordsTrait.prototype.calculateExcludedCardIds = function () {
        var r, e, t = [];
        try {
            for (var a = __values(this._config.materialGroups), i = a.next(); !i.done; i = a.next()) {
                var o = i.value;
                0 === o.selectLimit && t.push.apply(t, __spreadArrays(o.cardIds));
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (e = a.return) && e.call(a);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return t;
    };
    DelWordsTrait.prototype.shouldProcess = function (r) {
        if (0 === this._config.materialGroups.length)
            return false;
        if (!r.isNewGame)
            return false;
        if (!r.isExtractLevel)
            return false;
        var e = r.levelId;
        return !(e > this._config.levelNumLimit || ExtractTool_1.default.getInstance().isFixedLevel(e));
    };
    DelWordsTrait.prototype.remapMaterials = function (r, e) {
        var t = r.tileObjectMap();
        if (t && 0 !== t.size) {
            var a = this.collectOriginalCardIds(t).size;
            if (!(a <= 0)) {
                var i = this.selectMaterialsByGroups(a, e), o = this.classifyAndPrioritize(t), n = o.prioritizedCardIds, l = o.cardCount;
                this.applyLayeredMapping(r, e, t, i.selectedMaterials, n, l);
            }
        }
    };
    DelWordsTrait.prototype.collectOriginalCardIds = function (r) {
        var e = this, t = new Set();
        r.forEach(function (r) {
            e.EXCLUDED_TILE_TYPES.has(r.type) || t.add(r.cardId);
        });
        return t;
    };
    DelWordsTrait.prototype.selectMaterialsByGroups = function (r) {
        var e, t, a, i, o, l, c, u, f, d, p, h, y = [], v = this.parseCycleConfig(this._config.cycleConfig);
        if (0 === v.length)
            try {
                for (var g = __values(this._config.materialGroups), m = g.next(); !m.done; m = g.next()) {
                    var _ = m.value;
                    v.push([_.groupId]);
                }
            }
            catch (r) {
                e = {
                    error: r
                };
            }
            finally {
                try {
                    m && !m.done && (t = g.return) && t.call(g);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        var x = new Map(), b = new Map(), I = new Map(), C = new Map();
        try {
            for (var E = __values(this._config.materialGroups), M = E.next(); !M.done; M = E.next()) {
                _ = M.value;
                x.set(_.groupId, _);
                I.set(_.groupId, 0);
                C.set(_.groupId, __spreadArrays(_.cardIds));
                try {
                    for (var T = (o = void 0, __values(_.cardIds)), w = T.next(); !w.done; w = T.next()) {
                        var L = w.value;
                        b.set(L, _.groupId);
                    }
                }
                catch (r) {
                    o = {
                        error: r
                    };
                }
                finally {
                    try {
                        w && !w.done && (l = T.return) && l.call(T);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
            }
        }
        catch (r) {
            a = {
                error: r
            };
        }
        finally {
            try {
                M && !M.done && (i = E.return) && i.call(E);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var G = [], P = new Set();
        try {
            for (var S = __values(this._config.materialGroups), D = S.next(); !D.done; D = S.next())
                if (0 === (_ = D.value).selectLimit) {
                    try {
                        for (var N = (f = void 0, __values(_.cardIds)), O = N.next(); !O.done; O = N.next()) {
                            L = O.value;
                            G.push(L);
                            P.add(L);
                        }
                    }
                    catch (r) {
                        f = {
                            error: r
                        };
                    }
                    finally {
                        try {
                            O && !O.done && (d = N.return) && d.call(N);
                        }
                        finally {
                            if (f)
                                throw f.error;
                        }
                    }
                    C.set(_.groupId, []);
                }
        }
        catch (r) {
            c = {
                error: r
            };
        }
        finally {
            try {
                D && !D.done && (u = S.return) && u.call(S);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        for (var V = 0, j = 0; y.length < r;) {
            var F = v[V], R = this.getAvailableFromGroups(F, C);
            if (0 !== R.length) {
                j = 0;
                var k = R[Math.floor(Math.random() * R.length)], z = b.get(k), q = C.get(z), A = q.indexOf(k);
                -1 !== A && q.splice(A, 1);
                var W = I.get(z) || 0;
                I.set(z, W + 1);
                var X = x.get(z);
                if (-1 !== X.selectLimit && W + 1 >= X.selectLimit) {
                    var Y = C.get(z);
                    try {
                        for (var B = (p = void 0, __values(Y)), Q = B.next(); !Q.done; Q = B.next()) {
                            L = Q.value;
                            if (!P.has(L)) {
                                G.push(L);
                                P.add(L);
                            }
                        }
                    }
                    catch (r) {
                        p = {
                            error: r
                        };
                    }
                    finally {
                        try {
                            Q && !Q.done && (h = B.return) && h.call(B);
                        }
                        finally {
                            if (p)
                                throw p.error;
                        }
                    }
                    C.set(z, []);
                }
                y.push(k);
                V = (V + 1) % v.length;
            }
            else {
                if (++j >= v.length) {
                    if (!(G.length > 0))
                        break;
                    var U = Math.floor(Math.random() * G.length), H = G[U];
                    y.push(H);
                    G.splice(U, 1);
                    P.delete(H);
                    j = 0;
                }
                V = (V + 1) % v.length;
            }
        }
        return {
            selectedMaterials: y,
            alterMaterials: G
        };
    };
    DelWordsTrait.prototype.getAvailableFromGroups = function (r, e) {
        var t, a, i = [];
        try {
            for (var o = __values(r), l = o.next(); !l.done; l = o.next()) {
                var c = l.value, u = e.get(c);
                u && u.length > 0 && i.push.apply(i, __spreadArrays(u));
            }
        }
        catch (r) {
            t = {
                error: r
            };
        }
        finally {
            try {
                l && !l.done && (a = o.return) && a.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return i;
    };
    DelWordsTrait.prototype.parseCycleConfig = function (r) {
        var e, t, a, i, o = [], l = r.replace(/^\{|\}$/g, "").trim();
        if (!l)
            return o;
        var s = l.split(";");
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var f = u.value, d = [], p = f.split(",");
                try {
                    for (var h = (a = void 0, __values(p)), y = h.next(); !y.done; y = h.next()) {
                        var v = y.value, g = parseInt(v.trim(), 10);
                        isNaN(g) || d.push(g);
                    }
                }
                catch (r) {
                    a = {
                        error: r
                    };
                }
                finally {
                    try {
                        y && !y.done && (i = h.return) && i.call(h);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
                d.length > 0 && o.push(d);
            }
        }
        catch (r) {
            e = {
                error: r
            };
        }
        finally {
            try {
                u && !u.done && (t = c.return) && t.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    DelWordsTrait.prototype.classifyAndPrioritize = function (r) {
        var e = this, t = new Map();
        r.forEach(function (r) {
            if (!e.EXCLUDED_TILE_TYPES.has(r.type)) {
                var a = e.getVisibilityType(r);
                t.has(r.cardId) || t.set(r.cardId, []);
                t.get(r.cardId).push(a);
            }
        });
        var a = [], i = [], o = [];
        t.forEach(function (r, e) {
            var t = r.includes(c.Selectable), n = r.includes(c.FullyVisible), l = r.includes(c.PartiallyVisible);
            if (t || n) {
                a.push(e);
            }
            else {
                if (l) {
                    i.push(e);
                }
                else {
                    o.push(e);
                }
            }
        });
        return {
            prioritizedCardIds: __spreadArrays(a, i),
            cardCount: {
                N1: a.length,
                N2: i.length,
                N3: o.length
            }
        };
    };
    DelWordsTrait.prototype.getVisibilityType = function (r) {
        var e = r.tileMapObject, t = 0 !== e.isCardLock(r), a = e.isHasCover(r);
        return a || t ? !a && t ? c.FullyVisible : a && this.isPartiallyVisible(r) ? c.PartiallyVisible : c.NotVisible : c.Selectable;
    };
    DelWordsTrait.prototype.isPartiallyVisible = function (r) {
        var e, t, a = r.tileMapObject, i = r.layer + 1;
        if (i >= a.mapLayers().length)
            return true;
        var o = 0;
        try {
            for (var l = __values(r.ownerGridIds), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                a.isHasCard(i, c) && o++;
            }
        }
        catch (r) {
            e = {
                error: r
            };
        }
        finally {
            try {
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o < 4;
    };
    DelWordsTrait.prototype.applyLayeredMapping = function (r, e, t, a, i, o) {
        var n = this.buildOldToNewMapping(i, a, o);
        this.applyCardIdMapping(r, e, t, n);
    };
    DelWordsTrait.prototype.buildOldToNewMapping = function (r, e, t) {
        var a, i, o = new Map(), l = [t.N1, t.N2, t.N3], s = 0;
        try {
            for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                var f = u.value;
                if (f > 0 && s + f <= r.length) {
                    for (var d = this.shuffle(r.slice(s, s + f)), p = this.shuffle(e.slice(s, Math.min(s + f, e.length))), h = Math.min(d.length, p.length), y = 0; y < h; y++)
                        o.set(d[y], p[y]);
                    s += f;
                }
            }
        }
        catch (r) {
            a = {
                error: r
            };
        }
        finally {
            try {
                u && !u.done && (i = c.return) && i.call(c);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return o;
    };
    DelWordsTrait.prototype.applyCardIdMapping = function (r, e, t, a) {
        var i = this, o = e.getCardConfigMap(), n = new Map();
        o.forEach(function (r) {
            var e = r.cardId, t = r.id;
            n.has(e) || n.set(e, []);
            n.get(e).push(t);
        });
        t.forEach(function (e) {
            if (!i.EXCLUDED_TILE_TYPES.has(e.type)) {
                var t = e.cardId, o = a.get(t);
                if (void 0 !== o && o !== t) {
                    var l = n.get(o);
                    if (l && l.length > 0) {
                        var s = l[Math.floor(Math.random() * l.length)];
                        r.changeTileResId(e.id, s);
                    }
                }
            }
        });
    };
    DelWordsTrait.prototype.shuffle = function (r) {
        for (var e, t = __spreadArrays(r), a = t.length - 1; a > 0; a--) {
            var i = Math.floor(Math.random() * (a + 1));
            e = __read([t[i], t[a]], 2), t[a] = e[0], t[i] = e[1];
        }
        return t;
    };
    DelWordsTrait.traitKey = "DelWords";
    DelWordsTrait = __decorate([
        mj.trait,
        mj.class("DelWordsTrait")
    ], DelWordsTrait);
    return DelWordsTrait;
}(ExtractTrait_1.default));
exports.default = DelWordsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlbFdvcmRzL1NjcmlwdHMvRGVsV29yZHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELGlGQUE0RTtBQUM1RSxpRkFBNkU7QUFDN0UsNkVBQTRFO0FBQzVFLHlFQUF3RTtBQUN4RSxJQUFLLENBS0o7QUFMRCxXQUFLLENBQUM7SUFDSixxQ0FBYyxDQUFBO0lBQ2QseUNBQWdCLENBQUE7SUFDaEIsaURBQW9CLENBQUE7SUFDcEIscUNBQWMsQ0FBQTtBQUNoQixDQUFDLEVBTEksQ0FBQyxLQUFELENBQUMsUUFLTDtBQUdEO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBaWVDO1FBaGVDLHlCQUFtQixHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQVMsQ0FBQyxTQUFTLEVBQUUsd0JBQVMsQ0FBQyxJQUFJLEVBQUUsd0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLDZCQUF1QixHQUFHLEVBQUUsQ0FBQzs7SUErZC9CLENBQUM7SUE3ZEMsOEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixNQUFNLEVBQUUsQ0FBQztZQUNULGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLGVBQWU7WUFDN0MsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksTUFBTTtTQUN6QyxDQUFDO1FBQ0YsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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RUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3ZE0sc0JBQVEsR0FBRyxVQUFVLENBQUM7SUFIVixhQUFhO1FBRmpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7T0FDTCxhQUFhLENBaWVqQztJQUFELG9CQUFDO0NBamVELEFBaWVDLENBamUwQyxzQkFBWSxHQWlldEQ7a0JBamVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5lbnVtIGMge1xuICBTZWxlY3RhYmxlID0gMSxcbiAgRnVsbHlWaXNpYmxlID0gMixcbiAgUGFydGlhbGx5VmlzaWJsZSA9IDMsXG4gIE5vdFZpc2libGUgPSA0LFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEZWxXb3Jkc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxXb3Jkc1RyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgRVhDTFVERURfVElMRV9UWVBFUyA9IG5ldyBTZXQoW0VUaWxlVHlwZS5SYW5rQ2FyZCwgRVRpbGVUeXBlLkNvbG9yQ2FyZCwgRVRpbGVUeXBlLllvZ2EsIEVUaWxlVHlwZS5Cb21iXSk7XG4gIF9jdXJyZW50RXhjbHVkZWRDYXJkSWRzID0gW107XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGVsV29yZHNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhLmNvbmZpZyB8fCB0aGlzLl90cmFpdERhdGEsXG4gICAgICB0ID0gZS5leHB0SWQgfHwgXCJcIjtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBleHB0SWQ6IHQsXG4gICAgICBtYXRlcmlhbEdyb3VwczogW10sXG4gICAgICBjeWNsZUNvbmZpZzogZS5jeWNsZUNvbmZpZyB8fCBcInsxOzI7Mzs0LDUsNn1cIixcbiAgICAgIGxldmVsTnVtTGltaXQ6IGUubGV2ZWxOdW1MaW1pdCB8fCA5OTk5OTlcbiAgICB9O1xuICAgIHQgJiYgKHRoaXMuX2NvbmZpZy5tYXRlcmlhbEdyb3VwcyA9IHRoaXMubG9hZE1hdGVyaWFsR3JvdXBzRnJvbUNvbmZpZyh0KSk7XG4gICAgdGhpcy5fY29uZmlnLm1hdGVyaWFsR3JvdXBzLmxlbmd0aDtcbiAgfVxuICBsb2FkTWF0ZXJpYWxHcm91cHNGcm9tQ29uZmlnKHIpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBhID0gW10sXG4gICAgICBpID0gRGF0YVJlYWRlci5nZXRUeXBlTGlzdChDb25maWdUeXBlLlNlbGVjdENhcmRHcm91cENvbmZpZywgXCJFeHB0SWRcIiwgcik7XG4gICAgaWYgKCFpIHx8IDAgPT09IGkubGVuZ3RoKSByZXR1cm4gYTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKGkpLCBsID0gby5uZXh0KCk7ICFsLmRvbmU7IGwgPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgIGEucHVzaCh7XG4gICAgICAgICAgZ3JvdXBJZDogcy5TZWxlY3RDYXJkR3JvdXBJZCxcbiAgICAgICAgICBjYXJkSWRzOiBzLkNhcmRJZExpc3QgfHwgW10sXG4gICAgICAgICAgc2VsZWN0TGltaXQ6IHMuU2VsZWN0Q291bnQsXG4gICAgICAgICAgcmVtYXJrOiBzW1wiIyNOb3RlXCJdIHx8IFwi57uEXCIgKyBzLlNlbGVjdENhcmRHcm91cElkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiByXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKHQgPSBvLnJldHVybikgJiYgdC5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGEuc29ydChmdW5jdGlvbiAociwgZSkge1xuICAgICAgcmV0dXJuIHIuZ3JvdXBJZCAtIGUuZ3JvdXBJZDtcbiAgICB9KTtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBvbkNoZ1Jlc0lkX2dldEV4Y2x1ZGVkKHIsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2N1cnJlbnRFeGNsdWRlZENhcmRJZHNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uSXB0U2V0THZfcmVHZW5GYWNlcyhyLCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgdCA9IHIuaW5zLFxuICAgICAgICBhID0gci5hcmdzWzBdLmxldmVsRGF0YTtcbiAgICAgIGlmICh0aGlzLnNob3VsZFByb2Nlc3MoYSkpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEV4Y2x1ZGVkQ2FyZElkcyA9IHRoaXMuY2FsY3VsYXRlRXhjbHVkZWRDYXJkSWRzKCk7XG4gICAgICAgIHRoaXMucmVtYXBNYXRlcmlhbHModC50aWxlTWFwT2JqZWN0LCB0LmdhbWVDb250ZXh0LCBhLmxldmVsSWQpO1xuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jdXJyZW50RXhjbHVkZWRDYXJkSWRzID0gW107XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGNhbGN1bGF0ZUV4Y2x1ZGVkQ2FyZElkcygpIHtcbiAgICB2YXIgcixcbiAgICAgIGUsXG4gICAgICB0ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyh0aGlzLl9jb25maWcubWF0ZXJpYWxHcm91cHMpLCBpID0gYS5uZXh0KCk7ICFpLmRvbmU7IGkgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgbyA9IGkudmFsdWU7XG4gICAgICAgIDAgPT09IG8uc2VsZWN0TGltaXQgJiYgdC5wdXNoLmFwcGx5KHQsIFsuLi5vLmNhcmRJZHNdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmIChlID0gYS5yZXR1cm4pICYmIGUuY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBzaG91bGRQcm9jZXNzKHIpIHtcbiAgICBpZiAoMCA9PT0gdGhpcy5fY29uZmlnLm1hdGVyaWFsR3JvdXBzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghci5pc05ld0dhbWUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXIuaXNFeHRyYWN0TGV2ZWwpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZSA9IHIubGV2ZWxJZDtcbiAgICByZXR1cm4gIShlID4gdGhpcy5fY29uZmlnLmxldmVsTnVtTGltaXQgfHwgRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0ZpeGVkTGV2ZWwoZSkpO1xuICB9XG4gIHJlbWFwTWF0ZXJpYWxzKHIsIGUpIHtcbiAgICB2YXIgdCA9IHIudGlsZU9iamVjdE1hcCgpO1xuICAgIGlmICh0ICYmIDAgIT09IHQuc2l6ZSkge1xuICAgICAgdmFyIGEgPSB0aGlzLmNvbGxlY3RPcmlnaW5hbENhcmRJZHModCkuc2l6ZTtcbiAgICAgIGlmICghKGEgPD0gMCkpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnNlbGVjdE1hdGVyaWFsc0J5R3JvdXBzKGEsIGUpLFxuICAgICAgICAgIG8gPSB0aGlzLmNsYXNzaWZ5QW5kUHJpb3JpdGl6ZSh0KSxcbiAgICAgICAgICBuID0gby5wcmlvcml0aXplZENhcmRJZHMsXG4gICAgICAgICAgbCA9IG8uY2FyZENvdW50O1xuICAgICAgICB0aGlzLmFwcGx5TGF5ZXJlZE1hcHBpbmcociwgZSwgdCwgaS5zZWxlY3RlZE1hdGVyaWFscywgbiwgbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbGxlY3RPcmlnaW5hbENhcmRJZHMocikge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSBuZXcgU2V0KCk7XG4gICAgci5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBlLkVYQ0xVREVEX1RJTEVfVFlQRVMuaGFzKHIudHlwZSkgfHwgdC5hZGQoci5jYXJkSWQpO1xuICAgIH0pO1xuICAgIHJldHVybiB0O1xuICB9XG4gIHNlbGVjdE1hdGVyaWFsc0J5R3JvdXBzKHIpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBhLFxuICAgICAgaSxcbiAgICAgIG8sXG4gICAgICBsLFxuICAgICAgYyxcbiAgICAgIHUsXG4gICAgICBmLFxuICAgICAgZCxcbiAgICAgIHAsXG4gICAgICBoLFxuICAgICAgeSA9IFtdLFxuICAgICAgdiA9IHRoaXMucGFyc2VDeWNsZUNvbmZpZyh0aGlzLl9jb25maWcuY3ljbGVDb25maWcpO1xuICAgIGlmICgwID09PSB2Lmxlbmd0aCkgdHJ5IHtcbiAgICAgIGZvciAodmFyIGcgPSBfX3ZhbHVlcyh0aGlzLl9jb25maWcubWF0ZXJpYWxHcm91cHMpLCBtID0gZy5uZXh0KCk7ICFtLmRvbmU7IG0gPSBnLm5leHQoKSkge1xuICAgICAgICB2YXIgXyA9IG0udmFsdWU7XG4gICAgICAgIHYucHVzaChbXy5ncm91cElkXSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHJcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG0gJiYgIW0uZG9uZSAmJiAodCA9IGcucmV0dXJuKSAmJiB0LmNhbGwoZyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHggPSBuZXcgTWFwKCksXG4gICAgICBiID0gbmV3IE1hcCgpLFxuICAgICAgSSA9IG5ldyBNYXAoKSxcbiAgICAgIEMgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEUgPSBfX3ZhbHVlcyh0aGlzLl9jb25maWcubWF0ZXJpYWxHcm91cHMpLCBNID0gRS5uZXh0KCk7ICFNLmRvbmU7IE0gPSBFLm5leHQoKSkge1xuICAgICAgICBfID0gTS52YWx1ZTtcbiAgICAgICAgeC5zZXQoXy5ncm91cElkLCBfKTtcbiAgICAgICAgSS5zZXQoXy5ncm91cElkLCAwKTtcbiAgICAgICAgQy5zZXQoXy5ncm91cElkLCBbLi4uXy5jYXJkSWRzXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgVCA9IChvID0gdm9pZCAwLCBfX3ZhbHVlcyhfLmNhcmRJZHMpKSwgdyA9IFQubmV4dCgpOyAhdy5kb25lOyB3ID0gVC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBMID0gdy52YWx1ZTtcbiAgICAgICAgICAgIGIuc2V0KEwsIF8uZ3JvdXBJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChyKSB7XG4gICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiByXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdyAmJiAhdy5kb25lICYmIChsID0gVC5yZXR1cm4pICYmIGwuY2FsbChUKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IHJcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIE0gJiYgIU0uZG9uZSAmJiAoaSA9IEUucmV0dXJuKSAmJiBpLmNhbGwoRSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIEcgPSBbXSxcbiAgICAgIFAgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIFMgPSBfX3ZhbHVlcyh0aGlzLl9jb25maWcubWF0ZXJpYWxHcm91cHMpLCBEID0gUy5uZXh0KCk7ICFELmRvbmU7IEQgPSBTLm5leHQoKSkgaWYgKDAgPT09IChfID0gRC52YWx1ZSkuc2VsZWN0TGltaXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBOID0gKGYgPSB2b2lkIDAsIF9fdmFsdWVzKF8uY2FyZElkcykpLCBPID0gTi5uZXh0KCk7ICFPLmRvbmU7IE8gPSBOLm5leHQoKSkge1xuICAgICAgICAgICAgTCA9IE8udmFsdWU7XG4gICAgICAgICAgICBHLnB1c2goTCk7XG4gICAgICAgICAgICBQLmFkZChMKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgICBmID0ge1xuICAgICAgICAgICAgZXJyb3I6IHJcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBPICYmICFPLmRvbmUgJiYgKGQgPSBOLnJldHVybikgJiYgZC5jYWxsKE4pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZikgdGhyb3cgZi5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQy5zZXQoXy5ncm91cElkLCBbXSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgYyA9IHtcbiAgICAgICAgZXJyb3I6IHJcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEQgJiYgIUQuZG9uZSAmJiAodSA9IFMucmV0dXJuKSAmJiB1LmNhbGwoUyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgViA9IDAsIGogPSAwOyB5Lmxlbmd0aCA8IHI7KSB7XG4gICAgICB2YXIgRiA9IHZbVl0sXG4gICAgICAgIFIgPSB0aGlzLmdldEF2YWlsYWJsZUZyb21Hcm91cHMoRiwgQyk7XG4gICAgICBpZiAoMCAhPT0gUi5sZW5ndGgpIHtcbiAgICAgICAgaiA9IDA7XG4gICAgICAgIHZhciBrID0gUltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBSLmxlbmd0aCldLFxuICAgICAgICAgIHogPSBiLmdldChrKSxcbiAgICAgICAgICBxID0gQy5nZXQoeiksXG4gICAgICAgICAgQSA9IHEuaW5kZXhPZihrKTtcbiAgICAgICAgLTEgIT09IEEgJiYgcS5zcGxpY2UoQSwgMSk7XG4gICAgICAgIHZhciBXID0gSS5nZXQoeikgfHwgMDtcbiAgICAgICAgSS5zZXQoeiwgVyArIDEpO1xuICAgICAgICB2YXIgWCA9IHguZ2V0KHopO1xuICAgICAgICBpZiAoLTEgIT09IFguc2VsZWN0TGltaXQgJiYgVyArIDEgPj0gWC5zZWxlY3RMaW1pdCkge1xuICAgICAgICAgIHZhciBZID0gQy5nZXQoeik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIEIgPSAocCA9IHZvaWQgMCwgX192YWx1ZXMoWSkpLCBRID0gQi5uZXh0KCk7ICFRLmRvbmU7IFEgPSBCLm5leHQoKSkge1xuICAgICAgICAgICAgICBMID0gUS52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKCFQLmhhcyhMKSkge1xuICAgICAgICAgICAgICAgIEcucHVzaChMKTtcbiAgICAgICAgICAgICAgICBQLmFkZChMKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgICAgIHAgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiByXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBRICYmICFRLmRvbmUgJiYgKGggPSBCLnJldHVybikgJiYgaC5jYWxsKEIpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHApIHRocm93IHAuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEMuc2V0KHosIFtdKTtcbiAgICAgICAgfVxuICAgICAgICB5LnB1c2goayk7XG4gICAgICAgIFYgPSAoViArIDEpICUgdi5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKytqID49IHYubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKCEoRy5sZW5ndGggPiAwKSkgYnJlYWs7XG4gICAgICAgICAgdmFyIFUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHLmxlbmd0aCksXG4gICAgICAgICAgICBIID0gR1tVXTtcbiAgICAgICAgICB5LnB1c2goSCk7XG4gICAgICAgICAgRy5zcGxpY2UoVSwgMSk7XG4gICAgICAgICAgUC5kZWxldGUoSCk7XG4gICAgICAgICAgaiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgViA9IChWICsgMSkgJSB2Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkTWF0ZXJpYWxzOiB5LFxuICAgICAgYWx0ZXJNYXRlcmlhbHM6IEdcbiAgICB9O1xuICB9XG4gIGdldEF2YWlsYWJsZUZyb21Hcm91cHMociwgZSkge1xuICAgIHZhciB0LFxuICAgICAgYSxcbiAgICAgIGkgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKHIpLCBsID0gby5uZXh0KCk7ICFsLmRvbmU7IGwgPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IGwudmFsdWUsXG4gICAgICAgICAgdSA9IGUuZ2V0KGMpO1xuICAgICAgICB1ICYmIHUubGVuZ3RoID4gMCAmJiBpLnB1c2guYXBwbHkoaSwgWy4uLnVdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogclxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChhID0gby5yZXR1cm4pICYmIGEuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxuICBwYXJzZUN5Y2xlQ29uZmlnKHIpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBhLFxuICAgICAgaSxcbiAgICAgIG8gPSBbXSxcbiAgICAgIGwgPSByLnJlcGxhY2UoL15cXHt8XFx9JC9nLCBcIlwiKS50cmltKCk7XG4gICAgaWYgKCFsKSByZXR1cm4gbztcbiAgICB2YXIgcyA9IGwuc3BsaXQoXCI7XCIpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMocyksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBmID0gdS52YWx1ZSxcbiAgICAgICAgICBkID0gW10sXG4gICAgICAgICAgcCA9IGYuc3BsaXQoXCIsXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGggPSAoYSA9IHZvaWQgMCwgX192YWx1ZXMocCkpLCB5ID0gaC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBoLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHYgPSB5LnZhbHVlLFxuICAgICAgICAgICAgICBnID0gcGFyc2VJbnQodi50cmltKCksIDEwKTtcbiAgICAgICAgICAgIGlzTmFOKGcpIHx8IGQucHVzaChnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgZXJyb3I6IHJcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5ICYmICF5LmRvbmUgJiYgKGkgPSBoLnJldHVybikgJiYgaS5jYWxsKGgpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZC5sZW5ndGggPiAwICYmIG8ucHVzaChkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogclxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmICh0ID0gYy5yZXR1cm4pICYmIHQuY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBjbGFzc2lmeUFuZFByaW9yaXRpemUocikge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSBuZXcgTWFwKCk7XG4gICAgci5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBpZiAoIWUuRVhDTFVERURfVElMRV9UWVBFUy5oYXMoci50eXBlKSkge1xuICAgICAgICB2YXIgYSA9IGUuZ2V0VmlzaWJpbGl0eVR5cGUocik7XG4gICAgICAgIHQuaGFzKHIuY2FyZElkKSB8fCB0LnNldChyLmNhcmRJZCwgW10pO1xuICAgICAgICB0LmdldChyLmNhcmRJZCkucHVzaChhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgYSA9IFtdLFxuICAgICAgaSA9IFtdLFxuICAgICAgbyA9IFtdO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAociwgZSkge1xuICAgICAgdmFyIHQgPSByLmluY2x1ZGVzKGMuU2VsZWN0YWJsZSksXG4gICAgICAgIG4gPSByLmluY2x1ZGVzKGMuRnVsbHlWaXNpYmxlKSxcbiAgICAgICAgbCA9IHIuaW5jbHVkZXMoYy5QYXJ0aWFsbHlWaXNpYmxlKTtcbiAgICAgIGlmICh0IHx8IG4pIHtcbiAgICAgICAgYS5wdXNoKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICBpLnB1c2goZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgby5wdXNoKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByaW9yaXRpemVkQ2FyZElkczogWy4uLmEsIC4uLmldLFxuICAgICAgY2FyZENvdW50OiB7XG4gICAgICAgIE4xOiBhLmxlbmd0aCxcbiAgICAgICAgTjI6IGkubGVuZ3RoLFxuICAgICAgICBOMzogby5sZW5ndGhcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGdldFZpc2liaWxpdHlUeXBlKHIpIHtcbiAgICB2YXIgZSA9IHIudGlsZU1hcE9iamVjdCxcbiAgICAgIHQgPSAwICE9PSBlLmlzQ2FyZExvY2sociksXG4gICAgICBhID0gZS5pc0hhc0NvdmVyKHIpO1xuICAgIHJldHVybiBhIHx8IHQgPyAhYSAmJiB0ID8gYy5GdWxseVZpc2libGUgOiBhICYmIHRoaXMuaXNQYXJ0aWFsbHlWaXNpYmxlKHIpID8gYy5QYXJ0aWFsbHlWaXNpYmxlIDogYy5Ob3RWaXNpYmxlIDogYy5TZWxlY3RhYmxlO1xuICB9XG4gIGlzUGFydGlhbGx5VmlzaWJsZShyKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgYSA9IHIudGlsZU1hcE9iamVjdCxcbiAgICAgIGkgPSByLmxheWVyICsgMTtcbiAgICBpZiAoaSA+PSBhLm1hcExheWVycygpLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgdmFyIG8gPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoci5vd25lckdyaWRJZHMpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgIGEuaXNIYXNDYXJkKGksIGMpICYmIG8rKztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogclxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmICh0ID0gbC5yZXR1cm4pICYmIHQuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbyA8IDQ7XG4gIH1cbiAgYXBwbHlMYXllcmVkTWFwcGluZyhyLCBlLCB0LCBhLCBpLCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLmJ1aWxkT2xkVG9OZXdNYXBwaW5nKGksIGEsIG8pO1xuICAgIHRoaXMuYXBwbHlDYXJkSWRNYXBwaW5nKHIsIGUsIHQsIG4pO1xuICB9XG4gIGJ1aWxkT2xkVG9OZXdNYXBwaW5nKHIsIGUsIHQpIHtcbiAgICB2YXIgYSxcbiAgICAgIGksXG4gICAgICBvID0gbmV3IE1hcCgpLFxuICAgICAgbCA9IFt0Lk4xLCB0Lk4yLCB0Lk4zXSxcbiAgICAgIHMgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMobCksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBmID0gdS52YWx1ZTtcbiAgICAgICAgaWYgKGYgPiAwICYmIHMgKyBmIDw9IHIubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZCA9IHRoaXMuc2h1ZmZsZShyLnNsaWNlKHMsIHMgKyBmKSksIHAgPSB0aGlzLnNodWZmbGUoZS5zbGljZShzLCBNYXRoLm1pbihzICsgZiwgZS5sZW5ndGgpKSksIGggPSBNYXRoLm1pbihkLmxlbmd0aCwgcC5sZW5ndGgpLCB5ID0gMDsgeSA8IGg7IHkrKykgby5zZXQoZFt5XSwgcFt5XSk7XG4gICAgICAgICAgcyArPSBmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IHJcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAoaSA9IGMucmV0dXJuKSAmJiBpLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgYXBwbHlDYXJkSWRNYXBwaW5nKHIsIGUsIHQsIGEpIHtcbiAgICB2YXIgaSA9IHRoaXMsXG4gICAgICBvID0gZS5nZXRDYXJkQ29uZmlnTWFwKCksXG4gICAgICBuID0gbmV3IE1hcCgpO1xuICAgIG8uZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgdmFyIGUgPSByLmNhcmRJZCxcbiAgICAgICAgdCA9IHIuaWQ7XG4gICAgICBuLmhhcyhlKSB8fCBuLnNldChlLCBbXSk7XG4gICAgICBuLmdldChlKS5wdXNoKHQpO1xuICAgIH0pO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFpLkVYQ0xVREVEX1RJTEVfVFlQRVMuaGFzKGUudHlwZSkpIHtcbiAgICAgICAgdmFyIHQgPSBlLmNhcmRJZCxcbiAgICAgICAgICBvID0gYS5nZXQodCk7XG4gICAgICAgIGlmICh2b2lkIDAgIT09IG8gJiYgbyAhPT0gdCkge1xuICAgICAgICAgIHZhciBsID0gbi5nZXQobyk7XG4gICAgICAgICAgaWYgKGwgJiYgbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgcyA9IGxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbC5sZW5ndGgpXTtcbiAgICAgICAgICAgIHIuY2hhbmdlVGlsZVJlc0lkKGUuaWQsIHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHNodWZmbGUocikge1xuICAgIGZvciAodmFyIGUsIHQgPSBbLi4ucl0sIGEgPSB0Lmxlbmd0aCAtIDE7IGEgPiAwOyBhLS0pIHtcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGEgKyAxKSk7XG4gICAgICBlID0gX19yZWFkKFt0W2ldLCB0W2FdXSwgMiksIHRbYV0gPSBlWzBdLCB0W2ldID0gZVsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_addBlock/Scripts/BoardAddBlockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61205RbdclCJJPEqpZ8v1/9', 'BoardAddBlockTrait');
// subpackages/l_addBlock/Scripts/BoardAddBlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameConstant_1 = require("../../../Scripts/core/simulator/constant/GameConstant");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var TileMapSimulator_1 = require("../../../Scripts/objects/TileMapSimulator");
var h = Array.from({
    length: 34
}, function (t, e) {
    return e;
});
var y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 55, 56, 57, 58, 59, 60, 61, 62];
var BoardAddBlockTrait = /** @class */ (function (_super) {
    __extends(BoardAddBlockTrait, _super);
    function BoardAddBlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BoardAddBlockTrait.prototype, "addPairCount", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.addPairCount) && void 0 !== e ? e : 0;
        },
        enumerable: false,
        configurable: true
    });
    BoardAddBlockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoardAddBlockTrait.prototype.getCacheKey = function (t) {
        return t + "_tiles";
    };
    BoardAddBlockTrait.prototype.cacheAddBlock = function (t, e, r) {
        var a = this.getCacheKey(t);
        this.localData[a] = {
            levelId: e,
            cardInfos: r,
            bombs: r.filter(function (t) {
                return 43 === t.id;
            }).map(function (t) {
                return t.pos.x + "-" + t.pos.y + "-" + t.pos.z;
            })
        };
    };
    BoardAddBlockTrait.prototype.getCachedAddBlocks = function (t, e) {
        var r = this.getCacheKey(t), a = this.localData[r];
        return null == a || "" === a ? null : a.levelId !== e ? null : a;
    };
    BoardAddBlockTrait.prototype.onIptSetLv_reGenFacesAfter = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.ins, a = t.args[0], i = a.levelData.levelId;
            if (ExtractTool_1.default.getInstance().isFixedLevel(i))
                e();
            else if (a.levelData.isNewGame && !a.levelData.isRestart) {
                try {
                    var o = r.gameContext, n = o.getTileMapObject(), l = this.getNonSymmetricPos(n);
                    if (l.length > 0) {
                        this.tryFillSymmetric(o, l);
                    }
                    else {
                        this.tryAddBlock(o);
                    }
                }
                catch (t) {
                    console.error("[BoardAddBlockTrait] 增加块失败: " + ((null == t ? void 0 : t.message) || "未知错误"));
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    BoardAddBlockTrait.prototype.onIptT2SetLv_genFcsAfter = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.ins, a = t.args[0], i = a.levelData.levelId;
            if (ExtractTool_1.default.getInstance().isFixedLevel(i))
                e();
            else if (a.levelData.isRestart)
                e();
            else if (a.levelData.isNewGame) {
                try {
                    var o = r.gameContext, n = o.getTileMapObject(), l = this.getNonSymmetricPos(n);
                    if (l.length > 0) {
                        this.tryFillSymmetric(o, l);
                    }
                    else {
                        this.tryAddBlock(o);
                    }
                }
                catch (t) {
                    console.error("[BoardAddBlockTrait] 增加块失败: " + ((null == t ? void 0 : t.message) || "未知错误"));
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    BoardAddBlockTrait.prototype.tryAddBlock = function (t) {
        var e = t.getTileMapObject(), r = TileMapSimulator_1.TileMapSimulator.createSim(t), a = this.getAvailablePos(r);
        if (a.length <= 0)
            return false;
        var i = this.addPairCount, o = __spreadArrays(a), n = [], s = Date.now();
        this.selectPairs(o, n, i, r, s);
        if (n.length <= 0)
            return false;
        this.fillColor(t, n, e);
        return true;
    };
    BoardAddBlockTrait.prototype.fillColor = function (t, e, r) {
        for (var a = this, i = this.getUnUsedTileTypes(r), o = e.length; i.length < o;)
            i.push(43);
        for (var n = i.slice(0, o), l = [], s = e.reduce(function (t, e) {
            return t.concat(e);
        }, []), c = function c(t, e) {
            if (s.length <= 0)
                return null;
            Math.floor(t / 2);
            var r = null;
            if (e) {
                s.sort(function (t, r) {
                    return a.getDistanceSqr(t, e) - a.getDistanceSqr(r, e);
                });
                r = s.shift();
            }
            else {
                var i = Math.floor(Math.random() * s.length);
                r = s[i];
                s.splice(i, 1);
            }
            return r;
        }, u = null, d = 0; d < o; d++) {
            var p = null, f = null;
            if (0 === d) {
                p = c(2 * d, null);
                f = c(2 * d + 1, null);
            }
            else {
                p = c(2 * d, u);
                f = c(2 * d + 1, null);
            }
            if (!p || !f)
                break;
            u = f;
            var h = {
                pos: {
                    x: p.x,
                    y: p.y,
                    z: p.z
                },
                isAlive: true,
                id: n[d]
            }, y = {
                pos: {
                    x: f.x,
                    y: f.y,
                    z: f.z
                },
                isAlive: true,
                id: n[d]
            };
            l.push(h);
            l.push(y);
            r.appendCard(h);
            r.appendCard(y);
        }
        r.updateInitGameLayer();
        r.updateCanMatchTiles();
        this.cacheAddBlock(t.gameType, t.getGameData().getLevelId(), l);
    };
    BoardAddBlockTrait.prototype.getDistanceSqr = function (t, e) {
        return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
    };
    BoardAddBlockTrait.prototype.isOverlap = function (t, e) {
        var r, a, i = __read(t, 2), o = i[0], l = i[1];
        try {
            for (var c = __values(e), u = c.next(); !u.done; u = c.next()) {
                var d = __read(u.value, 2), p = d[0], f = d[1];
                if (Math.abs(o.x - p.x) < 2 && Math.abs(o.y - p.y) < 2 || Math.abs(l.x - f.x) < 2 && Math.abs(l.y - f.y) < 2 || Math.abs(o.x - f.x) < 2 && Math.abs(o.y - f.y) < 2 || Math.abs(l.x - p.x) < 2 && Math.abs(l.y - p.y) < 2)
                    return true;
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                u && !u.done && (a = c.return) && a.call(c);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    BoardAddBlockTrait.prototype.isLocked = function (t, e, r) {
        var a, i, o = __read(t, 2), c = o[0], u = o[1], d = e.appendCard({
            pos: {
                x: c.x,
                y: c.y,
                z: c.z
            },
            isAlive: true,
            id: 0
        });
        if (!d)
            return true;
        var p = e.appendCard({
            pos: {
                x: u.x,
                y: u.y,
                z: u.z
            },
            isAlive: true,
            id: 0
        });
        if (!p) {
            e.removeCard(d);
            return true;
        }
        var f = false, h = __spreadArrays([d.id, p.id], r);
        try {
            for (var y = __values(h), v = y.next(); !v.done; v = y.next()) {
                var g = v.value, m = e.getTileObject(g);
                if (!m) {
                    f = true;
                    break;
                }
                if (e.isHasLeft(m) && e.isHasRight(m)) {
                    f = true;
                    break;
                }
            }
        }
        catch (t) {
            a = {
                error: t
            };
        }
        finally {
            try {
                v && !v.done && (i = y.return) && i.call(y);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        e.removeCard(d);
        e.removeCard(p);
        return f;
    };
    BoardAddBlockTrait.prototype.selectPairs = function (t, e, r, a, i, o) {
        if (o === void 0) { o = -1; }
        var n = this;
        if (!(e.length >= r || 0 == t.length || Date.now() - i >= 50)) {
            var l = e.length, s = -1;
            if (0 === l) {
                if (-1 !== o)
                    this.isLocked(t[o], a, []) || (s = o);
                else
                    for (var c = Math.floor(Math.random() * t.length), u = 0; u < t.length; u++) {
                        var d = (c + u) % t.length;
                        if (!this.isLocked(t[d], a, [])) {
                            s = d;
                            break;
                        }
                    }
            }
            else {
                var p = e[l - 1];
                t.sort(function (t, e) {
                    return n.getDistanceSqr(t[0], p[0]) - n.getDistanceSqr(e[0], p[0]);
                });
                var f = [];
                e.forEach(function (t) {
                    f.push(t[0].x + "-" + t[0].y + "-" + t[0].z);
                    f.push(t[1].x + "-" + t[1].y + "-" + t[1].z);
                });
                for (u = 0; u < t.length; u++) {
                    var h = t[u];
                    if (!this.isOverlap(h, e) && !this.isLocked(h, a, f)) {
                        s = u;
                        break;
                    }
                }
            }
            if (-1 !== s) {
                a.appendCard({
                    pos: {
                        x: t[s][0].x,
                        y: t[s][0].y,
                        z: t[s][0].z
                    },
                    isAlive: true,
                    id: 0
                });
                a.appendCard({
                    pos: {
                        x: t[s][1].x,
                        y: t[s][1].y,
                        z: t[s][1].z
                    },
                    isAlive: true,
                    id: 0
                });
                e.push(t[s]);
                t.splice(s, 1);
                this.selectPairs(t, e, r, a, i);
            }
        }
    };
    BoardAddBlockTrait.prototype.getAvailablePos = function (t) {
        var e = t.maxLayerIndex, r = [], a = [];
        this.getAvailablePosInLayer(t, e, r, a);
        this.getAvailablePosInLayer(t, e + 1, r, a);
        if (a.length > 1)
            for (var i = 0; i < a.length; i++)
                for (var o = i + 1; o < a.length; o++)
                    Math.abs(a[i].y - a[o].y) >= 2 && r.push([a[i], a[o]]);
        return r;
    };
    BoardAddBlockTrait.prototype.checkCardPosInvalid = function (t, e) {
        return !(e < 0 || e >= 2 * GameConstant_1.default.MaxTileCountX || t < 0 || t >= 2 * GameConstant_1.default.MaxTileCountY);
    };
    BoardAddBlockTrait.prototype.getGridIndex = function (t, e) {
        return e * GameConstant_1.default.MaxTileCountX * 2 + t;
    };
    BoardAddBlockTrait.prototype.getOwnerGridIds = function (t, e) {
        var r = this.getGridIndex(t, e), a = Array.from({
            length: 4
        }, function () {
            return 0;
        });
        a[0] = r;
        a[1] = r + 1;
        a[2] = r + 2 * GameConstant_1.default.MaxTileCountX;
        a[3] = r + 2 * GameConstant_1.default.MaxTileCountX + 1;
        return a;
    };
    BoardAddBlockTrait.prototype.getSymmetricPosX = function (t, e) {
        return 2 * (e - 1) - t;
    };
    BoardAddBlockTrait.prototype.checkPosValid = function (t, e, r, a) {
        var i, o, n, l;
        if (!this.checkCardPosInvalid(e, t))
            return false;
        var c = this.getOwnerGridIds(t, e);
        if (r)
            try {
                for (var u = __values(c), d = u.next(); !d.done; d = u.next()) {
                    var p = d.value;
                    if (r.isHasCard(p))
                        return false;
                }
            }
            catch (t) {
                i = {
                    error: t
                };
            }
            finally {
                try {
                    d && !d.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
        if (a)
            try {
                for (var f = __values(c), h = f.next(); !h.done; h = f.next()) {
                    p = h.value;
                    if (!a.isHasCard(p))
                        return false;
                }
            }
            catch (t) {
                n = {
                    error: t
                };
            }
            finally {
                try {
                    h && !h.done && (l = f.return) && l.call(f);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        return true;
    };
    BoardAddBlockTrait.prototype.getAvailablePosInLayer = function (t, e, r, a) {
        for (var i = t.mapLayers(), o = t.mapCol, n = t.mapRow, l = t.maxMapWidth, s = i[e], c = e - 1 >= 0 ? i[e - 1] : null, u = new Set(), d = o / 2, p = 0; p < d; p++)
            for (var f = 0; f <= n; f++) {
                var h = this.getGridIndex(p, f), y = this.getSymmetricPosX(p, l), v = this.getGridIndex(y, f);
                if (!u.has(h) && !u.has(v)) {
                    u.add(h);
                    u.add(v);
                    this.checkPosValid(p, f, s, c) && this.checkPosValid(y, f, s, c) && r.push([cc.v3(p, f, e), cc.v3(y, f, e)]);
                }
            }
        for (f = 0; f <= n; f++)
            this.checkPosValid(d, f, s, c) && a.push(cc.v3(d, f, e));
    };
    BoardAddBlockTrait.prototype.getUnUsedTileTypes = function (t) {
        var e = new Set();
        t.tileObjectMap().forEach(function (t) {
            e.add(t.resId);
        });
        return this.getSupportedResIds().filter(function (t) {
            return !e.has(t);
        });
    };
    BoardAddBlockTrait.prototype.isSupportAll = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.supportAll) && void 0 !== e && e;
    };
    BoardAddBlockTrait.prototype.getSupportedResIds = function () {
        return (this.isSupportAll() ? y : h).concat();
    };
    BoardAddBlockTrait.prototype.getNonSymmetricPos = function (t) {
        var e = this, r = t.maxMapWidth, a = [], i = t.tileObjectMap();
        i.forEach(function (t) {
            if (t.isValid) {
                var o = e.getSymmetricPosX(t.gridPosX, r), n = t.gridPosY, l = t.layer, s = o + "-" + n + "-" + l;
                i.has(s) || a.push(cc.v3(o, n, l));
            }
        });
        return a;
    };
    BoardAddBlockTrait.prototype.tryFillSymmetric = function (t, e) {
        var r = t.getTileMapObject();
        if (e.length % 2 != 0) {
            var a = this.getMiddlePos(r);
            if (!a)
                return false;
            e.push(a);
        }
        for (var i = this.getUnUsedTileTypes(r), o = e.length / 2; i.length < o;)
            i.push(43);
        var n = i.slice(0, o);
        this.tryPaintColor(t, e, n);
        return true;
    };
    BoardAddBlockTrait.prototype.tryPaintColor = function (t, e, r) {
        for (var a = Date.now(), i = TileMapSimulator_1.TileMapSimulator.createSim(t), o = i.mapLayers(), l = [], s = 0; s < e.length; s++) {
            var c = e[s], u = c.z < o.length ? o[c.z] : null;
            if (!this.checkPosValid(c.x, c.y, u, null))
                return false;
            var d = i.appendCard({
                pos: {
                    x: c.x,
                    y: c.y,
                    z: c.z
                },
                isAlive: true,
                id: 0
            });
            if (!d)
                return false;
            l.push(d);
        }
        var p = this.getPairCombines(l, a), h = null;
        for (s = 0; s < p.length; s++) {
            var y = p[s];
            if (Date.now() - a >= 50)
                return false;
            if (this.checkTileCombines(i, y, r)) {
                h = y;
                break;
            }
        }
        if (!h)
            return false;
        var v = t.getTileMapObject(), g = [];
        for (s = 0; s < h.length; s++) {
            var m = __read(h[s], 2), x = m[0], b = m[1], C = {
                pos: {
                    x: x.gridPosX,
                    y: x.gridPosY,
                    z: x.layer
                },
                isAlive: true,
                id: x.resId
            }, T = {
                pos: {
                    x: b.gridPosX,
                    y: b.gridPosY,
                    z: b.layer
                },
                isAlive: true,
                id: b.resId
            };
            g.push(C);
            g.push(T);
            v.appendCard(C);
            v.appendCard(T);
        }
        v.updateInitGameLayer();
        v.updateCanMatchTiles();
        this.cacheAddBlock(t.gameType, t.getGameData().getLevelId(), g);
        return true;
    };
    BoardAddBlockTrait.prototype.checkTileCombines = function (t, e, r) {
        for (var a = [], i = 0; i < e.length; i++) {
            var o = __read(e[i], 2), l = o[0], s = o[1];
            l.changeResId(r[i]);
            s.changeResId(r[i]);
            l.isValid = true;
            s.isValid = true;
            a.push(l);
            a.push(s);
        }
        return this.tryClearAll(t, a, e);
    };
    BoardAddBlockTrait.prototype.tryClearAll = function (t, e, r) {
        if (e.every(function (t) {
            return !t.isValid;
        }))
            return true;
        var a = t.aliveTiles().filter(function (t) {
            return 0 === t.isCardLock();
        }), i = r.filter(function (t) {
            var e = __read(t, 2), r = e[0], i = e[1];
            return a.includes(r) && a.includes(i);
        });
        if (0 === i.length)
            return false;
        for (var o = 0; o < i.length; o++) {
            var l = __read(i[o], 2), s = l[0], c = l[1];
            s.isValid = false;
            c.isValid = false;
        }
        return this.tryClearAll(t, e, r);
    };
    BoardAddBlockTrait.prototype.getPairCombines = function (t, e) {
        if (t.length % 2 != 0 || 0 === t.length)
            return [];
        var r = [], a = function a(t, i) {
            if (0 === t.length) {
                r.push(__spreadArrays(i));
                return false;
            }
            if (Date.now() - e >= 16.666666666666668)
                return true;
            for (var o = t[0], n = 1; n < t.length; n++) {
                var s = [o, t[n]], c = t.slice(1, n).concat(t.slice(n + 1));
                i.push(s);
                var u = a(c, i);
                i.pop();
                if (u)
                    return true;
            }
            return false;
        };
        a(t, []);
        return r;
    };
    BoardAddBlockTrait.prototype.getMiddlePos = function (t) {
        for (var e = t.mapLayers(), r = t.mapCol, a = t.mapRow, i = t.maxLayerIndex, o = r / 2, n = 0; n <= a; n++)
            for (var l = 0; l <= i + 1; l++)
                if (this.checkPosValid(o, n, e[l], 0 == l ? null : e[l - 1]))
                    return cc.v3(o, n, l);
        return null;
    };
    BoardAddBlockTrait.prototype.onBombCdTp_getBombClrIds = function (t, e) {
        if (this.checkGameMode()) {
            var r = __read(t.args, 2), a = r[0], i = r[1], o = this.getCachedAddBlocks(a.gameType, a.getGameData().getLevelId());
            if (o) {
                var l = o.bombs;
                if (i.some(function (t) {
                    return !l.includes(t);
                }))
                    e();
                else {
                    var s = a.getTileMapObject(), c = s.aliveTiles().filter(function (t) {
                        return t.type === TileTypeEnum_1.ETileType.Bomb && l.includes(t.id) && 0 === s.isCardLock(t);
                    });
                    if (c.length < 2)
                        e();
                    else {
                        var u = [c[0].id, c[1].id];
                        e({
                            returnType: TraitCallbackReturnType.return,
                            isBreak: true,
                            returnVal: u
                        });
                    }
                }
            }
            else
                e();
        }
        else
            e();
    };
    BoardAddBlockTrait.prototype.onDGameStart_adjust = function (t, e) {
        if (this.checkGameMode()) {
            var r = __read(t.args, 2), a = r[0], i = r[1];
            this.addDotGameStart(a, i);
            e();
        }
        else
            e();
    };
    BoardAddBlockTrait.prototype.addDotGameStart = function (t, e) {
        var r = e.getGameData().getCurrentLevelId(), a = this.getCachedAddBlocks(e.gameType, r);
        a && a.cardInfos.length > 0 && (t.add_tiles = a.cardInfos.map(function (t) {
            return t.pos.x + "-" + t.pos.y + "-" + t.pos.z + "|" + t.id;
        }));
    };
    BoardAddBlockTrait.prototype.onDGameEnd_adjust = function (t, e) {
        if (this.checkGameMode()) {
            var r = __read(t.args, 3), a = r[0], i = r[1], o = r[2];
            this.addDotGameEnd(a, i, o);
            e();
        }
        else
            e();
    };
    BoardAddBlockTrait.prototype.addDotGameEnd = function (t, e) {
        var r = e.getGameData().getCurrentLevelId(), a = this.getCachedAddBlocks(e.gameType, r);
        a && a.cardInfos.length > 0 && (t.add_tiles = a.cardInfos.map(function (t) {
            return t.pos.x + "-" + t.pos.y + "-" + t.pos.z + "|" + t.id;
        }));
    };
    BoardAddBlockTrait.prototype.testAllSelect = function (t, e, r) {
        for (var a = Date.now(), i = 0; i < e.length; i++) {
            var o = TileMapSimulator_1.TileMapSimulator.createSim(t), n = __spreadArrays(e);
            this.selectPairs(n, [], r, o, a, i);
        }
    };
    BoardAddBlockTrait.traitKey = "BoardAddBlock";
    BoardAddBlockTrait = __decorate([
        mj.trait,
        mj.class("BoardAddBlockTrait")
    ], BoardAddBlockTrait);
    return BoardAddBlockTrait;
}(ExtractTrait_1.default));
exports.default = BoardAddBlockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkZEJsb2NrL1NjcmlwdHMvQm9hcmRBZGRCbG9ja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNEU7QUFDNUUsOERBQXlEO0FBQ3pELHNGQUFpRjtBQUNqRixpRkFBNkU7QUFDN0UsOEVBQTZFO0FBQzdFLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDakIsTUFBTSxFQUFFLEVBQUU7Q0FDWCxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDZixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFHdk07SUFBZ0Qsc0NBQVk7SUFBNUQ7O0lBK2xCQSxDQUFDO0lBN2xCQyxzQkFB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QUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFB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LHNCQUFZLEdBK2xCM0Q7a0JBL2xCb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgR2FtZUNvbnN0YW50IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUNvbnN0YW50JztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBUaWxlTWFwU2ltdWxhdG9yIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9vYmplY3RzL1RpbGVNYXBTaW11bGF0b3InO1xudmFyIGggPSBBcnJheS5mcm9tKHtcbiAgbGVuZ3RoOiAzNFxufSwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgcmV0dXJuIGU7XG59KTtcbnZhciB5ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNTUsIDU2LCA1NywgNTgsIDU5LCA2MCwgNjEsIDYyXTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQm9hcmRBZGRCbG9ja1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZEFkZEJsb2NrVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkJvYXJkQWRkQmxvY2tcIjtcbiAgZ2V0IGFkZFBhaXJDb3VudCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmFkZFBhaXJDb3VudCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDA7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldENhY2hlS2V5KHQpIHtcbiAgICByZXR1cm4gdCArIFwiX3RpbGVzXCI7XG4gIH1cbiAgY2FjaGVBZGRCbG9jayh0LCBlLCByKSB7XG4gICAgdmFyIGEgPSB0aGlzLmdldENhY2hlS2V5KHQpO1xuICAgIHRoaXMubG9jYWxEYXRhW2FdID0ge1xuICAgICAgbGV2ZWxJZDogZSxcbiAgICAgIGNhcmRJbmZvczogcixcbiAgICAgIGJvbWJzOiByLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gNDMgPT09IHQuaWQ7XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQucG9zLnggKyBcIi1cIiArIHQucG9zLnkgKyBcIi1cIiArIHQucG9zLno7XG4gICAgICB9KVxuICAgIH07XG4gIH1cbiAgZ2V0Q2FjaGVkQWRkQmxvY2tzKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0Q2FjaGVLZXkodCksXG4gICAgICBhID0gdGhpcy5sb2NhbERhdGFbcl07XG4gICAgcmV0dXJuIG51bGwgPT0gYSB8fCBcIlwiID09PSBhID8gbnVsbCA6IGEubGV2ZWxJZCAhPT0gZSA/IG51bGwgOiBhO1xuICB9XG4gIG9uSXB0U2V0THZfcmVHZW5GYWNlc0FmdGVyKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gdC5pbnMsXG4gICAgICAgIGEgPSB0LmFyZ3NbMF0sXG4gICAgICAgIGkgPSBhLmxldmVsRGF0YS5sZXZlbElkO1xuICAgICAgaWYgKEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNGaXhlZExldmVsKGkpKSBlKCk7ZWxzZSBpZiAoYS5sZXZlbERhdGEuaXNOZXdHYW1lICYmICFhLmxldmVsRGF0YS5pc1Jlc3RhcnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgbyA9IHIuZ2FtZUNvbnRleHQsXG4gICAgICAgICAgICBuID0gby5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICAgICAgICBsID0gdGhpcy5nZXROb25TeW1tZXRyaWNQb3Mobik7XG4gICAgICAgICAgaWYgKGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50cnlGaWxsU3ltbWV0cmljKG8sIGwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyeUFkZEJsb2NrKG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQm9hcmRBZGRCbG9ja1RyYWl0XSDlop7liqDlnZflpLHotKU6IFwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IFwi5pyq55+l6ZSZ6K+vXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25JcHRUMlNldEx2X2dlbkZjc0FmdGVyKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gdC5pbnMsXG4gICAgICAgIGEgPSB0LmFyZ3NbMF0sXG4gICAgICAgIGkgPSBhLmxldmVsRGF0YS5sZXZlbElkO1xuICAgICAgaWYgKEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNGaXhlZExldmVsKGkpKSBlKCk7ZWxzZSBpZiAoYS5sZXZlbERhdGEuaXNSZXN0YXJ0KSBlKCk7ZWxzZSBpZiAoYS5sZXZlbERhdGEuaXNOZXdHYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIG8gPSByLmdhbWVDb250ZXh0LFxuICAgICAgICAgICAgbiA9IG8uZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgICAgICAgbCA9IHRoaXMuZ2V0Tm9uU3ltbWV0cmljUG9zKG4pO1xuICAgICAgICAgIGlmIChsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudHJ5RmlsbFN5bW1ldHJpYyhvLCBsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cnlBZGRCbG9jayhvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0JvYXJkQWRkQmxvY2tUcmFpdF0g5aKe5Yqg5Z2X5aSx6LSlOiBcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIuacquefpemUmeivr1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIHRyeUFkZEJsb2NrKHQpIHtcbiAgICB2YXIgZSA9IHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgciA9IFRpbGVNYXBTaW11bGF0b3IuY3JlYXRlU2ltKHQpLFxuICAgICAgYSA9IHRoaXMuZ2V0QXZhaWxhYmxlUG9zKHIpO1xuICAgIGlmIChhLmxlbmd0aCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGkgPSB0aGlzLmFkZFBhaXJDb3VudCxcbiAgICAgIG8gPSBbLi4uYV0sXG4gICAgICBuID0gW10sXG4gICAgICBzID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnNlbGVjdFBhaXJzKG8sIG4sIGksIHIsIHMpO1xuICAgIGlmIChuLmxlbmd0aCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5maWxsQ29sb3IodCwgbiwgZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZmlsbENvbG9yKHQsIGUsIHIpIHtcbiAgICBmb3IgKHZhciBhID0gdGhpcywgaSA9IHRoaXMuZ2V0VW5Vc2VkVGlsZVR5cGVzKHIpLCBvID0gZS5sZW5ndGg7IGkubGVuZ3RoIDwgbzspIGkucHVzaCg0Myk7XG4gICAgZm9yICh2YXIgbiA9IGkuc2xpY2UoMCwgbyksIGwgPSBbXSwgcyA9IGUucmVkdWNlKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiB0LmNvbmNhdChlKTtcbiAgICAgIH0sIFtdKSwgYyA9IGZ1bmN0aW9uIGModCwgZSkge1xuICAgICAgICBpZiAocy5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIE1hdGguZmxvb3IodCAvIDIpO1xuICAgICAgICB2YXIgciA9IG51bGw7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgcy5zb3J0KGZ1bmN0aW9uICh0LCByKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5nZXREaXN0YW5jZVNxcih0LCBlKSAtIGEuZ2V0RGlzdGFuY2VTcXIociwgZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgciA9IHMuc2hpZnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHMubGVuZ3RoKTtcbiAgICAgICAgICByID0gc1tpXTtcbiAgICAgICAgICBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sIHUgPSBudWxsLCBkID0gMDsgZCA8IG87IGQrKykge1xuICAgICAgdmFyIHAgPSBudWxsLFxuICAgICAgICBmID0gbnVsbDtcbiAgICAgIGlmICgwID09PSBkKSB7XG4gICAgICAgIHAgPSBjKDIgKiBkLCBudWxsKTtcbiAgICAgICAgZiA9IGMoMiAqIGQgKyAxLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHAgPSBjKDIgKiBkLCB1KTtcbiAgICAgICAgZiA9IGMoMiAqIGQgKyAxLCBudWxsKTtcbiAgICAgIH1cbiAgICAgIGlmICghcCB8fCAhZikgYnJlYWs7XG4gICAgICB1ID0gZjtcbiAgICAgIHZhciBoID0ge1xuICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgeDogcC54LFxuICAgICAgICAgICAgeTogcC55LFxuICAgICAgICAgICAgejogcC56XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0FsaXZlOiB0cnVlLFxuICAgICAgICAgIGlkOiBuW2RdXG4gICAgICAgIH0sXG4gICAgICAgIHkgPSB7XG4gICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICB4OiBmLngsXG4gICAgICAgICAgICB5OiBmLnksXG4gICAgICAgICAgICB6OiBmLnpcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWxpdmU6IHRydWUsXG4gICAgICAgICAgaWQ6IG5bZF1cbiAgICAgICAgfTtcbiAgICAgIGwucHVzaChoKTtcbiAgICAgIGwucHVzaCh5KTtcbiAgICAgIHIuYXBwZW5kQ2FyZChoKTtcbiAgICAgIHIuYXBwZW5kQ2FyZCh5KTtcbiAgICB9XG4gICAgci51cGRhdGVJbml0R2FtZUxheWVyKCk7XG4gICAgci51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgdGhpcy5jYWNoZUFkZEJsb2NrKHQuZ2FtZVR5cGUsIHQuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbElkKCksIGwpO1xuICB9XG4gIGdldERpc3RhbmNlU3FyKHQsIGUpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codC54IC0gZS54LCAyKSArIE1hdGgucG93KHQueSAtIGUueSwgMik7XG4gIH1cbiAgaXNPdmVybGFwKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIGEsXG4gICAgICBpID0gX19yZWFkKHQsIDIpLFxuICAgICAgbyA9IGlbMF0sXG4gICAgICBsID0gaVsxXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKGUpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IF9fcmVhZCh1LnZhbHVlLCAyKSxcbiAgICAgICAgICBwID0gZFswXSxcbiAgICAgICAgICBmID0gZFsxXTtcbiAgICAgICAgaWYgKE1hdGguYWJzKG8ueCAtIHAueCkgPCAyICYmIE1hdGguYWJzKG8ueSAtIHAueSkgPCAyIHx8IE1hdGguYWJzKGwueCAtIGYueCkgPCAyICYmIE1hdGguYWJzKGwueSAtIGYueSkgPCAyIHx8IE1hdGguYWJzKG8ueCAtIGYueCkgPCAyICYmIE1hdGguYWJzKG8ueSAtIGYueSkgPCAyIHx8IE1hdGguYWJzKGwueCAtIHAueCkgPCAyICYmIE1hdGguYWJzKGwueSAtIHAueSkgPCAyKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChhID0gYy5yZXR1cm4pICYmIGEuY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaXNMb2NrZWQodCwgZSwgcikge1xuICAgIHZhciBhLFxuICAgICAgaSxcbiAgICAgIG8gPSBfX3JlYWQodCwgMiksXG4gICAgICBjID0gb1swXSxcbiAgICAgIHUgPSBvWzFdLFxuICAgICAgZCA9IGUuYXBwZW5kQ2FyZCh7XG4gICAgICAgIHBvczoge1xuICAgICAgICAgIHg6IGMueCxcbiAgICAgICAgICB5OiBjLnksXG4gICAgICAgICAgejogYy56XG4gICAgICAgIH0sXG4gICAgICAgIGlzQWxpdmU6IHRydWUsXG4gICAgICAgIGlkOiAwXG4gICAgICB9KTtcbiAgICBpZiAoIWQpIHJldHVybiB0cnVlO1xuICAgIHZhciBwID0gZS5hcHBlbmRDYXJkKHtcbiAgICAgIHBvczoge1xuICAgICAgICB4OiB1LngsXG4gICAgICAgIHk6IHUueSxcbiAgICAgICAgejogdS56XG4gICAgICB9LFxuICAgICAgaXNBbGl2ZTogdHJ1ZSxcbiAgICAgIGlkOiAwXG4gICAgfSk7XG4gICAgaWYgKCFwKSB7XG4gICAgICBlLnJlbW92ZUNhcmQoZCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGYgPSBmYWxzZSxcbiAgICAgIGggPSBbLi4uW2QuaWQsIHAuaWRdLCAuLi5yXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKGgpLCB2ID0geS5uZXh0KCk7ICF2LmRvbmU7IHYgPSB5Lm5leHQoKSkge1xuICAgICAgICB2YXIgZyA9IHYudmFsdWUsXG4gICAgICAgICAgbSA9IGUuZ2V0VGlsZU9iamVjdChnKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgZiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuaXNIYXNMZWZ0KG0pICYmIGUuaXNIYXNSaWdodChtKSkge1xuICAgICAgICAgIGYgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAoaSA9IHkucmV0dXJuKSAmJiBpLmNhbGwoeSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZS5yZW1vdmVDYXJkKGQpO1xuICAgIGUucmVtb3ZlQ2FyZChwKTtcbiAgICByZXR1cm4gZjtcbiAgfVxuICBzZWxlY3RQYWlycyh0LCBlLCByLCBhLCBpLCBvID0gLTEpIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgaWYgKCEoZS5sZW5ndGggPj0gciB8fCAwID09IHQubGVuZ3RoIHx8IERhdGUubm93KCkgLSBpID49IDUwKSkge1xuICAgICAgdmFyIGwgPSBlLmxlbmd0aCxcbiAgICAgICAgcyA9IC0xO1xuICAgICAgaWYgKDAgPT09IGwpIHtcbiAgICAgICAgaWYgKC0xICE9PSBvKSB0aGlzLmlzTG9ja2VkKHRbb10sIGEsIFtdKSB8fCAocyA9IG8pO2Vsc2UgZm9yICh2YXIgYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHQubGVuZ3RoKSwgdSA9IDA7IHUgPCB0Lmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgdmFyIGQgPSAoYyArIHUpICUgdC5sZW5ndGg7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzTG9ja2VkKHRbZF0sIGEsIFtdKSkge1xuICAgICAgICAgICAgcyA9IGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwID0gZVtsIC0gMV07XG4gICAgICAgIHQuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgIHJldHVybiBuLmdldERpc3RhbmNlU3FyKHRbMF0sIHBbMF0pIC0gbi5nZXREaXN0YW5jZVNxcihlWzBdLCBwWzBdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmID0gW107XG4gICAgICAgIGUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGYucHVzaCh0WzBdLnggKyBcIi1cIiArIHRbMF0ueSArIFwiLVwiICsgdFswXS56KTtcbiAgICAgICAgICBmLnB1c2godFsxXS54ICsgXCItXCIgKyB0WzFdLnkgKyBcIi1cIiArIHRbMV0ueik7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHUgPSAwOyB1IDwgdC5sZW5ndGg7IHUrKykge1xuICAgICAgICAgIHZhciBoID0gdFt1XTtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNPdmVybGFwKGgsIGUpICYmICF0aGlzLmlzTG9ja2VkKGgsIGEsIGYpKSB7XG4gICAgICAgICAgICBzID0gdTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKC0xICE9PSBzKSB7XG4gICAgICAgIGEuYXBwZW5kQ2FyZCh7XG4gICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICB4OiB0W3NdWzBdLngsXG4gICAgICAgICAgICB5OiB0W3NdWzBdLnksXG4gICAgICAgICAgICB6OiB0W3NdWzBdLnpcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWxpdmU6IHRydWUsXG4gICAgICAgICAgaWQ6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIGEuYXBwZW5kQ2FyZCh7XG4gICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICB4OiB0W3NdWzFdLngsXG4gICAgICAgICAgICB5OiB0W3NdWzFdLnksXG4gICAgICAgICAgICB6OiB0W3NdWzFdLnpcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWxpdmU6IHRydWUsXG4gICAgICAgICAgaWQ6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIGUucHVzaCh0W3NdKTtcbiAgICAgICAgdC5zcGxpY2UocywgMSk7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFpcnModCwgZSwgciwgYSwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldEF2YWlsYWJsZVBvcyh0KSB7XG4gICAgdmFyIGUgPSB0Lm1heExheWVySW5kZXgsXG4gICAgICByID0gW10sXG4gICAgICBhID0gW107XG4gICAgdGhpcy5nZXRBdmFpbGFibGVQb3NJbkxheWVyKHQsIGUsIHIsIGEpO1xuICAgIHRoaXMuZ2V0QXZhaWxhYmxlUG9zSW5MYXllcih0LCBlICsgMSwgciwgYSk7XG4gICAgaWYgKGEubGVuZ3RoID4gMSkgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSBmb3IgKHZhciBvID0gaSArIDE7IG8gPCBhLmxlbmd0aDsgbysrKSBNYXRoLmFicyhhW2ldLnkgLSBhW29dLnkpID49IDIgJiYgci5wdXNoKFthW2ldLCBhW29dXSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgY2hlY2tDYXJkUG9zSW52YWxpZCh0LCBlKSB7XG4gICAgcmV0dXJuICEoZSA8IDAgfHwgZSA+PSAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFggfHwgdCA8IDAgfHwgdCA+PSAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFkpO1xuICB9XG4gIGdldEdyaWRJbmRleCh0LCBlKSB7XG4gICAgcmV0dXJuIGUgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCAqIDIgKyB0O1xuICB9XG4gIGdldE93bmVyR3JpZElkcyh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdldEdyaWRJbmRleCh0LCBlKSxcbiAgICAgIGEgPSBBcnJheS5mcm9tKHtcbiAgICAgICAgbGVuZ3RoOiA0XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSk7XG4gICAgYVswXSA9IHI7XG4gICAgYVsxXSA9IHIgKyAxO1xuICAgIGFbMl0gPSByICsgMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYO1xuICAgIGFbM10gPSByICsgMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYICsgMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBnZXRTeW1tZXRyaWNQb3NYKHQsIGUpIHtcbiAgICByZXR1cm4gMiAqIChlIC0gMSkgLSB0O1xuICB9XG4gIGNoZWNrUG9zVmFsaWQodCwgZSwgciwgYSkge1xuICAgIHZhciBpLCBvLCBuLCBsO1xuICAgIGlmICghdGhpcy5jaGVja0NhcmRQb3NJbnZhbGlkKGUsIHQpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGMgPSB0aGlzLmdldE93bmVyR3JpZElkcyh0LCBlKTtcbiAgICBpZiAocikgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhjKSwgZCA9IHUubmV4dCgpOyAhZC5kb25lOyBkID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSBkLnZhbHVlO1xuICAgICAgICBpZiAoci5pc0hhc0NhcmQocCkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChvID0gdS5yZXR1cm4pICYmIG8uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYSkgdHJ5IHtcbiAgICAgIGZvciAodmFyIGYgPSBfX3ZhbHVlcyhjKSwgaCA9IGYubmV4dCgpOyAhaC5kb25lOyBoID0gZi5uZXh0KCkpIHtcbiAgICAgICAgcCA9IGgudmFsdWU7XG4gICAgICAgIGlmICghYS5pc0hhc0NhcmQocCkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaCAmJiAhaC5kb25lICYmIChsID0gZi5yZXR1cm4pICYmIGwuY2FsbChmKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRBdmFpbGFibGVQb3NJbkxheWVyKHQsIGUsIHIsIGEpIHtcbiAgICBmb3IgKHZhciBpID0gdC5tYXBMYXllcnMoKSwgbyA9IHQubWFwQ29sLCBuID0gdC5tYXBSb3csIGwgPSB0Lm1heE1hcFdpZHRoLCBzID0gaVtlXSwgYyA9IGUgLSAxID49IDAgPyBpW2UgLSAxXSA6IG51bGwsIHUgPSBuZXcgU2V0KCksIGQgPSBvIC8gMiwgcCA9IDA7IHAgPCBkOyBwKyspIGZvciAodmFyIGYgPSAwOyBmIDw9IG47IGYrKykge1xuICAgICAgdmFyIGggPSB0aGlzLmdldEdyaWRJbmRleChwLCBmKSxcbiAgICAgICAgeSA9IHRoaXMuZ2V0U3ltbWV0cmljUG9zWChwLCBsKSxcbiAgICAgICAgdiA9IHRoaXMuZ2V0R3JpZEluZGV4KHksIGYpO1xuICAgICAgaWYgKCF1LmhhcyhoKSAmJiAhdS5oYXModikpIHtcbiAgICAgICAgdS5hZGQoaCk7XG4gICAgICAgIHUuYWRkKHYpO1xuICAgICAgICB0aGlzLmNoZWNrUG9zVmFsaWQocCwgZiwgcywgYykgJiYgdGhpcy5jaGVja1Bvc1ZhbGlkKHksIGYsIHMsIGMpICYmIHIucHVzaChbY2MudjMocCwgZiwgZSksIGNjLnYzKHksIGYsIGUpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoZiA9IDA7IGYgPD0gbjsgZisrKSB0aGlzLmNoZWNrUG9zVmFsaWQoZCwgZiwgcywgYykgJiYgYS5wdXNoKGNjLnYzKGQsIGYsIGUpKTtcbiAgfVxuICBnZXRVblVzZWRUaWxlVHlwZXModCkge1xuICAgIHZhciBlID0gbmV3IFNldCgpO1xuICAgIHQudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUuYWRkKHQucmVzSWQpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmdldFN1cHBvcnRlZFJlc0lkcygpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuICFlLmhhcyh0KTtcbiAgICB9KTtcbiAgfVxuICBpc1N1cHBvcnRBbGwoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zdXBwb3J0QWxsKSAmJiB2b2lkIDAgIT09IGUgJiYgZTtcbiAgfVxuICBnZXRTdXBwb3J0ZWRSZXNJZHMoKSB7XG4gICAgcmV0dXJuICh0aGlzLmlzU3VwcG9ydEFsbCgpID8geSA6IGgpLmNvbmNhdCgpO1xuICB9XG4gIGdldE5vblN5bW1ldHJpY1Bvcyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgciA9IHQubWF4TWFwV2lkdGgsXG4gICAgICBhID0gW10sXG4gICAgICBpID0gdC50aWxlT2JqZWN0TWFwKCk7XG4gICAgaS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAodC5pc1ZhbGlkKSB7XG4gICAgICAgIHZhciBvID0gZS5nZXRTeW1tZXRyaWNQb3NYKHQuZ3JpZFBvc1gsIHIpLFxuICAgICAgICAgIG4gPSB0LmdyaWRQb3NZLFxuICAgICAgICAgIGwgPSB0LmxheWVyLFxuICAgICAgICAgIHMgPSBvICsgXCItXCIgKyBuICsgXCItXCIgKyBsO1xuICAgICAgICBpLmhhcyhzKSB8fCBhLnB1c2goY2MudjMobywgbiwgbCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhO1xuICB9XG4gIHRyeUZpbGxTeW1tZXRyaWModCwgZSkge1xuICAgIHZhciByID0gdC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgaWYgKGUubGVuZ3RoICUgMiAhPSAwKSB7XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0TWlkZGxlUG9zKHIpO1xuICAgICAgaWYgKCFhKSByZXR1cm4gZmFsc2U7XG4gICAgICBlLnB1c2goYSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSB0aGlzLmdldFVuVXNlZFRpbGVUeXBlcyhyKSwgbyA9IGUubGVuZ3RoIC8gMjsgaS5sZW5ndGggPCBvOykgaS5wdXNoKDQzKTtcbiAgICB2YXIgbiA9IGkuc2xpY2UoMCwgbyk7XG4gICAgdGhpcy50cnlQYWludENvbG9yKHQsIGUsIG4pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeVBhaW50Q29sb3IodCwgZSwgcikge1xuICAgIGZvciAodmFyIGEgPSBEYXRlLm5vdygpLCBpID0gVGlsZU1hcFNpbXVsYXRvci5jcmVhdGVTaW0odCksIG8gPSBpLm1hcExheWVycygpLCBsID0gW10sIHMgPSAwOyBzIDwgZS5sZW5ndGg7IHMrKykge1xuICAgICAgdmFyIGMgPSBlW3NdLFxuICAgICAgICB1ID0gYy56IDwgby5sZW5ndGggPyBvW2Muel0gOiBudWxsO1xuICAgICAgaWYgKCF0aGlzLmNoZWNrUG9zVmFsaWQoYy54LCBjLnksIHUsIG51bGwpKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgZCA9IGkuYXBwZW5kQ2FyZCh7XG4gICAgICAgIHBvczoge1xuICAgICAgICAgIHg6IGMueCxcbiAgICAgICAgICB5OiBjLnksXG4gICAgICAgICAgejogYy56XG4gICAgICAgIH0sXG4gICAgICAgIGlzQWxpdmU6IHRydWUsXG4gICAgICAgIGlkOiAwXG4gICAgICB9KTtcbiAgICAgIGlmICghZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgbC5wdXNoKGQpO1xuICAgIH1cbiAgICB2YXIgcCA9IHRoaXMuZ2V0UGFpckNvbWJpbmVzKGwsIGEpLFxuICAgICAgaCA9IG51bGw7XG4gICAgZm9yIChzID0gMDsgcyA8IHAubGVuZ3RoOyBzKyspIHtcbiAgICAgIHZhciB5ID0gcFtzXTtcbiAgICAgIGlmIChEYXRlLm5vdygpIC0gYSA+PSA1MCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHRoaXMuY2hlY2tUaWxlQ29tYmluZXMoaSwgeSwgcikpIHtcbiAgICAgICAgaCA9IHk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWgpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdiA9IHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgZyA9IFtdO1xuICAgIGZvciAocyA9IDA7IHMgPCBoLmxlbmd0aDsgcysrKSB7XG4gICAgICB2YXIgbSA9IF9fcmVhZChoW3NdLCAyKSxcbiAgICAgICAgeCA9IG1bMF0sXG4gICAgICAgIGIgPSBtWzFdLFxuICAgICAgICBDID0ge1xuICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgeDogeC5ncmlkUG9zWCxcbiAgICAgICAgICAgIHk6IHguZ3JpZFBvc1ksXG4gICAgICAgICAgICB6OiB4LmxheWVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0FsaXZlOiB0cnVlLFxuICAgICAgICAgIGlkOiB4LnJlc0lkXG4gICAgICAgIH0sXG4gICAgICAgIFQgPSB7XG4gICAgICAgICAgcG9zOiB7XG4gICAgICAgICAgICB4OiBiLmdyaWRQb3NYLFxuICAgICAgICAgICAgeTogYi5ncmlkUG9zWSxcbiAgICAgICAgICAgIHo6IGIubGF5ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzQWxpdmU6IHRydWUsXG4gICAgICAgICAgaWQ6IGIucmVzSWRcbiAgICAgICAgfTtcbiAgICAgIGcucHVzaChDKTtcbiAgICAgIGcucHVzaChUKTtcbiAgICAgIHYuYXBwZW5kQ2FyZChDKTtcbiAgICAgIHYuYXBwZW5kQ2FyZChUKTtcbiAgICB9XG4gICAgdi51cGRhdGVJbml0R2FtZUxheWVyKCk7XG4gICAgdi51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgdGhpcy5jYWNoZUFkZEJsb2NrKHQuZ2FtZVR5cGUsIHQuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbElkKCksIGcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNoZWNrVGlsZUNvbWJpbmVzKHQsIGUsIHIpIHtcbiAgICBmb3IgKHZhciBhID0gW10sIGkgPSAwOyBpIDwgZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG8gPSBfX3JlYWQoZVtpXSwgMiksXG4gICAgICAgIGwgPSBvWzBdLFxuICAgICAgICBzID0gb1sxXTtcbiAgICAgIGwuY2hhbmdlUmVzSWQocltpXSk7XG4gICAgICBzLmNoYW5nZVJlc0lkKHJbaV0pO1xuICAgICAgbC5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIHMuaXNWYWxpZCA9IHRydWU7XG4gICAgICBhLnB1c2gobCk7XG4gICAgICBhLnB1c2gocyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRyeUNsZWFyQWxsKHQsIGEsIGUpO1xuICB9XG4gIHRyeUNsZWFyQWxsKHQsIGUsIHIpIHtcbiAgICBpZiAoZS5ldmVyeShmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuICF0LmlzVmFsaWQ7XG4gICAgfSkpIHJldHVybiB0cnVlO1xuICAgIHZhciBhID0gdC5hbGl2ZVRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAwID09PSB0LmlzQ2FyZExvY2soKTtcbiAgICAgIH0pLFxuICAgICAgaSA9IHIuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gX19yZWFkKHQsIDIpLFxuICAgICAgICAgIHIgPSBlWzBdLFxuICAgICAgICAgIGkgPSBlWzFdO1xuICAgICAgICByZXR1cm4gYS5pbmNsdWRlcyhyKSAmJiBhLmluY2x1ZGVzKGkpO1xuICAgICAgfSk7XG4gICAgaWYgKDAgPT09IGkubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCBpLmxlbmd0aDsgbysrKSB7XG4gICAgICB2YXIgbCA9IF9fcmVhZChpW29dLCAyKSxcbiAgICAgICAgcyA9IGxbMF0sXG4gICAgICAgIGMgPSBsWzFdO1xuICAgICAgcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICBjLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHJ5Q2xlYXJBbGwodCwgZSwgcik7XG4gIH1cbiAgZ2V0UGFpckNvbWJpbmVzKHQsIGUpIHtcbiAgICBpZiAodC5sZW5ndGggJSAyICE9IDAgfHwgMCA9PT0gdC5sZW5ndGgpIHJldHVybiBbXTtcbiAgICB2YXIgciA9IFtdLFxuICAgICAgYSA9IGZ1bmN0aW9uIGEodCwgaSkge1xuICAgICAgICBpZiAoMCA9PT0gdC5sZW5ndGgpIHtcbiAgICAgICAgICByLnB1c2goWy4uLmldKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBlID49IDE2LjY2NjY2NjY2NjY2NjY2OCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGZvciAodmFyIG8gPSB0WzBdLCBuID0gMTsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICB2YXIgcyA9IFtvLCB0W25dXSxcbiAgICAgICAgICAgIGMgPSB0LnNsaWNlKDEsIG4pLmNvbmNhdCh0LnNsaWNlKG4gKyAxKSk7XG4gICAgICAgICAgaS5wdXNoKHMpO1xuICAgICAgICAgIHZhciB1ID0gYShjLCBpKTtcbiAgICAgICAgICBpLnBvcCgpO1xuICAgICAgICAgIGlmICh1KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgIGEodCwgW10pO1xuICAgIHJldHVybiByO1xuICB9XG4gIGdldE1pZGRsZVBvcyh0KSB7XG4gICAgZm9yICh2YXIgZSA9IHQubWFwTGF5ZXJzKCksIHIgPSB0Lm1hcENvbCwgYSA9IHQubWFwUm93LCBpID0gdC5tYXhMYXllckluZGV4LCBvID0gciAvIDIsIG4gPSAwOyBuIDw9IGE7IG4rKykgZm9yICh2YXIgbCA9IDA7IGwgPD0gaSArIDE7IGwrKykgaWYgKHRoaXMuY2hlY2tQb3NWYWxpZChvLCBuLCBlW2xdLCAwID09IGwgPyBudWxsIDogZVtsIC0gMV0pKSByZXR1cm4gY2MudjMobywgbiwgbCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb25Cb21iQ2RUcF9nZXRCb21iQ2xySWRzKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gX19yZWFkKHQuYXJncywgMiksXG4gICAgICAgIGEgPSByWzBdLFxuICAgICAgICBpID0gclsxXSxcbiAgICAgICAgbyA9IHRoaXMuZ2V0Q2FjaGVkQWRkQmxvY2tzKGEuZ2FtZVR5cGUsIGEuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbElkKCkpO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgdmFyIGwgPSBvLmJvbWJzO1xuICAgICAgICBpZiAoaS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuICFsLmluY2x1ZGVzKHQpO1xuICAgICAgICB9KSkgZSgpO2Vsc2Uge1xuICAgICAgICAgIHZhciBzID0gYS5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICAgICAgICBjID0gcy5hbGl2ZVRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0LnR5cGUgPT09IEVUaWxlVHlwZS5Cb21iICYmIGwuaW5jbHVkZXModC5pZCkgJiYgMCA9PT0gcy5pc0NhcmRMb2NrKHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGMubGVuZ3RoIDwgMikgZSgpO2Vsc2Uge1xuICAgICAgICAgICAgdmFyIHUgPSBbY1swXS5pZCwgY1sxXS5pZF07XG4gICAgICAgICAgICBlKHtcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IHVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uREdhbWVTdGFydF9hZGp1c3QodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBfX3JlYWQodC5hcmdzLCAyKSxcbiAgICAgICAgYSA9IHJbMF0sXG4gICAgICAgIGkgPSByWzFdO1xuICAgICAgdGhpcy5hZGREb3RHYW1lU3RhcnQoYSwgaSk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBhZGREb3RHYW1lU3RhcnQodCwgZSkge1xuICAgIHZhciByID0gZS5nZXRHYW1lRGF0YSgpLmdldEN1cnJlbnRMZXZlbElkKCksXG4gICAgICBhID0gdGhpcy5nZXRDYWNoZWRBZGRCbG9ja3MoZS5nYW1lVHlwZSwgcik7XG4gICAgYSAmJiBhLmNhcmRJbmZvcy5sZW5ndGggPiAwICYmICh0LmFkZF90aWxlcyA9IGEuY2FyZEluZm9zLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQucG9zLnggKyBcIi1cIiArIHQucG9zLnkgKyBcIi1cIiArIHQucG9zLnogKyBcInxcIiArIHQuaWQ7XG4gICAgfSkpO1xuICB9XG4gIG9uREdhbWVFbmRfYWRqdXN0KHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gX19yZWFkKHQuYXJncywgMyksXG4gICAgICAgIGEgPSByWzBdLFxuICAgICAgICBpID0gclsxXSxcbiAgICAgICAgbyA9IHJbMl07XG4gICAgICB0aGlzLmFkZERvdEdhbWVFbmQoYSwgaSwgbyk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBhZGREb3RHYW1lRW5kKHQsIGUpIHtcbiAgICB2YXIgciA9IGUuZ2V0R2FtZURhdGEoKS5nZXRDdXJyZW50TGV2ZWxJZCgpLFxuICAgICAgYSA9IHRoaXMuZ2V0Q2FjaGVkQWRkQmxvY2tzKGUuZ2FtZVR5cGUsIHIpO1xuICAgIGEgJiYgYS5jYXJkSW5mb3MubGVuZ3RoID4gMCAmJiAodC5hZGRfdGlsZXMgPSBhLmNhcmRJbmZvcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LnBvcy54ICsgXCItXCIgKyB0LnBvcy55ICsgXCItXCIgKyB0LnBvcy56ICsgXCJ8XCIgKyB0LmlkO1xuICAgIH0pKTtcbiAgfVxuICB0ZXN0QWxsU2VsZWN0KHQsIGUsIHIpIHtcbiAgICBmb3IgKHZhciBhID0gRGF0ZS5ub3coKSwgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbyA9IFRpbGVNYXBTaW11bGF0b3IuY3JlYXRlU2ltKHQpLFxuICAgICAgICBuID0gWy4uLmVdO1xuICAgICAgdGhpcy5zZWxlY3RQYWlycyhuLCBbXSwgciwgbywgYSwgaSk7XG4gICAgfVxuICB9XG59Il19
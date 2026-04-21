"use strict";
cc._RF.push(module, '6e826bc/HFKcqzTEH3R0Xml', 'BoardSubBlockTrait');
// subpackages/l_subBlock/Scripts/BoardSubBlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var LevelUtil_1 = require("../../../Scripts/core/simulator/config/LevelUtil");
var TileMapSimulator_1 = require("../../../Scripts/objects/TileMapSimulator");
var BoardSubBlockTrait = /** @class */ (function (_super) {
    __extends(BoardSubBlockTrait, _super);
    function BoardSubBlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BoardSubBlockTrait.prototype, "subPairCount", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.subPairCount) && void 0 !== t ? t : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoardSubBlockTrait.prototype, "isRemoveOperable", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.removeOperable) && void 0 !== t && t;
        },
        enumerable: false,
        configurable: true
    });
    BoardSubBlockTrait.prototype.getCacheKey = function (e) {
        return e + "_tiles";
    };
    BoardSubBlockTrait.prototype.cacheSubBlock = function (e, t, r) {
        var o = this.getCacheKey(e);
        this.localData[o] = {
            levelId: t,
            cardInfos: r
        };
    };
    BoardSubBlockTrait.prototype.getCachedSubBlocks = function (e, t) {
        var r = this.getCacheKey(e), o = this.localData[r];
        return null == o || "" === o ? null : o.levelId !== t ? null : o;
    };
    BoardSubBlockTrait.prototype.onIptSetLv_reGenFaces = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.ins, o = e.args[0], a = o.levelData.levelId;
            if (ExtractTool_1.default.getInstance().isFixedLevel(a))
                t();
            else if (o.levelData.isNewGame && !o.levelData.isRestart) {
                try {
                    this.trySubBlock(r.gameContext);
                }
                catch (e) {
                    console.error("[BoardSubBlockTrait] 减少块失败: " + ((null == e ? void 0 : e.message) || "未知错误"));
                }
                t();
            }
            else
                t();
        }
        else
            t();
    };
    BoardSubBlockTrait.prototype.onIptT2SetLv_reGenFaces = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.ins, o = e.args[0], a = o.levelData.levelId;
            if (ExtractTool_1.default.getInstance().isFixedLevel(a))
                t();
            else if (o.levelData.isRestart)
                t();
            else if (o.levelData.isNewGame) {
                try {
                    this.trySubBlock(r.gameContext);
                }
                catch (e) {
                    console.error("[BoardSubBlockTrait] 减少块失败: " + ((null == e ? void 0 : e.message) || "未知错误"));
                }
                t();
            }
            else
                t();
        }
        else
            t();
    };
    BoardSubBlockTrait.prototype.trySubBlock = function (e) {
        var t, r;
        if (!(this.subPairCount <= 0)) {
            var o = [], a = this.getSolvers(e), i = e.getTileMapObject(), c = i.aliveTiles(), s = 2 * this.subPairCount;
            if (!(c.length <= s)) {
                if (a && a.length > 0) {
                    this.selectFromSolvers(e, a, o);
                }
                else {
                    if (this.isRemoveOperable) {
                        this.selectFromInitOperablePairs(e, o);
                    }
                    else {
                        this.selectFromBoard(e, o);
                    }
                }
                if (!(o.length <= 0)) {
                    var u = [];
                    try {
                        for (var d = __values(o), f = d.next(); !f.done; f = d.next()) {
                            var p = __read(f.value, 2), v = p[0], h = p[1], y = {
                                pos: {
                                    x: v.gridPosX,
                                    y: v.gridPosY,
                                    z: v.layer
                                },
                                isAlive: true,
                                id: v.resId
                            }, g = {
                                pos: {
                                    x: h.gridPosX,
                                    y: h.gridPosY,
                                    z: h.layer
                                },
                                isAlive: true,
                                id: h.resId
                            };
                            u.push(y);
                            u.push(g);
                            i.removeCard(v);
                            i.removeCard(h);
                        }
                    }
                    catch (e) {
                        t = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            f && !f.done && (r = d.return) && r.call(d);
                        }
                        finally {
                            if (t)
                                throw t.error;
                        }
                    }
                    this.cacheSubBlock(e.gameType, e.getGameData().getLevelId(), u);
                    i.updateInitGameLayer();
                    i.updateCanMatchTiles();
                }
            }
        }
    };
    BoardSubBlockTrait.prototype.getSolvers = function (e) {
        var t = e.getGameData().getLevelIndex(), r = e.getGameData().getLevelName(), o = e.getGameData().getLevelId(), a = e.gameType, i = ExtractTool_1.default.getInstance().getSolvers(a, o, t, r);
        return null == i || "" === i ? null : LevelUtil_1.LevelUtil.parseSolver(i);
    };
    BoardSubBlockTrait.prototype.selectFromSolvers = function (e, t, r) {
        var o = TileMapSimulator_1.TileMapSimulator.createSim(e), a = Date.now();
        this.selectRemovePair(e, o, t, r, a);
    };
    BoardSubBlockTrait.prototype.selectRemovePair = function (e, t, r, o, a) {
        var i, l;
        if (o.length >= this.subPairCount)
            return true;
        if (Date.now() - a >= 50)
            return true;
        try {
            for (var c = __values(r), s = c.next(); !s.done; s = c.next()) {
                var u = s.value, d = u.coord1.x + "-" + u.coord1.y + "-" + u.coord1.z, f = u.coord2.x + "-" + u.coord2.y + "-" + u.coord2.z, p = t.getTileObject(d), v = t.getTileObject(f), h = e.getTileMapObject().getTileObject(d), y = e.getTileMapObject().getTileObject(f);
                if (p && v && h && y && p.isValid && v.isValid && p.cardId == v.cardId && 0 == t.isCardLock(p) && 0 == t.isCardLock(v)) {
                    o.push([h, y]);
                    p.isValid = false;
                    v.isValid = false;
                    if (this.selectRemovePair(e, t, r, o, a))
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
                s && !s.done && (l = c.return) && l.call(c);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return false;
    };
    BoardSubBlockTrait.prototype.selectFromInitOperablePairs = function (e, t) {
        var r, o, a, i, l = e.getTileMapObject(), c = l.aliveTiles(), s = new Map(), u = new Set();
        try {
            for (var d = __values(c), f = d.next(); !f.done; f = d.next()) {
                var p = f.value;
                if (0 === l.isCardLock(p)) {
                    s.has(p.cardId) || s.set(p.cardId, []);
                    s.get(p.cardId).push(p);
                    s.get(p.cardId).length >= 2 && u.add(p.cardId);
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
                f && !f.done && (o = d.return) && o.call(d);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (!(u.size <= 0)) {
            var v = Array.from(u), h = this.subPairCount;
            try {
                for (var y = __values(v), g = y.next(); !g.done; g = y.next())
                    for (var m = g.value, b = s.get(m), _ = Math.floor(b.length / 2), x = 0; x < _ && !(t.length >= h); x++)
                        t.push([b[2 * x], b[2 * x + 1]]);
            }
            catch (e) {
                a = {
                    error: e
                };
            }
            finally {
                try {
                    g && !g.done && (i = y.return) && i.call(y);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            }
        }
    };
    BoardSubBlockTrait.prototype.selectFromBoard = function (e, t) {
        var r, o, a = e.getTileMapObject(), i = a.aliveTiles(), l = new Map();
        try {
            for (var c = __values(i), s = c.next(); !s.done; s = c.next()) {
                var u = s.value;
                l.has(u.cardId) || l.set(u.cardId, {
                    count: 0,
                    unlocks: []
                });
                l.get(u.cardId).count++;
                0 === a.isCardLock(u) && l.get(u.cardId).unlocks.push(u);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = c.return) && o.call(c);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var d = Array.from(l.entries()).sort(function (e, t) {
            return t[1].count - e[1].count;
        }).filter(function (e) {
            return e[1].count === e[1].unlocks.length && e[1].count % 2 == 0;
        }).reduce(function (e, t) {
            return e.concat(t[1].unlocks);
        }, []);
        if (!(d.length <= 0))
            for (var f = 2 * this.subPairCount, p = d.slice(0, f), v = 0; v < p.length; v += 2)
                t.push([p[v], p[v + 1]]);
    };
    BoardSubBlockTrait.prototype.onDGameStart_adjust = function (e, t) {
        if (this.checkGameMode()) {
            var r = __read(e.args, 2), o = r[0], a = r[1];
            this.addDotGameStart(o, a);
            t();
        }
        else
            t();
    };
    BoardSubBlockTrait.prototype.addDotGameStart = function (e, t) {
        var r = t.getGameData().getCurrentLevelId(), o = this.getCachedSubBlocks(t.gameType, r);
        o && o.cardInfos.length > 0 && (e.delete_tiles = o.cardInfos.map(function (e) {
            return e.pos.x + "-" + e.pos.y + "-" + e.pos.z + "|" + e.id;
        }));
    };
    BoardSubBlockTrait.prototype.onDGameEnd_adjust = function (e, t) {
        if (this.checkGameMode()) {
            var r = __read(e.args, 3), o = r[0], a = r[1], i = r[2];
            this.addDotGameEnd(o, a, i);
            t();
        }
        else
            t();
    };
    BoardSubBlockTrait.prototype.addDotGameEnd = function (e, t) {
        var r = t.getGameData().getCurrentLevelId(), o = this.getCachedSubBlocks(t.gameType, r);
        o && o.cardInfos.length > 0 && (e.delete_tiles = o.cardInfos.map(function (e) {
            return e.pos.x + "-" + e.pos.y + "-" + e.pos.z + "|" + e.id;
        }));
    };
    BoardSubBlockTrait.traitKey = "BoardSubBlock";
    BoardSubBlockTrait = __decorate([
        mj.trait,
        mj.class("BoardSubBlockTrait")
    ], BoardSubBlockTrait);
    return BoardSubBlockTrait;
}(ExtractTrait_1.default));
exports.default = BoardSubBlockTrait;

cc._RF.pop();
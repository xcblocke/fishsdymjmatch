"use strict";
cc._RF.push(module, '675c6imjhlHlKnHWcfS9Jx8', 'Tile2TileTypesModifier');
// Scripts/process/tile2/Tile2TileTypesModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var BombCardType_1 = require("../../tileTypes/BombCardType");
var ColorCardType_1 = require("../../tileTypes/ColorCardType");
var DaxiaoCardType_1 = require("../../tileTypes/DaxiaoCardType");
var DuoxiaoCardType_1 = require("../../tileTypes/DuoxiaoCardType");
var RankCardType_1 = require("../../tileTypes/RankCardType");
var RollCardType_1 = require("../../tileTypes/RollCardType");
var TileGenerateStrategyRegistry_1 = require("../../TileGenerateStrategyRegistry");
var Tile2TileTypesModifier = /** @class */ (function (_super) {
    __extends(Tile2TileTypesModifier, _super);
    function Tile2TileTypesModifier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tileTypesMap = new Map();
        _this._typeList = [TileTypeEnum_1.ETileType.RollCard, TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.ColorCard, TileTypeEnum_1.ETileType.Bomb, TileTypeEnum_1.ETileType.DaxiaoCard, TileTypeEnum_1.ETileType.DuoxiaoCard];
        return _this;
    }
    Tile2TileTypesModifier.prototype.resetFunc = function () {
        this._tileTypesMap.clear();
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.RollCard, RollCardType_1.default.modify.bind(RollCardType_1.default));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.RankCard, RankCardType_1.RankCardType.modify.bind(RankCardType_1.RankCardType));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.ColorCard, ColorCardType_1.ColorCardType.modify.bind(ColorCardType_1.ColorCardType));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.Bomb, BombCardType_1.BombCardType.modify.bind(BombCardType_1.BombCardType));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.DaxiaoCard, DaxiaoCardType_1.default.modify.bind(DaxiaoCardType_1.default));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.DuoxiaoCard, DuoxiaoCardType_1.default.modify.bind(DuoxiaoCardType_1.default));
    };
    Tile2TileTypesModifier.prototype.stringToTileType = function (e) {
        if (Object.values(TileTypeEnum_1.ETileType).includes(e))
            return e;
    };
    Tile2TileTypesModifier.prototype.modifyTileTypes = function (e) {
        var t, o, n, i, a = new Array();
        if (e) {
            var l = e.split(",");
            try {
                for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value;
                    u && a.push(this.stringToTileType(u));
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
        this.resetFunc();
        var p = this._context.getGameData().getTileStrategies(), f = TileGenerateStrategyRegistry_1.TileGenerateStrategyRegistry.getStrategies(p);
        try {
            for (var d = __values(f), h = d.next(); !h.done; h = d.next())
                h.value.run(this._context, this._typeList, a, this._tileTypesMap);
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (i = d.return) && i.call(d);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        this.setGamePlayMethod(a);
        this.saveToGameData();
    };
    Tile2TileTypesModifier.prototype.setGamePlayMethod = function (e) {
        var t = 0;
        if (e.includes(TileTypeEnum_1.ETileType.Yoga)) {
            t = 1;
        }
        else {
            if (e.includes(TileTypeEnum_1.ETileType.RollCard)) {
                t = 2;
            }
            else {
                e.includes(TileTypeEnum_1.ETileType.ColorCard) && (t = 3);
            }
        }
        this.context.getGameData().setGamePlayMethod(t);
    };
    Tile2TileTypesModifier.prototype.saveToGameData = function () {
        var e = {}, t = {};
        this._context.getTileMapObject().tileObjectMap().forEach(function (o) {
            var n = o.saveKey(), i = o.getExtraInfo();
            i && (e[n] = i);
            if (o.originalResId !== o.resId) {
                t[o.type] || (t[o.type] = []);
                t[o.type].push({
                    origin: o.originalResId,
                    id: n
                });
            }
        });
        this._context.getGameData().setTileTypesExtra(JSON.stringify(e));
        this._context.getGameData().setReplaceInfo(t);
    };
    Tile2TileTypesModifier.prototype.saveToGameDataForRestart = function () {
        var e = {}, t = {};
        this._context.getTileMapObject().tileObjectMap().forEach(function (o) {
            var n = o.saveKey(), i = o.getExtraInfo();
            i && (e[n] = i);
            if (o.originalResId !== o.resId) {
                t[o.type] || (t[o.type] = []);
                t[o.type].push({
                    origin: o.originalResId,
                    id: n
                });
            }
        });
        this._context.getGameData().setOriginalTileTypesExtra(JSON.stringify(e));
        this._context.getGameData().setOriginalReplaceInfo(JSON.stringify(t));
    };
    Tile2TileTypesModifier.prototype.modifyFromLocal = function () {
        var e, t, o = this._context.getTileMapObject(), n = this._context.getGameData().getTileTypesExtra();
        if (n)
            try {
                var i = JSON.parse(n);
                for (var l in i) {
                    var s = __read(l.split("-"), 3), c = s[0], u = s[1], p = s[2];
                    o.setTileTypeByPosExtra({
                        x: Number(c),
                        y: Number(u),
                        z: Number(p)
                    }, i[l]);
                }
            }
            catch (e) { }
        var f = this._context.getGameData().getReplaceInfo();
        for (var d in f)
            try {
                for (var h = (e = void 0, __values(f[d])), y = h.next(); !y.done; y = h.next()) {
                    var m = y.value, v = __read(m.id.split("-"), 3);
                    c = v[0], u = v[1], p = v[2];
                    o.setTileOriginalResIdByPos({
                        x: Number(c),
                        y: Number(u),
                        z: Number(p)
                    }, m.origin);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    y && !y.done && (t = h.return) && t.call(h);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
    };
    Tile2TileTypesModifier.prototype.modifyFromLocalForRestart = function () {
        var e, t, o = this._context.getTileMapObject(), n = this._context.getGameData().getOriginalTileTypesExtra();
        if (n)
            try {
                var i = JSON.parse(n);
                for (var l in i) {
                    var s = __read(l.split("-"), 3), c = s[0], u = s[1], p = s[2];
                    o.setTileTypeByPosExtra({
                        x: Number(c),
                        y: Number(u),
                        z: Number(p)
                    }, i[l]);
                }
            }
            catch (e) { }
        var f = this._context.getGameData().getOriginalReplaceInfo();
        for (var d in f)
            try {
                for (var h = (e = void 0, __values(f[d])), y = h.next(); !y.done; y = h.next()) {
                    var m = y.value, v = __read(m.id.split("-"), 3);
                    c = v[0], u = v[1], p = v[2];
                    o.setTileOriginalResIdByPos({
                        x: Number(c),
                        y: Number(u),
                        z: Number(p)
                    }, m.origin);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    y && !y.done && (t = h.return) && t.call(h);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
    };
    return Tile2TileTypesModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2TileTypesModifier;

cc._RF.pop();
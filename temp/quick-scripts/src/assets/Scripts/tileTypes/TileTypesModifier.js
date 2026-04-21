"use strict";
cc._RF.push(module, '4c1f4xR55hOCbFlt+b3qmYv', 'TileTypesModifier');
// Scripts/tileTypes/TileTypesModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETileTypesExtra = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var BombCardType_1 = require("./BombCardType");
var ColorCardType_1 = require("./ColorCardType");
var DaxiaoCardType_1 = require("./DaxiaoCardType");
var DuoxiaoCardType_1 = require("./DuoxiaoCardType");
var RankCardType_1 = require("./RankCardType");
var RollCardType_1 = require("./RollCardType");
exports.ETileTypesExtra = {
    DuoxiaoCount: "duoxiaoCount"
};
var TileTypesModifier = /** @class */ (function (_super) {
    __extends(TileTypesModifier, _super);
    function TileTypesModifier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tileTypesMap = new Map();
        _this._typeList = [TileTypeEnum_1.ETileType.RollCard, TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.ColorCard, TileTypeEnum_1.ETileType.Bomb, TileTypeEnum_1.ETileType.DaxiaoCard, TileTypeEnum_1.ETileType.DuoxiaoCard];
        return _this;
    }
    TileTypesModifier.prototype.resetFunc = function () {
        this._tileTypesMap.clear();
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.RollCard, RollCardType_1.default.modify.bind(RollCardType_1.default));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.RankCard, RankCardType_1.RankCardType.modify.bind(RankCardType_1.RankCardType));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.ColorCard, ColorCardType_1.ColorCardType.modify.bind(ColorCardType_1.ColorCardType));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.Bomb, BombCardType_1.BombCardType.modify.bind(BombCardType_1.BombCardType));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.DaxiaoCard, DaxiaoCardType_1.default.modify.bind(DaxiaoCardType_1.default));
        this._tileTypesMap.set(TileTypeEnum_1.ETileType.DuoxiaoCard, DuoxiaoCardType_1.default.modify.bind(DuoxiaoCardType_1.default));
    };
    TileTypesModifier.prototype.stringToTileType = function (e) {
        if (Object.values(TileTypeEnum_1.ETileType).includes(e))
            return e;
    };
    TileTypesModifier.prototype.modifyTileTypes = function (e) {
        var t, o, n = new Array();
        if (e) {
            var i = e.split(",");
            try {
                for (var r = __values(i), l = r.next(); !l.done; l = r.next())
                    (c = l.value) && n.push(this.stringToTileType(c));
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (o = r.return) && o.call(r);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        this.resetFunc();
        for (var s = 0; s < this._typeList.length; s++) {
            var c = this._typeList[s];
            n.includes(c) && this._tileTypesMap.get(c)(this._context);
        }
        this.setGamePlayMethod(n);
        if (this._context.gameType === GameTypeEnums_1.MjGameType.Classic) {
            this.saveToGameDataFix();
        }
        else {
            this.saveToGameData();
        }
    };
    TileTypesModifier.prototype.setGamePlayMethod = function (e) {
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
    TileTypesModifier.prototype.resetModifyTileTypes = function () { };
    TileTypesModifier.prototype.modifyFromLocal = function () {
        var e, t, o, n, i, r;
        this.resetModifyTileTypes();
        if (this.isUserFix())
            return this.modifyFromLocalFix();
        var l = this._context.getTileMapObject(), c = this._context.getGameData().getTileId2Type(), u = this._context.getGameData().getCardId2Type(), p = this._context.getGameData().getTileTypesExtra();
        if (c)
            try {
                var f = JSON.parse(c);
                for (var d in f)
                    l.setTileType(d, f[d]);
            }
            catch (e) { }
        if (u)
            try {
                f = JSON.parse(u);
                var h = l.tileObjectMap();
                try {
                    for (var y = __values(h.values()), m = y.next(); !m.done; m = y.next()) {
                        var v = m.value;
                        f[v.cardId] && l.setTileType(v.id, f[v.cardId]);
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        m && !m.done && (t = y.return) && t.call(y);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
            }
            catch (e) { }
        if (p)
            try {
                f = JSON.parse(p);
                for (var d in f)
                    if (null === (i = f[d]) || void 0 === i ? void 0 : i[exports.ETileTypesExtra.DuoxiaoCount]) {
                        var g = Number(null === (r = f[d]) || void 0 === r ? void 0 : r[exports.ETileTypesExtra.DuoxiaoCount]);
                        l.setDuoxiaoCount(d, g);
                    }
            }
            catch (e) { }
        var _ = this._context.getGameData().getReplaceInfo();
        for (var T in _)
            try {
                for (var C = (o = void 0, __values(_[T])), b = C.next(); !b.done; b = C.next()) {
                    var E = b.value;
                    l.setTileOriginalResId(E.id, E.origin);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    b && !b.done && (n = C.return) && n.call(C);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
    };
    TileTypesModifier.prototype.isNeedSaveToGameData = function (e) {
        return [TileTypeEnum_1.ETileType.RollCard, TileTypeEnum_1.ETileType.DaxiaoCard, TileTypeEnum_1.ETileType.DuoxiaoCard].includes(e);
    };
    TileTypesModifier.prototype.isNeedSaveToGameDataByType = function (e) {
        return [TileTypeEnum_1.ETileType.ColorCard].includes(e);
    };
    TileTypesModifier.prototype.getNeedSaveToGameDataExtra = function (e) {
        var _t = {};
        _t[exports.ETileTypesExtra.DuoxiaoCount] = e.getDuoxiaoCount();
        if (e.type == TileTypeEnum_1.ETileType.DuoxiaoCard)
            return _t;
    };
    TileTypesModifier.prototype.isUserFix = function () {
        return false;
    };
    TileTypesModifier.prototype.saveToGameData = function () {
        var e = this;
        if (this.isUserFix())
            return this.saveToGameDataFix();
        var t = {}, o = {}, n = {}, i = {};
        this._context.getTileMapObject().tileObjectMap().forEach(function (r, a) {
            if (e.isNeedSaveToGameData(r.type)) {
                t[a] = r.type;
            }
            else {
                e.isNeedSaveToGameDataByType(r.type) && (o[r.cardId] = r.type);
            }
            var l = e.getNeedSaveToGameDataExtra(r);
            l && (n[a] = l);
            if (r.originalResId !== r.resId) {
                i[r.type] || (i[r.type] = []);
                i[r.type].push({
                    origin: r.originalResId,
                    id: a
                });
            }
        });
        this._context.getGameData().setTileId2Type(JSON.stringify(t));
        this._context.getGameData().setCardId2Type(JSON.stringify(o));
        this._context.getGameData().setTileTypesExtra(JSON.stringify(n));
        this._context.getGameData().setReplaceInfo(i);
    };
    TileTypesModifier.prototype.modifyBombCard = function (e, t) {
        this._context.getTileMapObject().selcectTileId(t[0], true);
        this._context.getTileMapObject().selcectTileId(t[1], true);
        this._context.clearModifier.modifyClear(e, GameTypeEnums_1.EMergeType.Bomb);
        this._context.comboModifier.addCombo(1);
        return {
            addScore: this._context.scoreModifier.calAddScore(),
            combo: this._context.getGameData().getComboNum(),
            showCombo: this._context.comboChecker.canShowCombo()
        };
    };
    TileTypesModifier.prototype.modifyBombCard_travel = function (e, t) {
        this._context.getTileMapObject().selcectTileId(t[0], true);
        this._context.getTileMapObject().selcectTileId(t[1], true);
        this._context.clearModifier.modifyClear(e, GameTypeEnums_1.EMergeType.Bomb);
    };
    TileTypesModifier.prototype.saveToGameDataFix = function () {
        var e = this, t = {}, o = {}, n = {}, i = {};
        this._context.getTileMapObject().tileObjectMap().forEach(function (r) {
            var a = r.saveKey();
            if (e.isNeedSaveToGameData(r.type)) {
                t[a] = r.type;
            }
            else {
                e.isNeedSaveToGameDataByType(r.type) && (o[r.cardId] = r.type);
            }
            var l = e.getNeedSaveToGameDataExtra(r);
            l && (n[a] = l);
            if (r.originalResId !== r.resId) {
                i[r.type] || (i[r.type] = []);
                i[r.type].push({
                    origin: r.originalResId,
                    id: a
                });
            }
        });
        this._context.getGameData().setTileId2Type(JSON.stringify(t));
        this._context.getGameData().setCardId2Type(JSON.stringify(o));
        this._context.getGameData().setTileTypesExtra(JSON.stringify(n));
        this._context.getGameData().setReplaceInfo(i);
    };
    TileTypesModifier.prototype.modifyFromLocalFix = function () {
        var e, t, o, n, i, r, c = this._context.getTileMapObject(), u = this._context.getGameData().getTileId2Type(), p = this._context.getGameData().getCardId2Type(), f = this._context.getGameData().getTileTypesExtra();
        if (u)
            try {
                var d = JSON.parse(u);
                for (var h in d) {
                    var y = __read(h.split("-"), 3), m = y[0], v = y[1], g = y[2];
                    c.setTileTypeByPos({
                        x: Number(m),
                        y: Number(v),
                        z: Number(g)
                    }, d[h]);
                }
            }
            catch (e) { }
        if (p)
            try {
                d = JSON.parse(p);
                var _ = c.tileObjectMap();
                try {
                    for (var T = __values(_.values()), C = T.next(); !C.done; C = T.next()) {
                        var b = C.value;
                        d[b.cardId] && c.setTileType(b.id, d[b.cardId]);
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        C && !C.done && (t = T.return) && t.call(T);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
            }
            catch (e) { }
        if (f)
            try {
                d = JSON.parse(f);
                for (var h in d) {
                    var E = __read(h.split("-"), 3);
                    m = E[0], v = E[1], g = E[2];
                    if (null === (i = d[h]) || void 0 === i ? void 0 : i[exports.ETileTypesExtra.DuoxiaoCount]) {
                        var S = Number(null === (r = d[h]) || void 0 === r ? void 0 : r[exports.ETileTypesExtra.DuoxiaoCount]);
                        c.setDuoxiaoCountByPos({
                            x: Number(m),
                            y: Number(v),
                            z: Number(g)
                        }, S);
                    }
                }
            }
            catch (e) { }
        var I = this._context.getGameData().getReplaceInfo();
        for (var w in I)
            try {
                for (var B = (o = void 0, __values(I[w])), x = B.next(); !x.done; x = B.next()) {
                    var M = x.value, O = __read(M.id.split("-"), 3);
                    m = O[0], v = O[1], g = O[2];
                    c.setTileOriginalResIdByPos({
                        x: Number(m),
                        y: Number(v),
                        z: Number(g)
                    }, M.origin);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    x && !x.done && (n = B.return) && n.call(B);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
    };
    __decorate([
        mj.traitEvent("TileTyModiy_resetMTypes")
    ], TileTypesModifier.prototype, "resetModifyTileTypes", null);
    __decorate([
        mj.traitEvent("TileTyModiy_isUserFix")
    ], TileTypesModifier.prototype, "isUserFix", null);
    return TileTypesModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = TileTypesModifier;

cc._RF.pop();
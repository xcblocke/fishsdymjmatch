
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tileTypes/TileTypesModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVUeXBlcy9UaWxlVHlwZXNNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCwwRUFBa0Y7QUFDbEYsbUVBQStEO0FBQy9ELCtDQUE4QztBQUM5QyxpREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLHFEQUFnRDtBQUNoRCwrQ0FBOEM7QUFDOUMsK0NBQTBDO0FBQy9CLFFBQUEsZUFBZSxHQUFHO0lBQzNCLFlBQVksRUFBRSxjQUFjO0NBQzdCLENBQUM7QUFDRjtJQUErQyxxQ0FBYztJQUE3RDtRQUFBLHFFQWtTQztRQWpTQyxtQkFBYSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsZUFBUyxHQUFHLENBQUMsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsd0JBQVMsQ0FBQyxTQUFTLEVBQUUsd0JBQVMsQ0FBQyxJQUFJLEVBQUUsd0JBQVMsQ0FBQyxVQUFVLEVBQUUsd0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFnU3pJLENBQUM7SUEvUkMscUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsc0JBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHdCQUFTLENBQUMsUUFBUSxFQUFFLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyx3QkFBUyxDQUFDLFNBQVMsRUFBRSw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQWEsQ0FBQyxDQUFDLENB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LENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUMseUJBQXlCLENBQUM7d0JBQzFCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUNiLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNkO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtJQUNILENBQUM7SUFwT0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO2lFQUNoQjtJQXNFekI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3NEQUd0QztJQTZKSCx3QkFBQztDQWxTRCxBQWtTQyxDQWxTOEMsK0JBQWMsR0FrUzVEO2tCQWxTb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlLCBFTWVyZ2VUeXBlIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEJvbWJDYXJkVHlwZSB9IGZyb20gJy4vQm9tYkNhcmRUeXBlJztcbmltcG9ydCB7IENvbG9yQ2FyZFR5cGUgfSBmcm9tICcuL0NvbG9yQ2FyZFR5cGUnO1xuaW1wb3J0IERheGlhb0NhcmRUeXBlIGZyb20gJy4vRGF4aWFvQ2FyZFR5cGUnO1xuaW1wb3J0IER1b3hpYW9DYXJkVHlwZSBmcm9tICcuL0R1b3hpYW9DYXJkVHlwZSc7XG5pbXBvcnQgeyBSYW5rQ2FyZFR5cGUgfSBmcm9tICcuL1JhbmtDYXJkVHlwZSc7XG5pbXBvcnQgUm9sbENhcmRUeXBlIGZyb20gJy4vUm9sbENhcmRUeXBlJztcbmV4cG9ydCB2YXIgRVRpbGVUeXBlc0V4dHJhID0ge1xuICBEdW94aWFvQ291bnQ6IFwiZHVveGlhb0NvdW50XCJcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlVHlwZXNNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgX3RpbGVUeXBlc01hcCA9IG5ldyBNYXAoKTtcbiAgX3R5cGVMaXN0ID0gW0VUaWxlVHlwZS5Sb2xsQ2FyZCwgRVRpbGVUeXBlLlJhbmtDYXJkLCBFVGlsZVR5cGUuQ29sb3JDYXJkLCBFVGlsZVR5cGUuQm9tYiwgRVRpbGVUeXBlLkRheGlhb0NhcmQsIEVUaWxlVHlwZS5EdW94aWFvQ2FyZF07XG4gIHJlc2V0RnVuYygpIHtcbiAgICB0aGlzLl90aWxlVHlwZXNNYXAuY2xlYXIoKTtcbiAgICB0aGlzLl90aWxlVHlwZXNNYXAuc2V0KEVUaWxlVHlwZS5Sb2xsQ2FyZCwgUm9sbENhcmRUeXBlLm1vZGlmeS5iaW5kKFJvbGxDYXJkVHlwZSkpO1xuICAgIHRoaXMuX3RpbGVUeXBlc01hcC5zZXQoRVRpbGVUeXBlLlJhbmtDYXJkLCBSYW5rQ2FyZFR5cGUubW9kaWZ5LmJpbmQoUmFua0NhcmRUeXBlKSk7XG4gICAgdGhpcy5fdGlsZVR5cGVzTWFwLnNldChFVGlsZVR5cGUuQ29sb3JDYXJkLCBDb2xvckNhcmRUeXBlLm1vZGlmeS5iaW5kKENvbG9yQ2FyZFR5cGUpKTtcbiAgICB0aGlzLl90aWxlVHlwZXNNYXAuc2V0KEVUaWxlVHlwZS5Cb21iLCBCb21iQ2FyZFR5cGUubW9kaWZ5LmJpbmQoQm9tYkNhcmRUeXBlKSk7XG4gICAgdGhpcy5fdGlsZVR5cGVzTWFwLnNldChFVGlsZVR5cGUuRGF4aWFvQ2FyZCwgRGF4aWFvQ2FyZFR5cGUubW9kaWZ5LmJpbmQoRGF4aWFvQ2FyZFR5cGUpKTtcbiAgICB0aGlzLl90aWxlVHlwZXNNYXAuc2V0KEVUaWxlVHlwZS5EdW94aWFvQ2FyZCwgRHVveGlhb0NhcmRUeXBlLm1vZGlmeS5iaW5kKER1b3hpYW9DYXJkVHlwZSkpO1xuICB9XG4gIHN0cmluZ1RvVGlsZVR5cGUoZSkge1xuICAgIGlmIChPYmplY3QudmFsdWVzKEVUaWxlVHlwZSkuaW5jbHVkZXMoZSkpIHJldHVybiBlO1xuICB9XG4gIG1vZGlmeVRpbGVUeXBlcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IG5ldyBBcnJheSgpO1xuICAgIGlmIChlKSB7XG4gICAgICB2YXIgaSA9IGUuc3BsaXQoXCIsXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKGkpLCBsID0gci5uZXh0KCk7ICFsLmRvbmU7IGwgPSByLm5leHQoKSkgKGMgPSBsLnZhbHVlKSAmJiBuLnB1c2godGhpcy5zdHJpbmdUb1RpbGVUeXBlKGMpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKG8gPSByLnJldHVybikgJiYgby5jYWxsKHIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVzZXRGdW5jKCk7XG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCB0aGlzLl90eXBlTGlzdC5sZW5ndGg7IHMrKykge1xuICAgICAgdmFyIGMgPSB0aGlzLl90eXBlTGlzdFtzXTtcbiAgICAgIG4uaW5jbHVkZXMoYykgJiYgdGhpcy5fdGlsZVR5cGVzTWFwLmdldChjKSh0aGlzLl9jb250ZXh0KTtcbiAgICB9XG4gICAgdGhpcy5zZXRHYW1lUGxheU1ldGhvZChuKTtcbiAgICBpZiAodGhpcy5fY29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLnNhdmVUb0dhbWVEYXRhRml4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2F2ZVRvR2FtZURhdGEoKTtcbiAgICB9XG4gIH1cbiAgc2V0R2FtZVBsYXlNZXRob2QoZSkge1xuICAgIHZhciB0ID0gMDtcbiAgICBpZiAoZS5pbmNsdWRlcyhFVGlsZVR5cGUuWW9nYSkpIHtcbiAgICAgIHQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS5pbmNsdWRlcyhFVGlsZVR5cGUuUm9sbENhcmQpKSB7XG4gICAgICAgIHQgPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5pbmNsdWRlcyhFVGlsZVR5cGUuQ29sb3JDYXJkKSAmJiAodCA9IDMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5zZXRHYW1lUGxheU1ldGhvZCh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGVUeU1vZGl5X3Jlc2V0TVR5cGVzXCIpXG4gIHJlc2V0TW9kaWZ5VGlsZVR5cGVzKCkge31cbiAgbW9kaWZ5RnJvbUxvY2FsKCkge1xuICAgIHZhciBlLCB0LCBvLCBuLCBpLCByO1xuICAgIHRoaXMucmVzZXRNb2RpZnlUaWxlVHlwZXMoKTtcbiAgICBpZiAodGhpcy5pc1VzZXJGaXgoKSkgcmV0dXJuIHRoaXMubW9kaWZ5RnJvbUxvY2FsRml4KCk7XG4gICAgdmFyIGwgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIGMgPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0VGlsZUlkMlR5cGUoKSxcbiAgICAgIHUgPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q2FyZElkMlR5cGUoKSxcbiAgICAgIHAgPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0VGlsZVR5cGVzRXh0cmEoKTtcbiAgICBpZiAoYykgdHJ5IHtcbiAgICAgIHZhciBmID0gSlNPTi5wYXJzZShjKTtcbiAgICAgIGZvciAodmFyIGQgaW4gZikgbC5zZXRUaWxlVHlwZShkLCBmW2RdKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmICh1KSB0cnkge1xuICAgICAgZiA9IEpTT04ucGFyc2UodSk7XG4gICAgICB2YXIgaCA9IGwudGlsZU9iamVjdE1hcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKGgudmFsdWVzKCkpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICAgIHZhciB2ID0gbS52YWx1ZTtcbiAgICAgICAgICBmW3YuY2FyZElkXSAmJiBsLnNldFRpbGVUeXBlKHYuaWQsIGZbdi5jYXJkSWRdKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBlID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG0gJiYgIW0uZG9uZSAmJiAodCA9IHkucmV0dXJuKSAmJiB0LmNhbGwoeSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmIChwKSB0cnkge1xuICAgICAgZiA9IEpTT04ucGFyc2UocCk7XG4gICAgICBmb3IgKHZhciBkIGluIGYpIGlmIChudWxsID09PSAoaSA9IGZbZF0pIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbRVRpbGVUeXBlc0V4dHJhLkR1b3hpYW9Db3VudF0pIHtcbiAgICAgICAgdmFyIGcgPSBOdW1iZXIobnVsbCA9PT0gKHIgPSBmW2RdKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByW0VUaWxlVHlwZXNFeHRyYS5EdW94aWFvQ291bnRdKTtcbiAgICAgICAgbC5zZXREdW94aWFvQ291bnQoZCwgZyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB2YXIgXyA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRSZXBsYWNlSW5mbygpO1xuICAgIGZvciAodmFyIFQgaW4gXykgdHJ5IHtcbiAgICAgIGZvciAodmFyIEMgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMoX1tUXSkpLCBiID0gQy5uZXh0KCk7ICFiLmRvbmU7IGIgPSBDLm5leHQoKSkge1xuICAgICAgICB2YXIgRSA9IGIudmFsdWU7XG4gICAgICAgIGwuc2V0VGlsZU9yaWdpbmFsUmVzSWQoRS5pZCwgRS5vcmlnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBiICYmICFiLmRvbmUgJiYgKG4gPSBDLnJldHVybikgJiYgbi5jYWxsKEMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlzTmVlZFNhdmVUb0dhbWVEYXRhKGUpIHtcbiAgICByZXR1cm4gW0VUaWxlVHlwZS5Sb2xsQ2FyZCwgRVRpbGVUeXBlLkRheGlhb0NhcmQsIEVUaWxlVHlwZS5EdW94aWFvQ2FyZF0uaW5jbHVkZXMoZSk7XG4gIH1cbiAgaXNOZWVkU2F2ZVRvR2FtZURhdGFCeVR5cGUoZSkge1xuICAgIHJldHVybiBbRVRpbGVUeXBlLkNvbG9yQ2FyZF0uaW5jbHVkZXMoZSk7XG4gIH1cbiAgZ2V0TmVlZFNhdmVUb0dhbWVEYXRhRXh0cmEoZSkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VUaWxlVHlwZXNFeHRyYS5EdW94aWFvQ291bnRdID0gZS5nZXREdW94aWFvQ291bnQoKTtcbiAgICBpZiAoZS50eXBlID09IEVUaWxlVHlwZS5EdW94aWFvQ2FyZCkgcmV0dXJuIF90O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZVR5TW9kaXlfaXNVc2VyRml4XCIpXG4gIGlzVXNlckZpeCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc2F2ZVRvR2FtZURhdGEoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLmlzVXNlckZpeCgpKSByZXR1cm4gdGhpcy5zYXZlVG9HYW1lRGF0YUZpeCgpO1xuICAgIHZhciB0ID0ge30sXG4gICAgICBvID0ge30sXG4gICAgICBuID0ge30sXG4gICAgICBpID0ge307XG4gICAgdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKHIsIGEpIHtcbiAgICAgIGlmIChlLmlzTmVlZFNhdmVUb0dhbWVEYXRhKHIudHlwZSkpIHtcbiAgICAgICAgdFthXSA9IHIudHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUuaXNOZWVkU2F2ZVRvR2FtZURhdGFCeVR5cGUoci50eXBlKSAmJiAob1tyLmNhcmRJZF0gPSByLnR5cGUpO1xuICAgICAgfVxuICAgICAgdmFyIGwgPSBlLmdldE5lZWRTYXZlVG9HYW1lRGF0YUV4dHJhKHIpO1xuICAgICAgbCAmJiAoblthXSA9IGwpO1xuICAgICAgaWYgKHIub3JpZ2luYWxSZXNJZCAhPT0gci5yZXNJZCkge1xuICAgICAgICBpW3IudHlwZV0gfHwgKGlbci50eXBlXSA9IFtdKTtcbiAgICAgICAgaVtyLnR5cGVdLnB1c2goe1xuICAgICAgICAgIG9yaWdpbjogci5vcmlnaW5hbFJlc0lkLFxuICAgICAgICAgIGlkOiBhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5zZXRUaWxlSWQyVHlwZShKU09OLnN0cmluZ2lmeSh0KSk7XG4gICAgdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLnNldENhcmRJZDJUeXBlKEpTT04uc3RyaW5naWZ5KG8pKTtcbiAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0VGlsZVR5cGVzRXh0cmEoSlNPTi5zdHJpbmdpZnkobikpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5zZXRSZXBsYWNlSW5mbyhpKTtcbiAgfVxuICBtb2RpZnlCb21iQ2FyZChlLCB0KSB7XG4gICAgdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuc2VsY2VjdFRpbGVJZCh0WzBdLCB0cnVlKTtcbiAgICB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKHRbMV0sIHRydWUpO1xuICAgIHRoaXMuX2NvbnRleHQuY2xlYXJNb2RpZmllci5tb2RpZnlDbGVhcihlLCBFTWVyZ2VUeXBlLkJvbWIpO1xuICAgIHRoaXMuX2NvbnRleHQuY29tYm9Nb2RpZmllci5hZGRDb21ibygxKTtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkU2NvcmU6IHRoaXMuX2NvbnRleHQuc2NvcmVNb2RpZmllci5jYWxBZGRTY29yZSgpLFxuICAgICAgY29tYm86IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDb21ib051bSgpLFxuICAgICAgc2hvd0NvbWJvOiB0aGlzLl9jb250ZXh0LmNvbWJvQ2hlY2tlci5jYW5TaG93Q29tYm8oKVxuICAgIH07XG4gIH1cbiAgbW9kaWZ5Qm9tYkNhcmRfdHJhdmVsKGUsIHQpIHtcbiAgICB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKHRbMF0sIHRydWUpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnNlbGNlY3RUaWxlSWQodFsxXSwgdHJ1ZSk7XG4gICAgdGhpcy5fY29udGV4dC5jbGVhck1vZGlmaWVyLm1vZGlmeUNsZWFyKGUsIEVNZXJnZVR5cGUuQm9tYik7XG4gIH1cbiAgc2F2ZVRvR2FtZURhdGFGaXgoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IHt9LFxuICAgICAgbyA9IHt9LFxuICAgICAgbiA9IHt9LFxuICAgICAgaSA9IHt9O1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnRpbGVPYmplY3RNYXAoKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICB2YXIgYSA9IHIuc2F2ZUtleSgpO1xuICAgICAgaWYgKGUuaXNOZWVkU2F2ZVRvR2FtZURhdGEoci50eXBlKSkge1xuICAgICAgICB0W2FdID0gci50eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5pc05lZWRTYXZlVG9HYW1lRGF0YUJ5VHlwZShyLnR5cGUpICYmIChvW3IuY2FyZElkXSA9IHIudHlwZSk7XG4gICAgICB9XG4gICAgICB2YXIgbCA9IGUuZ2V0TmVlZFNhdmVUb0dhbWVEYXRhRXh0cmEocik7XG4gICAgICBsICYmIChuW2FdID0gbCk7XG4gICAgICBpZiAoci5vcmlnaW5hbFJlc0lkICE9PSByLnJlc0lkKSB7XG4gICAgICAgIGlbci50eXBlXSB8fCAoaVtyLnR5cGVdID0gW10pO1xuICAgICAgICBpW3IudHlwZV0ucHVzaCh7XG4gICAgICAgICAgb3JpZ2luOiByLm9yaWdpbmFsUmVzSWQsXG4gICAgICAgICAgaWQ6IGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLnNldFRpbGVJZDJUeXBlKEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0Q2FyZElkMlR5cGUoSlNPTi5zdHJpbmdpZnkobykpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5zZXRUaWxlVHlwZXNFeHRyYShKU09OLnN0cmluZ2lmeShuKSk7XG4gICAgdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLnNldFJlcGxhY2VJbmZvKGkpO1xuICB9XG4gIG1vZGlmeUZyb21Mb2NhbEZpeCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICByLFxuICAgICAgYyA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgdSA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRUaWxlSWQyVHlwZSgpLFxuICAgICAgcCA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDYXJkSWQyVHlwZSgpLFxuICAgICAgZiA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRUaWxlVHlwZXNFeHRyYSgpO1xuICAgIGlmICh1KSB0cnkge1xuICAgICAgdmFyIGQgPSBKU09OLnBhcnNlKHUpO1xuICAgICAgZm9yICh2YXIgaCBpbiBkKSB7XG4gICAgICAgIHZhciB5ID0gX19yZWFkKGguc3BsaXQoXCItXCIpLCAzKSxcbiAgICAgICAgICBtID0geVswXSxcbiAgICAgICAgICB2ID0geVsxXSxcbiAgICAgICAgICBnID0geVsyXTtcbiAgICAgICAgYy5zZXRUaWxlVHlwZUJ5UG9zKHtcbiAgICAgICAgICB4OiBOdW1iZXIobSksXG4gICAgICAgICAgeTogTnVtYmVyKHYpLFxuICAgICAgICAgIHo6IE51bWJlcihnKVxuICAgICAgICB9LCBkW2hdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmIChwKSB0cnkge1xuICAgICAgZCA9IEpTT04ucGFyc2UocCk7XG4gICAgICB2YXIgXyA9IGMudGlsZU9iamVjdE1hcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgVCA9IF9fdmFsdWVzKF8udmFsdWVzKCkpLCBDID0gVC5uZXh0KCk7ICFDLmRvbmU7IEMgPSBULm5leHQoKSkge1xuICAgICAgICAgIHZhciBiID0gQy52YWx1ZTtcbiAgICAgICAgICBkW2IuY2FyZElkXSAmJiBjLnNldFRpbGVUeXBlKGIuaWQsIGRbYi5jYXJkSWRdKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBlID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEMgJiYgIUMuZG9uZSAmJiAodCA9IFQucmV0dXJuKSAmJiB0LmNhbGwoVCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmIChmKSB0cnkge1xuICAgICAgZCA9IEpTT04ucGFyc2UoZik7XG4gICAgICBmb3IgKHZhciBoIGluIGQpIHtcbiAgICAgICAgdmFyIEUgPSBfX3JlYWQoaC5zcGxpdChcIi1cIiksIDMpO1xuICAgICAgICBtID0gRVswXSwgdiA9IEVbMV0sIGcgPSBFWzJdO1xuICAgICAgICBpZiAobnVsbCA9PT0gKGkgPSBkW2hdKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpW0VUaWxlVHlwZXNFeHRyYS5EdW94aWFvQ291bnRdKSB7XG4gICAgICAgICAgdmFyIFMgPSBOdW1iZXIobnVsbCA9PT0gKHIgPSBkW2hdKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByW0VUaWxlVHlwZXNFeHRyYS5EdW94aWFvQ291bnRdKTtcbiAgICAgICAgICBjLnNldER1b3hpYW9Db3VudEJ5UG9zKHtcbiAgICAgICAgICAgIHg6IE51bWJlcihtKSxcbiAgICAgICAgICAgIHk6IE51bWJlcih2KSxcbiAgICAgICAgICAgIHo6IE51bWJlcihnKVxuICAgICAgICAgIH0sIFMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB2YXIgSSA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRSZXBsYWNlSW5mbygpO1xuICAgIGZvciAodmFyIHcgaW4gSSkgdHJ5IHtcbiAgICAgIGZvciAodmFyIEIgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMoSVt3XSkpLCB4ID0gQi5uZXh0KCk7ICF4LmRvbmU7IHggPSBCLm5leHQoKSkge1xuICAgICAgICB2YXIgTSA9IHgudmFsdWUsXG4gICAgICAgICAgTyA9IF9fcmVhZChNLmlkLnNwbGl0KFwiLVwiKSwgMyk7XG4gICAgICAgIG0gPSBPWzBdLCB2ID0gT1sxXSwgZyA9IE9bMl07XG4gICAgICAgIGMuc2V0VGlsZU9yaWdpbmFsUmVzSWRCeVBvcyh7XG4gICAgICAgICAgeDogTnVtYmVyKG0pLFxuICAgICAgICAgIHk6IE51bWJlcih2KSxcbiAgICAgICAgICB6OiBOdW1iZXIoZylcbiAgICAgICAgfSwgTS5vcmlnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB4ICYmICF4LmRvbmUgJiYgKG4gPSBCLnJldHVybikgJiYgbi5jYWxsKEIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19
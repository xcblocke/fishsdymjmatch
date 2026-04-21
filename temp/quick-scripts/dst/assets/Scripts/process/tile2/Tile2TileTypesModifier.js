
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2TileTypesModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJUaWxlVHlwZXNNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELHNFQUFrRTtBQUNsRSw2REFBNEQ7QUFDNUQsK0RBQThEO0FBQzlELGlFQUE0RDtBQUM1RCxtRUFBOEQ7QUFDOUQsNkRBQTREO0FBQzVELDZEQUF3RDtBQUN4RCxtRkFBa0Y7QUFDbEY7SUFBb0QsMENBQWM7SUFBbEU7UUFBQSxxRUFrTUM7UUFqTUMsbUJBQWEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGVBQVMsR0FBRyxDQUFDLHdCQUFTLENBQUMsUUFBUSxFQUFFLHdCQUFTLENBQUMsUUFBUSxFQUFFLHdCQUFTLENBQUMsU0FBUyxFQUFFLHdCQUFTLENBQUMsSUFBSSxFQUFFLHdCQUFTLENBQUMsVUFBVSxFQUFFLHdCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7O0lBZ016SSxDQUFDO0lBL0xDLDBDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHdCQUFTLENBQUMsUUFBUSxFQUFFLHNCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBWSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyx3QkFBUyxDQUFDLFFBQVEsRUFBRSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsd0JBQVMsQ0FBQyxTQUFTLEVBQUUsNkJBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHdCQUFT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QUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO0lBQ0gsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FsTUEsQUFrTUMsQ0FsTW1ELCtCQUFjLEdBa01qRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBCb21iQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi90aWxlVHlwZXMvQm9tYkNhcmRUeXBlJztcbmltcG9ydCB7IENvbG9yQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi90aWxlVHlwZXMvQ29sb3JDYXJkVHlwZSc7XG5pbXBvcnQgRGF4aWFvQ2FyZFR5cGUgZnJvbSAnLi4vLi4vdGlsZVR5cGVzL0RheGlhb0NhcmRUeXBlJztcbmltcG9ydCBEdW94aWFvQ2FyZFR5cGUgZnJvbSAnLi4vLi4vdGlsZVR5cGVzL0R1b3hpYW9DYXJkVHlwZSc7XG5pbXBvcnQgeyBSYW5rQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi90aWxlVHlwZXMvUmFua0NhcmRUeXBlJztcbmltcG9ydCBSb2xsQ2FyZFR5cGUgZnJvbSAnLi4vLi4vdGlsZVR5cGVzL1JvbGxDYXJkVHlwZSc7XG5pbXBvcnQgeyBUaWxlR2VuZXJhdGVTdHJhdGVneVJlZ2lzdHJ5IH0gZnJvbSAnLi4vLi4vVGlsZUdlbmVyYXRlU3RyYXRlZ3lSZWdpc3RyeSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlRpbGVUeXBlc01vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBfdGlsZVR5cGVzTWFwID0gbmV3IE1hcCgpO1xuICBfdHlwZUxpc3QgPSBbRVRpbGVUeXBlLlJvbGxDYXJkLCBFVGlsZVR5cGUuUmFua0NhcmQsIEVUaWxlVHlwZS5Db2xvckNhcmQsIEVUaWxlVHlwZS5Cb21iLCBFVGlsZVR5cGUuRGF4aWFvQ2FyZCwgRVRpbGVUeXBlLkR1b3hpYW9DYXJkXTtcbiAgcmVzZXRGdW5jKCkge1xuICAgIHRoaXMuX3RpbGVUeXBlc01hcC5jbGVhcigpO1xuICAgIHRoaXMuX3RpbGVUeXBlc01hcC5zZXQoRVRpbGVUeXBlLlJvbGxDYXJkLCBSb2xsQ2FyZFR5cGUubW9kaWZ5LmJpbmQoUm9sbENhcmRUeXBlKSk7XG4gICAgdGhpcy5fdGlsZVR5cGVzTWFwLnNldChFVGlsZVR5cGUuUmFua0NhcmQsIFJhbmtDYXJkVHlwZS5tb2RpZnkuYmluZChSYW5rQ2FyZFR5cGUpKTtcbiAgICB0aGlzLl90aWxlVHlwZXNNYXAuc2V0KEVUaWxlVHlwZS5Db2xvckNhcmQsIENvbG9yQ2FyZFR5cGUubW9kaWZ5LmJpbmQoQ29sb3JDYXJkVHlwZSkpO1xuICAgIHRoaXMuX3RpbGVUeXBlc01hcC5zZXQoRVRpbGVUeXBlLkJvbWIsIEJvbWJDYXJkVHlwZS5tb2RpZnkuYmluZChCb21iQ2FyZFR5cGUpKTtcbiAgICB0aGlzLl90aWxlVHlwZXNNYXAuc2V0KEVUaWxlVHlwZS5EYXhpYW9DYXJkLCBEYXhpYW9DYXJkVHlwZS5tb2RpZnkuYmluZChEYXhpYW9DYXJkVHlwZSkpO1xuICAgIHRoaXMuX3RpbGVUeXBlc01hcC5zZXQoRVRpbGVUeXBlLkR1b3hpYW9DYXJkLCBEdW94aWFvQ2FyZFR5cGUubW9kaWZ5LmJpbmQoRHVveGlhb0NhcmRUeXBlKSk7XG4gIH1cbiAgc3RyaW5nVG9UaWxlVHlwZShlKSB7XG4gICAgaWYgKE9iamVjdC52YWx1ZXMoRVRpbGVUeXBlKS5pbmNsdWRlcyhlKSkgcmV0dXJuIGU7XG4gIH1cbiAgbW9kaWZ5VGlsZVR5cGVzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEgPSBuZXcgQXJyYXkoKTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIGwgPSBlLnNwbGl0KFwiLFwiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhsKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgdSA9IGMudmFsdWU7XG4gICAgICAgICAgdSAmJiBhLnB1c2godGhpcy5zdHJpbmdUb1RpbGVUeXBlKHUpKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXNldEZ1bmMoKTtcbiAgICB2YXIgcCA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRUaWxlU3RyYXRlZ2llcygpLFxuICAgICAgZiA9IFRpbGVHZW5lcmF0ZVN0cmF0ZWd5UmVnaXN0cnkuZ2V0U3RyYXRlZ2llcyhwKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGYpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkgaC52YWx1ZS5ydW4odGhpcy5fY29udGV4dCwgdGhpcy5fdHlwZUxpc3QsIGEsIHRoaXMuX3RpbGVUeXBlc01hcCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGggJiYgIWguZG9uZSAmJiAoaSA9IGQucmV0dXJuKSAmJiBpLmNhbGwoZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRHYW1lUGxheU1ldGhvZChhKTtcbiAgICB0aGlzLnNhdmVUb0dhbWVEYXRhKCk7XG4gIH1cbiAgc2V0R2FtZVBsYXlNZXRob2QoZSkge1xuICAgIHZhciB0ID0gMDtcbiAgICBpZiAoZS5pbmNsdWRlcyhFVGlsZVR5cGUuWW9nYSkpIHtcbiAgICAgIHQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS5pbmNsdWRlcyhFVGlsZVR5cGUuUm9sbENhcmQpKSB7XG4gICAgICAgIHQgPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5pbmNsdWRlcyhFVGlsZVR5cGUuQ29sb3JDYXJkKSAmJiAodCA9IDMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5zZXRHYW1lUGxheU1ldGhvZCh0KTtcbiAgfVxuICBzYXZlVG9HYW1lRGF0YSgpIHtcbiAgICB2YXIgZSA9IHt9LFxuICAgICAgdCA9IHt9O1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnRpbGVPYmplY3RNYXAoKS5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgbiA9IG8uc2F2ZUtleSgpLFxuICAgICAgICBpID0gby5nZXRFeHRyYUluZm8oKTtcbiAgICAgIGkgJiYgKGVbbl0gPSBpKTtcbiAgICAgIGlmIChvLm9yaWdpbmFsUmVzSWQgIT09IG8ucmVzSWQpIHtcbiAgICAgICAgdFtvLnR5cGVdIHx8ICh0W28udHlwZV0gPSBbXSk7XG4gICAgICAgIHRbby50eXBlXS5wdXNoKHtcbiAgICAgICAgICBvcmlnaW46IG8ub3JpZ2luYWxSZXNJZCxcbiAgICAgICAgICBpZDogblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2V0VGlsZVR5cGVzRXh0cmEoSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5zZXRSZXBsYWNlSW5mbyh0KTtcbiAgfVxuICBzYXZlVG9HYW1lRGF0YUZvclJlc3RhcnQoKSB7XG4gICAgdmFyIGUgPSB7fSxcbiAgICAgIHQgPSB7fTtcbiAgICB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCkuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgdmFyIG4gPSBvLnNhdmVLZXkoKSxcbiAgICAgICAgaSA9IG8uZ2V0RXh0cmFJbmZvKCk7XG4gICAgICBpICYmIChlW25dID0gaSk7XG4gICAgICBpZiAoby5vcmlnaW5hbFJlc0lkICE9PSBvLnJlc0lkKSB7XG4gICAgICAgIHRbby50eXBlXSB8fCAodFtvLnR5cGVdID0gW10pO1xuICAgICAgICB0W28udHlwZV0ucHVzaCh7XG4gICAgICAgICAgb3JpZ2luOiBvLm9yaWdpbmFsUmVzSWQsXG4gICAgICAgICAgaWQ6IG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLnNldE9yaWdpbmFsVGlsZVR5cGVzRXh0cmEoSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5zZXRPcmlnaW5hbFJlcGxhY2VJbmZvKEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgfVxuICBtb2RpZnlGcm9tTG9jYWwoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbiA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRUaWxlVHlwZXNFeHRyYSgpO1xuICAgIGlmIChuKSB0cnkge1xuICAgICAgdmFyIGkgPSBKU09OLnBhcnNlKG4pO1xuICAgICAgZm9yICh2YXIgbCBpbiBpKSB7XG4gICAgICAgIHZhciBzID0gX19yZWFkKGwuc3BsaXQoXCItXCIpLCAzKSxcbiAgICAgICAgICBjID0gc1swXSxcbiAgICAgICAgICB1ID0gc1sxXSxcbiAgICAgICAgICBwID0gc1syXTtcbiAgICAgICAgby5zZXRUaWxlVHlwZUJ5UG9zRXh0cmEoe1xuICAgICAgICAgIHg6IE51bWJlcihjKSxcbiAgICAgICAgICB5OiBOdW1iZXIodSksXG4gICAgICAgICAgejogTnVtYmVyKHApXG4gICAgICAgIH0sIGlbbF0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdmFyIGYgPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0UmVwbGFjZUluZm8oKTtcbiAgICBmb3IgKHZhciBkIGluIGYpIHRyeSB7XG4gICAgICBmb3IgKHZhciBoID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKGZbZF0pKSwgeSA9IGgubmV4dCgpOyAheS5kb25lOyB5ID0gaC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIG0gPSB5LnZhbHVlLFxuICAgICAgICAgIHYgPSBfX3JlYWQobS5pZC5zcGxpdChcIi1cIiksIDMpO1xuICAgICAgICBjID0gdlswXSwgdSA9IHZbMV0sIHAgPSB2WzJdO1xuICAgICAgICBvLnNldFRpbGVPcmlnaW5hbFJlc0lkQnlQb3Moe1xuICAgICAgICAgIHg6IE51bWJlcihjKSxcbiAgICAgICAgICB5OiBOdW1iZXIodSksXG4gICAgICAgICAgejogTnVtYmVyKHApXG4gICAgICAgIH0sIG0ub3JpZ2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeSAmJiAheS5kb25lICYmICh0ID0gaC5yZXR1cm4pICYmIHQuY2FsbChoKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBtb2RpZnlGcm9tTG9jYWxGb3JSZXN0YXJ0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG4gPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0T3JpZ2luYWxUaWxlVHlwZXNFeHRyYSgpO1xuICAgIGlmIChuKSB0cnkge1xuICAgICAgdmFyIGkgPSBKU09OLnBhcnNlKG4pO1xuICAgICAgZm9yICh2YXIgbCBpbiBpKSB7XG4gICAgICAgIHZhciBzID0gX19yZWFkKGwuc3BsaXQoXCItXCIpLCAzKSxcbiAgICAgICAgICBjID0gc1swXSxcbiAgICAgICAgICB1ID0gc1sxXSxcbiAgICAgICAgICBwID0gc1syXTtcbiAgICAgICAgby5zZXRUaWxlVHlwZUJ5UG9zRXh0cmEoe1xuICAgICAgICAgIHg6IE51bWJlcihjKSxcbiAgICAgICAgICB5OiBOdW1iZXIodSksXG4gICAgICAgICAgejogTnVtYmVyKHApXG4gICAgICAgIH0sIGlbbF0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdmFyIGYgPSB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0T3JpZ2luYWxSZXBsYWNlSW5mbygpO1xuICAgIGZvciAodmFyIGQgaW4gZikgdHJ5IHtcbiAgICAgIGZvciAodmFyIGggPSAoZSA9IHZvaWQgMCwgX192YWx1ZXMoZltkXSkpLCB5ID0gaC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBoLm5leHQoKSkge1xuICAgICAgICB2YXIgbSA9IHkudmFsdWUsXG4gICAgICAgICAgdiA9IF9fcmVhZChtLmlkLnNwbGl0KFwiLVwiKSwgMyk7XG4gICAgICAgIGMgPSB2WzBdLCB1ID0gdlsxXSwgcCA9IHZbMl07XG4gICAgICAgIG8uc2V0VGlsZU9yaWdpbmFsUmVzSWRCeVBvcyh7XG4gICAgICAgICAgeDogTnVtYmVyKGMpLFxuICAgICAgICAgIHk6IE51bWJlcih1KSxcbiAgICAgICAgICB6OiBOdW1iZXIocClcbiAgICAgICAgfSwgbS5vcmlnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB5ICYmICF5LmRvbmUgJiYgKHQgPSBoLnJldHVybikgJiYgdC5jYWxsKGgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19
"use strict";
cc._RF.push(module, '6449aG8BSdETZPEzGW91s7l', 'Tile2StaticStrategy');
// Scripts/Tile2StaticStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2StaticStrategy = /** @class */ (function (_super) {
    __extends(Tile2StaticStrategy, _super);
    function Tile2StaticStrategy() {
        var _this = _super.call(this) || this;
        _this.name = "Tile2Static";
        _this.priority = 20;
        if (null == _this.localData.progressMap) {
            _this.localData.progressMap = {};
            _this.localData.progressMap = _this.localData.progressMap;
        }
        null == _this.localData.dataPath && (_this.localData.dataPath = "");
        return _this;
    }
    Tile2StaticStrategy_1 = Tile2StaticStrategy;
    Tile2StaticStrategy.prototype.makeCacheKey = function (e, t) {
        return t + "_" + e;
    };
    Tile2StaticStrategy.prototype.getDataPath = function () {
        return ["tile2LevelData/static/tile2_static1", "mainRes"];
    };
    Tile2StaticStrategy.prototype.getPriority = function () {
        return 20;
    };
    Tile2StaticStrategy.prototype.canHandle = function () {
        return true;
    };
    Tile2StaticStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        var e = __read(this.getDataPath(), 2), t = e[0], n = e[1], i = this.makeCacheKey(t, n);
        if (this.localData.dataPath !== t) {
            this.localData.dataPath = t;
            var r = this.localData.progressMap || {};
            r[i] = 0;
            this.localData.progressMap = r;
            Tile2StaticStrategy_1._dataCache.delete(i);
        }
        return Tile2StaticStrategy_1._dataCache.has(i) ? Promise.resolve() : this.loadDataForKey(t, n, i);
    };
    Tile2StaticStrategy.prototype.loadDataForKey = function (e, t, n) {
        return new Promise(function (i) {
            ResManager_1.resManager.loadRes(e, cc.JsonAsset, t).then(function (e) {
                var t = e.json;
                Array.isArray(t) && Tile2StaticStrategy_1._dataCache.set(n, t);
                e.decRef();
                i();
            }).catch(function (e) {
                console.error("[关卡抽取 Tile2静态题库]加载失败: " + n, e);
                i();
            });
        });
    };
    Tile2StaticStrategy.prototype.doExtract = function (e, t, o) {
        if (!e || 0 === e.length)
            return null;
        var n = this.localData.progressMap || {}, i = (n[t] || 0) % e.length, r = e[i];
        if (!r || !r.content)
            return null;
        n[t] = (i + 1) % e.length;
        this.localData.progressMap = n;
        return {
            content: r.content,
            index: r.index.toString(),
            slover: r.solver,
            tileNum: r.tile_num,
            libName: o
        };
    };
    Tile2StaticStrategy.prototype.extract = function () {
        var e = this, t = __read(this.getDataPath(), 2), n = t[0], i = t[1], r = this.makeCacheKey(n, i), l = n.split("/").pop() || this.name, s = Tile2StaticStrategy_1._dataCache.get(r);
        return s ? Promise.resolve(this.doExtract(s, r, l)) : this.loadDataForKey(n, i, r).then(function () {
            var t = Tile2StaticStrategy_1._dataCache.get(r);
            return e.doExtract(t, r, l);
        });
    };
    var Tile2StaticStrategy_1;
    Tile2StaticStrategy._dataCache = new Map();
    __decorate([
        mj.traitEvent("T2StaStr_dataPath")
    ], Tile2StaticStrategy.prototype, "getDataPath", null);
    __decorate([
        mj.traitEvent("T2StaStr_priority")
    ], Tile2StaticStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2StaStr_extract")
    ], Tile2StaticStrategy.prototype, "extract", null);
    Tile2StaticStrategy = Tile2StaticStrategy_1 = __decorate([
        mj.class("Tile2StaticStrategy")
    ], Tile2StaticStrategy);
    return Tile2StaticStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2StaticStrategy;

cc._RF.pop();
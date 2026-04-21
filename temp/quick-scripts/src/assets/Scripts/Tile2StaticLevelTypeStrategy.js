"use strict";
cc._RF.push(module, 'aebf2WBjNRBj6PJzBkRNAhK', 'Tile2StaticLevelTypeStrategy');
// Scripts/Tile2StaticLevelTypeStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var ResManager_1 = require("./framework/manager/ResManager");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2StaticLevelTypeStrategy = /** @class */ (function (_super) {
    __extends(Tile2StaticLevelTypeStrategy, _super);
    function Tile2StaticLevelTypeStrategy() {
        var _this = _super.call(this) || this;
        _this.name = "Tile2StaticLvType";
        _this.priority = 70;
        _this._config = null;
        if (!_this.localData.progressMap || !Object.keys(_this.localData.progressMap).length) {
            _this.localData.progressMap = {};
            _this.localData.progressMap = _this.localData.progressMap;
        }
        return _this;
    }
    Tile2StaticLevelTypeStrategy_1 = Tile2StaticLevelTypeStrategy;
    Tile2StaticLevelTypeStrategy.prototype.getPriority = function () {
        return 70;
    };
    Tile2StaticLevelTypeStrategy.prototype.getConfig = function () {
        return {
            bundle: "mainRes"
        };
    };
    Tile2StaticLevelTypeStrategy.prototype.getFileForType = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.getEasyFileName = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.getNormalFileName = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.getHardFileName = function () {
        return null;
    };
    Tile2StaticLevelTypeStrategy.prototype.filterPool = function (e) {
        return e;
    };
    Tile2StaticLevelTypeStrategy.prototype.makeProgressKey = function (e) {
        return e;
    };
    Tile2StaticLevelTypeStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        this._config = this.getConfig();
        return Promise.resolve();
    };
    Tile2StaticLevelTypeStrategy.prototype.canHandle = function (e) {
        var t = e.gameData.getLevelId();
        if (!t)
            return false;
        var o = ExtractTool_1.default.getInstance().getLevelType(t);
        return !(o <= 0 || !this.resolveFileName(o));
    };
    Tile2StaticLevelTypeStrategy.prototype.extract = function (e) {
        var t = this, n = this.getConfig();
        if (!n)
            return Promise.resolve(null);
        var i = e.gameData.getLevelId(), r = ExtractTool_1.default.getInstance().getLevelType(i);
        if (r <= 0)
            return Promise.resolve(null);
        var l = n.bundle || "mainRes", s = this.resolveFileName(r);
        if (!s)
            return Promise.resolve(null);
        var c = l + "|" + s, u = Tile2StaticLevelTypeStrategy_1, p = u._dataCache.get(c);
        if (p)
            return Promise.resolve(this.doExtract(p, c, s, i, r));
        var f = "tile2LevelData/static/" + s;
        return this.loadFile(f, l, c).then(function () {
            var e = u._dataCache.get(c);
            return t.doExtract(e, c, s, i, r);
        });
    };
    Tile2StaticLevelTypeStrategy.prototype.resolveFileName = function (e) {
        return this.getFileForType(e) || (1 === e ? this.getEasyFileName() : 2 === e ? this.getNormalFileName() : 3 === e || 4 === e ? this.getHardFileName() : null);
    };
    Tile2StaticLevelTypeStrategy.prototype.loadFile = function (e, t, n) {
        return ResManager_1.resManager.loadRes(e, cc.JsonAsset, t).then(function (e) {
            var t = Array.isArray(e.json) ? e.json : [];
            Tile2StaticLevelTypeStrategy_1._dataCache.set(n, t);
            e.decRef();
        }).catch(function (e) {
            console.error("[关卡抽取 Tile2类型题库] 加载失败: " + n, e);
        });
    };
    Tile2StaticLevelTypeStrategy.prototype.doExtract = function (e, t, o, n, i) {
        if (!e || 0 === e.length)
            return null;
        var r = this.filterPool(e, i, t, n), a = r && r.length > 0 ? r : null;
        if (!a)
            return null;
        var l = this.makeProgressKey(t), s = this.localData.progressMap || {}, c = (s[l] || 0) % a.length, u = a[c];
        if (!u || !u.content)
            return null;
        var p = (c + 1) % a.length;
        s[l] = p;
        this.localData.progressMap = s;
        return {
            content: u.content,
            index: u.index.toString(),
            slover: u.solver,
            tileNum: u.tile_num,
            libName: o
        };
    };
    var Tile2StaticLevelTypeStrategy_1;
    Tile2StaticLevelTypeStrategy._dataCache = new Map();
    __decorate([
        mj.traitEvent("T2StaLvT_priority")
    ], Tile2StaticLevelTypeStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2StaLvT_config")
    ], Tile2StaticLevelTypeStrategy.prototype, "getConfig", null);
    __decorate([
        mj.traitEvent("T2StaLvT_getFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getFileForType", null);
    __decorate([
        mj.traitEvent("T2StaLvT_easyFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getEasyFileName", null);
    __decorate([
        mj.traitEvent("T2StaLvT_normFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getNormalFileName", null);
    __decorate([
        mj.traitEvent("T2StaLvT_hardFile")
    ], Tile2StaticLevelTypeStrategy.prototype, "getHardFileName", null);
    __decorate([
        mj.traitEvent("T2StaLvT_filterPool")
    ], Tile2StaticLevelTypeStrategy.prototype, "filterPool", null);
    Tile2StaticLevelTypeStrategy = Tile2StaticLevelTypeStrategy_1 = __decorate([
        mj.class("Tile2StaLvTypeStrategy")
    ], Tile2StaticLevelTypeStrategy);
    return Tile2StaticLevelTypeStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2StaticLevelTypeStrategy;

cc._RF.pop();
"use strict";
cc._RF.push(module, '8bf9dXQh/VMaKcmo+O/fiq8', 'Tile2FixedRandomStrategy');
// Scripts/Tile2FixedRandomStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2FixedRandomStrategy = /** @class */ (function (_super) {
    __extends(Tile2FixedRandomStrategy, _super);
    function Tile2FixedRandomStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2FixedRandom";
        _this.priority = 90;
        _this._initConfig = null;
        return _this;
    }
    Tile2FixedRandomStrategy.prototype.getPriority = function () {
        return 90;
    };
    Tile2FixedRandomStrategy.prototype.getConfig = function () {
        return null;
    };
    Tile2FixedRandomStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        this._initConfig = this.getConfig();
        if (!this._initConfig || !this._initConfig.strategy)
            return Promise.resolve();
        for (var e = this._initConfig, t = e.minLevel, o = e.maxLevel, n = [], i = t; i <= o; i++)
            n.push(i.toString().padStart(2, "0"));
        this.notifyDataLoaded(n);
        return Promise.resolve();
    };
    Tile2FixedRandomStrategy.prototype.notifyDataLoaded = function () { };
    Tile2FixedRandomStrategy.prototype.canHandle = function (e) {
        if (!this._initConfig)
            return false;
        var t = e.gameData.getLevelId();
        return !!t && t >= this._initConfig.minLevel && t <= this._initConfig.maxLevel;
    };
    Tile2FixedRandomStrategy.prototype.extract = function (e) {
        var t = this, o = e.gameData.getLevelId().toString().padStart(2, "0"), n = this.getConfig();
        if (!n || !n.strategy)
            return Promise.resolve(null);
        var i = "" + n.path + o;
        return ResManager_1.resManager.loadRes(i, cc.JsonAsset, n.bundle).then(function (e) {
            var n = Array.isArray(e) ? e[0] : e;
            if (!n || !n.json)
                return null;
            var i = n.json;
            n.decRef();
            if (!i || 0 === i.length)
                return null;
            var r = i[Math.floor(Math.random() * i.length)];
            return t.buildResult(r, o);
        }).catch(function () {
            return null;
        });
    };
    Tile2FixedRandomStrategy.prototype.buildResult = function (e, t) {
        return {
            content: e.content,
            index: String(e.index),
            slover: e.solver,
            tileNum: e.tile_num,
            libName: "fixRandom_" + t
        };
    };
    __decorate([
        mj.traitEvent("T2FxRnd_priority")
    ], Tile2FixedRandomStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2FxRnd_config")
    ], Tile2FixedRandomStrategy.prototype, "getConfig", null);
    __decorate([
        mj.traitEvent("T2FxRnd_onLoaded")
    ], Tile2FixedRandomStrategy.prototype, "notifyDataLoaded", null);
    Tile2FixedRandomStrategy = __decorate([
        mj.class("Tile2FixedRandomStrategy")
    ], Tile2FixedRandomStrategy);
    return Tile2FixedRandomStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2FixedRandomStrategy;

cc._RF.pop();
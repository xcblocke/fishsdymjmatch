"use strict";
cc._RF.push(module, '179188tksZGG4R2hw/rOwkl', 'ExtractHardLevelsBase');
// Scripts/core/extractQuestion/ExtractHardLevelsBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractHardLevelsBase = void 0;
var ResManager_1 = require("../../framework/manager/ResManager");
var ExtractHardLevelsBase = /** @class */ (function () {
    function ExtractHardLevelsBase() {
    }
    ExtractHardLevelsBase.prototype.getMaxLevels = function () {
        var e = this.getLevelData();
        return e ? e.length : this.getConfig().defaultMaxLevels;
    };
    ExtractHardLevelsBase.prototype.getContent = function () {
        var e = this;
        return this.getLevelData() ? Promise.resolve(this.extractContent()) : this.loadData().then(function () {
            return e.extractContent();
        });
    };
    ExtractHardLevelsBase.prototype.extractContent = function () {
        var e = this.getConfig(), t = this.getProgress(), o = this.getLevelData();
        if (o && o.length > 0) {
            var n = o[t], i = n.Content, r = 100 + 3 * (t + 1), a = (t + 1) % this.getMaxLevels();
            this.saveProgress(a);
            this.setCurLvData(t, n);
            return [i, r, n.Index, e.sourceName, null];
        }
        return null;
    };
    ExtractHardLevelsBase.prototype.setCurLvData = function () { };
    ExtractHardLevelsBase.prototype.loadData = function () {
        var e = this, t = this.getConfig();
        return new Promise(function (o, n) {
            if (e.getLevelData())
                o();
            else {
                var r = t.bundleName || "mainRes";
                ResManager_1.resManager.loadRes(t.dataPath, cc.JsonAsset, r).then(function (i) {
                    if (i) {
                        e.setLevelData(e.parseLevelData(i.json));
                        i.decRef();
                        o();
                    }
                    else {
                        console.error("【关卡抽取】[" + t.logPrefix + "] " + t.dataPath + ".json加载失败");
                        n(new Error(t.dataPath + ".json加载失败"));
                    }
                }).catch(function (e) {
                    console.error("【关卡抽取】[" + t.logPrefix + "] Failed to load " + t.dataPath + ".json:", e);
                    n(e);
                });
            }
        });
    };
    ExtractHardLevelsBase.prototype.parseLevelData = function (e) {
        return e;
    };
    ExtractHardLevelsBase.prototype.getSaveData = function () {
        var e = this.getConfig(), t = cc.sys.localStorage.getItem(e.storageKey);
        if (t)
            try {
                return JSON.parse(t);
            }
            catch (t) {
                console.error("【关卡抽取】[" + e.logPrefix + "] 解析存档数据失败:", t);
                return {};
            }
        return {};
    };
    ExtractHardLevelsBase.prototype.setSaveData = function (e) {
        var t = this.getConfig();
        try {
            cc.sys.localStorage.setItem(t.storageKey, JSON.stringify(e));
        }
        catch (e) {
            console.error("【关卡抽取】[" + t.logPrefix + "] 保存存档数据失败:", e);
        }
    };
    ExtractHardLevelsBase.prototype.getProgress = function () {
        var e = this.getSaveData().progress;
        return "number" == typeof e && e >= 0 && e < this.getMaxLevels() ? e : 0;
    };
    ExtractHardLevelsBase.prototype.saveProgress = function (e) {
        var t = this.getSaveData();
        t.progress = e;
        this.setSaveData(t);
    };
    ExtractHardLevelsBase.prototype.resetProgress = function () {
        this.saveProgress(0);
    };
    ExtractHardLevelsBase.prototype.getProgressInfo = function () {
        var e = this.getProgress(), t = this.getMaxLevels();
        return {
            currentIndex: e,
            totalLevels: t,
            nextLevel: (e + 1) % t
        };
    };
    __decorate([
        mj.traitEvent("ExtHrdLvBase_setCurLvData")
    ], ExtractHardLevelsBase.prototype, "setCurLvData", null);
    __decorate([
        mj.traitEvent("ExtHrdLvBase_parseLvData")
    ], ExtractHardLevelsBase.prototype, "parseLevelData", null);
    return ExtractHardLevelsBase;
}());
exports.ExtractHardLevelsBase = ExtractHardLevelsBase;

cc._RF.pop();
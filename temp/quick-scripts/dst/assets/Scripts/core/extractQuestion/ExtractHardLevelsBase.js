
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/extractQuestion/ExtractHardLevelsBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RIYXJkTGV2ZWxzQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFnRTtBQUNoRTtJQUFBO0lBOEZBLENBQUM7SUE3RkMsNENBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0lBQzFELENBQUM7SUFDRCwwQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDekYsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQ2IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFD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QyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOytEQUd6QztJQXlDSCw0QkFBQztDQTlGRCxBQThGQyxJQUFBO0FBOUZZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9SZXNNYW5hZ2VyJztcbmV4cG9ydCBjbGFzcyBFeHRyYWN0SGFyZExldmVsc0Jhc2Uge1xuICBnZXRNYXhMZXZlbHMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldExldmVsRGF0YSgpO1xuICAgIHJldHVybiBlID8gZS5sZW5ndGggOiB0aGlzLmdldENvbmZpZygpLmRlZmF1bHRNYXhMZXZlbHM7XG4gIH1cbiAgZ2V0Q29udGVudCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWxEYXRhKCkgPyBQcm9taXNlLnJlc29sdmUodGhpcy5leHRyYWN0Q29udGVudCgpKSA6IHRoaXMubG9hZERhdGEoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLmV4dHJhY3RDb250ZW50KCk7XG4gICAgfSk7XG4gIH1cbiAgZXh0cmFjdENvbnRlbnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldENvbmZpZygpLFxuICAgICAgdCA9IHRoaXMuZ2V0UHJvZ3Jlc3MoKSxcbiAgICAgIG8gPSB0aGlzLmdldExldmVsRGF0YSgpO1xuICAgIGlmIChvICYmIG8ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIG4gPSBvW3RdLFxuICAgICAgICBpID0gbi5Db250ZW50LFxuICAgICAgICByID0gMTAwICsgMyAqICh0ICsgMSksXG4gICAgICAgIGEgPSAodCArIDEpICUgdGhpcy5nZXRNYXhMZXZlbHMoKTtcbiAgICAgIHRoaXMuc2F2ZVByb2dyZXNzKGEpO1xuICAgICAgdGhpcy5zZXRDdXJMdkRhdGEodCwgbik7XG4gICAgICByZXR1cm4gW2ksIHIsIG4uSW5kZXgsIGUuc291cmNlTmFtZSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0SHJkTHZCYXNlX3NldEN1ckx2RGF0YVwiKVxuICBzZXRDdXJMdkRhdGEoKSB7fVxuICBsb2FkRGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8sIG4pIHtcbiAgICAgIGlmIChlLmdldExldmVsRGF0YSgpKSBvKCk7ZWxzZSB7XG4gICAgICAgIHZhciByID0gdC5idW5kbGVOYW1lIHx8IFwibWFpblJlc1wiO1xuICAgICAgICByZXNNYW5hZ2VyLmxvYWRSZXModC5kYXRhUGF0aCwgY2MuSnNvbkFzc2V0LCByKS50aGVuKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgIGUuc2V0TGV2ZWxEYXRhKGUucGFyc2VMZXZlbERhdGEoaS5qc29uKSk7XG4gICAgICAgICAgICBpLmRlY1JlZigpO1xuICAgICAgICAgICAgbygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi44CQ5YWz5Y2h5oq95Y+W44CRW1wiICsgdC5sb2dQcmVmaXggKyBcIl0gXCIgKyB0LmRhdGFQYXRoICsgXCIuanNvbuWKoOi9veWksei0pVwiKTtcbiAgICAgICAgICAgIG4obmV3IEVycm9yKHQuZGF0YVBhdGggKyBcIi5qc29u5Yqg6L295aSx6LSlXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIuOAkOWFs+WNoeaKveWPluOAkVtcIiArIHQubG9nUHJlZml4ICsgXCJdIEZhaWxlZCB0byBsb2FkIFwiICsgdC5kYXRhUGF0aCArIFwiLmpzb246XCIsIGUpO1xuICAgICAgICAgIG4oZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRXh0SHJkTHZCYXNlX3BhcnNlTHZEYXRhXCIpXG4gIHBhcnNlTGV2ZWxEYXRhKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBnZXRTYXZlRGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q29uZmlnKCksXG4gICAgICB0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGUuc3RvcmFnZUtleSk7XG4gICAgaWYgKHQpIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44CQ5YWz5Y2h5oq95Y+W44CRW1wiICsgZS5sb2dQcmVmaXggKyBcIl0g6Kej5p6Q5a2Y5qGj5pWw5o2u5aSx6LSlOlwiLCB0KTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHNldFNhdmVEYXRhKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0LnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi44CQ5YWz5Y2h5oq95Y+W44CRW1wiICsgdC5sb2dQcmVmaXggKyBcIl0g5L+d5a2Y5a2Y5qGj5pWw5o2u5aSx6LSlOlwiLCBlKTtcbiAgICB9XG4gIH1cbiAgZ2V0UHJvZ3Jlc3MoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFNhdmVEYXRhKCkucHJvZ3Jlc3M7XG4gICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgJiYgZSA+PSAwICYmIGUgPCB0aGlzLmdldE1heExldmVscygpID8gZSA6IDA7XG4gIH1cbiAgc2F2ZVByb2dyZXNzKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0U2F2ZURhdGEoKTtcbiAgICB0LnByb2dyZXNzID0gZTtcbiAgICB0aGlzLnNldFNhdmVEYXRhKHQpO1xuICB9XG4gIHJlc2V0UHJvZ3Jlc3MoKSB7XG4gICAgdGhpcy5zYXZlUHJvZ3Jlc3MoMCk7XG4gIH1cbiAgZ2V0UHJvZ3Jlc3NJbmZvKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRQcm9ncmVzcygpLFxuICAgICAgdCA9IHRoaXMuZ2V0TWF4TGV2ZWxzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRJbmRleDogZSxcbiAgICAgIHRvdGFsTGV2ZWxzOiB0LFxuICAgICAgbmV4dExldmVsOiAoZSArIDEpICUgdFxuICAgIH07XG4gIH1cbn0iXX0=
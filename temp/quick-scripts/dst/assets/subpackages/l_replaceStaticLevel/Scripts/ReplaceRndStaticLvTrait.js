
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_replaceStaticLevel/Scripts/ReplaceRndStaticLvTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c42612JyUFIeI3qrzZ/kbRN', 'ReplaceRndStaticLvTrait');
// subpackages/l_replaceStaticLevel/Scripts/ReplaceRndStaticLvTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var ReplaceRndStaticLvTrait = /** @class */ (function (_super) {
    __extends(ReplaceRndStaticLvTrait, _super);
    function ReplaceRndStaticLvTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levelData = null;
        return _this;
    }
    ReplaceRndStaticLvTrait.prototype.onLoad = function () {
        var e, a, r = this;
        _super.prototype.onLoad.call(this);
        this._config = {
            dataPath: (null === (e = this._traitData) || void 0 === e ? void 0 : e.dataPath) || "byteData/static/static20",
            bundleName: (null === (a = this._traitData) || void 0 === a ? void 0 : a.dataBundle) || "mainRes"
        };
        if (this.localData.dataPath !== this._config.dataPath) {
            this.localData.dataPath = this._config.dataPath;
            this.localData.currentIndex = -1;
            this.localData.levelID = -1;
            this.localData.shuffledOrder = null;
            this.localData.shuffledOrder = this.localData.shuffledOrder;
        }
        ExtractStatic_1.default.getInstance().loadStaticDataByPath(this._config.dataPath, this._config.bundleName, function (t) {
            r._levelData = t;
            r.localData.shuffledOrder && r.localData.shuffledOrder.length === t.length || r.initShuffledOrder(t.length);
        }, function () {
            r.eventEnabled = false;
        });
    };
    ReplaceRndStaticLvTrait.prototype.initShuffledOrder = function (t) {
        for (var e = [], a = 0; a < t; a++)
            e.push(a);
        this.localData.shuffledOrder = e;
        this.localData.shuffledOrder = this.localData.shuffledOrder;
        this.localData.currentIndex = -1;
        this.localData.currentIndex = this.localData.currentIndex;
    };
    ReplaceRndStaticLvTrait.prototype.isDataLoaded = function () {
        return null !== this._levelData && this._levelData.length > 0;
    };
    ReplaceRndStaticLvTrait.prototype.isNextExtract = function () {
        return !!this.isDataLoaded() && !!this.localData.shuffledOrder && this.localData.currentIndex + 1 < this.localData.shuffledOrder.length;
    };
    ReplaceRndStaticLvTrait.prototype.getDataLength = function () {
        return this.isDataLoaded() ? this._levelData.length : 0;
    };
    ReplaceRndStaticLvTrait.prototype.getContentByIndex = function (t) {
        return this.isDataLoaded() ? t < 0 || t >= this._levelData.length ? null : this._levelData[t] : null;
    };
    ReplaceRndStaticLvTrait.prototype.onExtractTool_isStaticLv = function (t, e) {
        if (this.checkGameMode()) {
            if (t.args[0] !== this.localData.levelID) {
                if (this.isNextExtract()) {
                    e({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: true
                    });
                }
                else {
                    e();
                }
            }
            else {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
        }
        else {
            e();
        }
    };
    ReplaceRndStaticLvTrait.prototype.onExtractStatic_getContent = function (t, e) {
        if (this.checkGameMode() && this.isNextExtract()) {
            var a = t.args[0];
            this.localData.currentIndex++;
            var r = this.localData.currentIndex, i = this.localData.shuffledOrder.length - r, n = r + Math.floor(Math.random() * i), o = this.localData.shuffledOrder[n];
            this.localData.shuffledOrder[n] = this.localData.shuffledOrder[r];
            this.localData.shuffledOrder[r] = o;
            this.localData.shuffledOrder = this.localData.shuffledOrder;
            var c = this.localData.shuffledOrder[r], s = this.getContentByIndex(c);
            if (s) {
                this.getDataLength();
                this.localData.levelID = a;
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: [s, 0, c.toString(), this._config.dataPath, "00", false]
                });
            }
            else
                e();
        }
        else
            e();
    };
    ReplaceRndStaticLvTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
        var a, r = t.args[0], i = null === (a = null == r ? void 0 : r.levelData) || void 0 === a ? void 0 : a.levelId;
        if (this.checkGameMode() && i === this.localData.levelID) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    ReplaceRndStaticLvTrait.traitKey = "ReplaceRndStaticLv";
    ReplaceRndStaticLvTrait = __decorate([
        mj.trait,
        mj.class("ReplaceRndStaticLvTrait")
    ], ReplaceRndStaticLvTrait);
    return ReplaceRndStaticLvTrait;
}(ExtractTrait_1.default));
exports.default = ReplaceRndStaticLvTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JlcGxhY2VTdGF0aWNMZXZlbC9TY3JpcHRzL1JlcGxhY2VSbmRTdGF0aWNMdlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsOERBQXlEO0FBQ3pELHFGQUFnRjtBQUdoRjtJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQXlHQztRQXhHQyxnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUF3R3BCLENBQUM7SUF0R0Msd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCO1lBQzlHLFVBQVUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVM7U0FDbEcsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcs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QUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUN4RCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBdEdNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFGcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQXlHM0M7SUFBRCw4QkFBQztDQXpHRCxBQXlHQyxDQXpHb0Qsc0JBQVksR0F5R2hFO2tCQXpHb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgRXh0cmFjdFN0YXRpYyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RTdGF0aWMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSZXBsYWNlUm5kU3RhdGljTHZUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwbGFjZVJuZFN0YXRpY0x2VHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBfbGV2ZWxEYXRhID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSZXBsYWNlUm5kU3RhdGljTHZcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLFxuICAgICAgYSxcbiAgICAgIHIgPSB0aGlzO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGRhdGFQYXRoOiAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZGF0YVBhdGgpIHx8IFwiYnl0ZURhdGEvc3RhdGljL3N0YXRpYzIwXCIsXG4gICAgICBidW5kbGVOYW1lOiAobnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZGF0YUJ1bmRsZSkgfHwgXCJtYWluUmVzXCJcbiAgICB9O1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5kYXRhUGF0aCAhPT0gdGhpcy5fY29uZmlnLmRhdGFQYXRoKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kYXRhUGF0aCA9IHRoaXMuX2NvbmZpZy5kYXRhUGF0aDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRJbmRleCA9IC0xO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGV2ZWxJRCA9IC0xO1xuICAgICAgdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlciA9IG51bGw7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZE9yZGVyID0gdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlcjtcbiAgICB9XG4gICAgRXh0cmFjdFN0YXRpYy5nZXRJbnN0YW5jZSgpLmxvYWRTdGF0aWNEYXRhQnlQYXRoKHRoaXMuX2NvbmZpZy5kYXRhUGF0aCwgdGhpcy5fY29uZmlnLmJ1bmRsZU5hbWUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICByLl9sZXZlbERhdGEgPSB0O1xuICAgICAgci5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlciAmJiByLmxvY2FsRGF0YS5zaHVmZmxlZE9yZGVyLmxlbmd0aCA9PT0gdC5sZW5ndGggfHwgci5pbml0U2h1ZmZsZWRPcmRlcih0Lmxlbmd0aCk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgci5ldmVudEVuYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICBpbml0U2h1ZmZsZWRPcmRlcih0KSB7XG4gICAgZm9yICh2YXIgZSA9IFtdLCBhID0gMDsgYSA8IHQ7IGErKykgZS5wdXNoKGEpO1xuICAgIHRoaXMubG9jYWxEYXRhLnNodWZmbGVkT3JkZXIgPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhLnNodWZmbGVkT3JkZXIgPSB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZE9yZGVyO1xuICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRJbmRleCA9IC0xO1xuICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRJbmRleCA9IHRoaXMubG9jYWxEYXRhLmN1cnJlbnRJbmRleDtcbiAgfVxuICBpc0RhdGFMb2FkZWQoKSB7XG4gICAgcmV0dXJuIG51bGwgIT09IHRoaXMuX2xldmVsRGF0YSAmJiB0aGlzLl9sZXZlbERhdGEubGVuZ3RoID4gMDtcbiAgfVxuICBpc05leHRFeHRyYWN0KCkge1xuICAgIHJldHVybiAhIXRoaXMuaXNEYXRhTG9hZGVkKCkgJiYgISF0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZE9yZGVyICYmIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRJbmRleCArIDEgPCB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZE9yZGVyLmxlbmd0aDtcbiAgfVxuICBnZXREYXRhTGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGF0YUxvYWRlZCgpID8gdGhpcy5fbGV2ZWxEYXRhLmxlbmd0aCA6IDA7XG4gIH1cbiAgZ2V0Q29udGVudEJ5SW5kZXgodCkge1xuICAgIHJldHVybiB0aGlzLmlzRGF0YUxvYWRlZCgpID8gdCA8IDAgfHwgdCA+PSB0aGlzLl9sZXZlbERhdGEubGVuZ3RoID8gbnVsbCA6IHRoaXMuX2xldmVsRGF0YVt0XSA6IG51bGw7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc1N0YXRpY0x2KHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGlmICh0LmFyZ3NbMF0gIT09IHRoaXMubG9jYWxEYXRhLmxldmVsSUQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXh0RXh0cmFjdCgpKSB7XG4gICAgICAgICAgZSh7XG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHRyYWN0U3RhdGljX2dldENvbnRlbnQodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSAmJiB0aGlzLmlzTmV4dEV4dHJhY3QoKSkge1xuICAgICAgdmFyIGEgPSB0LmFyZ3NbMF07XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50SW5kZXgrKztcbiAgICAgIHZhciByID0gdGhpcy5sb2NhbERhdGEuY3VycmVudEluZGV4LFxuICAgICAgICBpID0gdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlci5sZW5ndGggLSByLFxuICAgICAgICBuID0gciArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLFxuICAgICAgICBvID0gdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlcltuXTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnNodWZmbGVkT3JkZXJbbl0gPSB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZE9yZGVyW3JdO1xuICAgICAgdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlcltyXSA9IG87XG4gICAgICB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZE9yZGVyID0gdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlcjtcbiAgICAgIHZhciBjID0gdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRPcmRlcltyXSxcbiAgICAgICAgcyA9IHRoaXMuZ2V0Q29udGVudEJ5SW5kZXgoYyk7XG4gICAgICBpZiAocykge1xuICAgICAgICB0aGlzLmdldERhdGFMZW5ndGgoKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGV2ZWxJRCA9IGE7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDogW3MsIDAsIGMudG9TdHJpbmcoKSwgdGhpcy5fY29uZmlnLmRhdGFQYXRoLCBcIjAwXCIsIGZhbHNlXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbklwdFNldEx2X3JlR2VuRmFjZXModCwgZSkge1xuICAgIHZhciBhLFxuICAgICAgciA9IHQuYXJnc1swXSxcbiAgICAgIGkgPSBudWxsID09PSAoYSA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIubGV2ZWxEYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmxldmVsSWQ7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpICYmIGkgPT09IHRoaXMubG9jYWxEYXRhLmxldmVsSUQpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19
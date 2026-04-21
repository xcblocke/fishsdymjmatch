
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fixedLevel/Scripts/FixedLevelsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41327osN5dCHbzzsKWik2wX', 'FixedLevelsTrait');
// subpackages/l_fixedLevel/Scripts/FixedLevelsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ResManager_1 = require("../../../Scripts/framework/manager/ResManager");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FixedLevelsTrait = /** @class */ (function (_super) {
    __extends(FixedLevelsTrait, _super);
    function FixedLevelsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._strategyMinLevel = 2;
        _this._strategyMaxLevel = 30;
        return _this;
    }
    FixedLevelsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "ExtractTool_getFixedLvStr",
                priority: 0,
                type: TraitEventPositionType.befor
            }]);
        if (this._traitData.strategy) {
            this._strategyMinLevel = this._traitData.strategyMinLevel || 2;
            this._strategyMaxLevel = this._traitData.strategyMaxLevel || 30;
            this.initStrategyData();
        }
    };
    FixedLevelsTrait.prototype.initStrategyData = function () {
        var t = this._traitData.strategy, e = this._strategyMinLevel, r = this._strategyMaxLevel, a = this.localData.levelData ? Object.keys(this.localData.levelData).length : 0, i = r - e + 1;
        this.localData.strategy === t && a === i || this.preloadAndRandomize();
    };
    FixedLevelsTrait.prototype.preloadAndRandomize = function () {
        for (var t = this, e = this._traitData.strategy, r = this._strategyMinLevel, a = this._strategyMaxLevel, i = this._traitData.strategyBundle || "mainRes", n = this._traitData.strategyPath || "byteData/fixLevel/" + e + "/", o = [], l = r; l <= a; l++) {
            var c = l.toString().padStart(2, "0");
            o.push("" + n + c);
        }
        ResManager_1.resManager.loadRes(o, cc.JsonAsset, i).then(function (a) {
            var i = Array.isArray(a) ? a : [a], n = {};
            i.forEach(function (t, e) {
                if (t && t.json) {
                    var a = (e + r).toString().padStart(2, "0"), i = t.json;
                    if (i && i.length > 0) {
                        var o = Math.floor(Math.random() * i.length);
                        n[a] = i[o];
                    }
                    t.decRef();
                }
            });
            t.localData.strategy = e;
            t.localData.levelData = n;
            t.localData.levelData = t.localData.levelData;
        }).catch(function () { });
    };
    FixedLevelsTrait.prototype.onExtractTool_isFixedLevel = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0];
            if (this.checkIsStrategyLevelID(r)) {
                var a = this._strategyMaxLevel;
                e(r && r >= 1 && r <= a ? {
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                } : {
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: false
                });
            }
            else if (r && r <= this._traitData.fixLevelArr.length) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: false
                });
            }
        }
        else
            e();
    };
    FixedLevelsTrait.prototype.onExtractTool_getFixedLvStr = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0];
            if (this.checkIsStrategyLevelID(r)) {
                var a = this.getStrategyLevelData(r);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: a
                });
            }
            else
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: this._traitData.fixLevelArr[r - 1]
                });
        }
        else
            e();
    };
    FixedLevelsTrait.prototype.checkIsStrategyLevelID = function (t) {
        if (!this._traitData.strategy || !this.localData.levelData)
            return false;
        var e = t.toString().padStart(2, "0");
        return !!this.localData.levelData[e];
    };
    FixedLevelsTrait.prototype.getStrategyLevelData = function (t) {
        var e;
        if (1 === t)
            return this._traitData.fixLevelArr && this._traitData.fixLevelArr[0] ? this._traitData.fixLevelArr[0] : "1513209549243287040,24499269";
        var r = t.toString().padStart(2, "0");
        return (null === (e = this.localData.levelData) || void 0 === e ? void 0 : e[r]) || null;
    };
    FixedLevelsTrait.prototype.onExtNormLv_getCont = function (t, e) {
        e();
    };
    FixedLevelsTrait.traitKey = "FixedLevels";
    FixedLevelsTrait = __decorate([
        mj.trait,
        mj.class("FixedLevelsTrait")
    ], FixedLevelsTrait);
    return FixedLevelsTrait;
}(ExtractTrait_1.default));
exports.default = FixedLevelsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpeGVkTGV2ZWwvU2NyaXB0cy9GaXhlZExldmVsc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsNEVBQTJFO0FBQzNFLDhFQUF3RjtBQUd4RjtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTZHQztRQTVHQyx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsdUJBQWlCLEdBQUcsRUFBRSxDQUFDOztJQTJHekIsQ0FBQztJQXpHQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLFFBQVEsRUFBRSxDQUFDO2dCQUNYLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxLQUFLO2FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNELDJDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFB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LENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzNGLENBQUM7SUFDRCw4Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBekdNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBSGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQTZHcEM7SUFBRCx1QkFBQztDQTdHRCxBQTZHQyxDQTdHNkMsc0JBQVksR0E2R3pEO2tCQTdHb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9SZXNNYW5hZ2VyJztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRml4ZWRMZXZlbHNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRMZXZlbHNUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIF9zdHJhdGVneU1pbkxldmVsID0gMjtcbiAgX3N0cmF0ZWd5TWF4TGV2ZWwgPSAzMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGaXhlZExldmVsc1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJFeHRyYWN0VG9vbF9nZXRGaXhlZEx2U3RyXCIsXG4gICAgICBwcmlvcml0eTogMCxcbiAgICAgIHR5cGU6IFRyYWl0RXZlbnRQb3NpdGlvblR5cGUuYmVmb3JcbiAgICB9XSk7XG4gICAgaWYgKHRoaXMuX3RyYWl0RGF0YS5zdHJhdGVneSkge1xuICAgICAgdGhpcy5fc3RyYXRlZ3lNaW5MZXZlbCA9IHRoaXMuX3RyYWl0RGF0YS5zdHJhdGVneU1pbkxldmVsIHx8IDI7XG4gICAgICB0aGlzLl9zdHJhdGVneU1heExldmVsID0gdGhpcy5fdHJhaXREYXRhLnN0cmF0ZWd5TWF4TGV2ZWwgfHwgMzA7XG4gICAgICB0aGlzLmluaXRTdHJhdGVneURhdGEoKTtcbiAgICB9XG4gIH1cbiAgaW5pdFN0cmF0ZWd5RGF0YSgpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5zdHJhdGVneSxcbiAgICAgIGUgPSB0aGlzLl9zdHJhdGVneU1pbkxldmVsLFxuICAgICAgciA9IHRoaXMuX3N0cmF0ZWd5TWF4TGV2ZWwsXG4gICAgICBhID0gdGhpcy5sb2NhbERhdGEubGV2ZWxEYXRhID8gT2JqZWN0LmtleXModGhpcy5sb2NhbERhdGEubGV2ZWxEYXRhKS5sZW5ndGggOiAwLFxuICAgICAgaSA9IHIgLSBlICsgMTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zdHJhdGVneSA9PT0gdCAmJiBhID09PSBpIHx8IHRoaXMucHJlbG9hZEFuZFJhbmRvbWl6ZSgpO1xuICB9XG4gIHByZWxvYWRBbmRSYW5kb21pemUoKSB7XG4gICAgZm9yICh2YXIgdCA9IHRoaXMsIGUgPSB0aGlzLl90cmFpdERhdGEuc3RyYXRlZ3ksIHIgPSB0aGlzLl9zdHJhdGVneU1pbkxldmVsLCBhID0gdGhpcy5fc3RyYXRlZ3lNYXhMZXZlbCwgaSA9IHRoaXMuX3RyYWl0RGF0YS5zdHJhdGVneUJ1bmRsZSB8fCBcIm1haW5SZXNcIiwgbiA9IHRoaXMuX3RyYWl0RGF0YS5zdHJhdGVneVBhdGggfHwgXCJieXRlRGF0YS9maXhMZXZlbC9cIiArIGUgKyBcIi9cIiwgbyA9IFtdLCBsID0gcjsgbCA8PSBhOyBsKyspIHtcbiAgICAgIHZhciBjID0gbC50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIG8ucHVzaChcIlwiICsgbiArIGMpO1xuICAgIH1cbiAgICByZXNNYW5hZ2VyLmxvYWRSZXMobywgY2MuSnNvbkFzc2V0LCBpKS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgaSA9IEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW2FdLFxuICAgICAgICBuID0ge307XG4gICAgICBpLmZvckVhY2goZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHQgJiYgdC5qc29uKSB7XG4gICAgICAgICAgdmFyIGEgPSAoZSArIHIpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgICAgICAgaSA9IHQuanNvbjtcbiAgICAgICAgICBpZiAoaSAmJiBpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS5sZW5ndGgpO1xuICAgICAgICAgICAgblthXSA9IGlbb107XG4gICAgICAgICAgfVxuICAgICAgICAgIHQuZGVjUmVmKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdC5sb2NhbERhdGEuc3RyYXRlZ3kgPSBlO1xuICAgICAgdC5sb2NhbERhdGEubGV2ZWxEYXRhID0gbjtcbiAgICAgIHQubG9jYWxEYXRhLmxldmVsRGF0YSA9IHQubG9jYWxEYXRhLmxldmVsRGF0YTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc0ZpeGVkTGV2ZWwodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0LmFyZ3NbMF07XG4gICAgICBpZiAodGhpcy5jaGVja0lzU3RyYXRlZ3lMZXZlbElEKHIpKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5fc3RyYXRlZ3lNYXhMZXZlbDtcbiAgICAgICAgZShyICYmIHIgPj0gMSAmJiByIDw9IGEgPyB7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAociAmJiByIDw9IHRoaXMuX3RyYWl0RGF0YS5maXhMZXZlbEFyci5sZW5ndGgpIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRXh0cmFjdFRvb2xfZ2V0Rml4ZWRMdlN0cih0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IHQuYXJnc1swXTtcbiAgICAgIGlmICh0aGlzLmNoZWNrSXNTdHJhdGVneUxldmVsSUQocikpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldFN0cmF0ZWd5TGV2ZWxEYXRhKHIpO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IGFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl90cmFpdERhdGEuZml4TGV2ZWxBcnJbciAtIDFdXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGNoZWNrSXNTdHJhdGVneUxldmVsSUQodCkge1xuICAgIGlmICghdGhpcy5fdHJhaXREYXRhLnN0cmF0ZWd5IHx8ICF0aGlzLmxvY2FsRGF0YS5sZXZlbERhdGEpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZSA9IHQudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgcmV0dXJuICEhdGhpcy5sb2NhbERhdGEubGV2ZWxEYXRhW2VdO1xuICB9XG4gIGdldFN0cmF0ZWd5TGV2ZWxEYXRhKHQpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoMSA9PT0gdCkgcmV0dXJuIHRoaXMuX3RyYWl0RGF0YS5maXhMZXZlbEFyciAmJiB0aGlzLl90cmFpdERhdGEuZml4TGV2ZWxBcnJbMF0gPyB0aGlzLl90cmFpdERhdGEuZml4TGV2ZWxBcnJbMF0gOiBcIjE1MTMyMDk1NDkyNDMyODcwNDAsMjQ0OTkyNjlcIjtcbiAgICB2YXIgciA9IHQudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgcmV0dXJuIChudWxsID09PSAoZSA9IHRoaXMubG9jYWxEYXRhLmxldmVsRGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZVtyXSkgfHwgbnVsbDtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRDb250KHQsIGUpIHtcbiAgICBlKCk7XG4gIH1cbn0iXX0=
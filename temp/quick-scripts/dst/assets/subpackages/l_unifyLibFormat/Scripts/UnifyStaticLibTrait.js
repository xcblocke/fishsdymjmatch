
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_unifyLibFormat/Scripts/UnifyStaticLibTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fd0aeTSMRCZrRIeXGobIBH', 'UnifyStaticLibTrait');
// subpackages/l_unifyLibFormat/Scripts/UnifyStaticLibTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UnifyBaseTrait_1 = require("./UnifyBaseTrait");
var UnifyUtils_1 = require("./UnifyUtils");
var UnifyStaticLibTrait = /** @class */ (function (_super) {
    __extends(UnifyStaticLibTrait, _super);
    function UnifyStaticLibTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelData = [];
        _this.initSuccess = false;
        _this.libEnabled = false;
        return _this;
    }
    UnifyStaticLibTrait.prototype.getPath = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/static001", "l_unifyLibFormat", -1], ["config/static001", "r_unifyLibFormat", 100]];
    };
    UnifyStaticLibTrait.prototype.isLoaded = function () {
        return this.levelData && this.levelData.length > 0;
    };
    UnifyStaticLibTrait.prototype.onLoginM_enterGame = function (t, e) {
        this.initData();
        e();
    };
    UnifyStaticLibTrait.prototype.onExtractTool_initOther = function (t, e) {
        this.initData();
        e();
    };
    UnifyStaticLibTrait.prototype.initData = function () {
        var t = this;
        this.initSuccess || this.loadLevelData().then(function (e) {
            t.initSuccess = e;
        });
    };
    UnifyStaticLibTrait.prototype.loadLevelData = function () {
        var t = this, e = this.getPath();
        return new Promise(function (r) {
            UnifyUtils_1.default.loadLibraries(e.map(function (t) {
                return {
                    path: t[0],
                    bundle: t[1],
                    timeout: t[2]
                };
            })).then(function (e) {
                var n = e.allData, i = e.failCount;
                if (n) {
                    var a = UnifyUtils_1.default.parseLevelData(n);
                    if (a.length > t.levelData.length) {
                        t.setLevelCaches("static", a);
                        t.levelData = a.map(function (t) {
                            return t.content;
                        });
                    }
                }
                r(0 === i);
            }).catch(function () {
                r(false);
            });
        });
    };
    UnifyStaticLibTrait.prototype.onExtractTool_canUseStatic = function (t, e) {
        if (this.checkGameMode()) {
            if (this.isLoaded()) {
                this.libEnabled || (this.libEnabled = true);
                e({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else
                e();
        }
        else
            e();
    };
    UnifyStaticLibTrait.prototype.onExtractStatic_getLvData = function (t, e) {
        if (this.checkGameMode() && this.isLoaded() && this.libEnabled) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelData
            });
        }
        else {
            e();
        }
    };
    UnifyStaticLibTrait.prototype.onExtractStatic_getMaxLvs = function (t, e) {
        if (this.checkGameMode() && this.isLoaded() && this.libEnabled) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelData.length
            });
        }
        else {
            e();
        }
    };
    UnifyStaticLibTrait.prototype.onExtractStatic_setCurLvDt = function (t, e) {
        if (this.checkGameMode()) {
            if (this.isLoaded()) {
                if (this.libEnabled) {
                    var r = t.args[0];
                    if (null != r) {
                        var n = this.getLevelByArrayIndex("static", r);
                        if (n) {
                            var i = ExtractTool_1.default.getCurrentGameType(), a = UserModel_1.default.getInstance().getGameDataByGameType(i).getLevelId();
                            this.cacheCurLvData(i, a, n);
                        }
                    }
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    UnifyStaticLibTrait.traitKey = "UnifyStaticLib";
    UnifyStaticLibTrait = __decorate([
        mj.trait,
        mj.class("UnifyStaticLibTrait")
    ], UnifyStaticLibTrait);
    return UnifyStaticLibTrait;
}(UnifyBaseTrait_1.default));
exports.default = UnifyStaticLibTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VuaWZ5TGliRm9ybWF0L1NjcmlwdHMvVW5pZnlTdGF0aWNMaWJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTRFO0FBQzVFLHNFQUFpRTtBQUNqRSxtREFBOEM7QUFDOUMsMkNBQXNDO0FBR3RDO0lBQWlELHVDQUFjO0lBQS9EO1FBQUEscUVBMEdDO1FBekdDLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVSxHQUFHLEtBQUssQ0FBQzs7SUF1R3JCLENBQUM7SUFyR0MscUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNU0sQ0FBQztJQUNELHNDQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxnREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNE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Q1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBckdNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFKaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTBHdkM7SUFBRCwwQkFBQztDQTFHRCxBQTBHQyxDQTFHZ0Qsd0JBQWMsR0EwRzlEO2tCQTFHb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBVbmlmeUJhc2VUcmFpdCBmcm9tICcuL1VuaWZ5QmFzZVRyYWl0JztcbmltcG9ydCBVbmlmeVV0aWxzIGZyb20gJy4vVW5pZnlVdGlscyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlVuaWZ5U3RhdGljTGliVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZ5U3RhdGljTGliVHJhaXQgZXh0ZW5kcyBVbmlmeUJhc2VUcmFpdCB7XG4gIGxldmVsRGF0YSA9IFtdO1xuICBpbml0U3VjY2VzcyA9IGZhbHNlO1xuICBsaWJFbmFibGVkID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVW5pZnlTdGF0aWNMaWJcIjtcbiAgZ2V0UGF0aCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnBhdGgpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBbW1wiY29uZmlnL3N0YXRpYzAwMVwiLCBcImxfdW5pZnlMaWJGb3JtYXRcIiwgLTFdLCBbXCJjb25maWcvc3RhdGljMDAxXCIsIFwicl91bmlmeUxpYkZvcm1hdFwiLCAxMDBdXTtcbiAgfVxuICBpc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZXZlbERhdGEgJiYgdGhpcy5sZXZlbERhdGEubGVuZ3RoID4gMDtcbiAgfVxuICBvbkxvZ2luTV9lbnRlckdhbWUodCwgZSkge1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pbml0T3RoZXIodCwgZSkge1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgICBlKCk7XG4gIH1cbiAgaW5pdERhdGEoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuaW5pdFN1Y2Nlc3MgfHwgdGhpcy5sb2FkTGV2ZWxEYXRhKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgdC5pbml0U3VjY2VzcyA9IGU7XG4gICAgfSk7XG4gIH1cbiAgbG9hZExldmVsRGF0YSgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyKSB7XG4gICAgICBVbmlmeVV0aWxzLmxvYWRMaWJyYXJpZXMoZS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXRoOiB0WzBdLFxuICAgICAgICAgIGJ1bmRsZTogdFsxXSxcbiAgICAgICAgICB0aW1lb3V0OiB0WzJdXG4gICAgICAgIH07XG4gICAgICB9KSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbiA9IGUuYWxsRGF0YSxcbiAgICAgICAgICBpID0gZS5mYWlsQ291bnQ7XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgdmFyIGEgPSBVbmlmeVV0aWxzLnBhcnNlTGV2ZWxEYXRhKG4pO1xuICAgICAgICAgIGlmIChhLmxlbmd0aCA+IHQubGV2ZWxEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdC5zZXRMZXZlbENhY2hlcyhcInN0YXRpY1wiLCBhKTtcbiAgICAgICAgICAgIHQubGV2ZWxEYXRhID0gYS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQuY29udGVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByKDAgPT09IGkpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICByKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIG9uRXh0cmFjdFRvb2xfY2FuVXNlU3RhdGljKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5saWJFbmFibGVkIHx8ICh0aGlzLmxpYkVuYWJsZWQgPSB0cnVlKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRXh0cmFjdFN0YXRpY19nZXRMdkRhdGEodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSAmJiB0aGlzLmlzTG9hZGVkKCkgJiYgdGhpcy5saWJFbmFibGVkKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMubGV2ZWxEYXRhXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkV4dHJhY3RTdGF0aWNfZ2V0TWF4THZzKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkgJiYgdGhpcy5pc0xvYWRlZCgpICYmIHRoaXMubGliRW5hYmxlZCkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmxldmVsRGF0YS5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uRXh0cmFjdFN0YXRpY19zZXRDdXJMdkR0KHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgICAgaWYgKHRoaXMubGliRW5hYmxlZCkge1xuICAgICAgICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgICAgICAgIGlmIChudWxsICE9IHIpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5nZXRMZXZlbEJ5QXJyYXlJbmRleChcInN0YXRpY1wiLCByKTtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gRXh0cmFjdFRvb2wuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICAgICAgICAgICAgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShpKS5nZXRMZXZlbElkKCk7XG4gICAgICAgICAgICAgIHRoaXMuY2FjaGVDdXJMdkRhdGEoaSwgYSwgbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==
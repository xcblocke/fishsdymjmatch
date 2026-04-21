
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_replaceStaticLevel/Scripts/ReplaceStaticLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f6f2rzJ19H2JpzhFcCo7FU', 'ReplaceStaticLevelTrait');
// subpackages/l_replaceStaticLevel/Scripts/ReplaceStaticLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var ReplaceStaticLevelTrait = /** @class */ (function (_super) {
    __extends(ReplaceStaticLevelTrait, _super);
    function ReplaceStaticLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levelData = null;
        return _this;
    }
    ReplaceStaticLevelTrait.prototype.onLoad = function () {
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
        }
        ExtractStatic_1.default.getInstance().loadStaticDataByPath(this._config.dataPath, this._config.bundleName, function (t) {
            r._levelData = t;
        }, function () {
            r.eventEnabled = false;
        });
    };
    ReplaceStaticLevelTrait.prototype.isDataLoaded = function () {
        return null !== this._levelData && this._levelData.length > 0;
    };
    ReplaceStaticLevelTrait.prototype.isNextExtract = function () {
        return !!this.isDataLoaded() && this.localData.currentIndex + 1 < this._levelData.length;
    };
    ReplaceStaticLevelTrait.prototype.getDataLength = function () {
        return this.isDataLoaded() ? this._levelData.length : 0;
    };
    ReplaceStaticLevelTrait.prototype.getContentByIndex = function (t) {
        return this.isDataLoaded() ? t < 0 || t >= this._levelData.length ? null : this._levelData[t] : null;
    };
    ReplaceStaticLevelTrait.prototype.onExtractTool_isStaticLv = function (t, e) {
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
    ReplaceStaticLevelTrait.prototype.onExtractStatic_getContent = function (t, e) {
        if (this.checkGameMode() && this.isNextExtract()) {
            var a = t.args[0];
            this.localData.currentIndex++;
            var r = this.localData.currentIndex, i = this.getContentByIndex(r);
            if (i) {
                this.getDataLength();
                this.localData.levelID = a;
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: [i, 0, r.toString(), this._config.dataPath, "00", false]
                });
            }
            else
                e();
        }
        else
            e();
    };
    ReplaceStaticLevelTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
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
    ReplaceStaticLevelTrait.traitKey = "ReplaceStaticLevel";
    ReplaceStaticLevelTrait = __decorate([
        mj.trait,
        mj.class("ReplaceStaticLevelTrait")
    ], ReplaceStaticLevelTrait);
    return ReplaceStaticLevelTrait;
}(ExtractTrait_1.default));
exports.default = ReplaceStaticLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JlcGxhY2VTdGF0aWNMZXZlbC9TY3JpcHRzL1JlcGxhY2VTdGF0aWNMZXZlbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsOERBQXlEO0FBQ3pELHFGQUFnRjtBQUdoRjtJQUFxRCwyQ0FBWTtJQUFqRTtRQUFBLHFFQXdGQztRQXZGQyxnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUF1RnBCLENBQUM7SUFyRkMsd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCO1lBQzlHLFVBQVUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVM7U0FDbEcsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcs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O0lBQUQsOEJBQUM7Q0F4RkQsQUF3RkMsQ0F4Rm9ELHNCQUFZLEdBd0ZoRTtrQkF4Rm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IEV4dHJhY3RTdGF0aWMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0U3RhdGljJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmVwbGFjZVN0YXRpY0xldmVsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGxhY2VTdGF0aWNMZXZlbFRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgX2xldmVsRGF0YSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmVwbGFjZVN0YXRpY0xldmVsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIGEsXG4gICAgICByID0gdGhpcztcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBkYXRhUGF0aDogKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmRhdGFQYXRoKSB8fCBcImJ5dGVEYXRhL3N0YXRpYy9zdGF0aWMyMFwiLFxuICAgICAgYnVuZGxlTmFtZTogKG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmRhdGFCdW5kbGUpIHx8IFwibWFpblJlc1wiXG4gICAgfTtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuZGF0YVBhdGggIT09IHRoaXMuX2NvbmZpZy5kYXRhUGF0aCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZGF0YVBhdGggPSB0aGlzLl9jb25maWcuZGF0YVBhdGg7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50SW5kZXggPSAtMTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsSUQgPSAtMTtcbiAgICB9XG4gICAgRXh0cmFjdFN0YXRpYy5nZXRJbnN0YW5jZSgpLmxvYWRTdGF0aWNEYXRhQnlQYXRoKHRoaXMuX2NvbmZpZy5kYXRhUGF0aCwgdGhpcy5fY29uZmlnLmJ1bmRsZU5hbWUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICByLl9sZXZlbERhdGEgPSB0O1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHIuZXZlbnRFbmFibGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgaXNEYXRhTG9hZGVkKCkge1xuICAgIHJldHVybiBudWxsICE9PSB0aGlzLl9sZXZlbERhdGEgJiYgdGhpcy5fbGV2ZWxEYXRhLmxlbmd0aCA+IDA7XG4gIH1cbiAgaXNOZXh0RXh0cmFjdCgpIHtcbiAgICByZXR1cm4gISF0aGlzLmlzRGF0YUxvYWRlZCgpICYmIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRJbmRleCArIDEgPCB0aGlzLl9sZXZlbERhdGEubGVuZ3RoO1xuICB9XG4gIGdldERhdGFMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEYXRhTG9hZGVkKCkgPyB0aGlzLl9sZXZlbERhdGEubGVuZ3RoIDogMDtcbiAgfVxuICBnZXRDb250ZW50QnlJbmRleCh0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEYXRhTG9hZGVkKCkgPyB0IDwgMCB8fCB0ID49IHRoaXMuX2xldmVsRGF0YS5sZW5ndGggPyBudWxsIDogdGhpcy5fbGV2ZWxEYXRhW3RdIDogbnVsbDtcbiAgfVxuICBvbkV4dHJhY3RUb29sX2lzU3RhdGljTHYodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgaWYgKHQuYXJnc1swXSAhPT0gdGhpcy5sb2NhbERhdGEubGV2ZWxJRCkge1xuICAgICAgICBpZiAodGhpcy5pc05leHRFeHRyYWN0KCkpIHtcbiAgICAgICAgICBlKHtcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkV4dHJhY3RTdGF0aWNfZ2V0Q29udGVudCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpICYmIHRoaXMuaXNOZXh0RXh0cmFjdCgpKSB7XG4gICAgICB2YXIgYSA9IHQuYXJnc1swXTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRJbmRleCsrO1xuICAgICAgdmFyIHIgPSB0aGlzLmxvY2FsRGF0YS5jdXJyZW50SW5kZXgsXG4gICAgICAgIGkgPSB0aGlzLmdldENvbnRlbnRCeUluZGV4KHIpO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdGhpcy5nZXREYXRhTGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsSUQgPSBhO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IFtpLCAwLCByLnRvU3RyaW5nKCksIHRoaXMuX2NvbmZpZy5kYXRhUGF0aCwgXCIwMFwiLCBmYWxzZV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25JcHRTZXRMdl9yZUdlbkZhY2VzKHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIgPSB0LmFyZ3NbMF0sXG4gICAgICBpID0gbnVsbCA9PT0gKGEgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmxldmVsRGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5sZXZlbElkO1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSAmJiBpID09PSB0aGlzLmxvY2FsRGF0YS5sZXZlbElEKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==
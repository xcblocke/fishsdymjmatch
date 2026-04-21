
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cbad/Scripts/ChangeBoardDataTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28d92Vy7+5Ht5D0RSpHKSrH', 'ChangeBoardDataTrait');
// subpackages/l_cbad/Scripts/ChangeBoardDataTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeBoardDataTrait = /** @class */ (function (_super) {
    __extends(ChangeBoardDataTrait, _super);
    function ChangeBoardDataTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.configPath = null;
        _this.offsetPath = null;
        _this.levelDataPath = null;
        _this.jsonPath = null;
        _this.bundleName = "";
        _this.traitFolder = "";
        _this._pathExistsCache = new Map();
        return _this;
    }
    ChangeBoardDataTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.bundleName = this._traitData.bundleName || "mainRes";
        this.traitFolder = this._traitData.traitFolder || "trait1";
        this.configPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
        this.offsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
        this.levelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
        this.jsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getConfigPath = function (t, e) {
        if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_file_config")) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.configPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getOffsetPath = function (t, e) {
        if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_data_offsets")) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.offsetPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getLevDataPath = function (t, e) {
        if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_data")) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelDataPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getJsonPath = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            var a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
            if (a) {
                var i = "config/boards/" + this.traitFolder + "/" + a;
                if (!this.getIsExists(i)) {
                    e();
                    return;
                }
            }
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.jsonPath
            });
        }
        else
            e();
    };
    ChangeBoardDataTrait.prototype.getIsExists = function (t) {
        this._pathExistsCache.has(t) || this._pathExistsCache.set(t, this.checkFileExists(t));
        return this._pathExistsCache.get(t);
    };
    ChangeBoardDataTrait.prototype.checkFileExists = function (t) {
        var e = cc.assetManager.getBundle(this.bundleName);
        return !(!e || !e.getInfoWithPath(t));
    };
    ChangeBoardDataTrait.traitKey = "ChangeBoardData";
    ChangeBoardDataTrait = __decorate([
        mj.trait,
        mj.class("ChangeBoardDataTrait")
    ], ChangeBoardDataTrait);
    return ChangeBoardDataTrait;
}(ExtractTrait_1.default));
exports.default = ChangeBoardDataTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NiYWQvU2NyaXB0cy9DaGFuZ2VCb2FyZERhdGFUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDhFQUF3RjtBQUd4RjtJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQTZFQztRQTVFQyxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBc0UvQixDQUFDO0lBcEVDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMs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QUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDhDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBcEVNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFSakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTZFeEM7SUFBRCwyQkFBQztDQTdFRCxBQTZFQyxDQTdFaUQsc0JBQVksR0E2RTdEO2tCQTdFb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZUJvYXJkRGF0YVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VCb2FyZERhdGFUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIGNvbmZpZ1BhdGggPSBudWxsO1xuICBvZmZzZXRQYXRoID0gbnVsbDtcbiAgbGV2ZWxEYXRhUGF0aCA9IG51bGw7XG4gIGpzb25QYXRoID0gbnVsbDtcbiAgYnVuZGxlTmFtZSA9IFwiXCI7XG4gIHRyYWl0Rm9sZGVyID0gXCJcIjtcbiAgX3BhdGhFeGlzdHNDYWNoZSA9IG5ldyBNYXAoKTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VCb2FyZERhdGFcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYnVuZGxlTmFtZSA9IHRoaXMuX3RyYWl0RGF0YS5idW5kbGVOYW1lIHx8IFwibWFpblJlc1wiO1xuICAgIHRoaXMudHJhaXRGb2xkZXIgPSB0aGlzLl90cmFpdERhdGEudHJhaXRGb2xkZXIgfHwgXCJ0cmFpdDFcIjtcbiAgICB0aGlzLmNvbmZpZ1BhdGggPSBbXCJieXRlRGF0YS9cIiArIHRoaXMudHJhaXRGb2xkZXIgKyBcIi9sZXZlbF9maWxlX2NvbmZpZ1wiLCB0aGlzLmJ1bmRsZU5hbWVdO1xuICAgIHRoaXMub2Zmc2V0UGF0aCA9IFtcImJ5dGVEYXRhL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL2xldmVsX2RhdGFfb2Zmc2V0c1wiLCB0aGlzLmJ1bmRsZU5hbWVdO1xuICAgIHRoaXMubGV2ZWxEYXRhUGF0aCA9IFtcImJ5dGVEYXRhL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL2xldmVsX2RhdGFcIiwgdGhpcy5idW5kbGVOYW1lXTtcbiAgICB0aGlzLmpzb25QYXRoID0gW1wiY29uZmlnL2JvYXJkcy9cIiArIHRoaXMudHJhaXRGb2xkZXIgKyBcIi9cIiwgdGhpcy5idW5kbGVOYW1lXTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRDb25maWdQYXRoKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkgJiYgdGhpcy5nZXRJc0V4aXN0cyhcImJ5dGVEYXRhL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL2xldmVsX2ZpbGVfY29uZmlnXCIpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuY29uZmlnUGF0aFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0T2Zmc2V0UGF0aCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpICYmIHRoaXMuZ2V0SXNFeGlzdHMoXCJieXRlRGF0YS9cIiArIHRoaXMudHJhaXRGb2xkZXIgKyBcIi9sZXZlbF9kYXRhX29mZnNldHNcIikpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5vZmZzZXRQYXRoXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRMZXZEYXRhUGF0aCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpICYmIHRoaXMuZ2V0SXNFeGlzdHMoXCJieXRlRGF0YS9cIiArIHRoaXMudHJhaXRGb2xkZXIgKyBcIi9sZXZlbF9kYXRhXCIpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMubGV2ZWxEYXRhUGF0aFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0SnNvblBhdGgodCwgZSkge1xuICAgIHZhciByO1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIGEgPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclswXTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIHZhciBpID0gXCJjb25maWcvYm9hcmRzL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL1wiICsgYTtcbiAgICAgICAgaWYgKCF0aGlzLmdldElzRXhpc3RzKGkpKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmpzb25QYXRoXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGdldElzRXhpc3RzKHQpIHtcbiAgICB0aGlzLl9wYXRoRXhpc3RzQ2FjaGUuaGFzKHQpIHx8IHRoaXMuX3BhdGhFeGlzdHNDYWNoZS5zZXQodCwgdGhpcy5jaGVja0ZpbGVFeGlzdHModCkpO1xuICAgIHJldHVybiB0aGlzLl9wYXRoRXhpc3RzQ2FjaGUuZ2V0KHQpO1xuICB9XG4gIGNoZWNrRmlsZUV4aXN0cyh0KSB7XG4gICAgdmFyIGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKHRoaXMuYnVuZGxlTmFtZSk7XG4gICAgcmV0dXJuICEoIWUgfHwgIWUuZ2V0SW5mb1dpdGhQYXRoKHQpKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cb15Days/Scripts/ChangeBoard15DaysTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5271dvq491N36gTsg0iDp+2', 'ChangeBoard15DaysTrait');
// subpackages/l_cb15Days/Scripts/ChangeBoard15DaysTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ChangeBoard15DaysTrait = /** @class */ (function (_super) {
    __extends(ChangeBoard15DaysTrait, _super);
    function ChangeBoard15DaysTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.installDaysThreshold = 15;
        _this.bundleName = "r_cb15days";
        _this.traitFolder = "trait999";
        _this.configPath = null;
        _this.offsetPath = null;
        _this.levelDataPath = null;
        _this.jsonPath = null;
        _this._gameTypes = [GameTypeEnums_1.MjGameType.Normal];
        _this._isAble = false;
        _this._isChange = false;
        return _this;
    }
    ChangeBoard15DaysTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this.installDaysThreshold = null !== (e = this._traitData.installDays) && void 0 !== e ? e : 15;
        this.configPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
        this.offsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
        this.levelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
        this.jsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
        this._gameTypes = null !== (r = this._traitData.gameType) && void 0 !== r ? r : [GameTypeEnums_1.MjGameType.Normal];
        this.tryPreloadBundle();
    };
    ChangeBoard15DaysTrait.prototype.tryPreloadBundle = function () {
        LowPriorityBundleLoader_1.default.getInstance().addTask(this.bundleName);
    };
    ChangeBoard15DaysTrait.prototype.checkFunctionEnabled = function () {
        var t, e = UserModel_1.default.getInstance();
        if (!e)
            return false;
        var r = null === (t = e.getInstallTime) || void 0 === t ? void 0 : t.call(e);
        return !(!r || r <= 0) && Math.floor((Date.now() - r) / 86400000) >= this.installDaysThreshold;
    };
    ChangeBoard15DaysTrait.prototype.isBundleLoaded = function () {
        return LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(this.bundleName);
    };
    ChangeBoard15DaysTrait.prototype.checkCondition = function (t) {
        if (!this.isBundleLoaded())
            return false;
        t || (t = ExtractTool_1.default.getCurrentGameType());
        return !!this._gameTypes.includes(t) && this.checkFunctionEnabled();
    };
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getConfigPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        this._isAble = this.checkCondition(r);
        if (this._isAble) {
            this._isChange = true;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.configPath
            });
        }
        else {
            e();
            this._isChange = false;
        }
    };
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getOffsetPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        if (this.checkCondition(r)) {
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
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getLevDataPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        if (this.checkCondition(r)) {
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
    ChangeBoard15DaysTrait.prototype.onExtNormLv_getJsonPath = function (t, e) {
        var r = ExtractTool_1.default.getCurrentGameType();
        if (this.checkCondition(r) && this._isChange) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.jsonPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoard15DaysTrait.prototype.onIptEnterAniFin_excute = function (t, e) {
        var r, a;
        e();
        if (this._isAble) {
            var n = t.ins, o = null === (a = null === (r = null == n ? void 0 : n.gameContext) || void 0 === r ? void 0 : r.getTileMapObject) || void 0 === a ? void 0 : a.call(r);
            o && this.countCardsByCardId(o);
        }
    };
    ChangeBoard15DaysTrait.prototype.countCardsByCardId = function (t) {
        var e, r, a, n, o, l = new Map(), s = (null === (o = t.mapLayers) || void 0 === o ? void 0 : o.call(t)) || [];
        try {
            for (var u = __values(s), c = u.next(); !c.done; c = u.next()) {
                var d = c.value.allCards || [];
                try {
                    for (var f = (a = void 0, __values(d)), h = f.next(); !h.done; h = f.next()) {
                        var p = h.value;
                        if (p && p.isValid) {
                            var y = p.cardId;
                            l.set(y, (l.get(y) || 0) + 1);
                        }
                    }
                }
                catch (t) {
                    a = {
                        error: t
                    };
                }
                finally {
                    try {
                        h && !h.done && (n = f.return) && n.call(f);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (r = u.return) && r.call(u);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return l;
    };
    ChangeBoard15DaysTrait.traitKey = "ChangeBoard15Days";
    ChangeBoard15DaysTrait = __decorate([
        mj.trait,
        mj.class("ChangeBoard15DaysTrait")
    ], ChangeBoard15DaysTrait);
    return ChangeBoard15DaysTrait;
}(Trait_1.default));
exports.default = ChangeBoard15DaysTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NiMTVEYXlzL1NjcmlwdHMvQ2hhbmdlQm9hcmQxNURheXNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLDhFQUF3RjtBQUN4RixxR0FBZ0c7QUFDaEcsd0ZBQW9GO0FBQ3BGLGlGQUE0RTtBQUM1RSxnRUFBMkQ7QUFHM0Q7SUFBb0QsMENBQUs7SUFBekQ7UUFBQSxxRUFpSkM7UUFoSkMsMEJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGlCQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZ0JBQVUsR0FBRyxDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQXVJcEIsQ0FBQztJQXJJQyx1Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNGLElBQUks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QztxQkFDdEI7aUJBQ0Y7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBcklNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFYbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQWlKMUM7SUFBRCw2QkFBQztDQWpKRCxBQWlKQyxDQWpKbUQsZUFBSyxHQWlKeEQ7a0JBakpvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZUJvYXJkMTVEYXlzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUJvYXJkMTVEYXlzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIGluc3RhbGxEYXlzVGhyZXNob2xkID0gMTU7XG4gIGJ1bmRsZU5hbWUgPSBcInJfY2IxNWRheXNcIjtcbiAgdHJhaXRGb2xkZXIgPSBcInRyYWl0OTk5XCI7XG4gIGNvbmZpZ1BhdGggPSBudWxsO1xuICBvZmZzZXRQYXRoID0gbnVsbDtcbiAgbGV2ZWxEYXRhUGF0aCA9IG51bGw7XG4gIGpzb25QYXRoID0gbnVsbDtcbiAgX2dhbWVUeXBlcyA9IFtNakdhbWVUeXBlLk5vcm1hbF07XG4gIF9pc0FibGUgPSBmYWxzZTtcbiAgX2lzQ2hhbmdlID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlQm9hcmQxNURheXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFsbERheXNUaHJlc2hvbGQgPSBudWxsICE9PSAoZSA9IHRoaXMuX3RyYWl0RGF0YS5pbnN0YWxsRGF5cykgJiYgdm9pZCAwICE9PSBlID8gZSA6IDE1O1xuICAgIHRoaXMuY29uZmlnUGF0aCA9IFtcImJ5dGVEYXRhL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL2xldmVsX2ZpbGVfY29uZmlnXCIsIHRoaXMuYnVuZGxlTmFtZV07XG4gICAgdGhpcy5vZmZzZXRQYXRoID0gW1wiYnl0ZURhdGEvXCIgKyB0aGlzLnRyYWl0Rm9sZGVyICsgXCIvbGV2ZWxfZGF0YV9vZmZzZXRzXCIsIHRoaXMuYnVuZGxlTmFtZV07XG4gICAgdGhpcy5sZXZlbERhdGFQYXRoID0gW1wiYnl0ZURhdGEvXCIgKyB0aGlzLnRyYWl0Rm9sZGVyICsgXCIvbGV2ZWxfZGF0YVwiLCB0aGlzLmJ1bmRsZU5hbWVdO1xuICAgIHRoaXMuanNvblBhdGggPSBbXCJjb25maWcvYm9hcmRzL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL1wiLCB0aGlzLmJ1bmRsZU5hbWVdO1xuICAgIHRoaXMuX2dhbWVUeXBlcyA9IG51bGwgIT09IChyID0gdGhpcy5fdHJhaXREYXRhLmdhbWVUeXBlKSAmJiB2b2lkIDAgIT09IHIgPyByIDogW01qR2FtZVR5cGUuTm9ybWFsXTtcbiAgICB0aGlzLnRyeVByZWxvYWRCdW5kbGUoKTtcbiAgfVxuICB0cnlQcmVsb2FkQnVuZGxlKCkge1xuICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuYWRkVGFzayh0aGlzLmJ1bmRsZU5hbWUpO1xuICB9XG4gIGNoZWNrRnVuY3Rpb25FbmFibGVkKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByID0gbnVsbCA9PT0gKHQgPSBlLmdldEluc3RhbGxUaW1lKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwoZSk7XG4gICAgcmV0dXJuICEoIXIgfHwgciA8PSAwKSAmJiBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gcikgLyA4NjQwMDAwMCkgPj0gdGhpcy5pbnN0YWxsRGF5c1RocmVzaG9sZDtcbiAgfVxuICBpc0J1bmRsZUxvYWRlZCgpIHtcbiAgICByZXR1cm4gTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5pc0J1bmRsZVByZUxvYWRlZCh0aGlzLmJ1bmRsZU5hbWUpO1xuICB9XG4gIGNoZWNrQ29uZGl0aW9uKHQpIHtcbiAgICBpZiAoIXRoaXMuaXNCdW5kbGVMb2FkZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHQgfHwgKHQgPSBFeHRyYWN0VG9vbC5nZXRDdXJyZW50R2FtZVR5cGUoKSk7XG4gICAgcmV0dXJuICEhdGhpcy5fZ2FtZVR5cGVzLmluY2x1ZGVzKHQpICYmIHRoaXMuY2hlY2tGdW5jdGlvbkVuYWJsZWQoKTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRDb25maWdQYXRoKHQsIGUpIHtcbiAgICB2YXIgciA9IEV4dHJhY3RUb29sLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIHRoaXMuX2lzQWJsZSA9IHRoaXMuY2hlY2tDb25kaXRpb24ocik7XG4gICAgaWYgKHRoaXMuX2lzQWJsZSkge1xuICAgICAgdGhpcy5faXNDaGFuZ2UgPSB0cnVlO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmNvbmZpZ1BhdGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgICB0aGlzLl9pc0NoYW5nZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRPZmZzZXRQYXRoKHQsIGUpIHtcbiAgICB2YXIgciA9IEV4dHJhY3RUb29sLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGlmICh0aGlzLmNoZWNrQ29uZGl0aW9uKHIpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMub2Zmc2V0UGF0aFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0TGV2RGF0YVBhdGgodCwgZSkge1xuICAgIHZhciByID0gRXh0cmFjdFRvb2wuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKHRoaXMuY2hlY2tDb25kaXRpb24ocikpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5sZXZlbERhdGFQYXRoXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRKc29uUGF0aCh0LCBlKSB7XG4gICAgdmFyIHIgPSBFeHRyYWN0VG9vbC5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICBpZiAodGhpcy5jaGVja0NvbmRpdGlvbihyKSAmJiB0aGlzLl9pc0NoYW5nZSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmpzb25QYXRoXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbklwdEVudGVyQW5pRmluX2V4Y3V0ZSh0LCBlKSB7XG4gICAgdmFyIHIsIGE7XG4gICAgZSgpO1xuICAgIGlmICh0aGlzLl9pc0FibGUpIHtcbiAgICAgIHZhciBuID0gdC5pbnMsXG4gICAgICAgIG8gPSBudWxsID09PSAoYSA9IG51bGwgPT09IChyID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5nYW1lQ29udGV4dCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRUaWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmNhbGwocik7XG4gICAgICBvICYmIHRoaXMuY291bnRDYXJkc0J5Q2FyZElkKG8pO1xuICAgIH1cbiAgfVxuICBjb3VudENhcmRzQnlDYXJkSWQodCkge1xuICAgIHZhciBlLFxuICAgICAgcixcbiAgICAgIGEsXG4gICAgICBuLFxuICAgICAgbyxcbiAgICAgIGwgPSBuZXcgTWFwKCksXG4gICAgICBzID0gKG51bGwgPT09IChvID0gdC5tYXBMYXllcnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY2FsbCh0KSkgfHwgW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhzKSwgYyA9IHUubmV4dCgpOyAhYy5kb25lOyBjID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBjLnZhbHVlLmFsbENhcmRzIHx8IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGYgPSAoYSA9IHZvaWQgMCwgX192YWx1ZXMoZCkpLCBoID0gZi5uZXh0KCk7ICFoLmRvbmU7IGggPSBmLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHAgPSBoLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHAgJiYgcC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHZhciB5ID0gcC5jYXJkSWQ7XG4gICAgICAgICAgICAgIGwuc2V0KHksIChsLmdldCh5KSB8fCAwKSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIGEgPSB7XG4gICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGggJiYgIWguZG9uZSAmJiAobiA9IGYucmV0dXJuKSAmJiBuLmNhbGwoZik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKHIgPSB1LnJldHVybikgJiYgci5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsO1xuICB9XG59Il19
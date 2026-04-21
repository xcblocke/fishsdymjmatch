
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_unifyLibFormat/Scripts/UnifyAbilityLibTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2dbe3sle09PWaO6E/QTAzfM', 'UnifyAbilityLibTrait');
// subpackages/l_unifyLibFormat/Scripts/UnifyAbilityLibTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UnifyBaseTrait_1 = require("./UnifyBaseTrait");
var UnifyUtils_1 = require("./UnifyUtils");
var UnifyAbilityLibTrait = /** @class */ (function (_super) {
    __extends(UnifyAbilityLibTrait, _super);
    function UnifyAbilityLibTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnifyAbilityLibTrait.prototype.getPath = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/ability001", "l_unifyLibFormat", -1], ["config/ability001", "r_unifyLibFormat", 100]];
    };
    UnifyAbilityLibTrait.prototype.onExtNormLv_initData = function (t, e) {
        if (this.checkGameMode()) {
            var r = this.initData(t.ins);
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    UnifyAbilityLibTrait.prototype.initData = function (t) {
        var e = this, r = this.getPath();
        r.length;
        return new Promise(function (n) {
            UnifyUtils_1.default.loadLibraries(r.map(function (t) {
                return {
                    path: t[0],
                    bundle: t[1],
                    timeout: t[2]
                };
            })).then(function (r) {
                var i = r.allData, a = r.failCount;
                if (i) {
                    var o = t.getCacheKey();
                    t.setAllNamesData(o, i.dimensions);
                    var l = UnifyUtils_1.default.parseLevelData(i);
                    e.setLevelCaches(o, l);
                    t.setOriginConfigData(o, i.config);
                    var c = t.processConfigData(i.config);
                    t.setConfigData(o, c);
                }
                n(0 === a);
            }).catch(function () {
                n(false);
            });
        });
    };
    UnifyAbilityLibTrait.prototype.onExtNormLv_getAllIdxInTbl = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0], n = this.getAllIndexesInTable(t.ins, r);
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    UnifyAbilityLibTrait.prototype.getAllIndexesInTable = function (t, e) {
        if (!t.getAllNamesData().includes(e))
            return [];
        var r = this.getLevelCaches(t.getCacheKey());
        return null === r ? [] : r.filter(function (t) {
            return t.dimension === e;
        }).map(function (t) {
            return t.index;
        });
    };
    UnifyAbilityLibTrait.prototype.onExtNormLv_getContent = function (t, e) {
        if (this.checkGameMode()) {
            var r = this.getContent(t.ins, t.args[0]);
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    UnifyAbilityLibTrait.prototype.getContent = function (t, e) {
        try {
            var r = t.extractDimension(e), n = ExtractNormalLevels_1.ExtractDimension.getData(), i = this.getContentByDifficulty(t, r, n.diffcult);
            if (!i)
                return Promise.resolve([t.getDouDiData(), 55, "兜底索引", "兜底表名", "07"]);
            this.cacheCurLvData(e.gameType, e.levelID, i);
            return Promise.resolve([i.content, i.difficulty, i.index.toString(), r, r.split("_")[0]]);
        }
        catch (e) {
            console.error("[UnifyAbilityLib] 能力值抽题异常: " + (null == e ? void 0 : e.message));
            return Promise.resolve([t.getDouDiData(), 55, "兜底索引", "兜底表名", "07"]);
        }
    };
    UnifyAbilityLibTrait.prototype.getContentByDifficulty = function (t, e, r) {
        var n, i, o = ExtractNormalLevels_1.ExtractDimension.getData(), c = t.getAllNamesData(), u = o.historyIndex || [], f = this.getLevelCaches(t.getCacheKey());
        if (null === f)
            return null;
        if (!c.includes(e))
            return null;
        var p = Number.MAX_VALUE, y = null;
        try {
            for (var h = __values(f), d = h.next(); !d.done; d = h.next()) {
                var v = d.value;
                if (v.dimension === e && Math.abs(v.difficulty - r) < p && !u.includes(v.index)) {
                    p = Math.abs(v.difficulty - r);
                    y = Object.assign({}, v);
                }
            }
        }
        catch (t) {
            n = {
                error: t
            };
        }
        finally {
            try {
                d && !d.done && (i = h.return) && i.call(h);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        if (!y)
            return null;
        u.push(y.index);
        u.length > 100 && u.splice(0, 1);
        o.historyIndex = u;
        ExtractNormalLevels_1.ExtractDimension.saveData(o);
        return y;
    };
    UnifyAbilityLibTrait.prototype.onExtNormLv_getContByTblIdx = function (t, e) {
        if (this.checkGameMode()) {
            var r = __read(t.args, 2), n = r[0], i = r[1], a = this.getContentByTableAndIndex(t.ins, n, i);
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            e();
    };
    UnifyAbilityLibTrait.prototype.getContentByTableAndIndex = function (t, e, r) {
        var n = this.getLevelCaches(t.getCacheKey());
        if (null === n)
            return Promise.resolve(null);
        var i = n.find(function (t) {
            return t.dimension === e && t.index === r;
        });
        if (!i)
            return Promise.resolve(null);
        var a = e.split("_")[0] || "random", o = ExtractTool_1.default.getCurrentGameType(), l = UserModel_1.default.getInstance().getGameDataByGameType(o).getLevelId();
        this.cacheCurLvData(o, l, i);
        return Promise.resolve([i.content, i.difficulty, i.index.toString(), e, a]);
    };
    UnifyAbilityLibTrait.traitKey = "UnifyAbilityLib";
    UnifyAbilityLibTrait = __decorate([
        mj.trait,
        mj.class("UnifyAbilityLibTrait")
    ], UnifyAbilityLibTrait);
    return UnifyAbilityLibTrait;
}(UnifyBaseTrait_1.default));
exports.default = UnifyAbilityLibTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VuaWZ5TGliRm9ybWF0L1NjcmlwdHMvVW5pZnlBYmlsaXR5TGliVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlHQUE2RjtBQUM3RixpRkFBNEU7QUFDNUUsc0VBQWlFO0FBQ2pFLG1EQUE4QztBQUM5QywyQ0FBc0M7QUFHdEM7SUFBa0Qsd0NBQWM7SUFBaEU7O0lBdUpBLENBQUM7SUFySkMsc0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOU0sQ0FBQztJQUNELG1EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixD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Q0FBQyxDQUFDLElBQUksUUFBUSxFQUNqQyxDQUFDLEdBQUcscUJBQVcsQ0FBQyxrQkFBa0IsRUFBRSxFQUNwQyxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQXJKTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0F1SnhDO0lBQUQsMkJBQUM7Q0F2SkQsQUF1SkMsQ0F2SmlELHdCQUFjLEdBdUovRDtrQkF2Sm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dHJhY3REaW1lbnNpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3ROb3JtYWxMZXZlbHMnO1xuaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBVbmlmeUJhc2VUcmFpdCBmcm9tICcuL1VuaWZ5QmFzZVRyYWl0JztcbmltcG9ydCBVbmlmeVV0aWxzIGZyb20gJy4vVW5pZnlVdGlscyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlVuaWZ5QWJpbGl0eUxpYlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmeUFiaWxpdHlMaWJUcmFpdCBleHRlbmRzIFVuaWZ5QmFzZVRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJVbmlmeUFiaWxpdHlMaWJcIjtcbiAgZ2V0UGF0aCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnBhdGgpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBbW1wiY29uZmlnL2FiaWxpdHkwMDFcIiwgXCJsX3VuaWZ5TGliRm9ybWF0XCIsIC0xXSwgW1wiY29uZmlnL2FiaWxpdHkwMDFcIiwgXCJyX3VuaWZ5TGliRm9ybWF0XCIsIDEwMF1dO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2luaXREYXRhKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gdGhpcy5pbml0RGF0YSh0Lmlucyk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgaW5pdERhdGEodCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHIgPSB0aGlzLmdldFBhdGgoKTtcbiAgICByLmxlbmd0aDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4pIHtcbiAgICAgIFVuaWZ5VXRpbHMubG9hZExpYnJhcmllcyhyLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IHRbMF0sXG4gICAgICAgICAgYnVuZGxlOiB0WzFdLFxuICAgICAgICAgIHRpbWVvdXQ6IHRbMl1cbiAgICAgICAgfTtcbiAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHZhciBpID0gci5hbGxEYXRhLFxuICAgICAgICAgIGEgPSByLmZhaWxDb3VudDtcbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB2YXIgbyA9IHQuZ2V0Q2FjaGVLZXkoKTtcbiAgICAgICAgICB0LnNldEFsbE5hbWVzRGF0YShvLCBpLmRpbWVuc2lvbnMpO1xuICAgICAgICAgIHZhciBsID0gVW5pZnlVdGlscy5wYXJzZUxldmVsRGF0YShpKTtcbiAgICAgICAgICBlLnNldExldmVsQ2FjaGVzKG8sIGwpO1xuICAgICAgICAgIHQuc2V0T3JpZ2luQ29uZmlnRGF0YShvLCBpLmNvbmZpZyk7XG4gICAgICAgICAgdmFyIGMgPSB0LnByb2Nlc3NDb25maWdEYXRhKGkuY29uZmlnKTtcbiAgICAgICAgICB0LnNldENvbmZpZ0RhdGEobywgYyk7XG4gICAgICAgIH1cbiAgICAgICAgbigwID09PSBhKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbihmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRBbGxJZHhJblRibCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IHQuYXJnc1swXSxcbiAgICAgICAgbiA9IHRoaXMuZ2V0QWxsSW5kZXhlc0luVGFibGUodC5pbnMsIHIpO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGdldEFsbEluZGV4ZXNJblRhYmxlKHQsIGUpIHtcbiAgICBpZiAoIXQuZ2V0QWxsTmFtZXNEYXRhKCkuaW5jbHVkZXMoZSkpIHJldHVybiBbXTtcbiAgICB2YXIgciA9IHRoaXMuZ2V0TGV2ZWxDYWNoZXModC5nZXRDYWNoZUtleSgpKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gciA/IFtdIDogci5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmRpbWVuc2lvbiA9PT0gZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmluZGV4O1xuICAgIH0pO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldENvbnRlbnQodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0aGlzLmdldENvbnRlbnQodC5pbnMsIHQuYXJnc1swXSk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgZ2V0Q29udGVudCh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByID0gdC5leHRyYWN0RGltZW5zaW9uKGUpLFxuICAgICAgICBuID0gRXh0cmFjdERpbWVuc2lvbi5nZXREYXRhKCksXG4gICAgICAgIGkgPSB0aGlzLmdldENvbnRlbnRCeURpZmZpY3VsdHkodCwgciwgbi5kaWZmY3VsdCk7XG4gICAgICBpZiAoIWkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3QuZ2V0RG91RGlEYXRhKCksIDU1LCBcIuWFnOW6lee0ouW8lVwiLCBcIuWFnOW6leihqOWQjVwiLCBcIjA3XCJdKTtcbiAgICAgIHRoaXMuY2FjaGVDdXJMdkRhdGEoZS5nYW1lVHlwZSwgZS5sZXZlbElELCBpKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW2kuY29udGVudCwgaS5kaWZmaWN1bHR5LCBpLmluZGV4LnRvU3RyaW5nKCksIHIsIHIuc3BsaXQoXCJfXCIpWzBdXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltVbmlmeUFiaWxpdHlMaWJdIOiDveWKm+WAvOaKvemimOW8guW4uDogXCIgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5tZXNzYWdlKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt0LmdldERvdURpRGF0YSgpLCA1NSwgXCLlhZzlupXntKLlvJVcIiwgXCLlhZzlupXooajlkI1cIiwgXCIwN1wiXSk7XG4gICAgfVxuICB9XG4gIGdldENvbnRlbnRCeURpZmZpY3VsdHkodCwgZSwgcikge1xuICAgIHZhciBuLFxuICAgICAgaSxcbiAgICAgIG8gPSBFeHRyYWN0RGltZW5zaW9uLmdldERhdGEoKSxcbiAgICAgIGMgPSB0LmdldEFsbE5hbWVzRGF0YSgpLFxuICAgICAgdSA9IG8uaGlzdG9yeUluZGV4IHx8IFtdLFxuICAgICAgZiA9IHRoaXMuZ2V0TGV2ZWxDYWNoZXModC5nZXRDYWNoZUtleSgpKTtcbiAgICBpZiAobnVsbCA9PT0gZikgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFjLmluY2x1ZGVzKGUpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcCA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICB5ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKGYpLCBkID0gaC5uZXh0KCk7ICFkLmRvbmU7IGQgPSBoLm5leHQoKSkge1xuICAgICAgICB2YXIgdiA9IGQudmFsdWU7XG4gICAgICAgIGlmICh2LmRpbWVuc2lvbiA9PT0gZSAmJiBNYXRoLmFicyh2LmRpZmZpY3VsdHkgLSByKSA8IHAgJiYgIXUuaW5jbHVkZXModi5pbmRleCkpIHtcbiAgICAgICAgICBwID0gTWF0aC5hYnModi5kaWZmaWN1bHR5IC0gcik7XG4gICAgICAgICAgeSA9IE9iamVjdC5hc3NpZ24oe30sIHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGQgJiYgIWQuZG9uZSAmJiAoaSA9IGgucmV0dXJuKSAmJiBpLmNhbGwoaCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF5KSByZXR1cm4gbnVsbDtcbiAgICB1LnB1c2goeS5pbmRleCk7XG4gICAgdS5sZW5ndGggPiAxMDAgJiYgdS5zcGxpY2UoMCwgMSk7XG4gICAgby5oaXN0b3J5SW5kZXggPSB1O1xuICAgIEV4dHJhY3REaW1lbnNpb24uc2F2ZURhdGEobyk7XG4gICAgcmV0dXJuIHk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0Q29udEJ5VGJsSWR4KHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gX19yZWFkKHQuYXJncywgMiksXG4gICAgICAgIG4gPSByWzBdLFxuICAgICAgICBpID0gclsxXSxcbiAgICAgICAgYSA9IHRoaXMuZ2V0Q29udGVudEJ5VGFibGVBbmRJbmRleCh0LmlucywgbiwgaSk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGFcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgZ2V0Q29udGVudEJ5VGFibGVBbmRJbmRleCh0LCBlLCByKSB7XG4gICAgdmFyIG4gPSB0aGlzLmdldExldmVsQ2FjaGVzKHQuZ2V0Q2FjaGVLZXkoKSk7XG4gICAgaWYgKG51bGwgPT09IG4pIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgdmFyIGkgPSBuLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmRpbWVuc2lvbiA9PT0gZSAmJiB0LmluZGV4ID09PSByO1xuICAgIH0pO1xuICAgIGlmICghaSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB2YXIgYSA9IGUuc3BsaXQoXCJfXCIpWzBdIHx8IFwicmFuZG9tXCIsXG4gICAgICBvID0gRXh0cmFjdFRvb2wuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBsID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKG8pLmdldExldmVsSWQoKTtcbiAgICB0aGlzLmNhY2hlQ3VyTHZEYXRhKG8sIGwsIGkpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW2kuY29udGVudCwgaS5kaWZmaWN1bHR5LCBpLmluZGV4LnRvU3RyaW5nKCksIGUsIGFdKTtcbiAgfVxufSJdfQ==
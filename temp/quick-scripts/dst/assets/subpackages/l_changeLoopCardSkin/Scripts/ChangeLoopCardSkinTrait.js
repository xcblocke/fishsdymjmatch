
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeLoopCardSkin/Scripts/ChangeLoopCardSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6d6fMzhZhGnYaVzI/XiEks', 'ChangeLoopCardSkinTrait');
// subpackages/l_changeLoopCardSkin/Scripts/ChangeLoopCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var u = /^([btWAC][1-9]|Z_(dong|nan|xi|bei|bai|fa|zhong)|H_(mei|lan|zhu|ju)|J_(chun|xia|qiu|dong))$/;
var c = [45, 95, 145, 195];
var p = ["l_lanCardEN2", "l_lanCardFLOWER1", "l_lanCardEN", "l_lanCardBLOCKMJ"];
var ChangeLoopCardSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeLoopCardSkinTrait, _super);
    function ChangeLoopCardSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cfg = {};
        return _this;
    }
    ChangeLoopCardSkinTrait_1 = ChangeLoopCardSkinTrait;
    ChangeLoopCardSkinTrait.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        this._cfg = this._traitData || {};
        Promise.resolve().then(function () {
            e.registerEvent([{
                    event: "CardUtil_skinBundle"
                }]);
        });
    };
    ChangeLoopCardSkinTrait.prototype.onCardUtil_skinBundle = function (t, e) {
        var r, n = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (n && u.test(n)) {
            var a = this._getLevelId(), i = this._bundleForMainLevel(a) || "mainRes";
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: i
            });
        }
        else
            e();
    };
    ChangeLoopCardSkinTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        var n;
        try {
            var a = this._getLevelId(), i = null !== (n = this._cfg.levelCaps) && void 0 !== n ? n : c, o = (this._levelInCycle(a, i), this._bundleForMainLevel(a));
            o && t.ins && "function" == typeof t.ins.addPreloadRes && t.ins.addPreloadRes("SpriteAtlas", o + ":atlas/cardIcon");
        }
        catch (t) {
            console.error("[" + ChangeLoopCardSkinTrait_1.traitKey + "] initRes " + (null == t ? void 0 : t.message));
        }
        e();
    };
    ChangeLoopCardSkinTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var n;
        try {
            var a = null === (n = t.args) || void 0 === n ? void 0 : n[0];
            if (!a || !u.test(a)) {
                e();
                return;
            }
            var i = this._getLevelId(), o = this._bundleForMainLevel(i);
            if (!o) {
                e();
                return;
            }
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    path: "atlas/cardIcon/" + a,
                    bundleName: o,
                    fromAtlas: true
                }
            });
        }
        catch (t) {
            console.error("[" + ChangeLoopCardSkinTrait_1.traitKey + "] atlasPathBundle " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ChangeLoopCardSkinTrait.prototype._bundleForMainLevel = function (t) {
        var e, r, n = null !== (e = this._cfg.skinBundles) && void 0 !== e ? e : p;
        if (!n.length)
            return null;
        for (var a = null !== (r = this._cfg.levelCaps) && void 0 !== r ? r : c, i = this._levelInCycle(t, a), o = n.length - 1, l = Math.min(a.length, o), s = 0; s < a.length; s++)
            if (i <= a[s]) {
                l = Math.min(s, o);
                break;
            }
        return n[l];
    };
    ChangeLoopCardSkinTrait.prototype._levelInCycle = function (t, e) {
        var r = e.length > 0 ? e[e.length - 1] : 195;
        return r <= 0 ? Math.max(1, t) : (((t <= 0 ? 1 : t) - 1) % r + r) % r + 1;
    };
    ChangeLoopCardSkinTrait.prototype._getLevelId = function () {
        var t = UserModel_1.default.getInstance().getMainGameData(), e = 1;
        t && (e = t.getLevelId());
        return e;
    };
    var ChangeLoopCardSkinTrait_1;
    ChangeLoopCardSkinTrait.traitKey = "ChangeLoopCardSkin";
    ChangeLoopCardSkinTrait = ChangeLoopCardSkinTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeLoopCardSkinTrait")
    ], ChangeLoopCardSkinTrait);
    return ChangeLoopCardSkinTrait;
}(Trait_1.default));
exports.default = ChangeLoopCardSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZUxvb3BDYXJkU2tpbi9TY3JpcHRzL0NoYW5nZUxvb3BDYXJkU2tpblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSxJQUFJLENBQUMsR0FBRyw0RkFBNEYsQ0FBQztBQUNyRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBR2hGO0lBQXFELDJDQUFLO0lBQTFEO1FBQUEscUVBdUZDO1FBdEZDLFVBQUksR0FBRyxFQUFFLENBQUM7O0lBc0ZaLENBQUM7Z0NBdkZvQix1QkFBdUI7SUFHMUMsd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDZixLQUFLLEVBQUUscUJBQXFCO2lCQUM3QixDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtB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UDtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUNELCtDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBcEZNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFGcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQXVGM0M7SUFBRCw4QkFBQztDQXZGRCxBQXVGQyxDQXZGb0QsZUFBSyxHQXVGekQ7a0JBdkZvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbnZhciB1ID0gL14oW2J0V0FDXVsxLTldfFpfKGRvbmd8bmFufHhpfGJlaXxiYWl8ZmF8emhvbmcpfEhfKG1laXxsYW58emh1fGp1KXxKXyhjaHVufHhpYXxxaXV8ZG9uZykpJC87XG52YXIgYyA9IFs0NSwgOTUsIDE0NSwgMTk1XTtcbnZhciBwID0gW1wibF9sYW5DYXJkRU4yXCIsIFwibF9sYW5DYXJkRkxPV0VSMVwiLCBcImxfbGFuQ2FyZEVOXCIsIFwibF9sYW5DYXJkQkxPQ0tNSlwiXTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlTG9vcENhcmRTa2luVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUxvb3BDYXJkU2tpblRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY2ZnID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlTG9vcENhcmRTa2luXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY2ZnID0gdGhpcy5fdHJhaXREYXRhIHx8IHt9O1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgZS5yZWdpc3RlckV2ZW50KFt7XG4gICAgICAgIGV2ZW50OiBcIkNhcmRVdGlsX3NraW5CdW5kbGVcIlxuICAgICAgfV0pO1xuICAgIH0pO1xuICB9XG4gIG9uQ2FyZFV0aWxfc2tpbkJ1bmRsZSh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBuID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF07XG4gICAgaWYgKG4gJiYgdS50ZXN0KG4pKSB7XG4gICAgICB2YXIgYSA9IHRoaXMuX2dldExldmVsSWQoKSxcbiAgICAgICAgaSA9IHRoaXMuX2J1bmRsZUZvck1haW5MZXZlbChhKSB8fCBcIm1haW5SZXNcIjtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IGlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyh0LCBlKSB7XG4gICAgdmFyIG47XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdGhpcy5fZ2V0TGV2ZWxJZCgpLFxuICAgICAgICBpID0gbnVsbCAhPT0gKG4gPSB0aGlzLl9jZmcubGV2ZWxDYXBzKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogYyxcbiAgICAgICAgbyA9ICh0aGlzLl9sZXZlbEluQ3ljbGUoYSwgaSksIHRoaXMuX2J1bmRsZUZvck1haW5MZXZlbChhKSk7XG4gICAgICBvICYmIHQuaW5zICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5pbnMuYWRkUHJlbG9hZFJlcyAmJiB0Lmlucy5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlQXRsYXNcIiwgbyArIFwiOmF0bGFzL2NhcmRJY29uXCIpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDaGFuZ2VMb29wQ2FyZFNraW5UcmFpdC50cmFpdEtleSArIFwiXSBpbml0UmVzIFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgZSkge1xuICAgIHZhciBuO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChuID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuWzBdO1xuICAgICAgaWYgKCFhIHx8ICF1LnRlc3QoYSkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IHRoaXMuX2dldExldmVsSWQoKSxcbiAgICAgICAgbyA9IHRoaXMuX2J1bmRsZUZvck1haW5MZXZlbChpKTtcbiAgICAgIGlmICghbykge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgIHBhdGg6IFwiYXRsYXMvY2FyZEljb24vXCIgKyBhLFxuICAgICAgICAgIGJ1bmRsZU5hbWU6IG8sXG4gICAgICAgICAgZnJvbUF0bGFzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDaGFuZ2VMb29wQ2FyZFNraW5UcmFpdC50cmFpdEtleSArIFwiXSBhdGxhc1BhdGhCdW5kbGUgXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIF9idW5kbGVGb3JNYWluTGV2ZWwodCkge1xuICAgIHZhciBlLFxuICAgICAgcixcbiAgICAgIG4gPSBudWxsICE9PSAoZSA9IHRoaXMuX2NmZy5za2luQnVuZGxlcykgJiYgdm9pZCAwICE9PSBlID8gZSA6IHA7XG4gICAgaWYgKCFuLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgZm9yICh2YXIgYSA9IG51bGwgIT09IChyID0gdGhpcy5fY2ZnLmxldmVsQ2FwcykgJiYgdm9pZCAwICE9PSByID8gciA6IGMsIGkgPSB0aGlzLl9sZXZlbEluQ3ljbGUodCwgYSksIG8gPSBuLmxlbmd0aCAtIDEsIGwgPSBNYXRoLm1pbihhLmxlbmd0aCwgbyksIHMgPSAwOyBzIDwgYS5sZW5ndGg7IHMrKykgaWYgKGkgPD0gYVtzXSkge1xuICAgICAgbCA9IE1hdGgubWluKHMsIG8pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuW2xdO1xuICB9XG4gIF9sZXZlbEluQ3ljbGUodCwgZSkge1xuICAgIHZhciByID0gZS5sZW5ndGggPiAwID8gZVtlLmxlbmd0aCAtIDFdIDogMTk1O1xuICAgIHJldHVybiByIDw9IDAgPyBNYXRoLm1heCgxLCB0KSA6ICgoKHQgPD0gMCA/IDEgOiB0KSAtIDEpICUgciArIHIpICUgciArIDE7XG4gIH1cbiAgX2dldExldmVsSWQoKSB7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKSxcbiAgICAgIGUgPSAxO1xuICAgIHQgJiYgKGUgPSB0LmdldExldmVsSWQoKSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn0iXX0=
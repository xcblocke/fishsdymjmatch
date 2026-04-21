
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardReplaceNonUS/Scripts/CardReplaceNonUS2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43192uWPd9HL7pRV2fQsqrn', 'CardReplaceNonUS2Trait');
// subpackages/l_cardReplaceNonUS/Scripts/CardReplaceNonUS2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardReplaceNonUS2Trait = /** @class */ (function (_super) {
    __extends(CardReplaceNonUS2Trait, _super);
    function CardReplaceNonUS2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardReplaceNonUS2Trait_1 = CardReplaceNonUS2Trait;
    CardReplaceNonUS2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardReplaceNonUS2Trait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardReplaceNonUS2Trait.prototype._getFlowerSeriesID = function () {
        var t, e, r;
        try {
            var a = null === (t = mj.getClassByName("FlowerCardSeriesTrait")) || void 0 === t ? void 0 : t.getInstance();
            return a && a.eventEnabled && null !== (r = null === (e = a.getCurrentModeSeriesId) || void 0 === e ? void 0 : e.call(a)) && void 0 !== r ? r : -1;
        }
        catch (t) {
            return -1;
        }
    };
    CardReplaceNonUS2Trait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardReplaceNonUS2Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var n = this._getTaskCardResName(), o = CardReplaceNonUS2Trait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        n && (o = o.filter(function (t) {
            return t !== n;
        }));
        if (o.length < 18)
            return e;
        for (var l = o.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            e[a[l]] = o[l];
        return e;
    };
    CardReplaceNonUS2Trait.prototype._getOrCreateMapping = function (t) {
        if (!this.localData[t]) {
            this.localData[t] = {
                mapping: {}
            };
            this.localData[t] = this.localData[t];
        }
        var e = this.localData[t], r = this._generateRandomMapping();
        if (0 === Object.keys(r).length)
            return {};
        e.mapping = r;
        this.localData[t] = this.localData[t];
        return r;
    };
    CardReplaceNonUS2Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardReplaceNonUS2Trait.prototype._getTargetResConfig = function (t, e) {
        return {
            bundleName: CardUtil_1.default.getCardBundleName(),
            path: e
        };
    };
    CardReplaceNonUS2Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                e();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Travel && a !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardReplaceNonUS2Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardReplaceNonUS2Trait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Travel && n !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                e();
                return;
            }
            if (this._getFlowerSeriesID() <= 0) {
                e();
                return;
            }
            var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === o) {
                e();
                return;
            }
            if (/^[tb][1-9]$/.test(o)) {
                var i = this.localData[n];
                if (!i || 0 === Object.keys(i.mapping).length) {
                    e();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = i.mapping);
                var s = i.mapping[o] || o, p = "atlas/cardIcon/" + s, f = this._getTargetResConfig(s, p);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: f.path,
                        bundleName: f.bundleName,
                        fromAtlas: true
                    }
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + CardReplaceNonUS2Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardReplaceNonUS2Trait_1;
    CardReplaceNonUS2Trait.traitKey = "CardReplaceNonUS2";
    CardReplaceNonUS2Trait.BUNDLE_NAME = "l_cardReplaceNonUS";
    CardReplaceNonUS2Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"];
    __decorate([
        mj.traitEvent("CardRepNonUs2_tarResCfg")
    ], CardReplaceNonUS2Trait.prototype, "_getTargetResConfig", null);
    CardReplaceNonUS2Trait = CardReplaceNonUS2Trait_1 = __decorate([
        mj.trait,
        mj.class("CardReplaceNonUS2Trait")
    ], CardReplaceNonUS2Trait);
    return CardReplaceNonUS2Trait;
}(Trait_1.default));
exports.default = CardReplaceNonUS2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRSZXBsYWNlTm9uVVMvU2NyaXB0cy9DYXJkUmVwbGFjZU5vblVTMlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsb0VBQStEO0FBRy9EO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBcUlDO1FBcElDLHFCQUFlLEdBQUcsRUFBRSxDQUFDOztJQW9JdkIsQ0FBQzsrQkFySW9CLHNCQUFzQjtJQUt6Qyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9HLENBQUM7SUFDRCxtREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxF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QUMsQ0FBQztZQUN2RyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUFsSU0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUMvQixrQ0FBVyxHQUFHLG9CQUFvQixDQUFDO0lBQ25DLGdDQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBMER6UTtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7cUVBTXhDO0lBbkVrQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBcUkxQztJQUFELDZCQUFDO0NBcklELEFBcUlDLENBckltRCxlQUFLLEdBcUl4RDtrQkFySW9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2FyZFJlcGxhY2VOb25VUzJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFJlcGxhY2VOb25VUzJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJlbnRNYXBwaW5nID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FyZFJlcGxhY2VOb25VUzJcIjtcbiAgc3RhdGljIEJVTkRMRV9OQU1FID0gXCJsX2NhcmRSZXBsYWNlTm9uVVNcIjtcbiAgc3RhdGljIEFMTF9DQVJEUyA9IFtcImIxXCIsIFwiYjJcIiwgXCJiM1wiLCBcImI0XCIsIFwiYjVcIiwgXCJiNlwiLCBcImI3XCIsIFwiYjhcIiwgXCJiOVwiLCBcInQxXCIsIFwidDJcIiwgXCJ0M1wiLCBcInQ0XCIsIFwidDVcIiwgXCJ0NlwiLCBcInQ3XCIsIFwidDhcIiwgXCJ0OVwiLCBcIlpfZG9uZ1wiLCBcIlpfbmFuXCIsIFwiWl94aVwiLCBcIlpfYmVpXCIsIFwiWl9iYWlcIiwgXCJaX2ZhXCIsIFwiWl96aG9uZ1wiLCBcIkhfbWVpXCIsIFwiSF9sYW5cIiwgXCJIX3podVwiLCBcIkhfanVcIiwgXCJKX2NodW5cIiwgXCJKX3hpYVwiLCBcIkpfcWl1XCIsIFwiSl9kb25nXCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgX2dldFRhc2tDYXJkUmVzTmFtZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGFza0NhcmRSZXNOYW1lKCk7XG4gIH1cbiAgX2dldEZsb3dlclNlcmllc0lEKCkge1xuICAgIHZhciB0LCBlLCByO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09ICh0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJGbG93ZXJDYXJkU2VyaWVzVHJhaXRcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIHJldHVybiBhICYmIGEuZXZlbnRFbmFibGVkICYmIG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSBhLmdldEN1cnJlbnRNb2RlU2VyaWVzSWQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbChhKSkgJiYgdm9pZCAwICE9PSByID8gciA6IC0xO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB7fSxcbiAgICAgIGEgPSBDYXJkUmVwbGFjZU5vblVTMlRyYWl0LkFMTF9DQVJEUy5zbGljZSgwLCAxOCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIGlmICgxOCAhPT0gYS5sZW5ndGgpIHJldHVybiBlO1xuICAgIHZhciBuID0gdGhpcy5fZ2V0VGFza0NhcmRSZXNOYW1lKCksXG4gICAgICBvID0gQ2FyZFJlcGxhY2VOb25VUzJUcmFpdC5BTExfQ0FSRFMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIG4gJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgIT09IG47XG4gICAgfSkpO1xuICAgIGlmIChvLmxlbmd0aCA8IDE4KSByZXR1cm4gZTtcbiAgICBmb3IgKHZhciBsID0gby5sZW5ndGggLSAxOyBsID4gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbb1tzXSwgb1tsXV0sIDIpLCBvW2xdID0gdFswXSwgb1tzXSA9IHRbMV07XG4gICAgfVxuICAgIGZvciAobCA9IDA7IGwgPCAxODsgbCsrKSBlW2FbbF1dID0gb1tsXTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBfZ2V0T3JDcmVhdGVNYXBwaW5nKHQpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhW3RdKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHtcbiAgICAgICAgbWFwcGluZzoge31cbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIH1cbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhW3RdLFxuICAgICAgciA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpO1xuICAgIGlmICgwID09PSBPYmplY3Qua2V5cyhyKS5sZW5ndGgpIHJldHVybiB7fTtcbiAgICBlLm1hcHBpbmcgPSByO1xuICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgX2dldEN1cnJlbnRHYW1lTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgfHwgTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDYXJkUmVwTm9uVXMyX3RhclJlc0NmZ1wiKVxuICBfZ2V0VGFyZ2V0UmVzQ29uZmlnKHQsIGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVuZGxlTmFtZTogQ2FyZFV0aWwuZ2V0Q2FyZEJ1bmRsZU5hbWUoKSxcbiAgICAgIHBhdGg6IGVcbiAgICB9O1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkgPCAzKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIGlmIChhICE9PSBNakdhbWVUeXBlLlRyYXZlbCAmJiBhICE9PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudE1hcHBpbmcgPSB0aGlzLl9nZXRPckNyZWF0ZU1hcHBpbmcoYSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRSZXBsYWNlTm9uVVMyVHJhaXQudHJhaXRLZXkgKyBcIl0g5YWz5Y2h5YiH5o2i5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKHQsIGUpIHtcbiAgICB2YXIgYTtcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIGlmIChuICE9PSBNakdhbWVUeXBlLlRyYXZlbCAmJiBuICE9PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpIDwgMykge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9nZXRGbG93ZXJTZXJpZXNJRCgpIDw9IDApIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbyA9IG51bGwgPT09IChhID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzBdO1xuICAgICAgaWYgKHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpID09PSBvKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKC9eW3RiXVsxLTldJC8udGVzdChvKSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMubG9jYWxEYXRhW25dO1xuICAgICAgICBpZiAoIWkgfHwgMCA9PT0gT2JqZWN0LmtleXMoaS5tYXBwaW5nKS5sZW5ndGgpIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIDAgPT09IE9iamVjdC5rZXlzKHRoaXMuX2N1cnJlbnRNYXBwaW5nKS5sZW5ndGggJiYgKHRoaXMuX2N1cnJlbnRNYXBwaW5nID0gaS5tYXBwaW5nKTtcbiAgICAgICAgdmFyIHMgPSBpLm1hcHBpbmdbb10gfHwgbyxcbiAgICAgICAgICBwID0gXCJhdGxhcy9jYXJkSWNvbi9cIiArIHMsXG4gICAgICAgICAgZiA9IHRoaXMuX2dldFRhcmdldFJlc0NvbmZpZyhzLCBwKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBwYXRoOiBmLnBhdGgsXG4gICAgICAgICAgICBidW5kbGVOYW1lOiBmLmJ1bmRsZU5hbWUsXG4gICAgICAgICAgICBmcm9tQXRsYXM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRSZXBsYWNlTm9uVVMyVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yqr5oyB5Zu+54mH5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=
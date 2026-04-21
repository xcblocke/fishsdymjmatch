
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardReplaceNonUS/Scripts/CardReplaceNonUSTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b2d9jdpS1MworPbpv1IWRh', 'CardReplaceNonUSTrait');
// subpackages/l_cardReplaceNonUS/Scripts/CardReplaceNonUSTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardReplaceNonUSTrait = /** @class */ (function (_super) {
    __extends(CardReplaceNonUSTrait, _super);
    function CardReplaceNonUSTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardReplaceNonUSTrait_1 = CardReplaceNonUSTrait;
    CardReplaceNonUSTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardReplaceNonUSTrait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardReplaceNonUSTrait.prototype._getFlowerSeriesID = function () {
        var t, e, r;
        try {
            var a = null === (t = mj.getClassByName("FlowerCardSeriesTrait")) || void 0 === t ? void 0 : t.getInstance();
            return a && a.eventEnabled && null !== (r = null === (e = a.getCurrentModeSeriesId) || void 0 === e ? void 0 : e.call(a)) && void 0 !== r ? r : -1;
        }
        catch (t) {
            return -1;
        }
    };
    CardReplaceNonUSTrait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardReplaceNonUSTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var n = this._getTaskCardResName(), o = CardReplaceNonUSTrait_1.ALL_CARDS.filter(function (t) {
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
    CardReplaceNonUSTrait.prototype._getOrCreateMapping = function (t) {
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
    CardReplaceNonUSTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardReplaceNonUSTrait.prototype._getTargetResConfig = function (t, e) {
        return {
            bundleName: CardUtil_1.default.getCardBundleName(),
            path: e
        };
    };
    CardReplaceNonUSTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                e();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Normal) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardReplaceNonUSTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardReplaceNonUSTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal) {
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
            console.error("[" + CardReplaceNonUSTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardReplaceNonUSTrait_1;
    CardReplaceNonUSTrait.traitKey = "CardReplaceNonUS";
    CardReplaceNonUSTrait.BUNDLE_NAME = "l_cardReplaceNonUS";
    CardReplaceNonUSTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"];
    __decorate([
        mj.traitEvent("CardRepNonUs_tarResCfg")
    ], CardReplaceNonUSTrait.prototype, "_getTargetResConfig", null);
    CardReplaceNonUSTrait = CardReplaceNonUSTrait_1 = __decorate([
        mj.trait,
        mj.class("CardReplaceNonUSTrait")
    ], CardReplaceNonUSTrait);
    return CardReplaceNonUSTrait;
}(Trait_1.default));
exports.default = CardReplaceNonUSTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRSZXBsYWNlTm9uVVMvU2NyaXB0cy9DYXJkUmVwbGFjZU5vblVTVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFDM0Qsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSxvRUFBK0Q7QUFHL0Q7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUFxSUM7UUFwSUMscUJBQWUsR0FBRyxFQUFFLENBQUM7O0lBb0l2QixDQUFDOzhCQXJJb0IscUJBQXFCO0lBS3hDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0csQ0FBQztJQUNELGtEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVB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QkFBa0IsQ0FBQztJQUM5QixpQ0FBVyxHQUFHLG9CQUFvQixDQUFDO0lBQ25DLCtCQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBMER6UTtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7b0VBTXZDO0lBbkVrQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBcUl6QztJQUFELDRCQUFDO0NBcklELEFBcUlDLENBcklrRCxlQUFLLEdBcUl2RDtrQkFySW9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2FyZFJlcGxhY2VOb25VU1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkUmVwbGFjZU5vblVTVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50TWFwcGluZyA9IHt9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmRSZXBsYWNlTm9uVVNcIjtcbiAgc3RhdGljIEJVTkRMRV9OQU1FID0gXCJsX2NhcmRSZXBsYWNlTm9uVVNcIjtcbiAgc3RhdGljIEFMTF9DQVJEUyA9IFtcImIxXCIsIFwiYjJcIiwgXCJiM1wiLCBcImI0XCIsIFwiYjVcIiwgXCJiNlwiLCBcImI3XCIsIFwiYjhcIiwgXCJiOVwiLCBcInQxXCIsIFwidDJcIiwgXCJ0M1wiLCBcInQ0XCIsIFwidDVcIiwgXCJ0NlwiLCBcInQ3XCIsIFwidDhcIiwgXCJ0OVwiLCBcIlpfZG9uZ1wiLCBcIlpfbmFuXCIsIFwiWl94aVwiLCBcIlpfYmVpXCIsIFwiWl9iYWlcIiwgXCJaX2ZhXCIsIFwiWl96aG9uZ1wiLCBcIkhfbWVpXCIsIFwiSF9sYW5cIiwgXCJIX3podVwiLCBcIkhfanVcIiwgXCJKX2NodW5cIiwgXCJKX3hpYVwiLCBcIkpfcWl1XCIsIFwiSl9kb25nXCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgX2dldFRhc2tDYXJkUmVzTmFtZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGFza0NhcmRSZXNOYW1lKCk7XG4gIH1cbiAgX2dldEZsb3dlclNlcmllc0lEKCkge1xuICAgIHZhciB0LCBlLCByO1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09ICh0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJGbG93ZXJDYXJkU2VyaWVzVHJhaXRcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIHJldHVybiBhICYmIGEuZXZlbnRFbmFibGVkICYmIG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSBhLmdldEN1cnJlbnRNb2RlU2VyaWVzSWQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FsbChhKSkgJiYgdm9pZCAwICE9PSByID8gciA6IC0xO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB7fSxcbiAgICAgIGEgPSBDYXJkUmVwbGFjZU5vblVTVHJhaXQuQUxMX0NBUkRTLnNsaWNlKDAsIDE4KS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgaWYgKDE4ICE9PSBhLmxlbmd0aCkgcmV0dXJuIGU7XG4gICAgdmFyIG4gPSB0aGlzLl9nZXRUYXNrQ2FyZFJlc05hbWUoKSxcbiAgICAgIG8gPSBDYXJkUmVwbGFjZU5vblVTVHJhaXQuQUxMX0NBUkRTLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICBuICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ICE9PSBuO1xuICAgIH0pKTtcbiAgICBpZiAoby5sZW5ndGggPCAxOCkgcmV0dXJuIGU7XG4gICAgZm9yICh2YXIgbCA9IG8ubGVuZ3RoIC0gMTsgbCA+IDA7IGwtLSkge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobCArIDEpKTtcbiAgICAgIHQgPSBfX3JlYWQoW29bc10sIG9bbF1dLCAyKSwgb1tsXSA9IHRbMF0sIG9bc10gPSB0WzFdO1xuICAgIH1cbiAgICBmb3IgKGwgPSAwOyBsIDwgMTg7IGwrKykgZVthW2xdXSA9IG9bbF07XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgX2dldE9yQ3JlYXRlTWFwcGluZyh0KSB7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YVt0XSkge1xuICAgICAgdGhpcy5sb2NhbERhdGFbdF0gPSB7XG4gICAgICAgIG1hcHBpbmc6IHt9XG4gICAgICB9O1xuICAgICAgdGhpcy5sb2NhbERhdGFbdF0gPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICB9XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YVt0XSxcbiAgICAgIHIgPSB0aGlzLl9nZW5lcmF0ZVJhbmRvbU1hcHBpbmcoKTtcbiAgICBpZiAoMCA9PT0gT2JqZWN0LmtleXMocikubGVuZ3RoKSByZXR1cm4ge307XG4gICAgZS5tYXBwaW5nID0gcjtcbiAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIHJldHVybiByO1xuICB9XG4gIF9nZXRDdXJyZW50R2FtZU1vZGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpIHx8IE1qR2FtZVR5cGUuTm9ybWFsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2FyZFJlcE5vblVzX3RhclJlc0NmZ1wiKVxuICBfZ2V0VGFyZ2V0UmVzQ29uZmlnKHQsIGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVuZGxlTmFtZTogQ2FyZFV0aWwuZ2V0Q2FyZEJ1bmRsZU5hbWUoKSxcbiAgICAgIHBhdGg6IGVcbiAgICB9O1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkubm9ybWFsRGF0YS5nZXRMZXZlbElkKCkgPCAzKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGEgPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIGlmIChhICE9PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJlbnRNYXBwaW5nID0gdGhpcy5fZ2V0T3JDcmVhdGVNYXBwaW5nKGEpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkUmVwbGFjZU5vblVTVHJhaXQudHJhaXRLZXkgKyBcIl0g5YWz5Y2h5YiH5o2i5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKHQsIGUpIHtcbiAgICB2YXIgYTtcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIGlmIChuICE9PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKSA8IDMpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZ2V0Rmxvd2VyU2VyaWVzSUQoKSA8PSAwKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSBudWxsID09PSAoYSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYVswXTtcbiAgICAgIGlmICh0aGlzLl9nZXRUYXNrQ2FyZFJlc05hbWUoKSA9PT0gbykge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICgvXlt0Yl1bMS05XSQvLnRlc3QobykpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxvY2FsRGF0YVtuXTtcbiAgICAgICAgaWYgKCFpIHx8IDAgPT09IE9iamVjdC5rZXlzKGkubWFwcGluZykubGVuZ3RoKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAwID09PSBPYmplY3Qua2V5cyh0aGlzLl9jdXJyZW50TWFwcGluZykubGVuZ3RoICYmICh0aGlzLl9jdXJyZW50TWFwcGluZyA9IGkubWFwcGluZyk7XG4gICAgICAgIHZhciBzID0gaS5tYXBwaW5nW29dIHx8IG8sXG4gICAgICAgICAgcCA9IFwiYXRsYXMvY2FyZEljb24vXCIgKyBzLFxuICAgICAgICAgIGYgPSB0aGlzLl9nZXRUYXJnZXRSZXNDb25maWcocywgcCk7XG4gICAgICAgIGUoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogZi5wYXRoLFxuICAgICAgICAgICAgYnVuZGxlTmFtZTogZi5idW5kbGVOYW1lLFxuICAgICAgICAgICAgZnJvbUF0bGFzOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkUmVwbGFjZU5vblVTVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yqr5oyB5Zu+54mH5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=
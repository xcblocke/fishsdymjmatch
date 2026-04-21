
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_cardNumber/Scripts/CardNumberTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6bebV2hkVF7LyarJU1ELSs', 'CardNumberTrait');
// subpackages/r_cardNumber/Scripts/CardNumberTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardNumberTrait = /** @class */ (function (_super) {
    __extends(CardNumberTrait, _super);
    function CardNumberTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        return _this;
    }
    CardNumberTrait_1 = CardNumberTrait;
    CardNumberTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardNumberTrait.prototype._getTaskCardResName = function () {
        var t, r = mj.getClassByName("TaskModel");
        return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardNumberTrait.prototype._generateRandomMapping = function () {
        var t, r = {}, a = CardNumberTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return r;
        var n = this._getTaskCardResName(), o = CardNumberTrait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        n && (o = o.filter(function (t) {
            return t !== n;
        }));
        if (o.length < 18)
            return r;
        for (var l = o.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            r[a[l]] = o[l];
        return r;
    };
    CardNumberTrait.prototype._getOrCreateMapping = function (t) {
        if (!this.localData[t]) {
            this.localData[t] = {
                mapping: {}
            };
            this.localData[t] = this.localData[t];
        }
        var r = this.localData[t], e = this._generateRandomMapping();
        if (0 === Object.keys(e).length)
            return {};
        r.mapping = e;
        this.localData[t] = this.localData[t];
        return e;
    };
    CardNumberTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardNumberTrait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                r();
                return;
            }
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardNumberTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        r();
    };
    CardNumberTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var a;
        try {
            var n = this._getCurrentGameMode();
            if (n !== GameTypeEnums_1.MjGameType.Normal) {
                r();
                return;
            }
            if (UserModel_1.default.getInstance().normalData.getLevelId() < 3) {
                r();
                return;
            }
            var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === o) {
                r();
                return;
            }
            var i = /^W[1-9]$/.test(o), s = /^[tb][1-9]$/.test(o);
            if (i) {
                var f = "atlas/numberCardIcon/" + o;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: f,
                        bundleName: CardNumberTrait_1.BUNDLE_NAME,
                        fromAtlas: true
                    }
                });
                return;
            }
            if (s) {
                var d = this.localData[n];
                if (!d || 0 === Object.keys(d.mapping).length) {
                    r();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = d.mapping);
                f = "atlas/cardIcon/" + (d.mapping[o] || o);
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: f,
                        bundleName: CardUtil_1.default.getCardBundleName(),
                        fromAtlas: true
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardNumberTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardNumberTrait_1;
    CardNumberTrait.traitKey = "CardNumber";
    CardNumberTrait.BUNDLE_NAME = "r_cardNumber";
    CardNumberTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardNumberTrait = CardNumberTrait_1 = __decorate([
        mj.trait,
        mj.class("CardNumberTrait")
    ], CardNumberTrait);
    return CardNumberTrait;
}(Trait_1.default));
exports.default = CardNumberTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NhcmROdW1iZXIvU2NyaXB0cy9DYXJkTnVtYmVyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFDM0Qsd0ZBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSxvRUFBK0Q7QUFHL0Q7SUFBNkMsbUNBQUs7SUFBbEQ7UUFBQSxxRUE4SEM7UUE3SEMscUJBQWUsR0FBRyxFQUFFLENBQUM7O0lBNkh2QixDQUFDO3dCQTlIb0IsZUFBZTtJQUtsQyxnQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9HLENBQUM7SUFDRCxnREFBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxpQkFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDM0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMs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QkFBUSxDQUFDLGlCQUFpQixFQUFFO3dCQUN4QyxTQUFTLEVBQUUsSUFBSTtxQkFDaEI7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGlCQUFlLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoRyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUEzSE0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFDeEIsMkJBQVcsR0FBRyxjQUFjLENBQUM7SUFDN0IseUJBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUo3SixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0E4SG5DO0lBQUQsc0JBQUM7Q0E5SEQsQUE4SEMsQ0E5SDRDLGVBQUssR0E4SGpEO2tCQTlIb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2FyZE51bWJlclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkTnVtYmVyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50TWFwcGluZyA9IHt9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmROdW1iZXJcIjtcbiAgc3RhdGljIEJVTkRMRV9OQU1FID0gXCJyX2NhcmROdW1iZXJcIjtcbiAgc3RhdGljIEFMTF9DQVJEUyA9IFtcImIxXCIsIFwiYjJcIiwgXCJiM1wiLCBcImI0XCIsIFwiYjVcIiwgXCJiNlwiLCBcImI3XCIsIFwiYjhcIiwgXCJiOVwiLCBcInQxXCIsIFwidDJcIiwgXCJ0M1wiLCBcInQ0XCIsIFwidDVcIiwgXCJ0NlwiLCBcInQ3XCIsIFwidDhcIiwgXCJ0OVwiLCBcIlcxXCIsIFwiVzJcIiwgXCJXM1wiLCBcIlc0XCIsIFwiVzVcIiwgXCJXNlwiLCBcIlc3XCIsIFwiVzhcIl07XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBfZ2V0VGFza0NhcmRSZXNOYW1lKCkge1xuICAgIHZhciB0LFxuICAgICAgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiVGFza01vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09PSAodCA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRUYXNrQ2FyZFJlc05hbWUoKTtcbiAgfVxuICBfZ2VuZXJhdGVSYW5kb21NYXBwaW5nKCkge1xuICAgIHZhciB0LFxuICAgICAgciA9IHt9LFxuICAgICAgYSA9IENhcmROdW1iZXJUcmFpdC5BTExfQ0FSRFMuc2xpY2UoMCwgMTgpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICBpZiAoMTggIT09IGEubGVuZ3RoKSByZXR1cm4gcjtcbiAgICB2YXIgbiA9IHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpLFxuICAgICAgbyA9IENhcmROdW1iZXJUcmFpdC5BTExfQ0FSRFMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ICYmIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIG4gJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgIT09IG47XG4gICAgfSkpO1xuICAgIGlmIChvLmxlbmd0aCA8IDE4KSByZXR1cm4gcjtcbiAgICBmb3IgKHZhciBsID0gby5sZW5ndGggLSAxOyBsID4gMDsgbC0tKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbb1tzXSwgb1tsXV0sIDIpLCBvW2xdID0gdFswXSwgb1tzXSA9IHRbMV07XG4gICAgfVxuICAgIGZvciAobCA9IDA7IGwgPCAxODsgbCsrKSByW2FbbF1dID0gb1tsXTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBfZ2V0T3JDcmVhdGVNYXBwaW5nKHQpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhW3RdKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHtcbiAgICAgICAgbWFwcGluZzoge31cbiAgICAgIH07XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHRoaXMubG9jYWxEYXRhW3RdO1xuICAgIH1cbiAgICB2YXIgciA9IHRoaXMubG9jYWxEYXRhW3RdLFxuICAgICAgZSA9IHRoaXMuX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpO1xuICAgIGlmICgwID09PSBPYmplY3Qua2V5cyhlKS5sZW5ndGgpIHJldHVybiB7fTtcbiAgICByLm1hcHBpbmcgPSBlO1xuICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgX2dldEN1cnJlbnRHYW1lTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgfHwgTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLmdldExldmVsSWQoKSA8IDMpIHtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYSA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKGEgIT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudE1hcHBpbmcgPSB0aGlzLl9nZXRPckNyZWF0ZU1hcHBpbmcoYSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmROdW1iZXJUcmFpdC50cmFpdEtleSArIFwiXSDlhbPljaHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICByKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgcikge1xuICAgIHZhciBhO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKG4gIT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpIDwgMykge1xuICAgICAgICByKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF07XG4gICAgICBpZiAodGhpcy5fZ2V0VGFza0NhcmRSZXNOYW1lKCkgPT09IG8pIHtcbiAgICAgICAgcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IC9eV1sxLTldJC8udGVzdChvKSxcbiAgICAgICAgcyA9IC9eW3RiXVsxLTldJC8udGVzdChvKTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciBmID0gXCJhdGxhcy9udW1iZXJDYXJkSWNvbi9cIiArIG87XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogZixcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IENhcmROdW1iZXJUcmFpdC5CVU5ETEVfTkFNRSxcbiAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzKSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5sb2NhbERhdGFbbl07XG4gICAgICAgIGlmICghZCB8fCAwID09PSBPYmplY3Qua2V5cyhkLm1hcHBpbmcpLmxlbmd0aCkge1xuICAgICAgICAgIHIoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgMCA9PT0gT2JqZWN0LmtleXModGhpcy5fY3VycmVudE1hcHBpbmcpLmxlbmd0aCAmJiAodGhpcy5fY3VycmVudE1hcHBpbmcgPSBkLm1hcHBpbmcpO1xuICAgICAgICBmID0gXCJhdGxhcy9jYXJkSWNvbi9cIiArIChkLm1hcHBpbmdbb10gfHwgbyk7XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogZixcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IENhcmRVdGlsLmdldENhcmRCdW5kbGVOYW1lKCksXG4gICAgICAgICAgICBmcm9tQXRsYXM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmROdW1iZXJUcmFpdC50cmFpdEtleSArIFwiXSDliqvmjIHlm77niYflpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxufSJdfQ==
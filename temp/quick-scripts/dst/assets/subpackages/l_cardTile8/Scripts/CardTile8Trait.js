
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardTile8/Scripts/CardTile8Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a46dexKzZJ2IolJA/2ADk+', 'CardTile8Trait');
// subpackages/l_cardTile8/Scripts/CardTile8Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile8Trait = /** @class */ (function (_super) {
    __extends(CardTile8Trait, _super);
    function CardTile8Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        _this._gapTime = 86400000;
        _this._shouldEnableSkin = false;
        return _this;
    }
    CardTile8Trait_1 = CardTile8Trait;
    CardTile8Trait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.gapTime) && (this._gapTime = 3600000 * this._traitData.gapTime);
        var r = UserModel_1.default.getInstance(), a = this.localData.lastColdStartTime || 0, i = r.getAppStartTime();
        if (a > 0 && (0 === a ? 0 : i - a) > this._gapTime) {
            this._shouldEnableSkin = true;
        }
        else {
            this._shouldEnableSkin = false;
        }
        this.localData.lastColdStartTime = i;
        this.localData = this.localData;
    };
    CardTile8Trait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile8Trait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardTile8Trait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var i = this._getTaskCardResName(), n = CardTile8Trait_1.ALL_CARDS.filter(function (t) {
            return t && t.length > 0;
        });
        i && (n = n.filter(function (t) {
            return t !== i;
        }));
        if (n.length < 18)
            return e;
        for (var l = n.length - 1; l > 0; l--) {
            var s = Math.floor(Math.random() * (l + 1));
            t = __read([n[s], n[l]], 2), n[l] = t[0], n[s] = t[1];
        }
        for (l = 0; l < 18; l++)
            e[a[l]] = n[l];
        return e;
    };
    CardTile8Trait.prototype._getOrCreateMapping = function (t) {
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
    CardTile8Trait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile8Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Travel && a !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardTile8Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardTile8Trait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var i = this._getCurrentGameMode();
            if (i !== GameTypeEnums_1.MjGameType.Travel && i !== GameTypeEnums_1.MjGameType.DailyChallenge) {
                e();
                return;
            }
            if (!this._shouldEnableSkin) {
                e();
                return;
            }
            var n = null === (a = t.args) || void 0 === a ? void 0 : a[0];
            if (this._getTaskCardResName() === n) {
                e();
                return;
            }
            if (/^[tb][1-9]$/.test(n)) {
                var o = this.localData[i];
                if (!o || 0 === Object.keys(o.mapping).length) {
                    e();
                    return;
                }
                0 === Object.keys(this._currentMapping).length && (this._currentMapping = o.mapping);
                var s = "atlas/cardIconTile/" + (o.mapping[n] || n);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: s,
                        bundleName: CardUtil_1.default.getCardBundleName(),
                        fromAtlas: true
                    }
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + CardTile8Trait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardTile8Trait_1;
    CardTile8Trait.traitKey = "CardTile8";
    CardTile8Trait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile8Trait = CardTile8Trait_1 = __decorate([
        mj.trait,
        mj.class("CardTile8Trait")
    ], CardTile8Trait);
    return CardTile8Trait;
}(Trait_1.default));
exports.default = CardTile8Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRUaWxlOC9TY3JpcHRzL0NhcmRUaWxlOFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsb0VBQStEO0FBRy9EO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBd0hDO1FBdkhDLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztJQXFINUIsQ0FBQzt1QkF4SG9CLGNBQWM7SUFNakMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4SSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLEVBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFD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QUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBTDdKLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQXdIbEM7SUFBRCxxQkFBQztDQXhIRCxBQXdIQyxDQXhIMkMsZUFBSyxHQXdIaEQ7a0JBeEhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXJkVGlsZThUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFRpbGU4VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50TWFwcGluZyA9IHt9O1xuICBfZ2FwVGltZSA9IDg2NDAwMDAwO1xuICBfc2hvdWxkRW5hYmxlU2tpbiA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmRUaWxlOFwiO1xuICBzdGF0aWMgQUxMX0NBUkRTID0gW1wiYjFcIiwgXCJiMlwiLCBcImIzXCIsIFwiYjRcIiwgXCJiNVwiLCBcImI2XCIsIFwiYjdcIiwgXCJiOFwiLCBcImI5XCIsIFwidDFcIiwgXCJ0MlwiLCBcInQzXCIsIFwidDRcIiwgXCJ0NVwiLCBcInQ2XCIsIFwidDdcIiwgXCJ0OFwiLCBcInQ5XCIsIFwiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIiwgXCJXNVwiLCBcIlc2XCIsIFwiVzdcIiwgXCJXOFwiXTtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdhcFRpbWUpICYmICh0aGlzLl9nYXBUaW1lID0gMzYwMDAwMCAqIHRoaXMuX3RyYWl0RGF0YS5nYXBUaW1lKTtcbiAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgYSA9IHRoaXMubG9jYWxEYXRhLmxhc3RDb2xkU3RhcnRUaW1lIHx8IDAsXG4gICAgICBpID0gci5nZXRBcHBTdGFydFRpbWUoKTtcbiAgICBpZiAoYSA+IDAgJiYgKDAgPT09IGEgPyAwIDogaSAtIGEpID4gdGhpcy5fZ2FwVGltZSkge1xuICAgICAgdGhpcy5fc2hvdWxkRW5hYmxlU2tpbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3VsZEVuYWJsZVNraW4gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdENvbGRTdGFydFRpbWUgPSBpO1xuICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gIH1cbiAgX2dldFRhc2tDYXJkUmVzTmFtZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGFza0NhcmRSZXNOYW1lKCk7XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB7fSxcbiAgICAgIGEgPSBDYXJkVGlsZThUcmFpdC5BTExfQ0FSRFMuc2xpY2UoMCwgMTgpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICBpZiAoMTggIT09IGEubGVuZ3RoKSByZXR1cm4gZTtcbiAgICB2YXIgaSA9IHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpLFxuICAgICAgbiA9IENhcmRUaWxlOFRyYWl0LkFMTF9DQVJEUy5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgaSAmJiAobiA9IG4uZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCAhPT0gaTtcbiAgICB9KSk7XG4gICAgaWYgKG4ubGVuZ3RoIDwgMTgpIHJldHVybiBlO1xuICAgIGZvciAodmFyIGwgPSBuLmxlbmd0aCAtIDE7IGwgPiAwOyBsLS0pIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGwgKyAxKSk7XG4gICAgICB0ID0gX19yZWFkKFtuW3NdLCBuW2xdXSwgMiksIG5bbF0gPSB0WzBdLCBuW3NdID0gdFsxXTtcbiAgICB9XG4gICAgZm9yIChsID0gMDsgbCA8IDE4OyBsKyspIGVbYVtsXV0gPSBuW2xdO1xuICAgIHJldHVybiBlO1xuICB9XG4gIF9nZXRPckNyZWF0ZU1hcHBpbmcodCkge1xuICAgIGlmICghdGhpcy5sb2NhbERhdGFbdF0pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0ge1xuICAgICAgICBtYXBwaW5nOiB7fVxuICAgICAgfTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgfVxuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGFbdF0sXG4gICAgICByID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21NYXBwaW5nKCk7XG4gICAgaWYgKDAgPT09IE9iamVjdC5rZXlzKHIpLmxlbmd0aCkgcmV0dXJuIHt9O1xuICAgIGUubWFwcGluZyA9IHI7XG4gICAgdGhpcy5sb2NhbERhdGFbdF0gPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBfZ2V0Q3VycmVudEdhbWVNb2RlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSB8fCBNakdhbWVUeXBlLk5vcm1hbDtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIGlmIChhICE9PSBNakdhbWVUeXBlLlRyYXZlbCAmJiBhICE9PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudE1hcHBpbmcgPSB0aGlzLl9nZXRPckNyZWF0ZU1hcHBpbmcoYSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENhcmRUaWxlOFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWFs+WNoeWIh+aNouWkhOeQhuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZSh0LCBlKSB7XG4gICAgdmFyIGE7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gdGhpcy5fZ2V0Q3VycmVudEdhbWVNb2RlKCk7XG4gICAgICBpZiAoaSAhPT0gTWpHYW1lVHlwZS5UcmF2ZWwgJiYgaSAhPT0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fc2hvdWxkRW5hYmxlU2tpbikge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF07XG4gICAgICBpZiAodGhpcy5fZ2V0VGFza0NhcmRSZXNOYW1lKCkgPT09IG4pIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoL15bdGJdWzEtOV0kLy50ZXN0KG4pKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5sb2NhbERhdGFbaV07XG4gICAgICAgIGlmICghbyB8fCAwID09PSBPYmplY3Qua2V5cyhvLm1hcHBpbmcpLmxlbmd0aCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgMCA9PT0gT2JqZWN0LmtleXModGhpcy5fY3VycmVudE1hcHBpbmcpLmxlbmd0aCAmJiAodGhpcy5fY3VycmVudE1hcHBpbmcgPSBvLm1hcHBpbmcpO1xuICAgICAgICB2YXIgcyA9IFwiYXRsYXMvY2FyZEljb25UaWxlL1wiICsgKG8ubWFwcGluZ1tuXSB8fCBuKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBwYXRoOiBzLFxuICAgICAgICAgICAgYnVuZGxlTmFtZTogQ2FyZFV0aWwuZ2V0Q2FyZEJ1bmRsZU5hbWUoKSxcbiAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2FyZFRpbGU4VHJhaXQudHJhaXRLZXkgKyBcIl0g5Yqr5oyB5Zu+54mH5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=
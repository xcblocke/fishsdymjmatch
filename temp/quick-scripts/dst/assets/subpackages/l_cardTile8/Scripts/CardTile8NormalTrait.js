
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cardTile8/Scripts/CardTile8NormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2469fhJrMpKvJrTwlL304qD', 'CardTile8NormalTrait');
// subpackages/l_cardTile8/Scripts/CardTile8NormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var CardTile8NormalTrait = /** @class */ (function (_super) {
    __extends(CardTile8NormalTrait, _super);
    function CardTile8NormalTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMapping = {};
        _this._gapTime = 86400000;
        _this._shouldEnableSkin = false;
        return _this;
    }
    CardTile8NormalTrait_1 = CardTile8NormalTrait;
    CardTile8NormalTrait.prototype.onLoad = function () {
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
    CardTile8NormalTrait.prototype._getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskModel");
        return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
    };
    CardTile8NormalTrait.prototype._generateRandomMapping = function () {
        var t, e = {}, a = CardTile8NormalTrait_1.ALL_CARDS.slice(0, 18).filter(function (t) {
            return t && t.length > 0;
        });
        if (18 !== a.length)
            return e;
        var i = this._getTaskCardResName(), n = CardTile8NormalTrait_1.ALL_CARDS.filter(function (t) {
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
    CardTile8NormalTrait.prototype._getOrCreateMapping = function (t) {
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
    CardTile8NormalTrait.prototype._getCurrentGameMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() || GameTypeEnums_1.MjGameType.Normal;
    };
    CardTile8NormalTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this._getCurrentGameMode();
            if (a !== GameTypeEnums_1.MjGameType.Normal) {
                e();
                return;
            }
            this._currentMapping = this._getOrCreateMapping(a);
        }
        catch (t) {
            console.error("[" + CardTile8NormalTrait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    CardTile8NormalTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var a;
        try {
            var i = this._getCurrentGameMode();
            if (i !== GameTypeEnums_1.MjGameType.Normal) {
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
            console.error("[" + CardTile8NormalTrait_1.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var CardTile8NormalTrait_1;
    CardTile8NormalTrait.traitKey = "CardTile8Normal";
    CardTile8NormalTrait.ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    CardTile8NormalTrait = CardTile8NormalTrait_1 = __decorate([
        mj.trait,
        mj.class("CardTile8NormalTrait")
    ], CardTile8NormalTrait);
    return CardTile8NormalTrait;
}(Trait_1.default));
exports.default = CardTile8NormalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcmRUaWxlOC9TY3JpcHRzL0NhcmRUaWxlOE5vcm1hbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUsb0VBQStEO0FBRy9EO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBd0hDO1FBdkhDLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztJQXFINUIsQ0FBQzs2QkF4SG9CLG9CQUFvQjtJQU12QyxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hJLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixJQUFJLENBQUMsRUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJ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SUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBTDdKLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0F3SHhDO0lBQUQsMkJBQUM7Q0F4SEQsQUF3SEMsQ0F4SGlELGVBQUssR0F3SHREO2tCQXhIb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXJkVGlsZThOb3JtYWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFRpbGU4Tm9ybWFsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50TWFwcGluZyA9IHt9O1xuICBfZ2FwVGltZSA9IDg2NDAwMDAwO1xuICBfc2hvdWxkRW5hYmxlU2tpbiA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmRUaWxlOE5vcm1hbFwiO1xuICBzdGF0aWMgQUxMX0NBUkRTID0gW1wiYjFcIiwgXCJiMlwiLCBcImIzXCIsIFwiYjRcIiwgXCJiNVwiLCBcImI2XCIsIFwiYjdcIiwgXCJiOFwiLCBcImI5XCIsIFwidDFcIiwgXCJ0MlwiLCBcInQzXCIsIFwidDRcIiwgXCJ0NVwiLCBcInQ2XCIsIFwidDdcIiwgXCJ0OFwiLCBcInQ5XCIsIFwiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIiwgXCJXNVwiLCBcIlc2XCIsIFwiVzdcIiwgXCJXOFwiXTtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZvaWQgMCAhPT0gKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdhcFRpbWUpICYmICh0aGlzLl9nYXBUaW1lID0gMzYwMDAwMCAqIHRoaXMuX3RyYWl0RGF0YS5nYXBUaW1lKTtcbiAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgYSA9IHRoaXMubG9jYWxEYXRhLmxhc3RDb2xkU3RhcnRUaW1lIHx8IDAsXG4gICAgICBpID0gci5nZXRBcHBTdGFydFRpbWUoKTtcbiAgICBpZiAoYSA+IDAgJiYgKDAgPT09IGEgPyAwIDogaSAtIGEpID4gdGhpcy5fZ2FwVGltZSkge1xuICAgICAgdGhpcy5fc2hvdWxkRW5hYmxlU2tpbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3VsZEVuYWJsZVNraW4gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdENvbGRTdGFydFRpbWUgPSBpO1xuICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gIH1cbiAgX2dldFRhc2tDYXJkUmVzTmFtZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGFza0NhcmRSZXNOYW1lKCk7XG4gIH1cbiAgX2dlbmVyYXRlUmFuZG9tTWFwcGluZygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB7fSxcbiAgICAgIGEgPSBDYXJkVGlsZThOb3JtYWxUcmFpdC5BTExfQ0FSRFMuc2xpY2UoMCwgMTgpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCAmJiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICBpZiAoMTggIT09IGEubGVuZ3RoKSByZXR1cm4gZTtcbiAgICB2YXIgaSA9IHRoaXMuX2dldFRhc2tDYXJkUmVzTmFtZSgpLFxuICAgICAgbiA9IENhcmRUaWxlOE5vcm1hbFRyYWl0LkFMTF9DQVJEUy5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgaSAmJiAobiA9IG4uZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCAhPT0gaTtcbiAgICB9KSk7XG4gICAgaWYgKG4ubGVuZ3RoIDwgMTgpIHJldHVybiBlO1xuICAgIGZvciAodmFyIGwgPSBuLmxlbmd0aCAtIDE7IGwgPiAwOyBsLS0pIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGwgKyAxKSk7XG4gICAgICB0ID0gX19yZWFkKFtuW3NdLCBuW2xdXSwgMiksIG5bbF0gPSB0WzBdLCBuW3NdID0gdFsxXTtcbiAgICB9XG4gICAgZm9yIChsID0gMDsgbCA8IDE4OyBsKyspIGVbYVtsXV0gPSBuW2xdO1xuICAgIHJldHVybiBlO1xuICB9XG4gIF9nZXRPckNyZWF0ZU1hcHBpbmcodCkge1xuICAgIGlmICghdGhpcy5sb2NhbERhdGFbdF0pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0ge1xuICAgICAgICBtYXBwaW5nOiB7fVxuICAgICAgfTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgfVxuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGFbdF0sXG4gICAgICByID0gdGhpcy5fZ2VuZXJhdGVSYW5kb21NYXBwaW5nKCk7XG4gICAgaWYgKDAgPT09IE9iamVjdC5rZXlzKHIpLmxlbmd0aCkgcmV0dXJuIHt9O1xuICAgIGUubWFwcGluZyA9IHI7XG4gICAgdGhpcy5sb2NhbERhdGFbdF0gPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBfZ2V0Q3VycmVudEdhbWVNb2RlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSB8fCBNakdhbWVUeXBlLk5vcm1hbDtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSB0aGlzLl9nZXRDdXJyZW50R2FtZU1vZGUoKTtcbiAgICAgIGlmIChhICE9PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJlbnRNYXBwaW5nID0gdGhpcy5fZ2V0T3JDcmVhdGVNYXBwaW5nKGEpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkVGlsZThOb3JtYWxUcmFpdC50cmFpdEtleSArIFwiXSDlhbPljaHliIfmjaLlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgZSkge1xuICAgIHZhciBhO1xuICAgIHRyeSB7XG4gICAgICB2YXIgaSA9IHRoaXMuX2dldEN1cnJlbnRHYW1lTW9kZSgpO1xuICAgICAgaWYgKGkgIT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9zaG91bGRFbmFibGVTa2luKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSBudWxsID09PSAoYSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYVswXTtcbiAgICAgIGlmICh0aGlzLl9nZXRUYXNrQ2FyZFJlc05hbWUoKSA9PT0gbikge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICgvXlt0Yl1bMS05XSQvLnRlc3QobikpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmxvY2FsRGF0YVtpXTtcbiAgICAgICAgaWYgKCFvIHx8IDAgPT09IE9iamVjdC5rZXlzKG8ubWFwcGluZykubGVuZ3RoKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAwID09PSBPYmplY3Qua2V5cyh0aGlzLl9jdXJyZW50TWFwcGluZykubGVuZ3RoICYmICh0aGlzLl9jdXJyZW50TWFwcGluZyA9IG8ubWFwcGluZyk7XG4gICAgICAgIHZhciBzID0gXCJhdGxhcy9jYXJkSWNvblRpbGUvXCIgKyAoby5tYXBwaW5nW25dIHx8IG4pO1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIHBhdGg6IHMsXG4gICAgICAgICAgICBidW5kbGVOYW1lOiBDYXJkVXRpbC5nZXRDYXJkQnVuZGxlTmFtZSgpLFxuICAgICAgICAgICAgZnJvbUF0bGFzOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDYXJkVGlsZThOb3JtYWxUcmFpdC50cmFpdEtleSArIFwiXSDliqvmjIHlm77niYflpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==
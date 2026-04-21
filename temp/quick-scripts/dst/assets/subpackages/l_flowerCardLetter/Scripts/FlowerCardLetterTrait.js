
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardLetter/Scripts/FlowerCardLetterTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '221e5lTjalOT7k+lZRs2kai', 'FlowerCardLetterTrait');
// subpackages/l_flowerCardLetter/Scripts/FlowerCardLetterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FlowerCardLetterTrait = /** @class */ (function (_super) {
    __extends(FlowerCardLetterTrait, _super);
    function FlowerCardLetterTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._targetLevelId = 2;
        _this._bundleName = "l_flowerCardLetter";
        _this._atlasPrefix = "atlas/flowerCardIcon";
        _this._spinePath = "spine/gameplay_special_elimination";
        _this._cachedActive = false;
        _this._currSkData = null;
        _this._isLoadingSpine = false;
        return _this;
    }
    FlowerCardLetterTrait_1 = FlowerCardLetterTrait;
    FlowerCardLetterTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var t = this._traitData || {};
        "number" == typeof t.levelId && (this._targetLevelId = t.levelId);
    };
    FlowerCardLetterTrait.prototype.refreshActiveCache = function () {
        var e, t, r, i;
        if ((null === (t = null === (e = UserModel_1.default.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameType) || void 0 === t ? void 0 : t.call(e)) !== GameTypeEnums_1.MjGameType.Normal) {
            this._cachedActive = false;
            return false;
        }
        var a = null === (i = null === (r = UserModel_1.default.getInstance()) || void 0 === r ? void 0 : r.getCurrentGameData) || void 0 === i ? void 0 : i.call(r), n = (a && "function" == typeof a.getCurrentLevelId ? a.getCurrentLevelId() : 0) || (a && "function" == typeof a.getLevelId ? a.getLevelId() : 0);
        this._cachedActive = n === this._targetLevelId;
        return this._cachedActive;
    };
    FlowerCardLetterTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        var r, i, a = this;
        if (this.refreshActiveCache()) {
            var n = null === (i = null === (r = e.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr;
            if (n && "function" == typeof n.loadRes) {
                this._isLoadingSpine = true;
                this._currSkData = null;
                n.loadRes(this._spinePath, sp.SkeletonData, this._bundleName).then(function (e) {
                    var t = Array.isArray(e) ? e[0] : e;
                    a._currSkData = t || null;
                }).catch(function () {
                    a._currSkData = null;
                }).finally(function () {
                    a._isLoadingSpine = false;
                });
                t();
            }
            else
                t();
        }
        else {
            this._currSkData = null;
            this._isLoadingSpine = false;
            t();
        }
    };
    FlowerCardLetterTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        var i;
        if (this.refreshActiveCache()) {
            var a = null === (i = e.args) || void 0 === i ? void 0 : i[0];
            if (a) {
                var n = a.replace(/\.png$/i, "");
                if (FlowerCardLetterTrait_1.FLOWER_CARD_NAMES.has(n)) {
                    t({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        returnVal: {
                            path: this._atlasPrefix + "/" + n,
                            bundleName: this._bundleName,
                            fromAtlas: true
                        }
                    });
                }
                else {
                    t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    FlowerCardLetterTrait.prototype.onClearEffBhv_isSpCard = function (e, t) {
        var r, i;
        if (this.refreshActiveCache()) {
            var a = null === (r = e.args) || void 0 === r ? void 0 : r[0], n = null === (i = e.args) || void 0 === i ? void 0 : i[1], o = this.isFlowerCollision(e.ins, a, n);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: o
            });
        }
        else
            t();
    };
    FlowerCardLetterTrait.prototype.onClearEffBhv_changeSpSkd = function (e, t) {
        var r;
        if (this.refreshActiveCache()) {
            var i = null === (r = e.args) || void 0 === r ? void 0 : r[0], a = this._currSkData;
            a && cc.isValid(a) && i && i.skeletonData !== a && (i.skeletonData = a);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    FlowerCardLetterTrait.prototype.isFlowerCollision = function (e, t, r) {
        var i, a = null == e ? void 0 : e.context, n = null === (i = null == a ? void 0 : a.getTileMapObject) || void 0 === i ? void 0 : i.call(a);
        if (!n)
            return false;
        var o = t ? n.getTileObject(t) : null, l = r ? n.getTileObject(r) : null;
        return this.isFlowerCardId(null == o ? void 0 : o.cardId) || this.isFlowerCardId(null == l ? void 0 : l.cardId);
    };
    FlowerCardLetterTrait.prototype.isFlowerCardId = function (e) {
        return !!e && (e >= 28 && e <= 34 || e >= GameTypeEnums_1.MjCardId.emFlowCardIdMei && e <= GameTypeEnums_1.MjCardId.emSeasonCardIdDong);
    };
    var FlowerCardLetterTrait_1;
    FlowerCardLetterTrait.traitKey = "FlowerCardLetter";
    FlowerCardLetterTrait.FLOWER_CARD_NAMES = new Set(["Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"]);
    FlowerCardLetterTrait = FlowerCardLetterTrait_1 = __decorate([
        mj.trait,
        mj.class("FlowerCardLetterTrait")
    ], FlowerCardLetterTrait);
    return FlowerCardLetterTrait;
}(Trait_1.default));
exports.default = FlowerCardLetterTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRMZXR0ZXIvU2NyaXB0cy9GbG93ZXJDYXJkTGV0dGVyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBQ2pFLHdGQUE4RjtBQUc5RjtJQUFtRCx5Q0FBSztJQUF4RDtRQUFBLHFFQTZHQztRQTVHQyxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixpQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLGtCQUFZLEdBQUcsc0JBQXNCLENBQUM7UUFDdEMsZ0JBQVUsR0FBRyxvQ0FBb0MsQ0FBQztRQUNsRCxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZSxHQUFHLEtBQUssQ0FBQzs7SUFzRzFCLENBQUM7OEJBN0dvQixxQkFBcUI7SUFVeEMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDOUIsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxrREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JB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QyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBQ0QsOENBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLHdCQUFRLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSx3QkFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUcsQ0FBQzs7SUFwR00sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUM5Qix1Q0FBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQVQzSixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBNkd6QztJQUFELDRCQUFDO0NBN0dELEFBNkdDLENBN0drRCxlQUFLLEdBNkd2RDtrQkE3R29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgTWpDYXJkSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGbG93ZXJDYXJkTGV0dGVyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb3dlckNhcmRMZXR0ZXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3RhcmdldExldmVsSWQgPSAyO1xuICBfYnVuZGxlTmFtZSA9IFwibF9mbG93ZXJDYXJkTGV0dGVyXCI7XG4gIF9hdGxhc1ByZWZpeCA9IFwiYXRsYXMvZmxvd2VyQ2FyZEljb25cIjtcbiAgX3NwaW5lUGF0aCA9IFwic3BpbmUvZ2FtZXBsYXlfc3BlY2lhbF9lbGltaW5hdGlvblwiO1xuICBfY2FjaGVkQWN0aXZlID0gZmFsc2U7XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgX2lzTG9hZGluZ1NwaW5lID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRmxvd2VyQ2FyZExldHRlclwiO1xuICBzdGF0aWMgRkxPV0VSX0NBUkRfTkFNRVMgPSBuZXcgU2V0KFtcIlpfZG9uZ1wiLCBcIlpfbmFuXCIsIFwiWl94aVwiLCBcIlpfYmVpXCIsIFwiWl9iYWlcIiwgXCJaX2ZhXCIsIFwiWl96aG9uZ1wiLCBcIkhfbWVpXCIsIFwiSF9sYW5cIiwgXCJIX3podVwiLCBcIkhfanVcIiwgXCJKX2NodW5cIiwgXCJKX3hpYVwiLCBcIkpfcWl1XCIsIFwiSl9kb25nXCJdKTtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciB0ID0gdGhpcy5fdHJhaXREYXRhIHx8IHt9O1xuICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIHQubGV2ZWxJZCAmJiAodGhpcy5fdGFyZ2V0TGV2ZWxJZCA9IHQubGV2ZWxJZCk7XG4gIH1cbiAgcmVmcmVzaEFjdGl2ZUNhY2hlKCkge1xuICAgIHZhciBlLCB0LCByLCBpO1xuICAgIGlmICgobnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldEN1cnJlbnRHYW1lVHlwZSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGUpKSAhPT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIHRoaXMuX2NhY2hlZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgYSA9IG51bGwgPT09IChpID0gbnVsbCA9PT0gKHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRDdXJyZW50R2FtZURhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuY2FsbChyKSxcbiAgICAgIG4gPSAoYSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGEuZ2V0Q3VycmVudExldmVsSWQgPyBhLmdldEN1cnJlbnRMZXZlbElkKCkgOiAwKSB8fCAoYSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGEuZ2V0TGV2ZWxJZCA/IGEuZ2V0TGV2ZWxJZCgpIDogMCk7XG4gICAgdGhpcy5fY2FjaGVkQWN0aXZlID0gbiA9PT0gdGhpcy5fdGFyZ2V0TGV2ZWxJZDtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkQWN0aXZlO1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGksXG4gICAgICBhID0gdGhpcztcbiAgICBpZiAodGhpcy5yZWZyZXNoQWN0aXZlQ2FjaGUoKSkge1xuICAgICAgdmFyIG4gPSBudWxsID09PSAoaSA9IG51bGwgPT09IChyID0gZS5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY29udGV4dCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nYW1lQ3RyO1xuICAgICAgaWYgKG4gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLmxvYWRSZXMpIHtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nU3BpbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jdXJyU2tEYXRhID0gbnVsbDtcbiAgICAgICAgbi5sb2FkUmVzKHRoaXMuX3NwaW5lUGF0aCwgc3AuU2tlbGV0b25EYXRhLCB0aGlzLl9idW5kbGVOYW1lKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGU7XG4gICAgICAgICAgYS5fY3VyclNrRGF0YSA9IHQgfHwgbnVsbDtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGEuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhLl9pc0xvYWRpbmdTcGluZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICB0aGlzLl9pc0xvYWRpbmdTcGluZSA9IGZhbHNlO1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZShlLCB0KSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKHRoaXMucmVmcmVzaEFjdGl2ZUNhY2hlKCkpIHtcbiAgICAgIHZhciBhID0gbnVsbCA9PT0gKGkgPSBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMF07XG4gICAgICBpZiAoYSkge1xuICAgICAgICB2YXIgbiA9IGEucmVwbGFjZSgvXFwucG5nJC9pLCBcIlwiKTtcbiAgICAgICAgaWYgKEZsb3dlckNhcmRMZXR0ZXJUcmFpdC5GTE9XRVJfQ0FSRF9OQU1FUy5oYXMobikpIHtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgICAgcGF0aDogdGhpcy5fYXRsYXNQcmVmaXggKyBcIi9cIiArIG4sXG4gICAgICAgICAgICAgIGJ1bmRsZU5hbWU6IHRoaXMuX2J1bmRsZU5hbWUsXG4gICAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfaXNTcENhcmQoZSwgdCkge1xuICAgIHZhciByLCBpO1xuICAgIGlmICh0aGlzLnJlZnJlc2hBY3RpdmVDYWNoZSgpKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChyID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdLFxuICAgICAgICBuID0gbnVsbCA9PT0gKGkgPSBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMV0sXG4gICAgICAgIG8gPSB0aGlzLmlzRmxvd2VyQ29sbGlzaW9uKGUuaW5zLCBhLCBuKTtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25DbGVhckVmZkJodl9jaGFuZ2VTcFNrZChlLCB0KSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMucmVmcmVzaEFjdGl2ZUNhY2hlKCkpIHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKHIgPSBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF0sXG4gICAgICAgIGEgPSB0aGlzLl9jdXJyU2tEYXRhO1xuICAgICAgYSAmJiBjYy5pc1ZhbGlkKGEpICYmIGkgJiYgaS5za2VsZXRvbkRhdGEgIT09IGEgJiYgKGkuc2tlbGV0b25EYXRhID0gYSk7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGlzRmxvd2VyQ29sbGlzaW9uKGUsIHQsIHIpIHtcbiAgICB2YXIgaSxcbiAgICAgIGEgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmNvbnRleHQsXG4gICAgICBuID0gbnVsbCA9PT0gKGkgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmdldFRpbGVNYXBPYmplY3QpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuY2FsbChhKTtcbiAgICBpZiAoIW4pIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbyA9IHQgPyBuLmdldFRpbGVPYmplY3QodCkgOiBudWxsLFxuICAgICAgbCA9IHIgPyBuLmdldFRpbGVPYmplY3QocikgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLmlzRmxvd2VyQ2FyZElkKG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uY2FyZElkKSB8fCB0aGlzLmlzRmxvd2VyQ2FyZElkKG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuY2FyZElkKTtcbiAgfVxuICBpc0Zsb3dlckNhcmRJZChlKSB7XG4gICAgcmV0dXJuICEhZSAmJiAoZSA+PSAyOCAmJiBlIDw9IDM0IHx8IGUgPj0gTWpDYXJkSWQuZW1GbG93Q2FyZElkTWVpICYmIGUgPD0gTWpDYXJkSWQuZW1TZWFzb25DYXJkSWREb25nKTtcbiAgfVxufSJdfQ==
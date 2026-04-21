
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelInterAd/Scripts/TravelInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f915c3YolCxp2IkwmcgQL1', 'TravelInterAdTrait');
// subpackages/l_travelInterAd/Scripts/TravelInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Model_1 = require("../../../Scripts/framework/data/Model");
var c = /** @class */ (function (_super) {
    __extends(c, _super);
    function c() {
        var _this = _super.call(this) || this;
        _this.isLocalEmpty(_this.localData.globalChallengeCount) && (_this.localData.globalChallengeCount = 0);
        return _this;
    }
    c.prototype.isLocalEmpty = function (e) {
        return null == e;
    };
    c.prototype.getGlobalChallengeCount = function () {
        return this.localData.globalChallengeCount;
    };
    c.prototype.addGlobalChallengeCount = function () {
        this.localData.globalChallengeCount++;
    };
    c.prototype.resetGlobalChallengeCount = function () {
        this.localData.globalChallengeCount = 0;
    };
    c = __decorate([
        mj.class("TravelInterAdModel")
    ], c);
    return c;
}(Model_1.default));
var TravelInterAdTrait = /** @class */ (function (_super) {
    __extends(TravelInterAdTrait, _super);
    function TravelInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._noAdLevels = [1];
        _this._adLevels = [2, 3, 4, 5, 6, 7, 8, 9];
        _this._challengesPerAd = 2;
        _this._isNewChallenge = false;
        return _this;
    }
    TravelInterAdTrait.prototype.onLoad = function () {
        var t, r, a;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.noAdLevels) && (this._noAdLevels = this._traitData.noAdLevels);
        void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.adLevels) && (this._adLevels = this._traitData.adLevels);
        void 0 !== (null === (a = this._traitData) || void 0 === a ? void 0 : a.challengesPerAd) && (this._challengesPerAd = this._traitData.challengesPerAd);
        this._model = c.getInstance();
    };
    TravelInterAdTrait.prototype.isTravelGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Travel;
    };
    TravelInterAdTrait.prototype.getCurrentTravelLevel = function () {
        return TravelGameData_1.default.getInstance().getLevelId();
    };
    TravelInterAdTrait.prototype.onIptRestart_excute = function (e, t) {
        if (this.isTravelGameType()) {
            var r = this.getCurrentTravelLevel();
            this._adLevels.includes(r) && (this._isNewChallenge = true);
            t();
        }
        else
            t();
    };
    TravelInterAdTrait.prototype.onEntAniFiBhv_start = function (e, t) {
        if (this.isTravelGameType()) {
            var r = this.getCurrentTravelLevel(), a = r !== this.localData.lastLevel || this._isNewChallenge;
            this.localData.lastLevel = r;
            this._isNewChallenge = false;
            if (a) {
                if (this._noAdLevels.includes(r))
                    t();
                else if (this._adLevels.includes(r)) {
                    this._model.addGlobalChallengeCount();
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TravelInterAdTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        if (this.isTravelGameType()) {
            var r = this.getCurrentTravelLevel();
            if (this._noAdLevels.includes(r))
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: false
                });
            else if (this._adLevels.includes(r)) {
                if (this._model.getGlobalChallengeCount() >= this._challengesPerAd) {
                    this._model.resetGlobalChallengeCount();
                    t();
                }
                else
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return,
                        returnVal: false
                    });
            }
            else
                t();
        }
        else
            t();
    };
    TravelInterAdTrait.traitKey = "TravelInterAd";
    TravelInterAdTrait = __decorate([
        mj.trait,
        mj.class("TravelInterAdTrait")
    ], TravelInterAdTrait);
    return TravelInterAdTrait;
}(Trait_1.default));
exports.default = TravelInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbEludGVyQWQvU2NyaXB0cy9UcmF2ZWxJbnRlckFkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRkFBaUY7QUFDakYsc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUNwRiwrREFBMEQ7QUFFMUQ7SUFBZ0IscUJBQUs7SUFDbkI7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBQ3RHLENBQUM7SUFDRCx3QkFBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsbUNBQXVCLEdBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO0lBQzdDLENBQUM7SUFDRCxtQ0FBdUIsR0FBdkI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUNELHFDQUF5QixHQUF6QjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFoQkcsQ0FBQztRQUROLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDekIsQ0FBQyxDQWlCTjtJQUFELFFBQUM7Q0FqQkQsQUFpQkMsQ0FqQmUsZUFBSyxHQWlCcEI7QUFHRDtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQTREQztRQTNEQyxpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxD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Q0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0E0RHRDO0lBQUQseUJBQUM7Q0E1REQsQUE0REMsQ0E1RCtDLGVBQUssR0E0RHBEO2tCQTVEb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBUcmF2ZWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvVHJhdmVsR2FtZURhdGEnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuQG1qLmNsYXNzKFwiVHJhdmVsSW50ZXJBZE1vZGVsXCIpXG5jbGFzcyBjIGV4dGVuZHMgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmdsb2JhbENoYWxsZW5nZUNvdW50KSAmJiAodGhpcy5sb2NhbERhdGEuZ2xvYmFsQ2hhbGxlbmdlQ291bnQgPSAwKTtcbiAgfVxuICBpc0xvY2FsRW1wdHkoZSkge1xuICAgIHJldHVybiBudWxsID09IGU7XG4gIH1cbiAgZ2V0R2xvYmFsQ2hhbGxlbmdlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmdsb2JhbENoYWxsZW5nZUNvdW50O1xuICB9XG4gIGFkZEdsb2JhbENoYWxsZW5nZUNvdW50KCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmdsb2JhbENoYWxsZW5nZUNvdW50Kys7XG4gIH1cbiAgcmVzZXRHbG9iYWxDaGFsbGVuZ2VDb3VudCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5nbG9iYWxDaGFsbGVuZ2VDb3VudCA9IDA7XG4gIH1cbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVHJhdmVsSW50ZXJBZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxJbnRlckFkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9ub0FkTGV2ZWxzID0gWzFdO1xuICBfYWRMZXZlbHMgPSBbMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIF9jaGFsbGVuZ2VzUGVyQWQgPSAyO1xuICBfaXNOZXdDaGFsbGVuZ2UgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUcmF2ZWxJbnRlckFkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCwgciwgYTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2b2lkIDAgIT09IChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ub0FkTGV2ZWxzKSAmJiAodGhpcy5fbm9BZExldmVscyA9IHRoaXMuX3RyYWl0RGF0YS5ub0FkTGV2ZWxzKTtcbiAgICB2b2lkIDAgIT09IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5hZExldmVscykgJiYgKHRoaXMuX2FkTGV2ZWxzID0gdGhpcy5fdHJhaXREYXRhLmFkTGV2ZWxzKTtcbiAgICB2b2lkIDAgIT09IChudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5jaGFsbGVuZ2VzUGVyQWQpICYmICh0aGlzLl9jaGFsbGVuZ2VzUGVyQWQgPSB0aGlzLl90cmFpdERhdGEuY2hhbGxlbmdlc1BlckFkKTtcbiAgICB0aGlzLl9tb2RlbCA9IGMuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBpc1RyYXZlbEdhbWVUeXBlKCkge1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UcmF2ZWw7XG4gIH1cbiAgZ2V0Q3VycmVudFRyYXZlbExldmVsKCkge1xuICAgIHJldHVybiBUcmF2ZWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldExldmVsSWQoKTtcbiAgfVxuICBvbklwdFJlc3RhcnRfZXhjdXRlKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc1RyYXZlbEdhbWVUeXBlKCkpIHtcbiAgICAgIHZhciByID0gdGhpcy5nZXRDdXJyZW50VHJhdmVsTGV2ZWwoKTtcbiAgICAgIHRoaXMuX2FkTGV2ZWxzLmluY2x1ZGVzKHIpICYmICh0aGlzLl9pc05ld0NoYWxsZW5nZSA9IHRydWUpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25FbnRBbmlGaUJodl9zdGFydChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNUcmF2ZWxHYW1lVHlwZSgpKSB7XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0Q3VycmVudFRyYXZlbExldmVsKCksXG4gICAgICAgIGEgPSByICE9PSB0aGlzLmxvY2FsRGF0YS5sYXN0TGV2ZWwgfHwgdGhpcy5faXNOZXdDaGFsbGVuZ2U7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TGV2ZWwgPSByO1xuICAgICAgdGhpcy5faXNOZXdDaGFsbGVuZ2UgPSBmYWxzZTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIGlmICh0aGlzLl9ub0FkTGV2ZWxzLmluY2x1ZGVzKHIpKSB0KCk7ZWxzZSBpZiAodGhpcy5fYWRMZXZlbHMuaW5jbHVkZXMocikpIHtcbiAgICAgICAgICB0aGlzLl9tb2RlbC5hZGRHbG9iYWxDaGFsbGVuZ2VDb3VudCgpO1xuICAgICAgICAgIHQoKTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkFkTWdyX2Noa0ludGVyQWQoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzVHJhdmVsR2FtZVR5cGUoKSkge1xuICAgICAgdmFyIHIgPSB0aGlzLmdldEN1cnJlbnRUcmF2ZWxMZXZlbCgpO1xuICAgICAgaWYgKHRoaXMuX25vQWRMZXZlbHMuaW5jbHVkZXMocikpIHQoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO2Vsc2UgaWYgKHRoaXMuX2FkTGV2ZWxzLmluY2x1ZGVzKHIpKSB7XG4gICAgICAgIGlmICh0aGlzLl9tb2RlbC5nZXRHbG9iYWxDaGFsbGVuZ2VDb3VudCgpID49IHRoaXMuX2NoYWxsZW5nZXNQZXJBZCkge1xuICAgICAgICAgIHRoaXMuX21vZGVsLnJlc2V0R2xvYmFsQ2hhbGxlbmdlQ291bnQoKTtcbiAgICAgICAgICB0KCk7XG4gICAgICAgIH0gZWxzZSB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19
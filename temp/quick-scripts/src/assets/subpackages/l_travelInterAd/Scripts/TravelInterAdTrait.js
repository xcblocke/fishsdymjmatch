"use strict";
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
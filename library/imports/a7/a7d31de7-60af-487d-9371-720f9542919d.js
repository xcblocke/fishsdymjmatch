"use strict";
cc._RF.push(module, 'a7d313nYK9IfZNxcg+VQpGd', 'LifeFirst10NoInterAdTrait');
// subpackages/l_lifeFirst10NoInterAd/Scripts/LifeFirst10NoInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LifeFirst10NoInterAdTrait = /** @class */ (function (_super) {
    __extends(LifeFirst10NoInterAdTrait, _super);
    function LifeFirst10NoInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._freeInterAdCountLimit = LifeFirst10NoInterAdTrait_1.DEFAULT_FREE_INTER_AD_COUNT_LIMIT;
        return _this;
    }
    LifeFirst10NoInterAdTrait_1 = LifeFirst10NoInterAdTrait;
    LifeFirst10NoInterAdTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        var r = Number(null === (e = this._traitData) || void 0 === e ? void 0 : e.freeInterAdCountLimit);
        !Number.isNaN(r) && r >= 0 && (this._freeInterAdCountLimit = Math.floor(r));
        void 0 === this.localData.skipCount && (this.localData.skipCount = 0);
    };
    LifeFirst10NoInterAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.addEffectiveGameCount("replay");
        e();
    };
    LifeFirst10NoInterAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.addEffectiveGameCount("newGame");
        e();
    };
    LifeFirst10NoInterAdTrait.prototype.onInterAdStart_isSkip = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            e({
                returnVal: true,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    LifeFirst10NoInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && this.shouldSkipInterAd()) {
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    LifeFirst10NoInterAdTrait.prototype.addEffectiveGameCount = function () {
        if (!(this._freeInterAdCountLimit <= 0)) {
            var t = this.getEffectiveGameCount();
            if (!(t >= this._freeInterAdCountLimit)) {
                var e = t + 1;
                this.localData.skipCount = e;
            }
        }
    };
    LifeFirst10NoInterAdTrait.prototype.getEffectiveGameCount = function () {
        var t = Number(this.localData.skipCount);
        return Number.isNaN(t) || t < 0 ? 0 : Math.floor(t);
    };
    LifeFirst10NoInterAdTrait.prototype.shouldSkipInterAd = function () {
        return !(this._freeInterAdCountLimit <= 0) && this.getEffectiveGameCount() < this._freeInterAdCountLimit;
    };
    var LifeFirst10NoInterAdTrait_1;
    LifeFirst10NoInterAdTrait.traitKey = "LifeFirst10NoInterAd";
    LifeFirst10NoInterAdTrait.DEFAULT_FREE_INTER_AD_COUNT_LIMIT = 10;
    LifeFirst10NoInterAdTrait = LifeFirst10NoInterAdTrait_1 = __decorate([
        mj.trait,
        mj.class("LifeFirst10NoInterAdTrait")
    ], LifeFirst10NoInterAdTrait);
    return LifeFirst10NoInterAdTrait;
}(Trait_1.default));
exports.default = LifeFirst10NoInterAdTrait;

cc._RF.pop();
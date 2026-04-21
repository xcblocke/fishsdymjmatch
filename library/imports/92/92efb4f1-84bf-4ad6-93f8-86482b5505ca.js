"use strict";
cc._RF.push(module, '92efbTxhL9K1pP4hkgrVQXK', 'ColdInterCdAndNewTrait');
// subpackages/l_coldInterCdAndNew/Scripts/ColdInterCdAndNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ColdInterCdAndNewTrait = /** @class */ (function (_super) {
    __extends(ColdInterCdAndNewTrait, _super);
    function ColdInterCdAndNewTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coldStartFreeTime = 60000;
        _this._startLevel = 9;
        _this._isReadyToPlayInterAd = false;
        return _this;
    }
    ColdInterCdAndNewTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.coldStartFreeTime) && (this._coldStartFreeTime = 1000 * this._traitData.coldStartFreeTime);
        void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) && (this._startLevel = this._traitData.startLevel);
    };
    ColdInterCdAndNewTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = UserModel_1.default.getInstance(), a = r.getAppStartTime(), i = Date.now() - a, n = r.normalData.getLevelId();
            if (!this._isReadyToPlayInterAd || n != this._startLevel || this.localData.isColdInterCdAndNewPlayed) {
                this._isReadyToPlayInterAd = false;
                if (i < this._coldStartFreeTime) {
                    Math.ceil((this._coldStartFreeTime - i) / 1000);
                    t({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else {
                this._isReadyToPlayInterAd = false;
                this.localData.isColdInterCdAndNewPlayed = true;
                t({
                    returnVal: true,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.onWinVw_onNextClick = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isNormalGameType()) {
                this._isReadyToPlayInterAd = true;
                t();
            }
            else {
                this._isReadyToPlayInterAd = false;
                t();
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.onHallNmlBtn_onBtnClk = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.isColdInterCdAndNewPlayed) {
                this._isReadyToPlayInterAd = false;
                t();
            }
            else {
                this._isReadyToPlayInterAd = true;
                t();
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.onTaskItemVw_goToGame = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.isColdInterCdAndNewPlayed) {
                this._isReadyToPlayInterAd = false;
                t();
            }
            else {
                this._isReadyToPlayInterAd = true;
                t();
            }
        }
        else
            t();
    };
    ColdInterCdAndNewTrait.prototype.isNormalGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    ColdInterCdAndNewTrait.traitKey = "ColdInterCdAndNew";
    ColdInterCdAndNewTrait = __decorate([
        mj.trait,
        mj.class("ColdInterCdAndNewTrait")
    ], ColdInterCdAndNewTrait);
    return ColdInterCdAndNewTrait;
}(Trait_1.default));
exports.default = ColdInterCdAndNewTrait;

cc._RF.pop();
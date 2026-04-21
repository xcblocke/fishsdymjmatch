"use strict";
cc._RF.push(module, 'ea5876ryYVJJbOk5+fnfExZ', 'MaterialCard2Trait');
// subpackages/l_materialCard/Scripts/MaterialCard2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard2Trait = /** @class */ (function (_super) {
    __extends(MaterialCard2Trait, _super);
    function MaterialCard2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard2Trait_1 = MaterialCard2Trait;
    MaterialCard2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._initData();
    };
    MaterialCard2Trait.prototype._initData = function () {
        this.localData.modes || (this.localData.modes = {});
    };
    MaterialCard2Trait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
        e.dailyChallengeData.setCardMaterialID(t);
    };
    MaterialCard2Trait.prototype._setAdFlagForAllModes = function () {
        this.localData.modes || (this.localData.modes = {});
        var t = this.localData.modes;
        MaterialCard2Trait_1.ALL_MODES.forEach(function (e) {
            t[e] || (t[e] = {
                hadInterAdLastRound: false,
                hadInterAdThisRound: false
            });
            var r = t[e];
            r && (r.hadInterAdLastRound = true);
        });
        this.localData.modes = this.localData.modes;
    };
    MaterialCard2Trait.prototype._clearAdFlagForAllModes = function () {
        if (this.localData.modes) {
            var t = this.localData.modes;
            MaterialCard2Trait_1.ALL_MODES.forEach(function (e) {
                var r = t[e];
                r && (r.hadInterAdLastRound = false);
            });
            this.localData.modes = this.localData.modes;
        }
    };
    MaterialCard2Trait.prototype._getModeData = function (t) {
        var e;
        this.localData.modes || (this.localData.modes = {});
        if (!this.localData.modes[t]) {
            this.localData.modes[t] = {
                hadInterAdLastRound: false,
                hadInterAdThisRound: false
            };
            this.localData.modes = this.localData.modes;
        }
        return null !== (e = this.localData.modes[t]) && void 0 !== e ? e : {
            hadInterAdLastRound: false,
            hadInterAdThisRound: false
        };
    };
    MaterialCard2Trait.prototype.onAdMgr_interAdClose = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            this._getModeData(a).hadInterAdThisRound = true;
            this.localData.modes = this.localData.modes;
            this._setAdFlagForAllModes();
        }
        catch (t) {
            console.error("[" + MaterialCard2Trait_1.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard2Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            if (!this.isNormalMode() && !this.isTravelMode() && !this.isDailyMode()) {
                e();
                return;
            }
            this._getModeData(a).hadInterAdLastRound && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard2Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard2Trait.prototype.onWinVw_showWinVw = function (t, e) {
        this._handleWinEvent("Normal");
        e();
    };
    MaterialCard2Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        this._handleWinEvent("Travel");
        e();
    };
    MaterialCard2Trait.prototype.onDCWinVw_showWinVw = function (t, e) {
        this._handleWinEvent("DailyChallenge");
        e();
    };
    MaterialCard2Trait.prototype._handleWinEvent = function () {
        var t, e;
        try {
            var a = this.getCurrentGameType(), i = null === (t = this.localData.modes) || void 0 === t ? void 0 : t[a];
            (null == i ? void 0 : i.hadInterAdThisRound) || this._clearAdFlagForAllModes();
            var o = null === (e = this.localData.modes) || void 0 === e ? void 0 : e[a];
            if (o) {
                o.hadInterAdThisRound = false;
                this.localData.modes = this.localData.modes;
            }
        }
        catch (t) {
            console.error("[" + MaterialCard2Trait_1.traitKey + "] 胜利处理失败: " + (null == t ? void 0 : t.message));
        }
    };
    var MaterialCard2Trait_1;
    MaterialCard2Trait.traitKey = "MaterialCard2";
    MaterialCard2Trait.ALL_MODES = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge];
    MaterialCard2Trait = MaterialCard2Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard2Trait")
    ], MaterialCard2Trait);
    return MaterialCard2Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard2Trait;

cc._RF.pop();
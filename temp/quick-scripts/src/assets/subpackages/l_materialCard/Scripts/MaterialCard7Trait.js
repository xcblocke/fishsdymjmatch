"use strict";
cc._RF.push(module, 'ae305wZ7W5G2pa5jnhWOpYM', 'MaterialCard7Trait');
// subpackages/l_materialCard/Scripts/MaterialCard7Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCard7Trait = /** @class */ (function (_super) {
    __extends(MaterialCard7Trait, _super);
    function MaterialCard7Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard7Trait_1 = MaterialCard7Trait;
    MaterialCard7Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
        this._initData();
    };
    MaterialCard7Trait.prototype._initData = function () {
        this.localData.modes || (this.localData.modes = {});
    };
    MaterialCard7Trait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
        e.dailyChallengeData.setCardMaterialID(t);
    };
    MaterialCard7Trait.prototype._getModeData = function (t) {
        var e;
        this.localData.modes || (this.localData.modes = {});
        if (!this.localData.modes[t]) {
            this.localData.modes[t] = {
                shouldSwitchNextRound: false
            };
            this.localData.modes = this.localData.modes;
        }
        return null !== (e = this.localData.modes[t]) && void 0 !== e ? e : {
            shouldSwitchNextRound: false
        };
    };
    MaterialCard7Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard7Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            if (this.isNormalMode()) {
                var i = this.getCurrentLevel();
                this._shouldEnableForLevel(i) && this.switchToNextMaterialCard();
            }
            else if (this.isDailyMode()) {
                var o = this._getModeData(a);
                if (o.shouldSwitchNextRound) {
                    this.switchToNextMaterialCard();
                    o.shouldSwitchNextRound = false;
                    this.localData.modes = this.localData.modes;
                }
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard7Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard7Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard7Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard7Trait.prototype.onDCWinVw_showWinVw = function (t, e) {
        try {
            var a = GameTypeEnums_1.MjGameType.DailyChallenge;
            this._getModeData(a).shouldSwitchNextRound = true;
            this.localData.modes = this.localData.modes;
        }
        catch (t) {
            console.error("[" + MaterialCard7Trait_1.traitKey + "] 每日挑战胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard7Trait_1;
    MaterialCard7Trait.traitKey = "MaterialCard7";
    MaterialCard7Trait = MaterialCard7Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard7Trait")
    ], MaterialCard7Trait);
    return MaterialCard7Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard7Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'fc1e4UQsqNKF4HjK1aQows4', 'MaterialCard6Trait');
// subpackages/l_materialCard/Scripts/MaterialCard6Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCard6Trait = /** @class */ (function (_super) {
    __extends(MaterialCard6Trait, _super);
    function MaterialCard6Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard6Trait_1 = MaterialCard6Trait;
    MaterialCard6Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
    };
    MaterialCard6Trait.prototype._getModeData = function (t) {
        var e;
        if (!this.localData[t]) {
            this.localData[t] = {
                shouldSwitchNextRound: false
            };
            this.localData[t] = this.localData[t];
        }
        return null !== (e = this.localData[t]) && void 0 !== e ? e : {
            shouldSwitchNextRound: false
        };
    };
    MaterialCard6Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard6Trait.prototype.onGsListener_onNewGame = function (t, e) {
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
                    this.localData[a] = this.localData[a];
                }
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard6Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard6Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard6Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard6Trait.prototype.onDCWinVw_showWinVw = function (t, e) {
        try {
            var a = GameTypeEnums_1.MjGameType.DailyChallenge;
            this._getModeData(a).shouldSwitchNextRound = true;
            this.localData[a] = this.localData[a];
        }
        catch (t) {
            console.error("[" + MaterialCard6Trait_1.traitKey + "] 每日挑战胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard6Trait_1;
    MaterialCard6Trait.traitKey = "MaterialCard6";
    MaterialCard6Trait = MaterialCard6Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard6Trait")
    ], MaterialCard6Trait);
    return MaterialCard6Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard6Trait;

cc._RF.pop();
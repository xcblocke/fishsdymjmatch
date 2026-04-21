"use strict";
cc._RF.push(module, '909ffZk9IhBuKvu7iEfAQgE', 'MaterialCard5Trait');
// subpackages/l_materialCard/Scripts/MaterialCard5Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard5Trait = /** @class */ (function (_super) {
    __extends(MaterialCard5Trait, _super);
    function MaterialCard5Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard5Trait_1 = MaterialCard5Trait;
    MaterialCard5Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
    };
    MaterialCard5Trait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
    };
    MaterialCard5Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard5Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (this.isNormalMode()) {
                var a = this.getCurrentLevel();
                this._shouldEnableForLevel(a) && this.switchToNextMaterialCard();
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard5Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard5Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard5Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard5Trait_1;
    MaterialCard5Trait.traitKey = "MaterialCard5";
    MaterialCard5Trait = MaterialCard5Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard5Trait")
    ], MaterialCard5Trait);
    return MaterialCard5Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard5Trait;

cc._RF.pop();
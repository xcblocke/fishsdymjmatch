"use strict";
cc._RF.push(module, '6987fXHOjNHO57231n+tN8x', 'MaterialCard11Trait');
// subpackages/l_materialCard/Scripts/MaterialCard11Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard11Trait = /** @class */ (function (_super) {
    __extends(MaterialCard11Trait, _super);
    function MaterialCard11Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard11Trait_1 = MaterialCard11Trait;
    MaterialCard11Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MaterialCard11Trait.prototype._getCurrentModeLevel = function () {
        var t, e, r = UserModel_1.default.getInstance(), a = r.getCurrentGameData();
        return this.isNormalMode() ? null !== (t = r.normalData.getLevelId()) && void 0 !== t ? t : 0 : this.isTravelMode() && null !== (e = a.getLevelId()) && void 0 !== e ? e : 0;
    };
    MaterialCard11Trait.prototype._isHardLevel = function (t) {
        return GameUtils_1.default.isTypeHardLevel(this.getCurrentGameType(), t);
    };
    MaterialCard11Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isNormalMode() && !this.isTravelMode()) {
                e();
                return;
            }
            this.getCurrentGameType();
            var a = this._getCurrentModeLevel();
            if (this._isHardLevel(a)) {
                this.switchToNextMaterialCard();
            }
            else {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard11Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard11Trait_1;
    MaterialCard11Trait.traitKey = "MaterialCard11";
    MaterialCard11Trait = MaterialCard11Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard11Trait")
    ], MaterialCard11Trait);
    return MaterialCard11Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard11Trait;

cc._RF.pop();
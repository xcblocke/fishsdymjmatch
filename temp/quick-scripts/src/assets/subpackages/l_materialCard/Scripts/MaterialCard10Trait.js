"use strict";
cc._RF.push(module, '49c457xAhJJ+4pPlMrRC/rj', 'MaterialCard10Trait');
// subpackages/l_materialCard/Scripts/MaterialCard10Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var MaterialCard10Trait = /** @class */ (function (_super) {
    __extends(MaterialCard10Trait, _super);
    function MaterialCard10Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard10Trait_1 = MaterialCard10Trait;
    MaterialCard10Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MaterialCard10Trait.prototype._isHardLevel = function (t) {
        return GameUtils_1.default.isTypeHardLevel(this.getCurrentGameType(), t);
    };
    MaterialCard10Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isNormalMode()) {
                e();
                return;
            }
            var a = this.getCurrentLevel();
            if (this._isHardLevel(a)) {
                this.switchToNextMaterialCard();
            }
            else {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard10Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard10Trait_1;
    MaterialCard10Trait.traitKey = "MaterialCard10";
    MaterialCard10Trait = MaterialCard10Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard10Trait")
    ], MaterialCard10Trait);
    return MaterialCard10Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard10Trait;

cc._RF.pop();
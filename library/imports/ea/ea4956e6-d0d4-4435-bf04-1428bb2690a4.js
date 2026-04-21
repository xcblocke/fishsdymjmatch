"use strict";
cc._RF.push(module, 'ea495bm0NRENb8EFCi7JpCk', 'MaterialCard9Trait');
// subpackages/l_materialCard/Scripts/MaterialCard9Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard9Trait = /** @class */ (function (_super) {
    __extends(MaterialCard9Trait, _super);
    function MaterialCard9Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 20;
        _this._interval = 1;
        return _this;
    }
    MaterialCard9Trait_1 = MaterialCard9Trait;
    MaterialCard9Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 20;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 1;
    };
    MaterialCard9Trait.prototype._getCurrentModeLevel = function () {
        var t, e, r = UserModel_1.default.getInstance(), a = r.getCurrentGameData();
        return this.isNormalMode() ? null !== (t = r.normalData.getLevelId()) && void 0 !== t ? t : 0 : this.isTravelMode() && null !== (e = a.getLevelId()) && void 0 !== e ? e : 0;
    };
    MaterialCard9Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard9Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isNormalMode() && !this.isTravelMode()) {
                e();
                return;
            }
            this.getCurrentGameType();
            var a = this._getCurrentModeLevel();
            if (!this._shouldEnableForLevel(a)) {
                e();
                return;
            }
            this.switchToNextMaterialCard();
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard9Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard9Trait_1;
    MaterialCard9Trait.traitKey = "MaterialCard9";
    MaterialCard9Trait = MaterialCard9Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard9Trait")
    ], MaterialCard9Trait);
    return MaterialCard9Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard9Trait;

cc._RF.pop();
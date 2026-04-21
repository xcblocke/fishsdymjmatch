"use strict";
cc._RF.push(module, '53407VvdzFMB4RalVxegT7i', 'MaterialCard4Trait');
// subpackages/l_materialCard/Scripts/MaterialCard4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var MaterialCard4Trait = /** @class */ (function (_super) {
    __extends(MaterialCard4Trait, _super);
    function MaterialCard4Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard4Trait_1 = MaterialCard4Trait;
    MaterialCard4Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
    };
    MaterialCard4Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard4Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (this.isNormalMode()) {
                var a = this.getCurrentLevel();
                this._shouldEnableForLevel(a) && this.switchToNextMaterialCard();
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard4Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard4Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard4Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard4Trait_1;
    MaterialCard4Trait.traitKey = "MaterialCard4";
    MaterialCard4Trait = MaterialCard4Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard4Trait")
    ], MaterialCard4Trait);
    return MaterialCard4Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard4Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '1fe32W/E6lP44zURjRRoqR5', 'ValentineComboEffectTrait');
// subpackages/r_valentineComboEffect/Scripts/ValentineComboEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentineComboEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineComboEffectTrait, _super);
    function ValentineComboEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = "prefabs/EffectCombo";
        return _this;
    }
    ValentineComboEffectTrait_1 = ValentineComboEffectTrait;
    ValentineComboEffectTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.enterGameView();
        this.isComboEffectActive() && this.loadResPools();
    };
    ValentineComboEffectTrait.prototype.enterGameView = function () { };
    ValentineComboEffectTrait.prototype.loadResPools = function () {
        var t = ControllerManager_1.default.getInstance().getControByName("MainGameController");
        t && (t.gameObjectPool.isHasPool(ValentineComboEffectTrait_1.ValentineComboEffect) || t.loadRes(this._url, cc.Prefab, ValentineComboEffectTrait_1.BundleName).then(function (e) {
            var r = Array.isArray(e) ? e[0] : e;
            r && t.gameObjectPool.createObjectPool(ValentineComboEffectTrait_1.ValentineComboEffect, r, 1);
        }).catch(function () { }));
    };
    ValentineComboEffectTrait.prototype.onUpdComboBhv_poolName = function (t, e) {
        if (this.isComboEffectActive()) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: ValentineComboEffectTrait_1.ValentineComboEffect
            });
        }
        else {
            e();
        }
    };
    ValentineComboEffectTrait.prototype.isComboEffectActive = function () {
        if (null != this._traitData.comboEffect)
            return this._traitData.comboEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineComboEffectTrait_1;
    ValentineComboEffectTrait.traitKey = "ValentineComboEffect";
    ValentineComboEffectTrait.ValentineComboEffect = "ValentineComboEffect";
    ValentineComboEffectTrait.BundleName = "r_valentineComboEffect";
    __decorate([
        mj.traitEvent("ValComboEff_enter")
    ], ValentineComboEffectTrait.prototype, "enterGameView", null);
    ValentineComboEffectTrait = ValentineComboEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineComboEffectTrait")
    ], ValentineComboEffectTrait);
    return ValentineComboEffectTrait;
}(Trait_1.default));
exports.default = ValentineComboEffectTrait;

cc._RF.pop();
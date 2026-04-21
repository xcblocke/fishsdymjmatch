"use strict";
cc._RF.push(module, 'bdec9XwOhFMvb7BxRce2biU', 'ValentineMotivationEffectTrait');
// subpackages/r_valentineMotivationEff/Scripts/ValentineMotivationEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentineMotivationEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineMotivationEffectTrait, _super);
    function ValentineMotivationEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = "prefabs/EffectMotivationalWords";
        return _this;
    }
    ValentineMotivationEffectTrait_1 = ValentineMotivationEffectTrait;
    ValentineMotivationEffectTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isValentineMotivationEffectActive() && this.loadResPools();
    };
    ValentineMotivationEffectTrait.prototype.loadResPools = function () {
        var t = ControllerManager_1.default.getInstance().getControByName("MainGameController");
        t && (t.gameObjectPool.isHasPool(ValentineMotivationEffectTrait_1.ValentineMotivationEffect) || t.loadRes(this._url, cc.Prefab, ValentineMotivationEffectTrait_1.BundleName).then(function (e) {
            var n = Array.isArray(e) ? e[0] : e;
            n && t.gameObjectPool.createObjectPool(ValentineMotivationEffectTrait_1.ValentineMotivationEffect, n, 1);
        }).catch(function () { }));
    };
    ValentineMotivationEffectTrait.prototype.onMotivWdsEff_poolName = function (t, e) {
        if (this.isValentineMotivationEffectActive()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: ValentineMotivationEffectTrait_1.ValentineMotivationEffect
            });
        }
        else {
            e();
        }
    };
    ValentineMotivationEffectTrait.prototype.isValentineMotivationEffectActive = function () {
        if (null != this._traitData.valentineMotivationEffect)
            return this._traitData.valentineMotivationEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineMotivationEffectTrait_1;
    ValentineMotivationEffectTrait.traitKey = "ValentineMotivationEffect";
    ValentineMotivationEffectTrait.ValentineMotivationEffect = "ValentineMotivationEffect";
    ValentineMotivationEffectTrait.BundleName = "r_valentineMotivationEff";
    ValentineMotivationEffectTrait = ValentineMotivationEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineMotivationEffectTrait")
    ], ValentineMotivationEffectTrait);
    return ValentineMotivationEffectTrait;
}(Trait_1.default));
exports.default = ValentineMotivationEffectTrait;

cc._RF.pop();
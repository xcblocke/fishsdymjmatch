"use strict";
cc._RF.push(module, '19426kFzctF87CvCjLX4qHO', 'ValentineMotivationTrait');
// subpackages/r_valentineMotivation/Scripts/ValentineMotivationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentineMotivationTrait = /** @class */ (function (_super) {
    __extends(ValentineMotivationTrait, _super);
    function ValentineMotivationTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._url = "prefabs/EffectMotivationalWordsItem";
        return _this;
    }
    ValentineMotivationTrait_1 = ValentineMotivationTrait;
    ValentineMotivationTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isValentineMotivationActive() && this.loadResPools();
    };
    ValentineMotivationTrait.prototype.loadResPools = function () {
        var t = ControllerManager_1.default.getInstance().getControByName("MainGameController");
        t && (t.gameObjectPool.isHasPool(ValentineMotivationTrait_1.ValentineMotivation) || t.loadRes(this._url, cc.Prefab, "r_valentineMotivation").then(function (e) {
            var n = Array.isArray(e) ? e[0] : e;
            n && t.gameObjectPool.createObjectPool(ValentineMotivationTrait_1.ValentineMotivation, n, 1);
        }).catch(function () { }));
    };
    ValentineMotivationTrait.prototype.onMotivWordsBhv_nodeName = function (t, e) {
        if (this.isValentineMotivationActive()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: ValentineMotivationTrait_1.ValentineMotivation
            });
        }
        else {
            e();
        }
    };
    ValentineMotivationTrait.prototype.isValentineMotivationActive = function () {
        if (null != this._traitData.valentineMotivation)
            return this._traitData.valentineMotivation;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineMotivationTrait_1;
    ValentineMotivationTrait.traitKey = "ValentineMotivation";
    ValentineMotivationTrait.ValentineMotivation = "ValentineMotivation";
    ValentineMotivationTrait = ValentineMotivationTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineMotivationTrait")
    ], ValentineMotivationTrait);
    return ValentineMotivationTrait;
}(Trait_1.default));
exports.default = ValentineMotivationTrait;

cc._RF.pop();
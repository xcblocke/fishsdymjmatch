"use strict";
cc._RF.push(module, 'b79d58KHGVGmJSEOjv77lFq', 'TargetCollected2Trait');
// subpackages/r_targetCollected/Scripts/TargetCollected2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TargetCollectedBehavior_1 = require("./TargetCollectedBehavior");
var TargetCollectedUtils_1 = require("./TargetCollectedUtils");
var TargetCollected2Trait = /** @class */ (function (_super) {
    __extends(TargetCollected2Trait, _super);
    function TargetCollected2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCollected2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.TargetCollected, TargetCollectedBehavior_1.TargetCollectedBehavior);
    };
    TargetCollected2Trait.prototype.onClrTravelHlp_collTagEff = function (e, t) {
        var r = e.beforReturnVal;
        r && this.pushTargetCollectedEffect(e.ins, r);
        t();
    };
    TargetCollected2Trait.prototype.pushTargetCollectedEffect = function (e, t) {
        var r = TravelGameModel_1.default.getInstance().getCurJourney(), o = TargetCollectedUtils_1.TargetCollectedUtils.getTargetCollectedRes(r);
        if (o) {
            var a = __read(o, 2), i = a[0], l = a[1], s = new TargetCollectedBehavior_1.TargetCollectedEffect({
                spinePath: i,
                bundleName: l
            });
            e._baseInput.pushEffect(s, BehaviorsEnum_1.EInsertType.Parallel, t.newEffectId, false);
        }
    };
    TargetCollected2Trait.traitKey = "TargetCollected2";
    TargetCollected2Trait = __decorate([
        mj.trait,
        mj.class("TargetCollected2Trait")
    ], TargetCollected2Trait);
    return TargetCollected2Trait;
}(Trait_1.default));
exports.default = TargetCollected2Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '439deOIPydO8pM2s16USjUk', 'TargetCollectedTrait');
// subpackages/r_targetCollected/Scripts/TargetCollectedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TargetCollectedBehavior_1 = require("./TargetCollectedBehavior");
var TargetCollectedUtils_1 = require("./TargetCollectedUtils");
var TargetCollectedTrait = /** @class */ (function (_super) {
    __extends(TargetCollectedTrait, _super);
    function TargetCollectedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCollectedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.TargetCollected, TargetCollectedBehavior_1.TargetCollectedBehavior);
    };
    TargetCollectedTrait.prototype.onClrTravelHlp_collTagEff = function (e, t) {
        this.pushTargetCollectedEffect(e.ins, e.args[0]);
        t();
    };
    TargetCollectedTrait.prototype.pushTargetCollectedEffect = function (e, t) {
        var r = TravelGameModel_1.default.getInstance().getCurJourney(), o = TargetCollectedUtils_1.TargetCollectedUtils.getTargetCollectedRes(r);
        if (o) {
            var a = __read(o, 2), i = a[0], l = a[1], s = new TargetCollectedBehavior_1.TargetCollectedEffect({
                spinePath: i,
                bundleName: l
            });
            e._baseInput.pushEffect(s, BehaviorsEnum_1.EInsertType.Parallel, t.newEffectId, false);
        }
    };
    TargetCollectedTrait.traitKey = "TargetCollected";
    TargetCollectedTrait = __decorate([
        mj.trait,
        mj.class("TargetCollectedTrait")
    ], TargetCollectedTrait);
    return TargetCollectedTrait;
}(Trait_1.default));
exports.default = TargetCollectedTrait;

cc._RF.pop();
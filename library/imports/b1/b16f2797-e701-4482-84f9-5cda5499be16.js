"use strict";
cc._RF.push(module, 'b16f2eX5wFEgoT5XNpUmb4W', 'StepCutSaveTrait');
// subpackages/l_stepCutSave/Scripts/StepCutSaveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StepCutSaveTrait = /** @class */ (function (_super) {
    __extends(StepCutSaveTrait, _super);
    function StepCutSaveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepCutSaveTrait.prototype.onTrackerUtils_cheElimPair = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.prototype.onTrackerUtils_cheGmStep = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.prototype.onTrackerUtils_upRelPos = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.prototype.onTrackerUtils_cacheStepAly = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.traitKey = "StepCutSave";
    StepCutSaveTrait = __decorate([
        mj.trait,
        mj.class("StepCutSaveTrait")
    ], StepCutSaveTrait);
    return StepCutSaveTrait;
}(Trait_1.default));
exports.default = StepCutSaveTrait;

cc._RF.pop();
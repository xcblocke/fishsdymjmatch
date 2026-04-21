"use strict";
cc._RF.push(module, '8a052UqZ1pL74+6b7uTfevB', 'StepNoReportTrait');
// subpackages/l_stepNoReport/Scripts/StepNoReportTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StepNoReportTrait = /** @class */ (function (_super) {
    __extends(StepNoReportTrait, _super);
    function StepNoReportTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepNoReportTrait.prototype.onTrackerUtils_dotGmStep = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepNoReportTrait.traitKey = "StepNoReport";
    StepNoReportTrait = __decorate([
        mj.trait,
        mj.class("StepNoReportTrait")
    ], StepNoReportTrait);
    return StepNoReportTrait;
}(Trait_1.default));
exports.default = StepNoReportTrait;

cc._RF.pop();
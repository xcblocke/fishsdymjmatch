"use strict";
cc._RF.push(module, 'bc1ceZbKANMsIPcUBv67w9L', 'GuideComboAddScoreTrait');
// subpackages/l_guideComboAddScore/Scripts/GuideComboAddScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GuideComboAddScoreTrait = /** @class */ (function (_super) {
    __extends(GuideComboAddScoreTrait, _super);
    function GuideComboAddScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideComboAddScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideComboAddScoreTrait.prototype.onScoreMod_set1stComboScr = function (t, r) {
        r({
            returnVal: t.args[0],
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    GuideComboAddScoreTrait.traitKey = "GuideComboAddScore";
    GuideComboAddScoreTrait = __decorate([
        mj.trait,
        mj.class("GuideComboAddScoreTrait")
    ], GuideComboAddScoreTrait);
    return GuideComboAddScoreTrait;
}(Trait_1.default));
exports.default = GuideComboAddScoreTrait;

cc._RF.pop();
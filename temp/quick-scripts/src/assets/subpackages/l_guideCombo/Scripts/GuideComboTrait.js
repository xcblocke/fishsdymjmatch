"use strict";
cc._RF.push(module, 'eed9d/qmqNKYpIUaSd5Mbz0', 'GuideComboTrait');
// subpackages/l_guideCombo/Scripts/GuideComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GuideComboTrait = /** @class */ (function (_super) {
    __extends(GuideComboTrait, _super);
    function GuideComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideComboTrait.prototype.onComboChk_canShowCombo = function (t, r) {
        var e = t.ins, o = e.context.getGameData(), n = o.getLevelId(), i = o.getComboNum(), a = e.getShowLimit();
        if (1 === n && i >= a) {
            r({
                returnVal: true,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    GuideComboTrait.traitKey = "GuideCombo";
    GuideComboTrait = __decorate([
        mj.trait,
        mj.class("GuideComboTrait")
    ], GuideComboTrait);
    return GuideComboTrait;
}(Trait_1.default));
exports.default = GuideComboTrait;

cc._RF.pop();
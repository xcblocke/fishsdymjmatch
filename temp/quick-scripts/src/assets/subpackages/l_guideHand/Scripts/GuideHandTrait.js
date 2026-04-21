"use strict";
cc._RF.push(module, 'f942cQ9dEdCD4CQEmzJ8Wxg', 'GuideHandTrait');
// subpackages/l_guideHand/Scripts/GuideHandTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideHandTrait = /** @class */ (function (_super) {
    __extends(GuideHandTrait, _super);
    function GuideHandTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideHandTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideHandTrait.prototype.onGuideBhv_start = function (t, e) {
        var r = t.args[0];
        if (r && r.data) {
            var n = mj.getClassByName("GuideTrait");
            if (n && n.getInstance() && true === n.getInstance().eventEnabled) {
                if (n.getInstance().guideStep >= this._traitData.hideHandFromStep - 1) {
                    r.data.showHand = false;
                    e();
                    return;
                }
            }
            e();
        }
        else
            e();
    };
    GuideHandTrait.traitKey = "GuideHand";
    GuideHandTrait = __decorate([
        mj.trait,
        mj.class("GuideHandTrait")
    ], GuideHandTrait);
    return GuideHandTrait;
}(Trait_1.default));
exports.default = GuideHandTrait;

cc._RF.pop();
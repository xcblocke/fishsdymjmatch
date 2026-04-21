"use strict";
cc._RF.push(module, '156a9JUWRBPzq1bbFp7rgy8', 'GuideDescTrait');
// subpackages/l_guideDesc/Scripts/GuideDescTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideDescTrait = /** @class */ (function (_super) {
    __extends(GuideDescTrait, _super);
    function GuideDescTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideDescTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideDescTrait.prototype.onGuideUI_onLoad = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            var o = cc.find("nodeTip", r.node);
            o && cc.isValid(o) && (o.active = false);
            e();
        }
        else
            e();
    };
    GuideDescTrait.traitKey = "GuideDesc";
    GuideDescTrait = __decorate([
        mj.trait,
        mj.class("GuideDescTrait")
    ], GuideDescTrait);
    return GuideDescTrait;
}(Trait_1.default));
exports.default = GuideDescTrait;

cc._RF.pop();
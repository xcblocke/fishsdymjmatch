"use strict";
cc._RF.push(module, 'df6ae2uqJ1GwpUr9160kzqI', 'GuideSkipTrait');
// subpackages/l_guideSkip/Scripts/GuideSkipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideSkipTrait = /** @class */ (function (_super) {
    __extends(GuideSkipTrait, _super);
    function GuideSkipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideSkipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideSkipTrait.prototype.onGuideUI_onLoad = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            var i = cc.find("skip/btnSkip", r.node);
            i && cc.isValid(i) && (i.active = false);
            e();
        }
        else
            e();
    };
    GuideSkipTrait.traitKey = "GuideSkip";
    GuideSkipTrait = __decorate([
        mj.trait,
        mj.class("GuideSkipTrait")
    ], GuideSkipTrait);
    return GuideSkipTrait;
}(Trait_1.default));
exports.default = GuideSkipTrait;

cc._RF.pop();
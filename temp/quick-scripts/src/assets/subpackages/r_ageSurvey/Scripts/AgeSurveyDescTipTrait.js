"use strict";
cc._RF.push(module, '0605c0WGHhKwoi29kanJ55L', 'AgeSurveyDescTipTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyDescTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AgeSurveyDescTipTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyDescTipTrait, _super);
    function AgeSurveyDescTipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyDescTipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AgeSurveyDescTipTrait.prototype.onAgeSurveyView_onLoad = function (t, e) {
        var r = t.ins;
        if (r && r.node) {
            var o = r.node.getChildByName("content_node");
            if (o) {
                var i = o.getChildByName("desc_tip"), n = o.getChildByName("desc");
                if (i && n) {
                    i.active = true;
                    var a = n.getContentSize(), s = a.height - 42;
                    n.setContentSize(a.width, s);
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    AgeSurveyDescTipTrait.traitKey = "AgeSurveyDescTip";
    AgeSurveyDescTipTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyDescTipTrait")
    ], AgeSurveyDescTipTrait);
    return AgeSurveyDescTipTrait;
}(Trait_1.default));
exports.default = AgeSurveyDescTipTrait;

cc._RF.pop();
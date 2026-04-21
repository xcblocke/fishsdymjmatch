"use strict";
cc._RF.push(module, '8423fzNn1RDno2VEbXSIFjc', 'GuideModel');
// subpackages/l_guide/Scripts/GuideModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../Scripts/framework/data/Model");
var GuideModel = /** @class */ (function (_super) {
    __extends(GuideModel, _super);
    function GuideModel() {
        var _this = _super.call(this) || this;
        _this.localData.inGuide = false;
        _this.localData.guideStep = 0;
        return _this;
    }
    GuideModel = __decorate([
        mj.class("GuideModel")
    ], GuideModel);
    return GuideModel;
}(Model_1.default));
exports.default = GuideModel;

cc._RF.pop();
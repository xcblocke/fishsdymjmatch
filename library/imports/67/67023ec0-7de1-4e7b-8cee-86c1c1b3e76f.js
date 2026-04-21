"use strict";
cc._RF.push(module, '670237AfeFOe4zuhsHBs+dv', 'OutlightConfigTrait');
// subpackages/l_outlightConfig/Scripts/OutlightConfigTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Outlight_1 = require("../../../Scripts/Outlight");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var OutlightConfigTrait = /** @class */ (function (_super) {
    __extends(OutlightConfigTrait, _super);
    function OutlightConfigTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlightConfigTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        Outlight_1.default.isBakedDefault = this._traitData.isBakedDefault;
        Outlight_1.default.isLimitLowEndDevice = this._traitData.isLimitLowEndDevice;
    };
    OutlightConfigTrait.traitKey = "OutlightConfig";
    OutlightConfigTrait = __decorate([
        mj.trait,
        mj.class("OutlightConfigTrait")
    ], OutlightConfigTrait);
    return OutlightConfigTrait;
}(Trait_1.default));
exports.default = OutlightConfigTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '95b84anUghBf4qVMvSFiwEH', 'DianZanMatch1Trait');
// subpackages/l_dianzan/Scripts/DianZanMatch1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DianZanTrait_1 = require("./DianZanTrait");
var DianZanMatch1Trait = /** @class */ (function (_super) {
    __extends(DianZanMatch1Trait, _super);
    function DianZanMatch1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DianZanMatch1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DianZanMatch1Trait.prototype._checkDianZan = function () {
        return 1 == this._beforeClearMatchNum && this._afterClearMatchNum >= 1;
    };
    DianZanMatch1Trait.traitKey = "DianZanMatch1";
    DianZanMatch1Trait = __decorate([
        mj.trait,
        mj.class("DianZanMatch1Trait")
    ], DianZanMatch1Trait);
    return DianZanMatch1Trait;
}(DianZanTrait_1.default));
exports.default = DianZanMatch1Trait;

cc._RF.pop();
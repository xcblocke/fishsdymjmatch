"use strict";
cc._RF.push(module, '474e965ROxK+p1jmJbPBLm9', 'DDA1Trait');
// subpackages/l_dda1/Scripts/DDA1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DDA1Trait = /** @class */ (function (_super) {
    __extends(DDA1Trait, _super);
    function DDA1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDA1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DDA1Trait.prototype.getStrategy = function () {
        return this.traitData.strategy || {
            x: 3
        };
    };
    DDA1Trait.prototype.onDCMgr_setDDASgy = function (t, e) {
        t.ins.ddaLayer.addStrategy({
            name: "DDA1",
            param: this.getStrategy()
        });
        e();
    };
    DDA1Trait.traitKey = "DDA1";
    DDA1Trait = __decorate([
        mj.trait,
        mj.class("DDA1Trait")
    ], DDA1Trait);
    return DDA1Trait;
}(Trait_1.default));
exports.default = DDA1Trait;

cc._RF.pop();
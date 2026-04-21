"use strict";
cc._RF.push(module, '85997n11A9LLaV+q2gWu24V', 'DDA2Trait');
// subpackages/l_dda2/Scripts/DDA2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DDA2Trait = /** @class */ (function (_super) {
    __extends(DDA2Trait, _super);
    function DDA2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDA2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DDA2Trait.prototype.getStrategy = function () {
        return this.traitData.strategy || {
            x: 3
        };
    };
    DDA2Trait.prototype.onDCMgr_setDDASgy = function (t, e) {
        t.ins.ddaLayer.addStrategy({
            name: "DDA2",
            param: this.getStrategy()
        });
        e();
    };
    DDA2Trait.traitKey = "DDA2";
    DDA2Trait = __decorate([
        mj.trait,
        mj.class("DDA2Trait")
    ], DDA2Trait);
    return DDA2Trait;
}(Trait_1.default));
exports.default = DDA2Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '79aca9u/tBGCZxAnfJ/45tA', 'DDA4Trait');
// subpackages/l_dda4/Scripts/DDA4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DDA4Trait = /** @class */ (function (_super) {
    __extends(DDA4Trait, _super);
    function DDA4Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDA4Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DDA4Trait.prototype.getStrategy = function () {
        return this.traitData.strategy || {
            x: 3,
            y: 240,
            z: 10
        };
    };
    DDA4Trait.prototype.onDCMgr_setDDASgy = function (t, e) {
        t.ins.ddaLayer.addStrategy({
            name: "DDA4",
            param: this.getStrategy()
        });
        e();
    };
    DDA4Trait.traitKey = "DDA4";
    DDA4Trait = __decorate([
        mj.trait,
        mj.class("DDA4Trait")
    ], DDA4Trait);
    return DDA4Trait;
}(Trait_1.default));
exports.default = DDA4Trait;

cc._RF.pop();
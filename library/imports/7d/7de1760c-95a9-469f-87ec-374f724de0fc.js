"use strict";
cc._RF.push(module, '7de17YMlalGn4fsN09yTeD8', 'BombBrokenSpineTrait');
// subpackages/l_bombbrokenspine/Scripts/BombBrokenSpineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BombBrokenSpineTrait = /** @class */ (function (_super) {
    __extends(BombBrokenSpineTrait, _super);
    function BombBrokenSpineTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombBrokenSpineTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BombBrokenSpineTrait.prototype.onBombBhv_spineBundleName = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.jump,
            isBreak: true,
            returnVal: {
                name: "spine/broken/gameplay_props",
                bundleName: "l_bombbrokenspine"
            }
        });
    };
    BombBrokenSpineTrait.prototype.onBombBhv_moveTime = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.jump,
            isBreak: true,
            returnVal: 0.233
        });
    };
    BombBrokenSpineTrait.traitKey = "BombBrokenSpine";
    BombBrokenSpineTrait = __decorate([
        mj.trait,
        mj.class("BombBrokenSpineTrait")
    ], BombBrokenSpineTrait);
    return BombBrokenSpineTrait;
}(Trait_1.default));
exports.default = BombBrokenSpineTrait;

cc._RF.pop();
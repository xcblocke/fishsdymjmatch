"use strict";
cc._RF.push(module, '25e8aVHaFhN6L1/Emklv/8E', 'FixCloseTouchMoveTrait');
// subpackages/l_fixtouchmove/Scripts/FixCloseTouchMoveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FixCloseTouchMoveTrait = /** @class */ (function (_super) {
    __extends(FixCloseTouchMoveTrait, _super);
    function FixCloseTouchMoveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixCloseTouchMoveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixCloseTouchMoveTrait.prototype.onIptBTchEnd_isFixNotMove = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    FixCloseTouchMoveTrait.traitKey = "FixCloseTouchMove";
    FixCloseTouchMoveTrait = __decorate([
        mj.trait,
        mj.class("FixCloseTouchMoveTrait")
    ], FixCloseTouchMoveTrait);
    return FixCloseTouchMoveTrait;
}(Trait_1.default));
exports.default = FixCloseTouchMoveTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'cd44dlfGo1JLLwF4U0E/pkx', 'FixTileTypeModifierTrait');
// subpackages/l_fixtiletypemodifier/Scripts/FixTileTypeModifierTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FixTileTypeModifierTrait = /** @class */ (function (_super) {
    __extends(FixTileTypeModifierTrait, _super);
    function FixTileTypeModifierTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixTileTypeModifierTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixTileTypeModifierTrait.prototype.onTileTyModiy_isUserFix = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
        });
    };
    FixTileTypeModifierTrait.traitKey = "FixTileTypeModifier";
    FixTileTypeModifierTrait = __decorate([
        mj.trait,
        mj.class("FixTileTypeModifierTrait")
    ], FixTileTypeModifierTrait);
    return FixTileTypeModifierTrait;
}(Trait_1.default));
exports.default = FixTileTypeModifierTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'd65dc4Sl/FJvrxK7Anyoxgm', 'FlowerCardShowClearTrait');
// subpackages/l_flowerCardShowClear/Scripts/FlowerCardShowClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerCardShowClearTrait = /** @class */ (function (_super) {
    __extends(FlowerCardShowClearTrait, _super);
    function FlowerCardShowClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowerCardShowClearTrait.prototype.onFlowerCS_isOpenCEff = function (r, t) {
        if (1 !== this._traitData.isOpen) {
            t();
        }
        else {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
    };
    FlowerCardShowClearTrait.traitKey = "FlowerCardShowClear";
    FlowerCardShowClearTrait = __decorate([
        mj.trait,
        mj.class("FlowerCardShowClearTrait")
    ], FlowerCardShowClearTrait);
    return FlowerCardShowClearTrait;
}(Trait_1.default));
exports.default = FlowerCardShowClearTrait;

cc._RF.pop();
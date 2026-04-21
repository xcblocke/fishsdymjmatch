"use strict";
cc._RF.push(module, '255b2ObkxBFsqBN04IsdUHC', 'FlowerBaseSkinTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerBaseSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FlowerBaseSkinTrait = /** @class */ (function (_super) {
    __extends(FlowerBaseSkinTrait, _super);
    function FlowerBaseSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._enable = true;
        return _this;
    }
    FlowerBaseSkinTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._enable = false !== this._traitData.enable;
    };
    FlowerBaseSkinTrait.prototype.onFlowerCS_enableBase = function (e, t) {
        t();
    };
    FlowerBaseSkinTrait.traitKey = "FlowerBaseSkin";
    FlowerBaseSkinTrait = __decorate([
        mj.trait,
        mj.class("FlowerBaseSkinTrait")
    ], FlowerBaseSkinTrait);
    return FlowerBaseSkinTrait;
}(Trait_1.default));
exports.default = FlowerBaseSkinTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '9baa2finiVNYZRfzCWtFjpg', 'FlowerDrawModeTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerDrawModeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerCardSeriesTrait_1 = require("./FlowerCardSeriesTrait");
var FlowerDrawModeTrait = /** @class */ (function (_super) {
    __extends(FlowerDrawModeTrait, _super);
    function FlowerDrawModeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mode = FlowerCardSeriesTrait_1.EFlowerDrawMode.Sequence;
        return _this;
    }
    FlowerDrawModeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._mode = this._traitData.mode || FlowerCardSeriesTrait_1.EFlowerDrawMode.Sequence;
    };
    FlowerDrawModeTrait.prototype.onFlowerCS_drawMode = function (e, t) {
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._mode
        });
    };
    FlowerDrawModeTrait.traitKey = "FlowerDrawMode";
    FlowerDrawModeTrait = __decorate([
        mj.trait,
        mj.class("FlowerDrawModeTrait")
    ], FlowerDrawModeTrait);
    return FlowerDrawModeTrait;
}(Trait_1.default));
exports.default = FlowerDrawModeTrait;

cc._RF.pop();
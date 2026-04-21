"use strict";
cc._RF.push(module, '92b46m4DQxIGIcDkEgGbGd+', 'MappingTrait');
// subpackages/l_mapping/Scripts/MappingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MappingTrait = /** @class */ (function (_super) {
    __extends(MappingTrait, _super);
    function MappingTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MappingTrait.prototype, "strategies", {
        get: function () {
            return this.traitData.strategies;
        },
        enumerable: false,
        configurable: true
    });
    MappingTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MappingTrait.prototype.onDCMgr_setMapSgy = function (t, e) {
        if (this.strategies) {
            t.args[0] = this.strategies;
            e({
                isBreak: true
            });
        }
        else
            e();
    };
    MappingTrait.traitKey = "Mapping";
    MappingTrait = __decorate([
        mj.trait,
        mj.class("MappingTrait")
    ], MappingTrait);
    return MappingTrait;
}(Trait_1.default));
exports.default = MappingTrait;

cc._RF.pop();
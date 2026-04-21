"use strict";
cc._RF.push(module, '1f7c9URvhFDoIf3L4IbGkMr', 'StaticLevelNextTrait');
// subpackages/l_staticLevel/Scripts/StaticLevelNextTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StaticLevelNextTrait = /** @class */ (function (_super) {
    __extends(StaticLevelNextTrait, _super);
    function StaticLevelNextTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticLevelNextTrait.prototype.onStaticLvTt_isNext = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
        });
    };
    StaticLevelNextTrait.traitKey = "StaticLevelNext";
    StaticLevelNextTrait = __decorate([
        mj.trait,
        mj.class("StaticLevelNextTrait")
    ], StaticLevelNextTrait);
    return StaticLevelNextTrait;
}(Trait_1.default));
exports.default = StaticLevelNextTrait;

cc._RF.pop();
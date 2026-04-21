"use strict";
cc._RF.push(module, '17e89gxEx9B0Yj36eBeUws9', 'NewSeasonShowTrait');
// subpackages/l_journey/Scripts/NewSeasonShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NewSeasonShowTrait = /** @class */ (function (_super) {
    __extends(NewSeasonShowTrait, _super);
    function NewSeasonShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewSeasonShowTrait.prototype.onNewSeason_isVisible = function (t, e) {
        t.args[0].visible = true;
        e();
    };
    NewSeasonShowTrait.traitKey = "NewSeasonShow";
    NewSeasonShowTrait = __decorate([
        mj.trait,
        mj.class("NewSeasonShowTrait")
    ], NewSeasonShowTrait);
    return NewSeasonShowTrait;
}(Trait_1.default));
exports.default = NewSeasonShowTrait;

cc._RF.pop();
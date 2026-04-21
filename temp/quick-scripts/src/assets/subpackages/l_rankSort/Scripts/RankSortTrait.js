"use strict";
cc._RF.push(module, '0347ejPaCZM4rscYepb1MX2', 'RankSortTrait');
// subpackages/l_rankSort/Scripts/RankSortTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RankSortTrait = /** @class */ (function (_super) {
    __extends(RankSortTrait, _super);
    function RankSortTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankSortTrait.prototype.onRankRbtLgc_getTargetIdx = function (t, r) {
        var e = __read(t.args, 4), n = (e[0], e[1], e[2]);
        e[3];
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: n
        });
    };
    RankSortTrait.traitKey = "RankSort";
    RankSortTrait = __decorate([
        mj.trait,
        mj.class("RankSortTrait")
    ], RankSortTrait);
    return RankSortTrait;
}(Trait_1.default));
exports.default = RankSortTrait;

cc._RF.pop();
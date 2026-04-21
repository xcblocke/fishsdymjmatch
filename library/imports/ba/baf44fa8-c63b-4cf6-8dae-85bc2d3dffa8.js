"use strict";
cc._RF.push(module, 'baf44+oxjtM9o2uhbwtPf+o', 'RollCardGenCountTrait');
// subpackages/l_rollcount/Scripts/RollCardGenCountTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RollCardGenCountTrait = /** @class */ (function (_super) {
    __extends(RollCardGenCountTrait, _super);
    function RollCardGenCountTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCardGenCountTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RollCardGenCountTrait.prototype.onRollCardType_getPCount = function (t, r) {
        var e = t.args[0].gameType;
        if (e === GameTypeEnums_1.MjGameType.Normal || e === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var o = t.beforReturnVal + this._traitData.addCount;
            r({
                returnVal: o = Math.max(1, o)
            });
        }
        else
            r();
    };
    RollCardGenCountTrait.traitKey = "RollCardGenCount";
    RollCardGenCountTrait = __decorate([
        mj.trait,
        mj.class("RollCardGenCountTrait")
    ], RollCardGenCountTrait);
    return RollCardGenCountTrait;
}(Trait_1.default));
exports.default = RollCardGenCountTrait;

cc._RF.pop();
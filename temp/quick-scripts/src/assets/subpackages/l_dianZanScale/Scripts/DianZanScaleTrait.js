"use strict";
cc._RF.push(module, '95011JmpXRGmo8CURW6pGn3', 'DianZanScaleTrait');
// subpackages/l_dianZanScale/Scripts/DianZanScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DianZanScaleTrait = /** @class */ (function (_super) {
    __extends(DianZanScaleTrait, _super);
    function DianZanScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DianZanScaleTrait.prototype.onDianZanBhv_getScale = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Tile2Normal) {
            var r = (t.args && t.args.length > 0 ? t.args[0] : 1) * this.traitData.scale;
            e({
                returnType: TraitCallbackReturnType.jump,
                returnVal: r
            });
        }
        else
            e();
    };
    DianZanScaleTrait.traitKey = "DianZanScale";
    DianZanScaleTrait = __decorate([
        mj.trait,
        mj.class("DianZanScaleTrait")
    ], DianZanScaleTrait);
    return DianZanScaleTrait;
}(Trait_1.default));
exports.default = DianZanScaleTrait;

cc._RF.pop();
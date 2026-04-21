"use strict";
cc._RF.push(module, '3a0aa/w+0ZLIJ4H3NCIFwXp', 'CloseDaxiaoByLayerCountTrait');
// subpackages/l_closedaxiaobylayercount/Scripts/CloseDaxiaoByLayerCountTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CloseDaxiaoByLayerCountTrait = /** @class */ (function (_super) {
    __extends(CloseDaxiaoByLayerCountTrait, _super);
    function CloseDaxiaoByLayerCountTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseDaxiaoByLayerCountTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CloseDaxiaoByLayerCountTrait.prototype.onDaxiaoCardType_isGen = function (t, e) {
        var r;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Tile2Normal) {
            var o = t.args[0], n = this._traitData.maxLayerIndex || 999;
            if (((null === (r = null == o ? void 0 : o.getTileMapObject()) || void 0 === r ? void 0 : r.maxLayerIndex) + 1 || 0) >= n) {
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    CloseDaxiaoByLayerCountTrait.traitKey = "CloseDaxiaoByLayerCount";
    CloseDaxiaoByLayerCountTrait = __decorate([
        mj.trait,
        mj.class("CloseDaxiaoByLayerCountTrait")
    ], CloseDaxiaoByLayerCountTrait);
    return CloseDaxiaoByLayerCountTrait;
}(Trait_1.default));
exports.default = CloseDaxiaoByLayerCountTrait;

cc._RF.pop();
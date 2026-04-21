"use strict";
cc._RF.push(module, '28596EjYC5Byrq6tcFKmcDm', 'WatchAdGetPropNumTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var WatchAdGetPropNumTrait = /** @class */ (function (_super) {
    __extends(WatchAdGetPropNumTrait, _super);
    function WatchAdGetPropNumTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WatchAdGetPropNumTrait.prototype.onWatchAdCtrl_itemNum = function (t, e) {
        var r, o, i, n, s;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var u, d = t.ins.getPropType(), h = null !== (o = null === (r = this.traitData) || void 0 === r ? void 0 : r.nums) && void 0 !== o ? o : {};
            u = d === WatchAdGetPropView_1.WatchAdGetPropType.shuffle ? null !== (i = h.shuffle) && void 0 !== i ? i : 1 : d === WatchAdGetPropView_1.WatchAdGetPropType.hitTips ? null !== (n = h.hitTips) && void 0 !== n ? n : 1 : null !== (s = h.revert) && void 0 !== s ? s : 1;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: u
            });
        }
        else
            e();
    };
    WatchAdGetPropNumTrait.traitKey = "WatchAdGetPropNum";
    WatchAdGetPropNumTrait = __decorate([
        mj.trait,
        mj.class("WatchAdGetPropNumTrait")
    ], WatchAdGetPropNumTrait);
    return WatchAdGetPropNumTrait;
}(Trait_1.default));
exports.default = WatchAdGetPropNumTrait;

cc._RF.pop();
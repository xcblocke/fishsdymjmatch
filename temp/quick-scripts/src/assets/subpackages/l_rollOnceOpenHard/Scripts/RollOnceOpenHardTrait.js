"use strict";
cc._RF.push(module, '9b880gyK/FINIyiF4hroOEq', 'RollOnceOpenHardTrait');
// subpackages/l_rollOnceOpenHard/Scripts/RollOnceOpenHardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var RollOnceOpenHardTrait = /** @class */ (function (_super) {
    __extends(RollOnceOpenHardTrait, _super);
    function RollOnceOpenHardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollOnceOpenHardTrait.prototype.onRollOnceOpen_isOpened = function (e, t) {
        var r, o, i, n, a, l, p, d, f, v = null === (r = e.args) || void 0 === r ? void 0 : r[0], y = null === (o = e.args) || void 0 === o ? void 0 : o[1];
        if (void 0 !== v && void 0 !== y) {
            if ((null !== (p = null === (l = null === (a = null === (n = null === (i = UserModel_1.default.getInstance()) || void 0 === i ? void 0 : i.getGameDataByGameType) || void 0 === n ? void 0 : n.call(i, GameTypeEnums_1.MjGameType.Normal)) || void 0 === a ? void 0 : a.getLevelId) || void 0 === l ? void 0 : l.call(a)) && void 0 !== p ? p : 0) >= (Number(null !== (f = null === (d = this._traitData) || void 0 === d ? void 0 : d.level) && void 0 !== f ? f : 20) || 20) && this.isTypeHardLevel(v, y)) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
                return;
            }
            t();
        }
        else
            t();
    };
    RollOnceOpenHardTrait.prototype.isTypeHardLevel = function (e, t) {
        return e === GameTypeEnums_1.MjGameType.Travel ? TravelGameModel_1.default.getInstance().isHardLevel(t) : ExtractTool_1.default.getInstance().isHardLevel(t);
    };
    RollOnceOpenHardTrait.traitKey = "RollOnceOpenHard";
    RollOnceOpenHardTrait = __decorate([
        mj.trait,
        mj.class("RollOnceOpenHardTrait")
    ], RollOnceOpenHardTrait);
    return RollOnceOpenHardTrait;
}(Trait_1.default));
exports.default = RollOnceOpenHardTrait;

cc._RF.pop();
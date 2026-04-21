"use strict";
cc._RF.push(module, '6e91fzwJTJDc5UakMxsVaop', 'PrevRwdComboFcOnlyTrait');
// subpackages/l_prevRwdComboFcOnly/Scripts/PrevRwdComboFcOnlyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var PrevRwdComboFcOnlyTrait = /** @class */ (function (_super) {
    __extends(PrevRwdComboFcOnlyTrait, _super);
    function PrevRwdComboFcOnlyTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._prevHadRewardCombo = false;
        return _this;
    }
    PrevRwdComboFcOnlyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PrevRwdComboFcOnlyTrait.prototype.onDGameEnd_adjust = function (e, r) {
        var t, o, n, a, l, c = UserModel_1.default.getInstance().getCurrentGameType();
        if (c === GameTypeEnums_1.MjGameType.Normal || c === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var s = null === (t = e.args) || void 0 === t ? void 0 : t[2];
            if (null == s ? void 0 : s.win) {
                var p = null === (o = e.args) || void 0 === o ? void 0 : o[1], d = true === (null === (l = null === (a = null === (n = null == p ? void 0 : p.getGameData) || void 0 === n ? void 0 : n.call(p)) || void 0 === a ? void 0 : a.getHasTriggeredRewardCombo) || void 0 === l ? void 0 : l.call(a));
                this._prevHadRewardCombo = d;
                r();
            }
            else
                r();
        }
        else
            r();
    };
    PrevRwdComboFcOnlyTrait.prototype.onRwdComboChk_sTriNow = function (e, r) {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        if (t !== GameTypeEnums_1.MjGameType.Normal && t !== GameTypeEnums_1.MjGameType.Tile2Normal || !this._prevHadRewardCombo) {
            r();
        }
        else {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
    };
    PrevRwdComboFcOnlyTrait.traitKey = "PrevRwdComboFcOnly";
    PrevRwdComboFcOnlyTrait = __decorate([
        mj.trait,
        mj.class("PrevRwdComboFcOnlyTrait")
    ], PrevRwdComboFcOnlyTrait);
    return PrevRwdComboFcOnlyTrait;
}(Trait_1.default));
exports.default = PrevRwdComboFcOnlyTrait;

cc._RF.pop();
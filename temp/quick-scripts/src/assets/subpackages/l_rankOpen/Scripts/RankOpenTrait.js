"use strict";
cc._RF.push(module, 'b7169q55UZLgLc4ebdcAi0h', 'RankOpenTrait');
// subpackages/l_rankOpen/Scripts/RankOpenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankOpenTrait = /** @class */ (function (_super) {
    __extends(RankOpenTrait, _super);
    function RankOpenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankOpenTrait_1 = RankOpenTrait;
    RankOpenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankOpenTrait.prototype.getRankUnlockLevel = function () {
        var t, e;
        return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : RankOpenTrait_1.DEFAULT_RANK_LEVEL;
    };
    RankOpenTrait.prototype.getCurrentLevel = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId();
    };
    RankOpenTrait.prototype.isRankUnlocked = function () {
        var t = this.getCurrentLevel(), e = this.getRankUnlockLevel();
        return 0 === e || t > e;
    };
    RankOpenTrait.prototype.onRankTrait_getLimitLv = function (t, e) {
        var r = this.getRankUnlockLevel();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RankOpenTrait.prototype.onRankModel_getUnlockLevel = function (t, e) {
        var r = this.getRankUnlockLevel();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RankOpenTrait.prototype.onHallRankBLockTt_unlockLv = function (t, e) {
        var r = this.getRankUnlockLevel();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    var RankOpenTrait_1;
    RankOpenTrait.traitKey = "RankOpen";
    RankOpenTrait.DEFAULT_RANK_LEVEL = 10;
    __decorate([
        mj.traitEvent("RankOpenTrait_getLv")
    ], RankOpenTrait.prototype, "getRankUnlockLevel", null);
    __decorate([
        mj.traitEvent("RankOpenTrait_isUnlock")
    ], RankOpenTrait.prototype, "isRankUnlocked", null);
    RankOpenTrait = RankOpenTrait_1 = __decorate([
        mj.trait,
        mj.class("RankOpenTrait")
    ], RankOpenTrait);
    return RankOpenTrait;
}(Trait_1.default));
exports.default = RankOpenTrait;

cc._RF.pop();
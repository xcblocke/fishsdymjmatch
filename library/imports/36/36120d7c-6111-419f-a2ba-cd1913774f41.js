"use strict";
cc._RF.push(module, '3612018YRFBn6K6zRkTd09B', 'RankCardClearEffTrait');
// subpackages/r_rankCardClearEff/Scripts/RankCardClearEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankCardClearEffTrait = /** @class */ (function (_super) {
    __extends(RankCardClearEffTrait, _super);
    function RankCardClearEffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankCardClearEffTrait_1 = RankCardClearEffTrait;
    RankCardClearEffTrait.prototype.onRankSpCardEff_clearEff = function (e, t) {
        var a = UserModel_1.default.getInstance().getRankCardResName();
        if (a) {
            var n = a.split("_");
            if (0 != n.length) {
                var i = "in_" + n[n.length - 1];
                BaseSpine_1.default.create("spine/gameplay_elimination_specialCard", i, 1, null, true, RankCardClearEffTrait_1.BundleName).node.parent = e.ins.node;
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
            }
            else
                t();
        }
        else
            t();
    };
    RankCardClearEffTrait.prototype.getCollectEffectAudioId = function () {
        return null == this._traitData.collectEff ? GameTypeEnums_1.EAudioID.RankClearCol1 : this._traitData.collectEff;
    };
    RankCardClearEffTrait.prototype.onRankSpCardEff_colEff = function (e, t) {
        mj.audioManager.playEffect(this.getCollectEffectAudioId());
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RankCardClearEffTrait.prototype.onClearBhv_matchAud = function (e, t) {
        if (e.ins._type == TileTypeEnum_1.ETileType.RankCard) {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.RankClearTouch);
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    var RankCardClearEffTrait_1;
    RankCardClearEffTrait.traitKey = "RankCardClearEff";
    RankCardClearEffTrait.BundleName = "r_rankCardClearEff";
    RankCardClearEffTrait = RankCardClearEffTrait_1 = __decorate([
        mj.trait,
        mj.class("RankCardClearEffTrait")
    ], RankCardClearEffTrait);
    return RankCardClearEffTrait;
}(Trait_1.default));
exports.default = RankCardClearEffTrait;

cc._RF.pop();
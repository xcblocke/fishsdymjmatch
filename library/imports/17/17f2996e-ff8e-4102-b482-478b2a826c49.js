"use strict";
cc._RF.push(module, '17f29lu/45BArSCR4sqgmxJ', 'RankAudioOptTrait');
// subpackages/l_rankAudioOpt/Scripts/RankAudioOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankAudioOptTrait = /** @class */ (function (_super) {
    __extends(RankAudioOptTrait, _super);
    function RankAudioOptTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankAudioOptTrait.prototype.onSelectBhv_rankCardAud = function (t, r) {
        t.ins.playNormalAudio();
        r({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RankAudioOptTrait.prototype.onIptTchEnd_rankCardAud = function (t, r) {
        t.ins.playNormalAudio();
        r({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RankAudioOptTrait.prototype.onClearBhv_matchAud = function (t, r) {
        if (t.ins._type != TileTypeEnum_1.ETileType.RankCard)
            r();
        else {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SpecialTouch);
            r({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    RankAudioOptTrait.traitKey = "RankAudioOpt";
    RankAudioOptTrait.BUNDLE_NAME = "l_rankAudioOpt";
    RankAudioOptTrait = __decorate([
        mj.trait,
        mj.class("RankAudioOptTrait")
    ], RankAudioOptTrait);
    return RankAudioOptTrait;
}(Trait_1.default));
exports.default = RankAudioOptTrait;

cc._RF.pop();
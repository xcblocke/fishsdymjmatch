"use strict";
cc._RF.push(module, '8df40GXtJND5oICMpx7XMZO', 'RankFilterListTrait');
// subpackages/l_rankFilterList/Scripts/RankFilterListTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RankFilterListTrait = /** @class */ (function (_super) {
    __extends(RankFilterListTrait, _super);
    function RankFilterListTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankFilterListTrait.prototype.onRankModel_filterList = function (t, r) {
        var e, n = t.ins;
        r({
            returnVal: ((null === (e = n.localData.rankGameData) || void 0 === e ? void 0 : e.rankList) || []).filter(function (t) {
                return t.score > 0 || n.isMySelf(t.id);
            }),
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    RankFilterListTrait.prototype.onRankItem_updRank = function (t, r) {
        var e = t.ins;
        if (e.isZeroScore() && e.isMySelf()) {
            e.setRankString("-");
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            r();
    };
    RankFilterListTrait.traitKey = "RankFilterList";
    RankFilterListTrait = __decorate([
        mj.trait,
        mj.class("RankFilterListTrait")
    ], RankFilterListTrait);
    return RankFilterListTrait;
}(Trait_1.default));
exports.default = RankFilterListTrait;

cc._RF.pop();
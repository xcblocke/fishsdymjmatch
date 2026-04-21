"use strict";
cc._RF.push(module, 'da673PeMKtPE5zDrt1YjJdg', 'TopOnlyScoreInDailyTrait');
// subpackages/l_topOnlyShowScore/Scripts/TopOnlyScoreInDailyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TopOnlyScoreInDailyTrait = /** @class */ (function (_super) {
    __extends(TopOnlyScoreInDailyTrait, _super);
    function TopOnlyScoreInDailyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyScoreInDailyTrait.prototype.isMatchGameType = function (t) {
        var e, r = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], o = GameTypeEnums_1.MjGameType[t];
        return r.includes(o);
    };
    TopOnlyScoreInDailyTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyScoreInDailyTrait.prototype.onTOSScore_isMatchGType = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (this.isMatchGameType(o)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    TopOnlyScoreInDailyTrait.traitKey = "TopOnlyScoreInDaily";
    TopOnlyScoreInDailyTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyScoreInDailyTrait")
    ], TopOnlyScoreInDailyTrait);
    return TopOnlyScoreInDailyTrait;
}(Trait_1.default));
exports.default = TopOnlyScoreInDailyTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '7d7cbSZl61PXZDMNBQP9NRA', 'TopOnlyScoreInNormalTrait');
// subpackages/l_topOnlyShowScore/Scripts/TopOnlyScoreInNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TopOnlyScoreInNormalTrait = /** @class */ (function (_super) {
    __extends(TopOnlyScoreInNormalTrait, _super);
    function TopOnlyScoreInNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyScoreInNormalTrait.prototype.isMatchGameType = function (t) {
        var e, r = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], o = GameTypeEnums_1.MjGameType[t];
        return r.includes(o);
    };
    TopOnlyScoreInNormalTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyScoreInNormalTrait.prototype.onTOSScore_isMatchGType = function (t, e) {
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
    TopOnlyScoreInNormalTrait.traitKey = "TopOnlyScoreInNormal";
    TopOnlyScoreInNormalTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyScoreInNormalTrait")
    ], TopOnlyScoreInNormalTrait);
    return TopOnlyScoreInNormalTrait;
}(Trait_1.default));
exports.default = TopOnlyScoreInNormalTrait;

cc._RF.pop();
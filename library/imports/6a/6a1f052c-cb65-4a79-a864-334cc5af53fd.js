"use strict";
cc._RF.push(module, '6a1f0Usy2VKeahkM0zFr1P9', 'TopOnlyMatchInDailyTrait');
// subpackages/l_topOnlyShowMatch/Scripts/TopOnlyMatchInDailyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TopOnlyMatchInDailyTrait = /** @class */ (function (_super) {
    __extends(TopOnlyMatchInDailyTrait, _super);
    function TopOnlyMatchInDailyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyMatchInDailyTrait.prototype.isMatchGameType = function (t) {
        var e, i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], a = GameTypeEnums_1.MjGameType[t];
        return i.includes(a);
    };
    TopOnlyMatchInDailyTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyMatchInDailyTrait.prototype.onTOSMatch_isMatchGType = function (t, e) {
        var i, a = null === (i = t.args) || void 0 === i ? void 0 : i[0];
        if (this.isMatchGameType(a)) {
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
    TopOnlyMatchInDailyTrait.traitKey = "TopOnlyMatchInDaily";
    TopOnlyMatchInDailyTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyMatchInDailyTrait")
    ], TopOnlyMatchInDailyTrait);
    return TopOnlyMatchInDailyTrait;
}(Trait_1.default));
exports.default = TopOnlyMatchInDailyTrait;

cc._RF.pop();
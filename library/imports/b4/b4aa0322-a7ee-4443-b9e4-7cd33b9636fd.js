"use strict";
cc._RF.push(module, 'b4aa0Mip+5EQ7nkfNM7ljb9', 'TopOnlyMatchInNormalTrait');
// subpackages/l_topOnlyShowMatch/Scripts/TopOnlyMatchInNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TopOnlyMatchInNormalTrait = /** @class */ (function (_super) {
    __extends(TopOnlyMatchInNormalTrait, _super);
    function TopOnlyMatchInNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyMatchInNormalTrait.prototype.isMatchGameType = function (t) {
        var e, i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], a = GameTypeEnums_1.MjGameType[t];
        return i.includes(a);
    };
    TopOnlyMatchInNormalTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyMatchInNormalTrait.prototype.onTOSMatch_isMatchGType = function (t, e) {
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
    TopOnlyMatchInNormalTrait.traitKey = "TopOnlyMatchInNormal";
    TopOnlyMatchInNormalTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyMatchInNormalTrait")
    ], TopOnlyMatchInNormalTrait);
    return TopOnlyMatchInNormalTrait;
}(Trait_1.default));
exports.default = TopOnlyMatchInNormalTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '4e2e1p9hjNEaaUud5SpQAu8', 'BoardParamRuleNormalTrait');
// subpackages/l_boardParamRule/Scripts/BoardParamRuleNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BoardParamRuleEngine_1 = require("../../../Scripts/BoardParamRuleEngine");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoardParamRuleTrait_1 = require("./BoardParamRuleTrait");
var BoardParamRuleNormalTrait = /** @class */ (function (_super) {
    __extends(BoardParamRuleNormalTrait, _super);
    function BoardParamRuleNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoardParamRuleNormalTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = BoardParamRuleEngine_1.default.getInstance(), a = BoardParamRuleTrait_1.default.extractGroupIds(this._traitData);
        r.addPlayerGroupIds(a);
        e();
    };
    BoardParamRuleNormalTrait.prototype.initEvent = function () {
        var t = [{
                event: "LoginM_enterGame",
                type: 0
            }];
        this._traitData.events = t;
        this.registerEvent(t);
    };
    BoardParamRuleNormalTrait.traitKey = "BoardParamRuleNormal";
    BoardParamRuleNormalTrait = __decorate([
        mj.trait,
        mj.class("BoardParamRuleNormalTrait")
    ], BoardParamRuleNormalTrait);
    return BoardParamRuleNormalTrait;
}(Trait_1.default));
exports.default = BoardParamRuleNormalTrait;

cc._RF.pop();
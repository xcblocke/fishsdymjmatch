"use strict";
cc._RF.push(module, '358451X1mdJBItE/gKp/Wp7', 'BoardParamRuleHardTrait');
// subpackages/l_boardParamRule/Scripts/BoardParamRuleHardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BoardParamRuleEngine_1 = require("../../../Scripts/BoardParamRuleEngine");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoardParamRuleTrait_1 = require("./BoardParamRuleTrait");
var BoardParamRuleHardTrait = /** @class */ (function (_super) {
    __extends(BoardParamRuleHardTrait, _super);
    function BoardParamRuleHardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoardParamRuleHardTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = BoardParamRuleEngine_1.default.getInstance(), a = BoardParamRuleTrait_1.default.extractGroupIds(this._traitData);
        r.addPlayerGroupIds(a);
        e();
    };
    BoardParamRuleHardTrait.prototype.initEvent = function () {
        var t = [{
                event: "LoginM_enterGame",
                type: 0
            }];
        this._traitData.events = t;
        this.registerEvent(t);
    };
    BoardParamRuleHardTrait.traitKey = "BoardParamRuleHard";
    BoardParamRuleHardTrait = __decorate([
        mj.trait,
        mj.class("BoardParamRuleHardTrait")
    ], BoardParamRuleHardTrait);
    return BoardParamRuleHardTrait;
}(Trait_1.default));
exports.default = BoardParamRuleHardTrait;

cc._RF.pop();
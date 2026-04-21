"use strict";
cc._RF.push(module, 'f32e8FiyMVIVrLANpEwgkEC', 'BoardParamRuleEasyTrait');
// subpackages/l_boardParamRule/Scripts/BoardParamRuleEasyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BoardParamRuleEngine_1 = require("../../../Scripts/BoardParamRuleEngine");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoardParamRuleTrait_1 = require("./BoardParamRuleTrait");
var BoardParamRuleEasyTrait = /** @class */ (function (_super) {
    __extends(BoardParamRuleEasyTrait, _super);
    function BoardParamRuleEasyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoardParamRuleEasyTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = BoardParamRuleEngine_1.default.getInstance(), a = BoardParamRuleTrait_1.default.extractGroupIds(this._traitData);
        r.addPlayerGroupIds(a);
        e();
    };
    BoardParamRuleEasyTrait.prototype.initEvent = function () {
        var t = [{
                event: "LoginM_enterGame",
                type: 0
            }];
        this._traitData.events = t;
        this.registerEvent(t);
    };
    BoardParamRuleEasyTrait.traitKey = "BoardParamRuleEasy";
    BoardParamRuleEasyTrait = __decorate([
        mj.trait,
        mj.class("BoardParamRuleEasyTrait")
    ], BoardParamRuleEasyTrait);
    return BoardParamRuleEasyTrait;
}(Trait_1.default));
exports.default = BoardParamRuleEasyTrait;

cc._RF.pop();
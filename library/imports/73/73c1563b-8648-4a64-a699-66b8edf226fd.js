"use strict";
cc._RF.push(module, '73c15Y7hkhKZKaZZrjt8ib9', 'ValentineIntroPopTimeTrait');
// subpackages/l_valentineIntroPopTime/Scripts/ValentineIntroPopTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ValentineIntroPopTimeTrait = /** @class */ (function (_super) {
    __extends(ValentineIntroPopTimeTrait, _super);
    function ValentineIntroPopTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineIntroPopTimeTrait.prototype.onComplexVal_onMsgSetLevel = function (t, e) {
        var r, o, n = t.ins;
        if (null !== (o = null === (r = n.model) || void 0 === r ? void 0 : r.shouldShowIntroPopup) && void 0 !== o && o.call(r)) {
            n.showIntroducePopup();
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ValentineIntroPopTimeTrait.prototype.onVltnIntroVw_goto = function (t, e) {
        var r, o = t.ins;
        if (UserModel_1.default.getInstance().isInGameView()) {
            null === (r = null == o ? void 0 : o.delegate) || void 0 === r || r.close();
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ValentineIntroPopTimeTrait.traitKey = "ValentineIntroPopTime";
    ValentineIntroPopTimeTrait = __decorate([
        mj.trait,
        mj.class("ValentineIntroPopTimeTrait")
    ], ValentineIntroPopTimeTrait);
    return ValentineIntroPopTimeTrait;
}(Trait_1.default));
exports.default = ValentineIntroPopTimeTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'cdc965xcFdJqrhorNayvb5y', 'InputTile2EnterAnimation');
// Scripts/input/InputTile2EnterAnimation.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var EnterAnimationEffect_1 = require("../EnterAnimationEffect");
var InputBase_1 = require("../inputbase/InputBase");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputTile2EnterAnimation = /** @class */ (function (_super) {
    __extends(InputTile2EnterAnimation, _super);
    function InputTile2EnterAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2EnterAnimation.prototype.excute = function () {
        UserModel_1.default.getInstance().isGuideFinished() && this.pushEnterAnimationEffect();
    };
    InputTile2EnterAnimation.prototype.pushEnterAnimationEffect = function () {
        var e = new EnterAnimationEffect_1.EnterAnimationEffect({
            cardLayoutConfig: this.gameContext.getCardLayoutConfig()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root, null, true);
    };
    __decorate([
        mj.traitEvent("IptT2EtAn_excute")
    ], InputTile2EnterAnimation.prototype, "excute", null);
    return InputTile2EnterAnimation;
}(InputBase_1.InputBase));
exports.default = InputTile2EnterAnimation;

cc._RF.pop();
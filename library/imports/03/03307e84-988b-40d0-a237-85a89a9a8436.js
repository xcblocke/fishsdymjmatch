"use strict";
cc._RF.push(module, '033076EmItA0KI3haiamoQ2', 'ValentinePopBtnGoTrait');
// subpackages/l_valentinePopBtnGo/Scripts/ValentinePopBtnGoTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var ValentinePopBtnGoTrait = /** @class */ (function (_super) {
    __extends(ValentinePopBtnGoTrait, _super);
    function ValentinePopBtnGoTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentinePopBtnGoTrait.prototype.onVltnIntroVw_goto = function (t, e) {
        var r = t.ins;
        ControllerManager_1.default.getInstance().pushViewByController("MainGameController", {}, function () {
            var t;
            null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close();
        });
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    ValentinePopBtnGoTrait.prototype.onVltnActVw_goto = function (t, e) {
        var r = t.ins;
        ControllerManager_1.default.getInstance().pushViewByController("MainGameController", {}, function () {
            var t;
            null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close();
        });
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    ValentinePopBtnGoTrait.traitKey = "ValentinePopBtnGo";
    ValentinePopBtnGoTrait = __decorate([
        mj.trait,
        mj.class("ValentinePopBtnGoTrait")
    ], ValentinePopBtnGoTrait);
    return ValentinePopBtnGoTrait;
}(Trait_1.default));
exports.default = ValentinePopBtnGoTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '133fdCJwptMFonfh1V3rBvP', 'FullComboNoWordsTrait');
// subpackages/l_fullComboNoWords/Scripts/FullComboNoWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FullComboNoWordsTrait = /** @class */ (function (_super) {
    __extends(FullComboNoWordsTrait, _super);
    function FullComboNoWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullComboNoWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FullComboNoWordsTrait.prototype.onMotivWdsChk_canShow = function (t, r) {
        var o, e, n, i, a = t.ins, u = null === (e = null === (o = null == a ? void 0 : a.context) || void 0 === o ? void 0 : o.getGameData) || void 0 === e ? void 0 : e.call(o);
        if ((null === (n = null == u ? void 0 : u.getHasTriggeredFullCombo) || void 0 === n ? void 0 : n.call(u)) || (null === (i = null == u ? void 0 : u.getHasTriggeredRewardCombo) || void 0 === i ? void 0 : i.call(u))) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    isShow: false,
                    index: 0
                }
            });
        }
        else {
            r();
        }
    };
    FullComboNoWordsTrait.traitKey = "FullComboNoWords";
    FullComboNoWordsTrait = __decorate([
        mj.trait,
        mj.class("FullComboNoWordsTrait")
    ], FullComboNoWordsTrait);
    return FullComboNoWordsTrait;
}(Trait_1.default));
exports.default = FullComboNoWordsTrait;

cc._RF.pop();
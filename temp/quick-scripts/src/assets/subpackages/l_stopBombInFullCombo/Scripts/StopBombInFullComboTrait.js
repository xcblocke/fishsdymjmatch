"use strict";
cc._RF.push(module, '5d314daMhBNc77oR1kUGyoI', 'StopBombInFullComboTrait');
// subpackages/l_stopBombInFullCombo/Scripts/StopBombInFullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var StopBombInFullComboTrait = /** @class */ (function (_super) {
    __extends(StopBombInFullComboTrait, _super);
    function StopBombInFullComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StopBombInFullComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StopBombInFullComboTrait.prototype.onClrNormHlp_parseBomb = function (t, r) {
        var o, e, n, i = t.ins, a = null == i ? void 0 : i._gameContext, u = null === (o = null == a ? void 0 : a.getGameData) || void 0 === o ? void 0 : o.call(a);
        if ((null === (e = null == u ? void 0 : u.getHasTriggeredFullCombo) || void 0 === e ? void 0 : e.call(u)) || (null === (n = null == u ? void 0 : u.getHasTriggeredRewardCombo) || void 0 === n ? void 0 : n.call(u))) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            r();
        }
    };
    StopBombInFullComboTrait.traitKey = "StopBombInFullCombo";
    StopBombInFullComboTrait = __decorate([
        mj.trait,
        mj.class("StopBombInFullComboTrait")
    ], StopBombInFullComboTrait);
    return StopBombInFullComboTrait;
}(Trait_1.default));
exports.default = StopBombInFullComboTrait;

cc._RF.pop();
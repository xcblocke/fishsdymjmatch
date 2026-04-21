"use strict";
cc._RF.push(module, '7e067fcQtJNOKsrR1SYhX8e', 'FixWinEffectBugTrait');
// subpackages/l_fixWinEffectBug/Scripts/FixWinEffectBugTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FixWinEffectBugTrait = /** @class */ (function (_super) {
    __extends(FixWinEffectBugTrait, _super);
    function FixWinEffectBugTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixWinEffectBugTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixWinEffectBugTrait.prototype.onWinVw_playWiEff = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    FixWinEffectBugTrait.prototype.onWinVw_showWinVw = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Win);
        e();
    };
    FixWinEffectBugTrait.traitKey = "FixWinEffectBug";
    FixWinEffectBugTrait = __decorate([
        mj.trait,
        mj.class("FixWinEffectBugTrait")
    ], FixWinEffectBugTrait);
    return FixWinEffectBugTrait;
}(Trait_1.default));
exports.default = FixWinEffectBugTrait;

cc._RF.pop();
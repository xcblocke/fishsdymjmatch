"use strict";
cc._RF.push(module, '4e262XrN6JP6Z9apmb6wElT', 'FullComboOptimizeTrait');
// subpackages/r_fullComboOptimize/Scripts/FullComboOptimizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FullComboOptimizeTrait = /** @class */ (function (_super) {
    __extends(FullComboOptimizeTrait, _super);
    function FullComboOptimizeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullComboOptimizeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FullComboOptimizeTrait.prototype.onChgFullCombo_getAniCfg = function (t, r) {
        var e, o = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs;
        if (o) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    bundleName: o.comboBundleName || "r_fullCombo_2",
                    spinePath: o.comboSpinePath || "spine/gameplay_perfectCombo"
                }
            });
        }
        else {
            r();
        }
    };
    FullComboOptimizeTrait.traitKey = "FullComboOptimize";
    FullComboOptimizeTrait = __decorate([
        mj.trait,
        mj.class("FullComboOptimizeTrait")
    ], FullComboOptimizeTrait);
    return FullComboOptimizeTrait;
}(Trait_1.default));
exports.default = FullComboOptimizeTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'b38be5ibtxEso+U8DPse/hW', 'FactorRateTrait');
// subpackages/l_factorRate/Scripts/FactorRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FactorRateTrait = /** @class */ (function (_super) {
    __extends(FactorRateTrait, _super);
    function FactorRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FactorRateTrait.prototype.onExtNormLv_getFactorR = function (t, r) {
        var e, o;
        if (this.checkGameMode()) {
            var n = null !== (o = null === (e = this._traitData) || void 0 === e ? void 0 : e.rate) && void 0 !== o ? o : 1;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            r();
    };
    FactorRateTrait.traitKey = "FactorRate";
    FactorRateTrait = __decorate([
        mj.trait,
        mj.class("FactorRateTrait")
    ], FactorRateTrait);
    return FactorRateTrait;
}(ExtractTrait_1.default));
exports.default = FactorRateTrait;

cc._RF.pop();
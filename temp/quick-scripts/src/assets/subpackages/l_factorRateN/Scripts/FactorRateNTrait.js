"use strict";
cc._RF.push(module, '2f753vsxKhM7ZpGLKCHhJ4G', 'FactorRateNTrait');
// subpackages/l_factorRateN/Scripts/FactorRateNTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FactorRateNTrait = /** @class */ (function (_super) {
    __extends(FactorRateNTrait, _super);
    function FactorRateNTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FactorRateNTrait.prototype.onExtNormLv_getFactorRN = function (t, r) {
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
    FactorRateNTrait.traitKey = "FactorRateN";
    FactorRateNTrait = __decorate([
        mj.trait,
        mj.class("FactorRateNTrait")
    ], FactorRateNTrait);
    return FactorRateNTrait;
}(ExtractTrait_1.default));
exports.default = FactorRateNTrait;

cc._RF.pop();
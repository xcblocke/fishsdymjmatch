"use strict";
cc._RF.push(module, '5f2cbQGvXRAAYUS2bKqvmuz', 'SupportMechanismTrait');
// subpackages/l_support/Scripts/SupportMechanismTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SupportMechanismTrait = /** @class */ (function (_super) {
    __extends(SupportMechanismTrait, _super);
    function SupportMechanismTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SupportMechanismTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            patch0301: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0301) && void 0 !== e ? e : 0.7
        };
    };
    SupportMechanismTrait.prototype.onExtNormLv_getPatch0301 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.patch0301;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    SupportMechanismTrait.traitKey = "SupportMechanism";
    SupportMechanismTrait = __decorate([
        mj.trait,
        mj.class("SupportMechanismTrait")
    ], SupportMechanismTrait);
    return SupportMechanismTrait;
}(ExtractTrait_1.default));
exports.default = SupportMechanismTrait;

cc._RF.pop();
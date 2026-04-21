"use strict";
cc._RF.push(module, 'bb0123VHmFCTr36Di22J0Eq', 'PatchTravel3Trait');
// subpackages/l_patchTravel3/Scripts/PatchTravel3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var PatchTravel3Trait = /** @class */ (function (_super) {
    __extends(PatchTravel3Trait, _super);
    function PatchTravel3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatchTravel3Trait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            isOpen: null === (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.isOpen) || void 0 === e || e
        };
    };
    PatchTravel3Trait.prototype.onExtNormLv_isOpenPatch3 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.isOpen;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    PatchTravel3Trait.traitKey = "PatchTravel3";
    PatchTravel3Trait = __decorate([
        mj.trait,
        mj.class("PatchTravel3Trait")
    ], PatchTravel3Trait);
    return PatchTravel3Trait;
}(ExtractTrait_1.default));
exports.default = PatchTravel3Trait;

cc._RF.pop();
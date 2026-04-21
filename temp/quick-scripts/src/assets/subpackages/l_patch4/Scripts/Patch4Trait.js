"use strict";
cc._RF.push(module, 'c6092VAY31AQrCTx2G3ix7L', 'Patch4Trait');
// subpackages/l_patch4/Scripts/Patch4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch4Trait = /** @class */ (function (_super) {
    __extends(Patch4Trait, _super);
    function Patch4Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch4Trait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            isOpen: null === (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.isOpen) || void 0 === e || e
        };
    };
    Patch4Trait.prototype.onExtNormLv_isOpenPatch4 = function (t, r) {
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
    Patch4Trait.traitKey = "Patch4";
    Patch4Trait = __decorate([
        mj.trait,
        mj.class("Patch4Trait")
    ], Patch4Trait);
    return Patch4Trait;
}(ExtractTrait_1.default));
exports.default = Patch4Trait;

cc._RF.pop();
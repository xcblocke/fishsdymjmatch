"use strict";
cc._RF.push(module, 'bf8e3Rght9NMZcSsIN87ad+', 'Patch1Trait');
// subpackages/l_patch1/Scripts/Patch1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch1Trait = /** @class */ (function (_super) {
    __extends(Patch1Trait, _super);
    function Patch1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch1Trait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            isOpen: null === (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.isOpen) || void 0 === e || e
        };
    };
    Patch1Trait.prototype.onExtNormLv_isOpenPatch1 = function (t, r) {
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
    Patch1Trait.traitKey = "Patch1";
    Patch1Trait = __decorate([
        mj.trait,
        mj.class("Patch1Trait")
    ], Patch1Trait);
    return Patch1Trait;
}(ExtractTrait_1.default));
exports.default = Patch1Trait;

cc._RF.pop();
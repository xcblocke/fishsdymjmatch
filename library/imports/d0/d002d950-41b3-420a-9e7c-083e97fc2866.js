"use strict";
cc._RF.push(module, 'd002dlQQbNCCp58CD6X/Chm', 'Patch3Trait');
// subpackages/l_patch3/Scripts/Patch3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch3Trait = /** @class */ (function (_super) {
    __extends(Patch3Trait, _super);
    function Patch3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch3Trait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            isOpen: null === (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.isOpen) || void 0 === e || e
        };
    };
    Patch3Trait.prototype.onExtNormLv_isOpenPatch3 = function (t, r) {
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
    Patch3Trait.traitKey = "Patch3";
    Patch3Trait = __decorate([
        mj.trait,
        mj.class("Patch3Trait")
    ], Patch3Trait);
    return Patch3Trait;
}(ExtractTrait_1.default));
exports.default = Patch3Trait;

cc._RF.pop();
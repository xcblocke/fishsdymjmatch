"use strict";
cc._RF.push(module, '3d3ecYIwFVK+rbRc+lOyrGK', 'Patch2Trait');
// subpackages/l_patch2/Scripts/Patch2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch2Trait = /** @class */ (function (_super) {
    __extends(Patch2Trait, _super);
    function Patch2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch2Trait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            isOpen: null === (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.isOpen) || void 0 === e || e
        };
    };
    Patch2Trait.prototype.onExtNormLv_isOpenPatch2 = function (t, r) {
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
    Patch2Trait.traitKey = "Patch2";
    Patch2Trait = __decorate([
        mj.trait,
        mj.class("Patch2Trait")
    ], Patch2Trait);
    return Patch2Trait;
}(ExtractTrait_1.default));
exports.default = Patch2Trait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'bf0ecU5mglGYoJlK6K3uJjC', 'DuPatchTrait');
// subpackages/l_duPatch/Scripts/DuPatchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DuPatchTrait = /** @class */ (function (_super) {
    __extends(DuPatchTrait, _super);
    function DuPatchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuPatchTrait.prototype.onExtNormLv_getInitDu = function (t, r) {
        if (this.checkGameMode()) {
            var e = this.getInitialDu();
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    DuPatchTrait.prototype.getInitialDu = function () {
        var t, r;
        return null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.initialDu) && void 0 !== r ? r : 400;
    };
    DuPatchTrait.traitKey = "DuPatch";
    DuPatchTrait = __decorate([
        mj.trait,
        mj.class("DuPatchTrait")
    ], DuPatchTrait);
    return DuPatchTrait;
}(ExtractTrait_1.default));
exports.default = DuPatchTrait;

cc._RF.pop();
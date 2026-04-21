"use strict";
cc._RF.push(module, 'b4d320oAD9A3qfjwyoUs9nm', 'SkipStepRamTrait');
// subpackages/l_skipStepRam/Scripts/SkipStepRamTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var SkipStepRamTrait = /** @class */ (function (_super) {
    __extends(SkipStepRamTrait, _super);
    function SkipStepRamTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SkipStepRamTrait.prototype, "ramLimit", {
        get: function () {
            var t, r;
            return null !== (r = null === (t = this.traitData) || void 0 === t ? void 0 : t.ramLimit) && void 0 !== r ? r : 4096;
        },
        enumerable: false,
        configurable: true
    });
    SkipStepRamTrait.prototype.onGameTracker_recordStep = function (t, r) {
        var e = LoginModel_1.default.getInstance().deviceInfo.all_memory;
        if (void 0 !== e && e >= this.ramLimit) {
            r();
        }
        else {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    SkipStepRamTrait.traitKey = "SkipStepRam";
    SkipStepRamTrait = __decorate([
        mj.trait,
        mj.class("SkipStepRamTrait")
    ], SkipStepRamTrait);
    return SkipStepRamTrait;
}(Trait_1.default));
exports.default = SkipStepRamTrait;

cc._RF.pop();
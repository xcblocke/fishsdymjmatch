"use strict";
cc._RF.push(module, 'fa546zm0WlH9LbMWWrxci6/', 'MotivationalWordsTrait');
// subpackages/l_motivationalWords/Scripts/MotivationalWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var MotivationalWordsTrait = /** @class */ (function (_super) {
    __extends(MotivationalWordsTrait, _super);
    function MotivationalWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationalWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            trigMult: this._traitData.trigMult || 3
        };
    };
    MotivationalWordsTrait.prototype.onMotivWdsChk_trigMult = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.trigMult
        });
    };
    MotivationalWordsTrait.traitKey = "MotivationalWords";
    MotivationalWordsTrait = __decorate([
        mj.trait,
        mj.class("MotivationalWordsTrait")
    ], MotivationalWordsTrait);
    return MotivationalWordsTrait;
}(Trait_1.default));
exports.default = MotivationalWordsTrait;

cc._RF.pop();
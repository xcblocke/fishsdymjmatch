"use strict";
cc._RF.push(module, '0e752XE8zNB+Lr8Kn6pHRqp', 'ColdStartAMIntrTrait');
// subpackages/l_coldStartAMIntr/Scripts/ColdStartAMIntrTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ColdStartAMIntrTrait = /** @class */ (function (_super) {
    __extends(ColdStartAMIntrTrait, _super);
    function ColdStartAMIntrTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColdStartAMIntrTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ColdStartAMIntrTrait.prototype.onMainGameCtrl_isAMIntr = function (t, r) {
        r({
            isBreak: true,
            returnVal: false,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ColdStartAMIntrTrait.traitKey = "ColdStartAMIntr";
    ColdStartAMIntrTrait = __decorate([
        mj.trait,
        mj.class("ColdStartAMIntrTrait")
    ], ColdStartAMIntrTrait);
    return ColdStartAMIntrTrait;
}(Trait_1.default));
exports.default = ColdStartAMIntrTrait;

cc._RF.pop();
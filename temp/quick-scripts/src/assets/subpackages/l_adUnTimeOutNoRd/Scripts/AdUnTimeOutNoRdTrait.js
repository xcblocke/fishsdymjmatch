"use strict";
cc._RF.push(module, 'f2997FiMWlG4JsmRQ9uDlks', 'AdUnTimeOutNoRdTrait');
// subpackages/l_adUnTimeOutNoRd/Scripts/AdUnTimeOutNoRdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdUnTimeOutNoRdTrait = /** @class */ (function (_super) {
    __extends(AdUnTimeOutNoRdTrait, _super);
    function AdUnTimeOutNoRdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdUnTimeOutNoRdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdUnTimeOutNoRdTrait.prototype.onAdUnavailCtrl_triggerCB = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    AdUnTimeOutNoRdTrait.traitKey = "AdUnTimeOutNoRd";
    AdUnTimeOutNoRdTrait = __decorate([
        mj.trait,
        mj.class("AdUnTimeOutNoRdTrait")
    ], AdUnTimeOutNoRdTrait);
    return AdUnTimeOutNoRdTrait;
}(Trait_1.default));
exports.default = AdUnTimeOutNoRdTrait;

cc._RF.pop();
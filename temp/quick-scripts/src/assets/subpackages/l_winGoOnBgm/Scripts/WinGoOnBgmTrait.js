"use strict";
cc._RF.push(module, '024caS1PQtPEqa04TfyJAcv', 'WinGoOnBgmTrait');
// subpackages/l_winGoOnBgm/Scripts/WinGoOnBgmTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var WinGoOnBgmTrait = /** @class */ (function (_super) {
    __extends(WinGoOnBgmTrait, _super);
    function WinGoOnBgmTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WinGoOnBgmTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinGoOnBgmTrait.prototype.onWinVw_bgMusic = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    WinGoOnBgmTrait.prototype.onTLWinVw_bgMusic = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    WinGoOnBgmTrait.prototype.onDCWinVw_bgMusic = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    WinGoOnBgmTrait.prototype.onMainGameCtrl_fadeBGMIn = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    WinGoOnBgmTrait.traitKey = "WinGoOnBgm";
    WinGoOnBgmTrait = __decorate([
        mj.trait,
        mj.class("WinGoOnBgmTrait")
    ], WinGoOnBgmTrait);
    return WinGoOnBgmTrait;
}(Trait_1.default));
exports.default = WinGoOnBgmTrait;

cc._RF.pop();
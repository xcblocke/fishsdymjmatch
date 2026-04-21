"use strict";
cc._RF.push(module, 'a06832po4pIAL8i4cUy5aBe', 'LowDevicePerfTrait');
// subpackages/l_lowDevicePerf/Scripts/LowDevicePerfTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var LowDevicePerfTrait = /** @class */ (function (_super) {
    __extends(LowDevicePerfTrait, _super);
    function LowDevicePerfTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowDevicePerfTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowDevicePerfTrait.prototype.onAdMgr_loadVideoAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_loadInterAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_showBanner = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkVideoAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            var r = e.ins;
            r && r.playVideoAdFailed && r.playVideoAdFailed(false);
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkVideoReady = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkInterReady = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.traitKey = "LowDevicePerf";
    LowDevicePerfTrait = __decorate([
        mj.trait,
        mj.class("LowDevicePerfTrait")
    ], LowDevicePerfTrait);
    return LowDevicePerfTrait;
}(Trait_1.default));
exports.default = LowDevicePerfTrait;

cc._RF.pop();
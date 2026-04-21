"use strict";
cc._RF.push(module, '27f44K0zzZDNLDdRR6Rd8bF', 'MemoryLessSkipBannerTrait');
// subpackages/l_memoryLessSkipBanner/Scripts/MemoryLessSkipBannerTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var MemoryLessSkipBannerTrait = /** @class */ (function (_super) {
    __extends(MemoryLessSkipBannerTrait, _super);
    function MemoryLessSkipBannerTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isLowMemoryDevice = false;
        _this._memoryThresholdGB = 7;
        return _this;
    }
    MemoryLessSkipBannerTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._memoryThresholdGB = (null === (r = this._traitData) || void 0 === r ? void 0 : r.memoryThresholdGB) || 7;
        this._checkDeviceMemory();
    };
    MemoryLessSkipBannerTrait.prototype._checkDeviceMemory = function () {
        try {
            var e = mj.sdk.getDeviceInfo(), r = null == e ? void 0 : e.all_memory;
            if (r) {
                Number(r) / 1024 < this._memoryThresholdGB && (this._isLowMemoryDevice = true);
            }
        }
        catch (e) { }
    };
    MemoryLessSkipBannerTrait.prototype.onAdMgr_showBanner = function (e, r) {
        if (this._isLowMemoryDevice) {
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    MemoryLessSkipBannerTrait.traitKey = "MemoryLessSkipBanner";
    MemoryLessSkipBannerTrait = __decorate([
        mj.trait,
        mj.class("MemoryLessSkipBannerTrait")
    ], MemoryLessSkipBannerTrait);
    return MemoryLessSkipBannerTrait;
}(Trait_1.default));
exports.default = MemoryLessSkipBannerTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '04ad5S4nshJ67sRhZNe3WyG', 'VideoAdSkipInterAdTrait');
// subpackages/l_videoAdSkipInterAd/Scripts/VideoAdSkipInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var VideoAdSkipInterAdTrait = /** @class */ (function (_super) {
    __extends(VideoAdSkipInterAdTrait, _super);
    function VideoAdSkipInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skipCount = 0;
        _this._skipPerWatch = 0;
        return _this;
    }
    VideoAdSkipInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._skipPerWatch = this._traitData.skipInterCount || 0;
    };
    VideoAdSkipInterAdTrait.prototype.onAdMgr_videoSuccess = function (t, r) {
        this._skipPerWatch > 0 && (this._skipCount = this._skipPerWatch);
        r();
    };
    VideoAdSkipInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, r) {
        if (this._skipCount <= 0)
            r();
        else {
            this._skipCount--;
            r({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    VideoAdSkipInterAdTrait.traitKey = "VideoAdSkipInterAd";
    VideoAdSkipInterAdTrait = __decorate([
        mj.trait,
        mj.class("VideoAdSkipInterAdTrait")
    ], VideoAdSkipInterAdTrait);
    return VideoAdSkipInterAdTrait;
}(Trait_1.default));
exports.default = VideoAdSkipInterAdTrait;

cc._RF.pop();
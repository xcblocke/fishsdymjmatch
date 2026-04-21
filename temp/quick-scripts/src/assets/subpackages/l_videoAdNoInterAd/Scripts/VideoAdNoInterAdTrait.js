"use strict";
cc._RF.push(module, 'd5a8exWdQxJtKTDXbYLdx+/', 'VideoAdNoInterAdTrait');
// subpackages/l_videoAdNoInterAd/Scripts/VideoAdNoInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var VideoAdNoInterAdTrait = /** @class */ (function (_super) {
    __extends(VideoAdNoInterAdTrait, _super);
    function VideoAdNoInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._videoAdSuccessTime = 0;
        _this._protectionDuration = 90000;
        return _this;
    }
    VideoAdNoInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._protectionDuration = 1000 * this._traitData.protectionDuration;
    };
    VideoAdNoInterAdTrait.prototype.onAdMgr_videoSuccess = function (t, e) {
        this._videoAdSuccessTime = Date.now();
        e();
    };
    VideoAdNoInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (0 !== this._videoAdSuccessTime) {
            var r = Date.now() - this._videoAdSuccessTime;
            if (r < this._protectionDuration) {
                Math.ceil((this._protectionDuration - r) / 1000);
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else
                e();
        }
        else
            e();
    };
    VideoAdNoInterAdTrait.traitKey = "VideoAdNoInterAd";
    VideoAdNoInterAdTrait = __decorate([
        mj.trait,
        mj.class("VideoAdNoInterAdTrait")
    ], VideoAdNoInterAdTrait);
    return VideoAdNoInterAdTrait;
}(Trait_1.default));
exports.default = VideoAdNoInterAdTrait;

cc._RF.pop();
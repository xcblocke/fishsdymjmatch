
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_videoAdSkipInterAd/Scripts/VideoAdSkipInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpZGVvQWRTa2lwSW50ZXJBZC9TY3JpcHRzL1ZpZGVvQWRTa2lwSW50ZXJBZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEO1FBQUEscUVBc0JDO1FBckJDLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsbUJBQWEsR0FBRyxDQUFDLENBQUM7O0lBb0JwQixDQUFDO0lBbEJDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxzREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxvREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7WUFBRSxDQUFDLEVBQUUsQ0FBQzthQUFLO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQWxCTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBSHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FzQjNDO0lBQUQsOEJBQUM7Q0F0QkQsQUFzQkMsQ0F0Qm9ELGVBQUssR0FzQnpEO2tCQXRCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmlkZW9BZFNraXBJbnRlckFkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvQWRTa2lwSW50ZXJBZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfc2tpcENvdW50ID0gMDtcbiAgX3NraXBQZXJXYXRjaCA9IDA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmlkZW9BZFNraXBJbnRlckFkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9za2lwUGVyV2F0Y2ggPSB0aGlzLl90cmFpdERhdGEuc2tpcEludGVyQ291bnQgfHwgMDtcbiAgfVxuICBvbkFkTWdyX3ZpZGVvU3VjY2Vzcyh0LCByKSB7XG4gICAgdGhpcy5fc2tpcFBlcldhdGNoID4gMCAmJiAodGhpcy5fc2tpcENvdW50ID0gdGhpcy5fc2tpcFBlcldhdGNoKTtcbiAgICByKCk7XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKHQsIHIpIHtcbiAgICBpZiAodGhpcy5fc2tpcENvdW50IDw9IDApIHIoKTtlbHNlIHtcbiAgICAgIHRoaXMuX3NraXBDb3VudC0tO1xuICAgICAgcih7XG4gICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adUnavailable/Scripts/AdUnavailablePatchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5260aO6iRlGQ7o7zTe7Ufym', 'AdUnavailablePatchTrait');
// subpackages/l_adUnavailable/Scripts/AdUnavailablePatchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var AdUnavailablePatchTrait = /** @class */ (function (_super) {
    __extends(AdUnavailablePatchTrait, _super);
    function AdUnavailablePatchTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.retryTime = 9;
        return _this;
    }
    AdUnavailablePatchTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.retryTime = this._traitData.retryTime;
    };
    AdUnavailablePatchTrait.prototype.onAdMgr_videoFailed = function (t, e) {
        if (t.ins) {
            var o = t.ins._videoAdPosition;
            if (![DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle, DGameAdShow_1.EAdPosition.InGameMotivation_Hint, DGameAdShow_1.EAdPosition.InGameMotivation_Revive].includes(o)) {
                e({
                    isBreak: true
                });
                return;
            }
        }
        e();
    };
    AdUnavailablePatchTrait.traitKey = "AdUnavailablePatch";
    AdUnavailablePatchTrait = __decorate([
        mj.trait,
        mj.class("AdUnavailablePatchTrait")
    ], AdUnavailablePatchTrait);
    return AdUnavailablePatchTrait;
}(Trait_1.default));
exports.default = AdUnavailablePatchTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkVW5hdmFpbGFibGUvU2NyaXB0cy9BZFVuYXZhaWxhYmxlUGF0Y2hUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHlFQUF3RTtBQUd4RTtJQUFxRCwyQ0FBSztJQUExRDtRQUFBLHFFQW1CQztRQWxCQyxlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQWtCaEIsQ0FBQztJQWhCQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCxxREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQixJQUFJLENBQUMsQ0FBQyx5QkFBVyxDQUFDLDBCQUEwQixFQUFFLHlCQUFXLENBQUMscUJBQXFCLEVBQUUseUJBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakksQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7U0FDRjtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQWhCTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRnBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FtQjNDO0lBQUQsOEJBQUM7Q0FuQkQsQUFtQkMsQ0FuQm9ELGVBQUssR0FtQnpEO2tCQW5Cb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBZFVuYXZhaWxhYmxlUGF0Y2hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRVbmF2YWlsYWJsZVBhdGNoVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHJldHJ5VGltZSA9IDk7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQWRVbmF2YWlsYWJsZVBhdGNoXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJldHJ5VGltZSA9IHRoaXMuX3RyYWl0RGF0YS5yZXRyeVRpbWU7XG4gIH1cbiAgb25BZE1ncl92aWRlb0ZhaWxlZCh0LCBlKSB7XG4gICAgaWYgKHQuaW5zKSB7XG4gICAgICB2YXIgbyA9IHQuaW5zLl92aWRlb0FkUG9zaXRpb247XG4gICAgICBpZiAoIVtFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1Jlc2h1ZmZsZSwgRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9IaW50LCBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1Jldml2ZV0uaW5jbHVkZXMobykpIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=
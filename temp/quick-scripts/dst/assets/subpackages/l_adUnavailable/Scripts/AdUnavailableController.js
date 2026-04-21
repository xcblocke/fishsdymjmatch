
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adUnavailable/Scripts/AdUnavailableController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2c7beano9J4b/ZZIxvkrvd', 'AdUnavailableController');
// subpackages/l_adUnavailable/Scripts/AdUnavailableController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AdUnavailableView_1 = require("./AdUnavailableView");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var AdUnavailableController = /** @class */ (function (_super) {
    __extends(AdUnavailableController, _super);
    function AdUnavailableController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AdUnavailableView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._isRetry = false;
        _this._retryClickTime = 0;
        _this._retryTimer = null;
        return _this;
    }
    AdUnavailableController.prototype.getMessageListeners = function () {
        return {};
    };
    AdUnavailableController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.showViewByNetwork();
    };
    AdUnavailableController.prototype.showViewByNetwork = function () {
        if (CommonUtils_1.isNetworkAvailable()) {
            this.viewDoAction("showRetry");
        }
        else {
            this.viewDoAction("showNoNetwork");
        }
    };
    AdUnavailableController.prototype.refreshForReuse = function (e) {
        _super.prototype.refreshForReuse.call(this, e);
        this._isRetry || this.viewDoAction("showRetry");
    };
    AdUnavailableController.prototype.getLeftTime = function () {
        var t = Date.now(), e = 9000, o = mj.getClassByName("AdUnavailableTrait");
        o && o.getInstance() && (e = 1000 * o.getInstance().retryTime);
        var i = e - (t - this._retryClickTime);
        (i = Math.round(i / 1000)) < 0 && (i = 0);
        return i;
    };
    AdUnavailableController.prototype.retry = function () {
        var t = this;
        if (!this._isRetry) {
            this._isRetry = true;
            this._retryClickTime = Date.now();
            this.viewDoAction("showLoading");
        }
        var e = this.getLeftTime();
        if (e > 0) {
            if (AdManager_1.default.getInstance().checkVideoAdIsReady())
                AdManager_1.default.getInstance().retryPlayVideoAd();
            else {
                AdManager_1.default.getInstance().loadVideoAd();
                this._retryTimer = setTimeout(function () {
                    t.retry();
                }, 1000);
            }
            this.viewDoAction("updateShowLabelNum", e);
        }
        else {
            this.viewDoAction("updateShowLabelNum", 0);
            setTimeout(function () {
                t.close();
                t.triggerVideoAdSuccessCallback();
            }, 0);
        }
    };
    AdUnavailableController.prototype.triggerVideoAdSuccessCallback = function () {
        AdManager_1.default.getInstance().triggerVideoAdSuccessCallback();
    };
    AdUnavailableController.prototype.close = function () {
        _super.prototype.close.call(this);
        if (this._retryTimer) {
            clearTimeout(this._retryTimer);
            this._retryTimer = null;
        }
        this._isRetry = false;
    };
    __decorate([
        mj.traitEvent("AdUnavailCtrl_triggerCB")
    ], AdUnavailableController.prototype, "triggerVideoAdSuccessCallback", null);
    AdUnavailableController = __decorate([
        mj.class("AdUnavailableController")
    ], AdUnavailableController);
    return AdUnavailableController;
}(ViewController_1.default));
exports.default = AdUnavailableController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkVW5hdmFpbGFibGUvU2NyaXB0cy9BZFVuYXZhaWxhYmxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLHlEQUFvRDtBQUNwRCxnRUFBMkQ7QUFDM0QsNEVBQWtGO0FBRWxGO0lBQXFELDJDQUFjO0lBQW5FO1FBQUEscUVBcUVDO1FBcEVDLGVBQVMsR0FBRywyQkFBaUIsQ0FBQztRQUM5QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUFnRXJCLENBQUM7SUEvREMscURBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsNkNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELG1EQUFpQixHQUFqQjtRQUNFLElBQUksZ0NBQWtCLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUNELGlEQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLGlCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsNkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDaEIsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELHVDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNULElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtnQkFBRSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7aUJBQUs7Z0JBQ2pHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM1QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLFVBQVUsQ0FBQztnQkFDVCxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ1YsQ0FBQyxDQUFDLDZCQUE2QixFQUFFLENBQUM7WUFDcEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQsK0RBQTZCLEdBQTdCO1FBQ0UsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFDRCx1Q0FBSyxHQUFMO1FBQ0UsaUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFWRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7Z0ZBR3hDO0lBNURrQix1QkFBdUI7UUFEM0MsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQXFFM0M7SUFBRCw4QkFBQztDQXJFRCxBQXFFQyxDQXJFb0Qsd0JBQWMsR0FxRWxFO2tCQXJFb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgQWRVbmF2YWlsYWJsZVZpZXcgZnJvbSAnLi9BZFVuYXZhaWxhYmxlVmlldyc7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IHsgaXNOZXR3b3JrQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLmNsYXNzKFwiQWRVbmF2YWlsYWJsZUNvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkVW5hdmFpbGFibGVDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBBZFVuYXZhaWxhYmxlVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgX2lzUmV0cnkgPSBmYWxzZTtcbiAgX3JldHJ5Q2xpY2tUaW1lID0gMDtcbiAgX3JldHJ5VGltZXIgPSBudWxsO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuc2hvd1ZpZXdCeU5ldHdvcmsoKTtcbiAgfVxuICBzaG93Vmlld0J5TmV0d29yaygpIHtcbiAgICBpZiAoaXNOZXR3b3JrQXZhaWxhYmxlKCkpIHtcbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1JldHJ5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dOb05ldHdvcmtcIik7XG4gICAgfVxuICB9XG4gIHJlZnJlc2hGb3JSZXVzZShlKSB7XG4gICAgc3VwZXIucmVmcmVzaEZvclJldXNlLmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy5faXNSZXRyeSB8fCB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dSZXRyeVwiKTtcbiAgfVxuICBnZXRMZWZ0VGltZSgpIHtcbiAgICB2YXIgdCA9IERhdGUubm93KCksXG4gICAgICBlID0gOTAwMCxcbiAgICAgIG8gPSBtai5nZXRDbGFzc0J5TmFtZShcIkFkVW5hdmFpbGFibGVUcmFpdFwiKTtcbiAgICBvICYmIG8uZ2V0SW5zdGFuY2UoKSAmJiAoZSA9IDEwMDAgKiBvLmdldEluc3RhbmNlKCkucmV0cnlUaW1lKTtcbiAgICB2YXIgaSA9IGUgLSAodCAtIHRoaXMuX3JldHJ5Q2xpY2tUaW1lKTtcbiAgICAoaSA9IE1hdGgucm91bmQoaSAvIDEwMDApKSA8IDAgJiYgKGkgPSAwKTtcbiAgICByZXR1cm4gaTtcbiAgfVxuICByZXRyeSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLl9pc1JldHJ5KSB7XG4gICAgICB0aGlzLl9pc1JldHJ5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3JldHJ5Q2xpY2tUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd0xvYWRpbmdcIik7XG4gICAgfVxuICAgIHZhciBlID0gdGhpcy5nZXRMZWZ0VGltZSgpO1xuICAgIGlmIChlID4gMCkge1xuICAgICAgaWYgKEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSkgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucmV0cnlQbGF5VmlkZW9BZCgpO2Vsc2Uge1xuICAgICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5sb2FkVmlkZW9BZCgpO1xuICAgICAgICB0aGlzLl9yZXRyeVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdC5yZXRyeSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwidXBkYXRlU2hvd0xhYmVsTnVtXCIsIGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdEb0FjdGlvbihcInVwZGF0ZVNob3dMYWJlbE51bVwiLCAwKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmNsb3NlKCk7XG4gICAgICAgIHQudHJpZ2dlclZpZGVvQWRTdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkVW5hdmFpbEN0cmxfdHJpZ2dlckNCXCIpXG4gIHRyaWdnZXJWaWRlb0FkU3VjY2Vzc0NhbGxiYWNrKCkge1xuICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyaWdnZXJWaWRlb0FkU3VjY2Vzc0NhbGxiYWNrKCk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgc3VwZXIuY2xvc2UuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5fcmV0cnlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JldHJ5VGltZXIpO1xuICAgICAgdGhpcy5fcmV0cnlUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2lzUmV0cnkgPSBmYWxzZTtcbiAgfVxufSJdfQ==
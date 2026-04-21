
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adUnavailable/Scripts/AdUnavailableTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '724fb4bUfdHv7Kgd3JZZyC2', 'AdUnavailableTrait');
// subpackages/l_adUnavailable/Scripts/AdUnavailableTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var AdUnavailableTrait = /** @class */ (function (_super) {
    __extends(AdUnavailableTrait, _super);
    function AdUnavailableTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.retryTime = 9;
        return _this;
    }
    AdUnavailableTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.retryTime = this._traitData.retryTime;
    };
    AdUnavailableTrait.prototype.onAdMgr_videoFailed = function (t, e) {
        if (!t.args[0]) {
            ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
                isShowAction: true
            });
            t.args[1] = true;
        }
        e();
    };
    AdUnavailableTrait.prototype.onAdMgr_videoSuccess = function (t, e) {
        ControllerManager_1.default.getInstance().closeViewByName("AdUnavailableController");
        e();
    };
    AdUnavailableTrait.traitKey = "AdUnavailable";
    AdUnavailableTrait = __decorate([
        mj.trait,
        mj.class("AdUnavailableTrait")
    ], AdUnavailableTrait);
    return AdUnavailableTrait;
}(Trait_1.default));
exports.default = AdUnavailableTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkVW5hdmFpbGFibGUvU2NyaXB0cy9BZFVuYXZhaWxhYmxlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwwRkFBcUY7QUFHckY7SUFBZ0Qsc0NBQUs7SUFBckQ7UUFBQSxxRUFvQkM7UUFuQkMsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUFtQmhCLENBQUM7SUFqQkMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2QsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMseUJBQXlCLEVBQUU7Z0JBQzlFLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsaURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzNFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQWpCTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUZmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FvQnRDO0lBQUQseUJBQUM7Q0FwQkQsQUFvQkMsQ0FwQitDLGVBQUssR0FvQnBEO2tCQXBCb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQWRVbmF2YWlsYWJsZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZFVuYXZhaWxhYmxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHJldHJ5VGltZSA9IDk7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQWRVbmF2YWlsYWJsZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZXRyeVRpbWUgPSB0aGlzLl90cmFpdERhdGEucmV0cnlUaW1lO1xuICB9XG4gIG9uQWRNZ3JfdmlkZW9GYWlsZWQodCwgZSkge1xuICAgIGlmICghdC5hcmdzWzBdKSB7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiQWRVbmF2YWlsYWJsZUNvbnRyb2xsZXJcIiwge1xuICAgICAgICBpc1Nob3dBY3Rpb246IHRydWVcbiAgICAgIH0pO1xuICAgICAgdC5hcmdzWzFdID0gdHJ1ZTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uQWRNZ3JfdmlkZW9TdWNjZXNzKHQsIGUpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlVmlld0J5TmFtZShcIkFkVW5hdmFpbGFibGVDb250cm9sbGVyXCIpO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==
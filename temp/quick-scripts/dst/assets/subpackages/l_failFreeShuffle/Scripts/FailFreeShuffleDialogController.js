
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleDialogController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57bd4NCiRlLYrOpUF6JvIs2', 'FailFreeShuffleDialogController');
// subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleDialogController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var FailFreeShuffleDialogView_1 = require("./FailFreeShuffleDialogView");
var FailFreeShuffleDialogController = /** @class */ (function (_super) {
    __extends(FailFreeShuffleDialogController, _super);
    function FailFreeShuffleDialogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = FailFreeShuffleDialogView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "l_failFreeShuffle";
        _this._onFreeShuffleCallback = null;
        _this._onCloseCallback = null;
        return _this;
    }
    FailFreeShuffleDialogController.prototype.initDependRes = function () { };
    FailFreeShuffleDialogController.prototype.getMessageListeners = function () {
        return {};
    };
    FailFreeShuffleDialogController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10000;
    };
    FailFreeShuffleDialogController.prototype.viewDidShow = function (t) {
        var o = this;
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        if (t) {
            this._onFreeShuffleCallback = t.onFreeShuffle || null;
            this._onCloseCallback = t.onClose || null;
        }
        this.viewDoAction("setCallbacks", {
            onFreeShuffle: function () {
                var e;
                return null === (e = o._onFreeShuffleCallback) || void 0 === e ? void 0 : e.call(o);
            },
            onClose: function () {
                var e;
                return null === (e = o._onCloseCallback) || void 0 === e ? void 0 : e.call(o);
            }
        });
    };
    FailFreeShuffleDialogController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    FailFreeShuffleDialogController = __decorate([
        mj.class("FailFreeShuffleDialogController")
    ], FailFreeShuffleDialogController);
    return FailFreeShuffleDialogController;
}(ViewController_1.default));
exports.default = FailFreeShuffleDialogController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWxGcmVlU2h1ZmZsZS9TY3JpcHRzL0ZhaWxGcmVlU2h1ZmZsZURpYWxvZ0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyx5RUFBb0U7QUFFcEU7SUFBNkQsbURBQWM7SUFBM0U7UUFBQSxxRUFvQ0M7UUFuQ0MsZUFBUyxHQUFHLG1DQUF5QixDQUFDO1FBQ3RDLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLG1CQUFtQixDQUFDO1FBQ2pDLDRCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7O0lBK0IxQixDQUFDO0lBOUJDLHVEQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQiw2REFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxxREFBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELHFEQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO1lBQ2hDLGFBQWEsRUFBRTtnQkFDYixJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLENBQUM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFuQ2tCLCtCQUErQjtRQURuRCxFQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO09BQ3ZCLCtCQUErQixDQW9DbkQ7SUFBRCxzQ0FBQztDQXBDRCxBQW9DQyxDQXBDNEQsd0JBQWMsR0FvQzFFO2tCQXBDb0IsK0JBQStCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgRmFpbEZyZWVTaHVmZmxlRGlhbG9nVmlldyBmcm9tICcuL0ZhaWxGcmVlU2h1ZmZsZURpYWxvZ1ZpZXcnO1xuQG1qLmNsYXNzKFwiRmFpbEZyZWVTaHVmZmxlRGlhbG9nQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpbEZyZWVTaHVmZmxlRGlhbG9nQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gRmFpbEZyZWVTaHVmZmxlRGlhbG9nVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgYnVuZGxlTmFtZSA9IFwibF9mYWlsRnJlZVNodWZmbGVcIjtcbiAgX29uRnJlZVNodWZmbGVDYWxsYmFjayA9IG51bGw7XG4gIF9vbkNsb3NlQ2FsbGJhY2sgPSBudWxsO1xuICBpbml0RGVwZW5kUmVzKCkge31cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJvb3RWaWV3LnpJbmRleCA9IDEwMDAwO1xuICB9XG4gIHZpZXdEaWRTaG93KHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdCA9IHQgfHwgdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgdCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHRoaXMuX29uRnJlZVNodWZmbGVDYWxsYmFjayA9IHQub25GcmVlU2h1ZmZsZSB8fCBudWxsO1xuICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gdC5vbkNsb3NlIHx8IG51bGw7XG4gICAgfVxuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2V0Q2FsbGJhY2tzXCIsIHtcbiAgICAgIG9uRnJlZVNodWZmbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHJldHVybiBudWxsID09PSAoZSA9IG8uX29uRnJlZVNodWZmbGVDYWxsYmFjaykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYWxsKG8pO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHJldHVybiBudWxsID09PSAoZSA9IG8uX29uQ2xvc2VDYWxsYmFjaykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYWxsKG8pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
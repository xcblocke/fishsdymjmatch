
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fail/Scripts/FailController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6b03+0VP9MFquZL+Kj50cr', 'FailController');
// subpackages/l_fail/Scripts/FailController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var FailView_1 = require("./FailView");
var FailController = /** @class */ (function (_super) {
    __extends(FailController, _super);
    function FailController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = FailView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        _this.preShuffleData = null;
        return _this;
    }
    FailController.prototype.getMessageListeners = function () {
        return {};
    };
    FailController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        var t = mj.getClassByName("FailPreviewTrait");
        if (t && t.getInstance() && true === t.getInstance().eventEnabled) {
            this.preShuffleData = t.getPreShuffleData();
            this.preShuffleData;
        }
        this.viewDoAction("show", Object.assign(Object.assign({}, this.args), {
            preShuffleData: this.preShuffleData
        }));
    };
    FailController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        var i = mj.getClassByName("FailPreviewTrait");
        i && i.getInstance() && true === i.getInstance().eventEnabled && (this.preShuffleData = i.getPreShuffleData());
        this.viewDoAction("show", Object.assign(Object.assign({}, t), {
            preShuffleData: this.preShuffleData
        }));
    };
    FailController.prototype.close = function () {
        _super.prototype.close.call(this);
        var t = mj.getClassByName("FailPreviewTrait");
        t && t.getInstance() && true === t.getInstance().eventEnabled && t.clearPreShuffleData();
    };
    FailController = __decorate([
        mj.class("FailController")
    ], FailController);
    return FailController;
}(ViewController_1.default));
exports.default = FailController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWwvU2NyaXB0cy9GYWlsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLHVDQUFrQztBQUVsQztJQUE0QyxrQ0FBYztJQUExRDtRQUFBLHFFQWdDQztRQS9CQyxlQUFTLEdBQUcsa0JBQVEsQ0FBQztRQUNyQixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsb0JBQWMsR0FBRyxJQUFJLENBQUM7O0lBNEJ4QixDQUFDO0lBM0JDLDRDQUFtQixHQUFuQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELG9DQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEUsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELHdDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLGlCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5QyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDNUQsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFDRSxpQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5QyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzNGLENBQUM7SUEvQmtCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0FnQ2xDO0lBQUQscUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzJDLHdCQUFjLEdBZ0N6RDtrQkFoQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBGYWlsVmlldyBmcm9tICcuL0ZhaWxWaWV3JztcbkBtai5jbGFzcyhcIkZhaWxDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlsQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gRmFpbFZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgcHJlU2h1ZmZsZURhdGEgPSBudWxsO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJGYWlsUHJldmlld1RyYWl0XCIpO1xuICAgIGlmICh0ICYmIHQuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSB0LmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLnByZVNodWZmbGVEYXRhID0gdC5nZXRQcmVTaHVmZmxlRGF0YSgpO1xuICAgICAgdGhpcy5wcmVTaHVmZmxlRGF0YTtcbiAgICB9XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcmdzKSwge1xuICAgICAgcHJlU2h1ZmZsZURhdGE6IHRoaXMucHJlU2h1ZmZsZURhdGFcbiAgICB9KSk7XG4gIH1cbiAgcmVmcmVzaEZvclJldXNlKHQpIHtcbiAgICBzdXBlci5yZWZyZXNoRm9yUmV1c2UuY2FsbCh0aGlzLCB0KTtcbiAgICB2YXIgaSA9IG1qLmdldENsYXNzQnlOYW1lKFwiRmFpbFByZXZpZXdUcmFpdFwiKTtcbiAgICBpICYmIGkuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSBpLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkICYmICh0aGlzLnByZVNodWZmbGVEYXRhID0gaS5nZXRQcmVTaHVmZmxlRGF0YSgpKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dcIiwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0KSwge1xuICAgICAgcHJlU2h1ZmZsZURhdGE6IHRoaXMucHJlU2h1ZmZsZURhdGFcbiAgICB9KSk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgc3VwZXIuY2xvc2UuY2FsbCh0aGlzKTtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiRmFpbFByZXZpZXdUcmFpdFwiKTtcbiAgICB0ICYmIHQuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSB0LmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkICYmIHQuY2xlYXJQcmVTaHVmZmxlRGF0YSgpO1xuICB9XG59Il19
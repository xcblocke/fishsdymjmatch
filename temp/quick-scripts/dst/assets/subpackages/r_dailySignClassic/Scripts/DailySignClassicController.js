
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignClassic/Scripts/DailySignClassicController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49ca7D9dLxGOqpneL670w+/', 'DailySignClassicController');
// subpackages/r_dailySignClassic/Scripts/DailySignClassicController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var DailySignClassicView_1 = require("./view/DailySignClassicView");
var DailySignClassicController = /** @class */ (function (_super) {
    __extends(DailySignClassicController, _super);
    function DailySignClassicController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailySignClassicView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "r_dailySignClassic";
        return _this;
    }
    DailySignClassicController.prototype.initDependRes = function () { };
    DailySignClassicController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    DailySignClassicController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("viewDidShow", null != e ? e : this.args);
    };
    DailySignClassicController = __decorate([
        mj.class("DailySignClassicController")
    ], DailySignClassicController);
    return DailySignClassicController;
}(ViewController_1.default));
exports.default = DailySignClassicController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnbkNsYXNzaWMvU2NyaXB0cy9EYWlseVNpZ25DbGFzc2ljQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLG9FQUErRDtBQUUvRDtJQUF3RCw4Q0FBYztJQUF0RTtRQUFBLHFFQWFDO1FBWkMsZUFBUyxHQUFHLDhCQUFvQixDQUFDO1FBQ2pDLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLG9CQUFvQixDQUFDOztJQVVwQyxDQUFDO0lBVEMsa0RBQWEsR0FBYixjQUFpQixDQUFDO0lBQ2xCLGdEQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsZ0RBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBWmtCLDBCQUEwQjtRQUQ5QyxFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO09BQ2xCLDBCQUEwQixDQWE5QztJQUFELGlDQUFDO0NBYkQsQUFhQyxDQWJ1RCx3QkFBYyxHQWFyRTtrQkFib0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgRGFpbHlTaWduQ2xhc3NpY1ZpZXcgZnJvbSAnLi92aWV3L0RhaWx5U2lnbkNsYXNzaWNWaWV3JztcbkBtai5jbGFzcyhcIkRhaWx5U2lnbkNsYXNzaWNDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVNpZ25DbGFzc2ljQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gRGFpbHlTaWduQ2xhc3NpY1ZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIGJ1bmRsZU5hbWUgPSBcInJfZGFpbHlTaWduQ2xhc3NpY1wiO1xuICBpbml0RGVwZW5kUmVzKCkge31cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInZpZXdEaWRMb2FkXCIsIHRoaXMuYXJncyk7XG4gIH1cbiAgdmlld0RpZFNob3coZSkge1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJ2aWV3RGlkU2hvd1wiLCBudWxsICE9IGUgPyBlIDogdGhpcy5hcmdzKTtcbiAgfVxufSJdfQ==
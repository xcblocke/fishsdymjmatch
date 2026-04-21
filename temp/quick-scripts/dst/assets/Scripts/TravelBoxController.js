
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TravelBoxController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aaa376CSmpKZ6OMxmULgcd+', 'TravelBoxController');
// Scripts/TravelBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TravelBoxView_1 = require("./view/TravelBoxView");
var TravelBoxController = /** @class */ (function (_super) {
    __extends(TravelBoxController, _super);
    function TravelBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelBoxView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "mainRes";
        return _this;
    }
    TravelBoxController.prototype.initDependRes = function () { };
    TravelBoxController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    TravelBoxController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("viewDidShow", null != t ? t : this.args);
    };
    TravelBoxController = __decorate([
        mj.class("TravelBoxController")
    ], TravelBoxController);
    return TravelBoxController;
}(ViewController_1.default));
exports.default = TravelBoxController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RyYXZlbEJveENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUFpRjtBQUNqRixzREFBaUQ7QUFFakQ7SUFBaUQsdUNBQWM7SUFBL0Q7UUFBQSxxRUFhQztRQVpDLGVBQVMsR0FBRyx1QkFBYSxDQUFDO1FBQzFCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLFNBQVMsQ0FBQzs7SUFVekIsQ0FBQztJQVRDLDJDQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQix5Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELHlDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVprQixtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQWF2QztJQUFELDBCQUFDO0NBYkQsQUFhQyxDQWJnRCx3QkFBYyxHQWE5RDtrQkFib0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVHJhdmVsQm94VmlldyBmcm9tICcuL3ZpZXcvVHJhdmVsQm94Vmlldyc7XG5AbWouY2xhc3MoXCJUcmF2ZWxCb3hDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxCb3hDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBUcmF2ZWxCb3hWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBidW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwidmlld0RpZExvYWRcIiwgdGhpcy5hcmdzKTtcbiAgfVxuICB2aWV3RGlkU2hvdyh0KSB7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInZpZXdEaWRTaG93XCIsIG51bGwgIT0gdCA/IHQgOiB0aGlzLmFyZ3MpO1xuICB9XG59Il19
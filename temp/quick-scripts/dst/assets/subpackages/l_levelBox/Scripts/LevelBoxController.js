
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBox/Scripts/LevelBoxController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e958GcaktI847exMoHke90', 'LevelBoxController');
// subpackages/l_levelBox/Scripts/LevelBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var LevelBoxView_1 = require("./LevelBoxView");
var LevelBoxController = /** @class */ (function (_super) {
    __extends(LevelBoxController, _super);
    function LevelBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = LevelBoxView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    LevelBoxController.prototype.initDependRes = function () { };
    LevelBoxController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    LevelBoxController.prototype.viewDidShow = function (e) {
        e = null != e ? e : this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("viewDidShow", e);
    };
    LevelBoxController = __decorate([
        mj.class("LevelBoxController")
    ], LevelBoxController);
    return LevelBoxController;
}(ViewController_1.default));
exports.default = LevelBoxController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94L1NjcmlwdHMvTGV2ZWxCb3hDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcsK0NBQTBDO0FBRTFDO0lBQWdELHNDQUFjO0lBQTlEO1FBQUEscUVBYUM7UUFaQyxlQUFTLEdBQUcsc0JBQVksQ0FBQztRQUN6QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7O0lBVzVCLENBQUM7SUFWQywwQ0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsd0NBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCx3Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQVprQixrQkFBa0I7UUFEdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQWF0QztJQUFELHlCQUFDO0NBYkQsQUFhQyxDQWIrQyx3QkFBYyxHQWE3RDtrQkFib0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgTGV2ZWxCb3hWaWV3IGZyb20gJy4vTGV2ZWxCb3hWaWV3JztcbkBtai5jbGFzcyhcIkxldmVsQm94Q29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxCb3hDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBMZXZlbEJveFZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuQUxFUlQ7XG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwidmlld0RpZExvYWRcIiwgdGhpcy5hcmdzKTtcbiAgfVxuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgZSA9IG51bGwgIT0gZSA/IGUgOiB0aGlzLmFyZ3M7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCBlKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInZpZXdEaWRTaG93XCIsIGUpO1xuICB9XG59Il19
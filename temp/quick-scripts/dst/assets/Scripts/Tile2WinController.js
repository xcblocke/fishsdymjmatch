
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2WinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c073aISaDtIdoaF2p9CPy0i', 'Tile2WinController');
// Scripts/Tile2WinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var Tile2WinView_1 = require("./view/Tile2WinView");
var Tile2WinController = /** @class */ (function (_super) {
    __extends(Tile2WinController, _super);
    function Tile2WinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2WinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    Tile2WinController.prototype.initDependRes = function () { };
    Tile2WinController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    Tile2WinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    Tile2WinController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    Tile2WinController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    __decorate([
        mj.traitEvent("Tile2WinCtrl_initRes")
    ], Tile2WinController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("Tile2WinCtrl_viewShow")
    ], Tile2WinController.prototype, "viewDidShow", null);
    Tile2WinController = __decorate([
        mj.class("Tile2WinController")
    ], Tile2WinController);
    return Tile2WinController;
}(ViewController_1.default));
exports.default = Tile2WinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyV2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQWlGO0FBQ2pGLG9EQUErQztBQUUvQztJQUFnRCxzQ0FBYztJQUE5RDtRQUFBLHFFQXNCQztRQXJCQyxlQUFTLEdBQUcsc0JBQVksQ0FBQztRQUN6QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxTQUFTLENBQUM7O0lBbUJ6QixDQUFDO0lBakJDLDBDQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQix3Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELHdDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCw0Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixpQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBaEJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzsyREFDcEI7SUFLbEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3lEQUt0QztJQWRrQixrQkFBa0I7UUFEdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQXNCdEM7SUFBRCx5QkFBQztDQXRCRCxBQXNCQyxDQXRCK0Msd0JBQWMsR0FzQjdEO2tCQXRCb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVGlsZTJXaW5WaWV3IGZyb20gJy4vdmlldy9UaWxlMldpblZpZXcnO1xuQG1qLmNsYXNzKFwiVGlsZTJXaW5Db250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMldpbkNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFRpbGUyV2luVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5QQU5FTDtcbiAgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBAbWoudHJhaXRFdmVudChcIlRpbGUyV2luQ3RybF9pbml0UmVzXCIpXG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJXaW5DdHJsX3ZpZXdTaG93XCIpXG4gIHZpZXdEaWRTaG93KHQpIHtcbiAgICB0ID0gdCB8fCB0aGlzLmFyZ3M7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dXaW5WaWV3XCIsIHQpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbiAgcmVmcmVzaEZvclJldXNlKHQpIHtcbiAgICBzdXBlci5yZWZyZXNoRm9yUmV1c2UuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dXaW5WaWV3XCIsIHQpO1xuICB9XG59Il19
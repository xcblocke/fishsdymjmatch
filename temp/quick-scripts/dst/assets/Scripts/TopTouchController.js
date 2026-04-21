
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TopTouchController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca5adM4g0xK0pHZBVagUSh9', 'TopTouchController');
// Scripts/TopTouchController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TopTouchView_1 = require("./view/TopTouchView");
var TopTouchController = /** @class */ (function (_super) {
    __extends(TopTouchController, _super);
    function TopTouchController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TopTouchView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    TopTouchController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10002;
    };
    TopTouchController.prototype.initDependRes = function () { };
    TopTouchController.prototype.getMessageListeners = function () {
        return {};
    };
    TopTouchController = __decorate([
        mj.class("TopTouchController")
    ], TopTouchController);
    return TopTouchController;
}(ViewController_1.default));
exports.default = TopTouchController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RvcFRvdWNoQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQWlGO0FBQ2pGLG9EQUErQztBQUUvQztJQUFnRCxzQ0FBYztJQUE5RDtRQUFBLHFFQVdDO1FBVkMsZUFBUyxHQUFHLHNCQUFZLENBQUM7UUFDekIsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQVM1QixDQUFDO0lBUkMsd0NBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCwwQ0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsZ0RBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBVmtCLGtCQUFrQjtRQUR0QyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBV3RDO0lBQUQseUJBQUM7Q0FYRCxBQVdDLENBWCtDLHdCQUFjLEdBVzdEO2tCQVhvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBUb3BUb3VjaFZpZXcgZnJvbSAnLi92aWV3L1RvcFRvdWNoVmlldyc7XG5AbWouY2xhc3MoXCJUb3BUb3VjaENvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFRvdWNoQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVG9wVG91Y2hWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucm9vdFZpZXcuekluZGV4ID0gMTAwMDI7XG4gIH1cbiAgaW5pdERlcGVuZFJlcygpIHt9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59Il19
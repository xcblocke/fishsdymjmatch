
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankBoxController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46172Zqd5xAWKwiq7W1cB+N', 'RankBoxController');
// subpackages/l_rank/Scripts/RankBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var RankBoxView_1 = require("./util/RankBoxView");
var RankBoxController = /** @class */ (function (_super) {
    __extends(RankBoxController, _super);
    function RankBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = RankBoxView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    RankBoxController.prototype.initDependRes = function () { };
    RankBoxController.prototype.getMessageListeners = function () {
        return {};
    };
    RankBoxController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    RankBoxController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    __decorate([
        mj.traitEvent("RankBoxCtrl_initRes")
    ], RankBoxController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("RankBoxCtrl_viewShow")
    ], RankBoxController.prototype, "viewDidShow", null);
    RankBoxController = __decorate([
        mj.class("RankBoxController")
    ], RankBoxController);
    return RankBoxController;
}(ViewController_1.default));
exports.default = RankBoxController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQm94Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLGtEQUE2QztBQUU3QztJQUErQyxxQ0FBYztJQUE3RDtRQUFBLHFFQWlCQztRQWhCQyxlQUFTLEdBQUcscUJBQVcsQ0FBQztRQUN4QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7O0lBZTVCLENBQUM7SUFiQyx5Q0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsK0NBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsdUNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFaRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7MERBQ25CO0lBUWxCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzt3REFLckM7SUFoQmtCLGlCQUFpQjtRQURyQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBaUJyQztJQUFELHdCQUFDO0NBakJELEFBaUJDLENBakI4Qyx3QkFBYyxHQWlCNUQ7a0JBakJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBSYW5rQm94VmlldyBmcm9tICcuL3V0aWwvUmFua0JveFZpZXcnO1xuQG1qLmNsYXNzKFwiUmFua0JveENvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtCb3hDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBSYW5rQm94VmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm94Q3RybF9pbml0UmVzXCIpXG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0JveEN0cmxfdmlld1Nob3dcIilcbiAgdmlld0RpZFNob3coZSkge1xuICAgIGUgPSBlIHx8IHRoaXMuYXJncztcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIGUpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1wiLCBlKTtcbiAgfVxufSJdfQ==
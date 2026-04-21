
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/ValentineActivateController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38330aptAZNWZiwdHg4/ak/', 'ValentineActivateController');
// subpackages/r_complexValentine/Scripts/ValentineActivateController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ValentineModel_1 = require("./model/ValentineModel");
var ValentineActivateView_1 = require("./view/ValentineActivateView");
var ValentineActivateController = /** @class */ (function (_super) {
    __extends(ValentineActivateController, _super);
    function ValentineActivateController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ValentineActivateView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_complexValentine";
        return _this;
    }
    ValentineActivateController.prototype.getMessageListeners = function () {
        return {};
    };
    ValentineActivateController.prototype.initDependRes = function () { };
    ValentineActivateController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    ValentineActivateController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    ValentineActivateController.prototype.close = function () {
        _super.prototype.close.call(this);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW);
    };
    __decorate([
        mj.traitEvent("VltnActCtl_initRes")
    ], ValentineActivateController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("VltnActCtl_viewDidLoad")
    ], ValentineActivateController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("VltnActCtl_viewDidShow")
    ], ValentineActivateController.prototype, "viewDidShow", null);
    ValentineActivateController = __decorate([
        mj.class("ValentineActivateController")
    ], ValentineActivateController);
    return ValentineActivateController;
}(ViewController_1.default));
exports.default = ValentineActivateController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy9WYWxlbnRpbmVBY3RpdmF0ZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyx5REFBeUQ7QUFDekQsc0VBQWlFO0FBRWpFO0lBQXlELCtDQUFjO0lBQXZFO1FBQUEscUVBdUJDO1FBdEJDLGVBQVMsR0FBRywrQkFBcUIsQ0FBQztRQUNsQyxjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxvQkFBb0IsQ0FBQzs7SUFvQnBDLENBQUM7SUFuQkMseURBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsbURBQWEsR0FBYixjQUFpQixDQUFDO0lBRWxCLGlEQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpREFBVyxHQUFYLFVBQVksQ0FBQztRQUNYLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsMkNBQUssR0FBTDtRQUNFLGlCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZSxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQWREO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztvRUFDbEI7SUFFbEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO2tFQUd2QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztrRUFLdkM7SUFsQmtCLDJCQUEyQjtRQUQvQyxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO09BQ25CLDJCQUEyQixDQXVCL0M7SUFBRCxrQ0FBQztDQXZCRCxBQXVCQyxDQXZCd0Qsd0JBQWMsR0F1QnRFO2tCQXZCb0IsMkJBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgeyBWYWxlbnRpbmVFdmVudHMgfSBmcm9tICcuL21vZGVsL1ZhbGVudGluZU1vZGVsJztcbmltcG9ydCBWYWxlbnRpbmVBY3RpdmF0ZVZpZXcgZnJvbSAnLi92aWV3L1ZhbGVudGluZUFjdGl2YXRlVmlldyc7XG5AbWouY2xhc3MoXCJWYWxlbnRpbmVBY3RpdmF0ZUNvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGVudGluZUFjdGl2YXRlQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVmFsZW50aW5lQWN0aXZhdGVWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBidW5kbGVOYW1lID0gXCJyX2NvbXBsZXhWYWxlbnRpbmVcIjtcbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuQWN0Q3RsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkFjdEN0bF92aWV3RGlkTG9hZFwiKVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkFjdEN0bF92aWV3RGlkU2hvd1wiKVxuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgZSA9IGUgfHwgdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIGUpO1xuICB9XG4gIGNsb3NlKCkge1xuICAgIHN1cGVyLmNsb3NlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFZhbGVudGluZUV2ZW50cy5DTE9TRV9WQUxFTlRJTkVfQUNUSVZBVEVfVklFVyk7XG4gIH1cbn0iXX0=
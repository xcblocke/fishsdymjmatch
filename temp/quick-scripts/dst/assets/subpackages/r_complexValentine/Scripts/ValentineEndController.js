
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/ValentineEndController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95e4dz6DY5JyotrSOdyzMn5', 'ValentineEndController');
// subpackages/r_complexValentine/Scripts/ValentineEndController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ValentineEndView_1 = require("./view/ValentineEndView");
var ValentineEndController = /** @class */ (function (_super) {
    __extends(ValentineEndController, _super);
    function ValentineEndController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ValentineEndView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_complexValentine";
        return _this;
    }
    ValentineEndController.prototype.getMessageListeners = function () {
        return {};
    };
    ValentineEndController.prototype.initDependRes = function () { };
    ValentineEndController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    ValentineEndController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    __decorate([
        mj.traitEvent("VltnEndCtl_initRes")
    ], ValentineEndController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("VltnEndCtl_viewDidLoad")
    ], ValentineEndController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("VltnEndCtl_viewDidShow")
    ], ValentineEndController.prototype, "viewDidShow", null);
    ValentineEndController = __decorate([
        mj.class("ValentineEndController")
    ], ValentineEndController);
    return ValentineEndController;
}(ViewController_1.default));
exports.default = ValentineEndController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy9WYWxlbnRpbmVFbmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcsNERBQXVEO0FBRXZEO0lBQW9ELDBDQUFjO0lBQWxFO1FBQUEscUVBbUJDO1FBbEJDLGVBQVMsR0FBRywwQkFBZ0IsQ0FBQztRQUM3QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxvQkFBb0IsQ0FBQzs7SUFnQnBDLENBQUM7SUFmQyxvREFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCw4Q0FBYSxHQUFiLGNBQWlCLENBQUM7SUFFbEIsNENBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFWRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7K0RBQ2xCO0lBRWxCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs2REFHdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7NkRBS3ZDO0lBbEJrQixzQkFBc0I7UUFEMUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQW1CMUM7SUFBRCw2QkFBQztDQW5CRCxBQW1CQyxDQW5CbUQsd0JBQWMsR0FtQmpFO2tCQW5Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVmFsZW50aW5lRW5kVmlldyBmcm9tICcuL3ZpZXcvVmFsZW50aW5lRW5kVmlldyc7XG5AbWouY2xhc3MoXCJWYWxlbnRpbmVFbmRDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxlbnRpbmVFbmRDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBWYWxlbnRpbmVFbmRWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBidW5kbGVOYW1lID0gXCJyX2NvbXBsZXhWYWxlbnRpbmVcIjtcbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuRW5kQ3RsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkVuZEN0bF92aWV3RGlkTG9hZFwiKVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkVuZEN0bF92aWV3RGlkU2hvd1wiKVxuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgZSA9IGUgfHwgdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIGUpO1xuICB9XG59Il19
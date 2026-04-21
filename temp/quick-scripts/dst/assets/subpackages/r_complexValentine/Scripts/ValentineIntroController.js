
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/ValentineIntroController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '211eb2cU21FQof5SAlmh15d', 'ValentineIntroController');
// subpackages/r_complexValentine/Scripts/ValentineIntroController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ValentineIntroView_1 = require("./view/ValentineIntroView");
var ValentineIntroController = /** @class */ (function (_super) {
    __extends(ValentineIntroController, _super);
    function ValentineIntroController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ValentineIntroView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_complexValentine";
        return _this;
    }
    ValentineIntroController.prototype.getMessageListeners = function () {
        return {};
    };
    ValentineIntroController.prototype.initDependRes = function () { };
    ValentineIntroController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    ValentineIntroController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    __decorate([
        mj.traitEvent("VltnIntroCtl_initRes")
    ], ValentineIntroController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("VltnIntroCtl_viewDidLoad")
    ], ValentineIntroController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("VltnIntroCtl_viewDidShow")
    ], ValentineIntroController.prototype, "viewDidShow", null);
    ValentineIntroController = __decorate([
        mj.class("ValentineIntroController")
    ], ValentineIntroController);
    return ValentineIntroController;
}(ViewController_1.default));
exports.default = ValentineIntroController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy9WYWxlbnRpbmVJbnRyb0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyxnRUFBMkQ7QUFFM0Q7SUFBc0QsNENBQWM7SUFBcEU7UUFBQSxxRUFtQkM7UUFsQkMsZUFBUyxHQUFHLDRCQUFrQixDQUFDO1FBQy9CLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLG9CQUFvQixDQUFDOztJQWdCcEMsQ0FBQztJQWZDLHNEQUFtQixHQUFuQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELGdEQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUVsQiw4Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsOENBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQVZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztpRUFDcEI7SUFFbEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOytEQUd6QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzsrREFLekM7SUFsQmtCLHdCQUF3QjtRQUQ1QyxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQW1CNUM7SUFBRCwrQkFBQztDQW5CRCxBQW1CQyxDQW5CcUQsd0JBQWMsR0FtQm5FO2tCQW5Cb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVmFsZW50aW5lSW50cm9WaWV3IGZyb20gJy4vdmlldy9WYWxlbnRpbmVJbnRyb1ZpZXcnO1xuQG1qLmNsYXNzKFwiVmFsZW50aW5lSW50cm9Db250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxlbnRpbmVJbnRyb0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFZhbGVudGluZUludHJvVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgYnVuZGxlTmFtZSA9IFwicl9jb21wbGV4VmFsZW50aW5lXCI7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkludHJvQ3RsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkludHJvQ3RsX3ZpZXdEaWRMb2FkXCIpXG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuSW50cm9DdGxfdmlld0RpZFNob3dcIilcbiAgdmlld0RpZFNob3coZSkge1xuICAgIGUgPSBlIHx8IHRoaXMuYXJncztcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIGUpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1wiLCBlKTtcbiAgfVxufSJdfQ==
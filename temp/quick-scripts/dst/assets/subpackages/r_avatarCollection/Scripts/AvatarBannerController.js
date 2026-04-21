
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/AvatarBannerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9290T+RYVO7b01WLudjD0z', 'AvatarBannerController');
// subpackages/r_avatarCollection/Scripts/AvatarBannerController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AvatarBannerView_1 = require("./AvatarBannerView");
var Utils_1 = require("./Utils");
var AvatarBannerController = /** @class */ (function (_super) {
    __extends(AvatarBannerController, _super);
    function AvatarBannerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AvatarBannerView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = Utils_1.getBundleName();
        return _this;
    }
    AvatarBannerController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    AvatarBannerController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    AvatarBannerController = __decorate([
        mj.class("AvatarBannerController")
    ], AvatarBannerController);
    return AvatarBannerController;
}(ViewController_1.default));
exports.default = AvatarBannerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9BdmF0YXJCYW5uZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcsdURBQWtEO0FBQ2xELGlDQUF3QztBQUV4QztJQUFvRCwwQ0FBYztJQUFsRTtRQUFBLHFFQVlDO1FBWEMsZUFBUyxHQUFHLDBCQUFnQixDQUFDO1FBQzdCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLHFCQUFhLEVBQUUsQ0FBQzs7SUFTL0IsQ0FBQztJQVJDLDRDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCw0Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBWGtCLHNCQUFzQjtRQUQxQyxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBWTFDO0lBQUQsNkJBQUM7Q0FaRCxBQVlDLENBWm1ELHdCQUFjLEdBWWpFO2tCQVpvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBBdmF0YXJCYW5uZXJWaWV3IGZyb20gJy4vQXZhdGFyQmFubmVyVmlldyc7XG5pbXBvcnQgeyBnZXRCdW5kbGVOYW1lIH0gZnJvbSAnLi9VdGlscyc7XG5AbWouY2xhc3MoXCJBdmF0YXJCYW5uZXJDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJCYW5uZXJDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBBdmF0YXJCYW5uZXJWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBidW5kbGVOYW1lID0gZ2V0QnVuZGxlTmFtZSgpO1xuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgZSA9IGUgfHwgdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIGUpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
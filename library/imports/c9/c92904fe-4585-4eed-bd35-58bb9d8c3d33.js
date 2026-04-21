"use strict";
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
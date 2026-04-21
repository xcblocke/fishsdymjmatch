"use strict";
cc._RF.push(module, '24473u9NEBG0JC1k5S/JoHk', 'AlertController');
// Scripts/AlertController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var AlertView_1 = require("./view/AlertView");
var AlertController = /** @class */ (function (_super) {
    __extends(AlertController, _super);
    function AlertController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AlertView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    AlertController.prototype.getMessageListeners = function () {
        return {};
    };
    AlertController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("show", this.args);
    };
    AlertController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        this.viewDoAction("show", t);
    };
    AlertController = __decorate([
        mj.class("AlertController")
    ], AlertController);
    return AlertController;
}(ViewController_1.default));
exports.default = AlertController;

cc._RF.pop();
"use strict";
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
"use strict";
cc._RF.push(module, 'e52d6geMmFD+ZG+mF3ro8JD', 'TipsController');
// Scripts/TipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TipsView_1 = require("./view/TipsView");
var TipsController = /** @class */ (function (_super) {
    __extends(TipsController, _super);
    function TipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    TipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10001;
    };
    TipsController.prototype.initDependRes = function () { };
    TipsController.prototype.getMessageListeners = function () {
        var e = this;
        return {
            SHOWTIPS: function (t, o) {
                e.viewDoAction("showTips", t, o);
            },
            SHOWRICHTIPS: function (t, o) {
                e.viewDoAction("showRichTips", t, o);
            }
        };
    };
    TipsController = __decorate([
        mj.class("TipsController")
    ], TipsController);
    return TipsController;
}(ViewController_1.default));
exports.default = TipsController;

cc._RF.pop();
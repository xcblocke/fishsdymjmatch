"use strict";
cc._RF.push(module, '2c05aceGVpPFZz2RRuj9KOf', 'Tile2TipsController');
// Scripts/Tile2TipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var Tile2TipsView_1 = require("./view/Tile2TipsView");
var Tile2TipsController = /** @class */ (function (_super) {
    __extends(Tile2TipsController, _super);
    function Tile2TipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2TipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    Tile2TipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10001;
    };
    Tile2TipsController.prototype.initDependRes = function () { };
    Tile2TipsController.prototype.getMessageListeners = function () {
        var _e;
        var t = this;
        return _e;
    };
    Tile2TipsController = __decorate([
        mj.class("Tile2TipsController")
    ], Tile2TipsController);
    return Tile2TipsController;
}(ViewController_1.default));
exports.default = Tile2TipsController;

cc._RF.pop();
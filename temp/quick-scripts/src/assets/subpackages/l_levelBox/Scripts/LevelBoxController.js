"use strict";
cc._RF.push(module, '2e958GcaktI847exMoHke90', 'LevelBoxController');
// subpackages/l_levelBox/Scripts/LevelBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var LevelBoxView_1 = require("./LevelBoxView");
var LevelBoxController = /** @class */ (function (_super) {
    __extends(LevelBoxController, _super);
    function LevelBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = LevelBoxView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    LevelBoxController.prototype.initDependRes = function () { };
    LevelBoxController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    LevelBoxController.prototype.viewDidShow = function (e) {
        e = null != e ? e : this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("viewDidShow", e);
    };
    LevelBoxController = __decorate([
        mj.class("LevelBoxController")
    ], LevelBoxController);
    return LevelBoxController;
}(ViewController_1.default));
exports.default = LevelBoxController;

cc._RF.pop();
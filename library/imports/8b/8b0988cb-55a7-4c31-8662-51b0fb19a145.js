"use strict";
cc._RF.push(module, '8b098jLVadMMYZiUbD7GaFF', 'DailyChallengeWinController');
// Scripts/DailyChallengeWinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var LoginModel_1 = require("./gamePlay/login/model/LoginModel");
var DailyChallengeWinView_1 = require("./view/DailyChallengeWinView");
var DailyChallengeWinController = /** @class */ (function (_super) {
    __extends(DailyChallengeWinController, _super);
    function DailyChallengeWinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyChallengeWinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this._model = null;
        return _this;
    }
    DailyChallengeWinController.prototype.initDependRes = function () { };
    DailyChallengeWinController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = LoginModel_1.default.getInstance();
    };
    DailyChallengeWinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    DailyChallengeWinController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("DCWinCtrl_initRes")
    ], DailyChallengeWinController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("DCWinCtrl_viewShow")
    ], DailyChallengeWinController.prototype, "viewDidShow", null);
    DailyChallengeWinController = __decorate([
        mj.class("DailyChallengeWinController")
    ], DailyChallengeWinController);
    return DailyChallengeWinController;
}(ViewController_1.default));
exports.default = DailyChallengeWinController;

cc._RF.pop();
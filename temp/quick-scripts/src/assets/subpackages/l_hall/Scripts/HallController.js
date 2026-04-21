"use strict";
cc._RF.push(module, 'f8124tlrSFDtaz538xWUhG4', 'HallController');
// subpackages/l_hall/Scripts/HallController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var HallView_1 = require("./HallView");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var HallController = /** @class */ (function (_super) {
    __extends(HallController, _super);
    function HallController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = HallView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this.bundleName = "mainRes";
        return _this;
    }
    HallController.prototype.init = function (e) {
        this.initViewResource();
        _super.prototype.init.call(this, e);
    };
    HallController.prototype.initViewResource = function () {
        this.viewClass.prefabUrl = "prefabs/hall/Hall";
    };
    HallController.prototype.getMessageListeners = function () {
        return {};
    };
    HallController.prototype.initDependRes = function () { };
    HallController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("createButtons", this.args);
        mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
        mj.audioManager.fadeBGMIn();
    };
    HallController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("updateUI", null != e ? e : this.args);
        DGameBtnClick_1.DotGameBtnClick.dotBgmOccupation(DGameBtnClick_1.EBgmOccupationClickType.Hall);
    };
    __decorate([
        mj.traitEvent("HallCtl_initVwRes")
    ], HallController.prototype, "initViewResource", null);
    __decorate([
        mj.traitEvent("HallCtl_initRes")
    ], HallController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("HallCtl_viewDidLoad")
    ], HallController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("HallCtl_viewDidShow")
    ], HallController.prototype, "viewDidShow", null);
    HallController = __decorate([
        mj.class("HallController")
    ], HallController);
    return HallController;
}(ViewController_1.default));
exports.default = HallController;

cc._RF.pop();
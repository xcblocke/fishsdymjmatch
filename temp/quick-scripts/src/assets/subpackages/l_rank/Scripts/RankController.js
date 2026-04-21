"use strict";
cc._RF.push(module, '2eb1dOIi35AlYB+rAkqo7bE', 'RankController');
// subpackages/l_rank/Scripts/RankController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var RankModel_1 = require("./RankModel");
var RankView_1 = require("./util/RankView");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var RankController = /** @class */ (function (_super) {
    __extends(RankController, _super);
    function RankController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = RankView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this.bundleName = "mainRes";
        _this._model = null;
        return _this;
    }
    Object.defineProperty(RankController.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    RankController.prototype.initDependRes = function () {
        this.preloadResMap = {
            Prefab: ["prefabs/rank/RankView"]
        };
    };
    RankController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = RankModel_1.default.getInstance();
    };
    RankController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    RankController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    RankController.prototype.jump = function () {
        this.dispatchEvent("RankModel_updTime");
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
        }
    };
    RankController.prototype.showTips = function () {
        ControllerManager_1.default.getInstance().pushViewByController("RankIntroduceController", {
            isReuse: true,
            isShowAction: true,
            isAutoOpen: false
        });
    };
    __decorate([
        mj.traitEvent("RankCtrl_initRes")
    ], RankController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("RankCtrl_viewShow")
    ], RankController.prototype, "viewDidShow", null);
    RankController = __decorate([
        mj.class("RankController")
    ], RankController);
    return RankController;
}(ViewController_1.default));
exports.default = RankController;

cc._RF.pop();
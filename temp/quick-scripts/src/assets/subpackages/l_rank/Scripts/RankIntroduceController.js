"use strict";
cc._RF.push(module, '65254K1qXtKELfDRZ4+MRci', 'RankIntroduceController');
// subpackages/l_rank/Scripts/RankIntroduceController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var RankIntroduceView_1 = require("./util/RankIntroduceView");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var RankIntroduceController = /** @class */ (function (_super) {
    __extends(RankIntroduceController, _super);
    function RankIntroduceController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = RankIntroduceView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        return _this;
    }
    RankIntroduceController.prototype.getMessageListeners = function () {
        return {};
    };
    RankIntroduceController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    RankIntroduceController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    RankIntroduceController.prototype.close = function () {
        _super.prototype.close.call(this);
    };
    RankIntroduceController.prototype.collect = function () {
        this.dispatchEvent("RankModel_updTime");
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
        }
    };
    __decorate([
        mj.traitEvent("RankIntroCtrl_viewShow")
    ], RankIntroduceController.prototype, "viewDidShow", null);
    RankIntroduceController = __decorate([
        mj.class("RankIntroduceController")
    ], RankIntroduceController);
    return RankIntroduceController;
}(ViewController_1.default));
exports.default = RankIntroduceController;

cc._RF.pop();
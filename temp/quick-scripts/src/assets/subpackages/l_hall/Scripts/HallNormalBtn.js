"use strict";
cc._RF.push(module, '93793BBaRRBT7xoK1+Zgqnn', 'HallNormalBtn');
// subpackages/l_hall/Scripts/HallNormalBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HallNormalBtn = /** @class */ (function (_super) {
    __extends(HallNormalBtn, _super);
    function HallNormalBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.levelId = 0;
        _this._bgBtnNode = null;
        return _this;
    }
    Object.defineProperty(HallNormalBtn.prototype, "BgBtnNode", {
        get: function () {
            return this._bgBtnNode;
        },
        enumerable: false,
        configurable: true
    });
    HallNormalBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
        return _t;
    };
    HallNormalBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallNormalBtn.prototype.updateUI = function () {
        if (cc.isValid(this.levelLabel)) {
            this.levelId = UserModel_1.default.getInstance().getMainGameData().getLevelId();
            I18NStrings_1.default.setText(this.levelLabel.node, "Level " + this.levelId, "MahjongTiles_MapPage_Level", [this.levelId]);
        }
    };
    HallNormalBtn.prototype.onBtnClick = function () {
        this.dispatchEvent("RankModel_updTime");
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
        }
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Level, this.levelId);
    };
    HallNormalBtn.prototype.onForceUpdate = function () { };
    HallNormalBtn.prefabUrl = "prefabs/hall/HallNormalBtn";
    __decorate([
        mj.component("BgBtn/Label", cc.Label)
    ], HallNormalBtn.prototype, "levelLabel", void 0);
    __decorate([
        mj.node("BgBtn")
    ], HallNormalBtn.prototype, "_bgBtnNode", void 0);
    __decorate([
        mj.traitEvent("HallNmlBtn_onLoad")
    ], HallNormalBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("HallNmlBtn_updateUI")
    ], HallNormalBtn.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("HallNmlBtn_onBtnClk")
    ], HallNormalBtn.prototype, "onBtnClick", null);
    __decorate([
        mj.traitEvent("HallNmlBtn_forceUpdate")
    ], HallNormalBtn.prototype, "onForceUpdate", null);
    HallNormalBtn = __decorate([
        mj.class
    ], HallNormalBtn);
    return HallNormalBtn;
}(BaseUI_1.default));
exports.default = HallNormalBtn;

cc._RF.pop();
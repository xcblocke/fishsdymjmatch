"use strict";
cc._RF.push(module, '42372VmMEFDAamS6QBrjOjK', 'ValentineEndView');
// subpackages/r_complexValentine/Scripts/view/ValentineEndView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var EventDefine_1 = require("../../../../Scripts/base/event/EventDefine");
var DGameValentine_1 = require("../../../../Scripts/DGameValentine");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var ValentineModel_1 = require("../model/ValentineModel");
var ValentineEndView = /** @class */ (function (_super) {
    __extends(ValentineEndView, _super);
    function ValentineEndView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.byeBtn = null;
        _this.titleLabel = null;
        _this.cntLabel = null;
        _this.byeBtnLabel = null;
        return _this;
    }
    ValentineEndView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.byeBtn, this.onByeBtnClick.bind(this));
        this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
        this.initUI();
        DGameValentine_1.DotGameValentine.dotValentineViewPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage3,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId(),
            remaining_time: "0d0h"
        });
        this.dispatchEvent(EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_INTRO_POPUP);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_ACTIVATE_POPUP);
    };
    ValentineEndView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_END_POPUP] = this.onMsgValentineCloseEndPopup.bind(this);
        return _t;
    };
    ValentineEndView.prototype.onMsgValentineCloseEndPopup = function () {
        this.delegate.close();
    };
    ValentineEndView.prototype.initUI = function () { };
    ValentineEndView.prototype.onByeBtnClick = function () {
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage3,
            effect_switch: DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Button,
            remaining_time: "0d0h",
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.delegate.close();
    };
    ValentineEndView.prototype.onCloseBtnClick = function () {
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage3,
            effect_switch: DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Close,
            remaining_time: "0d0h",
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.delegate.close();
    };
    ValentineEndView.prototype.show = function () { };
    ValentineEndView.prefabUrl = "prefabs/ValentineEndView";
    __decorate([
        mj.node("content/btn_close")
    ], ValentineEndView.prototype, "closeBtn", void 0);
    __decorate([
        mj.node("content/btn_bye")
    ], ValentineEndView.prototype, "byeBtn", void 0);
    __decorate([
        mj.component("content/title", cc.Label)
    ], ValentineEndView.prototype, "titleLabel", void 0);
    __decorate([
        mj.component("content/cnt", cc.Label)
    ], ValentineEndView.prototype, "cntLabel", void 0);
    __decorate([
        mj.component("content/btn_bye/lbl_bye", cc.Label)
    ], ValentineEndView.prototype, "byeBtnLabel", void 0);
    __decorate([
        mj.traitEvent("VltnEndVw_onLoad")
    ], ValentineEndView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("VltnEndVw_onConfirmClk")
    ], ValentineEndView.prototype, "onByeBtnClick", null);
    ValentineEndView = __decorate([
        mj.class
    ], ValentineEndView);
    return ValentineEndView;
}(UIView_1.default));
exports.default = ValentineEndView;

cc._RF.pop();
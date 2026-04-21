"use strict";
cc._RF.push(module, 'ca51bHsurZNiIXaE6af4MPq', 'ValentineIntroView');
// subpackages/r_complexValentine/Scripts/view/ValentineIntroView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var TravelGameModel_1 = require("../../../../Scripts/gamePlay/travel/model/TravelGameModel");
var ValentineModel_1 = require("../model/ValentineModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var DGameValentine_1 = require("../../../../Scripts/DGameValentine");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var ValentineIntroView = /** @class */ (function (_super) {
    __extends(ValentineIntroView, _super);
    function ValentineIntroView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.goBtn = null;
        _this.titleLabel = null;
        _this.timeLabel = null;
        _this.cntLabel = null;
        _this.goBtnLabel = null;
        _this.loveSpineNode = null;
        return _this;
    }
    ValentineIntroView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
        this.OnButtonClick(this.goBtn, this.onGoBtnClick.bind(this));
        this.updateUI();
        DGameValentine_1.DotGameValentine.dotValentineViewPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage1,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId(),
            remaining_time: this.timeLabel.string
        });
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_END_POPUP);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_ACTIVATE_POPUP);
    };
    ValentineIntroView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[ValentineModel_1.ValentineEvents.UPDATE_ACTIVITY_REMAIN_TIME] = this.onMsgUpdateActivityRemainTime.bind(this);
        _t[ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_INTRO_POPUP] = this.onMsgValentineCloseIntroPopup.bind(this);
        return _t;
    };
    ValentineIntroView.prototype.onMsgValentineCloseIntroPopup = function () {
        this.delegate.close();
    };
    ValentineIntroView.prototype.onMsgUpdateActivityRemainTime = function () {
        this.updateRemainTime();
    };
    ValentineIntroView.prototype.updateRemainTime = function () {
        var t = function t(t) {
            return t.toString().padStart(2, "0");
        }, e = ValentineModel_1.default.getInstance().getActLeftTime(), n = __read(GameUtils_1.default.getRemainTimeParts(0.001 * e), 4), o = n[0], i = n[1], a = n[2];
        n[3];
        I18NStrings_1.default.setText(this.timeLabel.node, o + "D" + i + "H" + a + "M", "Common_CountDown_Minute", [t(o), t(i), t(a)]);
    };
    ValentineIntroView.prototype.updateUI = function () {
        this.updateRemainTime();
    };
    ValentineIntroView.prototype.onCloseBtnClick = function () {
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage1,
            effect_switch: DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Close,
            remaining_time: this.timeLabel.string,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.delegate.close();
    };
    ValentineIntroView.prototype.onGoBtnClick = function () {
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage1,
            effect_switch: DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Button,
            remaining_time: this.timeLabel.string,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.goto();
    };
    ValentineIntroView.prototype.goto = function () {
        var t = this;
        if (TravelGameModel_1.default.getInstance().isSessionActive()) {
            ControllerManager_1.default.getInstance().pushViewByController("TravelGameController", {}, function () {
                var e;
                null === (e = t.delegate) || void 0 === e || e.close();
            });
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController", {}, function () {
                var e;
                null === (e = t.delegate) || void 0 === e || e.close();
            });
        }
    };
    ValentineIntroView.prototype.show = function () {
        this.playAni();
    };
    ValentineIntroView.prototype.playAni = function () {
        var t = this.loveSpineNode.getComponent(sp.Skeleton);
        GameUtils_1.default.playSpine(t, "in", false, function () {
            GameUtils_1.default.playSpine(t, "init", true);
        });
    };
    ValentineIntroView.prefabUrl = "prefabs/ValentineIntroView";
    __decorate([
        mj.node("content/btn_close")
    ], ValentineIntroView.prototype, "closeBtn", void 0);
    __decorate([
        mj.node("content/btn_go")
    ], ValentineIntroView.prototype, "goBtn", void 0);
    __decorate([
        mj.component("content/title", cc.Label)
    ], ValentineIntroView.prototype, "titleLabel", void 0);
    __decorate([
        mj.component("content/time_node/time", cc.Label)
    ], ValentineIntroView.prototype, "timeLabel", void 0);
    __decorate([
        mj.component("content/cnt", cc.Label)
    ], ValentineIntroView.prototype, "cntLabel", void 0);
    __decorate([
        mj.component("content/btn_go/lbl_go", cc.Label)
    ], ValentineIntroView.prototype, "goBtnLabel", void 0);
    __decorate([
        mj.node("content/bg/love_spine")
    ], ValentineIntroView.prototype, "loveSpineNode", void 0);
    __decorate([
        mj.traitEvent("VltnIntroVw_onLoad")
    ], ValentineIntroView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("VltnIntroVw_onCloseClk")
    ], ValentineIntroView.prototype, "onCloseBtnClick", null);
    __decorate([
        mj.traitEvent("VltnIntroVw_onGoClk")
    ], ValentineIntroView.prototype, "onGoBtnClick", null);
    __decorate([
        mj.traitEvent("VltnIntroVw_goto")
    ], ValentineIntroView.prototype, "goto", null);
    ValentineIntroView = __decorate([
        mj.class
    ], ValentineIntroView);
    return ValentineIntroView;
}(UIView_1.default));
exports.default = ValentineIntroView;

cc._RF.pop();
"use strict";
cc._RF.push(module, '20a18C4iJhCOJQkHBhf0lLi', 'ValentineActivateView');
// subpackages/r_complexValentine/Scripts/view/ValentineActivateView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var TravelGameModel_1 = require("../../../../Scripts/gamePlay/travel/model/TravelGameModel");
var ValentineModel_1 = require("../model/ValentineModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var EventDefine_1 = require("../../../../Scripts/base/event/EventDefine");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var DGameValentine_1 = require("../../../../Scripts/DGameValentine");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var ValentineActivateView = /** @class */ (function (_super) {
    __extends(ValentineActivateView, _super);
    function ValentineActivateView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.goBtn = null;
        _this.switchBtn = null;
        _this.switchSpineNode = null;
        _this.titleLabel = null;
        _this.timeLabel = null;
        _this.cntLabel = null;
        _this._autoCloseTimer = -1;
        _this._isGaming = false;
        _this._isAnimating = false;
        _this._isSwitchOn = true;
        return _this;
    }
    ValentineActivateView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
        this.OnButtonClick(this.goBtn, this.onGoBtnClick.bind(this));
        this.OnButtonClick(this.switchBtn, this.onSwitchClick.bind(this));
        this.updateUI();
        DGameValentine_1.DotGameValentine.dotValentineViewPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage2,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId(),
            remaining_time: this.timeLabel.string
        });
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_INTRO_POPUP);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_END_POPUP);
    };
    ValentineActivateView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[ValentineModel_1.ValentineEvents.UPDATE_ACTIVITY_REMAIN_TIME] = this.onMsgUpdateActivityRemainTime.bind(this);
        _t[ValentineModel_1.ValentineEvents.VALENTINE_CLOSE_ACTIVATE_POPUP] = this.onMsgValentineCloseActivatePopup.bind(this);
        return _t;
    };
    ValentineActivateView.prototype.onMsgValentineCloseActivatePopup = function () {
        this.delegate.close();
    };
    ValentineActivateView.prototype.onMsgUpdateActivityRemainTime = function () {
        this.updateRemainTime();
    };
    ValentineActivateView.prototype.updateRemainTime = function () {
        var t = function t(t) {
            return t.toString().padStart(2, "0");
        }, e = ValentineModel_1.default.getInstance().getActLeftTime(), n = __read(GameUtils_1.default.getRemainTimeParts(0.001 * e), 4), o = n[0], i = n[1], a = n[2];
        n[3];
        I18NStrings_1.default.setText(this.timeLabel.node, o + "D" + i + "H" + a + "M", "Common_CountDown_Minute", [t(o), t(i), t(a)]);
    };
    ValentineActivateView.prototype.updateUI = function () {
        this.updateRemainTime();
    };
    ValentineActivateView.prototype.show = function (t) {
        this._isGaming = !!(null == t ? void 0 : t.isGaming);
        this.closeBtn.active = !this._isGaming;
        this._isGaming && this.scheduleAutoClose();
        var e = this.switchSpineNode.getComponent(sp.Skeleton);
        this._isSwitchOn = ValentineModel_1.default.getInstance().getEffectEnabled();
        GameUtils_1.default.playSpine(e, this._isSwitchOn ? "on_init" : "off_init", true);
    };
    ValentineActivateView.prototype.scheduleAutoClose = function () {
        var t = this;
        this._autoCloseTimer = setTimeout(function () {
            t.delegate.close();
        }, 1000);
    };
    ValentineActivateView.prototype.onCloseBtnClick = function () {
        var t = ValentineModel_1.default.getInstance().getEffectEnabled();
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage2,
            effect_switch: t ? DGameValentine_1.EValentineEffectSwitch.On : DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Close,
            remaining_time: this.timeLabel.string,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.delegate.close();
    };
    ValentineActivateView.prototype.onGoBtnClick = function () {
        var t = ValentineModel_1.default.getInstance().getEffectEnabled();
        DGameValentine_1.DotGameValentine.dotValentineClickPopup({
            stage_progress: DGameValentine_1.EValentineStage.Stage2,
            effect_switch: t ? DGameValentine_1.EValentineEffectSwitch.On : DGameValentine_1.EValentineEffectSwitch.Off,
            click_target: DGameValentine_1.EValentineClickTarget.Button,
            remaining_time: this.timeLabel.string,
            main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
        });
        this.goto();
    };
    ValentineActivateView.prototype.goto = function () {
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
    ValentineActivateView.prototype.onSwitchClick = function () {
        var t = this;
        if (this._isGaming)
            this.delegate.close();
        else if (!this._isAnimating) {
            this._isAnimating = true;
            var e = this.switchSpineNode.getComponent(sp.Skeleton);
            this._isSwitchOn = !this._isSwitchOn;
            GameUtils_1.default.playSpine(e, this._isSwitchOn ? "off_on" : "on_off", false, function () {
                GameUtils_1.default.playSpine(e, t._isSwitchOn ? "on_init" : "off_init", true);
                t._isAnimating = false;
            });
            var n = ValentineModel_1.default.getInstance().getActivityState();
            if (ValentineModel_1.ValentineActState.Activated == n) {
                ValentineModel_1.default.getInstance().setEffectEnabled(this._isSwitchOn);
                this.dispatchEvent(EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE);
            }
            var o = ValentineModel_1.default.getInstance().getEffectEnabled();
            DGameValentine_1.DotGameValentine.dotValentineClickPopup({
                stage_progress: DGameValentine_1.EValentineStage.Stage2,
                effect_switch: o ? DGameValentine_1.EValentineEffectSwitch.On : DGameValentine_1.EValentineEffectSwitch.Off,
                click_target: DGameValentine_1.EValentineClickTarget.Switch,
                remaining_time: this.timeLabel.string,
                main_level: UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId()
            });
        }
    };
    ValentineActivateView.prototype.onDestroy = function () {
        if (this._autoCloseTimer > 0) {
            clearTimeout(this._autoCloseTimer);
            this._autoCloseTimer = -1;
        }
        _super.prototype.onDestroy.call(this);
    };
    ValentineActivateView.prefabUrl = "prefabs/ValentineActivateView";
    __decorate([
        mj.node("content/btn_close")
    ], ValentineActivateView.prototype, "closeBtn", void 0);
    __decorate([
        mj.node("content/btn_go")
    ], ValentineActivateView.prototype, "goBtn", void 0);
    __decorate([
        mj.node("content/btn_toggle")
    ], ValentineActivateView.prototype, "switchBtn", void 0);
    __decorate([
        mj.node("content/btn_toggle/spine")
    ], ValentineActivateView.prototype, "switchSpineNode", void 0);
    __decorate([
        mj.component("content/title", cc.Label)
    ], ValentineActivateView.prototype, "titleLabel", void 0);
    __decorate([
        mj.component("content/time_node/time", cc.Label)
    ], ValentineActivateView.prototype, "timeLabel", void 0);
    __decorate([
        mj.component("content/cnt", cc.Label)
    ], ValentineActivateView.prototype, "cntLabel", void 0);
    __decorate([
        mj.traitEvent("VltnActVw_onLoad")
    ], ValentineActivateView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("VltnActVw_goto")
    ], ValentineActivateView.prototype, "goto", null);
    ValentineActivateView = __decorate([
        mj.class
    ], ValentineActivateView);
    return ValentineActivateView;
}(UIView_1.default));
exports.default = ValentineActivateView;

cc._RF.pop();
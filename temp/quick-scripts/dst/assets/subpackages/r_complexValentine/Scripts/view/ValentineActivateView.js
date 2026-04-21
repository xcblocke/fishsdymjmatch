
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/view/ValentineActivateView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy92aWV3L1ZhbGVudGluZUFjdGl2YXRlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0VBQTBFO0FBQzFFLGtFQUE2RDtBQUM3RCw2RkFBd0Y7QUFDeEYsMERBQTZGO0FBQzdGLDhFQUF5RTtBQUN6RSw2RkFBd0Y7QUFDeEYsMEVBQXVGO0FBQ3ZGLDJGQUF1RjtBQUN2RixxRUFBc0k7QUFDdEkseUVBQW9FO0FBRXBFO0lBQW1ELHlDQUFNO0lBQXpEO1FBQUEscUVBaUpDO1FBL0lDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLFdBQUssR0FBcUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBeUIsSUFBSSxDQUFDO1FBRXZDLHFCQUFlLEdBQStCLElBQUksQ0FBQztRQUVuRCxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFFbkMsZUFBUyxHQUE2QixJQUFJLENBQUM7UUFFM0MsY0FBUSxHQUFrQixJQUFJLENBQUM7UUFDL0IscUJBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFXLEdBQUcsSUFBSSxDQUFDOztJQStIckIsQ0FBQztJQTVIQyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxD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REMsRUFBRSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNOO0lBRTNDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzsyREFDUDtJQU8vQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7dURBY2pDO0lBaUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztxREFjL0I7SUFoSGtCLHFCQUFxQjtRQUR6QyxFQUFFLENBQUMsS0FBSztPQUNZLHFCQUFxQixDQWlKekM7SUFBRCw0QkFBQztDQWpKRCxBQWlKQyxDQWpKa0QsZ0JBQU0sR0FpSnhEO2tCQWpKb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBWYWxlbnRpbmVNb2RlbCwgeyBWYWxlbnRpbmVFdmVudHMsIFZhbGVudGluZUFjdFN0YXRlIH0gZnJvbSAnLi4vbW9kZWwvVmFsZW50aW5lTW9kZWwnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IHsgRVZUX01TR19IQUxMX0ZPUkNFX1VQREFURSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudERlZmluZSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IERvdEdhbWVWYWxlbnRpbmUsIEVWYWxlbnRpbmVTdGFnZSwgRVZhbGVudGluZUVmZmVjdFN3aXRjaCwgRVZhbGVudGluZUNsaWNrVGFyZ2V0IH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9ER2FtZVZhbGVudGluZSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxlbnRpbmVBY3RpdmF0ZVZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX2Nsb3NlXCIpXG4gIGNsb3NlQnRuOiBcImNvbnRlbnQvYnRuX2Nsb3NlXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX2dvXCIpXG4gIGdvQnRuOiBcImNvbnRlbnQvYnRuX2dvXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX3RvZ2dsZVwiKVxuICBzd2l0Y2hCdG46IFwiY29udGVudC9idG5fdG9nZ2xlXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX3RvZ2dsZS9zcGluZVwiKVxuICBzd2l0Y2hTcGluZU5vZGU6IFwiY29udGVudC9idG5fdG9nZ2xlL3NwaW5lXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiY29udGVudC90aXRsZVwiLCBjYy5MYWJlbClcbiAgdGl0bGVMYWJlbDogXCJjb250ZW50L3RpdGxlXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiY29udGVudC90aW1lX25vZGUvdGltZVwiLCBjYy5MYWJlbClcbiAgdGltZUxhYmVsOiBcImNvbnRlbnQvdGltZV9ub2RlL3RpbWVcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJjb250ZW50L2NudFwiLCBjYy5MYWJlbClcbiAgY250TGFiZWw6IFwiY29udGVudC9jbnRcIiA9IG51bGw7XG4gIF9hdXRvQ2xvc2VUaW1lciA9IC0xO1xuICBfaXNHYW1pbmcgPSBmYWxzZTtcbiAgX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gIF9pc1N3aXRjaE9uID0gdHJ1ZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9WYWxlbnRpbmVBY3RpdmF0ZVZpZXdcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuQWN0Vndfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5jbG9zZUJ0biwgdGhpcy5vbkNsb3NlQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuZ29CdG4sIHRoaXMub25Hb0J0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLnN3aXRjaEJ0biwgdGhpcy5vblN3aXRjaENsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICBEb3RHYW1lVmFsZW50aW5lLmRvdFZhbGVudGluZVZpZXdQb3B1cCh7XG4gICAgICBzdGFnZV9wcm9ncmVzczogRVZhbGVudGluZVN0YWdlLlN0YWdlMixcbiAgICAgIG1haW5fbGV2ZWw6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCkuZ2V0TGV2ZWxJZCgpLFxuICAgICAgcmVtYWluaW5nX3RpbWU6IHRoaXMudGltZUxhYmVsLnN0cmluZ1xuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChWYWxlbnRpbmVFdmVudHMuVkFMRU5USU5FX0NMT1NFX0lOVFJPX1BPUFVQKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoVmFsZW50aW5lRXZlbnRzLlZBTEVOVElORV9DTE9TRV9FTkRfUE9QVVApO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3RbVmFsZW50aW5lRXZlbnRzLlVQREFURV9BQ1RJVklUWV9SRU1BSU5fVElNRV0gPSB0aGlzLm9uTXNnVXBkYXRlQWN0aXZpdHlSZW1haW5UaW1lLmJpbmQodGhpcyk7XG4gICAgX3RbVmFsZW50aW5lRXZlbnRzLlZBTEVOVElORV9DTE9TRV9BQ1RJVkFURV9QT1BVUF0gPSB0aGlzLm9uTXNnVmFsZW50aW5lQ2xvc2VBY3RpdmF0ZVBvcHVwLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uTXNnVmFsZW50aW5lQ2xvc2VBY3RpdmF0ZVBvcHVwKCkge1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBvbk1zZ1VwZGF0ZUFjdGl2aXR5UmVtYWluVGltZSgpIHtcbiAgICB0aGlzLnVwZGF0ZVJlbWFpblRpbWUoKTtcbiAgfVxuICB1cGRhdGVSZW1haW5UaW1lKCkge1xuICAgIHZhciB0ID0gZnVuY3Rpb24gdCh0KSB7XG4gICAgICAgIHJldHVybiB0LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgfSxcbiAgICAgIGUgPSBWYWxlbnRpbmVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEFjdExlZnRUaW1lKCksXG4gICAgICBuID0gX19yZWFkKEdhbWVVdGlscy5nZXRSZW1haW5UaW1lUGFydHMoMC4wMDEgKiBlKSwgNCksXG4gICAgICBvID0gblswXSxcbiAgICAgIGkgPSBuWzFdLFxuICAgICAgYSA9IG5bMl07XG4gICAgblszXTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMudGltZUxhYmVsLm5vZGUsIG8gKyBcIkRcIiArIGkgKyBcIkhcIiArIGEgKyBcIk1cIiwgXCJDb21tb25fQ291bnREb3duX01pbnV0ZVwiLCBbdChvKSwgdChpKSwgdChhKV0pO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIHRoaXMudXBkYXRlUmVtYWluVGltZSgpO1xuICB9XG4gIHNob3codCkge1xuICAgIHRoaXMuX2lzR2FtaW5nID0gISEobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5pc0dhbWluZyk7XG4gICAgdGhpcy5jbG9zZUJ0bi5hY3RpdmUgPSAhdGhpcy5faXNHYW1pbmc7XG4gICAgdGhpcy5faXNHYW1pbmcgJiYgdGhpcy5zY2hlZHVsZUF1dG9DbG9zZSgpO1xuICAgIHZhciBlID0gdGhpcy5zd2l0Y2hTcGluZU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLl9pc1N3aXRjaE9uID0gVmFsZW50aW5lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRFZmZlY3RFbmFibGVkKCk7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLCB0aGlzLl9pc1N3aXRjaE9uID8gXCJvbl9pbml0XCIgOiBcIm9mZl9pbml0XCIsIHRydWUpO1xuICB9XG4gIHNjaGVkdWxlQXV0b0Nsb3NlKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl9hdXRvQ2xvc2VUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdC5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICB2YXIgdCA9IFZhbGVudGluZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RWZmZWN0RW5hYmxlZCgpO1xuICAgIERvdEdhbWVWYWxlbnRpbmUuZG90VmFsZW50aW5lQ2xpY2tQb3B1cCh7XG4gICAgICBzdGFnZV9wcm9ncmVzczogRVZhbGVudGluZVN0YWdlLlN0YWdlMixcbiAgICAgIGVmZmVjdF9zd2l0Y2g6IHQgPyBFVmFsZW50aW5lRWZmZWN0U3dpdGNoLk9uIDogRVZhbGVudGluZUVmZmVjdFN3aXRjaC5PZmYsXG4gICAgICBjbGlja190YXJnZXQ6IEVWYWxlbnRpbmVDbGlja1RhcmdldC5DbG9zZSxcbiAgICAgIHJlbWFpbmluZ190aW1lOiB0aGlzLnRpbWVMYWJlbC5zdHJpbmcsXG4gICAgICBtYWluX2xldmVsOiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoTWpHYW1lVHlwZS5Ob3JtYWwpLmdldExldmVsSWQoKVxuICAgIH0pO1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBvbkdvQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQgPSBWYWxlbnRpbmVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEVmZmVjdEVuYWJsZWQoKTtcbiAgICBEb3RHYW1lVmFsZW50aW5lLmRvdFZhbGVudGluZUNsaWNrUG9wdXAoe1xuICAgICAgc3RhZ2VfcHJvZ3Jlc3M6IEVWYWxlbnRpbmVTdGFnZS5TdGFnZTIsXG4gICAgICBlZmZlY3Rfc3dpdGNoOiB0ID8gRVZhbGVudGluZUVmZmVjdFN3aXRjaC5PbiA6IEVWYWxlbnRpbmVFZmZlY3RTd2l0Y2guT2ZmLFxuICAgICAgY2xpY2tfdGFyZ2V0OiBFVmFsZW50aW5lQ2xpY2tUYXJnZXQuQnV0dG9uLFxuICAgICAgcmVtYWluaW5nX3RpbWU6IHRoaXMudGltZUxhYmVsLnN0cmluZyxcbiAgICAgIG1haW5fbGV2ZWw6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCkuZ2V0TGV2ZWxJZCgpXG4gICAgfSk7XG4gICAgdGhpcy5nb3RvKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuQWN0VndfZ290b1wiKVxuICBnb3RvKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTZXNzaW9uQWN0aXZlKCkpIHtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUcmF2ZWxHYW1lQ29udHJvbGxlclwiLCB7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgbnVsbCA9PT0gKGUgPSB0LmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJNYWluR2FtZUNvbnRyb2xsZXJcIiwge30sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIG51bGwgPT09IChlID0gdC5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvblN3aXRjaENsaWNrKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAodGhpcy5faXNHYW1pbmcpIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtlbHNlIGlmICghdGhpcy5faXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHZhciBlID0gdGhpcy5zd2l0Y2hTcGluZU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgIHRoaXMuX2lzU3dpdGNoT24gPSAhdGhpcy5faXNTd2l0Y2hPbjtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoZSwgdGhpcy5faXNTd2l0Y2hPbiA/IFwib2ZmX29uXCIgOiBcIm9uX29mZlwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUsIHQuX2lzU3dpdGNoT24gPyBcIm9uX2luaXRcIiA6IFwib2ZmX2luaXRcIiwgdHJ1ZSk7XG4gICAgICAgIHQuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHZhciBuID0gVmFsZW50aW5lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBY3Rpdml0eVN0YXRlKCk7XG4gICAgICBpZiAoVmFsZW50aW5lQWN0U3RhdGUuQWN0aXZhdGVkID09IG4pIHtcbiAgICAgICAgVmFsZW50aW5lTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRFZmZlY3RFbmFibGVkKHRoaXMuX2lzU3dpdGNoT24pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRVZUX01TR19IQUxMX0ZPUkNFX1VQREFURSk7XG4gICAgICB9XG4gICAgICB2YXIgbyA9IFZhbGVudGluZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RWZmZWN0RW5hYmxlZCgpO1xuICAgICAgRG90R2FtZVZhbGVudGluZS5kb3RWYWxlbnRpbmVDbGlja1BvcHVwKHtcbiAgICAgICAgc3RhZ2VfcHJvZ3Jlc3M6IEVWYWxlbnRpbmVTdGFnZS5TdGFnZTIsXG4gICAgICAgIGVmZmVjdF9zd2l0Y2g6IG8gPyBFVmFsZW50aW5lRWZmZWN0U3dpdGNoLk9uIDogRVZhbGVudGluZUVmZmVjdFN3aXRjaC5PZmYsXG4gICAgICAgIGNsaWNrX3RhcmdldDogRVZhbGVudGluZUNsaWNrVGFyZ2V0LlN3aXRjaCxcbiAgICAgICAgcmVtYWluaW5nX3RpbWU6IHRoaXMudGltZUxhYmVsLnN0cmluZyxcbiAgICAgICAgbWFpbl9sZXZlbDogVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKS5nZXRMZXZlbElkKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9DbG9zZVRpbWVyID4gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2F1dG9DbG9zZVRpbWVyKTtcbiAgICAgIHRoaXMuX2F1dG9DbG9zZVRpbWVyID0gLTE7XG4gICAgfVxuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19
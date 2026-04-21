
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/view/ValentineIntroView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy92aWV3L1ZhbGVudGluZUludHJvVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0VBQTBFO0FBQzFFLGtFQUE2RDtBQUM3RCw2RkFBd0Y7QUFDeEYsMERBQTBFO0FBQzFFLDhFQUF5RTtBQUN6RSw2RkFBd0Y7QUFDeEYscUVBQXNJO0FBQ3RJLHlFQUFvRTtBQUNwRSwyRkFBdUY7QUFFdkY7SUFBZ0Qsc0NBQU07SUFBdEQ7UUFBQSxxRUF1R0M7UUFyR0MsY0FBUSxHQUF3QixJQUFJLENBQUM7UUFFckMsV0FBSyxHQUFxQixJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBRW5DLGVBQVMsR0FBNkIsSUFBSSxDQUFDO1FBRTNDLGNBQVEsR0FBa0IsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQTRCLElBQUksQ0FBQztRQUUzQyxtQkFBYSxHQUE0QixJQUFJLENBQUM7O0lBeUZoRCxDQUFDO0lBdEZDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixpQ0FBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyQyxjQUFjLEVBQUUsZ0NBQWUsQ0FBQyxNQUFNO1lBQ3RDLFVBQVUsRUFBRSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLDBC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ZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBWYWxlbnRpbmVNb2RlbCwgeyBWYWxlbnRpbmVFdmVudHMgfSBmcm9tICcuLi9tb2RlbC9WYWxlbnRpbmVNb2RlbCc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBEb3RHYW1lVmFsZW50aW5lLCBFVmFsZW50aW5lU3RhZ2UsIEVWYWxlbnRpbmVFZmZlY3RTd2l0Y2gsIEVWYWxlbnRpbmVDbGlja1RhcmdldCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvREdhbWVWYWxlbnRpbmUnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxlbnRpbmVJbnRyb1ZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX2Nsb3NlXCIpXG4gIGNsb3NlQnRuOiBcImNvbnRlbnQvYnRuX2Nsb3NlXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYnRuX2dvXCIpXG4gIGdvQnRuOiBcImNvbnRlbnQvYnRuX2dvXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiY29udGVudC90aXRsZVwiLCBjYy5MYWJlbClcbiAgdGl0bGVMYWJlbDogXCJjb250ZW50L3RpdGxlXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiY29udGVudC90aW1lX25vZGUvdGltZVwiLCBjYy5MYWJlbClcbiAgdGltZUxhYmVsOiBcImNvbnRlbnQvdGltZV9ub2RlL3RpbWVcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJjb250ZW50L2NudFwiLCBjYy5MYWJlbClcbiAgY250TGFiZWw6IFwiY29udGVudC9jbnRcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJjb250ZW50L2J0bl9nby9sYmxfZ29cIiwgY2MuTGFiZWwpXG4gIGdvQnRuTGFiZWw6IFwiY29udGVudC9idG5fZ28vbGJsX2dvXCIgPSBudWxsO1xuICBAbWoubm9kZShcImNvbnRlbnQvYmcvbG92ZV9zcGluZVwiKVxuICBsb3ZlU3BpbmVOb2RlOiBcImNvbnRlbnQvYmcvbG92ZV9zcGluZVwiID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9WYWxlbnRpbmVJbnRyb1ZpZXdcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuSW50cm9Wd19vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmNsb3NlQnRuLCB0aGlzLm9uQ2xvc2VCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5nb0J0biwgdGhpcy5vbkdvQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIERvdEdhbWVWYWxlbnRpbmUuZG90VmFsZW50aW5lVmlld1BvcHVwKHtcbiAgICAgIHN0YWdlX3Byb2dyZXNzOiBFVmFsZW50aW5lU3RhZ2UuU3RhZ2UxLFxuICAgICAgbWFpbl9sZXZlbDogVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKS5nZXRMZXZlbElkKCksXG4gICAgICByZW1haW5pbmdfdGltZTogdGhpcy50aW1lTGFiZWwuc3RyaW5nXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFZhbGVudGluZUV2ZW50cy5WQUxFTlRJTkVfQ0xPU0VfRU5EX1BPUFVQKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoVmFsZW50aW5lRXZlbnRzLlZBTEVOVElORV9DTE9TRV9BQ1RJVkFURV9QT1BVUCk7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtWYWxlbnRpbmVFdmVudHMuVVBEQVRFX0FDVElWSVRZX1JFTUFJTl9USU1FXSA9IHRoaXMub25Nc2dVcGRhdGVBY3Rpdml0eVJlbWFpblRpbWUuYmluZCh0aGlzKTtcbiAgICBfdFtWYWxlbnRpbmVFdmVudHMuVkFMRU5USU5FX0NMT1NFX0lOVFJPX1BPUFVQXSA9IHRoaXMub25Nc2dWYWxlbnRpbmVDbG9zZUludHJvUG9wdXAuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25Nc2dWYWxlbnRpbmVDbG9zZUludHJvUG9wdXAoKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIG9uTXNnVXBkYXRlQWN0aXZpdHlSZW1haW5UaW1lKCkge1xuICAgIHRoaXMudXBkYXRlUmVtYWluVGltZSgpO1xuICB9XG4gIHVwZGF0ZVJlbWFpblRpbWUoKSB7XG4gICAgdmFyIHQgPSBmdW5jdGlvbiB0KHQpIHtcbiAgICAgICAgcmV0dXJuIHQudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICB9LFxuICAgICAgZSA9IFZhbGVudGluZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0QWN0TGVmdFRpbWUoKSxcbiAgICAgIG4gPSBfX3JlYWQoR2FtZVV0aWxzLmdldFJlbWFpblRpbWVQYXJ0cygwLjAwMSAqIGUpLCA0KSxcbiAgICAgIG8gPSBuWzBdLFxuICAgICAgaSA9IG5bMV0sXG4gICAgICBhID0gblsyXTtcbiAgICBuWzNdO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy50aW1lTGFiZWwubm9kZSwgbyArIFwiRFwiICsgaSArIFwiSFwiICsgYSArIFwiTVwiLCBcIkNvbW1vbl9Db3VudERvd25fTWludXRlXCIsIFt0KG8pLCB0KGkpLCB0KGEpXSk7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgdGhpcy51cGRhdGVSZW1haW5UaW1lKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJWbHRuSW50cm9Wd19vbkNsb3NlQ2xrXCIpXG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICBEb3RHYW1lVmFsZW50aW5lLmRvdFZhbGVudGluZUNsaWNrUG9wdXAoe1xuICAgICAgc3RhZ2VfcHJvZ3Jlc3M6IEVWYWxlbnRpbmVTdGFnZS5TdGFnZTEsXG4gICAgICBlZmZlY3Rfc3dpdGNoOiBFVmFsZW50aW5lRWZmZWN0U3dpdGNoLk9mZixcbiAgICAgIGNsaWNrX3RhcmdldDogRVZhbGVudGluZUNsaWNrVGFyZ2V0LkNsb3NlLFxuICAgICAgcmVtYWluaW5nX3RpbWU6IHRoaXMudGltZUxhYmVsLnN0cmluZyxcbiAgICAgIG1haW5fbGV2ZWw6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShNakdhbWVUeXBlLk5vcm1hbCkuZ2V0TGV2ZWxJZCgpXG4gICAgfSk7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVmx0bkludHJvVndfb25Hb0Nsa1wiKVxuICBvbkdvQnRuQ2xpY2soKSB7XG4gICAgRG90R2FtZVZhbGVudGluZS5kb3RWYWxlbnRpbmVDbGlja1BvcHVwKHtcbiAgICAgIHN0YWdlX3Byb2dyZXNzOiBFVmFsZW50aW5lU3RhZ2UuU3RhZ2UxLFxuICAgICAgZWZmZWN0X3N3aXRjaDogRVZhbGVudGluZUVmZmVjdFN3aXRjaC5PZmYsXG4gICAgICBjbGlja190YXJnZXQ6IEVWYWxlbnRpbmVDbGlja1RhcmdldC5CdXR0b24sXG4gICAgICByZW1haW5pbmdfdGltZTogdGhpcy50aW1lTGFiZWwuc3RyaW5nLFxuICAgICAgbWFpbl9sZXZlbDogVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKS5nZXRMZXZlbElkKClcbiAgICB9KTtcbiAgICB0aGlzLmdvdG8oKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlZsdG5JbnRyb1Z3X2dvdG9cIilcbiAgZ290bygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmlzU2Vzc2lvbkFjdGl2ZSgpKSB7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVHJhdmVsR2FtZUNvbnRyb2xsZXJcIiwge30sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIG51bGwgPT09IChlID0gdC5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiTWFpbkdhbWVDb250cm9sbGVyXCIsIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBudWxsID09PSAoZSA9IHQuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2hvdygpIHtcbiAgICB0aGlzLnBsYXlBbmkoKTtcbiAgfVxuICBwbGF5QW5pKCkge1xuICAgIHZhciB0ID0gdGhpcy5sb3ZlU3BpbmVOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0LCBcImluXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHQsIFwiaW5pdFwiLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==
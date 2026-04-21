"use strict";
cc._RF.push(module, '95b43G4cIhK/bXbQZ/7pxaa', 'HallValentineBtn');
// subpackages/r_complexValentine/Scripts/components/HallValentineBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HallValentineBtnState = void 0;
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var ValentineModel_1 = require("../model/ValentineModel");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var DGameValentine_1 = require("../../../../Scripts/DGameValentine");
exports.HallValentineBtnState = {
    InProgress: "InProgress",
    Off: "Off",
    On: "On"
};
var HallValentineBtn = /** @class */ (function (_super) {
    __extends(HallValentineBtn, _super);
    function HallValentineBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineNode = null;
        _this.progressNode = null;
        _this.progressLabelNode = null;
        _this._curBtnState = exports.HallValentineBtnState.InProgress;
        return _this;
    }
    HallValentineBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
        this.updateUI();
        DGameValentine_1.DotGameValentine.dotValentineViewIcon({
            task_progress: ValentineModel_1.default.getInstance().getProgress()
        });
    };
    HallValentineBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "Valentine",
            node: this.node
        });
    };
    HallValentineBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallValentineBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[ValentineModel_1.ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW] = this.onMsgCloseValentineActivateView.bind(this);
        return _t;
    };
    HallValentineBtn.prototype.onMsgCloseValentineActivateView = function () {
        this.updateUI();
    };
    HallValentineBtn.prototype.updateUI = function () {
        var t = ValentineModel_1.default.getInstance(), e = t.getActivityState(), n = t.getEffectEnabled();
        this.progressNode.active = e === ValentineModel_1.ValentineActState.InProgress;
        if (ValentineModel_1.ValentineActState.InProgress === e) {
            this.updateProgress();
            this._curBtnState = exports.HallValentineBtnState.InProgress;
        }
        else
            ValentineModel_1.ValentineActState.Activated === e && (this._curBtnState = n ? exports.HallValentineBtnState.On : exports.HallValentineBtnState.Off);
        this.updateEffectSwitch();
    };
    HallValentineBtn.prototype.updateProgress = function () {
        var t = ValentineModel_1.default.getInstance(), e = t.getConfig(), n = t.localData.progress, o = e.requiredLevels, i = Math.min(n / o, 1);
        this.progressNode.getComponent(cc.ProgressBar).progress = i;
        this.progressLabelNode.getComponent(cc.Label).string = n + "/" + o;
    };
    HallValentineBtn.prototype.updateEffectSwitch = function () {
        switch (this._curBtnState) {
            case exports.HallValentineBtnState.InProgress:
                this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "off_init_jdt", true);
                break;
            case exports.HallValentineBtnState.On:
                this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "on_init", true);
                break;
            case exports.HallValentineBtnState.Off:
                this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "off_init", true);
        }
    };
    HallValentineBtn.prototype.onBtnClick = function () {
        var t = ValentineModel_1.default.getInstance().getActivityState(), e = ValentineModel_1.default.getInstance();
        if (ValentineModel_1.ValentineActState.InProgress == t)
            this.popIntro();
        else if (ValentineModel_1.ValentineActState.Activated == t)
            this.popActivate();
        else if (ValentineModel_1.ValentineActState.Ended == t) {
            if (e.localData.hasActivated) {
                this.popEnd();
            }
            else {
                this.popIntro();
            }
            this.destroySelf();
        }
        DGameValentine_1.DotGameValentine.dotValentineClickIcon({
            task_progress: e.getProgress()
        });
    };
    HallValentineBtn.prototype.popIntro = function () {
        ControllerManager_1.default.getInstance().pushViewByController("ValentineIntroController", {
            isReuse: false,
            isShowAction: true
        });
    };
    HallValentineBtn.prototype.popEnd = function () {
        ValentineModel_1.default.getInstance().markEndPopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineEndController", {
            isReuse: false,
            isShowAction: false
        });
    };
    HallValentineBtn.prototype.popActivate = function () {
        ControllerManager_1.default.getInstance().pushViewByController("ValentineActivateController", {
            isReuse: false,
            isShowAction: true
        });
    };
    HallValentineBtn.prototype.destroySelf = function () {
        this.node.destroy();
    };
    HallValentineBtn.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    HallValentineBtn.prefabUrl = "prefabs/HallValentineBtn";
    HallValentineBtn.bundleName = "r_complexValentine";
    __decorate([
        mj.node("Root/spine")
    ], HallValentineBtn.prototype, "spineNode", void 0);
    __decorate([
        mj.node("Root/progress")
    ], HallValentineBtn.prototype, "progressNode", void 0);
    __decorate([
        mj.component("Root/progress/value", cc.Label)
    ], HallValentineBtn.prototype, "progressLabelNode", void 0);
    __decorate([
        mj.traitEvent("VltnBtn_onLoad")
    ], HallValentineBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("VltnBtn_updateUI")
    ], HallValentineBtn.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("VltnBtn_onBtnClk")
    ], HallValentineBtn.prototype, "onBtnClick", null);
    HallValentineBtn = __decorate([
        mj.class
    ], HallValentineBtn);
    return HallValentineBtn;
}(BaseUI_1.default));
exports.default = HallValentineBtn;

cc._RF.pop();
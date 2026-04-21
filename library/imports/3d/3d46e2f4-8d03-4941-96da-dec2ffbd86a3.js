"use strict";
cc._RF.push(module, '3d46eL0jQNJQZba3sL/vYaj', 'UISettingsDialog');
// subpackages/l_settingsDialog/Scripts/UISettingsDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UISettingsDialog = void 0;
var Config_1 = require("../../../Scripts/Config");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var AnalyzeTypes_1 = require("../../../Scripts/gamePlay/analyze/AnalyzeTypes");
var UserPropteryManager_1 = require("../../../Scripts/gamePlay/analyze/UserPropteryManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DGameUserSetting_1 = require("../../../Scripts/DGameUserSetting");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UIResetSkinBtn_1 = require("./UIResetSkinBtn");
var MainGameView_1 = require("../../../Scripts/game/view/MainGameView");
var UISettingsDialog = /** @class */ (function (_super) {
    __extends(UISettingsDialog, _super);
    function UISettingsDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delegate = null;
        _this._dialogContent = null;
        _this._musicSwitchNode = null;
        _this._musicEnabled = true;
        _this._soundSwitchNode = null;
        _this._soundEnabled = true;
        _this._vibrationSwitchNode = null;
        _this._vibrationEnabled = true;
        _this._lockHighlightSwitchNode = null;
        _this._lockHighlightEnabled = true;
        _this._replayBtn = null;
        _this._closeBtn = null;
        _this._replayBtnDisabled = false;
        return _this;
    }
    UISettingsDialog.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
        this.updateSettingsState();
    };
    UISettingsDialog.prototype.initUI = function () {
        var t = this;
        if (this.checkRootNodeLoaded()) {
            this._dialogContent = this.node.getChildByName("content");
            if (cc.isValid(this._dialogContent)) {
                this._dialogContent.on(cc.Node.EventType.SIZE_CHANGED, this.onDialogContentSizeChanged, this);
                this._replayBtnDisabled = false;
                var e = this._dialogContent.getChildByName("settings");
                if (cc.isValid(e)) {
                    this._musicSwitchNode = e.getChildByName("music_switch");
                    this._soundSwitchNode = e.getChildByName("sound_switch");
                    this._vibrationSwitchNode = e.getChildByName("vibration_switch");
                    this.checkHideVibrationBtn(false);
                }
                var i = this._dialogContent.getChildByName("expand");
                this._lockHighlightSwitchNode = i.getChildByName("lock_highlight_switch");
                this.hideLockHighlightForTile2();
                var o = this._dialogContent.getChildByName("bottom_node");
                if (cc.isValid(o)) {
                    var n = o.getChildByName("terms");
                    if (cc.isValid(n)) {
                        this.OnButtonClick(n, this.onTermsBtnClick.bind(this));
                        n.on(cc.Node.EventType.SIZE_CHANGED, function () {
                            return t.refreshChildrenWidget(n);
                        }, this);
                    }
                    var a = o.getChildByName("privacy_policy");
                    if (cc.isValid(a)) {
                        this.OnButtonClick(a, this.onPrivacyPolicyBtnClick.bind(this));
                        a.on(cc.Node.EventType.SIZE_CHANGED, function () {
                            return t.refreshChildrenWidget(a);
                        }, this);
                    }
                }
                var r = this._dialogContent.getChildByName("bottom_layout");
                if (cc.isValid(r)) {
                    r.on(cc.Node.EventType.SIZE_CHANGED, this.onBottomLayoutSizeChanged, this);
                    this._replayBtn = r.getChildByName("btn_replay");
                }
                var c = this._dialogContent.getChildByName("top_bg");
                this.adjustPanelHeight();
                cc.isValid(c) && (this._closeBtn = c.getChildByName("btn_close"));
                var s = this._dialogContent.getChildByName("version_text");
                if (cc.isValid(s)) {
                    var l = LoginModel_1.default.getInstance().version || "";
                    s.getComponent(cc.Label).string = "" + l;
                }
            }
        }
    };
    UISettingsDialog.prototype.checkHideVibrationBtn = function (t) {
        if (cc.isValid(this._vibrationSwitchNode) && t) {
            this._vibrationSwitchNode.active = false;
            this._vibrationEnabled = false;
            UserModel_1.default.getInstance().setVibrationEnabled(this._vibrationEnabled);
        }
    };
    UISettingsDialog.prototype.isHideLockHighlightForTile2 = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    UISettingsDialog.prototype.hideLockHighlightForTile2 = function () {
        this.isHideLockHighlightForTile2() && cc.isValid(this._lockHighlightSwitchNode) && (this._lockHighlightSwitchNode.active = false);
    };
    UISettingsDialog.prototype.adjustPanelHeight = function (t, e) {
        if (t === void 0) { t = []; }
        if (e === void 0) { e = null; }
        if (cc.isValid(this._dialogContent)) {
            var i = this._dialogContent.getChildByName("expand");
            if (cc.isValid(i)) {
                var o = 0;
                this._lockHighlightSwitchNode && this._lockHighlightSwitchNode.active || (o -= this._lockHighlightSwitchNode.height);
                t.forEach(function (t) {
                    if (cc.isValid(t) && cc.isValid(i)) {
                        t.parent = i;
                        t.hasOwnProperty("CustomSlibingIndex") && "number" == typeof t.CustomSlibingIndex && t.setSiblingIndex(t.CustomSlibingIndex);
                        var e = i.getComponent(cc.Layout);
                        e && (o += t.height + e.spacingY);
                    }
                });
                this._dialogContent.height = this.getDefaultContentHeight() + o;
                this.checkAddBackBtn();
                this.delegate.showResetSkinBtn() && this.needShowResetSkinBtn() && this.addResetSkinButton();
            }
        }
    };
    UISettingsDialog.prototype.needShowResetSkinBtn = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return !!this.hasShowResetSkinBtn(t) || !!this.hasCustomTheme(t);
    };
    UISettingsDialog.prototype.hasShowResetSkinBtn = function (t) {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(t);
        return 1 === (null == e ? void 0 : e.getHasShowResetSkinBtn());
    };
    UISettingsDialog.prototype.hasCustomTheme = function (t) {
        var e, i = null === (e = UserModel_1.default.getInstance().getGameDataByGameType(t)) || void 0 === e ? void 0 : e.getTheme();
        return !!i && i !== MainGameView_1.default.defaultTheme;
    };
    UISettingsDialog.prototype.addResetSkinButton = function () {
        var t = this, e = this._dialogContent.getChildByName("bottom_layout");
        if (cc.isValid(e)) {
            var i = e.getChildByName("UIResetSkinBtn");
            cc.isValid(i) || UIResetSkinBtn_1.UIResetSkinBtn.createUI().then(function (i) {
                if (cc.isValid(t._dialogContent) && cc.isValid(e)) {
                    var o = e.getChildByName("UIResetSkinBtn");
                    if (cc.isValid(o))
                        i.destroy();
                    else if (cc.isValid(i)) {
                        i.name = "UIResetSkinBtn";
                        var n = i.getComponent(UIResetSkinBtn_1.UIResetSkinBtn);
                        if (cc.isValid(n)) {
                            var a = t.getResetSkinButtonData();
                            n.setData(a);
                        }
                        var r = UserModel_1.default.getInstance().getCurrentGameType();
                        t.saveShowResetSkinBtn(r);
                        i.parent = e;
                        i.setSiblingIndex(10);
                        var c = i.height, s = e.getComponent(cc.Layout);
                        s && (c = i.height + s.spacingY);
                        t._dialogContent.height += c;
                    }
                }
            }).catch(function () { });
        }
    };
    UISettingsDialog.prototype.getResetSkinButtonData = function () {
        var t, e = this, i = UserModel_1.default.getInstance().getCurrentGameType();
        return {
            wallpaperId: (null === (t = UserModel_1.default.getInstance().getGameDataByGameType(i)) || void 0 === t ? void 0 : t.getTheme()) || null,
            onReset: function () {
                e.onResetSkinBtnClick();
            }
        };
    };
    UISettingsDialog.prototype.saveShowResetSkinBtn = function (t) {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(t);
        e && e.setHasShowResetSkinBtn(1);
    };
    UISettingsDialog.prototype.onResetSkinBtnClick = function () {
        var t, e = UserModel_1.default.getInstance().getCurrentGameType(), i = null === (t = UserModel_1.default.getInstance().getGameDataByGameType(e)) || void 0 === t ? void 0 : t.getTheme();
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_RESETTHEME, e, "", i);
        DGameBtnClick_1.DotGameBtnClick.dotResetTheme(i);
        this.delegate.close();
    };
    UISettingsDialog.prototype.onDialogContentSizeChanged = function () {
        this.refreshChildrenWidget(this._dialogContent);
    };
    UISettingsDialog.prototype.onBottomLayoutSizeChanged = function () {
        if (cc.isValid(this._dialogContent)) {
            var t = this._dialogContent.getChildByName("bottom_layout");
            cc.isValid(t) && this.updateWidget(t);
        }
    };
    UISettingsDialog.prototype.updateWidget = function (t) {
        cc.isValid(t) && t.getComponent(cc.Widget) && t.getComponent(cc.Widget).updateAlignment();
    };
    UISettingsDialog.prototype.refreshChildrenWidget = function (t) {
        var e, i;
        if (cc.isValid(t))
            try {
                for (var o = __values(t.children), n = o.next(); !n.done; n = o.next()) {
                    var a = n.value;
                    this.updateWidget(a);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    n && !n.done && (i = o.return) && i.call(o);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
    };
    UISettingsDialog.prototype.checkAddBackBtn = function () {
        return cc.isValid(this._dialogContent) && cc.isValid(this._replayBtn) ? {
            dialogContent: this._dialogContent,
            replayBtn: this._replayBtn
        } : null;
    };
    UISettingsDialog.prototype.getDefaultContentHeight = function () {
        return 1100;
    };
    UISettingsDialog.prototype.initEvents = function () {
        if (this.checkRootNodeLoaded()) {
            this._musicSwitchNode && this.OnButtonClick(this._musicSwitchNode, this.onMusicSwitchClick.bind(this));
            this._soundSwitchNode && this.OnButtonClick(this._soundSwitchNode, this.onSoundSwitchClick.bind(this));
            this._vibrationSwitchNode && this.OnButtonClick(this._vibrationSwitchNode, this.onVibrationSwitchClick.bind(this));
            if (this._lockHighlightSwitchNode) {
                var t = this._lockHighlightSwitchNode.getChildByName("btn_rect");
                if (cc.isValid(t)) {
                    this.OnButtonClick(t, this.onLockHighlightSwitchClick.bind(this));
                }
                else {
                    this.OnButtonClick(this._lockHighlightSwitchNode, this.onLockHighlightSwitchClick.bind(this));
                }
                this.isLargeHitArea() && this.OnButtonClick(this._lockHighlightSwitchNode, this.onLockHighlightSwitchClick.bind(this));
            }
            this._replayBtn && this.OnButtonClick(this._replayBtn, this.onReplayBtnClick.bind(this));
            this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
        }
    };
    UISettingsDialog.prototype.onMusicSwitchClick = function () {
        this._musicEnabled = !this._musicEnabled;
        this.updateMusicSwitchDisplay();
        UserModel_1.default.getInstance().setMusicEnabled(this._musicEnabled);
        mj.audioManager.setBGMMuted(!this._musicEnabled);
        this._musicEnabled && mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
        UserPropteryManager_1.default.getInstance().report(AnalyzeTypes_1.EUserPropertyType.Music, this._musicEnabled ? 1 : 0);
    };
    UISettingsDialog.prototype.onSoundSwitchClick = function () {
        this._soundEnabled = !this._soundEnabled;
        this.updateSoundSwitchDisplay();
        UserModel_1.default.getInstance().setSoundEnabled(this._soundEnabled);
        mj.audioManager.setEffectMuted(!this._soundEnabled);
        UserPropteryManager_1.default.getInstance().report(AnalyzeTypes_1.EUserPropertyType.Sound, this._soundEnabled ? 1 : 0);
    };
    UISettingsDialog.prototype.onVibrationSwitchClick = function () {
        this._vibrationEnabled = !this._vibrationEnabled;
        this.updateVibrationSwitchDisplay();
        UserModel_1.default.getInstance().setVibrationEnabled(this._vibrationEnabled);
        UserPropteryManager_1.default.getInstance().report(AnalyzeTypes_1.EUserPropertyType.Vibration, this._vibrationEnabled ? 1 : 0);
    };
    UISettingsDialog.prototype.onLockHighlightSwitchClick = function () {
        this._lockHighlightEnabled = !this._lockHighlightEnabled;
        this.updateLockHighlightSwitchDisplay(this._lockHighlightEnabled);
        UserModel_1.default.getInstance().setLockHighlightEnabled(this._lockHighlightEnabled);
        UserPropteryManager_1.default.getInstance().report(AnalyzeTypes_1.EUserPropertyType.HighlightFreeTiles, this._lockHighlightEnabled ? 1 : 0);
    };
    UISettingsDialog.prototype.updateMusicSwitchDisplay = function () {
        var t, e;
        cc.isValid(null === (t = this._musicSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._musicSwitchNode.getChildByName("bg").getChildByName("on").active = this._musicEnabled);
        cc.isValid(null === (e = this._musicSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._musicSwitchNode.getChildByName("bg").getChildByName("off").active = !this._musicEnabled);
    };
    UISettingsDialog.prototype.updateSoundSwitchDisplay = function () {
        var t, e;
        cc.isValid(null === (t = this._soundSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._soundSwitchNode.getChildByName("bg").getChildByName("on").active = this._soundEnabled);
        cc.isValid(null === (e = this._soundSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._soundSwitchNode.getChildByName("bg").getChildByName("off").active = !this._soundEnabled);
    };
    UISettingsDialog.prototype.updateVibrationSwitchDisplay = function () {
        var t, e;
        cc.isValid(null === (t = this._vibrationSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._vibrationSwitchNode.getChildByName("bg").getChildByName("on").active = this._vibrationEnabled);
        cc.isValid(null === (e = this._vibrationSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._vibrationSwitchNode.getChildByName("bg").getChildByName("off").active = !this._vibrationEnabled);
    };
    UISettingsDialog.prototype.updateLockHighlightSwitchDisplay = function (t) {
        cc.isValid(this._lockHighlightSwitchNode.getChildByName("on")) && (this._lockHighlightSwitchNode.getChildByName("on").active = t);
        cc.isValid(this._lockHighlightSwitchNode.getChildByName("off")) && (this._lockHighlightSwitchNode.getChildByName("off").active = !t);
    };
    UISettingsDialog.prototype.onReplayBtnClick = function () {
        if (cc.isValid(this.node) && !this._replayBtnDisabled) {
            this._replayBtnDisabled = true;
            this.closeDialog();
            setTimeout(function () {
                DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.InGameSetting_Restart);
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.Restart,
                    callFrom: "setting"
                });
            }, 0);
        }
    };
    UISettingsDialog.prototype.onCloseBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.InGameSetting_Closed);
        DGameUserSetting_1.DotGameUserSetting.dot();
        this.closeDialog();
    };
    UISettingsDialog.prototype.onTermsBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.InGameSetting_PolicyTerm);
        mj.sdk.aboutUs();
    };
    UISettingsDialog.prototype.onPrivacyPolicyBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.InGameSetting_PrivacyAgreement);
        mj.sdk.privacy();
    };
    UISettingsDialog.prototype.playCloseAnimation = function (t) {
        if (this._dialogContent) {
            cc.tween(this._dialogContent).to(0.15, {
                scale: 0.8,
                opacity: 0
            }).call(function () {
                t();
            }).start();
        }
        else {
            t();
        }
    };
    UISettingsDialog.prototype.closeDialog = function () {
        var t = this;
        this.playCloseAnimation(function () {
            t.delegate.close();
        });
    };
    UISettingsDialog.prototype.updateSettingsState = function () {
        this._musicEnabled = UserModel_1.default.getInstance().isMusicEnabled();
        this._soundEnabled = UserModel_1.default.getInstance().isSoundEnabled();
        this._vibrationEnabled = UserModel_1.default.getInstance().isVibrationEnabled();
        this._lockHighlightEnabled = UserModel_1.default.getInstance().isLockHighlightEnabled();
        this.updateMusicSwitchDisplay();
        this.updateSoundSwitchDisplay();
        this.updateVibrationSwitchDisplay();
        this.updateLockHighlightSwitchDisplay(this._lockHighlightEnabled);
    };
    UISettingsDialog.prototype.checkRootNodeLoaded = function () {
        return !!cc.isValid(this.node);
    };
    UISettingsDialog.prototype.getLockHighlightSwitchNode = function () {
        return this._lockHighlightSwitchNode;
    };
    UISettingsDialog.prototype.isLargeHitArea = function () {
        return false;
    };
    UISettingsDialog.prefabUrl = "prefabs/ui/settingsDialog/UISettingsDialog";
    __decorate([
        mj.traitEvent("UISetDlg_HideVbBtn")
    ], UISettingsDialog.prototype, "checkHideVibrationBtn", null);
    __decorate([
        mj.traitEvent("UISetDlg_isHideLkT2")
    ], UISettingsDialog.prototype, "isHideLockHighlightForTile2", null);
    __decorate([
        mj.traitEvent("UISetDlg_adjustPH")
    ], UISettingsDialog.prototype, "adjustPanelHeight", null);
    __decorate([
        mj.traitEvent("UISetDlg_chkAddBack")
    ], UISettingsDialog.prototype, "checkAddBackBtn", null);
    __decorate([
        mj.traitEvent("UISetDlg_getDch")
    ], UISettingsDialog.prototype, "getDefaultContentHeight", null);
    __decorate([
        mj.traitEvent("UISetDlg_onMusicClick")
    ], UISettingsDialog.prototype, "onMusicSwitchClick", null);
    __decorate([
        mj.traitEvent("UISetDlg_onVibClick")
    ], UISettingsDialog.prototype, "onVibrationSwitchClick", null);
    __decorate([
        mj.traitEvent("UISetDlg_onLckHLClk")
    ], UISettingsDialog.prototype, "onLockHighlightSwitchClick", null);
    __decorate([
        mj.traitEvent("UISetDlg_updLckHL")
    ], UISettingsDialog.prototype, "updateLockHighlightSwitchDisplay", null);
    __decorate([
        mj.traitEvent("UISetDlg_onReplay")
    ], UISettingsDialog.prototype, "onReplayBtnClick", null);
    __decorate([
        mj.traitEvent("UISetDlg_close")
    ], UISettingsDialog.prototype, "closeDialog", null);
    __decorate([
        mj.traitEvent("UISetDlg_isLarge")
    ], UISettingsDialog.prototype, "isLargeHitArea", null);
    UISettingsDialog = __decorate([
        mj.class
    ], UISettingsDialog);
    return UISettingsDialog;
}(UIView_1.default));
exports.UISettingsDialog = UISettingsDialog;

cc._RF.pop();
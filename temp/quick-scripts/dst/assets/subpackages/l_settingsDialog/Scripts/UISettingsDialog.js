
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/UISettingsDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvVUlTZXR0aW5nc0RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFpRTtBQUNqRSxtRkFBbUY7QUFDbkYsd0ZBQThGO0FBQzlGLG9GQUFtRjtBQUNuRiwrREFBMEQ7QUFDMUQsK0VBQW1GO0FBQ25GLDZGQUF3RjtBQUN4RixvRUFBNEY7QUFDNUYsc0VBQXVFO0FBQ3ZFLCtFQUEwRTtBQUMxRSxzRUFBaUU7QUFDakUsbURBQWtEO0FBQ2xELHdFQUFtRTtBQUVuRTtJQUFzQyxvQ0FBTTtJQUE1QztRQUFBLHFFQTJWQztRQTFWQyxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6Qiw4QkFBd0IsR0FBRyxJQUFJLENBQUM7UUFDaEMsMkJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsd0JBQWtCLEdBQUcsS0FBSyxDQUFDOztJQThVN0IsQ0FBQztJQTVVQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELGlDQUFNLEdBQU47UUFDRSxJQUFJLENB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Z0JBQU0sR0EyVjNDO0FBM1ZZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVWVF9NU0dfS0VZX1JFU0VUVEhFTUUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NvbmZpZyc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IEVVc2VyUHJvcGVydHlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9hbmFseXplL0FuYWx5emVUeXBlcyc7XG5pbXBvcnQgVXNlclByb3B0ZXJ5TWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2FuYWx5emUvVXNlclByb3B0ZXJ5TWFuYWdlcic7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVHYW1lU2V0dGluZ0NsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRG90R2FtZVVzZXJTZXR0aW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9ER2FtZVVzZXJTZXR0aW5nJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgVUlSZXNldFNraW5CdG4gfSBmcm9tICcuL1VJUmVzZXRTa2luQnRuJztcbmltcG9ydCBNYWluR2FtZVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lL3ZpZXcvTWFpbkdhbWVWaWV3JztcbkBtai5jbGFzc1xuZXhwb3J0IGNsYXNzIFVJU2V0dGluZ3NEaWFsb2cgZXh0ZW5kcyBVSVZpZXcge1xuICBkZWxlZ2F0ZSA9IG51bGw7XG4gIF9kaWFsb2dDb250ZW50ID0gbnVsbDtcbiAgX211c2ljU3dpdGNoTm9kZSA9IG51bGw7XG4gIF9tdXNpY0VuYWJsZWQgPSB0cnVlO1xuICBfc291bmRTd2l0Y2hOb2RlID0gbnVsbDtcbiAgX3NvdW5kRW5hYmxlZCA9IHRydWU7XG4gIF92aWJyYXRpb25Td2l0Y2hOb2RlID0gbnVsbDtcbiAgX3ZpYnJhdGlvbkVuYWJsZWQgPSB0cnVlO1xuICBfbG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUgPSBudWxsO1xuICBfbG9ja0hpZ2hsaWdodEVuYWJsZWQgPSB0cnVlO1xuICBfcmVwbGF5QnRuID0gbnVsbDtcbiAgX2Nsb3NlQnRuID0gbnVsbDtcbiAgX3JlcGxheUJ0bkRpc2FibGVkID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvc2V0dGluZ3NEaWFsb2cvVUlTZXR0aW5nc0RpYWxvZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB0aGlzLnVwZGF0ZVNldHRpbmdzU3RhdGUoKTtcbiAgfVxuICBpbml0VUkoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLmNoZWNrUm9vdE5vZGVMb2FkZWQoKSkge1xuICAgICAgdGhpcy5fZGlhbG9nQ29udGVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9kaWFsb2dDb250ZW50KSkge1xuICAgICAgICB0aGlzLl9kaWFsb2dDb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5vbkRpYWxvZ0NvbnRlbnRTaXplQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3JlcGxheUJ0bkRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlID0gdGhpcy5fZGlhbG9nQ29udGVudC5nZXRDaGlsZEJ5TmFtZShcInNldHRpbmdzXCIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICAgIHRoaXMuX211c2ljU3dpdGNoTm9kZSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJtdXNpY19zd2l0Y2hcIik7XG4gICAgICAgICAgdGhpcy5fc291bmRTd2l0Y2hOb2RlID0gZS5nZXRDaGlsZEJ5TmFtZShcInNvdW5kX3N3aXRjaFwiKTtcbiAgICAgICAgICB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlID0gZS5nZXRDaGlsZEJ5TmFtZShcInZpYnJhdGlvbl9zd2l0Y2hcIik7XG4gICAgICAgICAgdGhpcy5jaGVja0hpZGVWaWJyYXRpb25CdG4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy5fZGlhbG9nQ29udGVudC5nZXRDaGlsZEJ5TmFtZShcImV4cGFuZFwiKTtcbiAgICAgICAgdGhpcy5fbG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUgPSBpLmdldENoaWxkQnlOYW1lKFwibG9ja19oaWdobGlnaHRfc3dpdGNoXCIpO1xuICAgICAgICB0aGlzLmhpZGVMb2NrSGlnaGxpZ2h0Rm9yVGlsZTIoKTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm90dG9tX25vZGVcIik7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgICAgdmFyIG4gPSBvLmdldENoaWxkQnlOYW1lKFwidGVybXNcIik7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgICAgIHRoaXMuT25CdXR0b25DbGljayhuLCB0aGlzLm9uVGVybXNCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIG4ub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0LnJlZnJlc2hDaGlsZHJlbldpZGdldChuKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgYSA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJwcml2YWN5X3BvbGljeVwiKTtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChhKSkge1xuICAgICAgICAgICAgdGhpcy5PbkJ1dHRvbkNsaWNrKGEsIHRoaXMub25Qcml2YWN5UG9saWN5QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdC5yZWZyZXNoQ2hpbGRyZW5XaWRnZXQoYSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2xheW91dFwiKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgICByLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5vbkJvdHRvbUxheW91dFNpemVDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9yZXBsYXlCdG4gPSByLmdldENoaWxkQnlOYW1lKFwiYnRuX3JlcGxheVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IHRoaXMuX2RpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfYmdcIik7XG4gICAgICAgIHRoaXMuYWRqdXN0UGFuZWxIZWlnaHQoKTtcbiAgICAgICAgY2MuaXNWYWxpZChjKSAmJiAodGhpcy5fY2xvc2VCdG4gPSBjLmdldENoaWxkQnlOYW1lKFwiYnRuX2Nsb3NlXCIpKTtcbiAgICAgICAgdmFyIHMgPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwidmVyc2lvbl90ZXh0XCIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChzKSkge1xuICAgICAgICAgIHZhciBsID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLnZlcnNpb24gfHwgXCJcIjtcbiAgICAgICAgICBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVNldERsZ19IaWRlVmJCdG5cIilcbiAgY2hlY2tIaWRlVmlicmF0aW9uQnRuKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlKSAmJiB0KSB7XG4gICAgICB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fdmlicmF0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0VmlicmF0aW9uRW5hYmxlZCh0aGlzLl92aWJyYXRpb25FbmFibGVkKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVNldERsZ19pc0hpZGVMa1QyXCIpXG4gIGlzSGlkZUxvY2tIaWdobGlnaHRGb3JUaWxlMigpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgaGlkZUxvY2tIaWdobGlnaHRGb3JUaWxlMigpIHtcbiAgICB0aGlzLmlzSGlkZUxvY2tIaWdobGlnaHRGb3JUaWxlMigpICYmIGNjLmlzVmFsaWQodGhpcy5fbG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUpICYmICh0aGlzLl9sb2NrSGlnaGxpZ2h0U3dpdGNoTm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVNldERsZ19hZGp1c3RQSFwiKVxuICBhZGp1c3RQYW5lbEhlaWdodCh0ID0gW10sIGUgPSBudWxsKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fZGlhbG9nQ29udGVudCkpIHtcbiAgICAgIHZhciBpID0gdGhpcy5fZGlhbG9nQ29udGVudC5nZXRDaGlsZEJ5TmFtZShcImV4cGFuZFwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgdGhpcy5fbG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUgJiYgdGhpcy5fbG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUuYWN0aXZlIHx8IChvIC09IHRoaXMuX2xvY2tIaWdobGlnaHRTd2l0Y2hOb2RlLmhlaWdodCk7XG4gICAgICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHQpICYmIGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgICAgIHQucGFyZW50ID0gaTtcbiAgICAgICAgICAgIHQuaGFzT3duUHJvcGVydHkoXCJDdXN0b21TbGliaW5nSW5kZXhcIikgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgdC5DdXN0b21TbGliaW5nSW5kZXggJiYgdC5zZXRTaWJsaW5nSW5kZXgodC5DdXN0b21TbGliaW5nSW5kZXgpO1xuICAgICAgICAgICAgdmFyIGUgPSBpLmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgICAgICAgICAgZSAmJiAobyArPSB0LmhlaWdodCArIGUuc3BhY2luZ1kpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2RpYWxvZ0NvbnRlbnQuaGVpZ2h0ID0gdGhpcy5nZXREZWZhdWx0Q29udGVudEhlaWdodCgpICsgbztcbiAgICAgICAgdGhpcy5jaGVja0FkZEJhY2tCdG4oKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zaG93UmVzZXRTa2luQnRuKCkgJiYgdGhpcy5uZWVkU2hvd1Jlc2V0U2tpbkJ0bigpICYmIHRoaXMuYWRkUmVzZXRTa2luQnV0dG9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5lZWRTaG93UmVzZXRTa2luQnRuKCkge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgcmV0dXJuICEhdGhpcy5oYXNTaG93UmVzZXRTa2luQnRuKHQpIHx8ICEhdGhpcy5oYXNDdXN0b21UaGVtZSh0KTtcbiAgfVxuICBoYXNTaG93UmVzZXRTa2luQnRuKHQpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0KTtcbiAgICByZXR1cm4gMSA9PT0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0SGFzU2hvd1Jlc2V0U2tpbkJ0bigpKTtcbiAgfVxuICBoYXNDdXN0b21UaGVtZSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBpID0gbnVsbCA9PT0gKGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0VGhlbWUoKTtcbiAgICByZXR1cm4gISFpICYmIGkgIT09IE1haW5HYW1lVmlldy5kZWZhdWx0VGhlbWU7XG4gIH1cbiAgYWRkUmVzZXRTa2luQnV0dG9uKCkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGUgPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2xheW91dFwiKTtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgdmFyIGkgPSBlLmdldENoaWxkQnlOYW1lKFwiVUlSZXNldFNraW5CdG5cIik7XG4gICAgICBjYy5pc1ZhbGlkKGkpIHx8IFVJUmVzZXRTa2luQnRuLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoaSkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0Ll9kaWFsb2dDb250ZW50KSAmJiBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgICAgdmFyIG8gPSBlLmdldENoaWxkQnlOYW1lKFwiVUlSZXNldFNraW5CdG5cIik7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQobykpIGkuZGVzdHJveSgpO2Vsc2UgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgICAgIGkubmFtZSA9IFwiVUlSZXNldFNraW5CdG5cIjtcbiAgICAgICAgICAgIHZhciBuID0gaS5nZXRDb21wb25lbnQoVUlSZXNldFNraW5CdG4pO1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSB0LmdldFJlc2V0U2tpbkJ1dHRvbkRhdGEoKTtcbiAgICAgICAgICAgICAgbi5zZXREYXRhKGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgICAgICAgIHQuc2F2ZVNob3dSZXNldFNraW5CdG4ocik7XG4gICAgICAgICAgICBpLnBhcmVudCA9IGU7XG4gICAgICAgICAgICBpLnNldFNpYmxpbmdJbmRleCgxMCk7XG4gICAgICAgICAgICB2YXIgYyA9IGkuaGVpZ2h0LFxuICAgICAgICAgICAgICBzID0gZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgICAgIHMgJiYgKGMgPSBpLmhlaWdodCArIHMuc3BhY2luZ1kpO1xuICAgICAgICAgICAgdC5fZGlhbG9nQ29udGVudC5oZWlnaHQgKz0gYztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9XG4gIH1cbiAgZ2V0UmVzZXRTa2luQnV0dG9uRGF0YSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB0aGlzLFxuICAgICAgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIHJldHVybiB7XG4gICAgICB3YWxscGFwZXJJZDogKG51bGwgPT09ICh0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKGkpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldFRoZW1lKCkpIHx8IG51bGwsXG4gICAgICBvblJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUub25SZXNldFNraW5CdG5DbGljaygpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgc2F2ZVNob3dSZXNldFNraW5CdG4odCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHQpO1xuICAgIGUgJiYgZS5zZXRIYXNTaG93UmVzZXRTa2luQnRuKDEpO1xuICB9XG4gIG9uUmVzZXRTa2luQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBpID0gbnVsbCA9PT0gKHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoZSkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGhlbWUoKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfTVNHX0tFWV9SRVNFVFRIRU1FLCBlLCBcIlwiLCBpKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmVzZXRUaGVtZShpKTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgb25EaWFsb2dDb250ZW50U2l6ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW5XaWRnZXQodGhpcy5fZGlhbG9nQ29udGVudCk7XG4gIH1cbiAgb25Cb3R0b21MYXlvdXRTaXplQ2hhbmdlZCgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9kaWFsb2dDb250ZW50KSkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2xheW91dFwiKTtcbiAgICAgIGNjLmlzVmFsaWQodCkgJiYgdGhpcy51cGRhdGVXaWRnZXQodCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVdpZGdldCh0KSB7XG4gICAgY2MuaXNWYWxpZCh0KSAmJiB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpICYmIHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gIH1cbiAgcmVmcmVzaENoaWxkcmVuV2lkZ2V0KHQpIHtcbiAgICB2YXIgZSwgaTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSkgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0LmNoaWxkcmVuKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGEgPSBuLnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZGdldChhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmIChpID0gby5yZXR1cm4pICYmIGkuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0RGxnX2Noa0FkZEJhY2tcIilcbiAgY2hlY2tBZGRCYWNrQnRuKCkge1xuICAgIHJldHVybiBjYy5pc1ZhbGlkKHRoaXMuX2RpYWxvZ0NvbnRlbnQpICYmIGNjLmlzVmFsaWQodGhpcy5fcmVwbGF5QnRuKSA/IHtcbiAgICAgIGRpYWxvZ0NvbnRlbnQ6IHRoaXMuX2RpYWxvZ0NvbnRlbnQsXG4gICAgICByZXBsYXlCdG46IHRoaXMuX3JlcGxheUJ0blxuICAgIH0gOiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlTZXREbGdfZ2V0RGNoXCIpXG4gIGdldERlZmF1bHRDb250ZW50SGVpZ2h0KCkge1xuICAgIHJldHVybiAxMTAwO1xuICB9XG4gIGluaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tSb290Tm9kZUxvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9tdXNpY1N3aXRjaE5vZGUgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX211c2ljU3dpdGNoTm9kZSwgdGhpcy5vbk11c2ljU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9zb3VuZFN3aXRjaE5vZGUgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX3NvdW5kU3dpdGNoTm9kZSwgdGhpcy5vblNvdW5kU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLCB0aGlzLm9uVmlicmF0aW9uU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICBpZiAodGhpcy5fbG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLl9sb2NrSGlnaGxpZ2h0U3dpdGNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9yZWN0XCIpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICAgIHRoaXMuT25CdXR0b25DbGljayh0LCB0aGlzLm9uTG9ja0hpZ2hsaWdodFN3aXRjaENsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9sb2NrSGlnaGxpZ2h0U3dpdGNoTm9kZSwgdGhpcy5vbkxvY2tIaWdobGlnaHRTd2l0Y2hDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTGFyZ2VIaXRBcmVhKCkgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2xvY2tIaWdobGlnaHRTd2l0Y2hOb2RlLCB0aGlzLm9uTG9ja0hpZ2hsaWdodFN3aXRjaENsaWNrLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVwbGF5QnRuICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9yZXBsYXlCdG4sIHRoaXMub25SZXBsYXlCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2Nsb3NlQnRuICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9jbG9zZUJ0biwgdGhpcy5vbkNsb3NlQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlTZXREbGdfb25NdXNpY0NsaWNrXCIpXG4gIG9uTXVzaWNTd2l0Y2hDbGljaygpIHtcbiAgICB0aGlzLl9tdXNpY0VuYWJsZWQgPSAhdGhpcy5fbXVzaWNFbmFibGVkO1xuICAgIHRoaXMudXBkYXRlTXVzaWNTd2l0Y2hEaXNwbGF5KCk7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0TXVzaWNFbmFibGVkKHRoaXMuX211c2ljRW5hYmxlZCk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnNldEJHTU11dGVkKCF0aGlzLl9tdXNpY0VuYWJsZWQpO1xuICAgIHRoaXMuX211c2ljRW5hYmxlZCAmJiBtai5hdWRpb01hbmFnZXIucGxheUJHTShFQXVkaW9JRC5CZ20sIHRydWUpO1xuICAgIFVzZXJQcm9wdGVyeU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZXBvcnQoRVVzZXJQcm9wZXJ0eVR5cGUuTXVzaWMsIHRoaXMuX211c2ljRW5hYmxlZCA/IDEgOiAwKTtcbiAgfVxuICBvblNvdW5kU3dpdGNoQ2xpY2soKSB7XG4gICAgdGhpcy5fc291bmRFbmFibGVkID0gIXRoaXMuX3NvdW5kRW5hYmxlZDtcbiAgICB0aGlzLnVwZGF0ZVNvdW5kU3dpdGNoRGlzcGxheSgpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldFNvdW5kRW5hYmxlZCh0aGlzLl9zb3VuZEVuYWJsZWQpO1xuICAgIG1qLmF1ZGlvTWFuYWdlci5zZXRFZmZlY3RNdXRlZCghdGhpcy5fc291bmRFbmFibGVkKTtcbiAgICBVc2VyUHJvcHRlcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVwb3J0KEVVc2VyUHJvcGVydHlUeXBlLlNvdW5kLCB0aGlzLl9zb3VuZEVuYWJsZWQgPyAxIDogMCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVNldERsZ19vblZpYkNsaWNrXCIpXG4gIG9uVmlicmF0aW9uU3dpdGNoQ2xpY2soKSB7XG4gICAgdGhpcy5fdmlicmF0aW9uRW5hYmxlZCA9ICF0aGlzLl92aWJyYXRpb25FbmFibGVkO1xuICAgIHRoaXMudXBkYXRlVmlicmF0aW9uU3dpdGNoRGlzcGxheSgpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldFZpYnJhdGlvbkVuYWJsZWQodGhpcy5fdmlicmF0aW9uRW5hYmxlZCk7XG4gICAgVXNlclByb3B0ZXJ5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlcG9ydChFVXNlclByb3BlcnR5VHlwZS5WaWJyYXRpb24sIHRoaXMuX3ZpYnJhdGlvbkVuYWJsZWQgPyAxIDogMCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVNldERsZ19vbkxja0hMQ2xrXCIpXG4gIG9uTG9ja0hpZ2hsaWdodFN3aXRjaENsaWNrKCkge1xuICAgIHRoaXMuX2xvY2tIaWdobGlnaHRFbmFibGVkID0gIXRoaXMuX2xvY2tIaWdobGlnaHRFbmFibGVkO1xuICAgIHRoaXMudXBkYXRlTG9ja0hpZ2hsaWdodFN3aXRjaERpc3BsYXkodGhpcy5fbG9ja0hpZ2hsaWdodEVuYWJsZWQpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldExvY2tIaWdobGlnaHRFbmFibGVkKHRoaXMuX2xvY2tIaWdobGlnaHRFbmFibGVkKTtcbiAgICBVc2VyUHJvcHRlcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVwb3J0KEVVc2VyUHJvcGVydHlUeXBlLkhpZ2hsaWdodEZyZWVUaWxlcywgdGhpcy5fbG9ja0hpZ2hsaWdodEVuYWJsZWQgPyAxIDogMCk7XG4gIH1cbiAgdXBkYXRlTXVzaWNTd2l0Y2hEaXNwbGF5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKHQgPSB0aGlzLl9tdXNpY1N3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDaGlsZEJ5TmFtZShcIm9uXCIpKSAmJiAodGhpcy5fbXVzaWNTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvblwiKS5hY3RpdmUgPSB0aGlzLl9tdXNpY0VuYWJsZWQpO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKGUgPSB0aGlzLl9tdXNpY1N3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKSkgJiYgKHRoaXMuX211c2ljU3dpdGNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib2ZmXCIpLmFjdGl2ZSA9ICF0aGlzLl9tdXNpY0VuYWJsZWQpO1xuICB9XG4gIHVwZGF0ZVNvdW5kU3dpdGNoRGlzcGxheSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICBjYy5pc1ZhbGlkKG51bGwgPT09ICh0ID0gdGhpcy5fc291bmRTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJvblwiKSkgJiYgKHRoaXMuX3NvdW5kU3dpdGNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib25cIikuYWN0aXZlID0gdGhpcy5fc291bmRFbmFibGVkKTtcbiAgICBjYy5pc1ZhbGlkKG51bGwgPT09IChlID0gdGhpcy5fc291bmRTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIikpICYmICh0aGlzLl9zb3VuZFN3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKS5hY3RpdmUgPSAhdGhpcy5fc291bmRFbmFibGVkKTtcbiAgfVxuICB1cGRhdGVWaWJyYXRpb25Td2l0Y2hEaXNwbGF5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKHQgPSB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJvblwiKSkgJiYgKHRoaXMuX3ZpYnJhdGlvblN3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9uXCIpLmFjdGl2ZSA9IHRoaXMuX3ZpYnJhdGlvbkVuYWJsZWQpO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKGUgPSB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIikpICYmICh0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIikuYWN0aXZlID0gIXRoaXMuX3ZpYnJhdGlvbkVuYWJsZWQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlTZXREbGdfdXBkTGNrSExcIilcbiAgdXBkYXRlTG9ja0hpZ2hsaWdodFN3aXRjaERpc3BsYXkodCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5fbG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJvblwiKSkgJiYgKHRoaXMuX2xvY2tIaWdobGlnaHRTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwib25cIikuYWN0aXZlID0gdCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9sb2NrSGlnaGxpZ2h0U3dpdGNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKSkgJiYgKHRoaXMuX2xvY2tIaWdobGlnaHRTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwib2ZmXCIpLmFjdGl2ZSA9ICF0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0RGxnX29uUmVwbGF5XCIpXG4gIG9uUmVwbGF5QnRuQ2xpY2soKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiAhdGhpcy5fcmVwbGF5QnRuRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlcGxheUJ0bkRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBEb3RHYW1lQnRuQ2xpY2suZG90U2V0dGluZyhFR2FtZVNldHRpbmdDbGlja1R5cGUuSW5HYW1lU2V0dGluZ19SZXN0YXJ0KTtcbiAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlJlc3RhcnQsXG4gICAgICAgICAgY2FsbEZyb206IFwic2V0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90U2V0dGluZyhFR2FtZVNldHRpbmdDbGlja1R5cGUuSW5HYW1lU2V0dGluZ19DbG9zZWQpO1xuICAgIERvdEdhbWVVc2VyU2V0dGluZy5kb3QoKTtcbiAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gIH1cbiAgb25UZXJtc0J0bkNsaWNrKCkge1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RTZXR0aW5nKEVHYW1lU2V0dGluZ0NsaWNrVHlwZS5JbkdhbWVTZXR0aW5nX1BvbGljeVRlcm0pO1xuICAgIG1qLnNkay5hYm91dFVzKCk7XG4gIH1cbiAgb25Qcml2YWN5UG9saWN5QnRuQ2xpY2soKSB7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFNldHRpbmcoRUdhbWVTZXR0aW5nQ2xpY2tUeXBlLkluR2FtZVNldHRpbmdfUHJpdmFjeUFncmVlbWVudCk7XG4gICAgbWouc2RrLnByaXZhY3koKTtcbiAgfVxuICBwbGF5Q2xvc2VBbmltYXRpb24odCkge1xuICAgIGlmICh0aGlzLl9kaWFsb2dDb250ZW50KSB7XG4gICAgICBjYy50d2Vlbih0aGlzLl9kaWFsb2dDb250ZW50KS50bygwLjE1LCB7XG4gICAgICAgIHNjYWxlOiAwLjgsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0KCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlTZXREbGdfY2xvc2VcIilcbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMucGxheUNsb3NlQW5pbWF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVTZXR0aW5nc1N0YXRlKCkge1xuICAgIHRoaXMuX211c2ljRW5hYmxlZCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXVzaWNFbmFibGVkKCk7XG4gICAgdGhpcy5fc291bmRFbmFibGVkID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNTb3VuZEVuYWJsZWQoKTtcbiAgICB0aGlzLl92aWJyYXRpb25FbmFibGVkID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNWaWJyYXRpb25FbmFibGVkKCk7XG4gICAgdGhpcy5fbG9ja0hpZ2hsaWdodEVuYWJsZWQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0xvY2tIaWdobGlnaHRFbmFibGVkKCk7XG4gICAgdGhpcy51cGRhdGVNdXNpY1N3aXRjaERpc3BsYXkoKTtcbiAgICB0aGlzLnVwZGF0ZVNvdW5kU3dpdGNoRGlzcGxheSgpO1xuICAgIHRoaXMudXBkYXRlVmlicmF0aW9uU3dpdGNoRGlzcGxheSgpO1xuICAgIHRoaXMudXBkYXRlTG9ja0hpZ2hsaWdodFN3aXRjaERpc3BsYXkodGhpcy5fbG9ja0hpZ2hsaWdodEVuYWJsZWQpO1xuICB9XG4gIGNoZWNrUm9vdE5vZGVMb2FkZWQoKSB7XG4gICAgcmV0dXJuICEhY2MuaXNWYWxpZCh0aGlzLm5vZGUpO1xuICB9XG4gIGdldExvY2tIaWdobGlnaHRTd2l0Y2hOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NrSGlnaGxpZ2h0U3dpdGNoTm9kZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0RGxnX2lzTGFyZ2VcIilcbiAgaXNMYXJnZUhpdEFyZWEoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19
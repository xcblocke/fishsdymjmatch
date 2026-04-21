"use strict";
cc._RF.push(module, 'cb27cOgopRMGKpvdocJKpem', 'UISettingsHome');
// subpackages/l_settingsHome/Scripts/UISettingsHome.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UISettingsHome = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var AnalyzeTypes_1 = require("../../../Scripts/gamePlay/analyze/AnalyzeTypes");
var UserPropteryManager_1 = require("../../../Scripts/gamePlay/analyze/UserPropteryManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DGameUserSetting_1 = require("../../../Scripts/DGameUserSetting");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingsHomeTrait_1 = require("./SettingsHomeTrait");
var UISettingsHome = /** @class */ (function (_super) {
    __extends(UISettingsHome, _super);
    function UISettingsHome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dialogContent = null;
        _this._musicSwitchNode = null;
        _this._musicEnabled = true;
        _this._soundSwitchNode = null;
        _this._soundEnabled = true;
        _this._vibrationSwitchNode = null;
        _this._vibrationEnabled = true;
        _this._closeBtn = null;
        _this._avatorIcon = null;
        _this._nickname = null;
        return _this;
    }
    UISettingsHome.getUrl = function () {
        return SettingsHomeTrait_1.default.getInstance().isUseSimpleUI() ? "prefab/UISettingsHomeSimple" : this.prefabUrl;
    };
    UISettingsHome.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
        this.updateSettingsState();
    };
    UISettingsHome.prototype.initUI = function () {
        var t = this;
        if (this.checkRootNodeLoaded()) {
            this._dialogContent = this.node.getChildByName("content");
            if (cc.isValid(this._dialogContent)) {
                this._dialogContent.on(cc.Node.EventType.SIZE_CHANGED, this.onDialogContentSizeChanged, this);
                var e = this._dialogContent.getChildByName("settings");
                if (cc.isValid(e)) {
                    this._musicSwitchNode = e.getChildByName("music_switch");
                    this._soundSwitchNode = e.getChildByName("sound_switch");
                    this._vibrationSwitchNode = e.getChildByName("vibration_switch");
                    this.checkHideVibrationBtn(false);
                }
                var i = this._dialogContent.getChildByName("bottom_node");
                if (cc.isValid(i)) {
                    var n = i.getChildByName("terms");
                    if (cc.isValid(n)) {
                        this.OnButtonClick(n, this.onTermsBtnClick.bind(this));
                        n.on(cc.Node.EventType.SIZE_CHANGED, function () {
                            return t.refreshChildrenWidget(n);
                        }, this);
                    }
                    var o = i.getChildByName("privacy_policy");
                    if (cc.isValid(o)) {
                        this.OnButtonClick(o, this.onPrivacyPolicyBtnClick.bind(this));
                        o.on(cc.Node.EventType.SIZE_CHANGED, function () {
                            return t.refreshChildrenWidget(o);
                        }, this);
                    }
                }
                this.adjustPanelHeight();
                var a = this._dialogContent.getChildByName("top_bg");
                cc.isValid(a) && (this._closeBtn = a.getChildByName("btn_close"));
                var s = this._dialogContent.getChildByName("version_text");
                if (cc.isValid(s)) {
                    var r = LoginModel_1.default.getInstance().version || "";
                    s.getComponent(cc.Label).string = "" + r;
                }
            }
        }
    };
    UISettingsHome.prototype.refreshAvator = function (t) {
        var e = this._dialogContent.getChildByName("avator");
        if (cc.isValid(e)) {
            var i = e.getChildByName("avator_bg");
            if (cc.isValid(i)) {
                this.OnButtonClick(i, this.onClickOpenUserInfo.bind(this));
                i.getComponent(cc.Sprite).spriteFrame = t.frameSprite;
            }
            this._avatorIcon = e.getChildByName("avator_icon");
            cc.isValid(this._avatorIcon) && (this._avatorIcon.getComponent(cc.Sprite).spriteFrame = t.avatarSprite);
            var n = e.getChildByName("nickname_node");
            if (cc.isValid(n)) {
                this.OnButtonClick(n, {
                    func: this.onClickOpenUserInfo.bind(this),
                    ignoreClickAudio: true
                });
                this._nickname = n.getChildByName("nickname");
                if (cc.isValid(this._nickname)) {
                    var o = UserModel_1.default.getInstance().getUserName();
                    this._nickname.getComponent(cc.Label).string = o;
                }
                var a = n.getChildByName("btn_edit");
                cc.isValid(a) && this.OnButtonClick(a, this.onClickOpenUserInfo.bind(this));
            }
        }
    };
    UISettingsHome.prototype.checkHideVibrationBtn = function (t) {
        if (cc.isValid(this._vibrationSwitchNode) && t) {
            this._vibrationSwitchNode.active = false;
            this._vibrationEnabled = false;
            UserModel_1.default.getInstance().setVibrationEnabled(this._vibrationEnabled);
        }
    };
    UISettingsHome.prototype.adjustPanelHeight = function (t, e) {
        if (t === void 0) { t = []; }
        if (e === void 0) { e = null; }
        var i = this._dialogContent.getChildByName("expand");
        if (cc.isValid(i)) {
            var n = 0;
            t.forEach(function (t) {
                if (cc.isValid(t)) {
                    t.parent = i;
                    n += t.height + i.getComponent(cc.Layout).spacingY;
                }
            });
            this._dialogContent.height = this.getDefaultContentHeight() + n;
        }
    };
    UISettingsHome.prototype.getDefaultContentHeight = function () {
        return 945;
    };
    UISettingsHome.prototype.onDialogContentSizeChanged = function () {
        this.refreshChildrenWidget(this._dialogContent);
    };
    UISettingsHome.prototype.updateWidget = function (t) {
        cc.isValid(t) && t.getComponent(cc.Widget) && t.getComponent(cc.Widget).updateAlignment();
    };
    UISettingsHome.prototype.refreshChildrenWidget = function (t) {
        var e, i;
        if (cc.isValid(t))
            try {
                for (var n = __values(t.children), o = n.next(); !o.done; o = n.next()) {
                    var a = o.value;
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
                    o && !o.done && (i = n.return) && i.call(n);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
    };
    UISettingsHome.prototype.initEvents = function () {
        if (this.checkRootNodeLoaded()) {
            this._musicSwitchNode && this.OnButtonClick(this._musicSwitchNode, this.onMusicSwitchClick.bind(this));
            this._soundSwitchNode && this.OnButtonClick(this._soundSwitchNode, this.onSoundSwitchClick.bind(this));
            this._vibrationSwitchNode && this.OnButtonClick(this._vibrationSwitchNode, this.onVibrationSwitchClick.bind(this));
            this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
        }
    };
    UISettingsHome.prototype.onMusicSwitchClick = function () {
        this._musicEnabled = !this._musicEnabled;
        this.updateMusicSwitchDisplay();
        UserModel_1.default.getInstance().setMusicEnabled(this._musicEnabled);
        mj.audioManager.setBGMMuted(!this._musicEnabled);
        this._musicEnabled && mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
        UserPropteryManager_1.default.getInstance().report(AnalyzeTypes_1.EUserPropertyType.Music, this._musicEnabled ? 1 : 0);
    };
    UISettingsHome.prototype.onSoundSwitchClick = function () {
        this._soundEnabled = !this._soundEnabled;
        this.updateSoundSwitchDisplay();
        UserModel_1.default.getInstance().setSoundEnabled(this._soundEnabled);
        mj.audioManager.setEffectMuted(!this._soundEnabled);
        UserPropteryManager_1.default.getInstance().report(AnalyzeTypes_1.EUserPropertyType.Sound, this._soundEnabled ? 1 : 0);
    };
    UISettingsHome.prototype.onVibrationSwitchClick = function () {
        this._vibrationEnabled = !this._vibrationEnabled;
        this.updateVibrationSwitchDisplay();
        UserModel_1.default.getInstance().setVibrationEnabled(this._vibrationEnabled);
        UserPropteryManager_1.default.getInstance().report(AnalyzeTypes_1.EUserPropertyType.Vibration, this._vibrationEnabled ? 1 : 0);
    };
    UISettingsHome.prototype.updateMusicSwitchDisplay = function () {
        var t, e;
        cc.isValid(null === (t = this._musicSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._musicSwitchNode.getChildByName("bg").getChildByName("on").active = this._musicEnabled);
        cc.isValid(null === (e = this._musicSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._musicSwitchNode.getChildByName("bg").getChildByName("off").active = !this._musicEnabled);
    };
    UISettingsHome.prototype.updateSoundSwitchDisplay = function () {
        var t, e;
        cc.isValid(null === (t = this._soundSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._soundSwitchNode.getChildByName("bg").getChildByName("on").active = this._soundEnabled);
        cc.isValid(null === (e = this._soundSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._soundSwitchNode.getChildByName("bg").getChildByName("off").active = !this._soundEnabled);
    };
    UISettingsHome.prototype.updateVibrationSwitchDisplay = function () {
        var t, e;
        cc.isValid(null === (t = this._vibrationSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._vibrationSwitchNode.getChildByName("bg").getChildByName("on").active = this._vibrationEnabled);
        cc.isValid(null === (e = this._vibrationSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._vibrationSwitchNode.getChildByName("bg").getChildByName("off").active = !this._vibrationEnabled);
    };
    UISettingsHome.prototype.onCloseBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.HomePageSetting_Closed);
        DGameUserSetting_1.DotGameUserSetting.dot();
        this.closeDialog();
    };
    UISettingsHome.prototype.onTermsBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.HomePageSetting_PolicyTerm);
        mj.sdk.aboutUs();
    };
    UISettingsHome.prototype.onPrivacyPolicyBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.HomePageSetting_PrivacyAgreement);
        mj.sdk.privacy();
    };
    UISettingsHome.prototype.playCloseAnimation = function (t) {
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
    UISettingsHome.prototype.closeDialog = function () {
        var t = this;
        this.playCloseAnimation(function () {
            t.delegate.close();
        });
    };
    UISettingsHome.prototype.updateSettingsState = function () {
        this._musicEnabled = UserModel_1.default.getInstance().isMusicEnabled();
        this._soundEnabled = UserModel_1.default.getInstance().isSoundEnabled();
        this._vibrationEnabled = UserModel_1.default.getInstance().isVibrationEnabled();
        this.updateMusicSwitchDisplay();
        this.updateSoundSwitchDisplay();
        this.updateVibrationSwitchDisplay();
    };
    UISettingsHome.prototype.checkRootNodeLoaded = function () {
        return !!cc.isValid(this.node);
    };
    UISettingsHome.prototype.onClickOpenUserInfo = function () {
        this.closeDialog();
    };
    UISettingsHome.prefabUrl = "prefabs/ui/settingsHome/UISettingsHome";
    __decorate([
        mj.traitEvent("UISetHome_refreshAvator")
    ], UISettingsHome.prototype, "refreshAvator", null);
    __decorate([
        mj.traitEvent("UISetHome_HideVbBtn")
    ], UISettingsHome.prototype, "checkHideVibrationBtn", null);
    __decorate([
        mj.traitEvent("UISetHome_adjustPH")
    ], UISettingsHome.prototype, "adjustPanelHeight", null);
    __decorate([
        mj.traitEvent("UISetHome_onMusicClick")
    ], UISettingsHome.prototype, "onMusicSwitchClick", null);
    __decorate([
        mj.traitEvent("UISetHome_onVibClick")
    ], UISettingsHome.prototype, "onVibrationSwitchClick", null);
    __decorate([
        mj.traitEvent("UISetHome_openUserInfo")
    ], UISettingsHome.prototype, "onClickOpenUserInfo", null);
    UISettingsHome = __decorate([
        mj.class
    ], UISettingsHome);
    return UISettingsHome;
}(UIView_1.default));
exports.UISettingsHome = UISettingsHome;

cc._RF.pop();
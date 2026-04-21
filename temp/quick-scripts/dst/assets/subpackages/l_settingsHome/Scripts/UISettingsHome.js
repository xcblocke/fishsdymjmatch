
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsHome/Scripts/UISettingsHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzSG9tZS9TY3JpcHRzL1VJU2V0dGluZ3NIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQWtGO0FBQ2xGLCtEQUEwRDtBQUMxRCwrRUFBbUY7QUFDbkYsNkZBQXdGO0FBQ3hGLG9FQUE0RjtBQUM1RixzRUFBdUU7QUFDdkUsK0VBQTBFO0FBQzFFLHNFQUFpRTtBQUNqRSx5REFBb0Q7QUFFcEQ7SUFBb0Msa0NBQU07SUFBMUM7UUFBQSxxRUF1T0M7UUF0T0Msb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQiwwQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUE2Tm5CLENBQUM7SUEzTlEscUJBQU0sR0FBYjtRQUNFLE9BQU8sMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFHLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUQsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDOUYsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7NEJBQ25DLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ1Y7b0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDL0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7NEJBQ25DLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ1Y7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxHQUFHLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQzthQUN2RDtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRTtvQkFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN6QyxnQkFBZ0IsRUFBRSxJQUFJO2lCQUN2QixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDbEQ7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0U7U0FDRjtJQUNILENBQUM7SUFFRCw4Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsQ0FBTSxFQUFFLENBQVE7UUFBaEIsa0JBQUEsRUFBQSxNQUFNO1FBQUUsa0JBQUEsRUFBQSxRQUFRO1FBQ2hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDbkIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7aUJBQ3BEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDO0lBQ0QsZ0RBQXVCLEdBQXZCO1FBQ0UsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsbURBQTBCLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QscUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVGLENBQUM7SUFDRCw4Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQUUsSUFBSTtnQkFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtJQUNILENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkcsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuSCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ0gsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHdCQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xFLDZCQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQ0FBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0QsMkNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELDZCQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQ0FBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRUQsK0NBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2pELElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3BDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDcEUsNkJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLGdDQUFpQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUNELGlEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pOLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOU4sQ0FBQztJQUNELGlEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pOLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOU4sQ0FBQztJQUNELHFEQUE0QixHQUE1QjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDck8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFPLENBQUM7SUFDRCx3Q0FBZSxHQUFmO1FBQ0UsK0JBQWUsQ0FBQyxVQUFVLENBQUMscUNBQXFCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN6RSxxQ0FBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDRSwrQkFBZSxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzdFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELGdEQUF1QixHQUF2QjtRQUNFLCtCQUFlLENBQUMsVUFBVSxDQUFDLHFDQUFxQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDbkYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsMkNBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSxHQUFHO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixDQUFDLEVBQUUsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN0QixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDRDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsNENBQW1CLEdBQW5CO1FBQ0UsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBM05NLHdCQUFTLEdBQUcsd0NBQXdDLENBQUM7SUFvRDVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzt1REEwQnhDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOytEQU9wQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzsyREFhbkM7SUFzQ0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzREQVF2QztJQVNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztnRUFNckM7SUEyREQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzZEQUd2QztJQXRPVSxjQUFjO1FBRDFCLEVBQUUsQ0FBQyxLQUFLO09BQ0ksY0FBYyxDQXVPMUI7SUFBRCxxQkFBQztDQXZPRCxBQXVPQyxDQXZPbUMsZ0JBQU0sR0F1T3pDO0FBdk9ZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgRVVzZXJQcm9wZXJ0eVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2FuYWx5emUvQW5hbHl6ZVR5cGVzJztcbmltcG9ydCBVc2VyUHJvcHRlcnlNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYW5hbHl6ZS9Vc2VyUHJvcHRlcnlNYW5hZ2VyJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUdhbWVTZXR0aW5nQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBEb3RHYW1lVXNlclNldHRpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0RHYW1lVXNlclNldHRpbmcnO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgU2V0dGluZ3NIb21lVHJhaXQgZnJvbSAnLi9TZXR0aW5nc0hvbWVUcmFpdCc7XG5AbWouY2xhc3NcbmV4cG9ydCBjbGFzcyBVSVNldHRpbmdzSG9tZSBleHRlbmRzIFVJVmlldyB7XG4gIF9kaWFsb2dDb250ZW50ID0gbnVsbDtcbiAgX211c2ljU3dpdGNoTm9kZSA9IG51bGw7XG4gIF9tdXNpY0VuYWJsZWQgPSB0cnVlO1xuICBfc291bmRTd2l0Y2hOb2RlID0gbnVsbDtcbiAgX3NvdW5kRW5hYmxlZCA9IHRydWU7XG4gIF92aWJyYXRpb25Td2l0Y2hOb2RlID0gbnVsbDtcbiAgX3ZpYnJhdGlvbkVuYWJsZWQgPSB0cnVlO1xuICBfY2xvc2VCdG4gPSBudWxsO1xuICBfYXZhdG9ySWNvbiA9IG51bGw7XG4gIF9uaWNrbmFtZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvc2V0dGluZ3NIb21lL1VJU2V0dGluZ3NIb21lXCI7XG4gIHN0YXRpYyBnZXRVcmwoKSB7XG4gICAgcmV0dXJuIFNldHRpbmdzSG9tZVRyYWl0LmdldEluc3RhbmNlKCkuaXNVc2VTaW1wbGVVSSgpID8gXCJwcmVmYWIvVUlTZXR0aW5nc0hvbWVTaW1wbGVcIiA6IHRoaXMucHJlZmFiVXJsO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIHRoaXMudXBkYXRlU2V0dGluZ3NTdGF0ZSgpO1xuICB9XG4gIGluaXRVSSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuY2hlY2tSb290Tm9kZUxvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9kaWFsb2dDb250ZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2RpYWxvZ0NvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMuX2RpYWxvZ0NvbnRlbnQub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLm9uRGlhbG9nQ29udGVudFNpemVDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwic2V0dGluZ3NcIik7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgICAgdGhpcy5fbXVzaWNTd2l0Y2hOb2RlID0gZS5nZXRDaGlsZEJ5TmFtZShcIm11c2ljX3N3aXRjaFwiKTtcbiAgICAgICAgICB0aGlzLl9zb3VuZFN3aXRjaE5vZGUgPSBlLmdldENoaWxkQnlOYW1lKFwic291bmRfc3dpdGNoXCIpO1xuICAgICAgICAgIHRoaXMuX3ZpYnJhdGlvblN3aXRjaE5vZGUgPSBlLmdldENoaWxkQnlOYW1lKFwidmlicmF0aW9uX3N3aXRjaFwiKTtcbiAgICAgICAgICB0aGlzLmNoZWNrSGlkZVZpYnJhdGlvbkJ0bihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwiYm90dG9tX25vZGVcIik7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgICAgdmFyIG4gPSBpLmdldENoaWxkQnlOYW1lKFwidGVybXNcIik7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQobikpIHtcbiAgICAgICAgICAgIHRoaXMuT25CdXR0b25DbGljayhuLCB0aGlzLm9uVGVybXNCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIG4ub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0LnJlZnJlc2hDaGlsZHJlbldpZGdldChuKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbyA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJwcml2YWN5X3BvbGljeVwiKTtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgICAgICAgdGhpcy5PbkJ1dHRvbkNsaWNrKG8sIHRoaXMub25Qcml2YWN5UG9saWN5QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBvLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdC5yZWZyZXNoQ2hpbGRyZW5XaWRnZXQobyk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGp1c3RQYW5lbEhlaWdodCgpO1xuICAgICAgICB2YXIgYSA9IHRoaXMuX2RpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfYmdcIik7XG4gICAgICAgIGNjLmlzVmFsaWQoYSkgJiYgKHRoaXMuX2Nsb3NlQnRuID0gYS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbG9zZVwiKSk7XG4gICAgICAgIHZhciBzID0gdGhpcy5fZGlhbG9nQ29udGVudC5nZXRDaGlsZEJ5TmFtZShcInZlcnNpb25fdGV4dFwiKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocykpIHtcbiAgICAgICAgICB2YXIgciA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS52ZXJzaW9uIHx8IFwiXCI7XG4gICAgICAgICAgcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyByO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlTZXRIb21lX3JlZnJlc2hBdmF0b3JcIilcbiAgcmVmcmVzaEF2YXRvcih0KSB7XG4gICAgdmFyIGUgPSB0aGlzLl9kaWFsb2dDb250ZW50LmdldENoaWxkQnlOYW1lKFwiYXZhdG9yXCIpO1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgaSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJhdmF0b3JfYmdcIik7XG4gICAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgICB0aGlzLk9uQnV0dG9uQ2xpY2soaSwgdGhpcy5vbkNsaWNrT3BlblVzZXJJbmZvLmJpbmQodGhpcykpO1xuICAgICAgICBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdC5mcmFtZVNwcml0ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2F2YXRvckljb24gPSBlLmdldENoaWxkQnlOYW1lKFwiYXZhdG9yX2ljb25cIik7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMuX2F2YXRvckljb24pICYmICh0aGlzLl9hdmF0b3JJY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdC5hdmF0YXJTcHJpdGUpO1xuICAgICAgdmFyIG4gPSBlLmdldENoaWxkQnlOYW1lKFwibmlja25hbWVfbm9kZVwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgIHRoaXMuT25CdXR0b25DbGljayhuLCB7XG4gICAgICAgICAgZnVuYzogdGhpcy5vbkNsaWNrT3BlblVzZXJJbmZvLmJpbmQodGhpcyksXG4gICAgICAgICAgaWdub3JlQ2xpY2tBdWRpbzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbmlja25hbWUgPSBuLmdldENoaWxkQnlOYW1lKFwibmlja25hbWVcIik7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25pY2tuYW1lKSkge1xuICAgICAgICAgIHZhciBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0VXNlck5hbWUoKTtcbiAgICAgICAgICB0aGlzLl9uaWNrbmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSBuLmdldENoaWxkQnlOYW1lKFwiYnRuX2VkaXRcIik7XG4gICAgICAgIGNjLmlzVmFsaWQoYSkgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKGEsIHRoaXMub25DbGlja09wZW5Vc2VySW5mby5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVNldEhvbWVfSGlkZVZiQnRuXCIpXG4gIGNoZWNrSGlkZVZpYnJhdGlvbkJ0bih0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fdmlicmF0aW9uU3dpdGNoTm9kZSkgJiYgdCkge1xuICAgICAgdGhpcy5fdmlicmF0aW9uU3dpdGNoTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ZpYnJhdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldFZpYnJhdGlvbkVuYWJsZWQodGhpcy5fdmlicmF0aW9uRW5hYmxlZCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlTZXRIb21lX2FkanVzdFBIXCIpXG4gIGFkanVzdFBhbmVsSGVpZ2h0KHQgPSBbXSwgZSA9IG51bGwpIHtcbiAgICB2YXIgaSA9IHRoaXMuX2RpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJleHBhbmRcIik7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICAgIHQucGFyZW50ID0gaTtcbiAgICAgICAgICBuICs9IHQuaGVpZ2h0ICsgaS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9kaWFsb2dDb250ZW50LmhlaWdodCA9IHRoaXMuZ2V0RGVmYXVsdENvbnRlbnRIZWlnaHQoKSArIG47XG4gICAgfVxuICB9XG4gIGdldERlZmF1bHRDb250ZW50SGVpZ2h0KCkge1xuICAgIHJldHVybiA5NDU7XG4gIH1cbiAgb25EaWFsb2dDb250ZW50U2l6ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5yZWZyZXNoQ2hpbGRyZW5XaWRnZXQodGhpcy5fZGlhbG9nQ29udGVudCk7XG4gIH1cbiAgdXBkYXRlV2lkZ2V0KHQpIHtcbiAgICBjYy5pc1ZhbGlkKHQpICYmIHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkgJiYgdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgfVxuICByZWZyZXNoQ2hpbGRyZW5XaWRnZXQodCkge1xuICAgIHZhciBlLCBpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHQuY2hpbGRyZW4pLCBvID0gbi5uZXh0KCk7ICFvLmRvbmU7IG8gPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IG8udmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkZ2V0KGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBvICYmICFvLmRvbmUgJiYgKGkgPSBuLnJldHVybikgJiYgaS5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGluaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tSb290Tm9kZUxvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9tdXNpY1N3aXRjaE5vZGUgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX211c2ljU3dpdGNoTm9kZSwgdGhpcy5vbk11c2ljU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9zb3VuZFN3aXRjaE5vZGUgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX3NvdW5kU3dpdGNoTm9kZSwgdGhpcy5vblNvdW5kU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLCB0aGlzLm9uVmlicmF0aW9uU3dpdGNoQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9jbG9zZUJ0biAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fY2xvc2VCdG4sIHRoaXMub25DbG9zZUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0SG9tZV9vbk11c2ljQ2xpY2tcIilcbiAgb25NdXNpY1N3aXRjaENsaWNrKCkge1xuICAgIHRoaXMuX211c2ljRW5hYmxlZCA9ICF0aGlzLl9tdXNpY0VuYWJsZWQ7XG4gICAgdGhpcy51cGRhdGVNdXNpY1N3aXRjaERpc3BsYXkoKTtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRNdXNpY0VuYWJsZWQodGhpcy5fbXVzaWNFbmFibGVkKTtcbiAgICBtai5hdWRpb01hbmFnZXIuc2V0QkdNTXV0ZWQoIXRoaXMuX211c2ljRW5hYmxlZCk7XG4gICAgdGhpcy5fbXVzaWNFbmFibGVkICYmIG1qLmF1ZGlvTWFuYWdlci5wbGF5QkdNKEVBdWRpb0lELkJnbSwgdHJ1ZSk7XG4gICAgVXNlclByb3B0ZXJ5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlcG9ydChFVXNlclByb3BlcnR5VHlwZS5NdXNpYywgdGhpcy5fbXVzaWNFbmFibGVkID8gMSA6IDApO1xuICB9XG4gIG9uU291bmRTd2l0Y2hDbGljaygpIHtcbiAgICB0aGlzLl9zb3VuZEVuYWJsZWQgPSAhdGhpcy5fc291bmRFbmFibGVkO1xuICAgIHRoaXMudXBkYXRlU291bmRTd2l0Y2hEaXNwbGF5KCk7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0U291bmRFbmFibGVkKHRoaXMuX3NvdW5kRW5hYmxlZCk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnNldEVmZmVjdE11dGVkKCF0aGlzLl9zb3VuZEVuYWJsZWQpO1xuICAgIFVzZXJQcm9wdGVyeU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZXBvcnQoRVVzZXJQcm9wZXJ0eVR5cGUuU291bmQsIHRoaXMuX3NvdW5kRW5hYmxlZCA/IDEgOiAwKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0SG9tZV9vblZpYkNsaWNrXCIpXG4gIG9uVmlicmF0aW9uU3dpdGNoQ2xpY2soKSB7XG4gICAgdGhpcy5fdmlicmF0aW9uRW5hYmxlZCA9ICF0aGlzLl92aWJyYXRpb25FbmFibGVkO1xuICAgIHRoaXMudXBkYXRlVmlicmF0aW9uU3dpdGNoRGlzcGxheSgpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldFZpYnJhdGlvbkVuYWJsZWQodGhpcy5fdmlicmF0aW9uRW5hYmxlZCk7XG4gICAgVXNlclByb3B0ZXJ5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlcG9ydChFVXNlclByb3BlcnR5VHlwZS5WaWJyYXRpb24sIHRoaXMuX3ZpYnJhdGlvbkVuYWJsZWQgPyAxIDogMCk7XG4gIH1cbiAgdXBkYXRlTXVzaWNTd2l0Y2hEaXNwbGF5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKHQgPSB0aGlzLl9tdXNpY1N3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDaGlsZEJ5TmFtZShcIm9uXCIpKSAmJiAodGhpcy5fbXVzaWNTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvblwiKS5hY3RpdmUgPSB0aGlzLl9tdXNpY0VuYWJsZWQpO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKGUgPSB0aGlzLl9tdXNpY1N3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKSkgJiYgKHRoaXMuX211c2ljU3dpdGNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib2ZmXCIpLmFjdGl2ZSA9ICF0aGlzLl9tdXNpY0VuYWJsZWQpO1xuICB9XG4gIHVwZGF0ZVNvdW5kU3dpdGNoRGlzcGxheSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICBjYy5pc1ZhbGlkKG51bGwgPT09ICh0ID0gdGhpcy5fc291bmRTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJvblwiKSkgJiYgKHRoaXMuX3NvdW5kU3dpdGNoTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwib25cIikuYWN0aXZlID0gdGhpcy5fc291bmRFbmFibGVkKTtcbiAgICBjYy5pc1ZhbGlkKG51bGwgPT09IChlID0gdGhpcy5fc291bmRTd2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIikpICYmICh0aGlzLl9zb3VuZFN3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9mZlwiKS5hY3RpdmUgPSAhdGhpcy5fc291bmRFbmFibGVkKTtcbiAgfVxuICB1cGRhdGVWaWJyYXRpb25Td2l0Y2hEaXNwbGF5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKHQgPSB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJvblwiKSkgJiYgKHRoaXMuX3ZpYnJhdGlvblN3aXRjaE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm9uXCIpLmFjdGl2ZSA9IHRoaXMuX3ZpYnJhdGlvbkVuYWJsZWQpO1xuICAgIGNjLmlzVmFsaWQobnVsbCA9PT0gKGUgPSB0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIikpICYmICh0aGlzLl92aWJyYXRpb25Td2l0Y2hOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJvZmZcIikuYWN0aXZlID0gIXRoaXMuX3ZpYnJhdGlvbkVuYWJsZWQpO1xuICB9XG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90U2V0dGluZyhFR2FtZVNldHRpbmdDbGlja1R5cGUuSG9tZVBhZ2VTZXR0aW5nX0Nsb3NlZCk7XG4gICAgRG90R2FtZVVzZXJTZXR0aW5nLmRvdCgpO1xuICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgfVxuICBvblRlcm1zQnRuQ2xpY2soKSB7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFNldHRpbmcoRUdhbWVTZXR0aW5nQ2xpY2tUeXBlLkhvbWVQYWdlU2V0dGluZ19Qb2xpY3lUZXJtKTtcbiAgICBtai5zZGsuYWJvdXRVcygpO1xuICB9XG4gIG9uUHJpdmFjeVBvbGljeUJ0bkNsaWNrKCkge1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RTZXR0aW5nKEVHYW1lU2V0dGluZ0NsaWNrVHlwZS5Ib21lUGFnZVNldHRpbmdfUHJpdmFjeUFncmVlbWVudCk7XG4gICAgbWouc2RrLnByaXZhY3koKTtcbiAgfVxuICBwbGF5Q2xvc2VBbmltYXRpb24odCkge1xuICAgIGlmICh0aGlzLl9kaWFsb2dDb250ZW50KSB7XG4gICAgICBjYy50d2Vlbih0aGlzLl9kaWFsb2dDb250ZW50KS50bygwLjE1LCB7XG4gICAgICAgIHNjYWxlOiAwLjgsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0KCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnBsYXlDbG9zZUFuaW1hdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICB0LmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlU2V0dGluZ3NTdGF0ZSgpIHtcbiAgICB0aGlzLl9tdXNpY0VuYWJsZWQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc011c2ljRW5hYmxlZCgpO1xuICAgIHRoaXMuX3NvdW5kRW5hYmxlZCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzU291bmRFbmFibGVkKCk7XG4gICAgdGhpcy5fdmlicmF0aW9uRW5hYmxlZCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzVmlicmF0aW9uRW5hYmxlZCgpO1xuICAgIHRoaXMudXBkYXRlTXVzaWNTd2l0Y2hEaXNwbGF5KCk7XG4gICAgdGhpcy51cGRhdGVTb3VuZFN3aXRjaERpc3BsYXkoKTtcbiAgICB0aGlzLnVwZGF0ZVZpYnJhdGlvblN3aXRjaERpc3BsYXkoKTtcbiAgfVxuICBjaGVja1Jvb3ROb2RlTG9hZGVkKCkge1xuICAgIHJldHVybiAhIWNjLmlzVmFsaWQodGhpcy5ub2RlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0SG9tZV9vcGVuVXNlckluZm9cIilcbiAgb25DbGlja09wZW5Vc2VySW5mbygpIHtcbiAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gIH1cbn0iXX0=
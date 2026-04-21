import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UIView from '../../../Scripts/framework/ui/UIView';
import { EUserPropertyType } from '../../../Scripts/gamePlay/analyze/AnalyzeTypes';
import UserPropteryManager from '../../../Scripts/gamePlay/analyze/UserPropteryManager';
import { DotGameBtnClick, EGameSettingClickType } from '../../../Scripts/dot/DGameBtnClick';
import { DotGameUserSetting } from '../../../Scripts/DGameUserSetting';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import SettingsHomeTrait from './SettingsHomeTrait';
@mj.class
export class UISettingsHome extends UIView {
  _dialogContent = null;
  _musicSwitchNode = null;
  _musicEnabled = true;
  _soundSwitchNode = null;
  _soundEnabled = true;
  _vibrationSwitchNode = null;
  _vibrationEnabled = true;
  _closeBtn = null;
  _avatorIcon = null;
  _nickname = null;
  static prefabUrl = "prefabs/ui/settingsHome/UISettingsHome";
  static getUrl() {
    return SettingsHomeTrait.getInstance().isUseSimpleUI() ? "prefab/UISettingsHomeSimple" : this.prefabUrl;
  }
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.initEvents();
    this.updateSettingsState();
  }
  initUI() {
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
          var r = LoginModel.getInstance().version || "";
          s.getComponent(cc.Label).string = "" + r;
        }
      }
    }
  }
  @mj.traitEvent("UISetHome_refreshAvator")
  refreshAvator(t) {
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
          var o = UserModel.getInstance().getUserName();
          this._nickname.getComponent(cc.Label).string = o;
        }
        var a = n.getChildByName("btn_edit");
        cc.isValid(a) && this.OnButtonClick(a, this.onClickOpenUserInfo.bind(this));
      }
    }
  }
  @mj.traitEvent("UISetHome_HideVbBtn")
  checkHideVibrationBtn(t) {
    if (cc.isValid(this._vibrationSwitchNode) && t) {
      this._vibrationSwitchNode.active = false;
      this._vibrationEnabled = false;
      UserModel.getInstance().setVibrationEnabled(this._vibrationEnabled);
    }
  }
  @mj.traitEvent("UISetHome_adjustPH")
  adjustPanelHeight(t = [], e = null) {
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
  }
  getDefaultContentHeight() {
    return 945;
  }
  onDialogContentSizeChanged() {
    this.refreshChildrenWidget(this._dialogContent);
  }
  updateWidget(t) {
    cc.isValid(t) && t.getComponent(cc.Widget) && t.getComponent(cc.Widget).updateAlignment();
  }
  refreshChildrenWidget(t) {
    var e, i;
    if (cc.isValid(t)) try {
      for (var n = __values(t.children), o = n.next(); !o.done; o = n.next()) {
        var a = o.value;
        this.updateWidget(a);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        o && !o.done && (i = n.return) && i.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  initEvents() {
    if (this.checkRootNodeLoaded()) {
      this._musicSwitchNode && this.OnButtonClick(this._musicSwitchNode, this.onMusicSwitchClick.bind(this));
      this._soundSwitchNode && this.OnButtonClick(this._soundSwitchNode, this.onSoundSwitchClick.bind(this));
      this._vibrationSwitchNode && this.OnButtonClick(this._vibrationSwitchNode, this.onVibrationSwitchClick.bind(this));
      this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
    }
  }
  @mj.traitEvent("UISetHome_onMusicClick")
  onMusicSwitchClick() {
    this._musicEnabled = !this._musicEnabled;
    this.updateMusicSwitchDisplay();
    UserModel.getInstance().setMusicEnabled(this._musicEnabled);
    mj.audioManager.setBGMMuted(!this._musicEnabled);
    this._musicEnabled && mj.audioManager.playBGM(EAudioID.Bgm, true);
    UserPropteryManager.getInstance().report(EUserPropertyType.Music, this._musicEnabled ? 1 : 0);
  }
  onSoundSwitchClick() {
    this._soundEnabled = !this._soundEnabled;
    this.updateSoundSwitchDisplay();
    UserModel.getInstance().setSoundEnabled(this._soundEnabled);
    mj.audioManager.setEffectMuted(!this._soundEnabled);
    UserPropteryManager.getInstance().report(EUserPropertyType.Sound, this._soundEnabled ? 1 : 0);
  }
  @mj.traitEvent("UISetHome_onVibClick")
  onVibrationSwitchClick() {
    this._vibrationEnabled = !this._vibrationEnabled;
    this.updateVibrationSwitchDisplay();
    UserModel.getInstance().setVibrationEnabled(this._vibrationEnabled);
    UserPropteryManager.getInstance().report(EUserPropertyType.Vibration, this._vibrationEnabled ? 1 : 0);
  }
  updateMusicSwitchDisplay() {
    var t, e;
    cc.isValid(null === (t = this._musicSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._musicSwitchNode.getChildByName("bg").getChildByName("on").active = this._musicEnabled);
    cc.isValid(null === (e = this._musicSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._musicSwitchNode.getChildByName("bg").getChildByName("off").active = !this._musicEnabled);
  }
  updateSoundSwitchDisplay() {
    var t, e;
    cc.isValid(null === (t = this._soundSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._soundSwitchNode.getChildByName("bg").getChildByName("on").active = this._soundEnabled);
    cc.isValid(null === (e = this._soundSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._soundSwitchNode.getChildByName("bg").getChildByName("off").active = !this._soundEnabled);
  }
  updateVibrationSwitchDisplay() {
    var t, e;
    cc.isValid(null === (t = this._vibrationSwitchNode.getChildByName("bg")) || void 0 === t ? void 0 : t.getChildByName("on")) && (this._vibrationSwitchNode.getChildByName("bg").getChildByName("on").active = this._vibrationEnabled);
    cc.isValid(null === (e = this._vibrationSwitchNode.getChildByName("bg")) || void 0 === e ? void 0 : e.getChildByName("off")) && (this._vibrationSwitchNode.getChildByName("bg").getChildByName("off").active = !this._vibrationEnabled);
  }
  onCloseBtnClick() {
    DotGameBtnClick.dotSetting(EGameSettingClickType.HomePageSetting_Closed);
    DotGameUserSetting.dot();
    this.closeDialog();
  }
  onTermsBtnClick() {
    DotGameBtnClick.dotSetting(EGameSettingClickType.HomePageSetting_PolicyTerm);
    mj.sdk.aboutUs();
  }
  onPrivacyPolicyBtnClick() {
    DotGameBtnClick.dotSetting(EGameSettingClickType.HomePageSetting_PrivacyAgreement);
    mj.sdk.privacy();
  }
  playCloseAnimation(t) {
    if (this._dialogContent) {
      cc.tween(this._dialogContent).to(0.15, {
        scale: 0.8,
        opacity: 0
      }).call(function () {
        t();
      }).start();
    } else {
      t();
    }
  }
  closeDialog() {
    var t = this;
    this.playCloseAnimation(function () {
      t.delegate.close();
    });
  }
  updateSettingsState() {
    this._musicEnabled = UserModel.getInstance().isMusicEnabled();
    this._soundEnabled = UserModel.getInstance().isSoundEnabled();
    this._vibrationEnabled = UserModel.getInstance().isVibrationEnabled();
    this.updateMusicSwitchDisplay();
    this.updateSoundSwitchDisplay();
    this.updateVibrationSwitchDisplay();
  }
  checkRootNodeLoaded() {
    return !!cc.isValid(this.node);
  }
  @mj.traitEvent("UISetHome_openUserInfo")
  onClickOpenUserInfo() {
    this.closeDialog();
  }
}
import { EVT_MSG_KEY_RESETTHEME } from '../../../Scripts/Config';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType, EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import UIView from '../../../Scripts/framework/ui/UIView';
import { EUserPropertyType } from '../../../Scripts/gamePlay/analyze/AnalyzeTypes';
import UserPropteryManager from '../../../Scripts/gamePlay/analyze/UserPropteryManager';
import { DotGameBtnClick, EGameSettingClickType } from '../../../Scripts/dot/DGameBtnClick';
import { DotGameUserSetting } from '../../../Scripts/DGameUserSetting';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { UIResetSkinBtn } from './UIResetSkinBtn';
import MainGameView from '../../../Scripts/game/view/MainGameView';
@mj.class
export class UISettingsDialog extends UIView {
  delegate = null;
  _dialogContent = null;
  _musicSwitchNode = null;
  _musicEnabled = true;
  _soundSwitchNode = null;
  _soundEnabled = true;
  _vibrationSwitchNode = null;
  _vibrationEnabled = true;
  _lockHighlightSwitchNode = null;
  _lockHighlightEnabled = true;
  _replayBtn = null;
  _closeBtn = null;
  _replayBtnDisabled = false;
  static prefabUrl = "prefabs/ui/settingsDialog/UISettingsDialog";
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
          var l = LoginModel.getInstance().version || "";
          s.getComponent(cc.Label).string = "" + l;
        }
      }
    }
  }
  @mj.traitEvent("UISetDlg_HideVbBtn")
  checkHideVibrationBtn(t) {
    if (cc.isValid(this._vibrationSwitchNode) && t) {
      this._vibrationSwitchNode.active = false;
      this._vibrationEnabled = false;
      UserModel.getInstance().setVibrationEnabled(this._vibrationEnabled);
    }
  }
  @mj.traitEvent("UISetDlg_isHideLkT2")
  isHideLockHighlightForTile2() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  hideLockHighlightForTile2() {
    this.isHideLockHighlightForTile2() && cc.isValid(this._lockHighlightSwitchNode) && (this._lockHighlightSwitchNode.active = false);
  }
  @mj.traitEvent("UISetDlg_adjustPH")
  adjustPanelHeight(t = [], e = null) {
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
  }
  needShowResetSkinBtn() {
    var t = UserModel.getInstance().getCurrentGameType();
    return !!this.hasShowResetSkinBtn(t) || !!this.hasCustomTheme(t);
  }
  hasShowResetSkinBtn(t) {
    var e = UserModel.getInstance().getGameDataByGameType(t);
    return 1 === (null == e ? void 0 : e.getHasShowResetSkinBtn());
  }
  hasCustomTheme(t) {
    var e,
      i = null === (e = UserModel.getInstance().getGameDataByGameType(t)) || void 0 === e ? void 0 : e.getTheme();
    return !!i && i !== MainGameView.defaultTheme;
  }
  addResetSkinButton() {
    var t = this,
      e = this._dialogContent.getChildByName("bottom_layout");
    if (cc.isValid(e)) {
      var i = e.getChildByName("UIResetSkinBtn");
      cc.isValid(i) || UIResetSkinBtn.createUI().then(function (i) {
        if (cc.isValid(t._dialogContent) && cc.isValid(e)) {
          var o = e.getChildByName("UIResetSkinBtn");
          if (cc.isValid(o)) i.destroy();else if (cc.isValid(i)) {
            i.name = "UIResetSkinBtn";
            var n = i.getComponent(UIResetSkinBtn);
            if (cc.isValid(n)) {
              var a = t.getResetSkinButtonData();
              n.setData(a);
            }
            var r = UserModel.getInstance().getCurrentGameType();
            t.saveShowResetSkinBtn(r);
            i.parent = e;
            i.setSiblingIndex(10);
            var c = i.height,
              s = e.getComponent(cc.Layout);
            s && (c = i.height + s.spacingY);
            t._dialogContent.height += c;
          }
        }
      }).catch(function () {});
    }
  }
  getResetSkinButtonData() {
    var t,
      e = this,
      i = UserModel.getInstance().getCurrentGameType();
    return {
      wallpaperId: (null === (t = UserModel.getInstance().getGameDataByGameType(i)) || void 0 === t ? void 0 : t.getTheme()) || null,
      onReset: function () {
        e.onResetSkinBtnClick();
      }
    };
  }
  saveShowResetSkinBtn(t) {
    var e = UserModel.getInstance().getGameDataByGameType(t);
    e && e.setHasShowResetSkinBtn(1);
  }
  onResetSkinBtnClick() {
    var t,
      e = UserModel.getInstance().getCurrentGameType(),
      i = null === (t = UserModel.getInstance().getGameDataByGameType(e)) || void 0 === t ? void 0 : t.getTheme();
    mj.EventManager.emit(EVT_MSG_KEY_RESETTHEME, e, "", i);
    DotGameBtnClick.dotResetTheme(i);
    this.delegate.close();
  }
  onDialogContentSizeChanged() {
    this.refreshChildrenWidget(this._dialogContent);
  }
  onBottomLayoutSizeChanged() {
    if (cc.isValid(this._dialogContent)) {
      var t = this._dialogContent.getChildByName("bottom_layout");
      cc.isValid(t) && this.updateWidget(t);
    }
  }
  updateWidget(t) {
    cc.isValid(t) && t.getComponent(cc.Widget) && t.getComponent(cc.Widget).updateAlignment();
  }
  refreshChildrenWidget(t) {
    var e, i;
    if (cc.isValid(t)) try {
      for (var o = __values(t.children), n = o.next(); !n.done; n = o.next()) {
        var a = n.value;
        this.updateWidget(a);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (i = o.return) && i.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  @mj.traitEvent("UISetDlg_chkAddBack")
  checkAddBackBtn() {
    return cc.isValid(this._dialogContent) && cc.isValid(this._replayBtn) ? {
      dialogContent: this._dialogContent,
      replayBtn: this._replayBtn
    } : null;
  }
  @mj.traitEvent("UISetDlg_getDch")
  getDefaultContentHeight() {
    return 1100;
  }
  initEvents() {
    if (this.checkRootNodeLoaded()) {
      this._musicSwitchNode && this.OnButtonClick(this._musicSwitchNode, this.onMusicSwitchClick.bind(this));
      this._soundSwitchNode && this.OnButtonClick(this._soundSwitchNode, this.onSoundSwitchClick.bind(this));
      this._vibrationSwitchNode && this.OnButtonClick(this._vibrationSwitchNode, this.onVibrationSwitchClick.bind(this));
      if (this._lockHighlightSwitchNode) {
        var t = this._lockHighlightSwitchNode.getChildByName("btn_rect");
        if (cc.isValid(t)) {
          this.OnButtonClick(t, this.onLockHighlightSwitchClick.bind(this));
        } else {
          this.OnButtonClick(this._lockHighlightSwitchNode, this.onLockHighlightSwitchClick.bind(this));
        }
        this.isLargeHitArea() && this.OnButtonClick(this._lockHighlightSwitchNode, this.onLockHighlightSwitchClick.bind(this));
      }
      this._replayBtn && this.OnButtonClick(this._replayBtn, this.onReplayBtnClick.bind(this));
      this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
    }
  }
  @mj.traitEvent("UISetDlg_onMusicClick")
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
  @mj.traitEvent("UISetDlg_onVibClick")
  onVibrationSwitchClick() {
    this._vibrationEnabled = !this._vibrationEnabled;
    this.updateVibrationSwitchDisplay();
    UserModel.getInstance().setVibrationEnabled(this._vibrationEnabled);
    UserPropteryManager.getInstance().report(EUserPropertyType.Vibration, this._vibrationEnabled ? 1 : 0);
  }
  @mj.traitEvent("UISetDlg_onLckHLClk")
  onLockHighlightSwitchClick() {
    this._lockHighlightEnabled = !this._lockHighlightEnabled;
    this.updateLockHighlightSwitchDisplay(this._lockHighlightEnabled);
    UserModel.getInstance().setLockHighlightEnabled(this._lockHighlightEnabled);
    UserPropteryManager.getInstance().report(EUserPropertyType.HighlightFreeTiles, this._lockHighlightEnabled ? 1 : 0);
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
  @mj.traitEvent("UISetDlg_updLckHL")
  updateLockHighlightSwitchDisplay(t) {
    cc.isValid(this._lockHighlightSwitchNode.getChildByName("on")) && (this._lockHighlightSwitchNode.getChildByName("on").active = t);
    cc.isValid(this._lockHighlightSwitchNode.getChildByName("off")) && (this._lockHighlightSwitchNode.getChildByName("off").active = !t);
  }
  @mj.traitEvent("UISetDlg_onReplay")
  onReplayBtnClick() {
    if (cc.isValid(this.node) && !this._replayBtnDisabled) {
      this._replayBtnDisabled = true;
      this.closeDialog();
      setTimeout(function () {
        DotGameBtnClick.dotSetting(EGameSettingClickType.InGameSetting_Restart);
        GameInteraction.input({
          inputType: EGameInputEnum.Restart,
          callFrom: "setting"
        });
      }, 0);
    }
  }
  onCloseBtnClick() {
    DotGameBtnClick.dotSetting(EGameSettingClickType.InGameSetting_Closed);
    DotGameUserSetting.dot();
    this.closeDialog();
  }
  onTermsBtnClick() {
    DotGameBtnClick.dotSetting(EGameSettingClickType.InGameSetting_PolicyTerm);
    mj.sdk.aboutUs();
  }
  onPrivacyPolicyBtnClick() {
    DotGameBtnClick.dotSetting(EGameSettingClickType.InGameSetting_PrivacyAgreement);
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
  @mj.traitEvent("UISetDlg_close")
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
    this._lockHighlightEnabled = UserModel.getInstance().isLockHighlightEnabled();
    this.updateMusicSwitchDisplay();
    this.updateSoundSwitchDisplay();
    this.updateVibrationSwitchDisplay();
    this.updateLockHighlightSwitchDisplay(this._lockHighlightEnabled);
  }
  checkRootNodeLoaded() {
    return !!cc.isValid(this.node);
  }
  getLockHighlightSwitchNode() {
    return this._lockHighlightSwitchNode;
  }
  @mj.traitEvent("UISetDlg_isLarge")
  isLargeHitArea() {
    return false;
  }
}
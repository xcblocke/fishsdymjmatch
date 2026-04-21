import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import UserInfoView from './UserInfoView';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import UserInfoManager, { AvatarIconPath } from '../../../Scripts/gamePlay/base/user/UserInfoManager';
@mj.class("UserInfoController")
export default class UserInfoController extends ViewController {
  viewClass = UserInfoView;
  viewMode = viewMode.ALERT;
  _tempSelectedAvatarId = 1;
  _tempSelectedFrameId = 1;
  _tempSelectedUserName = "";
  _userInfoManager = UserInfoManager.getInstance();
  async viewDidLoad() {
    super.viewDidLoad.call(this);
    this._tempSelectedAvatarId = UserModel.getInstance().getAvatarId();
    this._tempSelectedFrameId = UserModel.getInstance().getFrameId();
    this._tempSelectedUserName = UserModel.getInstance().getUserName();
    await this.refreshTopDisplay();
    this.viewDoAction("updateTabButtonState", "avatar");
    return;
  }
  async refreshTopDisplay() {
    var e, t, r;
    e = await this._userInfoManager.loadUserAvatarAndFrame(this._tempSelectedAvatarId, this._tempSelectedFrameId, this), t = e.avatar, r = e.frame;
    this.viewDoAction("refreshTopDisplay", {
      avatarSprite: t,
      frameSprite: r
    });
    this.viewDoAction("refreshUserName", this._tempSelectedUserName);
    return;
  }
  async loadAvatarData() {
    var e;
    e = this.generateAvatarList();
    this.viewDoAction("showDataList", e);
    return;
  }
  async loadFrameData() {
    var e;
    e = this.generateFrameList();
    this.viewDoAction("showDataList", e);
    return;
  }
  generateAvatarList() {
    var e = this,
      t = [],
      r = this._userInfoManager.getAllAvatarConfigs();
    if (0 === r.length) return this.getAvatarList(t);
    var n = [...r],
      a = n.findIndex(function (t) {
        return t.ID === e._tempSelectedAvatarId;
      });
    if (a > 0) {
      var o = n.splice(a, 1)[0];
      n.unshift(o);
    }
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      t.push({
        id: s.ID,
        icon: AvatarIconPath + s.Icon,
        isSelected: s.ID === this._tempSelectedAvatarId,
        type: "avatar"
      });
    }
    return this.getAvatarList(t);
  }
  @mj.traitEvent("UsrInfoCtrl_avatarList")
  getAvatarList(e) {
    return e;
  }
  generateFrameList() {
    var e = this,
      t = [],
      r = this._userInfoManager.getAllFrameConfigs();
    if (0 === r.length) return t;
    var n = [...r],
      a = n.findIndex(function (t) {
        return t.ID === e._tempSelectedFrameId;
      });
    if (a > 0) {
      var o = n.splice(a, 1)[0];
      n.unshift(o);
    }
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      t.push({
        id: s.ID,
        icon: AvatarIconPath + s.Icon,
        isSelected: s.ID === this._tempSelectedFrameId,
        type: "frame"
      });
    }
    return t;
  }
  onSaveSuccess() {
    this.close();
  }
  async refreshForReuse(t) {
    super.refreshForReuse.call(this, t);
    this._tempSelectedAvatarId = UserModel.getInstance().getAvatarId() || 1;
    this._tempSelectedFrameId = UserModel.getInstance().getFrameId() || 1;
    await this.refreshTopDisplay();
    this.viewDoAction("updateTabButtonState", "avatar");
    return;
  }
  updateSelectAvatar(e) {
    this._tempSelectedAvatarId = e;
    this.refreshTopDisplay();
  }
  updateSelectFrame(e) {
    this._tempSelectedFrameId = e;
    this.refreshTopDisplay();
  }
  changeUserName() {
    this._tempSelectedUserName = this._userInfoManager.getRandomName();
    this.viewDoAction("refreshUserName", this._tempSelectedUserName);
  }
  saveUserInfo() {
    UserModel.getInstance().setAvatarId(this._tempSelectedAvatarId);
    UserModel.getInstance().setFrameId(this._tempSelectedFrameId);
    UserModel.getInstance().setUserName(this._tempSelectedUserName);
    this.onSaveSuccess();
  }
}
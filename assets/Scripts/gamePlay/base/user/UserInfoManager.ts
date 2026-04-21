import LoginModel from '../../login/model/LoginModel';
import UserModel from '../../user/UserModel';
import { formatLanguageCodeToString } from '../../../framework/utils/CommonUtils';
import { DataReader } from '../../../framework/data/DataReader';
export var AvatarIconPath = "texture/avatar/";
@mj.class("UserInfoManager")
export default class UserInfoManager {
  static _instance = null;
  static getInstance() {
    this._instance || (this._instance = new UserInfoManager());
    return this._instance;
  }
  init() {
    this.setDefaultUserAvatar();
    this.setDefaultUserFrame();
    this.setDefaultUserName();
  }
  async loadCurrentUserAvatar(e) {
    var t;
    t = UserModel.getInstance().getAvatarId() || 1;
    return this.loadAvatarSprite(t, e.loadRes.bind(e));
  }
  async loadCurrentUserFrame(e) {
    var t;
    t = UserModel.getInstance().getFrameId() || 1;
    return this.loadFrameSprite(t, e.loadRes.bind(e));
  }
  async loadUserAvatarAndFrame(e, t, o) {
    var n, i, l, s;
    n = o.loadRes.bind(o);
    i = __read.apply(void 0, [await Promise.all([this.loadAvatarSprite(e, n), this.loadFrameSprite(t, n)]), 2]), l = i[0], s = i[1];
    return {
      avatar: l,
      frame: s
    };
  }
  async setupUserAvatar(e, t, o, n) {
    var i, a, l, c, u, p;
    try {
      i = (null == n ? void 0 : n.avatarId) || UserModel.getInstance().getAvatarId() || 1;
      a = (null == n ? void 0 : n.frameId) || UserModel.getInstance().getFrameId() || 1;
      l = await this.loadUserAvatarAndFrame(i, a, e), c = l.avatar, u = l.frame;
      c && t && cc.isValid(t.node) && (t.spriteFrame = c);
      u && o && cc.isValid(o.node) && (o.spriteFrame = u);
      return true;
    } catch (__error_0_0) {
      p = __error_0_0;
      console.error("[UserInfoManager] 设置用户头像失败: " + p.message);
      return false;
    }
    return;
  }
  getAvatarConfig(e) {
    return DataReader.getByKey("headConfig", e);
  }
  getFrameConfig(e) {
    return DataReader.getByKey("headRingConfig", e);
  }
  getAllAvatarConfigs() {
    return DataReader.getList("headConfig");
  }
  getAllFrameConfigs() {
    return DataReader.getList("headRingConfig");
  }
  getAvatarIconPath(e) {
    var t = this.getAvatarConfig(e);
    t || (t = this.getAvatarConfig(1));
    return AvatarIconPath + t.Icon;
  }
  getFrameIconPath(e) {
    return AvatarIconPath + this.getFrameConfig(e).Icon;
  }
  getRandomName(e) {
    var t = e || this.getCurrentLanguageCode(),
      o = DataReader.getByKey("playerRoleName", t);
    o && o.Rolename && 0 !== o.Rolename.length || (o = DataReader.getByKey("playerRoleName", "EN_US"));
    var n = Math.floor(Math.random() * o.Rolename.length);
    return o.Rolename[n];
  }
  @mj.traitEvent("InfoMgr_getAvatarId")
  getRandomAvatarId() {
    var e = DataReader.getList("headConfig");
    return e && 0 !== e.length ? e[Math.floor(Math.random() * e.length)].ID : 1;
  }
  getRandomFrameId() {
    var e = DataReader.getList("headRingConfig");
    return e && 0 !== e.length ? e[Math.floor(Math.random() * e.length)].ID : 1;
  }
  getNameListByLanguage(e) {
    var t = DataReader.getByKey("playerRoleName", e);
    t && t.Rolename && 0 !== t.Rolename.length || (t = DataReader.getByKey("playerRoleName", "EN_US"));
    return t.Rolename;
  }
  isKoreanName(e) {
    if (!e) return false;
    var t = DataReader.getByKey("playerRoleName", "KO");
    return ((null == t ? void 0 : t.Rolename) || []).includes(e);
  }
  isRussianName(e) {
    if (!e) return false;
    var t = DataReader.getByKey("playerRoleName", "RU");
    return ((null == t ? void 0 : t.Rolename) || []).includes(e);
  }
  getCurrentLanguageCode() {
    var e = LoginModel.getInstance().language;
    return formatLanguageCodeToString(e);
  }
  async loadAvatarSprite(e, t) {
    var n, i, a;
    if (!(n = this.getAvatarConfig(e))) {
      return null;
    }
    try {
      i = await t(AvatarIconPath + n.Icon, cc.SpriteFrame, this.getDefaultIconBundleName());
      return Array.isArray(i) ? i[0] : i;
    } catch (__error_1_0) {
      a = __error_1_0;
      console.error("[UserInfoManager] 加载头像失败: avatarId=" + e + ", " + a.message);
      return null;
    }
    return;
  }
  async loadFrameSprite(e, t) {
    var n, i, a;
    if (!(n = this.getFrameConfig(e))) {
      return null;
    }
    try {
      i = await t(AvatarIconPath + n.Icon, cc.SpriteFrame, "mainRes");
      return Array.isArray(i) ? i[0] : i;
    } catch (__error_1_0) {
      a = __error_1_0;
      console.error("[UserInfoManager] 加载头像框失败: frameId=" + e + ", " + a.message);
      return null;
    }
    return;
  }
  setDefaultUserName() {
    var e = UserModel.getInstance().getUserName();
    e && "" !== e || UserModel.getInstance().setUserName(this.getRandomName());
  }
  @mj.traitEvent("InfoMgr_setDefAvatar")
  setDefaultUserAvatar() {
    var e = UserModel.getInstance().getAvatarId();
    e && 0 !== e || UserModel.getInstance().setAvatarId(1);
  }
  @mj.traitEvent("InfoMgr_setDefFrame")
  setDefaultUserFrame() {
    var e = UserModel.getInstance().getFrameId();
    e && 0 !== e || UserModel.getInstance().setFrameId(1);
  }
  @mj.traitEvent("InfoMgr_getDftIconBdNm")
  getDefaultIconBundleName() {
    return "mainRes";
  }
}
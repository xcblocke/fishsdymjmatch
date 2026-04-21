import BaseCell from '../../../Scripts/base/ui/BaseCell';
import UserInfoManager, { AvatarIconPath } from '../../../Scripts/gamePlay/base/user/UserInfoManager';
@mj.class
export default class UserInfoCellItem extends BaseCell {
  _itemNodes = [];
  static prefabUrl = "prefabs/ui/userInfo/UserInfoCellItem";
  static bundleName = "mainRes";
  uiOnLoad() {
    for (var e, t, r = this, n = function n(n) {
        var o = cc.find("node" + (n + 1), a._cellUI);
        if (!o) return "continue";
        a._itemNodes[n] = {
          container: o,
          headImg: null === (e = cc.find("btn/headImg", o)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
          selectNode: cc.find("btn/select", o),
          frameImg: null === (t = cc.find("btn/frameImg", o)) || void 0 === t ? void 0 : t.getComponent(cc.Sprite),
          btnNode: cc.find("btn", o)
        };
        a._itemNodes[n].headImg.node.active = false;
        a._itemNodes[n].frameImg.node.active = false;
        a._itemNodes[n].btnNode && a.OnButtonClick(a._itemNodes[n].btnNode, function () {
          return r.onItemClick(n);
        });
      }, a = this, o = 0; o < 4; o++) n(o);
  }
  updateUI() {
    if (this._data && this._data.items) for (var e = 0; e < 4; e++) {
      var t = this._data.items[e],
        r = this._itemNodes[e];
      if (r) if (t) {
        r.container.active = true;
        r.selectNode && (r.selectNode.active = t.isSelected);
        if ("avatar" === t.type) {
          this.loadAvatarIcon(e, t);
          r.frameImg && (r.frameImg.node.active = false);
        } else if ("frame" === t.type) {
          this.loadFrameIcon(e, t);
          r.frameImg && (r.frameImg.node.active = true);
        }
      } else r.container.active = false;
    }
  }
  @mj.traitEvent("UsrInfoCell_loadAvatar")
  async loadAvatarIcon(e, t) {
    var r, n, a;
    r = this._itemNodes[e];
    if (!(null == t ? void 0 : t.icon) || !(null == r ? void 0 : r.headImg)) {
      return;
    }
    n = await this.loadRes(t.icon, cc.SpriteFrame, UserInfoManager.getInstance().getDefaultIconBundleName());
    a = Array.isArray(n) ? n[0] : n;
    if (cc.isValid(r.headImg) && a) {
      r.headImg.spriteFrame = a;
      r.headImg.node.active = true;
    }
    return;
  }
  async loadFrameIcon(e, t) {
    var r, n, a, o, i;
    if (!(r = this._itemNodes[e])) {
      return;
    }
    if (r.headImg) {
      n = await this.loadRes(AvatarIconPath + "profile_img_head_1", cc.SpriteFrame, UserInfoManager.getInstance().getDefaultIconBundleName());
      a = Array.isArray(n) ? n[0] : n;
      if (cc.isValid(r.headImg) && a) {
        r.headImg.spriteFrame = a;
        r.headImg.node.active = true;
      }
    }
    if (r.frameImg && (null == t ? void 0 : t.icon)) {
      o = await this.loadRes(t.icon, cc.SpriteFrame, "mainRes");
      i = Array.isArray(o) ? o[0] : o;
      if (cc.isValid(r.frameImg) && i) {
        r.frameImg.spriteFrame = i;
        r.frameImg.node.active = true;
      }
    }
    return;
  }
  onItemClick(e) {
    if (this._data && this._data.items && this._data.items[e]) {
      var t = this._data.items[e];
      t.isSelected || mj.EventManager.emit("onItemSelect", {
        id: t.id,
        type: t.type
      });
    }
  }
  getCellData() {
    return this._data;
  }
}
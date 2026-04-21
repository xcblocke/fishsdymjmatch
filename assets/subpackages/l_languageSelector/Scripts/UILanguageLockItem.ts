import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
import { UILanguageItem } from './UILanguageItem';
@mj.class
export class UILanguageLockItem extends UILanguageItem {
  _lockNode = null;
  _imgMask = null;
  _lockNode2 = null;
  _imgMask2 = null;
  _locked = false;
  _originalOnClick = null;
  static prefabUrl = "prefab/UILanguageLockItem";
  static bundleName = "r_changeBaseCardByLan";
  uiOnLoad() {
    var e, o, n, a, i, r, l, c;
    super.uiOnLoad.call(this);
    if (cc.isValid(this._cellUI)) {
      this._lockNode = null === (o = null === (e = this._cellUI.getChildByName("btn_normal")) || void 0 === e ? void 0 : e.getChildByName("bg")) || void 0 === o ? void 0 : o.getChildByName("img_lock");
      this._imgMask = null === (a = null === (n = this._cellUI.getChildByName("btn_normal")) || void 0 === n ? void 0 : n.getChildByName("bg")) || void 0 === a ? void 0 : a.getChildByName("img_mask");
      this._lockNode2 = null === (r = null === (i = this._cellUI.getChildByName("btn_selected")) || void 0 === i ? void 0 : i.getChildByName("bg")) || void 0 === r ? void 0 : r.getChildByName("img_lock2");
      this._imgMask2 = null === (c = null === (l = this._cellUI.getChildByName("btn_selected")) || void 0 === l ? void 0 : l.getChildByName("bg")) || void 0 === c ? void 0 : c.getChildByName("img_mask2");
    }
  }
  updateUI() {
    super.updateUI.call(this);
    this._refreshLockState();
  }
  setOnClick(e) {
    var o = this;
    this._originalOnClick = e;
    super.setOnClick.call(this, function (t) {
      if (o._locked) {
        o._onLockedClick(t);
      } else {
        e(t);
      }
    });
  }
  _refreshLockState() {
    this._locked = this._checkIsLocked();
    if (cc.isValid(this._lockNode)) {
      this._lockNode.active = this._locked;
      this._lockNode.opacity = 255;
      this._lockNode.scale = 1;
      this._lockNode2.active = this._locked;
      this._lockNode2.opacity = 255;
      this._lockNode2.scale = 1;
      this._imgMask.active = this._locked;
      this._imgMask.opacity = 255;
      this._imgMask.width = 670;
      this._imgMask2.active = this._locked;
      this._imgMask2.opacity = 255;
      this._imgMask2.width = 670;
    }
  }
  _checkIsLocked() {
    var t;
    if (!this._data) return false;
    var e = mj.getClassByName("ChangeBaseCardByLanTrait"),
      o = null === (t = null == e ? void 0 : e.getInstance) || void 0 === t ? void 0 : t.call(e);
    if (!o) return false;
    var n = o.getBundleByLang(this._data.code);
    return !o.getUnlockedSkins().includes(n);
  }
  _onLockedClick(t) {
    var e,
      o,
      n = this;
    if (this._data) {
      var a = mj.getClassByName("ChangeBaseCardByLanTrait");
      (null === (e = null == a ? void 0 : a.getInstance) || void 0 === e ? void 0 : e.call(a)) && ControllerManager.getInstance().pushViewByController("UILanguageLockController", {
        isGlobal: true,
        bundleName: "r_changeBaseCardByLan",
        code: null === (o = this._data.code) || void 0 === o ? void 0 : o.toLowerCase(),
        onSuccess: function () {
          n._locked = false;
          n._playUnlockEffect(function () {
            cc.tween(n._imgMask).to(0.8, {
              width: 0
            }).call(function () {
              var e;
              null === (e = n._originalOnClick) || void 0 === e || e.call(n, t);
            }).start();
            cc.tween(n._imgMask2).to(0.8, {
              width: 0
            }).start();
          });
        }
      });
    }
  }
  _playUnlockEffect(t) {
    cc.isValid(this._lockNode) && (this._lockNode.active = false);
    cc.isValid(this._lockNode2) && (this._lockNode2.active = false);
    if (cc.isValid(this._cellUI)) {
      var e = cc.Vec2.ZERO;
      if (cc.isValid(this._lockNode)) {
        var o = this._lockNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
        e = this._cellUI.convertToNodeSpaceAR(o);
      }
      var n = BaseSpine.create("spine/game_kaisuo1", "in", 1, function () {
        null == t || t();
      }, true, "r_changeBaseCardByLan");
      n.node.setPosition(e);
      n.node.parent = this._cellUI;
      VibrateManager.executeVibrate(EVibrateStrength.Strong);
      mj.audioManager.playEffect(EAudioID.SkinUnlock);
    } else null == t || t();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { EGameInputEnum, EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import UIAutoShuffleSwitch from './UIAutoShuffleSwitch';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EItemType } from '../../../Scripts/user/IUserData';
@mj.trait
@mj.class("DieAutoShuffleTrait")
export default class DieAutoShuffleTrait extends Trait {
  _isTips = true;
  _effType = 1;
  _isAd = false;
  _isAutoShuffle = false;
  _effectSpinePath = "spine/gameplay_autoShuffle";
  _effectSpinePath2 = "spine/gameplay_autoShuffle_btn";
  _effectAnimName = "in";
  _effectBundleName = "r_dieAutoShuffle";
  _needShowFirstTipsAfterShuffle = false;
  _lastTile2AutoShuffleSlotSig = "";
  static traitKey = "DieAutoShuffle";
  static getActiveSettingsInstance() {
    return DieAutoShuffleTrait.getInstance();
  }
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._isTips = 1 === this._traitData.isTips;
    this._effType = null !== (e = this._traitData.effectType) && void 0 !== e ? e : this._effType;
    this._isAd = true === this._traitData.isAd;
    "boolean" != typeof this.localData.autoEnabled && (this.localData.autoEnabled = true);
    "boolean" != typeof this.localData.hasShownFirstTips && (this.localData.hasShownFirstTips = false);
  }
  getMessageListeners() {
    var e = this;
    var _t = {};
    _t[EGameEvent.Behavior_ShuffleBehaviorFinish] = function () {
      e.onShuffleBehaviorFinish();
    };
    return _t;
  }
  _isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  onShuffleBehaviorFinish() {
    if (true === this._isTips && this._needShowFirstTipsAfterShuffle) if (true !== this.localData.hasShownFirstTips) {
      this.localData.hasShownFirstTips = true;
      this._needShowFirstTipsAfterShuffle = false;
      this.pushController("AutoShuffleTipsController", {});
    } else this._needShowFirstTipsAfterShuffle = false;
  }
  onUISetDlgCtrl_initDRes(t, e) {
    var i = t.ins;
    i && "function" == typeof i.addPreloadRes && i.addPreloadRes("Prefab", UIAutoShuffleSwitch.getUrl());
    e();
  }
  onUISetDlg_adjustPH(t, e) {
    UIAutoShuffleSwitch.createUI().then(function (i) {
      if (cc.isValid(i) && (null == t ? void 0 : t.args)) {
        var o = t.args[0] || [];
        i.CustomSlibingIndex = 1;
        o.push(i);
        t.args[0] = o;
      }
      e();
    }).catch(function (t) {
      console.error("[" + DieAutoShuffleTrait.traitKey + "] 创建 UIAutoShuffleSwitch 失败:" + ((null == t ? void 0 : t.message) || "UIAutoShuffleSwitch load failed"));
      e();
    });
  }
  onFailBhv_start(t, e) {
    var i,
      o,
      n,
      l,
      r,
      a,
      s,
      u,
      f,
      c = t.ins,
      h = null === (i = t.args) || void 0 === i ? void 0 : i[0],
      d = null === (o = null == h ? void 0 : h.data) || void 0 === o ? void 0 : o.isGM;
    this._isAutoShuffle = false;
    if (d) e();else if (this._isTile2Mode()) e();else if (true === this.localData.autoEnabled) {
      if (null !== (s = null === (a = null === (r = null === (l = null === (n = null == c ? void 0 : c.context) || void 0 === n ? void 0 : n.getTileMapObject) || void 0 === l ? void 0 : l.call(n)) || void 0 === r ? void 0 : r.checkIsDead) || void 0 === a ? void 0 : a.call(r, [])) && void 0 !== s && s) {
        if ((null !== (f = null === (u = null == h ? void 0 : h.data) || void 0 === u ? void 0 : u.shuffleNum) && void 0 !== f ? f : 0) <= 0) e();else {
          this._beginDieAutoShuffleRound();
          e({
            isBreak: true
          });
        }
      } else e();
    } else e();
  }
  onClearT2Hlp_clearEnd(t, e) {
    var i, o, n;
    e();
    if (this._isTile2Mode()) {
      var l = null === (i = t.args) || void 0 === i ? void 0 : i[0],
        r = null !== (n = null === (o = t.ins) || void 0 === o ? void 0 : o._gameContext) && void 0 !== n ? n : null;
      r && l && this._tryTile2AutoShuffleAfterClear(r, l);
    }
  }
  onClearT4Hlp_clearEnd(t, e) {
    var i, o, n;
    e();
    if (this._isTile2Mode()) {
      var l = null === (i = t.args) || void 0 === i ? void 0 : i[0],
        r = null !== (n = null === (o = t.ins) || void 0 === o ? void 0 : o._gameContext) && void 0 !== n ? n : null;
      r && l && this._tryTile2AutoShuffleAfterClear(r, l);
    }
  }
  _tryTile2AutoShuffleAfterClear(t, e) {
    var i, o;
    if (!((null == e ? void 0 : e.isWin) || (null == e ? void 0 : e.isDead)) && this.isAutoShuffleEnabled() && this.isOpenShuffle() && !this._isGuideActive()) {
      var n = null !== (i = null == e ? void 0 : e.slotBarSnapshotAfter) && void 0 !== i ? i : [];
      if (3 === n.length) {
        var l = t.getGameData();
        if (true === this.isAutoShuffleEnabled() && !((null !== (o = l.getShuffleNums()) && void 0 !== o ? o : 0) <= 0) && (true !== this._isAd || AdManager.getInstance().checkVideoAdIsReady()) && !this.hasMatchHolder(t.getTileMapObject(), t.getGameData())) {
          var r = this._makeTile2SlotSig(n);
          if (r !== this._lastTile2AutoShuffleSlotSig) {
            this._lastTile2AutoShuffleSlotSig = r;
            this._beginDieAutoShuffleRound();
          }
        }
      } else this._lastTile2AutoShuffleSlotSig = "";
    }
  }
  hasMatchHolder(t, e) {
    var i,
      o,
      n = e.slotBarIds || [];
    if (0 === n.length) return true;
    var l = t.getAllCardTiles().filter(function (e) {
      return !(null == e || !e.isValid || e.getIsInSlotBar() || 0 !== t.isCardLock(e));
    });
    if (0 === l.length) return false;
    var a = this.getSlotCardIds(t, n);
    if (0 === a.size) return false;
    try {
      for (var s = __values(l), u = s.next(); !u.done; u = s.next()) {
        var f = u.value;
        if (a.has(f.cardId)) return true;
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        u && !u.done && (o = s.return) && o.call(s);
      } finally {
        if (i) throw i.error;
      }
    }
    return false;
  }
  getSlotCardIds(t, e) {
    var i,
      o,
      n = new Set();
    try {
      for (var l = __values(e), a = l.next(); !a.done; a = l.next()) {
        var s = a.value,
          u = t.getTileObjectByPosId(s);
        (null == u ? void 0 : u.isValid) && n.add(u.cardId);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (o = l.return) && o.call(l);
      } finally {
        if (i) throw i.error;
      }
    }
    return n;
  }
  _makeTile2SlotSig(t) {
    return [...t].sort().join("|");
  }
  _beginDieAutoShuffleRound() {
    this._isAutoShuffle = false;
    this._needShowFirstTipsAfterShuffle = true === this._isTips && true !== this.localData.hasShownFirstTips;
    this.triggerShuffle();
  }
  triggerShuffle() {
    this._isAutoShuffle = true;
    mj.EventManager.emit(EGameEvent.Fail_Auto);
    if (this._isTile2Mode()) {
      GameInteraction.input({
        inputType: EGameInputEnum.Tile2Shuffle,
        from: EShuffleFrom.Normal
      });
    } else {
      GameInteraction.input({
        inputType: EGameInputEnum.Shuffle,
        from: EShuffleFrom.Normal
      });
    }
  }
  onShuffUts_playRAnim(t, e) {
    var i, o;
    if (this._isAutoShuffle) {
      var n = null === (i = t.args) || void 0 === i ? void 0 : i[0],
        l = null === (o = null == n ? void 0 : n.gameView) || void 0 === o ? void 0 : o.nodeTopEffectRoot;
      if (cc.isValid(l) && 1 === this._effType) {
        var r = BaseSpine.create(this._effectSpinePath, this._effectAnimName, 1, null, true, this._effectBundleName);
        r.node.parent = l;
        r.node.position = cc.v3(0, 0, 0);
      }
      this.playShuffleButtonAnim(n);
      e();
    } else e();
  }
  playShuffleButtonAnim(t) {
    var e,
      i,
      o,
      n,
      l,
      r = null === (e = null == t ? void 0 : t.gameView) || void 0 === e ? void 0 : e.gameUI,
      a = null === (l = null === (n = null === (o = null === (i = null == r ? void 0 : r.node) || void 0 === i ? void 0 : i.getChildByName) || void 0 === o ? void 0 : o.call(i, "nodeBottom")) || void 0 === n ? void 0 : n.getChildByName) || void 0 === l ? void 0 : l.call(n, "btnShuffle");
    if (cc.isValid(a)) {
      var s = BaseSpine.create(this._effectSpinePath2, this._effectAnimName, 1, null, true, this._effectBundleName);
      s.node.parent = a;
      s.node.position = cc.v3(0, 0, 0);
      var u = a.scale || 1;
      cc.tween(a).to(0.13, {
        scale: 1.05 * u
      }).to(0.2, {
        scale: u
      }).start();
    }
  }
  onFailVw_show(t, e) {
    var i, o, n, l, r;
    if (true !== this._isTips && true === this.localData.autoEnabled) {
      var a = t.ins,
        s = null === (i = t.args) || void 0 === i ? void 0 : i[0];
      if ((null !== (o = null == s ? void 0 : s.shuffleNum) && void 0 !== o ? o : 0) > 0) e();else {
        var u = Math.random() < 0.5 ? 60 : 90,
          f = null === (l = null === (n = null == a ? void 0 : a.node) || void 0 === n ? void 0 : n.getChildByName) || void 0 === l ? void 0 : l.call(n, "content_node"),
          c = null === (r = null == f ? void 0 : f.getChildByName) || void 0 === r ? void 0 : r.call(f, "desc");
        if (cc.isValid(c)) {
          var h = c.getComponent(cc.Label),
            d = I18NStrings.get("TILE_OutofMove_Details", (null == h ? void 0 : h.string) || "");
          I18NStrings.setText(c, d, "AutoShuffleTips_04", [u]);
        }
        e();
      }
    } else e();
  }
  isAutoShuffleEnabled() {
    return true === this.localData.autoEnabled;
  }
  toggleSwitch() {
    this.setAutoShuffleEnabled(!this.isAutoShuffleEnabled(), "toggle");
  }
  setAutoShuffleEnabled(t, e = "") {
    this.isAutoShuffleEnabled() !== t && (this.localData.autoEnabled = t);
  }
  isOpenShuffle() {
    var t = mj.getClassByName("PropInitTrait");
    return !(t && t.getInstance() && t.getInstance().eventEnabled) || t.getInstance().isUnlocked(MjGameType.Tile2Normal, EItemType.Shuffle);
  }
  _isGuideActive() {
    var t = UserModel.getInstance().getMainGameData(),
      e = 1;
    t && (e = t.getLevelId());
    return !UserModel.getInstance().isGuideFinished() || 1 === e;
  }
}
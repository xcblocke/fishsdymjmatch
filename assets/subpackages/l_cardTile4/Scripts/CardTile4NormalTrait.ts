import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardTile4NormalTrait")
export default class CardTile4NormalTrait extends Trait {
  _currentMapping = {};
  _startLevel = 5;
  _interval = 5;
  static traitKey = "CardTile4Normal";
  static ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) && (this._startLevel = this._traitData.startLevel);
    void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.interval) && (this._interval = this._traitData.interval);
  }
  _getTaskCardResName() {
    var t,
      r = mj.getClassByName("TaskModel");
    return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
  }
  _generateRandomMapping() {
    var t,
      r = {},
      a = CardTile4NormalTrait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== a.length) return r;
    var n = this._getTaskCardResName(),
      i = CardTile4NormalTrait.ALL_CARDS.filter(function (t) {
        return t && t.length > 0;
      });
    n && (i = i.filter(function (t) {
      return t !== n;
    }));
    if (i.length < 18) return r;
    for (var l = i.length - 1; l > 0; l--) {
      var s = Math.floor(Math.random() * (l + 1));
      t = __read([i[s], i[l]], 2), i[l] = t[0], i[s] = t[1];
    }
    for (l = 0; l < 18; l++) r[a[l]] = i[l];
    return r;
  }
  _getOrCreateMapping(t) {
    if (!this.localData[t]) {
      this.localData[t] = {
        mapping: {}
      };
      this.localData[t] = this.localData[t];
    }
    var r = this.localData[t],
      e = this._generateRandomMapping();
    if (0 === Object.keys(e).length) return {};
    r.mapping = e;
    this.localData[t] = this.localData[t];
    return e;
  }
  _getCurrentGameMode() {
    return UserModel.getInstance().getCurrentGameType() || MjGameType.Normal;
  }
  _shouldEnableForLevel(t) {
    return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
  }
  onGsListener_onNewGame(t, r) {
    try {
      var a = UserModel.getInstance().normalData.getLevelId();
      if (!this._shouldEnableForLevel(a)) {
        r();
        return;
      }
      var n = this._getCurrentGameMode();
      if (n !== MjGameType.Normal) {
        r();
        return;
      }
      this._currentMapping = this._getOrCreateMapping(n);
    } catch (t) {
      console.error("[" + CardTile4NormalTrait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    r();
  }
  onCardUtil_atlasPathBundle(t, r) {
    var a;
    try {
      var n = this._getCurrentGameMode();
      if (n !== MjGameType.Normal) {
        r();
        return;
      }
      var i = UserModel.getInstance().normalData.getLevelId();
      if (!this._shouldEnableForLevel(i)) {
        r();
        return;
      }
      var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if (this._getTaskCardResName() === o) {
        r();
        return;
      }
      if (/^[tb][1-9]$/.test(o)) {
        var s = this.localData[n];
        if (!s || 0 === Object.keys(s.mapping).length) {
          r();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = s.mapping);
        var f = "atlas/cardIconTile/" + (s.mapping[o] || o);
        r({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: f,
            bundleName: CardUtil.getCardBundleName(),
            fromAtlas: true
          }
        });
        return;
      }
      r();
    } catch (t) {
      console.error("[" + CardTile4NormalTrait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
}
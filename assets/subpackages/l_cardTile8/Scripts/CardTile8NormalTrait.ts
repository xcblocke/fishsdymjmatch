import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardTile8NormalTrait")
export default class CardTile8NormalTrait extends Trait {
  _currentMapping = {};
  _gapTime = 86400000;
  _shouldEnableSkin = false;
  static traitKey = "CardTile8Normal";
  static ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  onLoad() {
    var e;
    super.onLoad.call(this);
    void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.gapTime) && (this._gapTime = 3600000 * this._traitData.gapTime);
    var r = UserModel.getInstance(),
      a = this.localData.lastColdStartTime || 0,
      i = r.getAppStartTime();
    if (a > 0 && (0 === a ? 0 : i - a) > this._gapTime) {
      this._shouldEnableSkin = true;
    } else {
      this._shouldEnableSkin = false;
    }
    this.localData.lastColdStartTime = i;
    this.localData = this.localData;
  }
  _getTaskCardResName() {
    var t,
      e = mj.getClassByName("TaskModel");
    return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
  }
  _generateRandomMapping() {
    var t,
      e = {},
      a = CardTile8NormalTrait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== a.length) return e;
    var i = this._getTaskCardResName(),
      n = CardTile8NormalTrait.ALL_CARDS.filter(function (t) {
        return t && t.length > 0;
      });
    i && (n = n.filter(function (t) {
      return t !== i;
    }));
    if (n.length < 18) return e;
    for (var l = n.length - 1; l > 0; l--) {
      var s = Math.floor(Math.random() * (l + 1));
      t = __read([n[s], n[l]], 2), n[l] = t[0], n[s] = t[1];
    }
    for (l = 0; l < 18; l++) e[a[l]] = n[l];
    return e;
  }
  _getOrCreateMapping(t) {
    if (!this.localData[t]) {
      this.localData[t] = {
        mapping: {}
      };
      this.localData[t] = this.localData[t];
    }
    var e = this.localData[t],
      r = this._generateRandomMapping();
    if (0 === Object.keys(r).length) return {};
    e.mapping = r;
    this.localData[t] = this.localData[t];
    return r;
  }
  _getCurrentGameMode() {
    return UserModel.getInstance().getCurrentGameType() || MjGameType.Normal;
  }
  onGsListener_onNewGame(t, e) {
    try {
      var a = this._getCurrentGameMode();
      if (a !== MjGameType.Normal) {
        e();
        return;
      }
      this._currentMapping = this._getOrCreateMapping(a);
    } catch (t) {
      console.error("[" + CardTile8NormalTrait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onCardUtil_atlasPathBundle(t, e) {
    var a;
    try {
      var i = this._getCurrentGameMode();
      if (i !== MjGameType.Normal) {
        e();
        return;
      }
      if (!this._shouldEnableSkin) {
        e();
        return;
      }
      var n = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if (this._getTaskCardResName() === n) {
        e();
        return;
      }
      if (/^[tb][1-9]$/.test(n)) {
        var o = this.localData[i];
        if (!o || 0 === Object.keys(o.mapping).length) {
          e();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = o.mapping);
        var s = "atlas/cardIconTile/" + (o.mapping[n] || n);
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: s,
            bundleName: CardUtil.getCardBundleName(),
            fromAtlas: true
          }
        });
        return;
      }
      e();
    } catch (t) {
      console.error("[" + CardTile8NormalTrait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
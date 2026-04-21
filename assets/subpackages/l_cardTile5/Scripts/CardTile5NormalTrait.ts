import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardTile5NormalTrait")
export default class CardTile5NormalTrait extends Trait {
  _currentMapping = {};
  _challengeCount = 2;
  static traitKey = "CardTile5Normal";
  static ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  onLoad() {
    var r;
    super.onLoad.call(this);
    void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.challengeCount) && (this._challengeCount = this._traitData.challengeCount);
  }
  _getTaskCardResName() {
    var t,
      r = mj.getClassByName("TaskModel");
    return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
  }
  _generateRandomMapping() {
    var t,
      r = {},
      a = CardTile5NormalTrait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== a.length) return r;
    var n = this._getTaskCardResName(),
      o = CardTile5NormalTrait.ALL_CARDS.filter(function (t) {
        return t && t.length > 0;
      });
    n && (o = o.filter(function (t) {
      return t !== n;
    }));
    if (o.length < 18) return r;
    for (var l = o.length - 1; l > 0; l--) {
      var s = Math.floor(Math.random() * (l + 1));
      t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
    }
    for (l = 0; l < 18; l++) r[a[l]] = o[l];
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
  onGsListener_onNewGame(t, r) {
    try {
      var a = this._getCurrentGameMode();
      if (a !== MjGameType.Normal) {
        r();
        return;
      }
      this._currentMapping = this._getOrCreateMapping(a);
    } catch (t) {
      console.error("[" + CardTile5NormalTrait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
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
      if (UserModel.getInstance().normalData.getReplayCount() < this._challengeCount) {
        r();
        return;
      }
      var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if (this._getTaskCardResName() === o) {
        r();
        return;
      }
      if (/^[tb][1-9]$/.test(o)) {
        var i = this.localData[n];
        if (!i || 0 === Object.keys(i.mapping).length) {
          r();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = i.mapping);
        var s = "atlas/cardIconTile/" + (i.mapping[o] || o);
        r({
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
      r();
    } catch (t) {
      console.error("[" + CardTile5NormalTrait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
}
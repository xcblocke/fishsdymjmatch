import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardTile7Trait")
export default class CardTile7Trait extends Trait {
  _currentMapping = {};
  static traitKey = "CardTile7";
  static ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  onLoad() {
    super.onLoad.call(this);
  }
  _getTaskCardResName() {
    var t,
      r = mj.getClassByName("TaskModel");
    return null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
  }
  _generateRandomMapping() {
    var t,
      r = {},
      a = CardTile7Trait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== a.length) return r;
    var n = this._getTaskCardResName(),
      i = CardTile7Trait.ALL_CARDS.filter(function (t) {
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
  _generateMapping(t) {
    if (!this.localData[t]) {
      this.localData[t] = {
        mapping: {},
        hadInterAdLastRound: false
      };
      this.localData[t] = this.localData[t];
    }
    var r = this.localData[t];
    if (!r) return {};
    var e = this._generateRandomMapping();
    if (0 === Object.keys(e).length) return {};
    r.mapping = e;
    this.localData[t] = this.localData[t];
    return e;
  }
  _clearMapping(t) {
    var r = this.localData[t];
    if (r) {
      r.mapping = {};
      this.localData[t] = this.localData[t];
    }
  }
  _getCurrentGameMode() {
    return UserModel.getInstance().getCurrentGameType() || MjGameType.Normal;
  }
  onAdMgr_interAdClose(t, r) {
    try {
      var a = this._getCurrentGameMode();
      this.localData[a] || (this.localData[a] = {
        mapping: {},
        hadInterAdLastRound: false
      });
      var n = this.localData[a];
      if (n) {
        n.hadInterAdLastRound = true;
        this.localData[a] = this.localData[a];
      }
    } catch (t) {
      console.error("[" + CardTile7Trait.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
    }
    r();
  }
  onGsListener_onNewGame(t, r) {
    try {
      var a = this._getCurrentGameMode();
      if (a !== MjGameType.Travel && a !== MjGameType.DailyChallenge) {
        r();
        return;
      }
      var n = this.localData[a];
      if (null == n ? void 0 : n.hadInterAdLastRound) {
        this._currentMapping = this._generateMapping(a);
        if (this.localData[a]) {
          this.localData[a].hadInterAdLastRound = false;
          this.localData[a] = this.localData[a];
        }
      } else {
        this._clearMapping(a);
        this._currentMapping = {};
      }
    } catch (t) {
      console.error("[" + CardTile7Trait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    r();
  }
  onCardUtil_atlasPathBundle(t, r) {
    var a;
    try {
      var n = this._getCurrentGameMode();
      if (n !== MjGameType.Travel && n !== MjGameType.DailyChallenge) {
        r();
        return;
      }
      var i = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if (this._getTaskCardResName() === i) {
        r();
        return;
      }
      if (/^[tb][1-9]$/.test(i)) {
        var o = this.localData[n];
        if (!o || 0 === Object.keys(o.mapping).length) {
          r();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = o.mapping);
        var s = "atlas/cardIconTile/" + (o.mapping[i] || i);
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
      console.error("[" + CardTile7Trait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
}
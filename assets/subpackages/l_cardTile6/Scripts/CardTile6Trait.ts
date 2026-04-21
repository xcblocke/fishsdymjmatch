import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardTile6Trait")
export default class CardTile6Trait extends Trait {
  _currentMapping = {};
  static traitKey = "CardTile6";
  static ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  static ALL_MODES = [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge];
  onLoad() {
    super.onLoad.call(this);
    mj.EventManager.on("Tile6_setAdFlag", this._onSetInterAdFlag, this);
    mj.EventManager.on("Tile6_clearAdFlag", this._onClearInterAdFlag, this);
  }
  _onSetInterAdFlag() {
    var t = this;
    CardTile6Trait.ALL_MODES.forEach(function (a) {
      t.localData[a] || (t.localData[a] = {
        mapping: {},
        hadInterAdLastRound: false,
        hadInterAdThisRound: false
      });
      var e = t.localData[a];
      if (e) {
        e.hadInterAdLastRound = true;
        t.localData[a] = t.localData[a];
      }
    });
  }
  _onClearInterAdFlag() {
    var t = this;
    CardTile6Trait.ALL_MODES.forEach(function (a) {
      var e = t.localData[a];
      if (e) {
        e.hadInterAdLastRound = false;
        t.localData[a] = t.localData[a];
      }
    });
  }
  _getTaskCardResName() {
    var t,
      a = mj.getClassByName("TaskModel");
    return null === (t = null == a ? void 0 : a.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
  }
  _generateRandomMapping() {
    var t,
      a = {},
      r = CardTile6Trait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== r.length) return a;
    var n = this._getTaskCardResName(),
      o = CardTile6Trait.ALL_CARDS.filter(function (t) {
        return t && t.length > 0;
      });
    n && (o = o.filter(function (t) {
      return t !== n;
    }));
    if (o.length < 18) return a;
    for (var l = o.length - 1; l > 0; l--) {
      var s = Math.floor(Math.random() * (l + 1));
      t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
    }
    for (l = 0; l < 18; l++) a[r[l]] = o[l];
    return a;
  }
  _generateMapping(t) {
    if (!this.localData[t]) {
      this.localData[t] = {
        mapping: {},
        hadInterAdLastRound: false,
        hadInterAdThisRound: false
      };
      this.localData[t] = this.localData[t];
    }
    var a = this.localData[t];
    if (!a) return {};
    var e = this._generateRandomMapping();
    if (0 === Object.keys(e).length) return {};
    a.mapping = e;
    this.localData[t] = this.localData[t];
    return e;
  }
  _clearMapping(t) {
    var a = this.localData[t];
    if (a) {
      a.mapping = {};
      this.localData[t] = this.localData[t];
    }
  }
  _getCurrentGameMode() {
    return UserModel.getInstance().getCurrentGameType() || MjGameType.Normal;
  }
  onAdMgr_interAdClose(t, a) {
    try {
      var r = this._getCurrentGameMode();
      this.localData[r] || (this.localData[r] = {
        mapping: {},
        hadInterAdLastRound: false,
        hadInterAdThisRound: false
      });
      var n = this.localData[r];
      if (n) {
        n.hadInterAdThisRound = true;
        this.localData[r] = this.localData[r];
      }
      mj.EventManager.emit("Tile6_setAdFlag");
    } catch (t) {
      console.error("[" + CardTile6Trait.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
    }
    a();
  }
  onGsListener_onNewGame(t, a) {
    try {
      var r = this._getCurrentGameMode();
      if (r !== MjGameType.Travel && r !== MjGameType.DailyChallenge) {
        a();
        return;
      }
      var n = this.localData[r];
      if (null == n ? void 0 : n.hadInterAdLastRound) this._currentMapping = this._generateMapping(r);else {
        this._clearMapping(r);
        this._currentMapping = {};
      }
    } catch (t) {
      console.error("[" + CardTile6Trait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    a();
  }
  onTLWinVw_showTLWinVw(t, a) {
    try {
      var r = MjGameType.Travel,
        n = this.localData[r];
      (null == n ? void 0 : n.hadInterAdThisRound) || mj.EventManager.emit("Tile6_clearAdFlag");
      if (this.localData[r]) {
        this.localData[r].hadInterAdThisRound = false;
        this.localData[r] = this.localData[r];
      }
    } catch (t) {
      console.error("[" + CardTile6Trait.traitKey + "] 旅行模式胜利处理失败: " + (null == t ? void 0 : t.message));
    }
    a();
  }
  onDCWinVw_showWinVw(t, a) {
    try {
      var r = MjGameType.DailyChallenge,
        n = this.localData[r];
      (null == n ? void 0 : n.hadInterAdThisRound) || mj.EventManager.emit("Tile6_clearAdFlag");
      if (this.localData[r]) {
        this.localData[r].hadInterAdThisRound = false;
        this.localData[r] = this.localData[r];
      }
    } catch (t) {
      console.error("[" + CardTile6Trait.traitKey + "] 每日挑战胜利处理失败: " + (null == t ? void 0 : t.message));
    }
    a();
  }
  onCardUtil_atlasPathBundle(t, a) {
    var r;
    try {
      var n = this._getCurrentGameMode();
      if (n !== MjGameType.Travel && n !== MjGameType.DailyChallenge) {
        a();
        return;
      }
      var o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
      if (this._getTaskCardResName() === o) {
        a();
        return;
      }
      if (/^[tb][1-9]$/.test(o)) {
        var i = this.localData[n];
        if (!i || 0 === Object.keys(i.mapping).length) {
          a();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = i.mapping);
        var s = "atlas/cardIconTile/" + (i.mapping[o] || o);
        a({
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
      a();
    } catch (t) {
      console.error("[" + CardTile6Trait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      a();
    }
  }
}
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardNumber2Trait")
export default class CardNumber2Trait extends Trait {
  _currentMapping = {};
  static traitKey = "CardNumber2";
  static BUNDLE_NAME = "r_cardNumber";
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
      a = CardNumber2Trait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== a.length) return r;
    var n = this._getTaskCardResName(),
      o = CardNumber2Trait.ALL_CARDS.filter(function (t) {
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
      if (UserModel.getInstance().normalData.getLevelId() < 3) {
        r();
        return;
      }
      var a = this._getCurrentGameMode();
      if (a !== MjGameType.Travel && a !== MjGameType.DailyChallenge) {
        r();
        return;
      }
      this._currentMapping = this._getOrCreateMapping(a);
    } catch (t) {
      console.error("[" + CardNumber2Trait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
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
      if (UserModel.getInstance().normalData.getLevelId() < 3) {
        r();
        return;
      }
      var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if (this._getTaskCardResName() === o) {
        r();
        return;
      }
      var i = /^W[1-9]$/.test(o),
        s = /^[tb][1-9]$/.test(o);
      if (i) {
        var f = "atlas/numberCardIcon/" + o;
        r({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: f,
            bundleName: CardNumber2Trait.BUNDLE_NAME,
            fromAtlas: true
          }
        });
        return;
      }
      if (s) {
        var d = this.localData[n];
        if (!d || 0 === Object.keys(d.mapping).length) {
          r();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = d.mapping);
        f = "atlas/cardIcon/" + (d.mapping[o] || o);
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
      console.error("[" + CardNumber2Trait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
}
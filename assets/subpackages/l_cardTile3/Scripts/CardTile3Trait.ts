import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardTile3Trait")
export default class CardTile3Trait extends Trait {
  _currentMapping = {};
  static traitKey = "CardTile3";
  static ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  onLoad() {
    super.onLoad.call(this);
  }
  _getTaskCardResName() {
    var t,
      e = mj.getClassByName("TaskModel");
    return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
  }
  _generateRandomMapping() {
    var t,
      e = {},
      a = CardTile3Trait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== a.length) return e;
    var n = this._getTaskCardResName(),
      i = CardTile3Trait.ALL_CARDS.filter(function (t) {
        return t && t.length > 0;
      });
    n && (i = i.filter(function (t) {
      return t !== n;
    }));
    if (i.length < 18) return e;
    for (var l = i.length - 1; l > 0; l--) {
      var s = Math.floor(Math.random() * (l + 1));
      t = __read([i[s], i[l]], 2), i[l] = t[0], i[s] = t[1];
    }
    for (l = 0; l < 18; l++) e[a[l]] = i[l];
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
      if (UserModel.getInstance().normalData.getLevelId() < 1) {
        e();
        return;
      }
      var a = this._getCurrentGameMode();
      if (a !== MjGameType.Travel && a !== MjGameType.DailyChallenge) {
        e();
        return;
      }
      this._currentMapping = this._getOrCreateMapping(a);
    } catch (t) {
      console.error("[" + CardTile3Trait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onCardUtil_atlasPathBundle(t, e) {
    var a;
    try {
      var n = this._getCurrentGameMode();
      if (n !== MjGameType.Travel && n !== MjGameType.DailyChallenge) {
        e();
        return;
      }
      if (UserModel.getInstance().normalData.getLevelId() < 1) {
        e();
        return;
      }
      var i = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if (this._getTaskCardResName() === i) {
        e();
        return;
      }
      if (/^[tb][1-9]$/.test(i)) {
        var o = this.localData[n];
        if (!o || 0 === Object.keys(o.mapping).length) {
          e();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = o.mapping);
        var s = "atlas/cardIconTile/" + (o.mapping[i] || i);
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
      console.error("[" + CardTile3Trait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
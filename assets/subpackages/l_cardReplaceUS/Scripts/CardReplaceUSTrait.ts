import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardReplaceUSTrait")
export default class CardReplaceUSTrait extends Trait {
  _currentMapping = {};
  static traitKey = "CardReplaceUS";
  static BUNDLE_NAME = "l_cardReplaceUS";
  static ALL_CARDS = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  onLoad() {
    super.onLoad.call(this);
    this._checkCountryCondition();
  }
  _checkCountryCondition() {
    var t = this._tm.getConditionInfo(),
      e = null == t ? void 0 : t.country;
    e && "" !== e || (this.eventEnabled = false);
  }
  _getTaskCardResName() {
    var t,
      e = mj.getClassByName("TaskModel");
    return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.getTaskCardResName();
  }
  _generateRandomMapping() {
    var t,
      e = {},
      a = CardReplaceUSTrait.ALL_CARDS.slice(0, 18).filter(function (t) {
        return t && t.length > 0;
      });
    if (18 !== a.length) return e;
    var n = this._getTaskCardResName(),
      o = CardReplaceUSTrait.ALL_CARDS.filter(function (t) {
        return t && t.length > 0;
      });
    n && (o = o.filter(function (t) {
      return t !== n;
    }));
    if (o.length < 18) return e;
    for (var l = o.length - 1; l > 0; l--) {
      var s = Math.floor(Math.random() * (l + 1));
      t = __read([o[s], o[l]], 2), o[l] = t[0], o[s] = t[1];
    }
    for (l = 0; l < 18; l++) e[a[l]] = o[l];
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
      if (UserModel.getInstance().getMainGameData().getLevelId() < 1) {
        e();
        return;
      }
      var a = this._getCurrentGameMode();
      if (a !== MjGameType.Normal && a !== MjGameType.Tile2Normal) {
        e();
        return;
      }
      this._currentMapping = this._getOrCreateMapping(a);
    } catch (t) {
      console.error("[" + CardReplaceUSTrait.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onCardUtil_atlasPathBundle(t, e) {
    var a;
    try {
      var n = this._getCurrentGameMode();
      if (n !== MjGameType.Normal && n !== MjGameType.Tile2Normal) {
        e();
        return;
      }
      if (UserModel.getInstance().getMainGameData().getLevelId() < 1) {
        e();
        return;
      }
      var o = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if (this._getTaskCardResName() === o) {
        e();
        return;
      }
      if (/^[tb][1-9]$/.test(o)) {
        var i = this.localData[n];
        if (!i || 0 === Object.keys(i.mapping).length) {
          e();
          return;
        }
        0 === Object.keys(this._currentMapping).length && (this._currentMapping = i.mapping);
        var s = "atlas/cardIconTile/" + (i.mapping[o] || o);
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
      console.error("[" + CardReplaceUSTrait.traitKey + "] 劫持图片失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
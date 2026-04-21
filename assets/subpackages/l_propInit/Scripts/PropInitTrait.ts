import { MjGameType, EItemId, EGetItemReasonId, EItemName } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { DotGameGetItem } from '../../../Scripts/gamePlay/dot/DGameGetItem';
import { EItemType } from '../../../Scripts/user/IUserData';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("PropInitTrait")
export default class PropInitTrait extends Trait {
  static traitKey = "PropInit";
  isNormalGame(t) {
    return t === MjGameType.Tile2Normal;
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  isPropInitDone(t) {
    var e = "isPropInitDone_" + t;
    return !this.isLocalEmpty(this.localData[e]) && this.localData[e];
  }
  setPropInitDone(t) {
    var e = "isPropInitDone_" + t;
    this.localData[e] = true;
  }
  onGsListener_onNewGame(t, e) {
    var r,
      o,
      i,
      n,
      p = t.args[0];
    if (this.isNormalGame(p)) {
      var s = UserModel.getInstance().getGameDataByGameType(p),
        l = s.getLevelId(),
        c = null !== (n = null === (i = this.traitData) || void 0 === i ? void 0 : i.propList) && void 0 !== n ? n : [];
      try {
        for (var u = __values(c), f = u.next(); !f.done; f = u.next()) {
          var d = f.value;
          if (!(d.initNum <= 0 || this.isPropInitDone(d.type) || l < d.unlockLv)) {
            this.setPropInitDone(d.type);
            this.deliverProp(s, d.type, d.initNum);
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          f && !f.done && (o = u.return) && o.call(u);
        } finally {
          if (r) throw r.error;
        }
      }
      e();
    } else e();
  }
  deliverProp(t, e, r) {
    var o = 0,
      i = EItemId.Shuffle;
    if (e === EItemType.Shuffle) {
      t.changeShuffleNums(r, true);
      t.toolChange(EItemId.Shuffle, r);
      o = t.getShuffleNums();
    } else if (e === EItemType.Hint) {
      t.changeHitTipsNums(r, true);
      t.toolChange(EItemId.Hint, r);
      o = t.getHitTipsNums();
      i = EItemId.Hint;
    } else if (e === EItemType.Undo) {
      t.changeRevertNums(r, true);
      t.toolChange(EItemId.Revert, r);
      o = t.getRevertNums();
      i = EItemId.Revert;
    }
    DotGameGetItem.dotGetItem(t, {
      itemId: i,
      number: r,
      afterNum: o,
      reasonId: EGetItemReasonId.SystemGift,
      reasonInfo: "首次进入送" + r + "次" + EItemName[i],
      replace: true
    });
  }
  onT2NodeBtmVw_isPropUnlimit(t, e) {
    var r = t.args[0];
    if (cc.isValid(r) && cc.isValid(r.parent)) {
      var o = r.parent.name,
        i = this.getPropType(o),
        n = UserModel.getInstance().getCurrentGameType();
      if (this.isUnlimitLevel(n, i)) {
        e({
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      } else {
        e();
      }
    } else e();
  }
  onT2NodeBtmVw_isPropLocked(t, e) {
    var r = t.args[0];
    if (cc.isValid(r) && cc.isValid(r.parent)) {
      var o = r.parent.name,
        i = this.getPropType(o),
        n = UserModel.getInstance().getCurrentGameType();
      if (this.isUnlocked(n, i)) {
        e();
      } else {
        e({
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      }
    } else e();
  }
  isUnlimitLevel(t, e) {
    var r = this.getPropItem(e);
    if (!r) return false;
    if (!this.isNormalGame(t)) return false;
    var o = UserModel.getInstance().getGameDataByGameType(t).getLevelId();
    return !!r.unlimitLvs.includes(o);
  }
  isUnlocked(t, e) {
    var r = this.getPropItem(e);
    return !!r && !!this.isNormalGame(t) && UserModel.getInstance().getGameDataByGameType(t).getLevelId() >= r.unlockLv;
  }
  getPropType(t) {
    return "btnShuffle" === t ? EItemType.Shuffle : "btnPropHint" === t ? EItemType.Hint : "btnPropRevert" === t ? EItemType.Undo : EItemType.None;
  }
  getPropItem(t) {
    var e, r;
    return (null !== (r = null === (e = this.traitData) || void 0 === e ? void 0 : e.propList) && void 0 !== r ? r : []).find(function (e) {
      return e.type === t;
    });
  }
  onGameData_isShuffleEnough(t, e) {
    if (this.isUnlimitLevel(t.ins.gameType, EItemType.Shuffle)) {
      e({
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onGameData_isHitTipEnough(t, e) {
    if (this.isUnlimitLevel(t.ins.gameType, EItemType.Hint)) {
      e({
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onGameData_isRevertEnough(t, e) {
    if (this.isUnlimitLevel(t.ins.gameType, EItemType.Undo)) {
      e({
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onGameData_chgShuffle(t, e) {
    if (t.args[0] >= 0) {
      e();
    } else {
      if (this.isUnlimitLevel(t.ins.gameType, EItemType.Shuffle)) {
        e({
          returnType: TraitCallbackReturnType.jump
        });
      } else {
        e();
      }
    }
  }
  onGameData_chgHitTips(t, e) {
    if (t.args[0] >= 0) {
      e();
    } else {
      if (this.isUnlimitLevel(t.ins.gameType, EItemType.Hint)) {
        e({
          returnType: TraitCallbackReturnType.jump
        });
      } else {
        e();
      }
    }
  }
  onGameData_chgRevert(t, e) {
    if (t.args[0] >= 0) {
      e();
    } else {
      if (this.isUnlimitLevel(t.ins.gameType, EItemType.Undo)) {
        e({
          returnType: TraitCallbackReturnType.jump
        });
      } else {
        e();
      }
    }
  }
  onT2NodeBtmVw_showLockTips(t, e) {
    var r = t.args[0],
      o = this.getPropItem(r);
    if (o) {
      var i = I18NStrings.stringFormat(I18NStrings.get("MahjongTiles_ProHint_1"), o.unlockLv);
      ControllerManager.getInstance().pushViewByController("PropLockTipController", {
        isReuse: false,
        tips: i,
        noBlock: true,
        isGlobal: false,
        bgStyle: null,
        isShowAction: false,
        tipDelayTime: 0.5
      });
      e();
    } else e();
  }
}
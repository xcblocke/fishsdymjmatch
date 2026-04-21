import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var l = {
  Task: "task",
  Rank: "rank",
  Travel: "travel",
  DailyChallenge: "dailyChallenge",
  DailySign: "dailySign"
};
@mj.trait
@mj.class("HallBtnsOrderShowTrait")
export default class HallBtnsOrderShowTrait extends Trait {
  featureTypeList = [];
  static traitKey = "HallBtnsOrderShow";
  get orderDataList() {
    this.localData || (this.localData = {
      orderDataList: []
    });
    this.localData.orderDataList || (this.localData.orderDataList = []);
    return this.localData.orderDataList;
  }
  getLevelFromTrait(e, t, r) {
    var n,
      a = mj.getClassByName(e);
    if (!a) return null;
    var i = a.getInstance();
    if (!i || false === i.eventEnabled) return null;
    var o = null === (n = i[t]) || void 0 === n ? void 0 : n.call(i);
    return null == o ? null : r ? r(o) : o;
  }
  onLoad() {
    super.onLoad.call(this);
    this.initFeatureType();
  }
  initFeatureType() {
    this.addFeatureType(l.DailySign);
    this.addFeatureType(l.Task);
    this.addFeatureType(l.Rank);
    this.addFeatureType(l.Travel);
    this.addFeatureType(l.DailyChallenge);
  }
  syncFeatureTypeToOrderData() {
    var e,
      t,
      r = function r(e) {
        if (n.orderDataList.find(function (t) {
          return t.featureType === e;
        })) return "continue";
        var t = {
          featureType: e,
          unlockLevel: null,
          isShowed: false,
          isUnlocked: false
        };
        n.orderDataList.push(t);
      },
      n = this;
    try {
      for (var a = __values(this.featureTypeList), i = a.next(); !i.done; i = a.next()) r(i.value);
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = a.return) && t.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  @mj.traitEvent("HBtnsShow_initOrderData")
  initOrderData() {
    var e, t;
    this.syncFeatureTypeToOrderData();
    var r = this.getCurrentLevel();
    try {
      for (var n = __values(this.orderDataList), a = n.next(); !a.done; a = n.next()) {
        var i = a.value;
        if (!i.isShowed) {
          var l = this.getUnlockLevel(i.featureType);
          if (null === l || l <= 0) continue;
          i.unlockLevel = l;
        }
        null !== i.unlockLevel && this.isLevelReached(i.featureType, r, i.unlockLevel) && (i.isUnlocked || (i.isUnlocked = true));
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    this.sortOrderDataList();
  }
  onHallCtl_viewDidLoad(e, t) {
    this.initOrderData();
    t();
  }
  onWinVw_onLoad(e, t) {
    this.initOrderData();
    t();
  }
  onFailVw_onLoad(e, t) {
    this.initOrderData();
    t();
  }
  @mj.traitEvent("HBtnsShow_getUnlockLevel")
  getUnlockLevel(e) {
    switch (e) {
      case l.Task:
        return this.getLevelFromTrait("TaskTrait", "getOpenCondition", function (e) {
          return null == e ? void 0 : e.level;
        });
      case l.Rank:
        return this.getLevelFromTrait("RankTrait", "getLimitLevel");
      case l.Travel:
        return this.getLevelFromTrait("JourneyTrait", "getLimitLevel");
      case l.DailyChallenge:
        return this.getLevelFromTrait("DailyLockTrait", "getLimitLevel");
      case l.DailySign:
        return this.getLevelFromTrait("DailySignClassicTrait", "getUnlockLevel");
      default:
        return null;
    }
  }
  @mj.traitEvent("HBtnsShow_addFeature")
  addFeatureType(e) {
    this.featureTypeList.includes(e) || this.featureTypeList.push(e);
  }
  @mj.traitEvent("HBtnsShow_chgIconShow")
  changeIconShowed(e) {
    var t = this.shouldShowFeature(e);
    if (t) {
      var r = this.orderDataList.find(function (t) {
        return t.featureType === e;
      });
      if (r) {
        var n = false;
        if (!r.isShowed) {
          r.isShowed = true;
          n = true;
        }
        if (!r.isUnlocked && null !== r.unlockLevel) {
          var a = this.getCurrentLevel();
          if (this.isLevelReached(r.featureType, a, r.unlockLevel)) {
            r.isUnlocked = true;
            n = true;
          }
        }
        n && (this.localData.orderDataList = this.orderDataList);
      }
    }
    return t;
  }
  sortOrderDataList() {
    this.orderDataList.sort(function (e, t) {
      return null === e.unlockLevel && null === t.unlockLevel ? 0 : null === e.unlockLevel ? 1 : null === t.unlockLevel ? -1 : e.unlockLevel - t.unlockLevel;
    });
    this.localData.orderDataList = this.orderDataList;
  }
  getCurrentLevel() {
    return UserModel.getInstance().getMainGameData().getLevelId();
  }
  isLevelReached(e, t, r) {
    return e === l.Task || e === l.Rank ? t > r : t >= r;
  }
  isFeatureUnlocked(e) {
    var t = this.orderDataList.find(function (t) {
      return t.featureType === e;
    });
    if (!t || null === t.unlockLevel) return true;
    var r = this.getCurrentLevel();
    if (this.isLevelReached(e, r, t.unlockLevel)) return true;
    if (t.isShowed) return true;
    for (var n = -1, a = -1, i = -1, o = 0; o < this.orderDataList.length; o++) {
      var l = this.orderDataList[o];
      l.featureType === e && (n = o);
      l.isShowed && o > a && (a = o);
      null !== l.unlockLevel && this.isLevelReached(l.featureType, r, l.unlockLevel) && o > i && (i = o);
    }
    if (a > n) return true;
    if (i >= n) return true;
    var u = Math.max(a, i);
    if (u + 1 === n) {
      if (-1 === u) return true;
      var s = this.orderDataList[u];
      return !(!(null !== s.unlockLevel && this.isLevelReached(s.featureType, r, s.unlockLevel)) && !s.isUnlocked);
    }
    return false;
  }
  shouldShowFeature(e) {
    0 === this.orderDataList.length && this.featureTypeList.length > 0 && this.initOrderData();
    var t = this.orderDataList.find(function (t) {
      return t.featureType === e;
    });
    if (!t) return true;
    if (null === t.unlockLevel) {
      var r = this.getUnlockLevel(e);
      if (!(null !== r && r > 0)) return true;
      t.unlockLevel = r;
      this.sortOrderDataList();
    }
    return !!this.isFeatureUnlocked(e);
  }
  onTaskTrait_canShowTaskBtn(e, t) {
    if (this.shouldShowFeature(l.Task)) {
      this.changeIconShowed(l.Task);
      t();
    } else t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: false
    });
  }
  onRankTrait_checkLv(e, t) {
    if (this.shouldShowFeature(l.Rank)) {
      this.changeIconShowed(l.Rank);
      t();
    } else t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: false
    });
  }
  onDSClassic_canShowBtn(e, t) {
    if (this.shouldShowFeature(l.DailySign)) {
      this.changeIconShowed(l.DailySign);
      t();
    } else t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: false
    });
  }
  onJourney_CreateBtn(e, t) {
    if (this.shouldShowFeature(l.Travel)) {
      this.changeIconShowed(l.Travel);
      t();
    } else t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onDaily_checkHDBtn(e, t) {
    if (this.shouldShowFeature(l.DailyChallenge)) {
      this.changeIconShowed(l.DailyChallenge);
      t();
    } else {
      e.args[0] = false;
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onDaily_isOpenDaily(e, t) {
    if (this.shouldShowFeature(l.DailyChallenge)) {
      this.changeIconShowed(l.DailyChallenge);
      t();
    } else t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: false
    });
  }
}
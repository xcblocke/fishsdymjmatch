import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import DailyChallengeGameData from '../../../Scripts/core/simulator/data/DailyChallengeGameData';
import HardLevelBannerView from './HardLevelBannerView';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("HardLevelBannerTrait")
export default class HardLevelBannerTrait extends Trait {
  requireRes = ["r_hardLevelBanner:prefabs/HardLevelBanner"];
  _bannerTexts = [];
  static traitKey = "HardLevelBanner";
  onLoad() {
    super.onLoad.call(this);
    this.initBannerTexts();
  }
  getBannerDuration() {
    return 2;
  }
  getPercentRangeType1() {
    return [40, 70];
  }
  getPercentRangeType2() {
    return [40, 70];
  }
  getPercentRangeType3() {
    return [40, 70];
  }
  getPercentRangeType4() {
    return [30, 60];
  }
  initBannerTexts() {
    this.localData || (this.localData = {
      normal: null,
      dailyChallenge: null
    });
    this._bannerTexts = [{
      key: "Beat_Des_1",
      percentRange: this.getPercentRangeType1()
    }, {
      key: "Beat_Des_2",
      percentRange: this.getPercentRangeType2()
    }, {
      key: "Beat_Des_3",
      percentRange: this.getPercentRangeType3()
    }, {
      key: "Beat_Des_4",
      percentRange: this.getPercentRangeType4()
    }];
  }
  onMainGameCtrl_initRes(e, t) {
    var n = e.ins;
    n && n.addPreloadRes && n.addPreloadRes("Prefab", this.requireRes);
    t();
  }
  onEntAniFiBhv_start(e, t) {
    var n;
    if (this.hasFullScreenPopup()) t();else if (this.shouldShowBanner()) {
      this.updateCacheIfNeeded();
      var r = e.ins,
        a = null === (n = null == r ? void 0 : r.context) || void 0 === n ? void 0 : n.gameView;
      if (a && cc.isValid(a.node)) {
        t();
        this.showBanner(a);
      } else t();
    } else t();
  }
  hasFullScreenPopup() {
    var e,
      t = ControllerManager.getInstance(),
      n = t.getTopSceneController();
    if ((null === (e = null == n ? void 0 : n.subControllers) || void 0 === e ? void 0 : e.length) > 0) return true;
    var r = t.getTopViewControllerIncludingAlerts();
    return !(!r || r === n);
  }
  getCurrentLevelInfo() {
    var e,
      t = UserModel.getInstance(),
      n = t.getCurrentGameType(),
      r = 0;
    if (n === MjGameType.Normal) {
      var a = t.getGameDataByGameType(MjGameType.Normal);
      r = (null === (e = null == a ? void 0 : a.getLevelId) || void 0 === e ? void 0 : e.call(a)) || 0;
    } else if (n === MjGameType.DailyChallenge) {
      var o = DailyChallengeGameData.getInstance().getDailyChallengeTimestamp();
      r = parseInt(o.replace(/-/g, ""), 10) || 0;
    }
    return {
      levelId: r,
      gameType: n
    };
  }
  updateCacheIfNeeded() {
    var e = this.getCurrentLevelInfo(),
      t = e.levelId,
      n = e.gameType === MjGameType.Normal ? "normal" : "dailyChallenge",
      r = this.localData[n];
    if (!r || r.levelId !== t) {
      var a = Math.floor(Math.random() * this._bannerTexts.length),
        o = this._bannerTexts[a],
        l = __read(o.percentRange, 2),
        c = l[0],
        p = l[1],
        u = Math.floor(Math.random() * (p - c + 1)) + c;
      this.localData[n] = {
        levelId: t,
        percent: u,
        textIndex: a
      };
      this.localData = this.localData;
    }
  }
  shouldShowBanner() {
    var e,
      t,
      n = UserModel.getInstance(),
      r = n.getCurrentGameType();
    if (r === MjGameType.Normal) {
      var a = n.getGameDataByGameType(MjGameType.Normal),
        o = (null === (e = null == a ? void 0 : a.getLevelId) || void 0 === e ? void 0 : e.call(a)) || 0;
      if (null === (t = this.localData) || void 0 === t ? void 0 : t.hasTriggeredHardLevel) return true;
      var i = ExtractTool.getInstance().isHardUI(o),
        l = ExtractTool.getInstance().isExpertUI(o);
      if (i || l) {
        this.markHardLevelTriggered();
        return true;
      }
      return false;
    }
    if (r === MjGameType.DailyChallenge) {
      return DailyChallengeGameData.getInstance().getDailyChallengeTimestamp() === this.getTodayString();
    }
    return false;
  }
  markHardLevelTriggered() {
    if (this.localData) {
      this.localData.hasTriggeredHardLevel = true;
    } else {
      this.localData = {
        normal: null,
        dailyChallenge: null,
        hasTriggeredHardLevel: true
      };
    }
    this.localData = this.localData;
  }
  getTodayString() {
    var e = new Date();
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  showBanner(e) {
    var t,
      n = this;
    if (this.localData) {
      var r = UserModel.getInstance().getCurrentGameType() === MjGameType.Normal ? "normal" : "dailyChallenge",
        a = this.localData[r];
      if (a) {
        var o = null !== (t = a.textIndex) && void 0 !== t ? t : 0,
          i = this._bannerTexts[o],
          l = a.percent;
        HardLevelBannerView.createUI("prefabs/HardLevelBanner", "r_hardLevelBanner").then(function (t) {
          if (cc.isValid(t) && cc.isValid(e) && cc.isValid(e.node)) {
            t.parent = e.node;
            var r = t.getComponent(HardLevelBannerView);
            r && r.showBanner(i.key, l, n.getBannerDuration());
          }
        });
      }
    }
  }
}
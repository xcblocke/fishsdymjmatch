import UserModel from '../../gamePlay/user/UserModel';
import DynamicCurve from '../../types/DynamicCurve';
import { MjGameType, JourneyType } from '../simulator/constant/GameTypeEnums';
import ExtractNormalLevels, { ExtractDimension } from './ExtractNormalLevels';
import ExtractSpecialHardLevels from './ExtractSpecialHardLevels';
import ExtractTravelHardLevels from './ExtractTravelHardLevels';
import ExtractStatic from './ExtractStatic';
import Tile2CapabilityExtractRegistry from '../../Tile2CapabilityExtractRegistry';
@mj.class("ExtractTool")
export default class ExtractTool {
  isInitMap = new Map();
  static ExtractDimension = ExtractDimension;
  static _currentGameType = MjGameType.Normal;
  static _currentJourneyType = null;
  static _instance = null;
  static getInstance() {
    this._instance || (this._instance = new ExtractTool());
    return this._instance;
  }
  static getCurrentGameType() {
    var e = UserModel.getInstance(),
      t = e.getCurrentGameType(),
      o = e.getGameDataByGameType(t);
    return o && o.gameType ? o.gameType : this._currentGameType;
  }
  static getCurrentJourneyType() {
    var e = UserModel.getInstance(),
      t = e.getCurrentGameType(),
      o = e.getGameDataByGameType(t);
    return o && "function" == typeof o.getJourneyType ? o.getJourneyType() : this._currentJourneyType;
  }
  static gameTypeFromNumber(e) {
    switch (e) {
      case 1:
        return MjGameType.Normal;
      case 2:
        return MjGameType.Travel;
      case 3:
        return MjGameType.DailyChallenge;
      default:
        return MjGameType.Normal;
    }
  }
  getInitKey(e, t) {
    return "Travel" === e && t ? e + "_" + t : e;
  }
  initData(e, o) {
    var n = this;
    if (void 0 !== e) {
      ExtractTool._currentGameType = e;
      ExtractTool._currentJourneyType = o || null;
    }
    this.initOtherData(e, o);
    DynamicCurve.instance.init();
    var i = this.getInitKey(e, o);
    return this.isInitMap.get(i) ? Promise.resolve() : ExtractNormalLevels.getInstance().initData().then(function (e) {
      e && n.isInitMap.set(i, true);
    });
  }
  @mj.traitEvent("ExtractTool_initOther")
  initOtherData() {}
  getAllNamesData() {
    return ExtractNormalLevels.getInstance().getAllNamesData();
  }
  isHardLevel(e) {
    return this.isHardUI(e) || this.isExpertUI(e);
  }
  @mj.traitEvent("ExtractTool_isFixedLevel")
  isFixedLevel(e) {
    return e <= 0;
  }
  @mj.traitEvent("ExtractTool_getFixedLvStr")
  getFixedLevelStr() {
    return null;
  }
  getHardLevelNum(e) {
    if (e < 10) return 0;
    var t = 0;
    t += Math.floor(e / 10);
    e >= 15 && (t += Math.floor((e - 15) / 10) + 1);
    return t;
  }
  @mj.traitEvent("ExtractTool_isHardUI")
  isHardUI(e) {
    return e >= 10 && e % 10 == 0;
  }
  @mj.traitEvent("ExtractTool_isExpertUI")
  isExpertUI(e) {
    return e >= 10 && e % 10 == 5;
  }
  @mj.traitEvent("ExtractTool_getLvType")
  getLevelType() {
    return 0;
  }
  @mj.traitEvent("ExtractTool_isHardUseFix")
  isHardUseFixedLevel() {
    return false;
  }
  getHardContentData(e) {
    var o = this;
    return this.isHardUseFixedLevel(e.levelID) ? ((e.gameType || ExtractTool.getCurrentGameType()) === MjGameType.Travel ? ExtractTravelHardLevels.getInstance() : ExtractSpecialHardLevels.getInstance()).getContent(e.levelID).then(function (t) {
      return t ? [...t, ...[false]] : o.getNormalContentData(e);
    }) : this.getNormalContentData(e);
  }
  getRealLevelID(e) {
    var t = ExtractDimension.getGuideNum();
    return e - this.getHardLevelNum(e) - t;
  }
  getNormalContentData(e) {
    var t = this;
    e.reallyLevelID = Math.max(1, e.levelIndex);
    void 0 !== e.levelID && e.levelID;
    return ExtractNormalLevels.getInstance().getContent(e).then(function (o) {
      var n = void 0 !== e.levelID && t.isFixedLevel(e.levelID);
      return [...o, ...[!n]];
    });
  }
  @mj.traitEvent("ExtractTool_isTravelHard")
  isOpenTravelHard() {
    return false;
  }
  getTravelContentData(e) {
    var t = e.journeyType === JourneyType.Yoga,
      o = mj.getClassByName("TravelGameModel");
    if (!t && o.getInstance().isHardLevel(e.levelID) && this.isOpenTravelHard()) return this.getHardContentData(e);
    e.reallyLevelID = Math.max(1, e.levelIndex);
    return ExtractNormalLevels.getInstance().getContent(e).then(function (e) {
      return [...e, ...[true]];
    });
  }
  getDailyChallengeContentData(e) {
    e.reallyLevelID = Math.max(1, e.levelIndex);
    e.challengeDate && e.challengeDate;
    return ExtractNormalLevels.getInstance().getContent(e).then(function (e) {
      return [...e, ...[true]];
    });
  }
  getContentData(e) {
    ExtractTool._currentGameType = e.gameType || MjGameType.Normal;
    ExtractTool._currentJourneyType = e.journeyType || null;
    if (e.levelID && this.isFixedLevel(e.levelID)) {
      var o = this.getFixedLevelStr(e.levelID);
      if (o) return Promise.resolve([o, 0, "fixed", "FixedLevel", "固定关", false]);
    }
    return DynamicCurve.instance.supportMode(e.gameType) ? this.getDynamicContentData(e) : this.getNonDynamicContentData(e);
  }
  getDynamicContentData(e) {
    var t = this;
    return new Promise(function (o) {
      Date.now();
      DynamicCurve.instance.getContentData(e).then(function (n) {
        if (n && null !== n[0]) {
          o(n);
        } else {
          t.getNonDynamicContentData(e).then(function (e) {
            o(e);
          });
        }
      }).catch(function () {
        t.getNonDynamicContentData(e).then(function (e) {
          o(e);
        });
      });
    });
  }
  getNonDynamicContentData(e) {
    switch (e.gameType || MjGameType.Normal) {
      case MjGameType.Normal:
        return this.canUseStaticContentByLevelID(e.levelID) ? Promise.resolve(this.getStaticContentData(e)) : e.levelID && this.isHardLevel(e.levelID) ? this.getHardContentData(e) : this.getNormalContentData(e);
      case MjGameType.Travel:
        return this.getTravelContentData(e);
      case MjGameType.DailyChallenge:
        return this.getDailyChallengeContentData(e);
    }
  }
  @mj.traitEvent("ExtractTool_upCapability")
  UpdateCapability(e, t, o, n, i) {
    return this.isSupportCapabilityUpdate(i) ? this.isStaticLevel(n) ? null : this.isHardLevel(n) && this.isHardUseFixedLevel(n) ? null : ExtractDimension.getGuideNum() == n ? null : ExtractNormalLevels.getInstance().updateCapability(e, t, o) : null;
  }
  @mj.traitEvent("ExtractTool_isSupCapUp")
  isSupportCapabilityUpdate(e) {
    return e === MjGameType.Tile2Normal ? Tile2CapabilityExtractRegistry.isEnabled() : e === MjGameType.Normal;
  }
  canUseStaticContentByLevelID(e) {
    return !this.isFixedLevel(e) && !!this.isStaticLevel(e);
  }
  @mj.traitEvent("ExtractTool_isStaticLv")
  isStaticLevel() {
    return this.canUseStaticContent();
  }
  @mj.traitEvent("ExtractTool_canUseStatic")
  canUseStaticContent() {
    return false;
  }
  getStaticContentData(e) {
    return ExtractStatic.getInstance().getContent(e.levelID);
  }
  getExpectTime(e, t) {
    if (DynamicCurve.instance.supportMode(t)) {
      var o = DynamicCurve.instance.getExtractInfo(t),
        n = o.ok,
        i = o.predictTime;
      if (n) return i;
    }
    return ExtractDimension.getEt(e);
  }
  @mj.traitEvent("ExtractTool_getSolvers")
  getSolvers() {
    return null;
  }
  getExtractInfo(e) {
    return DynamicCurve.instance.supportMode(e) ? DynamicCurve.instance.getExtractInfo(e) : null;
  }
  getUserAllAbilityValue(e, t) {
    var o, n, i, r;
    if (DynamicCurve.instance.supportMode(t)) {
      var a = DynamicCurve.instance.getExtractInfo(t),
        s = a.ok,
        u = a.capability;
      if (s) return [u, -1, -1, -1];
    }
    if (!e || "" == e) return [-1, -1, -1, -1];
    var p = ExtractNormalLevels.getInstance().getData();
    return p && p.ru ? [p.ru, p.du, null !== (n = null === (o = p.subArr.find(function (t) {
      return t.dimensionName == e;
    })) || void 0 === o ? void 0 : o.ru) && void 0 !== n ? n : -1, null !== (r = null === (i = p.subArr.find(function (t) {
      return t.dimensionName == e;
    })) || void 0 === i ? void 0 : i.du) && void 0 !== r ? r : -1] : [-1, -1, -1, -1];
  }
  getUsePatchArr(e) {
    var t = [];
    if (this.isFixedLevel(e) || this.isHardLevel(e)) return t;
    ExtractDimension.isOpenPatch1() && t.push(1);
    ExtractDimension.isOpenPatch2() && t.push(2);
    ExtractDimension.isOpenPatch3() && t.push(3);
    ExtractDimension.isOpenPatch4() && t.push(4);
    return t;
  }
}
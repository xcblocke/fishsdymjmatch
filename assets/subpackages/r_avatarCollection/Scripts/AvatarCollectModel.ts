import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Model from '../../../Scripts/framework/data/Model';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var n;
export var ID_BASE = 100000000;
(n = {})["mainRes######gameplay_special_flower"] = ID_BASE + 1;
n["mainRes######gameplay_special_knitting"] = ID_BASE + 2;
n["mainRes######gameplay_special_snow"] = ID_BASE + 3;
n["mainRes######gameplay_special_teacup"] = ID_BASE + 4;
n["mainRes######gameplay_special_violin"] = ID_BASE + 5;
n["r_newRankCard######gameplay_special_flower"] = ID_BASE + 6;
n["r_newRankCard######gameplay_special_knitting"] = ID_BASE + 7;
n["r_newRankCard######gameplay_special_snow"] = ID_BASE + 8;
n["r_newRankCard######gameplay_special_teacup"] = ID_BASE + 9;
n["r_newRankCard######gameplay_special_violin"] = ID_BASE + 10;
var u = n;
export var Level2MaxString = "10,12;15,20;20,24;25,30;30,36;40,48;50,54";
@mj.class("AvatarCollectModel")
export default class AvatarCollectModel extends Model {
  _isAvatarCollectionOpen = false;
  _isAvatarDisplayOpen = false;
  constructor() {
    super();
    this.loadFromCache();
  }
  setIsAvatarCollectionOpen(t) {
    this._isAvatarCollectionOpen = t;
  }
  isAvatarCollectionOpen() {
    return this._isAvatarCollectionOpen;
  }
  setIsAvatarDisplayOpen(t) {
    this._isAvatarDisplayOpen = t;
  }
  isAvatarDisplayOpen() {
    return this._isAvatarDisplayOpen;
  }
  getData() {
    return this.localData;
  }
  clearLocalData() {
    this.localData.collectedCardMap = {};
  }
  loadFromCache() {
    this.localData.collectedCardMap = null == (t = this.localData.collectedCardMap) || "string" == typeof t && 0 == t.length ? {} : this.localData.collectedCardMap;
    var t;
  }
  isRankUnlock() {
    var t,
      e,
      a = mj.getClassByName("RankTrait");
    if (a && a.getInstance()) {
      var r = null === (e = null === (t = a.getInstance().traitData) || void 0 === t ? void 0 : t.config) || void 0 === e ? void 0 : e.unLockLevel,
        n = this.getCurrentNormalLevel();
      if ("number" == typeof r) return n > r;
    }
    return false;
  }
  getCurrentNormalLevel() {
    return UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId();
  }
  getRankModel() {
    var t = mj.getClassByName("RankModel");
    return null == t ? void 0 : t.getInstance();
  }
  getAvatarCollectionTrait() {
    var t = mj.getClassByName("AvatarCollectionTrait");
    return null == t ? void 0 : t.getInstance();
  }
  getFinishedAvatarList() {
    return Object.values(this.localData.collectedCardMap).filter(function (t) {
      return t.curCount >= t.maxCount && t.headId > ID_BASE;
    }).map(function (t) {
      return t.headId;
    });
  }
  getDefaultAvatarList() {
    var t = DataReader.getList("headConfig");
    return t && 0 !== t.length ? t.map(function (t) {
      return t.ID;
    }) : [1];
  }
  getColMapRelation() {
    return u;
  }
  getHeadId(t, e = "mainRes") {
    return u[e + "######" + t] || -1;
  }
  getHeadInfo(t) {
    for (var e in this.localData.collectedCardMap) {
      var a = this.localData.collectedCardMap[e];
      if (a.headId == t) return a;
    }
    return null;
  }
}
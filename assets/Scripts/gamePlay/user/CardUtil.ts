import { MjCardId } from '../../core/simulator/constant/GameTypeEnums';
import { DataReader } from '../../framework/data/DataReader';
import { ConfigType } from '../base/data/ConfigType';
import UserModel from './UserModel';
export default class CardUtil {
  static _currentConfigName = ConfigType.card_config.name;
  static cardInfos = {};
  static setConfigName(e) {
    if (this._currentConfigName !== e) {
      this._currentConfigName = e;
      this.clearCache();
    }
  }
  static getConfigName() {
    return this._currentConfigName === ConfigType.card_config2.name ? ConfigType.card_config2 : ConfigType.card_config;
  }
  static getCurrentConfigName() {
    return this._currentConfigName;
  }
  static clearCache() {
    this.cardInfos = {};
  }
  static getList() {
    return DataReader.getList(this._currentConfigName);
  }
  static getByKey(e) {
    e = "" + e;
    if (this.cardInfos[e]) return this.cardInfos[e];
    var t = DataReader.getByKey(this._currentConfigName, e);
    if (t) {
      this.cardInfos[e] = t;
      return t;
    }
    var o = UserModel.getInstance(),
      n = null == o ? void 0 : o.getCurrentGameType(),
      i = null == o ? void 0 : o.getGameDataByGameType(n),
      a = "",
      s = "",
      c = "",
      u = "",
      p = 0;
    if (i) {
      a = i.getOriginalLevelData();
      s = i.getOriginalLevelDataWithCardId();
      c = i.getLevelIndex();
      u = i.getLevelName();
      p = i.getLevelDifficulty();
    }
    console.error("[CardUtil] 获取card_info信息异常 resId : " + e + " , configName: " + this._currentConfigName + ", params: [originalLevelData]=> \n            " + a + "  [originalLevelDataWithCardId]=>" + s + "   [levelIndex]=>" + c + " , [levelName]=>" + u + ",[difficulty]=>" + p);
    return DataReader.getByKey(this._currentConfigName, "0");
  }
  static getAtlasName() {
    return "atlas/cardIcon";
  }
  static getCardBundleName() {
    return "mainRes";
  }
  static fromAtlas() {
    return true;
  }
  static getFullPath(t) {
    return CardUtil.getAtlasName(t) + "/" + t;
  }
  @mj.traitEvent("CardUtil_atlasPathBundle")
  static getAtlasPathAndBundleName(t) {
    return {
      path: CardUtil.getFullPath(t),
      bundleName: CardUtil.getCardBundleName(t),
      fromAtlas: CardUtil.fromAtlas(t)
    };
  }
  static isFlowerCardId(e) {
    return !!e && (e >= 28 && e <= 34 || e == MjCardId.emFlowCardId || e == MjCardId.emSeasonCardId || e >= MjCardId.emFlowCardIdMei && e <= MjCardId.emSeasonCardIdDong);
  }
}
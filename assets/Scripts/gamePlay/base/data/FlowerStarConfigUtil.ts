import { DataReader } from '../../../framework/data/DataReader';
import { ConfigType } from './ConfigType';
export class FlowerStarConfigUtil {
  static _cachedStarList = null;
  static _cachedFullList = null;
  static getStarList() {
    if (this._cachedStarList) return this._cachedStarList;
    var e = DataReader.getList(ConfigType.flower_star_config);
    this._cachedStarList = e.map(function (e) {
      return {
        id: e.id,
        name: e.name,
        bundle: e.bundle,
        isLocal: e.isLocal
      };
    });
    return this._cachedStarList;
  }
  static getFullList() {
    if (this._cachedFullList) return this._cachedFullList;
    this._cachedFullList = [...[{
      id: 0,
      name: "木质",
      bundle: "mainRes",
      isLocal: true
    }], ...this.getStarList()];
    return this._cachedFullList;
  }
  static getById(e) {
    return this.getFullList().find(function (t) {
      return t.id === e;
    }) || null;
  }
  static clearCache() {
    this._cachedStarList = null;
    this._cachedFullList = null;
  }
}
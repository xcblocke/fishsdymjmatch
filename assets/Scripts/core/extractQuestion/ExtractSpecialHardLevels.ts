import { ExtractHardLevelsBase } from './ExtractHardLevelsBase';
export default class ExtractSpecialHardLevels extends ExtractHardLevelsBase {
  static levelData = null;
  static getInstance() {
    this._instance || (this._instance = new ExtractSpecialHardLevels());
    return this._instance;
  }
  @mj.traitEvent("SpecialHardLv_getDataCfg")
  getDataConfig() {
    return {};
  }
  getConfig() {
    var e = {
        storageKey: "ExtractSpecialHardLevels",
        dataPath: "config/specialLevels/special_levels",
        defaultMaxLevels: 120,
        sourceName: "special_levels",
        logPrefix: "ExtractSpecialHardLevels"
      },
      t = this.getDataConfig();
    t.dataPath && (e.dataPath = t.dataPath);
    t.bundleName && (e.bundleName = t.bundleName);
    return e;
  }
  getLevelData() {
    return ExtractSpecialHardLevels.levelData;
  }
  setLevelData(e) {
    ExtractSpecialHardLevels.levelData = e;
  }
}
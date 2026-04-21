import { ExtractHardLevelsBase } from './ExtractHardLevelsBase';
@mj.class("ExtractTravelHardLevels")
export default class ExtractTravelHardLevels extends ExtractHardLevelsBase {
  static levelData = null;
  static getInstance() {
    this._instance || (this._instance = new ExtractTravelHardLevels());
    return this._instance;
  }
  @mj.traitEvent("TravelHardLv_getDataCfg")
  getDataConfig() {
    return {};
  }
  getConfig() {
    var e = {
        storageKey: "ExtractTravelHardLevels",
        dataPath: "config/boards/endless_classic/initial",
        defaultMaxLevels: 500,
        sourceName: "initial",
        logPrefix: "ExtractTravelHardLevels"
      },
      t = this.getDataConfig();
    t.dataPath && (e.dataPath = t.dataPath);
    t.bundleName && (e.bundleName = t.bundleName);
    return e;
  }
  getLevelData() {
    return ExtractTravelHardLevels.levelData;
  }
  setLevelData(e) {
    ExtractTravelHardLevels.levelData = e;
  }
}
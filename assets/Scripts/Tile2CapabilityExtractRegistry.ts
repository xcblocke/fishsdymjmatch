export default class Tile2CapabilityExtractRegistry {
  static _config = null;
  static setFromConfig(e) {
    if (e && e.enabled && e.bundle && e.offsetPath && e.levelDataPath && e.levelFileConfigPath && e.jsonPathPrefix) {
      this._config = e;
    } else {
      this._config = null;
    }
  }
  static getConfig() {
    return this._config;
  }
  static isEnabled() {
    return null != this._config && true === this._config.enabled;
  }
}
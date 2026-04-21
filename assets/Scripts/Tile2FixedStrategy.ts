import Tile2BaseStrategy from './Tile2BaseStrategy';
@mj.class("Tile2FixedStrategy")
export default class Tile2FixedStrategy extends Tile2BaseStrategy {
  name = "Tile2Fixed";
  priority = 100;
  @mj.traitEvent("T2FixStr_priority")
  getPriority() {
    return 100;
  }
  @mj.traitEvent("T2FixStr_isFixed")
  isFixedLevel() {
    return false;
  }
  @mj.traitEvent("T2FixStr_getFixed")
  getFixedLevelStr() {
    return null;
  }
  init() {
    this.priority = this.getPriority();
    return Promise.resolve();
  }
  canHandle(e) {
    var t = e.gameData.getLevelId();
    return !!t && this.isFixedLevel(t);
  }
  extract(e) {
    var t = e.gameData.getLevelId(),
      o = this.getFixedLevelStr(t);
    return o ? Promise.resolve({
      content: o,
      index: "fixed"
    }) : Promise.resolve(null);
  }
}
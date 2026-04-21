import Tile2BaseStrategy from './Tile2BaseStrategy';
@mj.class("Tile2HardStrategy")
export default class Tile2HardStrategy extends Tile2BaseStrategy {
  name = "Tile2Hard";
  priority = 80;
  @mj.traitEvent("T2HarStr_priority")
  getPriority() {
    return 80;
  }
  @mj.traitEvent("T2HarStr_isHard")
  isHardLevel() {
    return false;
  }
  init() {
    this.priority = this.getPriority();
    return Promise.resolve();
  }
  canHandle(e) {
    var t = e.gameData.getLevelId();
    return !!t && this.isHardLevel(t);
  }
  @mj.traitEvent("T2HarStr_extract")
  extract() {
    return Promise.resolve(null);
  }
}
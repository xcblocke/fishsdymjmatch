import ExtractNormalLevels from './core/extractQuestion/ExtractNormalLevels';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import Tile2CapabilityExtractRegistry from './Tile2CapabilityExtractRegistry';
import Tile2BaseStrategy from './Tile2BaseStrategy';
@mj.class("Tile2DynamicStrategy")
export default class Tile2DynamicStrategy extends Tile2BaseStrategy {
  name = "Tile2Dynamic";
  priority = 40;
  @mj.traitEvent("T2DynStr_priority")
  getPriority() {
    return 40;
  }
  @mj.traitEvent("T2DynStr_isDyn")
  isDynamicEnabledTrait() {
    return Tile2CapabilityExtractRegistry.isEnabled();
  }
  isDynamicEnabled(e) {
    return this.isDynamicEnabledTrait(e);
  }
  init() {
    this.priority = this.getPriority();
    return Promise.resolve();
  }
  canHandle(e) {
    return this.isDynamicEnabled(e);
  }
  @mj.traitEvent("T2DynStr_extract")
  extract(e) {
    try {
      var t = e.gameData,
        o = {
          levelID: t.getLevelId(),
          levelIndex: t.getLevelGenIndex(),
          dieResult: t.getDieResult(),
          gameType: MjGameType.Tile2Normal
        };
      o.reallyLevelID = Math.max(1, o.levelIndex);
      return ExtractNormalLevels.getInstance().getContent(o).then(function (e) {
        var t = __read(e, 5),
          o = t[0],
          n = (t[1], t[2]),
          i = t[3],
          r = t[4];
        return o ? {
          content: o,
          index: String(n),
          libName: i || r,
          isCapabilityExtract: true
        } : null;
      }).catch(function () {
        return null;
      });
    } catch (e) {
      return Promise.resolve(null);
    }
  }
}
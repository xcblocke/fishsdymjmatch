import { InputBase } from './inputbase/InputBase';
import { EItemId, EGetItemReasonId } from './core/simulator/constant/GameTypeEnums';
import { DotGameUseItem } from './gamePlay/dot/DGameUseItem';
import { DotGameGetItem } from './gamePlay/dot/DGameGetItem';
import ClearHelper from './ClearHelper';
export default class InputTile2MagnetMerge extends InputBase {
  excute(e) {
    var t, o;
    if (null === (t = this.gameContext.tile2ResultChecker) || void 0 === t || !t.checkIsDead()) {
      var n = e.magnetPair || 1,
        i = null === (o = this.gameContext.tile2MagnetChecker) || void 0 === o ? void 0 : o.findMagnetTiles(n);
      if (i && 0 !== i.length) {
        var r = i.slice();
        this.gameContext.getGameData().toolChange(EItemId.Magnet, 1);
        DotGameGetItem.dot(this.gameContext, {
          itemId: EItemId.Magnet,
          afterNum: 1,
          number: 1,
          reasonId: EGetItemReasonId.AdReward,
          reasonInfo: "磁铁激励"
        });
        this.gameContext.getGameData().recordToolUse(EItemId.Magnet);
        this.gameContext.getGameData().toolChange(EItemId.Magnet, -1);
        this.gameContext.tile2DotTrackerModifier.recordUseMagnet(i);
        DotGameUseItem.dot(this.gameContext, {
          itemId: EItemId.Magnet,
          afterNum: 0,
          beforeNum: 1
        });
        ClearHelper.runClear(this.gameContext, e, this, {
          tileIds: i,
          outTiles: r,
          magnetPair: n
        });
      }
    }
  }
}
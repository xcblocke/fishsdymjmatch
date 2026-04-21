import { MjGameType, ETile2SlotType } from './core/simulator/constant/GameTypeEnums';
import ClearClassiclHelper from './ClearClassiclHelper';
import ClearDailyChallengeHelper from './ClearDailyChallengeHelper';
import ClearNormalHelper from './ClearNormalHelper';
import ClearTile2NormalHelper from './ClearTile2NormalHelper';
import ClearTile4NormalHelper from './ClearTile4NormalHelper';
import ClearTravelHelper from './ClearTravelHelper';
export default class ClearHelper {
  static runClear(e, t, o, u) {
    if (e.gameType === MjGameType.Travel) {
      ClearTravelHelper.runClear(e, t, o);
    } else {
      if (e.gameType === MjGameType.DailyChallenge) {
        ClearDailyChallengeHelper.runClear(e, t, o);
      } else {
        if (e.gameType === MjGameType.Classic) {
          ClearClassiclHelper.runClear(e, t, o);
        } else {
          if (e.gameType === MjGameType.Tile2Normal) {
            if (e.getTile2SlotType() === ETile2SlotType.Slot4) {
              ClearTile4NormalHelper.runClear(e, t, o, u);
            } else {
              ClearTile2NormalHelper.runClear(e, t, o, u);
            }
          } else {
            ClearNormalHelper.runClear(e, t, o);
          }
        }
      }
    }
  }
}
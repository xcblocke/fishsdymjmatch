import { MjGameType } from '../constant/GameTypeEnums';
import { GameTracker } from '../../../tracker/GameTracker';
@mj.class("DailyChallengeTracker")
export class DailyChallengeTracker extends GameTracker {
  _gameType = MjGameType.DailyChallenge;
}
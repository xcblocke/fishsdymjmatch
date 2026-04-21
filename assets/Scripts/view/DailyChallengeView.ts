import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import MainGameView from '../game/view/MainGameView';
@mj.class
export default class DailyChallengeView extends MainGameView {
  _logName = "DailyChallengeView";
  _gameType = MjGameType.DailyChallenge;
  static prefabUrl = "prefabs/game/MainGameDailyChallenge";
}
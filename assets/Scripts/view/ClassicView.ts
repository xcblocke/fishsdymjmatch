import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import MainGameView from '../game/view/MainGameView';
@mj.class
export default class ClassicView extends MainGameView {
  _logName = "ClassicView";
  _gameType = MjGameType.Classic;
  static prefabUrl = "prefabs/game/MainGameClassic";
}
import { MjGameType } from '../constant/GameTypeEnums';
import { GameTracker } from '../../../tracker/GameTracker';
@mj.class("ClassicTracker")
export class ClassicTracker extends GameTracker {
  _gameType = MjGameType.Classic;
}
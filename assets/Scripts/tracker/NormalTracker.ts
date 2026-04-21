import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { GameTracker } from './GameTracker';
@mj.class("NormalTracker")
export class NormalTracker extends GameTracker {
  _gameType = MjGameType.Normal;
}
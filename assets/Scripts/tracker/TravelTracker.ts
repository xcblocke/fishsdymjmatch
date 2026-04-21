import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { GameTracker } from './GameTracker';
@mj.class("TravelTracker")
export class TravelTracker extends GameTracker {
  _gameType = MjGameType.Travel;
}
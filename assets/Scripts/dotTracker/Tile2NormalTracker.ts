import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { Tile2DotTracker } from './Tile2DotTracker';
export class Tile2NormalTracker extends Tile2DotTracker {
  _gameType = MjGameType.Tile2Normal;
}
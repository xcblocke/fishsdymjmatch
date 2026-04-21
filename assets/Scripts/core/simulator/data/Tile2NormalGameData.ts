import { MjGameType } from '../constant/GameTypeEnums';
import Tile2GameData from './Tile2GameData';
@mj.class("Tile2NormalGameData")
export default class Tile2NormalGameData extends Tile2GameData {
  _gameType = MjGameType.Tile2Normal;
}
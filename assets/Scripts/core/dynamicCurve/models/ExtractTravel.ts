import { MjGameType } from '../../simulator/constant/GameTypeEnums';
import { ExtractModel } from './ExtractModel';
@mj.class("ExtractTravel")
export class ExtractTravel extends ExtractModel {
  _gameType = MjGameType.Travel;
}
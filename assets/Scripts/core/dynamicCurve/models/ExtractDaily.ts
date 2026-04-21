import { MjGameType } from '../../simulator/constant/GameTypeEnums';
import { ExtractModel } from './ExtractModel';
@mj.class("ExtractDaily")
export class ExtractDaily extends ExtractModel {
  _gameType = MjGameType.DailyChallenge;
}
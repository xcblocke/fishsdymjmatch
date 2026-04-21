import { MjGameType } from '../../simulator/constant/GameTypeEnums';
import { ExtractModel } from './ExtractModel';
@mj.class("ExtractNormal")
export class ExtractNormal extends ExtractModel {
  _gameType = MjGameType.Normal;
}
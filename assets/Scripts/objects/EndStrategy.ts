import { BaseCoreObject } from '../BaseCoreObject';
import { LevelTargetType } from '../core/simulator/constant/GameTypeEnums';
export class EndStrategy extends BaseCoreObject {
  get endStrategy() {
    return this._endStrategy;
  }
  initEndStrategy(e) {
    this._endStrategy = e;
  }
  checkIsKillCollectCard() {
    var e = this._context.collectSystem;
    return !!e && 0 !== e.allCount && e.isAllCollected();
  }
  checkIsEnd() {
    return this._endStrategy === LevelTargetType.KillCollectCard && this.checkIsKillCollectCard();
  }
}
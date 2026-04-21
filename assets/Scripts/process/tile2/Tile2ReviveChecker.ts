import { BaseCoreObject } from '../../BaseCoreObject';
export class Tile2ReviveChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  getReviveCount() {
    return this._context.getGameData().getReviveNums();
  }
  hasRevive() {
    return this._context.getGameData().hasRevive();
  }
}
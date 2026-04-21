import { BaseCoreObject } from '../../BaseCoreObject';
export class Tile2ReviveModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  initRevive() {
    this.context.getGameData().getReviveNums();
  }
  useRevive() {
    var e = this.context.getGameData().getReviveNums();
    this.context.getGameData().changeReviveNums(-1);
    return e > 0;
  }
  addReviveCount(e = 1) {
    this.context.getGameData().changeReviveNums(e);
  }
}
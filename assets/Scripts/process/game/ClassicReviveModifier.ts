import { BaseCoreObject } from '../../BaseCoreObject';
export class ClassicReviveModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  modifyReviveCount() {
    this.context.getGameData().addReviveCount();
  }
}
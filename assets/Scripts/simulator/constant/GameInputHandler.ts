import { BaseCoreObject } from '../../BaseCoreObject';
export class GameInputHandler extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  parseInput(e) {
    e.inputType;
    return e;
  }
  dispose() {}
}
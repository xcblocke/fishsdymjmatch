import { BaseCoreObject } from '../../BaseCoreObject';
export class ClassicReviveChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("ClcRevChk_canRevive")
  canRevive() {
    return false;
  }
}
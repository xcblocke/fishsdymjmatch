import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ChangeBatchBehavior extends GameBehaviorsBase {
  @mj.traitEvent("ChangeBatchBhv_start")
  start() {
    this.finish();
  }
}
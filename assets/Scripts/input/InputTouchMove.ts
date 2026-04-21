import InputBaseTouchMove from '../inputbase/InputBaseTouchMove';
export default class InputTouchMove extends InputBaseTouchMove {
  excute(t) {
    super.excute.call(this, t);
  }
  runStartMove(t) {
    super.runStartMove.call(this, t);
    this.onStartMove(t);
  }
  @mj.traitEvent("IptTchMove_startMove")
  onStartMove() {}
}
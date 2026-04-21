import { InputBase } from './InputBase';
export default class InputBaseTouchCancel extends InputBase {
  excute() {
    if (this.gameContext.touchData.isValid) {
      var e = this.gameContext.getTileMapObject().deleteLastActionId();
      this.gameContext.touchModifier.modifyTouchCancel();
      this.pushTouchCancelEffect(e);
    }
  }
}
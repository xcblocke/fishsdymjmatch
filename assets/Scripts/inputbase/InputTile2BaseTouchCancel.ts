import { InputBase } from './InputBase';
export default class InputTile2BaseTouchCancel extends InputBase {
  excute() {
    if (!this.gameContext.tile2ResultChecker.checkIsDead()) if (this.gameContext.tile2TouchData.tileId) {
      this.gameContext.getTileMapObject().deleteLastActionId();
      this.gameContext.tile2TouchData.isMoving && this.runResetMove();
      this.gameContext.tile2TouchData.clear();
    } else this.gameContext.tile2TouchData.clear();
  }
  runResetMove() {}
}
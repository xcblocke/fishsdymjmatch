import { EInsertType } from '../constant/BehaviorsEnum';
import { Tile2InitBottomEffect } from '../Tile2InitBottomEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2InitBottom extends InputBase {
  excute() {
    var e = this.gameContext.getGameData().getShuffleNums(),
      t = this.gameContext.getGameData().getHitTipsNums(),
      o = this.gameContext.getGameData().getRevertNums();
    this.pushEffect(new Tile2InitBottomEffect({
      shuffleNum: e,
      hitTipsNum: t,
      revertNum: o
    }), EInsertType.Root);
  }
}
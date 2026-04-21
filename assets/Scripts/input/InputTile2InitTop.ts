import { EInsertType } from '../constant/BehaviorsEnum';
import { Tile2InitTopEffect } from '../Tile2InitTopEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2InitTop extends InputBase {
  excute() {
    var e = this.gameContext.getGameData(),
      t = e.getLevelId(),
      o = this.gameContext.getTileMapObject().getCanMatchCardPairNum(),
      n = e.getScore(),
      i = this.gameContext.tile2ComboChecker.checkIsComboState(e.getComboNum());
    this.pushEffect(new Tile2InitTopEffect({
      level: t,
      matchNum: o,
      score: n,
      isCombo: i
    }), EInsertType.Root);
  }
}
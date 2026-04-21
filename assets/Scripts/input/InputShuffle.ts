import { DotGameUseItem } from '../gamePlay/dot/DGameUseItem';
import DynamicCurve from '../types/DynamicCurve';
import { EInsertType } from '../constant/BehaviorsEnum';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { EShuffleFrom } from '../simulator/constant/GameInputEnum';
import { EItemId, MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { ShuffleEffect } from '../ShuffleEffect';
import { UpdateMatchNumEffect } from '../UpdateMatchNumEffect';
import { UpdateShufflePropEffect } from '../UpdateShufflePropEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputShuffle extends InputBase {
  @mj.traitEvent("IptShuffle_exec")
  excute(e) {
    var t = this.gameContext.getGameData().getShuffleNums(),
      o = false;
    e.from !== EShuffleFrom.ClassicRevive && e.from !== EShuffleFrom.Free || (o = true);
    if (!o) {
      if (!this.gameContext.getGameData().isShuffleEnough()) {
        mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
        return;
      }
      this.gameContext.getGameData().changeShuffleNums(-1);
      this.gameContext.getGameData().recordToolUse(EItemId.Shuffle, e.from);
      this.gameContext.getGameData().toolChange(EItemId.Shuffle, -1);
      DynamicCurve.instance.useShuffle(this.gameContext.gameType);
      DotGameUseItem.dot(this.gameContext, {
        itemId: EItemId.Shuffle,
        afterNum: this.gameContext.getGameData().getShuffleNums(),
        from: e.from,
        beforeNum: t
      });
    }
    if (e.from === EShuffleFrom.ClassicRevive) {
      this.gameContext.classicReviveModifier.modifyReviveCount();
      this.gameContext.getGameData().recordToolUse(EItemId.Shuffle, e.from);
      DotGameUseItem.dot(this.gameContext, {
        itemId: EItemId.Shuffle,
        afterNum: this.gameContext.getGameData().getShuffleNums(),
        from: e.from,
        beforeNum: t
      });
    }
    this.gameContext.touchData.clear();
    this.gameContext.getTileMapObject().unselectAllTileIds();
    var n = this.gameContext.getTileMapObject().getLevelData();
    this.gameController.gameContext.shuffleModifier.shuffle();
    this.gameController.tileMapObject.updateCanMatchTiles();
    this.gameContext.gameModifier.modifyShuffle();
    var i = this.gameContext.getGameData().getLevelData();
    this.gameContext.trackerModifier.triggerShuffle(i, n, e.from);
    var r = this.gameContext.tileTypesModifier.isUserFix();
    if (this.gameContext.gameType === MjGameType.Classic) {
      this.gameContext.tileTypesModifier.saveToGameDataFix();
    } else {
      r && this.gameContext.tileTypesModifier.saveToGameData();
    }
    this.pushUpdateShufflePropEffect(this.gameContext.getGameData().getShuffleNums());
    this.pushShuffleEffect();
    this.pushUpdateMatchNumEffect();
  }
  pushUpdateShufflePropEffect(e) {
    var t = new UpdateShufflePropEffect({
      curNum: e
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
  @mj.traitEvent("IptShuffle_pushEffect")
  pushShuffleEffect() {
    var e = this.getShuffleEffect();
    this.pushEffect(e);
    mj.EventManager.emit(EGameEvent.Effect_Shuffle, this);
  }
  @mj.traitEvent("IptShuffle_getEffect")
  getShuffleEffect() {
    return new ShuffleEffect({});
  }
  pushUpdateMatchNumEffect() {
    var e = new UpdateMatchNumEffect({
      canMatchCardPairNum: this.gameContext.getTileMapObject().getCanMatchCardPairNum()
    });
    this.pushEffect(e, EInsertType.Parallel);
  }
}
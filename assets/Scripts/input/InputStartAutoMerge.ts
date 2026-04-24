import { EInsertType } from '../constant/BehaviorsEnum';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { StartAutoMergeEffect } from '../StartAutoMergeEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputStartAutoMerge extends InputBase {
  @mj.traitEvent("IptStartAutoMrg_exec")
  excute(e) {
    var t = this.gameContext.getGameData(),
      o = this.gameContext.getTileMapObject();
    console.log("[AutoMatch] enter type=" + e.type + " levelId=" + t.getLevelId() + " remain=" + o.getRemainCount() + " pairs=" + o.getCanMatchCardPairNum());
    this.gameContext.getTileMapObject().unselectAllTileIds();
    this.pushStartAutoMergeEffect(e);
  }
  pushStartAutoMergeEffect(e) {
    var t = new StartAutoMergeEffect({
      type: e.type
    });
    this.pushEffect(t, EInsertType.Root);
    mj.EventManager.emit(EGameEvent.Effect_StartAutoMerge, this);
  }
}
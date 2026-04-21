import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { ETileType } from '../simulator/constant/TileTypeEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class SelectBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this.context.getTileNodeMap().get(e.data.tileId);
    if (t) {
      this.playCheckAudio(e);
      if (e.data.isCancel) t.cancelSelected();else {
        if (t.isSelect()) {
          t.touchEndForMove();
          this.finish(EBehaviorEnum.Success);
          return;
        }
        t.selected();
      }
      this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  playCheckAudio(e) {
    if (e.data.isUserOperation) {
      if (e.data.isCancel) {
        this.playCancelAudio();
        return;
      }
      this.playAudio();
    }
  }
  playCancelAudio() {
    mj.audioManager.playEffect(EAudioID.Uncheck);
  }
  playAudio() {
    var e = this.effect,
      t = this.context.getTileNodeMap().get(e.data.tileId);
    if (t && t.tileObject.type == ETileType.RankCard) {
      this.playRankCardAudio();
    } else {
      if (t && t.tileObject.type == ETileType.RollCard && t.isBack) {
        this.playRollCardAudio();
      } else {
        this.playNormalAudio();
      }
    }
  }
  @mj.traitEvent("SelectBhv_rankCardAud")
  playRankCardAudio() {
    mj.audioManager.playEffect(EAudioID.SpecialTouch);
  }
  @mj.traitEvent("SelectBhv_rollCardAud")
  playRollCardAudio() {
    this.playNormalAudio();
  }
  @mj.traitEvent("SelectBhv_playNmlAud")
  playNormalAudio() {
    mj.audioManager.playEffect(EAudioID.Check1);
  }
}
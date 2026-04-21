import { EAudioID } from './core/simulator/constant/GameTypeEnums';
import { ETileType } from './simulator/constant/TileTypeEnum';
import InputBaseTouchEnd from './inputbase/InputBaseTouchEnd';
import ClearHelper from './ClearHelper';
export default class InputTouchEnd extends InputBaseTouchEnd {
  runTouchStartClear(t) {
    super.runTouchStartClear.call(this, t);
    this.playClickAudio();
  }
  @mj.traitEvent("IptTchEnd_rankCardAud")
  playRankCardAudio() {
    mj.audioManager.playEffect(EAudioID.SpecialTouch);
  }
  playNormalAudio() {
    mj.audioManager.playEffect(EAudioID.Check1);
  }
  getTouchTileObject() {
    var e = this.gameContext.touchData.tileId;
    return e ? this.gameContext.getTileMapObject().getTileObject(e) : null;
  }
  playClickAudio() {
    var e = this.getTouchTileObject();
    if (e && e.type == ETileType.RankCard) {
      this.playRankCardAudio();
    } else {
      this.playNormalAudio();
    }
  }
  runSelectCardSuccess(t) {
    super.runSelectCardSuccess.call(this, t);
    this.onSelectCardSuccess();
  }
  runClear(t) {
    super.runClear.call(this, t);
    ClearHelper.runClear(this.gameContext, t, this);
  }
  excute(t) {
    super.excute.call(this, t);
  }
  @mj.traitEvent("IptTchEnd_Success")
  onSelectCardSuccess() {}
}
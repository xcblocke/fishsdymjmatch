import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2ReplayReExtractTrait")
export default class Tile2ReplayReExtractTrait extends ExtractTrait {
  static traitKey = "Tile2ReplayReExtract";
  static _isFailReplay = false;
  isSupportMode(t) {
    return t === MjGameType.Tile2Normal;
  }
  onIptRestart_excute(t, e) {
    var i = t.args[0];
    if (this.checkGameMode()) {
      var o = !!i && 0 === i.dieResult && "fail" === i.callFrom;
      Tile2ReplayReExtractTrait._isFailReplay = o;
      e();
    } else e();
  }
  onT2GameCtrl_reExtOnRst(t, e) {
    if (this.checkGameMode() && Tile2ReplayReExtractTrait._isFailReplay) {
      Tile2ReplayReExtractTrait._isFailReplay = false;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: true
      });
    } else e();
  }
}
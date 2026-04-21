import DeathAnalyserMgr from '../../../Scripts/DeathAnalyserMgr';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DeathAnalyserTrait")
export default class DeathAnalyserTrait extends Trait {
  static traitKey = "DeathAnalyser";
  onIptSetLv_exec(t, e) {
    var r;
    e();
    this.startDeathAnalyser(null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext);
  }
  onGameMod_modifyShuffle(t, e) {
    var r;
    e();
    this.startDeathAnalyser(null === (r = t.ins) || void 0 === r ? void 0 : r.context);
  }
  onDGameEnd_adjust(t, e) {
    e();
    DeathAnalyserMgr.instance.cancelAnalyze();
  }
  startDeathAnalyser(t) {
    t && DeathAnalyserMgr.instance.startDeathAnalyser(t);
  }
}
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { UpdateMatchNumEffect } from '../../../Scripts/UpdateMatchNumEffect';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
@mj.trait
@mj.class("MainGameMatchNumTrait")
export default class MainGameMatchNumTrait extends Trait {
  static traitKey = "MainGameMatchNum";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptInitView_pushEff(t, e) {
    this.showMatchNum(t.ins);
    e();
  }
  onIptEnterAni_excute(t, e) {
    this.showMatchNum(t.ins);
    e();
  }
  showMatchNum(t) {
    var e = t.gameContext.gameType;
    if (e === MjGameType.DailyChallenge || e === MjGameType.Normal) {
      var o = new UpdateMatchNumEffect({
        canMatchCardPairNum: t.gameContext.getTileMapObject().getCanMatchCardPairNum(),
        isShow: true
      });
      t.pushEffect(o, EInsertType.Parallel);
    }
  }
  onUpdateMatchNumBhv_start(t, e) {
    var o, r, i;
    if (t.args[0] && (null === (o = t.args[0].data) || void 0 === o ? void 0 : o.isShow)) {
      var a = null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameView;
      if (a && a.topRootNode) {
        var n = a.topRootNode.getChildByName("labelCanMatchNum");
        n && (n.active = true);
        var c = a.topRootNode.getChildByName("labelMatch");
        c && (c.active = true);
      }
    }
    e();
  }
  onRwdComboBhv_bonusAud(t, e) {
    var o, r;
    this.hideMatchNum(null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === r ? void 0 : r.gameView);
    e();
  }
  onFullComboBhv_playAudio(t, e) {
    var o, r;
    this.hideMatchNum(null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === r ? void 0 : r.gameView);
    e();
  }
  hideMatchNum(t) {
    if (t && t.topRootNode) {
      var e = t.topRootNode.getChildByName("labelCanMatchNum");
      e && (e.active = false);
    }
  }
}
import BaseLabel from '../gamePlay/base/ui/BaseLabel';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import I18NStrings from '../framework/data/I18NStrings';
export class ChangeBatchAnimBehavior extends GameBehaviorsBase {
  isOpenGenerateState = false;
  onAbort() {
    this.isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(false);
    super.onAbort.call(this);
  }
  @mj.traitEvent("ChgBatchAnimBhv_start")
  start(e) {
    var t = this,
      o = e.data.batchId;
    this.isOpenGenerateState = e.data.isOpenGenerateState;
    this.isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(true);
    mj.audioManager.playEffect(EAudioID.ClassicBatch);
    this.playStageAnim(o, function () {
      t.onAnimFinish();
      t.isOpenGenerateState || t.context.gameView.setSwallowEventNodeActive(false);
      t.finish();
    });
  }
  @mj.traitEvent("ChgBatchAnimBhv_finish")
  onAnimFinish() {}
  playStageAnim(e = 0, t?) {
    var o;
    e += 1;
    var n = this.context.gameView.effectNode,
      i = BaseSpine.create("spine/classicstage/gameplay_tile_newStage", "in", 1, null, true);
    i.node.name = "Stage";
    null === (o = i.getSkeleton()) || void 0 === o || o.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
    i.attachNodeWithAlpha("hook_text", "slot_text", function () {
      var t = I18NStrings.get("classic_stage", "Stage"),
        o = I18NStrings.stringFormat(t + " {0}", e),
        n = BaseLabel.create(o, "font/SPARTAN-BOLD", "mainRes", 70);
      n.node.name = "Stage";
      n.setColor(new cc.Color().fromHEX("#fff5c5"));
      var i = n.node.addComponent(cc.LabelOutline);
      i.color = new cc.Color().fromHEX("#d14a00");
      i.width = 3;
      n.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
      return n.node;
    });
    i.getSkeleton().setEventListener(function (e, o) {
      "newStage" === o.data.name && (null == t || t());
    });
    n.addChild(i.node);
  }
}
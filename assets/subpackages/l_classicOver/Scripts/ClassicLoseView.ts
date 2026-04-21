import Adapter, { AdjustTpye } from '../../../Scripts/component/Adapter';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EVT_MSG_KEY_SIMULATOR_NEXTLEVEL } from '../../../Scripts/core/simulator/events/SimulatorEvent';
import UIView from '../../../Scripts/framework/ui/UIView';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.class
export default class ClassicLoseView extends UIView {
  @mj.node("bg")
  bgNode: "bg" = null;
  @mj.node("EffectLight")
  effectLight: "EffectLight" = null;
  @mj.node("EffectScore")
  effectScore: "EffectScore" = null;
  @mj.node("EffectParticle")
  effectParticle: "EffectParticle" = null;
  @mj.node("Title")
  title: "Title" = null;
  @mj.node("CurScoreDesc")
  curScoreDesc: "CurScoreDesc" = null;
  @mj.node("BestScoreDesc")
  bestScoreDesc: "BestScoreDesc" = null;
  @mj.node("CurScore")
  curScoreNode: "CurScore" = null;
  @mj.node("BestScore")
  bestScoreNode: "BestScore" = null;
  @mj.node("NextBtn")
  nextBtn: "NextBtn" = null;
  data = null;
  spineLight = null;
  spineScore = null;
  spineParticle = null;
  isInit = false;
  isPlayed = false;
  scoreInterval = -1;
  static prefabUrl = "prefabs/ClassicLose";
  onLoad() {
    super.onLoad.call(this);
    this.initComponent();
    this.OnButtonClick(this.nextBtn, this.onNextBtnClick.bind(this));
    this.tryPlayAction();
  }
  initComponent() {
    if (!this.isInit) {
      Adapter.adjustForType(this.effectLight, AdjustTpye.TOP);
      this.spineLight = this.effectLight.addComponent(BaseSpine);
      this.spineScore = this.effectScore.addComponent(BaseSpine);
      this.spineParticle = this.effectParticle.addComponent(BaseSpine);
      this.spineLight.markReady("");
      this.spineScore.markReady("");
      this.spineParticle.markReady("");
      this.hookNode();
      this.isInit = true;
    }
  }
  hookNode() {
    var e = this;
    this.title.setPosition(cc.Vec3.ZERO);
    this.curScoreDesc.setPosition(cc.Vec3.ZERO);
    this.curScoreNode.setPosition(cc.Vec3.ZERO);
    this.bestScoreDesc.setPosition(cc.Vec3.ZERO);
    this.bestScoreNode.setPosition(cc.Vec3.ZERO);
    this.nextBtn.setPosition(cc.Vec3.ZERO);
    this.spineScore.attachNodeWithAlpha("hook_gameOver", "slot_gameOver", function () {
      return e.title;
    });
    this.spineScore.attachNodeWithAlpha("hook_txt_score", "slot_txt_score", function () {
      return e.curScoreDesc;
    });
    this.spineScore.attachNodeWithAlpha("hook_num_score", "slot_num_score", function () {
      return e.curScoreNode;
    });
    this.spineScore.attachNodeWithAlpha("hook_txt_bestScore", "slot_txt_bestScore", function () {
      return e.bestScoreDesc;
    });
    this.spineScore.attachNodeWithAlpha("hook_num_bestScore", "slot_bestScore", function () {
      return e.bestScoreNode;
    });
    this.spineScore.attachNode("hook_btn", function () {
      return e.nextBtn;
    });
  }
  tryPlayAction() {
    if (this.data && cc.isValid(this.effectLight) && !this.isPlayed) {
      mj.audioManager.playEffect(EAudioID.ClassicLose);
      this.startPlayAction();
      this.isPlayed = true;
    }
  }
  showView(e) {
    this.data = e;
    this.tryPlayAction();
  }
  onNextBtnClick() {
    this.delegate.close();
    mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
  }
  startPlayAction() {
    var e = this;
    this.bgNode.opacity = 0;
    this.curScoreDesc.active = false;
    this.curScoreNode.active = false;
    this.bestScoreDesc.active = false;
    this.bestScoreNode.active = false;
    this.title.active = false;
    this.nextBtn.active = false;
    this.spineScore.node.active = false;
    this.spineParticle.node.active = false;
    this.spineLight.node.active = false;
    this.curScoreNode.getComponent(cc.Label).string = "0";
    this.bestScoreNode.getComponent(cc.Label).string = "" + this.data.bestScore;
    cc.tween(this.bgNode).to(0.2, {
      opacity: 190
    }).call(function () {
      e.spineAnim();
    }).start();
  }
  spineAnim() {
    var e = this;
    this.spineScore.node.active = true;
    this.spineParticle.node.active = true;
    this.spineLight.node.active = true;
    this.spineLight.setAnimation("in", 1, function () {
      cc.isValid(e.spineLight) && e.spineLight.setAnimation("init", -1);
    });
    var t = this.spineScore.getSkeleton();
    t.setEventListener(null);
    t.setEventListener(function (t, i) {
      "btn" === i.data.name && (e.nextBtn.active = true);
      "gameOver" === i.data.name && (e.title.active = true);
      if ("score" === i.data.name) {
        e.curScoreDesc.active = true;
        e.curScoreNode.active = true;
        e.playScoreNumberAnim();
      }
      if ("bestScore" === i.data.name) {
        e.bestScoreDesc.active = true;
        e.bestScoreNode.active = true;
      }
    });
    this.spineScore.setAnimation("in", 1, function () {
      cc.isValid(e.spineScore) && e.spineScore.setAnimation("init", -1);
    });
    this.spineParticle.setAnimation("in", 1, function () {
      cc.isValid(e.spineParticle) && e.spineParticle.setAnimation("init", -1);
    });
  }
  clearScoreInterval() {
    if (this.scoreInterval > 0) {
      window['clearInterval'](this.scoreInterval);
      this.scoreInterval = -1;
    }
  }
  playScoreNumberAnim() {
    var e = this;
    if (cc.isValid(this.curScoreNode)) {
      this.clearScoreInterval();
      var t = 3,
        i = this.data.curScore;
      t *= Math.floor(i / 400) + 1;
      var o = 0,
        s = 0,
        n = this.curScoreNode.getComponent(cc.Label);
      n.string = "" + s;
      this.scoreInterval = window['setInterval'](function () {
        if (cc.isValid(e.curScoreNode) && cc.isValid(n)) {
          if (i > s + t) {
            s += t;
            n.string = "" + s;
          } else {
            n.string = "" + i;
            e.clearScoreInterval();
          }
          ++o % 5 == 0 && mj.audioManager.playEffect(EAudioID.ClassicScoreRoll);
        } else e.clearScoreInterval();
      }, 10, this);
    }
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.clearScoreInterval();
  }
}
import UIView from '../../../Scripts/framework/ui/UIView';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EClassicWinType } from './ClassicOverTypes';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import { EVT_MSG_KEY_SIMULATOR_NEXTLEVEL } from '../../../Scripts/core/simulator/events/SimulatorEvent';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Adapter, { AdjustTpye } from '../../../Scripts/component/Adapter';
var s;
var n;
(s = {})[EClassicWinType.Best] = "in_bestScore";
s[EClassicWinType.Today] = "in_todayScore";
s[EClassicWinType.Week] = "in_weekScore";
var y = s;
(n = {})[EClassicWinType.Best] = ["Best Score", "classic_bestscore_des"];
n[EClassicWinType.Today] = ["Today Best", "classic_todaybest"];
n[EClassicWinType.Week] = ["Week Best", "classic_weekbest"];
var v = n;
@mj.class
export default class ClassicWinView extends UIView {
  @mj.node("bg")
  bgNode: "bg" = null;
  @mj.node("EffectLight")
  effectLight: "EffectLight" = null;
  @mj.node("EffectScore")
  effectScore: "EffectScore" = null;
  @mj.node("EffectParticle")
  effectParticle: "EffectParticle" = null;
  @mj.node("EffectBomb")
  effectBomb: "EffectBomb" = null;
  @mj.node("Title")
  title: "Title" = null;
  @mj.node("BestScoreDesc")
  bestScoreDesc: "BestScoreDesc" = null;
  @mj.node("BestScore")
  bestScoreNode: "BestScore" = null;
  @mj.node("NextBtn")
  nextBtn: "NextBtn" = null;
  data = null;
  spineLight = null;
  spineScore = null;
  spineParticle = null;
  spineBomb = null;
  isInit = false;
  isPlayed = false;
  scoreInterval = -1;
  static prefabUrl = "prefabs/ClassicWin";
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
      this.spineBomb = this.effectBomb.addComponent(BaseSpine);
      this.spineLight.markReady("");
      this.spineScore.markReady("");
      this.spineParticle.markReady("");
      this.spineBomb.markReady("");
      this.hookNode();
      this.isInit = true;
    }
  }
  hookNode() {
    var e = this;
    this.title.setPosition(cc.Vec3.ZERO);
    this.bestScoreDesc.setPosition(cc.Vec3.ZERO);
    this.bestScoreNode.setPosition(cc.Vec3.ZERO);
    this.nextBtn.setPosition(cc.Vec3.ZERO);
    this.spineScore.attachNodeWithAlpha("hook_txt_best", "slot_txt_best", function () {
      return e.title;
    });
    this.spineScore.attachNodeWithAlpha("hook_txt_bestScore", "slot_txt_bestScore", function () {
      return e.bestScoreDesc;
    });
    this.spineScore.attachNodeWithAlpha("hook_num_bestScore", "slot_num_bestScore", function () {
      return e.bestScoreNode;
    });
    this.spineScore.attachNode("hook_btn", function () {
      return e.nextBtn;
    });
  }
  tryPlayAction() {
    if (this.data && this.isInit && !this.isPlayed) {
      mj.audioManager.playEffect(EAudioID.ClassicWin);
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
    this.bestScoreDesc.active = false;
    this.bestScoreNode.active = false;
    this.title.active = false;
    this.nextBtn.active = false;
    this.spineScore.node.active = false;
    this.spineBomb.node.active = false;
    this.spineParticle.node.active = false;
    this.spineLight.node.active = false;
    var t = this.data.winType,
      i = v[t][0],
      o = v[t][1];
    I18NStrings.setText(this.title, i, o);
    this.bestScoreNode.getComponent(cc.Label).string = "0";
    cc.tween(this.bgNode).to(0.2, {
      opacity: 190
    }).call(function () {
      e.spineAnim();
    }).start();
  }
  spineAnim() {
    var e = this;
    this.spineScore.node.active = true;
    this.spineBomb.node.active = true;
    this.spineParticle.node.active = true;
    this.spineLight.node.active = true;
    this.spineLight.setAnimation("in", 1, function () {
      cc.isValid(e.spineLight) && e.spineLight.setAnimation("init", -1);
    });
    var t = this.spineScore.getSkeleton();
    t.setEventListener(null);
    t.setEventListener(function (t, i) {
      "btn" === i.data.name && (e.nextBtn.active = true);
      "best" === i.data.name && (e.title.active = true);
      if ("bestScore" === i.data.name) {
        e.bestScoreDesc.active = true;
        e.bestScoreNode.active = true;
        e.playScoreNumberAnim();
      }
    });
    var i = this.data.winType;
    this.spineScore.setAnimation(y[i], 1, null);
    this.spineBomb.setAnimation("in", 1, null);
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
    if (cc.isValid(this.bestScoreNode)) {
      this.clearScoreInterval();
      var t = 3,
        i = this.data.curScore;
      t *= Math.floor(i / 400) + 1;
      var o = 0,
        s = 0,
        n = this.bestScoreNode.getComponent(cc.Label);
      n.string = "" + s;
      this.scoreInterval = window['setInterval'](function () {
        if (cc.isValid(e.bestScoreNode) && cc.isValid(n)) {
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
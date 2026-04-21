import Adapter from '../../../Scripts/component/Adapter';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EClassicBreakType } from './ClassicBestTypes';
@mj.class
export default class ClassicBreakBestView extends BaseUI {
  bgNode = null;
  effect1 = null;
  effect2 = null;
  effect3 = null;
  effect4 = null;
  spine1 = null;
  spine2 = null;
  spine3 = null;
  spine4 = null;
  type = EClassicBreakType.None;
  isInit = false;
  static prefabUrl = "prefabs/BestScoreWord";
  static bundleName = "l_classicBest";
  onLoad() {
    super.onLoad.call(this);
    this.initComponent();
    this.tryPlayAction();
  }
  initComponent() {
    if (!this.isInit) {
      this.bgNode = cc.find("bg", this.node);
      this.bgNode.active = false;
      this.effect1 = cc.find("Effect1", this.node);
      this.effect2 = cc.find("Effect2", this.node);
      this.effect3 = cc.find("Effect3", this.node);
      this.effect4 = cc.find("Effect4", this.node);
      this.spine1 = this.effect1.addComponent(BaseSpine);
      this.spine2 = this.effect2.addComponent(BaseSpine);
      this.spine3 = this.effect3.addComponent(BaseSpine);
      this.spine4 = this.effect4.addComponent(BaseSpine);
      this.spine1.markReady("");
      this.spine2.markReady("");
      this.spine3.markReady("");
      this.spine4.markReady("");
      Adapter.adaptBgSize(this.bgNode);
      this.isInit = true;
    }
  }
  setBreakType(e) {
    this.type = e;
    this.tryPlayAction();
  }
  tryPlayAction() {
    this.type !== EClassicBreakType.None && cc.isValid(this.bgNode) && this.startPlayAction();
  }
  startPlayAction() {
    mj.audioManager.playEffect(EAudioID.ClassicBreakRecord);
    this.spineAnim();
  }
  spineAnim() {
    this.effect1.active = false;
    this.effect2.active = false;
    this.effect3.active = false;
    this.effect4.active = false;
    switch (this.type) {
      case EClassicBreakType.Best:
        this.playBestAnim();
        break;
      case EClassicBreakType.Today:
        this.playTodayAnim();
        break;
      case EClassicBreakType.Week:
        this.playWeekAnim();
        break;
      default:
        this.hideEffect();
    }
  }
  playBestAnim() {
    var e = this;
    this.effect1.active = true;
    this.effect2.active = true;
    this.spine1.setAnimation("in", 1, null);
    this.spine2.setAnimation("in", 1, function () {
      e.hideEffect();
    });
  }
  playTodayAnim() {
    var e = this;
    this.effect3.active = true;
    this.spine3.setAnimation("in_todayBest", 1, function () {
      e.hideEffect();
    });
  }
  playWeekAnim() {
    var e = this;
    this.effect4.active = true;
    this.spine4.setAnimation("in_weekBest", 1, function () {
      e.hideEffect();
    });
  }
  hideEffect() {
    var e = this;
    this.bgNode.opacity = 190;
    cc.tween(this.bgNode).to(0.2, {
      opacity: 0
    }).call(function () {
      cc.isValid(e.node) && e.node.destroy();
    }).start();
  }
}
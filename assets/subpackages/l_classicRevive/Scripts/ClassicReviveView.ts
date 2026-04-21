import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UIView from '../../../Scripts/framework/ui/UIView';
import AdManager from '../../../Scripts/base/ad/AdManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameBtnClick, EReviveClickType } from '../../../Scripts/dot/DGameBtnClick';
@mj.class
export default class ClassicReviveView extends UIView {
  @mj.node("bg")
  bgNode: "bg" = null;
  @mj.node("Title")
  titleNode: "Title" = null;
  @mj.component("Progress", cc.ProgressBar)
  progressBar: "Progress" = null;
  @mj.node("Timer")
  timerNode: "Timer" = null;
  @mj.node("ReviveBtn")
  reviveBtn: "ReviveBtn" = null;
  @mj.component("ReviveBtn/AnimRoot/Layout/Ad/Spine", sp.Skeleton)
  spineNode: "ReviveBtn/AnimRoot/Layout/Ad/Spine" = null;
  @mj.node("ReviveBtn/AnimRoot")
  btnAnimNode: "ReviveBtn/AnimRoot" = null;
  countDownTween = null;
  curNum = 0;
  totalNum = 6;
  static prefabUrl = "prefabs/ClassicRevive";
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.reviveBtn, this.onReviveBtnClick.bind(this));
    this.playAnim();
  }
  onReviveBtnClick() {
    var e;
    if (null !== this.countDownTween) {
      this.countDownTween.stop();
      this.countDownTween = null;
      DotGameBtnClick.dotRevive(EReviveClickType.Close);
      AdManager.getInstance().playVideoAd(EAdPosition.InGameMotivation_Revive_Classic, {
        onSuccess: function () {
          mj.EventManager.emit(EGameEvent.ClassicRevive_UseRevive, true);
        },
        onFailed: function () {
          mj.EventManager.emit(EGameEvent.ClassicRevive_UseRevive, false);
        }
      });
      null === (e = this.delegate) || void 0 === e || e.close();
    }
  }
  switchNum(e) {
    if (cc.isValid(this.timerNode) && !(e < 0)) {
      e > 5 && (e = 5);
      mj.audioManager.playEffect(EAudioID.ClassicRevive);
      cc.Tween.stopAllByTarget(this.timerNode);
      BaseSprite.refreshWithNode(this.timerNode, "atlas/revive_num/" + e, true, true, "l_classicRevive");
      cc.tween(this.timerNode).to(0.13, {
        scale: 1.15
      }).to(0.13, {
        scale: 0.95
      }).to(0.1, {
        scale: 1
      }).start();
    }
  }
  showNextNum() {
    if (this.curNum >= this.totalNum) {
      if (this.countDownTween) {
        this.countDownTween.stop();
        this.countDownTween = null;
        mj.EventManager.emit(EGameEvent.ClassicRevive_UseRevive, false);
        this.delegate.close();
      }
    } else {
      this.switchNum(this.totalNum - this.curNum - 1);
      this.doCountDown();
    }
  }
  doCountDown() {
    var e = this;
    this.countDownTween = cc.tween(this.progressBar).to(1, {
      progress: (this.curNum + 1) / this.totalNum
    }).call(function () {
      e.curNum += 1;
      e.showNextNum();
    }).start();
  }
  playAnim() {
    cc.Tween.stopAllByTarget(this.bgNode);
    cc.Tween.stopAllByTarget(this.titleNode);
    cc.Tween.stopAllByTarget(this.progressBar.node);
    cc.Tween.stopAllByTarget(this.btnAnimNode);
    cc.Tween.stopAllByTarget(this.timerNode);
    cc.Tween.stopAllByTarget(this.spineNode);
    this.bgNode.opacity = 0;
    this.titleNode.opacity = 0;
    this.progressBar.node.scale = 0.85;
    this.progressBar.progress = 0;
    cc.tween(this.titleNode).to(0.17, {
      opacity: 255
    }).start();
    cc.tween(this.bgNode).to(0.17, {
      opacity: 255
    }).start();
    cc.tween(this.progressBar.node).to(0.17, {
      scale: 1
    }).start();
    this.spineNode.setAnimation(0, "init", true);
    var e = cc.tween(this.btnAnimNode).to(0.13, {
      scale: 1.04
    }).to(0.37, {
      scale: 1
    }, {
      easing: cc.easing.cubicInOut
    });
    cc.tween(this.btnAnimNode).repeatForever(e).start();
    this.showNextNum();
  }
}
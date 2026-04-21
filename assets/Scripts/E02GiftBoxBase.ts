import ElementLevel from './ElementLevel';
import { EJourneyMapState } from './TravelMapInterface';
import GameUtils from './core/simulator/util/GameUtils';
import { EAudioID } from './core/simulator/constant/GameTypeEnums';
@mj.class
export default class E02GiftBoxBase extends ElementLevel {
  titleLabel = null;
  button = null;
  animNode = null;
  maskNode = null;
  collectSpine = null;
  cardNode = null;
  selectAnim = null;
  selectUpAnim = null;
  static prefabUrl = "";
  static size = new cc.Size(201, 270);
  uiOnLoad() {
    super.uiOnLoad.call(this);
    this.selectAnim = cc.find("Element/Card/Base/DownAnim", this.node).getComponent(sp.Skeleton);
    this.selectUpAnim = cc.find("Element/Card/Base/UpAnim", this.node).getComponent(sp.Skeleton);
    this.cardNode = cc.find("Element/Card/Base", this.node);
    this.titleLabel = cc.find("Element/Card/Base/Level", this.node).getComponent(cc.Label);
    this.button = cc.find("Element/Card", this.node);
    this.animNode = cc.find("Element/Card/Base/Anim", this.node);
    this.maskNode = cc.find("Element/Card/Base/Mask", this.node);
    this.collectSpine = cc.find("Element/Card/Collect", this.node).getComponent(sp.Skeleton);
    this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
      clickAudio: EAudioID.TravelButton1
    });
  }
  updateUI() {
    super.updateUI.call(this);
    this.titleLabel.string = "" + this._data.level;
  }
  resetState() {
    this.collectSpine.node.active = false;
    this.selectAnim.node.active = false;
    this.cardNode.active = true;
    this.animNode.active = true;
    this.animNode.getComponent(sp.Skeleton).paused = true;
    this.selectAnim.paused = true;
    this.collectSpine.paused = true;
    this.maskNode.active = true;
    this.selectUpAnim.node.active = false;
    cc.Tween.stopAllByTarget(this.node);
  }
  onLevelSelect() {
    this.selectAnim.node.active = true;
    this.maskNode.active = false;
    this.animNode.active = false;
    this.collectSpine.node.active = false;
    GameUtils.playSpine(this.selectAnim, "journey_map_level_big_down", true);
    this.selectUpAnim.node.active = true;
    GameUtils.playSpine(this.selectUpAnim, "journey_map_level_big_up", true);
    cc.Tween.stopAllByTarget(this.node);
    var e = cc.tween().to(0, {
      scale: 1
    }).to(0.5, {
      scale: 1.1
    }).to(0.5, {
      scale: 1
    });
    cc.tween(this.node).repeatForever(e).start();
  }
  onLevelLock() {
    this.selectAnim.node.active = false;
    this.maskNode.active = true;
    this.animNode.active = true;
    this.collectSpine.node.active = false;
  }
  onLevelUnlock() {
    this.cardNode.active = false;
    this.selectAnim.node.active = false;
    this.collectSpine.node.active = true;
    GameUtils.playSpine(this.collectSpine, "init", false);
  }
  onLevelUnlockPass() {
    this._data.state = EJourneyMapState.Unlocked;
    this.onLevelUnlock();
  }
  badgeCollectStart() {
    this.cardNode.active = false;
    this.collectSpine.node.active = false;
  }
  badgeCollectEnd() {
    var t = this;
    super.badgeCollectEnd.call(this);
    this.cardNode.active = false;
    this.collectSpine.node.active = false;
    cc.Tween.stopAllByTarget(this.node);
    this.addBlockTouch();
    cc.tween(this.node).delay(0).call(function () {
      t.collectSpine.node.active = true;
      GameUtils.playSpine(t.collectSpine, "in", false, function () {
        t.onLevelUnlock();
      });
    }).start();
  }
  onButtonClick() {
    this._data.state === EJourneyMapState.Locked && GameUtils.playSpine(this.animNode.getComponent(sp.Skeleton), "in", false);
    this.goToTravelGame();
  }
}
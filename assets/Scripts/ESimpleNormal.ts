import ElementLevel from './ElementLevel';
import { LevelBoxIconPath, EJourneyMapState } from './TravelMapInterface';
import GameUtils from './core/simulator/util/GameUtils';
import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import { EAudioID } from './core/simulator/constant/GameTypeEnums';
var a = {
  lockedIdle: "locked_idle",
  lockedTap: "locked_tap",
  unlockedIdle: "unlocked_idle",
  unlockedTap: "unlocked_tap",
  selectIdle: "unlocking_idle",
  selectTap: "unlocking_tap",
  selectSwitch: "unlocking_in",
  selectLightIdle: "unlocking_idle_init",
  selectLightSwitch: "unlocking_idle_in"
};
@mj.class
export default class ESimpleNormal extends ElementLevel {
  titleLabel = null;
  button = null;
  cardSpine = null;
  selectSpine = null;
  animProxy = null;
  levelParent = null;
  boxNode = null;
  static prefabUrl = "prefabs/journeyMap/01/E01Normal";
  static size = new cc.Size(146, 164);
  uiOnLoad() {
    super.uiOnLoad.call(this);
    this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
    this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
    this.selectSpine = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
    this.button = cc.find("Element", this.node);
    this.animProxy = BaseSpine.refreshWithNode(this.cardSpine.node);
    this.animProxy.reset("");
    this.animProxy.markReady("");
    this.levelParent = cc.find("Element", this.node);
    this.boxNode = cc.find("Element/Box", this.node);
    this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
      clickAudio: EAudioID.TravelButton1
    });
  }
  updateUI() {
    super.updateUI.call(this);
    this.hookNode(this.animProxy, "hook_level", this.titleLabel.node, this.levelParent);
    this.hookNode(this.animProxy, "hook_level", this.boxNode, this.levelParent);
    this.titleLabel.string = "" + this._data.level;
    this.updateReward();
  }
  resetState() {
    cc.Tween.stopAllByTarget(this.titleLabel.node);
    this.cardSpine.paused = true;
    this.selectSpine.paused = true;
    this.selectSpine.node.active = false;
  }
  updateReward() {
    var e = LevelBoxIconPath[this._data.type];
    if (e) {
      var t = this._data.state === EJourneyMapState.Unlocked ? e.openPath : e.path;
      BaseSprite.refreshWithNode(this.boxNode, t, e.atlas);
      this.boxNode.setScale(e.scale);
      this.boxNode.setPosition(e.offsetX, e.offsetY);
      this.titleLabel.node.active = false;
      this.boxNode.active = true;
    } else {
      this.boxNode.active = false;
      this.titleLabel.node.active = true;
    }
  }
  onLevelSelect() {
    var e = this;
    if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) if (this._data.isSelect) {
      this.selectSpine.node.active = true;
      GameUtils.playSpine(this.cardSpine, a.selectIdle, true);
      GameUtils.playSpine(this.selectSpine, a.selectLightIdle, true);
    } else {
      this._data.isSelect = true;
      GameUtils.playSpine(this.cardSpine, a.selectSwitch, false, function () {
        if (e._data.state === EJourneyMapState.Unlocked) {
          GameUtils.playSpine(e.cardSpine, a.unlockedIdle, true);
        } else {
          if (e._data.state === EJourneyMapState.Locked) {
            GameUtils.playSpine(e.cardSpine, a.lockedIdle, true);
          } else {
            e._data.state === EJourneyMapState.Selected && GameUtils.playSpine(e.cardSpine, a.selectIdle, true);
          }
        }
      });
      this.selectSpine.node.active = true;
      GameUtils.playSpine(this.selectSpine, a.selectLightSwitch, false, function () {
        if (e._data.state === EJourneyMapState.Selected) {
          GameUtils.playSpine(e.selectSpine, a.selectLightIdle, true);
        } else {
          e.selectSpine.node.active = false;
        }
      });
    }
  }
  onLevelLock() {
    if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
      this.selectSpine.node.active = false;
      GameUtils.playSpine(this.cardSpine, a.lockedIdle, false);
    }
  }
  onLevelUnlock() {
    if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
      this.selectSpine.node.active = false;
      GameUtils.playSpine(this.cardSpine, a.unlockedIdle, false);
    }
  }
  onLevelUnlockPass() {
    this._data.state = EJourneyMapState.Unlocked;
    this.onLevelUnlock();
  }
  onButtonClick() {
    var e = this;
    if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
      var t = a.lockedTap,
        o = a.lockedIdle;
      if (this._data.state === EJourneyMapState.Unlocked) {
        t = a.unlockedTap;
        o = a.unlockedIdle;
      } else if (this._data.state === EJourneyMapState.Selected) {
        t = a.selectTap;
        o = a.selectIdle;
      }
      GameUtils.playSpine(this.cardSpine, t, false, function () {
        cc.isValid(e.cardSpine) && GameUtils.playSpine(e.cardSpine, o, false);
      });
      this.goToTravelGame();
    }
  }
}
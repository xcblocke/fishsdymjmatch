import { EAudioID } from './core/simulator/constant/GameTypeEnums';
import GameUtils from './core/simulator/util/GameUtils';
import { EJourneyMapState } from './TravelMapInterface';
import ElementLevel from './ElementLevel';
var a = {
  locked: "locked",
  lockedTap: "locked_tap",
  unlockedIn: "in",
  unlockedIdle: "init"
};
@mj.class
export default class E01House extends ElementLevel {
  titleLabel = null;
  button = null;
  cardSpine = null;
  selectAnim = null;
  static prefabUrl = "prefabs/journeyMap/01/E01House";
  static size = new cc.Size(348, 378);
  uiOnLoad() {
    super.uiOnLoad.call(this);
    this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
    this.button = cc.find("Element", this.node);
    this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
    this.selectAnim = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
    this.selectAnim.node.active = false;
    this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
      clickAudio: EAudioID.TravelButton1
    });
  }
  updateUI() {
    super.updateUI.call(this);
    this.titleLabel.string = "" + this._data.level;
  }
  resetState() {}
  onButtonClick() {
    var e = this;
    if (cc.isValid(this.cardSpine)) {
      this._data.state !== EJourneyMapState.Selected && this._data.state !== EJourneyMapState.Locked || GameUtils.playSpine(this.cardSpine, a.lockedTap, false, function () {
        GameUtils.playSpine(e.cardSpine, a.locked, false);
      });
      this.goToTravelGame();
    }
  }
  onLevelSelect() {
    var e = this;
    if (cc.isValid(this.cardSpine)) {
      GameUtils.playSpine(this.cardSpine, a.locked, false);
      this.selectAnim.node.active = true;
      if (this._data.isSelect) GameUtils.playSpine(this.selectAnim, "unlocking_idle_init", true);else {
        this._data.isSelect = true;
        GameUtils.playSpine(this.selectAnim, "unlocking_idle_in", false, function () {
          GameUtils.playSpine(e.selectAnim, "unlocking_idle_init", true);
        });
      }
    }
  }
  onLevelLock() {
    if (cc.isValid(this.cardSpine)) {
      GameUtils.playSpine(this.cardSpine, a.locked, false);
      this.selectAnim.node.active = false;
    }
  }
  onLevelUnlock() {
    var e = this;
    if (cc.isValid(this.cardSpine)) {
      GameUtils.playSpine(this.cardSpine, a.unlockedIn, false, function () {
        cc.isValid(e.cardSpine) && GameUtils.playSpine(e.cardSpine, a.unlockedIdle, true);
      });
      this.selectAnim.node.active = false;
    }
  }
  onLevelUnlockPass() {
    this._data.state = EJourneyMapState.Unlocked;
    this.onLevelUnlock();
  }
}
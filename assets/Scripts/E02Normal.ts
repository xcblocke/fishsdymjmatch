import ElementLevel from './ElementLevel';
import { EJourneyMapState, LevelBoxIconPath } from './TravelMapInterface';
import GameUtils from './core/simulator/util/GameUtils';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import { EAudioID } from './core/simulator/constant/GameTypeEnums';
var i;
var l = {
  lockedIdle: "locked_idle",
  lockedTap: "locked_tap",
  unlockedSwitch: "unlocked_in",
  unlockedIdle: "unlocked_idle",
  unlockedTap: "unlocked_tap",
  selectIdle: "unlocking_idle",
  selectTap: "unlocking_tap",
  selectSwitch: "unlocking_in"
};
(i = {})[EJourneyMapState.Locked] = [cc.color(229, 250, 255, 255), cc.color(30, 74, 91, 255)];
i[EJourneyMapState.Selected] = [cc.color(255, 253, 209, 255), cc.color(50, 69, 1, 255)];
i[EJourneyMapState.Unlocked] = [cc.color(255, 243, 209, 255), cc.color(118, 64, 1, 255)];
i[EJourneyMapState.UnlockedPass] = [cc.color(229, 250, 255, 255), cc.color(30, 74, 91, 255)];
i[EJourneyMapState.Collecting] = [cc.color(255, 243, 209, 255), cc.color(118, 64, 1, 255)];
var d = i;
@mj.class
export default class E02Normal extends ElementLevel {
  titleLabel = null;
  button = null;
  cardSpine = null;
  animProxy = null;
  tipNode = null;
  boxNode = null;
  static prefabUrl = "prefabs/journeyMap/02/E02Normal";
  static size = new cc.Size(191, 164);
  uiOnLoad() {
    super.uiOnLoad.call(this);
    this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
    this.button = cc.find("Element", this.node);
    this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
    this.animProxy = this.getBaseSpine(this.cardSpine.node);
    this.tipNode = cc.find("Element/Tip", this.node);
    this.boxNode = cc.find("Element/Tip/Content/Reward", this.node);
    this.tipNode.active = false;
    this.tipNode.originPos = this.tipNode.position;
    this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
      clickAudio: EAudioID.TravelButton1
    });
  }
  updateUI() {
    super.updateUI.call(this);
    this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
    this.animProxy = this.getBaseSpine(this.cardSpine.node);
    this.updateLevel();
    this.updateReward();
  }
  resetState() {
    cc.Tween.stopAllByTarget(this.titleLabel.node);
    this.cardSpine.paused = true;
    cc.Tween.stopAllByTarget(this.tipNode);
    cc.Tween.stopAllByTarget(this.boxNode);
  }
  updateLevel() {
    this.hookNode(this.animProxy, "hook_level", this.titleLabel.node, this.button);
    this.titleLabel.string = "" + this._data.level;
    this.titleLabel.node.color = d[this._data.state][0];
    this.titleLabel.node.getComponent(cc.LabelOutline).color = d[this._data.state][1];
  }
  updateReward() {
    var e = LevelBoxIconPath[this._data.type];
    if (e) {
      var t = this._data.state === EJourneyMapState.Unlocked || this._data.state === EJourneyMapState.UnlockedPass,
        o = t ? e.openPath : e.path,
        n = t ? e.scale : 1.1 * e.scale;
      BaseSprite.refreshWithNode(this.boxNode, o, e.atlas);
      this.boxNode.setScale(n);
      this.boxNode.setPosition(e.offsetX, e.offsetY);
      this.boxNode.originScale = n;
      this.tipNode.active = true;
      this._data.state !== EJourneyMapState.Locked && this._data.state !== EJourneyMapState.Selected || this.boxTipAnim();
    } else this.tipNode.active = false;
  }
  boxAppearAnim() {}
  boxTipAnim() {
    var e = this;
    cc.Tween.stopAllByTarget(this.tipNode);
    this.boxAppearAnim();
    cc.Tween.stopAllByTarget(this.tipNode);
    this.tipNode.opacity = 0;
    this.tipNode.angle = 0;
    this.tipNode.setScale(0.7);
    var t = cc.tween(this.tipNode).to(0.2666, {
        opacity: 255
      }),
      o = cc.tween(this.tipNode).to(0.2666, {
        scale: 1.1
      }).to(0.2, {
        scale: 1
      }),
      n = cc.tween(this.tipNode).to(0.2666, {
        angle: -6
      }).to(0.2, {
        angle: 5
      }).to(0.2, {
        angle: -4
      }).to(0.2, {
        angle: 3
      }).to(0.2, {
        angle: -2
      }).to(0.2, {
        angle: 1
      }).to(0.2, {
        angle: 0
      }),
      i = this.tipNode.originPos,
      r = cc.v3(i.x, i.y + 10, 0),
      a = cc.v3(i.x, i.y - 10, 0),
      l = cc.tween().to(0.25, {
        position: r
      }).to(0.25, {
        position: i
      }).to(0.25, {
        position: a
      }).to(0.25, {
        position: i
      });
    cc.tween(this.tipNode).parallel(t, o, n).call(function () {
      cc.tween(e.tipNode).repeatForever(l).start();
    }).start();
  }
  onLevelSelect() {
    var e = this;
    if (cc.isValid(this.cardSpine)) if (this._data.isSelect) GameUtils.playSpine(this.cardSpine, l.selectIdle, true);else {
      this._data.isSelect = true;
      GameUtils.playSpine(this.cardSpine, l.selectSwitch, false, function () {
        if (e._data.state === EJourneyMapState.Unlocked) {
          GameUtils.playSpine(e.cardSpine, l.unlockedIdle, true);
        } else {
          if (e._data.state === EJourneyMapState.Locked) {
            GameUtils.playSpine(e.cardSpine, l.lockedIdle, true);
          } else {
            e._data.state === EJourneyMapState.Selected && GameUtils.playSpine(e.cardSpine, l.selectIdle, true);
          }
        }
      });
    }
  }
  onLevelLock() {
    cc.isValid(this.cardSpine) && GameUtils.playSpine(this.cardSpine, l.lockedIdle, false);
  }
  onLevelUnlock() {
    cc.isValid(this.cardSpine) && GameUtils.playSpine(this.cardSpine, l.unlockedIdle, false);
  }
  onLevelUnlockPass() {
    var e = this;
    if (cc.isValid(this.cardSpine)) {
      var t = this._data.endTime - Date.now();
      if (t < 0) {
        this._data.state = EJourneyMapState.Unlocked;
        this.onLevelUnlock();
      } else {
        cc.Tween.stopAllByTarget(this.cardSpine.node);
        cc.Tween.stopAllByTarget(this.titleLabel);
        GameUtils.playSpine(this.cardSpine, l.lockedIdle, false);
        cc.tween(this.cardSpine.node).delay(t / 1000).call(function () {
          GameUtils.playSpine(e.cardSpine, l.unlockedSwitch, false, function () {
            e.onLevelUnlock();
          });
        }).start();
        cc.tween(this.titleLabel).delay(t / 1000 + 0.033).call(function () {
          e._data.state = EJourneyMapState.Unlocked;
          e.updateLevel();
        }).start();
      }
    }
  }
  onButtonClick() {
    var e = this;
    if (cc.isValid(this.cardSpine)) {
      var t = l.lockedTap,
        o = l.lockedIdle;
      if (this._data.state === EJourneyMapState.Unlocked) {
        t = l.unlockedTap;
        o = l.unlockedIdle;
      } else if (this._data.state === EJourneyMapState.Selected) {
        t = l.selectTap;
        o = l.selectIdle;
      }
      GameUtils.playSpine(this.cardSpine, t, false, function () {
        GameUtils.playSpine(e.cardSpine, o, false);
      });
      this.goToTravelGame();
    }
  }
}
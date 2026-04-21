import ElementLevel from './ElementLevel';
import { EJourneyMapState } from './TravelMapInterface';
import GameUtils from './core/simulator/util/GameUtils';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import { EAudioID } from './core/simulator/constant/GameTypeEnums';
@mj.class
export default class ESimpleGiftBox extends ElementLevel {
  titleLabel = null;
  button = null;
  animNode = null;
  cardNode = null;
  badgeBg = null;
  badgeLightBg = null;
  badgeNode = null;
  badgeIcon = null;
  badgeLight = null;
  selectAnim = null;
  badgeUpBg = null;
  static prefabUrl = "prefabs/journeyMap/03/E03GiftBox";
  static size = new cc.Size(348, 378);
  uiOnLoad() {
    super.uiOnLoad.call(this);
    this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
    this.button = cc.find("Element", this.node);
    this.animNode = cc.find("Element/Anim", this.node);
    this.cardNode = cc.find("Element/Card", this.node);
    this.badgeNode = cc.find("Element/Card/Badge", this.node);
    this.badgeBg = cc.find("Element/Card/BadgeBg", this.node);
    this.badgeUpBg = cc.find("Element/Card/Up", this.node);
    this.badgeLightBg = cc.find("Element/Card/LightBg", this.node);
    this.badgeIcon = cc.find("Element/Card/Badge/Icon", this.node);
    this.badgeLight = cc.find("Element/Card/Badge/Light", this.node).getComponent(sp.Skeleton);
    this.selectAnim = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
    this.selectAnim.node.active = false;
    this.badgeLight.node.active = false;
    this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
      clickAudio: EAudioID.TravelButton1
    });
  }
  updateUI() {
    super.updateUI.call(this);
    this.titleLabel.string = "" + this._data.level;
    this.refreshBadgeIcon();
    this.refreshBadgeBg();
  }
  refreshBadgeIcon() {
    var e = this.getBadgePath(this._data.type),
      t = e.path,
      o = e.atlas,
      n = e.bundle;
    t && cc.isValid(this.badgeIcon) && BaseSprite.refreshWithNode(this.badgeIcon, t, null != o && o, false, n);
  }
  refreshBadgeBg() {
    var e = this.getBadgeBgPath(this._data.type),
      t = e.path,
      o = e.atlas,
      n = e.bundle;
    t && cc.isValid(this.badgeBg) && BaseSprite.refreshWithNode(this.badgeBg, t, null != o && o, false, n);
  }
  resetState() {
    this.selectAnim.paused = true;
    this.selectAnim.node.active = false;
  }
  playAnim(e, t) {
    if (cc.isValid(this.animNode) && cc.isValid(this.node.parent)) {
      var o = this.getBadgeId(this._data.type);
      GameUtils.playSpine(this.animNode.getComponent(sp.Skeleton), e + "_" + o, false, t);
    }
  }
  onButtonClick() {
    this._data.state !== EJourneyMapState.Selected && this._data.state !== EJourneyMapState.Locked || this.playAnim("tap");
    this.goToTravelGame();
  }
  onLevelSelect() {
    var e = this;
    this.cardNode.active = false;
    this.animNode.active = true;
    this.playAnim("idle");
    this.selectAnim.node.active = true;
    if (this._data.isSelect) GameUtils.playSpine(this.selectAnim, "unlocking_idle_init", true);else {
      this._data.isSelect = true;
      GameUtils.playSpine(this.selectAnim, "unlocking_idle_in", false, function () {
        GameUtils.playSpine(e.selectAnim, "unlocking_idle_init", true);
      });
    }
  }
  onLevelSelectUnlocked() {
    var e = this;
    this.cardNode.active = true;
    this.badgeNode.active = true;
    this.animNode.active = false;
    this.badgeUpBg.active = false;
    this.badgeLightBg.active = true;
    this.selectAnim.node.active = true;
    if (this._data.isSelect) GameUtils.playSpine(this.selectAnim, "unlocking_idle_init", true);else {
      this._data.isSelect = true;
      GameUtils.playSpine(this.selectAnim, "unlocking_idle_in", false, function () {
        GameUtils.playSpine(e.selectAnim, "unlocking_idle_init", true);
      });
    }
  }
  onLevelLock() {
    this.cardNode.active = false;
    this.animNode.active = true;
    this.playAnim("idle");
    this.selectAnim.node.active = false;
  }
  onLevelUnlock() {
    this.cardNode.active = true;
    this.badgeNode.active = true;
    this.animNode.active = false;
    this.badgeUpBg.active = false;
    this.badgeLightBg.active = true;
    this.selectAnim.node.active = false;
  }
  onLevelUnlockPass() {
    this._data.state = EJourneyMapState.Unlocked;
    this.onLevelUnlock();
  }
  badgeCollectStart() {
    this.cardNode.active = true;
    this.animNode.active = false;
    this.badgeNode.active = false;
    this.badgeUpBg.active = true;
    this.badgeLightBg.active = false;
    this.badgeLight.node.active = false;
  }
  badgeCollectEnd() {
    var e = this;
    cc.Tween.stopAllByTarget(this.node);
    cc.tween(this.node).delay(0.01).call(function () {
      e.playBadgeAnim();
    }).start();
    this.addBlockTouch();
  }
  playBadgeAnim() {
    var e = this;
    if (cc.isValid(this.badgeBg.parent)) {
      var t = this.getBadgeId(this._data.type);
      this.badgeNode.active = true;
      var o = this.badgeNode.position,
        n = this.badgeNode.parent.convertToWorldSpaceAR(o),
        i = cc.Canvas.instance.node.convertToNodeSpaceAR(n),
        r = this.badgeNode.parent,
        a = this.badgeNode,
        l = cc.Canvas.instance.node;
      a.parent = l;
      a.position = cc.Vec3.ZERO;
      var c = cc.tween().to(0.5, {
          position: i
        }, {
          easing: cc.easing.cubicInOut
        }).call(function () {
          if (cc.isValid(r)) {
            if (cc.isValid(f)) {
              f.node.scale = 1;
              a.parent = r;
              a.setPosition(o);
              e.badgeBg.active = true;
              e.badgeLightBg.active = true;
              e.badgeLightBg.opacity = 0;
              cc.tween(e.badgeLightBg).to(0.16, {
                opacity: 255
              }).call(function () {}).start();
              GameUtils.playSpine(f, "out_" + t, false, function () {
                f.node.active = false;
                e.onLevelUnlock();
              });
            }
          } else a.destroy();
        }),
        u = cc.tween().to(0.16, {
          angle: 25
        }, {
          easing: cc.easing.sineInOut
        }).to(0.34, {
          angle: 0
        }, {
          easing: cc.easing.cubicIn
        }),
        p = cc.tween().to(0.16, {
          scale: 3
        }, {
          easing: cc.easing.circOut
        }).to(0.34, {
          scale: 0.9
        }, {
          easing: cc.easing.cubicIn
        }).to(0.16, {
          scale: 1
        }, {
          easing: cc.easing.sineInOut
        });
      a.setPosition(cc.Vec3.ZERO);
      a.setScale(0.01);
      a.active = true;
      var f = a.getComponentInChildren(sp.Skeleton);
      f.node.scale = 0.7;
      f.node.active = true;
      GameUtils.playSpine(f, "in_" + t, false);
      cc.tween(a).to(0.33, {
        scale: 2
      }, {
        easing: cc.easing.backOut
      }).delay(0.17).parallel(c, u, p).start();
    }
  }
}
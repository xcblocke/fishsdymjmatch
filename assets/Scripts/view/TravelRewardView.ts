import TravelGameModel from '../gamePlay/travel/model/TravelGameModel';
import GameUtils from '../core/simulator/util/GameUtils';
import { DataReader } from '../framework/data/DataReader';
import { ConfigType } from '../gamePlay/base/data/ConfigType';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import I18NStrings from '../framework/data/I18NStrings';
import BaseSprite from '../gamePlay/base/ui/BaseSprite';
import { TRAVEL_GAME_COLLECT_BADGE } from '../config/TravelConfig';
import UIView from '../framework/ui/UIView';
import { DotGameBtnClick, EBadgeClickType, EVictoryChestClickType } from '../dot/DGameBtnClick';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
@mj.class
export default class TravelRewardView extends UIView {
  @mj.node("Content/Btn")
  playBtn: "Content/Btn" = null;
  @mj.component("Content/Title", cc.Label)
  titleLabel: "Content/Title" = null;
  @mj.component("Content/Title2", cc.Label)
  titleLabel2: "Content/Title2" = null;
  @mj.node("Icon")
  iconNode: "Icon" = null;
  @mj.component("AnimDown", sp.Skeleton)
  animDown: "AnimDown" = null;
  @mj.component("AnimUp", sp.Skeleton)
  animUp: "AnimUp" = null;
  @mj.node("Trail")
  trailNode: "Trail" = null;
  @mj.node("Top")
  topNode: "Top" = null;
  @mj.node("Top/Badge")
  badgeNode: "Top/Badge" = null;
  @mj.node("Content")
  contentNode: "Content" = null;
  @mj.node("bg")
  bgNode: "bg" = null;
  @mj.node("Top/Badge/Trophy")
  trophyNode: "Top/Badge/Trophy" = null;
  levelId = 0;
  proxy = null;
  static prefabUrl = "prefabs/journey/JourneyReward";
  onLoad() {
    var t = this;
    super.onLoad.call(this);
    this.proxy = BaseSpine.refreshWithNode(this.animUp.node);
    this.proxy.reset("");
    this.proxy.markReady("");
    this.proxy.attachNode("hook_icon", function () {
      return t.iconNode;
    });
    this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
  }
  viewDidLoad(e) {
    var t = this;
    this.levelId = e.levelId;
    var o = TravelGameModel.getInstance().getCurJourney(),
      n = TravelGameModel.getInstance().getRewardInfo(o).find(function (e) {
        return e.lv === t.levelId;
      }),
      i = DataReader.getByKey(ConfigType.reward_config, n.reward),
      r = DataReader.getByKey(ConfigType.item_config, i.Items[0]);
    I18NStrings.setText(this.titleLabel.node, I18NStrings.get(null == r ? void 0 : r.NameKey), null == r ? void 0 : r.NameKey);
    I18NStrings.setText(this.titleLabel2.node, I18NStrings.get(null == r ? void 0 : r.NameKey), null == r ? void 0 : r.NameKey);
    BaseSprite.refreshWithNode(this.iconNode, "texture/badge/" + (null == r ? void 0 : r.Icon), false);
    DotGameBtnClick.dotBadge(EBadgeClickType.BadgeGet, "" + I18NStrings.getCN(null == r ? void 0 : r.NameKey));
    this.trophyNode.active = false;
    mj.audioManager.playEffect(EAudioID.TravelTags);
    this.playAnim();
    this.isAutoClose() && this.scheduleOnce(function () {
      t.onPlayBtnClick();
    }, 3);
  }
  viewDidShow() {}
  playAnim() {
    var e = this;
    this.trailNode.active = false;
    this.animDown.node.active = false;
    this.iconNode.opacity = 0;
    this.iconNode.setPosition(cc.Vec3.ZERO);
    this.animUp.setEventListener(function (t, o) {
      if ("event_rewards" === o.data.name) {
        e.animDown.node.active = true;
        cc.tween(e.iconNode).to(0.2, {
          opacity: 255
        }).start();
        GameUtils.playSpine(e.animDown, "in_down", false, function () {
          GameUtils.playSpine(e.animDown, "init_down", true);
        });
      }
    });
    GameUtils.playSpine(this.animUp, "in_up", false, function () {
      e.animUp.setEventListener(null);
      GameUtils.playSpine(e.animUp, "init_up", true);
    });
    this.titleLabel.node.scale = 0.3;
    cc.tween(this.titleLabel.node).to(0.2, {
      scale: 1.3
    }, {
      easing: cc.easing.quadOut
    }).to(0.17, {
      scale: 0.8
    }, {
      easing: cc.easing.sineOut
    }).to(0.13, {
      scale: 1
    }, {
      easing: cc.easing.sineOut
    }).start();
    this.titleLabel2.node.opacity = 0;
    cc.tween(this.titleLabel2.node).delay(0.5).to(0.17, {
      opacity: 255
    }, {
      easing: cc.easing.quadOut
    }).to(0.8, {
      opacity: 0
    }, {
      easing: cc.easing.quadInOut
    }).start();
    this.playBtn.active = false;
    this.playBtn.scale = 0.6;
    cc.tween(this.playBtn).delay(0.4).call(function () {
      e.playBtn.active = true;
    }).to(0.2, {
      scale: 1.05
    }, {
      easing: cc.easing.quadOut
    }).to(0.16, {
      scale: 1
    }, {
      easing: cc.easing.quadIn
    }).start();
  }
  playCollectAnim() {
    var e = this;
    this.hideBgAnim(0.8);
    this.iconNode.scale = 1;
    this.iconNode.opacity = 255;
    var t = cc.tween(this.iconNode).to(0.1, {
        scale: 1.05
      }, {
        easing: cc.easing.quadOut
      }).to(0.2, {
        scale: 0.3
      }, {
        easing: cc.easing.quadIn
      }),
      o = cc.tween(this.iconNode).to(0.3, {
        opacity: 0
      });
    cc.tween(this.iconNode).parallel(t, o).call(function () {
      e.iconNode.active = false;
      e.playTrailAnim(function () {
        e.trophyNode.active = true;
        GameUtils.playSpine(e.trophyNode.getComponent(sp.Skeleton), "in_trophy", false, function () {
          var t;
          e.dispatchEvent(TRAVEL_GAME_COLLECT_BADGE, e.levelId);
          null === (t = e.delegate) || void 0 === t || t.close();
        });
      });
    }).start();
    cc.tween(this.animDown.node).delay(0.2).call(function () {
      GameUtils.playSpine(e.animDown, "out_collection", false);
    }).start();
  }
  playTrailAnim(e) {
    var t = this;
    mj.audioManager.playEffect(EAudioID.TravelCollect);
    EAudioID;
    this.trailNode.active = true;
    var o = this.iconNode.parent.convertToWorldSpaceAR(this.iconNode.position),
      n = this.trailNode.parent.convertToNodeSpaceAR(o);
    this.trailNode.position = n;
    var i = this.badgeNode.parent.convertToWorldSpaceAR(this.badgeNode.position),
      r = this.trailNode.parent.convertToNodeSpaceAR(i);
    cc.tween(this.trailNode).to(0.3, {
      position: r
    }, {
      easing: cc.easing.sineInOut
    }).call(function () {
      t.stopTrailParticle();
    }).delay(0.25).call(function () {
      t.trailNode.active = false;
      null == e || e();
    }).start();
    this.trailNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
      e.resetSystem();
      e.speed *= 1;
    });
  }
  onPlayBtnClick() {
    DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.TravelClaimRewardCollection);
    this.playBtn.getComponent(cc.Button).interactable = false;
    this.playCollectAnim();
  }
  @mj.traitEvent("TravelRewardVv_autoClose")
  isAutoClose() {
    return false;
  }
  hideBgAnim(e) {
    cc.tween(this.bgNode).to(e, {
      opacity: 0
    }).start();
    cc.tween(this.contentNode).to(e, {
      opacity: 0
    }).start();
  }
  stopTrailParticle() {
    if (this.trailNode && cc.isValid(this.trailNode)) try {
      this.trailNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
        e.stopSystem();
      });
    } catch (e) {}
  }
}
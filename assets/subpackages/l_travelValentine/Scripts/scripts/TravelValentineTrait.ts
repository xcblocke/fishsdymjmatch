import Trait from '../../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import { MapElementId } from '../../../../Scripts/TravelMapInterface';
import E06GiftBox from './E06GiftBox';
import E06Normal from './E06Normal';
import E06Rose from './E06Rose';
import E06Letter from './E06Letter';
import { MapElementFactory } from '../../../../Scripts/elements/MapElementFactory';
import { MjGameType } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import TravelGameModel from '../../../../Scripts/gamePlay/travel/model/TravelGameModel';
import BaseSprite, { SPRITE_LOAD_COMPLETE } from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("TravelValentineTrait")
export default class TravelValentineTrait extends Trait {
  static traitKey = "TravelValentine";
  get startTime() {
    return this.traitData.special.start;
  }
  get endTime() {
    return this.traitData.special.end;
  }
  get journey() {
    return this.traitData.special.journey;
  }
  get replaceHallTheme() {
    var e, t;
    return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.replaceHallTheme) || void 0 === t || t;
  }
  onLoad() {
    super.onLoad.call(this);
    this.registerElements();
  }
  registerElements() {
    MapElementFactory.registerMapElement(MapElementId.E06Normal, E06Normal);
    MapElementFactory.registerMapElement(MapElementId.E06GiftBox1, E06GiftBox);
    MapElementFactory.registerMapElement(MapElementId.E06GiftBox2, E06GiftBox);
    MapElementFactory.registerMapElement(MapElementId.E06GiftBox3, E06GiftBox);
    MapElementFactory.registerMapElement(MapElementId.E06Rose, E06Rose);
    MapElementFactory.registerMapElement(MapElementId.E06Letter, E06Letter);
    MapElementFactory.registerMapElement(MapElementId.E06LevelGiftBox1, E06Normal);
    MapElementFactory.registerMapElement(MapElementId.E06LevelGiftBox2, E06Normal);
    MapElementFactory.registerMapElement(MapElementId.E06LevelGiftBox3, E06Normal);
    MapElementFactory.registerMapElement(MapElementId.E06LevelGiftBox4, E06Normal);
  }
  checkInSpecialTime() {
    var e = Date.now() / 1000;
    return e >= this.startTime && e <= this.endTime;
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  getCurSpecialKey() {
    return "Special_" + this.journey + "_" + this.startTime + "_" + this.endTime;
  }
  canTriggerSpecial(e) {
    return !!this.checkInSpecialTime() && !!e.isActiveJourney() && !this.isTriggered();
  }
  isTriggered() {
    var e = this.getCurSpecialKey(),
      t = this.localData[e];
    return !this.isLocalEmpty(t);
  }
  onJourney_NextSession(e, t) {
    if (this.canTriggerSpecial(e.ins)) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: [this.journey, -1]
      });
    } else {
      t();
    }
  }
  onJourney_DoChange(e, t) {
    if (this.canTriggerSpecial(e.ins)) {
      var r = __read(e.args, 2),
        n = r[0],
        o = r[1];
      if (n === this.journey && o < 0) {
        var i = this.getCurSpecialKey();
        this.localData[i] = new Date().getTime();
      }
    }
    t();
  }
  onJourney_doShwActiveVw(e, t) {
    var r = e.args[0],
      n = r.config,
      o = r.isNewSession;
    if (n.session === this.journey) {
      ControllerManager.getInstance().pushViewByController("TravelValentineController", {
        config: n,
        isNewSession: o,
        isShowAction: false,
        bgStyle: {
          blackOpacity: 0
        }
      });
      t({
        returnType: TraitCallbackReturnType.jump
      });
    } else t();
  }
  onJourney_doHideActiveVw(e, t) {
    ControllerManager.getInstance().closeViewByName("TravelValentineController");
    t();
  }
  onMainGmVw_afChangeTheme(e, t) {
    var r = e.ins;
    if (e.args[0] === MjGameType.Travel) {
      if (TravelGameModel.getInstance().localData.curJourney === this.journey) {
        this.changeBg(r);
        t();
      } else t();
    } else t();
  }
  changeBg(e) {
    if (cc.isValid(e) && cc.isValid(e.gameNode) && cc.isValid(e.node)) {
      var t = e.gameNode.getSiblingIndex(),
        r = e.node.getChildByName("bg");
      if (cc.isValid(r) || !cc.isValid(r.parent)) {
        var n = r.parent.getChildByName("_valentineBg_");
        cc.isValid(n) && n.destroy();
        var o = new cc.Node("_valentineBg_");
        o.parent = r.parent;
        o.setSiblingIndex(t);
        o.once(SPRITE_LOAD_COMPLETE, function (t) {
          if (e && cc.isValid(e.node)) {
            var r = t.spriteFrame;
            if (r) {
              if (r.getRect().width > 0 && r.getRect().height > 0) {
                var n = cc.size(r.getRect().width, r.getRect().height);
                o.setContentSize(n);
                var i = cc.Canvas.instance.node.getContentSize(),
                  a = n.width / n.height;
                if (i.width / i.height > a) {
                  o.setScale(i.width / n.width);
                } else {
                  o.setScale(i.height / n.height);
                }
              }
              var l = e.node.getChildByName("bg");
              cc.isValid(l) && (l.active = false);
            }
          }
        });
        BaseSprite.refreshWithNode(o, "texture/gameplay_bg_board", false, true, "l_travelValentine");
      }
    }
  }
  onHallVw_chgTheme(e, t) {
    var r = TravelGameModel.getInstance(),
      n = r.getCurJourney();
    if (this.replaceHallTheme) {
      if (e.args[1]) {
        if (n === this.journey) {
          if (r.isSessionActive()) {
            e.args[0] = "Hall4";
            t();
          } else t();
        } else t();
      } else t();
    } else t();
  }
}
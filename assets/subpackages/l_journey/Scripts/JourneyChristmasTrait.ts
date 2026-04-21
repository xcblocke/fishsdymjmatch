import TravelGameData from '../../../Scripts/core/simulator/data/TravelGameData';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("JourneyChristmasTrait")
export default class JourneyChristmasTrait extends Trait {
  needRestore = false;
  static traitKey = "JourneyChristmas";
  get startTime() {
    return this.traitData.special.start;
  }
  get endTime() {
    return this.traitData.special.end;
  }
  get journey() {
    return this.traitData.special.journey;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  checkInSpecialTime() {
    var t = Date.now() / 1000;
    return t >= this.startTime && t <= this.endTime;
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  getCurSpecialKey() {
    return "Special_" + this.journey + "_" + this.startTime + "_" + this.endTime;
  }
  canTriggerSpecial(t) {
    return !!this.checkInSpecialTime() && !!t.isActiveJourney() && !this.isTriggered();
  }
  isTriggered() {
    var t = this.getCurSpecialKey(),
      e = this.localData[t];
    return !this.isLocalEmpty(e);
  }
  onJourney_IsSessionEnd(t, e) {
    if (this.canTriggerSpecial(t.ins)) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onJourney_NextSession(t, e) {
    if (this.canTriggerSpecial(t.ins)) e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: [this.journey, -1]
    });else {
      var r = TravelGameModel.getInstance().getCurJourney(),
        o = TravelGameModel.getInstance().isSpecialSession();
      if (this.isTriggered() && r === this.journey && o) {
        var n = this.getLastJourney();
        if (n.length > 0) {
          var i = __read(n, 2),
            s = i[0],
            c = i[1];
          return e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: [s, c]
          });
        }
      }
      e();
    }
  }
  onJourney_DoChange(t, e) {
    if (this.canTriggerSpecial(t.ins)) {
      var r = __read(t.args, 2),
        o = r[0],
        n = r[1];
      if (o === this.journey && n < 0) {
        var i = this.getCurSpecialKey();
        this.localData[i] = new Date().getTime();
      }
    } else if (this.needRestore) {
      this.needRestore = false;
      var c = this.getLastJourney();
      if (3 === c.length) {
        var l = __read(c, 3),
          u = (l[0], l[1], l[2]);
        TravelGameData.getInstance().setLevelId(u);
        this.localData.lastJourney = [];
      }
    }
    e();
  }
  onTLGameModel_activeSession(t, e) {
    var r = __read(t.args, 4),
      o = r[0],
      n = (r[1], r[2], r[3]);
    if (o === this.journey && n < 0) {
      var i = (p = t.ins).getCurJourney(),
        c = p.getCurSessionIndex();
      if ("" !== i && c >= 0 && !p.isComplete(i)) {
        var l = TravelGameData.getInstance().getLevelId();
        this.setLastJourney(i, c, l);
      }
    } else {
      var u = this.getLastJourney();
      if (u.length > 0) {
        i = (p = t.ins).getCurJourney();
        var p,
          f = p.isSpecialSession(),
          y = __read(u, 1)[0];
        this.journey === i && f && y === o && (this.needRestore = true);
      }
    }
    e();
  }
  onTravelBtn_updateUI(t, e) {
    this.updateTravelBtnUI(t);
    e();
  }
  updateTravelBtnUI(t) {
    try {
      var e = t.ins,
        o = t.args[0];
      if (cc.isValid(e.node)) {
        var n = cc.find("Root/BgWood", e.node),
          i = cc.find("Root/BgBtn", e.node),
          a = cc.find("Root/Timer/Time", e.node),
          s = cc.find("Root/Timer/Icon", e.node),
          c = cc.find("Root/Title", e.node),
          l = cc.find("Root/Timer/Icon_new", e.node),
          p = cc.find("Root/BgWood_new", e.node),
          f = cc.find("Root/BgBtn_new", e.node);
        if (o === this.journey) {
          n.active = false;
          i.active = false;
          s.active = false;
          if (!cc.isValid(p)) {
            (p = BaseSprite.create("texture/journey/main_btn_green").node).name = "BgWood_new";
            p.active = true;
            p.parent = n.parent;
            p.setPosition(n.position);
            p.setSiblingIndex(n.getSiblingIndex());
          }
          if (!cc.isValid(f)) {
            (f = BaseSprite.create("texture/journey/main_btn_red").node).name = "BgBtn_new";
            f.active = true;
            f.parent = i.parent;
            f.setPosition(cc.v2(i.position.x + 2, i.position.y - 18));
            f.setSiblingIndex(i.getSiblingIndex());
          }
          if (!cc.isValid(l)) {
            (l = BaseSprite.create("texture/journey/main_img_time").node).name = "Icon_new";
            l.active = true;
            l.parent = s.parent;
            l.setPosition(s.position);
            l.setSiblingIndex(s.getSiblingIndex());
          }
          if (!a._originalColor_) {
            a._originalColor_ = a.color;
            a.color = cc.color(237, 112, 112, 255);
          }
          if (!c._originalColor_) {
            c._originalColor_ = c.color;
            c.color = cc.color(255, 234, 229, 255);
          }
        } else {
          n.active = true;
          i.active = true;
          s.active = true;
          cc.isValid(p) && (p.active = false);
          cc.isValid(f) && (f.active = false);
          cc.isValid(l) && (l.active = false);
          a._originalColor_ && (a.color = a._originalColor_);
          c._originalColor_ && (c.color = c._originalColor_);
        }
      }
    } catch (t) {
      console.error("[" + JourneyChristmasTrait.traitKey + "] 更新旅行按钮UI失败:" + ((null == t ? void 0 : t.message) || "未知错误"));
    }
  }
  isInSpecialJourney() {
    if (this.checkInSpecialTime() && !this.isTriggered()) return true;
    if (this.isTriggered()) {
      var t = TravelGameModel.getInstance().getCurJourney(),
        e = TravelGameModel.getInstance().isSpecialSession();
      return !(t !== this.journey || !e);
    }
    return false;
  }
  onHallVw_travelChange(t, e) {
    this.updateHallUI(t.ins);
    e();
  }
  onHallVw_initBtns(t, e) {
    this.updateHallUI(t.ins);
    e();
  }
  updateHallUI(t) {
    try {
      if (this.isInSpecialJourney()) {
        this.replaceChristmasHallUI(t);
      } else {
        this.restoreChristmasHallUI(t);
      }
    } catch (t) {
      console.error("[" + JourneyChristmasTrait.traitKey + "] 更新大厅界面UI失败:" + ((null == t ? void 0 : t.message) || "未知错误"));
    }
  }
  replaceChristmasHallUI(t) {
    if (cc.isValid(t.node) && !t.isSimpleHall()) {
      var e = cc.find("Mask/Anim", t.node),
        r = cc.find("Mask/Img", t.node),
        o = cc.find("Anim_new", t.node),
        n = cc.find("Img_new", t.node);
      if (!cc.isValid(o)) {
        (o = cc.instantiate(e)).name = "Anim_new";
        o.active = true;
        o.parent = e.parent;
        o.setSiblingIndex(e.getSiblingIndex());
        BaseSpine.refreshWithNode(o, "spine/hall/main_snowScene_christmas").setAnimation("init", -1);
      }
      if (!cc.isValid(n)) {
        (n = cc.instantiate(r)).name = "Img_new";
        n.active = true;
        n.parent = r.parent;
        n.setSiblingIndex(r.getSiblingIndex());
        BaseSprite.refreshWithNode(n, "texture/hall/main_snowScene_bg_christmas", false);
      }
      e.active = false;
      e.opacity = 0;
      r.active = false;
      r.opacity = 0;
    }
  }
  restoreChristmasHallUI(t) {
    if (cc.isValid(t.node) && !t.isSimpleHall()) {
      var e = cc.find("Mask/Anim", t.node),
        r = cc.find("Mask/Img", t.node),
        o = cc.find("Anim_new", t.node),
        n = cc.find("Img_new", t.node);
      e.active = true;
      r.active = true;
      e.opacity = 255;
      r.opacity = 255;
      cc.isValid(o) && (o.active = false);
      cc.isValid(n) && (n.active = false);
    }
  }
  setLastJourney(t, e, r) {
    this.localData.lastJourney = [t, e, r];
  }
  getLastJourney() {
    return this.isLocalEmpty(this.localData.lastJourney) ? [] : this.localData.lastJourney;
  }
}
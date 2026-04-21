import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("ValentineHallBtnTrait")
export default class ValentineHallBtnTrait extends Trait {
  static traitKey = "ValentineHallBtn";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "ClassicBtn_updateUI"
    }, {
      event: "ClassicBtn_forceUpdate"
    }]);
  }
  isEffectActive() {
    var t = mj.getClassByName("ValentineModel"),
      e = mj.getClassByName("ComplexValentineTrait");
    return !!(e && e.getInstance() && e.getInstance().eventEnabled && t && t.getInstance()) && t.getInstance().isEffectActive();
  }
  onHallNmlBtn_forceUpdate(t, e) {
    this.updateHallNormalBtn(t.ins);
    e();
  }
  onHallNmlBtn_updateUI(t, e) {
    this.updateHallNormalBtn(t.ins);
    e();
  }
  onTravelBtn_forceUpdate(t, e) {
    this.updateHallTravelBtn(t.ins);
    e();
  }
  onTravelBtn_updateUI(t, e) {
    this.updateHallTravelBtn(t.ins);
    e();
  }
  onClassicBtn_updateUI(t, e) {
    this.updateHallClassicBtn(t.ins);
    e();
  }
  onClassicBtn_forceUpdate(t, e) {
    this.updateHallClassicBtn(t.ins);
    e();
  }
  updateHallNormalBtn(t) {
    if (cc.isValid(t.node)) {
      var e = cc.find("BgBtn", t.node),
        n = cc.find("BgBtn/Label", t.node);
      if (this.isEffectActive()) {
        BaseSprite.refreshWithNode(e, "texture/com_btn_orange", false, true, "r_valentineHallBtn");
        this.changeLabelColor(n, cc.color(255, 248, 242, 255));
      } else {
        BaseSprite.refreshWithNode(e, "texture/win/result_btn_up", false, true);
        this.changeLabelColor(n);
      }
    }
  }
  updateHallTravelBtn(t) {
    if (cc.isValid(t.node)) {
      var e = cc.find("Root/BgBtn", t.node),
        n = cc.find("Root/Timer/Time", t.node),
        o = cc.find("Root/Timer/Icon", t.node),
        r = cc.find("Root/Title", t.node),
        i = cc.find("Root/Lock/Desc", t.node);
      if (this.isEffectActive()) {
        this.changeLabelColor(n, cc.color(243, 157, 207, 255));
        this.changeLabelColor(i, cc.color(255, 248, 242, 255));
        this.changeLabelColor(r, cc.color(255, 222, 248, 255));
        BaseSprite.refreshWithNode(e, "texture/com_btn_pink", false, true, "r_valentineHallBtn");
        BaseSprite.refreshWithNode(o, "texture/main_img_time", false, true, "r_valentineHallBtn");
      } else {
        this.changeLabelColor(n);
        this.changeLabelColor(i);
        this.changeLabelColor(r);
        BaseSprite.refreshWithNode(e, "texture/boxReward/reward_btn_blue_up", false, true);
        BaseSprite.refreshWithNode(o, "texture/hall/main_img_time", false, true);
      }
    }
  }
  updateHallClassicBtn(t) {
    if (cc.isValid(t.node)) {
      var e = cc.find("BgBtn", t.node),
        n = cc.find("BgBtn/Label", t.node);
      if (this.isEffectActive()) {
        this.changeLabelColor(n, cc.color(255, 222, 248, 255));
        BaseSprite.refreshWithNode(e, "texture/com_btn_pink", false, true, "r_valentineHallBtn");
      } else {
        this.changeLabelColor(n);
        BaseSprite.refreshWithNode(e, "texture/boxReward/reward_btn_blue_up", false, true);
      }
    }
  }
  changeLabelColor(t, e) {
    var o = ValentineHallBtnTrait.traitKey + "_originalColor_";
    t[o] || (t[o] = t.color);
    (e = e || t[o]) && this.setLabelColor(t, e);
  }
  @mj.traitEvent("ValHallBtn_setLabCol")
  setLabelColor(t, e) {
    if (!cc.isValid(t)) return false;
    t.color = e;
    return true;
  }
}
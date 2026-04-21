import I18NComponent from '../../../Scripts/component/I18NComponent';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Tile2HighlightTrait")
export default class Tile2HighlightTrait extends Trait {
  static traitKey = "Tile2Highlight";
  onJourney_doCreateBtn(e, t) {
    e.args[3] = "prefabs/HallTravelLeftBtn";
    e.args[4] = "l_tile2Highlight";
    t();
  }
  onTravelBtn_changeLock(e, t) {
    var i = e.ins;
    i.lockNode.active = true;
    i.titleNode.active = false;
    GameUtils.playSpine(i.lockAnim, "in", false, function () {
      i.lockAnim.setAnimation(0, "init", false);
    });
    i.lockDesc.string = "Lv." + i.unlockLevel;
    t({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onHTravelBtnRP_getDotPos(e, t) {
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: cc.v2(55, 78)
    });
  }
  onTravelBtn_updNSeasonTime(e, t) {
    t({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTravelBtn_updRemainTime(e, t) {
    var i = e.ins,
      n = e.args[0];
    i.timerNode.active = true;
    i.titleNode.active = false;
    var r = cc.find("Root/Timer/Icon", i.node),
      o = __read(GameUtils.getRemainTimeParts(n), 4),
      p = o[0],
      d = o[1],
      f = o[2],
      u = o[3],
      g = i.timerLabel.node.getComponent(I18NComponent);
    if (p > 0) {
      cc.isValid(r) && (r.active = true);
      I18NStrings.setText(i.timerLabel.node, p + "D", "DoubleTile_Trip_Time", [p]);
      g.enabled || (g.enabled = true);
    } else {
      cc.isValid(r) && (r.active = false);
      var v = function v(e) {
        return e.toString().padStart(2, "0");
      };
      i.timerLabel.string = v(d) + ":" + v(f) + ":" + v(u);
      if (g.enabled) {
        g.enabled = false;
        g.translateId = "";
        g.useOrigFont();
      }
    }
    t({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onHallVw_chgTheme(e, t) {
    var i = TravelGameModel.getInstance();
    if (i.isUnlocked()) {
      var n = !i.isSessionActive();
      if (!n) {
        var r = mj.getClassByName("PassedLevelTrait");
        r && r.getInstance() && r.getInstance().eventEnabled && (n = i.isComplete(i.getCurJourney()));
      }
      if (n) {
        e.args[0] = "Hall";
        t({
          isBreak: true
        });
      } else if (i.isFirstOpen()) t();else {
        e.args[0] = "Hall";
        t({
          isBreak: true
        });
      }
    } else {
      e.args[0] = "Hall";
      t({
        isBreak: true
      });
    }
  }
  onHallNmlBtn_updateUI(e, t) {
    var i = e.ins,
      n = cc.find("BgWood", i.node),
      r = cc.find("BgBtn", i.node),
      o = cc.find("BgBtn/Label", i.node).getComponent(cc.Label),
      a = cc.find("NormalBtnDiff", i.node),
      l = cc.find("BgNormalUp", i.node);
    cc.isValid(l) || (l = this.createBgNormalUp(i.node));
    n.setContentSize(cc.size(766, 242));
    r.setContentSize(cc.size(715, 198));
    i.node.setContentSize(cc.size(715, 198));
    this.fixDiffUI(a);
    o.fontSize = 102;
    o.lineHeight = 102;
    I18NStrings.setText(o.node, "Let's go", "LeaderBoard_Start_Btn_Jump");
    t();
  }
  createBgNormalUp(e) {
    var t = new cc.Node();
    t.name = "BgNormalUp";
    var i = t.addComponent(cc.Sprite);
    i.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    i.type = cc.Sprite.Type.SLICED;
    BaseSprite.refreshWithNode(t, "texture/hall/main_img_normal");
    e.addChild(t, -1);
    t.setPosition(0, 140);
    t.setContentSize(cc.size(262, 80));
    return t;
  }
  fixDiffUI(e) {
    if (cc.isValid(e)) {
      e.setContentSize(cc.size(766, 242));
      e.setPosition(0, 0);
      var t = cc.find("BgExpert", e),
        i = cc.find("BgHard", e),
        n = cc.find("BgExpertUp", e),
        r = cc.find("BgHardUP", e),
        o = cc.find("LabeUp", e);
      t.setContentSize(cc.size(766, 242));
      i.setContentSize(cc.size(766, 242));
      n.setContentSize(cc.size(262, 66));
      r.setContentSize(cc.size(262, 66));
      n.setPosition(0, 145);
      r.setPosition(0, 145);
      o.setPosition(0, 142);
      n.setSiblingIndex(0);
      r.setSiblingIndex(1);
      o.getComponent(cc.Label).fontSize = 42;
    }
  }
  onNorBtnDiffUI_showExpert(e, t) {
    var i = e.ins,
      n = cc.find("BgNormalUp", i.node.parent);
    cc.isValid(n) && (n.active = false);
    var r = UserModel.getInstance().getMainGameData().getLevelId();
    I18NStrings.setText(i.labelUpNode, "Expert Level " + r, "DoubleTile_MainType_Expert", [r]);
    i.labelUpNode.color = cc.color(220, 210, 187);
    t();
  }
  onNorBtnDiffUI_showHard(e, t) {
    var i = e.ins,
      n = cc.find("BgNormalUp", i.node.parent);
    cc.isValid(n) && (n.active = false);
    var r = UserModel.getInstance().getMainGameData().getLevelId();
    I18NStrings.setText(i.labelUpNode, "Hard Level " + r, "DoubleTile_MainType_Hard", [r]);
    i.labelUpNode.color = cc.color(219, 211, 221);
    t();
  }
  onNorBtnDiffUI_showNormal(e, t) {
    var i = e.ins;
    i.labelUpNode.active = true;
    var n = cc.find("BgNormalUp", i.node.parent);
    cc.isValid(n) && (n.active = true);
    var r = UserModel.getInstance().getMainGameData().getLevelId();
    I18NStrings.setText(i.labelUpNode, "Level " + r, "MahjongTiles_MainPage_TargetLevel", [r]);
    i.labelUpNode.color = cc.color(243, 196, 153);
    t();
  }
  onNorBtnDiffUI_updateBgW(e, t) {
    var i = e.ins,
      n = cc.find("BgNormalUp", i.node.parent);
    cc.isValid(n) && (n.width = i.labelUpNode.width + 50);
    t();
  }
  onDailyCollVw_onLoad(e, t) {
    var i = e.ins.node;
    if (cc.isValid(i)) {
      var n = cc.find("btn_change/btn_journey/label", i);
      n && I18NStrings.setText(n, "Trip", "DoubleTile_Trip");
      var r = cc.find("btn_change/lab_journey", i);
      r && I18NStrings.setText(r, "Trip", "DoubleTile_Trip");
    }
    t();
  }
}
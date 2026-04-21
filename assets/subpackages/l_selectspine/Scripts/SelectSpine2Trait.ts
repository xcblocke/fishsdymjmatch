import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import TravelGameData from '../../../Scripts/core/simulator/data/TravelGameData';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SelectSpine2Trait")
export default class SelectSpine2Trait extends Trait {
  static traitKey = "SelectSpine2";
  onLoad() {
    super.onLoad.call(this);
  }
  getPicConfig(e) {
    return 1 == e ? {
      bgPic: "texture/selecttex/gameplay_select_mj_greenLight",
      spine: "spine/selectspine/gameplay_selected_efx",
      animation: "init_green"
    } : 2 == e ? {
      bgPic: "texture/selecttex/gameplay_select_mj_purpleLight",
      spine: "spine/selectspine/gameplay_selected_efx",
      animation: "init_purple"
    } : {
      bgPic: "texture/selecttex/gameplay_select_mj_redLight",
      spine: "spine/selectspine/gameplay_selected_efx",
      animation: "init_red"
    };
  }
  onMainGameCtrl_initRes(e, t) {
    var i = e.ins;
    if (i && i.addPreloadRes) {
      i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
      i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
    }
    t();
  }
  getType2(e) {
    var t = UserModel.getInstance().getGameDataByGameType(e);
    if (e == MjGameType.Normal) {
      if (1 == this.localData[e]) return this.getPicConfig(1);
      var i = t.getLevelId(),
        a = ExtractTool.getInstance().isHardUI(i);
      if (ExtractTool.getInstance().isExpertUI(i)) return this.getPicConfig(3);
      if (a) return this.getPicConfig(2);
    } else if (e == MjGameType.Travel) {
      if (1 == this.localData[e]) return this.getPicConfig(1);
      var r = TravelGameModel.getInstance();
      i = TravelGameData.getInstance().getLevelId();
      if (r.isHardLevel(i)) return this.getPicConfig(2);
    }
  }
  onBaseTileNode_rsSelectEff(e, t) {
    var i = e.ins,
      a = i.imgSelectedCardBg,
      r = i.effectSelected,
      n = i.context.gameType,
      s = this.getType2(n);
    if (s && s.bgPic && s.spine && s.animation) {
      if (cc.isValid(a) && cc.isValid(r)) {
        var o = BaseSprite.refreshWithNode(a, s.bgPic, false, false, "l_selectspine");
        o.node.getComponent(cc.Sprite).trim = false;
        o.node.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
        o.node.setScale(i.info.tileObject.layoutScale);
        BaseSpine.refreshWithNode(r, s.spine, "l_selectspine").setAnimation(s.animation, -1);
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      } else t();
    } else t();
  }
  onAdMgr_videoSuccess(e, t) {
    var i = UserModel.getInstance().getCurrentGameType();
    i && (this.localData[i] = 1);
    t();
  }
  onGsListener_onNewGame(e, t) {
    var i,
      a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
    a && (this.localData[a] = 0);
    t();
  }
  onGsListener_onReplayGame(e, t) {
    var i,
      a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
    a && (this.localData[a] = 0);
    t();
  }
}
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SelectSpine3Trait")
export default class SelectSpine3Trait extends Trait {
  static traitKey = "SelectSpine3";
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
  onGsListener_onReplayGame(e, t) {
    var i,
      a = null === (i = null == e ? void 0 : e.args) || void 0 === i ? void 0 : i[0];
    if (a && a == MjGameType.DailyChallenge) {
      var r = UserModel.getInstance().getGameDataByGameType(a);
      this.localData[a] = r.getDailyChallengeTimestamp();
    }
    t();
  }
  onMainGameCtrl_initRes(e, t) {
    var i = e.ins;
    if (i && i.addPreloadRes) {
      i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
      i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
    }
    t();
  }
  getDailyIdByYearMonth(e, t) {
    var i,
      a,
      r = DataReader.getList(ConfigType.daily_challenge);
    try {
      for (var n = __values(r), o = n.next(); !o.done; o = n.next()) {
        var c = o.value;
        if (c.Year === e && c.Month === t) return c.ID;
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (a = n.return) && a.call(n);
      } finally {
        if (i) throw i.error;
      }
    }
  }
  getDailyModel() {
    var e = mj.getClassByName("DailyModel");
    return null == e ? void 0 : e.getInstance();
  }
  getFile(e) {
    var t;
    if (e != MjGameType.DailyChallenge) {
      if (UserModel.getInstance().getGameDataByGameType(e).getReplayCount() > 1) return this.getPicConfig(1);
    } else {
      var i = UserModel.getInstance().getGameDataByGameType(e).getDailyChallengeTimestamp();
      if (i) {
        var a = i.split("-"),
          r = parseInt(a[0]),
          n = parseInt(a[1]),
          s = parseInt(a[2]),
          l = this.getDailyIdByYearMonth(r, n);
        if (null != l && 3 == (null === (t = this.getDailyModel()) || void 0 === t ? void 0 : t.getDayStatus(l, s))) return this.getPicConfig(1);
        if (i == this.localData[e]) return this.getPicConfig(1);
      }
    }
  }
  onBaseTileNode_rsSelectEff(e, t) {
    var i = e.ins,
      a = i.imgSelectedCardBg,
      r = i.effectSelected,
      n = i.context.gameType,
      s = this.getFile(n);
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
}
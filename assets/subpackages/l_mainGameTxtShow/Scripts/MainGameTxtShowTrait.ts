import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MainGameTxtShowTrait")
export default class MainGameTxtShowTrait extends Trait {
  _preOpacitys = Object.create(null);
  notHideNames = ["lblDate", "labelMatch", "levelDesc", "nodeScore"];
  static traitKey = "MainGameTxtShow";
  static TOP_NODE_NAMES = ["levelDesc", "labelMatch", "lblDate", "labelLevel", "labelCanMatchNum", "nodeScore"];
  onLoad() {
    super.onLoad.call(this);
  }
  isSupportedGameType(e) {
    return e === MjGameType.Normal || e === MjGameType.DailyChallenge;
  }
  setTopTextVisible(e, t, i) {
    var a, r;
    if (e) try {
      for (var l = __values(MainGameTxtShowTrait.TOP_NODE_NAMES), c = l.next(); !c.done; c = l.next()) {
        var p = c.value,
          u = e.getChildByName(p);
        u && this.setNodeOpacity(p, u, t, i);
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (r = l.return) && r.call(l);
      } finally {
        if (a) throw a.error;
      }
    }
  }
  @mj.traitEvent("MGTxtShow_updateMatchHide")
  updateMatchHide(e) {
    if (cc.isValid(e)) {
      var t = true,
        o = mj.getClassByName("MainGameMatchNumTrait"),
        i = null == o ? void 0 : o.getInstance();
      true !== (null == i ? void 0 : i.eventEnabled) && (t = false);
      e.active = t;
      e.opacity = t ? 255 : 0;
    }
  }
  @mj.traitEvent("MGTxtShow_canChgActive")
  isCanChangeActive() {
    return true;
  }
  @mj.traitEvent("MGTxtShow_setNodeOpacity")
  setNodeOpacity(e, t, o, i) {
    var a;
    if (this.isCanChangeActive(e, o, i)) {
      var r = null;
      "nodeScore" == e && (r = t.getChildByName("scoreItem"));
      if (i == MjGameType.DailyChallenge && "levelDesc" == e || i == MjGameType.Normal && "lblDate" == e) t.opacity = 0;else if (o) {
        t.opacity = null !== (a = this._preOpacitys[e]) && void 0 !== a ? a : 255;
        r && (r.opacity = 255);
        "labelCanMatchNum" !== e && "labelMatch" !== e || this.updateMatchHide(t);
      } else {
        void 0 === this._preOpacitys[e] && (this._preOpacitys[e] = t.opacity);
        if (-1 == this.notHideNames.indexOf(e)) t.opacity = 0;else {
          t.active = true;
          "labelCanMatchNum" !== e && "labelMatch" !== e || this.updateMatchHide(t);
        }
        r && (r.opacity = 0);
      }
    }
  }
  onMainGRTop_applyTSCfg(e, t) {
    var o,
      i,
      a,
      r,
      n,
      l = null === (o = e.args) || void 0 === o ? void 0 : o[0];
    if (this.isSupportedGameType(null == l ? void 0 : l.gameType)) {
      var u = UserModel.getInstance().getGameDataByGameType(MjGameType.Normal),
        s = null !== (n = null !== (a = null === (i = null == u ? void 0 : u.getCurrentLevelId) || void 0 === i ? void 0 : i.call(u)) && void 0 !== a ? a : null === (r = null == u ? void 0 : u.getLevelId) || void 0 === r ? void 0 : r.call(u)) && void 0 !== n ? n : null;
      if ("number" != typeof s || s <= 1) t();else {
        var d = (null == l ? void 0 : l.topRootNode) || null;
        this.setTopTextVisible(d, false, null == l ? void 0 : l.gameType);
        t();
      }
    } else t();
  }
  onEnterAniBhv_startPlay(e, t) {
    var o,
      i = e.ins,
      a = null === (o = null == i ? void 0 : i.context) || void 0 === o ? void 0 : o.gameView;
    if (this.isSupportedGameType(null == a ? void 0 : a.gameType)) {
      var r = null == a ? void 0 : a.gameUI,
        n = null == r ? void 0 : r.node;
      if (n) {
        var l = n.getChildByName("nodeTop");
        l && this.setTopTextVisible(l, true, null == a ? void 0 : a.gameType);
      }
      t();
    } else t();
  }
}
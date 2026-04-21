import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import MatchDownLabel from './MatchDownLabel';
var p = ["levelDesc", "labelMatch", "lblDate", "labelLevel", "labelCanMatchNum", "nodeScore/label", "btnBack", "lblDateDesc"];
var d = new cc.Vec2(0, -112);
@mj.trait
@mj.class("MatchDownTrait")
export default class MatchDownTrait extends Trait {
  static traitKey = "MatchDown";
  isSupportedGameType(e) {
    var t, o;
    return -1 !== (null !== (o = null === (t = this.traitData) || void 0 === t ? void 0 : t.gameType) && void 0 !== o ? o : [MjGameType.Normal, MjGameType.DailyChallenge]).indexOf(e);
  }
  onMainGameCtrl_initRes(e, t) {
    var o = e.ins;
    if (this.isSupportedGameType(o.gameType)) {
      o.addPreloadRes("Prefab", ["l_matchDown:prefabs/matchDown"]);
      t();
    } else t();
  }
  onMainGmVw_initCntBlockNode(e, t) {
    var o = e.ins;
    if (this.isSupportedGameType(o.gameType)) {
      this.hideNodes(o.topRootNode);
      this.scaleScore(o.topRootNode);
      this.createMatchDownLabel(o);
      t();
    } else t();
  }
  createMatchDownLabel(e) {
    if (cc.isValid(e) && cc.isValid(e.bottomRootNode)) {
      var t = e.createUISync(MatchDownLabel);
      if (cc.isValid(t)) {
        t.setPosition(d);
        t.name = "MatchDownLabel";
        e.bottomRootNode.addChild(t);
        var o = t.getComponent(MatchDownLabel);
        if (cc.isValid(o)) {
          o.updateCount(0);
          t.active = false;
        }
      }
    }
  }
  onMGTxtShow_updateMatchHide(e, t) {
    var o = UserModel.getInstance().getCurrentGameType();
    if (this.isSupportedGameType(o)) {
      t({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      t();
    }
  }
  onMGTxtShow_setNodeOpacity(e, t) {
    var o,
      a = UserModel.getInstance().getCurrentGameType();
    if (this.isSupportedGameType(a)) {
      var i = null === (o = e.args) || void 0 === o ? void 0 : o[0];
      if (-1 != p.indexOf(i)) {
        t({
          returnType: TraitCallbackReturnType.jump
        });
      } else {
        t();
      }
    } else t();
  }
  hideNodes(e) {
    var t, o;
    if (cc.isValid(e)) try {
      for (var a = __values(p), i = a.next(); !i.done; i = a.next()) {
        var n = i.value,
          c = cc.find(n, e);
        if (cc.isValid(c)) {
          c.opacity = 0;
          c.active = false;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = a.return) && o.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  scaleScore(e) {
    if (cc.isValid(e)) {
      var t = cc.find("nodeScore/scoreItem/lbl_normal", e);
      if (cc.isValid(t)) {
        var o = t.getComponent(cc.Label);
        if (o) {
          o.fontSize = 66;
          o.lineHeight = 70;
        }
      }
    }
  }
  onUpdateMatchNumBhv_start(e, t) {
    var o,
      a,
      i,
      n,
      r,
      c = null === (o = e.ins.context) || void 0 === o ? void 0 : o.gameType;
    if (this.isSupportedGameType(c)) {
      var l = null === (a = e.args) || void 0 === a ? void 0 : a[0],
        s = null !== (n = null === (i = null == l ? void 0 : l.data) || void 0 === i ? void 0 : i.canMatchCardPairNum) && void 0 !== n ? n : 0,
        p = null === (r = e.ins.context) || void 0 === r ? void 0 : r.gameView;
      if (cc.isValid(p) && cc.isValid(p.bottomRootNode)) {
        var d = p.bottomRootNode.getChildByName("MatchDownLabel");
        if (cc.isValid(d)) {
          var f = d.getComponent(MatchDownLabel);
          if (cc.isValid(f)) {
            f.updateCount(s);
            t();
          } else t();
        } else t();
      } else t();
    } else t();
  }
  onEnterAniBhv_startPlay(e, t) {
    var o,
      a,
      i = null === (o = e.ins.context) || void 0 === o ? void 0 : o.gameType;
    if (this.isSupportedGameType(i)) {
      var n = null === (a = e.ins.context) || void 0 === a ? void 0 : a.gameView;
      if (cc.isValid(n) && cc.isValid(n.bottomRootNode)) {
        var r = n.bottomRootNode.getChildByName("MatchDownLabel");
        if (cc.isValid(r)) {
          r.active = true;
          t();
        } else t();
      } else t();
    } else t();
  }
  onGmLtApt_getBtmNOffsetY(e, t) {
    var o = UserModel.getInstance().getCurrentGameType();
    if (this.isSupportedGameType(o)) {
      t({
        returnType: TraitCallbackReturnType.return,
        returnVal: 86
      });
    } else {
      t();
    }
  }
  onGameUI_updateDCDate(e, t) {
    var o = UserModel.getInstance().getCurrentGameType();
    if (this.isSupportedGameType(o)) {
      t({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      t();
    }
  }
  onRwdComboBhv_bonusAud(e, t) {
    var o,
      a,
      i = UserModel.getInstance().getCurrentGameType();
    if (this.isSupportedGameType(i)) {
      this.hideMatchNum(null === (a = null === (o = e.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameView);
      t();
    } else t();
  }
  onFullComboBhv_playAudio(e, t) {
    var o,
      a,
      i = UserModel.getInstance().getCurrentGameType();
    if (this.isSupportedGameType(i)) {
      this.hideMatchNum(null === (a = null === (o = e.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameView);
      t();
    } else t();
  }
  hideMatchNum(e) {
    if (cc.isValid(e) && cc.isValid(e.bottomRootNode)) {
      var t = e.bottomRootNode.getChildByName("MatchDownLabel");
      cc.isValid(t) && (t.active = false);
    }
  }
}
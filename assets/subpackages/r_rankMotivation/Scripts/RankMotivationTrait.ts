import Trait from '../../../Scripts/framework/trait/Trait';
import RankMotivationUI from './RankMotivationUI';
@mj.trait
@mj.class("RankMotivationTrait")
export default class RankMotivationTrait extends Trait {
  static traitKey = "RankMotivation";
  static BUNDLE_NAME = "r_rankMotivation";
  get increaseRankCount() {
    return null != this._traitData.increaseRankCount ? this._traitData.increaseRankCount : 1;
  }
  onMainGameCtrl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("Prefab", [RankMotivationTrait.BUNDLE_NAME + ":prefabs/rankMotivation"]);
  }
  onRankBonusVw_show(t, e) {
    var n;
    e();
    var r = mj.getClassByName("RankModel");
    if (r && r.getInstance()) {
      var i = r.getInstance().getRankGameData(),
        a = r.getInstance().getSelfRank();
      if (i) {
        for (var s = a, l = 0; l < (null === (n = i.rankList) || void 0 === n ? void 0 : n.length); l++) {
          var f = i.rankList[l];
          if (i.joinActInfo.score >= f.score) {
            s = l + 1;
            break;
          }
        }
        var p = a - s;
        if (!(p < this.increaseRankCount)) {
          var u = t.ins._timeLabelNode;
          u.getComponent(cc.Label).fontSize = 30;
          u.color = new cc.Color().fromHEX("#89512a");
          var d = t.ins.node,
            _ = t.ins._titleNode,
            v = t.ins._timeNode;
          _.getSiblingIndex();
          RankMotivationUI.createUI().then(function (t) {
            if (cc.isValid(t) && cc.isValid(d) && cc.isValid(_) && cc.isValid(v)) {
              t.setSiblingIndex(-1);
              d.addChild(t);
              t.getComponent(RankMotivationUI).updateUI(_, v, p);
            }
          }).catch(function (t) {
            console.error("[" + RankMotivationTrait.traitKey + "] 游戏内创建RankMotivationUI失败:" + ((null == t ? void 0 : t.message) || "RankMotivationUI创建失败"));
          });
        }
      }
    }
  }
  onRkBnsWinRate_show(t, e) {
    for (var o = t.ins._barLabelNodes, n = 0; n < o.length; n++) {
      var r = o[n];
      r[0].getComponent(cc.Label).fontSize = 52;
      r[1].getComponent(cc.Label).fontSize = 52;
    }
    e();
  }
}
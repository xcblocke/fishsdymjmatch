import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import Trait from '../../../Scripts/framework/trait/Trait';
import { Info2Key } from './Utils';
import RankAvatar from './RankAvatar';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import AvatarCollectModel, { Level2MaxString } from './AvatarCollectModel';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import { DotGameUserInfo } from '../../../Scripts/DGameUserInfo';
@mj.trait
@mj.class("AvatarCollectionTrait")
export default class AvatarCollectionTrait extends Trait {
  _rankAvatarNode = null;
  selectAvatarId = -1;
  static traitKey = "AvatarCollection";
  onLoad() {
    super.onLoad.call(this);
    AvatarCollectModel.getInstance().setIsAvatarCollectionOpen(true);
  }
  onRankVw_show(t, e) {
    e();
    if (!t.ins._isOldData) {
      if (cc.isValid(this._rankAvatarNode)) {
        this._rankAvatarNode.destroy();
        this._rankAvatarNode = null;
      }
      var a = AvatarCollectModel.getInstance().getRankModel();
      if (AvatarCollectModel.getInstance().isRankUnlock() && a) {
        var r = UserModel.getInstance().getRankCardResName(),
          n = CardUtil.getAtlasPathAndBundleName(r),
          o = n.path,
          l = n.bundleName,
          p = n.fromAtlas,
          u = Info2Key({
            bundleName: l,
            path: o,
            fromAtlas: p
          }),
          f = t.ins,
          h = AvatarCollectModel.getInstance().getData();
        if (u in h.collectedCardMap) {
          var v = h.collectedCardMap[u];
          if (v.curCount < v.maxCount) {
            this.addRankAvatar(f.node, {
              bundleName: l,
              path: o,
              fromAtlas: p
            }, v);
          } else {
            a.getPeriodCount() == v.finishPeriod && this.addRankAvatar(f.node, {
              bundleName: l,
              path: o,
              fromAtlas: p
            }, v);
          }
        }
      }
    }
  }
  getLevelMaxCountString() {
    return null == this._traitData.maxCountString ? Level2MaxString : "string" == typeof this._traitData.maxCountString ? this._traitData.maxCountString : "object" == typeof this._traitData.maxCountString && Array.isArray(this._traitData.maxCountString) && this._traitData.maxCountString.length > 0 ? this._traitData.maxCountString[0] : Level2MaxString;
  }
  getMaxCountByCurrentLevel() {
    for (var t = AvatarCollectModel.getInstance().getCurrentNormalLevel(), e = this.getLevelMaxCountString().split(";"), a = 0, r = e.length - 1; r >= 0; r--) {
      var n = e[r],
        o = n.split(",")[0],
        i = n.split(",")[1];
      if (t >= parseInt(o)) {
        a = parseInt(i);
        break;
      }
    }
    return a;
  }
  onHallVw_initBtns(t, e) {
    e();
    var a = AvatarCollectModel.getInstance().getRankModel();
    if (a) {
      var r = AvatarCollectModel.getInstance().getData(),
        n = UserModel.getInstance().getRankCardResName(),
        o = CardUtil.getAtlasPathAndBundleName(n),
        l = o.path,
        p = o.bundleName,
        u = o.fromAtlas,
        v = Info2Key({
          bundleName: p,
          path: l,
          fromAtlas: u
        });
      if (!(v in r.collectedCardMap)) {
        var y = null;
        for (var g in r.collectedCardMap) {
          var _ = r.collectedCardMap[g];
          if (_.resName == n) {
            var m = GameUtils.deepClone(_);
            m.key = v;
            m.headId = AvatarCollectModel.getInstance().getHeadId(n, p);
            r.collectedCardMap[v] = m;
            0 == _.curCount && (y = g);
            DotGameUserInfo.dotAvatarActive({
              activity_period: a.getPeriodCount(),
              activity_card_id: v,
              avatar_need_count: m.maxCount,
              main_level: AvatarCollectModel.getInstance().getCurrentNormalLevel()
            });
          }
        }
        y && delete r.collectedCardMap[y];
        r.collectedCardMap = r.collectedCardMap;
      }
    }
  }
  onRankModel_addCount(t, e) {
    e();
    var a = t.ins,
      r = AvatarCollectModel.getInstance().getData(),
      n = [];
    for (var o in r.collectedCardMap) 0 == r.collectedCardMap[o].curCount && n.push(o);
    if (n.length > 0) {
      n.forEach(function (t) {
        delete r.collectedCardMap[t];
      });
      r.collectedCardMap = r.collectedCardMap;
    }
    var l = UserModel.getInstance().getRankCardResName(),
      p = CardUtil.getAtlasPathAndBundleName(l),
      u = p.path,
      f = p.bundleName,
      v = p.fromAtlas,
      y = Info2Key({
        bundleName: f,
        path: u,
        fromAtlas: v
      });
    if (!(y in r.collectedCardMap)) {
      var g = this.getMaxCountByCurrentLevel();
      if (g > 0) {
        r.collectedCardMap[y] = {
          curCount: 0,
          maxCount: g,
          startPeriod: a.getPeriodCount(),
          finishPeriod: -1,
          key: y,
          headId: AvatarCollectModel.getInstance().getHeadId(l, f),
          resName: l,
          isPlayedInUserInfo: false,
          isPlayedInRank: false
        };
        r.collectedCardMap = r.collectedCardMap;
      }
      DotGameUserInfo.dotAvatarActive({
        activity_period: a.getPeriodCount(),
        activity_card_id: y,
        avatar_need_count: g,
        main_level: AvatarCollectModel.getInstance().getCurrentNormalLevel()
      });
    }
  }
  onClearBhv_prepareClear(t, e) {
    var a = this;
    t.args[0].forEach(function (t) {
      var e = t.cardUniqueInfo;
      a.checkClearCard(e);
    });
    AvatarCollectModel.getInstance().getData();
    e();
  }
  addRankAvatar(t, e, r) {
    var n = this;
    RankAvatar.createUI().then(function (a) {
      if (cc.isValid(a) && cc.isValid(t)) {
        a.parent = t;
        a.getComponent(RankAvatar).updateUI(e, r);
        if (r.curCount == r.maxCount && !r.isPlayedInRank) {
          r.isPlayedInRank = true;
          var o = AvatarCollectModel.getInstance().getData();
          o.collectedCardMap[r.key] = r;
          o.collectedCardMap = o.collectedCardMap;
          a.getComponent(RankAvatar).playFinishAnim(r);
        }
        n._rankAvatarNode = a;
      }
    }).catch(function (t) {
      console.error("[" + AvatarCollectionTrait.traitKey + "] 排行榜内创建头像收集预设失败:" + ((null == t ? void 0 : t.message) || "RankAvatar加载失败"));
    });
  }
  checkClearCard(t) {
    var e = AvatarCollectModel.getInstance().getRankModel();
    if (AvatarCollectModel.getInstance().isRankUnlock() && e) {
      var a = UserModel.getInstance().getRankCardResName(),
        r = CardUtil.getAtlasPathAndBundleName(a),
        n = r.path,
        o = r.bundleName,
        l = r.fromAtlas;
      if (t.bundleName == o && t.path == n && t.fromAtlas == l && -1 != AvatarCollectModel.getInstance().getHeadId(a, o)) {
        var p = Info2Key(t),
          f = AvatarCollectModel.getInstance().getData();
        if (p in f.collectedCardMap) {
          var v = f.collectedCardMap[p];
          if (v.curCount < v.maxCount) {
            v.curCount++;
            if (v.curCount >= v.maxCount) {
              var y = e.getPeriodCount();
              v.finishPeriod = y;
              ControllerManager.getInstance().pushViewByController("AvatarBannerController", {
                data: v,
                bgStyle: null,
                noBlock: true
              });
              DotGameUserInfo.dotAvatarCollect({
                activity_period: y,
                activity_card_id: p,
                avatar_need_count: v.maxCount,
                main_level: AvatarCollectModel.getInstance().getCurrentNormalLevel()
              });
            }
            f.collectedCardMap[p] = v;
            f.collectedCardMap = f.collectedCardMap;
          }
        }
      }
    }
  }
}
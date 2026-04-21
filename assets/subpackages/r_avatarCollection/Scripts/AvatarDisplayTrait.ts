import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import Trait from '../../../Scripts/framework/trait/Trait';
import { Info2Key, Key2Info } from './Utils';
import AvatarItem from './AvatarItem';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import AvatarIcon from './AvatarIcon';
import AvatarCollectModel, { ID_BASE } from './AvatarCollectModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import { DotGameUserInfo, EAvatarButtonType } from '../../../Scripts/DGameUserInfo';
@mj.trait
@mj.class("AvatarDisplayTrait")
export default class AvatarDisplayTrait extends Trait {
  selectAvatarId = -1;
  static traitKey = "AvatarDisplay";
  onLoad() {
    super.onLoad.call(this);
    AvatarCollectModel.getInstance().setIsAvatarDisplayOpen(true);
  }
  onUsrInfoCtrl_avatarList(t, e) {
    var a = t.ins,
      r = t.args[0],
      n = a._tempSelectedAvatarId,
      i = null,
      s = r.findIndex(function (t) {
        return t.isSelected;
      });
    s >= 0 && (i = r.splice(s, 1)[0]);
    var p = null,
      d = [],
      f = [],
      h = [],
      v = UserModel.getInstance().getRankCardResName(),
      _ = CardUtil.getAtlasPathAndBundleName(v),
      m = _.path,
      C = _.bundleName,
      I = _.fromAtlas,
      A = Info2Key({
        bundleName: C,
        path: m,
        fromAtlas: I
      }),
      b = AvatarCollectModel.getInstance().getData();
    for (var w in b.collectedCardMap) {
      var N = b.collectedCardMap[w],
        B = Key2Info(w),
        O = B.path.split("/").pop(),
        R = AvatarCollectModel.getInstance().getHeadId(O, B.bundleName);
      if (-1 !== R) {
        var S = Object.assign(Object.assign({}, N), {
          key: w,
          headId: R
        });
        if (S.headId == n) {
          p = S;
        } else {
          if (-1 === N.finishPeriod) {
            if (N.key == A) {
              h.push(S);
            } else {
              f.push(S);
            }
          } else {
            d.push(S);
          }
        }
      }
    }
    d.sort(function (t, e) {
      return e.finishPeriod - t.finishPeriod;
    });
    f.sort(function (t, e) {
      return e.curCount - t.curCount;
    });
    var P = [];
    if (i) {
      P.push(i);
    } else {
      p && P.push({
        id: p.headId,
        icon: Key2Info(p.key).path,
        isSelected: true,
        type: "avatar"
      });
    }
    h.forEach(function (t) {
      P.push({
        id: t.headId,
        icon: Key2Info(t.key).path,
        isSelected: false,
        type: "avatar"
      });
    });
    d.forEach(function (t) {
      P.push({
        id: t.headId,
        icon: Key2Info(t.key).path,
        isSelected: false,
        type: "avatar"
      });
    });
    P.push.apply(P, [...r]);
    AvatarCollectModel.getInstance().isAvatarCollectionOpen() && f.forEach(function (t) {
      P.push({
        id: t.headId,
        icon: Key2Info(t.key).path,
        isSelected: false,
        type: "avatar"
      });
    });
    t.args[0] = P;
    e();
  }
  onUsrInfoCell_loadAvatar(t, e) {
    var r = t.ins,
      n = t.args[0],
      o = t.args[1],
      i = r._itemNodes[n],
      s = i.headImg.node,
      l = s.getChildByName("AvatarItem");
    cc.isValid(l) && l.destroy();
    if (o.id < ID_BASE) e();else if ((null == o ? void 0 : o.icon) && (null == i ? void 0 : i.headImg)) {
      var c = AvatarCollectModel.getInstance().getData(),
        p = Object.values(c.collectedCardMap).find(function (t) {
          return t.headId == o.id;
        });
      if (p) {
        e({
          returnType: TraitCallbackReturnType.jump
        });
        AvatarItem.createUI().then(function (t) {
          if (cc.isValid(t) && cc.isValid(s)) {
            s.active = true;
            t.parent = s;
            t.getComponent(AvatarItem).updateUI(p);
            if (p.curCount == p.maxCount && !p.isPlayedInUserInfo) {
              p.isPlayedInUserInfo = true;
              var e = AvatarCollectModel.getInstance().getData();
              e.collectedCardMap[p.key] = p;
              e.collectedCardMap = e.collectedCardMap;
              t.getComponent(AvatarItem).playFinishAnim(p);
            }
          }
        }).catch(function (t) {
          console.error("[" + AvatarDisplayTrait.traitKey + "] 创建头像收集预设失败:" + ((null == t ? void 0 : t.message) || "AvatarItem加载失败"));
        });
      } else e();
    } else e();
  }
  onUISetHome_refreshAvator(t, e) {
    e();
    var r = t.ins._avatorIcon,
      n = AvatarDisplayTrait.traitKey + "_onUISetHome_refreshAvator",
      o = r[n];
    if (cc.isValid(o)) {
      o.destroy();
      r[n] = null;
    }
    var i = UserModel.getInstance().getAvatarId() || 1;
    if (i > ID_BASE) {
      var s = AvatarCollectModel.getInstance().getHeadInfo(i);
      s && AvatarIcon.createUI().then(function (t) {
        if (cc.isValid(t) && cc.isValid(r)) {
          r.active = true;
          t.parent = r;
          t.setSiblingIndex(0);
          t.getComponent(AvatarIcon).updateUI(s);
          r[n] = t;
        }
      });
    }
  }
  onUsrInfoVw_refreshTop(t, e) {
    e();
    var r = t.ins,
      n = r.selfHeadImg.node,
      o = r.saveBtn.node,
      i = cc.find("Background/Label", o),
      s = AvatarDisplayTrait.traitKey + "_onUsrInfoVw_refreshTop",
      l = n[s];
    if (cc.isValid(l)) {
      l.destroy();
      n[s] = null;
    }
    var p = null;
    this.selectAvatarId = -1 == this.selectAvatarId ? UserModel.getInstance().getAvatarId() || 1 : this.selectAvatarId;
    if (this.selectAvatarId > ID_BASE && (p = AvatarCollectModel.getInstance().getHeadInfo(this.selectAvatarId))) {
      AvatarIcon.createUI().then(function (t) {
        if (cc.isValid(t) && cc.isValid(n)) {
          n.active = true;
          t.parent = n;
          t.setSiblingIndex(0);
          t.getComponent(AvatarIcon).updateUI(p);
          n[s] = t;
        }
      });
      var u = UserModel.getInstance().getRankCardResName(),
        d = CardUtil.getAtlasPathAndBundleName(u),
        h = d.bundleName;
      d.path, d.fromAtlas;
      if (p.curCount >= p.maxCount) {
        I18NStrings.setText(i, "Save", "LeaderBoard_Profile_Btn_Save");
      } else {
        if (this.selectAvatarId == AvatarCollectModel.getInstance().getHeadId(u, h)) {
          I18NStrings.setText(i, "Go to Get", "Ranking_Avatar_Button_get");
        } else {
          I18NStrings.setText(i, "Coming Soon", "Ranking_Avatar_Button_cantget");
        }
      }
    } else I18NStrings.setText(i, "Save", "LeaderBoard_Profile_Btn_Save");
  }
  onUsrInfoVw_itemSelect(t, e) {
    e();
    var a = t.args[0];
    "avatar" === a.type && (this.selectAvatarId = a.id);
  }
  onUsrInfoVw_save(t, e) {
    var a,
      r = t.ins,
      n = AvatarCollectModel.getInstance().getRankModel(),
      o = AvatarCollectModel.getInstance().getHeadInfo(this.selectAvatarId);
    if (this.selectAvatarId > ID_BASE && o && o.curCount < o.maxCount) {
      if (UserModel.getInstance().isInGameView()) {
        null === (a = null == r ? void 0 : r.delegate) || void 0 === a || a.close();
      } else {
        ControllerManager.getInstance().pushViewByController("MainGameController", {}, function () {
          var t;
          cc.isValid(r) && (null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close());
        });
      }
      var i = UserModel.getInstance().getRankCardResName(),
        s = CardUtil.getAtlasPathAndBundleName(i),
        l = s.bundleName,
        p = (s.path, s.fromAtlas, AvatarCollectModel.getInstance().getHeadId(i, l));
      DotGameUserInfo.dotClickInfoPopup({
        activity_period: n ? n.getPeriodCount() : -1,
        avatar_need_count: o ? o.maxCount : -1,
        current_collect: o ? o.curCount : -1,
        main_level: AvatarCollectModel.getInstance().getCurrentNormalLevel(),
        activity_card_id: o ? o.key : "",
        button_type: this.selectAvatarId == p ? EAvatarButtonType.GoToGet : EAvatarButtonType.WaitReturn
      });
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      e();
      DotGameUserInfo.dotClickInfoPopup({
        activity_period: n ? n.getPeriodCount() : -1,
        avatar_need_count: o ? o.maxCount : -1,
        current_collect: o ? o.curCount : -1,
        main_level: AvatarCollectModel.getInstance().getCurrentNormalLevel(),
        activity_card_id: o ? o.key : "",
        button_type: EAvatarButtonType.Save
      });
    }
    this.selectAvatarId = -1;
    mj.EventManager.emit("msg_rankRefreshSelf");
  }
  onRankBonusItem_updAvatar(t, e) {
    var r = t.args[0],
      n = t.ins._avatarSprite.node,
      o = AvatarDisplayTrait.traitKey + "_onRankBonusItem_updAvatar";
    this.removeLastAvatarIcon(o, n, r);
    if (r < ID_BASE) e();else {
      this.checkAddAvatarIcon(o, n, r);
      e({
        returnType: TraitCallbackReturnType.jump
      });
    }
  }
  onRankItem_updAvatarFrame(t, e) {
    e();
    var r = t.ins._avatarSprite.node,
      n = t.args[0],
      o = AvatarDisplayTrait.traitKey + "_onRankItem_updAvatarFrame";
    this.removeLastAvatarIcon(o, r, n);
    this.checkAddAvatarIcon(o, r, n);
  }
  onRankVw_updAvatarFrame(t, e) {
    e();
    var r = t.args[0].node,
      n = t.args[2],
      o = AvatarDisplayTrait.traitKey + "_onRankVw_updAvatarFrame";
    this.removeLastAvatarIcon(o, r, n);
    this.checkAddAvatarIcon(o, r, n);
  }
  onInfoMgr_getAvatarId(t, e) {
    var a = AvatarCollectModel.getInstance().getDefaultAvatarList(),
      r = [...a],
      n = AvatarCollectModel.getInstance().getData().collectedCardMap;
    for (var o in n) {
      var i = n[o];
      (i.curCount > 0 || i.resName == UserModel.getInstance().getRankCardResName()) && r.push(i.headId);
    }
    var s = r[Math.floor(Math.random() * r.length)];
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: s
    });
  }
  removeLastAvatarIcon(t, e, a) {
    var r = e[t];
    if (r && r.avatarId != a && cc.isValid(r.node)) {
      r.node.destroy();
      e[t] = null;
    }
  }
  checkAddAvatarIcon(t, e, a) {
    if (a > ID_BASE) {
      var r = AvatarCollectModel.getInstance().getHeadInfo(a);
      r && AvatarIcon.createUI().then(function (n) {
        if (cc.isValid(n) && cc.isValid(e)) {
          e.active = true;
          n.parent = e;
          n.setSiblingIndex(0);
          n.getComponent(AvatarIcon).updateUI(r);
          e[t] = {
            node: n,
            avatarId: a
          };
        }
      });
    }
  }
}